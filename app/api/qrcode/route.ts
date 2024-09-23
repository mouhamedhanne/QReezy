import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/src/lib/prisma";
import QRCode from "qrcode";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
  }

  const userId = session.user.id;
  if (!userId) {
    return NextResponse.json(
      { message: "ID utilisateur non trouvé" },
      { status: 400 }
    );
  }

  try {
    const { email, website, phone, address } = await request.json();

    const qrCodeData = JSON.stringify({ email, website, phone, address });
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    const qrCode = await prisma.qRCode.create({
      data: {
        email,
        website,
        phone,
        address,
        userId,
        qrCodeImage,
      },
    });

    return NextResponse.json({ success: true, qrCode, qrCodeImage });
  } catch (error) {
    console.error("Erreur lors de la génération du QR code:", error);
    return NextResponse.json(
      { message: "Impossible de générer le QR code" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
  }

  const userId = session.user.id;
  if (!userId) {
    return NextResponse.json(
      { message: "ID utilisateur non trouvé" },
      { status: 400 }
    );
  }

  try {
    const qrCodes = await prisma.qRCode.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        website: true,
        phone: true,
        address: true,
        qrCodeImage: true,
      },
    });

    return NextResponse.json(qrCodes);
  } catch (error) {
    console.error("Erreur lors de la récupération des QR codes:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer les QR codes" },
      { status: 500 }
    );
  }
}

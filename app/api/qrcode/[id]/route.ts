import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/src/lib/prisma";
import QRCode from "qrcode";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    const { id } = params;

    const qrCodeData = JSON.stringify({ email, website, phone, address });
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    const updatedQRCode = await prisma.qRCode.update({
      where: { id, userId },
      data: {
        email,
        website,
        phone,
        address,
        qrCodeImage,
      },
    });

    return NextResponse.json({
      success: true,
      qrCode: updatedQRCode,
      qrCodeImage,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du QR code:", error);
    return NextResponse.json(
      { message: "Impossible de mettre à jour le QR code" },
      { status: 500 }
    );
  }
}

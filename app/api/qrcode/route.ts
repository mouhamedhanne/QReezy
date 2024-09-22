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

    // Générer le QR code
    const qrCodeData = JSON.stringify({ email, website, phone, address });
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    // Créer un enregistrement dans la base de données
    const qrCode = await prisma.qRCode.create({
      data: {
        email,
        website,
        phone,
        address,
        userId,
        qrCodeImage, // Stocker l'image du QR code dans la base de données
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

{
  /**
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

    // Générer le QR code
    const qrCodeData = JSON.stringify({ email, website, phone, address });
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    // Créer un enregistrement dans la base de données
    const qrCode = await prisma.qRCode.create({
      data: {
        email,
        website,
        phone,
        address,
        userId,
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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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

    // Générer le nouveau QR code
    const qrCodeData = JSON.stringify({ email, website, phone, address });
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    // Mettre à jour l'enregistrement dans la base de données
    const updatedQRCode = await prisma.qRCode.update({
      where: { id },
      data: {
        email,
        website,
        phone,
        address,
      },
    });

    return NextResponse.json({ success: true, qrCode: updatedQRCode, qrCodeImage });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du QR code:", error);
    return NextResponse.json(
      { message: "Impossible de mettre à jour le QR code" },
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
      orderBy: { createdAt: 'desc' }
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
     */
}

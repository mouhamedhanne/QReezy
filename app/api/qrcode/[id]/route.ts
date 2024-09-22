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

    // Générer le nouveau QR code
    const qrCodeData = JSON.stringify({ email, website, phone, address });
    const qrCodeImage = await QRCode.toDataURL(qrCodeData);

    // Mettre à jour l'enregistrement dans la base de données
    const updatedQRCode = await prisma.qRCode.update({
      where: { id, userId }, // Assurez-vous que l'utilisateur est propriétaire du QR code
      data: {
        email,
        website,
        phone,
        address,
        qrCodeImage, // Mettre à jour l'image du QR code
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

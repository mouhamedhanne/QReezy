import { NextRequest, NextResponse } from "next/server";

function parseQRContent(content: string): {
  type: string;
  parsedContent?: { [key: string]: string };
} {
  // Essayer de parser comme JSON
  try {
    const jsonContent = JSON.parse(content);
    return { type: "JSON", parsedContent: jsonContent };
  } catch (e) {
    // Ce n'est pas du JSON, continuer
  }

  // Vérifier si c'est une URL
  if (content.startsWith("http://") || content.startsWith("https://")) {
    return { type: "URL" };
  }

  // Vérifier si c'est un email
  if (content.includes("@") && content.includes(".")) {
    return { type: "Email" };
  }

  // Vérifier si c'est un numéro de téléphone
  if (/^\+?[\d\s-()]+$/.test(content)) {
    return { type: "Téléphone" };
  }

  // Vérifier si c'est une vCard
  if (content.startsWith("BEGIN:VCARD") && content.endsWith("END:VCARD")) {
    const parsedContent: { [key: string]: string } = {};
    content.split("\n").forEach((line) => {
      const [key, value] = line.split(":");
      if (key && value) {
        parsedContent[key] = value;
      }
    });
    return { type: "vCard", parsedContent };
  }

  // Si aucun type spécifique n'est reconnu
  return { type: "Texte" };
}

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();

    const { type, parsedContent } = parseQRContent(data);

    return NextResponse.json({
      type,
      content: data,
      parsedContent,
    });
  } catch (error) {
    console.error("Erreur lors du traitement du QR code:", error);
    return NextResponse.json(
      { message: "Impossible de traiter le QR code" },
      { status: 400 }
    );
  }
}

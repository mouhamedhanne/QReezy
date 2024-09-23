"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";

interface QRCodeData {
  id: string;
  email: string;
  website: string;
  phone: string;
  address: string;
  qrCodeImage?: string;
}

export default function QRCode() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState("");
  const [qrCodes, setQrCodes] = useState<QRCodeData[]>([]);
  const [currentQRCode, setCurrentQRCode] = useState<QRCodeData | null>(null);

  useEffect(() => {
    fetchQRCodes();
  }, []);

  const fetchQRCodes = async () => {
    try {
      const response = await fetch("/api/qrcode");
      if (response.ok) {
        const data: QRCodeData[] = await response.json();
        setQrCodes(data);
        if (data.length > 0) {
          setCurrentQRCode(data[0]);
          setEmail(data[0].email || "");
          setWebsite(data[0].website || "");
          setPhone(data[0].phone || "");
          setAddress(data[0].address || "");
          setQrCodeImage(data[0].qrCodeImage || "");
        }
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des QR codes:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/qrcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, website, phone, address }),
      });

      if (response.ok) {
        const result: { qrCode: QRCodeData; qrCodeImage: string } =
          await response.json();
        setQrCodeImage(result.qrCodeImage);
        setCurrentQRCode(result.qrCode);
        setQrCodes((prevCodes) => [result.qrCode, ...prevCodes]);
      } else {
        throw new Error("Erreur lors de la génération du QR code");
      }
    } catch (error) {
      console.error("Erreur lors de la génération du QR code:", error);
    }
  };

  const handleUpdate = async () => {
    if (!currentQRCode) return;

    try {
      const response = await fetch(`/api/qrcode/${currentQRCode.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, website, phone, address }),
      });

      if (response.ok) {
        const result: { qrCode: QRCodeData; qrCodeImage: string } =
          await response.json();
        setQrCodeImage(result.qrCodeImage);
        setCurrentQRCode(result.qrCode);
        setQrCodes((prevCodes) =>
          prevCodes.map((qr) =>
            qr.id === result.qrCode.id ? result.qrCode : qr
          )
        );
      } else {
        throw new Error("Erreur lors de la mise à jour du QR code");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du QR code:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="w-full aspect-square bg-green-500 rounded-lg flex items-center justify-center">
              {qrCodeImage ? (
                <img
                  src={qrCodeImage}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              ) : (
                <QrCode className="w-1/3 h-1/3 text-white" />
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Entrez votre email"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Entrez votre site web"
              className="mb-4"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
              className="mb-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Entrez votre adresse"
              className="mb-4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            {currentQRCode ? (
              <Button
                type="button"
                onClick={handleUpdate}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Mettre à jour le QR Code
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Générer le QR Code
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

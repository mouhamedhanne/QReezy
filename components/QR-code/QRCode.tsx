"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";

export default function Qrcode() {
  const [qrValue, setQrValue] = useState("https://example.com");
  const [name, setName] = useState("Votre Nom");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="w-full aspect-square bg-green-500 rounded-lg flex items-center justify-center">
              <QrCode className="w-1/3 h-1/3 text-white" />
            </div>
            <p className="text-center mt-2 text-lg font-semibold text-green-700">
              {name}
            </p>
          </div>

          <Input
            type="text"
            placeholder="Entrez l'URL"
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
            className="mb-4"
          />

          <Input
            type="text"
            placeholder="Entrez votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />

          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Générer le QR Code
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

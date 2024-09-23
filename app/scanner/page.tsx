import Container from "@/components/elements/Container";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/src/components/Layout/Layout";
import { Typography } from "@/src/components/ui/Typography";

export default function page() {
  return (
    <Container>
      <div className="container">
        <Layout>
          <LayoutHeader>
            <LayoutTitle>Scan</LayoutTitle>
          </LayoutHeader>
          <LayoutContent>
            <Typography>Pas Disponible</Typography>
          </LayoutContent>
        </Layout>
      </div>
    </Container>
  );
}

{
  /**
    constraints={{
                video: {
                  facingMode: "environment"
                }
              }}
   */
}

{
  /**
   * "use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/elements/Container";

const QrReader = dynamic(() => import("react-qr-scanner"), { ssr: false });

interface ScanResult {
  type: string;
  content: string;
  parsedContent?: { [key: string]: string };
}

export default function Page() {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleScan = async (data: string | null) => {
    if (data) {
      try {
        const response = await fetch("/api/scan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        });

        if (response.ok) {
          const result = await response.json();
          setScanResult(result);
          setScanning(false);
        } else {
          console.error("Erreur lors du traitement du QR code");
        }
      } catch (error) {
        console.error("Erreur lors de la requête:", error);
      }
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  const renderScanResult = () => {
    if (!scanResult) return null;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Résultat du scan:</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Type: {scanResult.type}</p>
          <p>Contenu brut: {scanResult.content}</p>
          {scanResult.parsedContent && (
            <div>
              <p>Contenu interprété:</p>
              {Object.entries(scanResult.parsedContent).map(([key, value]) => (
                <p key={key}>
                  {key}: {value}
                </p>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Scanner un QR Code</CardTitle>
        </CardHeader>
        <CardContent>
          {scanning ? (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          ) : (
            <Button onClick={() => setScanning(true)} className="w-full mb-4">
              Commencer le scan
            </Button>
          )}
          {renderScanResult()}
        </CardContent>
      </Card>
    </Container>
  );
}
   */
}

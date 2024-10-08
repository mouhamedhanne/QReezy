import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "QReezy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers> <Analytics /> {children}</Providers>
      </body>
    </html>
  );
}

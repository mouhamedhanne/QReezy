/*
  Warnings:

  - Added the required column `qrCodeImage` to the `QRCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QRCode" ADD COLUMN "qrCodeImage" TEXT NOT NULL DEFAULT '';

-- UpdateData
UPDATE "QRCode" SET "qrCodeImage" = '';

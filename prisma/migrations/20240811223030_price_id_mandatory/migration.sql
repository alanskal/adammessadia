/*
  Warnings:

  - Made the column `priceId` on table `Cloth` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cloth" ALTER COLUMN "priceId" SET NOT NULL;

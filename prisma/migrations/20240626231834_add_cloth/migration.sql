/*
  Warnings:

  - You are about to drop the `Connard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Connard";

-- CreateTable
CREATE TABLE "Cloth" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cloth_pkey" PRIMARY KEY ("id")
);

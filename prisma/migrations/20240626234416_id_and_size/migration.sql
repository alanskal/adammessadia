/*
  Warnings:

  - The primary key for the `Cloth` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Cloth` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cloth" DROP CONSTRAINT "Cloth_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Cloth_pkey" PRIMARY KEY ("id");

/*
  Warnings:

  - You are about to drop the column `categoryId` on the `campaigns` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `campaigns` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `campaigns` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "campaigns" DROP CONSTRAINT "campaigns_categoryId_fkey";

-- AlterTable
ALTER TABLE "campaigns" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- DropTable
DROP TABLE "categories";

/*
  Warnings:

  - You are about to drop the column `Rank` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "Rank",
ADD COLUMN     "rank" INTEGER NOT NULL DEFAULT 0;

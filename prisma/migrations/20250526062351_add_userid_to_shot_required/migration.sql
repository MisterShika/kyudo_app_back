/*
  Warnings:

  - Made the column `userId` on table `Shot` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Shot" DROP CONSTRAINT "Shot_userId_fkey";

-- AlterTable
ALTER TABLE "Shot" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Shot" ADD CONSTRAINT "Shot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

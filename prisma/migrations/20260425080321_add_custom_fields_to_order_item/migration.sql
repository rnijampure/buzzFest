-- DropIndex
DROP INDEX "OrderItem_productId_idx";

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "instructions" TEXT,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "variant" TEXT;

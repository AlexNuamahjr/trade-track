-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "mustResetPassword" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "stores_location_idx" ON "public"."stores"("location");

-- CreateIndex
CREATE INDEX "stores_name_idx" ON "public"."stores"("name");

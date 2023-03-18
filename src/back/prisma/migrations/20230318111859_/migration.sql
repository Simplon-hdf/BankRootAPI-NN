-- DropForeignKey
ALTER TABLE "peut_gerer" DROP CONSTRAINT "peut_gerer_user0_fk";

-- DropForeignKey
ALTER TABLE "peut_posseder" DROP CONSTRAINT "peut_posseder_user_fk";

-- AlterTable
ALTER TABLE "bank_account" ALTER COLUMN "update_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "request" ALTER COLUMN "update_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "update_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "peut_gerer" ADD CONSTRAINT "peut_gerer_user0_fk" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peut_posseder" ADD CONSTRAINT "peut_posseder_user_fk" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

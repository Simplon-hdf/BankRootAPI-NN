-- DropForeignKey
ALTER TABLE "peut_posseder" DROP CONSTRAINT "peut_posseder_bank_account0_fk";

-- AddForeignKey
ALTER TABLE "peut_posseder" ADD CONSTRAINT "peut_posseder_bank_account0_fk" FOREIGN KEY ("id_bank_account") REFERENCES "bank_account"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

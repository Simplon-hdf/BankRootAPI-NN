-- CreateTable
CREATE TABLE "bank_account" (
    "id" SERIAL NOT NULL,
    "currency" INTEGER NOT NULL DEFAULT 0,
    "num_account" BIGINT NOT NULL,
    "withdrawal_limit" INTEGER NOT NULL,
    "payment_ceiling" INTEGER NOT NULL,
    "overdraft_limit" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bank_account_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peut_gerer" (
    "id" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "peut_gerer_pk" PRIMARY KEY ("id","id_user")
);

-- CreateTable
CREATE TABLE "peut_posseder" (
    "id" INTEGER NOT NULL,
    "id_bank_account" INTEGER NOT NULL,

    CONSTRAINT "peut_posseder_pk" PRIMARY KEY ("id","id_bank_account")
);

-- CreateTable
CREATE TABLE "peut_valider" (
    "id" INTEGER NOT NULL,
    "id_transaction" INTEGER NOT NULL,

    CONSTRAINT "peut_valider_pk" PRIMARY KEY ("id","id_transaction")
);

-- CreateTable
CREATE TABLE "request" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "request_type" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "request_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traiter" (
    "id" INTEGER NOT NULL,
    "id_request" INTEGER NOT NULL,

    CONSTRAINT "traiter_pk" PRIMARY KEY ("id","id_request")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "state" BOOLEAN NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,
    "id_bank_account" INTEGER NOT NULL,

    CONSTRAINT "transaction_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "mail" VARCHAR(50) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "uuid" VARCHAR(250) NOT NULL,
    "Rank" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "peut_gerer" ADD CONSTRAINT "peut_gerer_bank_account_fk" FOREIGN KEY ("id") REFERENCES "bank_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peut_gerer" ADD CONSTRAINT "peut_gerer_user0_fk" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peut_posseder" ADD CONSTRAINT "peut_posseder_bank_account0_fk" FOREIGN KEY ("id_bank_account") REFERENCES "bank_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peut_posseder" ADD CONSTRAINT "peut_posseder_user_fk" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peut_valider" ADD CONSTRAINT "peut_valider_transaction0_fk" FOREIGN KEY ("id_transaction") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peut_valider" ADD CONSTRAINT "peut_valider_user_fk" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_user_fk" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "traiter" ADD CONSTRAINT "traiter_request0_fk" FOREIGN KEY ("id_request") REFERENCES "request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "traiter" ADD CONSTRAINT "traiter_user_fk" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_bank_account0_fk" FOREIGN KEY ("id_bank_account") REFERENCES "bank_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_fk" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

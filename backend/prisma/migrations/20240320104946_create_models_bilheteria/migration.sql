/*
  Warnings:

  - You are about to drop the column `dataRegistro` on the `Empresas` table. All the data in the column will be lost.
  - Made the column `email` on table `Empresas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Compra" ALTER COLUMN "dataCompra" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Empresas" DROP COLUMN "dataRegistro",
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "username" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LogsAcessoEmpresas" ALTER COLUMN "dataHora" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "TokensAutenticacao" ALTER COLUMN "dataCriacao" SET DEFAULT CURRENT_TIMESTAMP;

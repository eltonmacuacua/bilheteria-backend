-- CreateTable
CREATE TABLE "TipoNegocio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "TipoNegocio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoProduto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "TipoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgUrl" TEXT,
    "email" TEXT,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT,
    "telefone" TEXT,
    "website" TEXT,
    "dataRegistro" TIMESTAMP(3),
    "statusConta" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "tipoNegocio_id" TEXT NOT NULL,

    CONSTRAINT "Empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokensAutenticacao" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3),
    "dataExpiracao" TIMESTAMP(3),
    "status" BOOLEAN,
    "empresa_id" TEXT NOT NULL,

    CONSTRAINT "TokensAutenticacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogsAcessoEmpresas" (
    "id" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3),
    "sucesso" BOOLEAN,
    "enderecoIP" TEXT,
    "navegador" TEXT,
    "resultado" TEXT,
    "empresa_id" TEXT NOT NULL,

    CONSTRAINT "LogsAcessoEmpresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imgUrl" TEXT,
    "descricao" TEXT,
    "dataInicio" TIMESTAMP(3),
    "dataFim" TIMESTAMP(3),
    "linkEvento" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "pais" TEXT,
    "valor" DOUBLE PRECISION NOT NULL,
    "quantidadeDisponivel" INTEGER NOT NULL,
    "empresa_id" TEXT NOT NULL,
    "tipoProduto_id" TEXT NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desconto" (
    "id" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT,
    "dataInicio" TIMESTAMP(3),
    "dataFim" TIMESTAMP(3),
    "produto_id" TEXT NOT NULL,

    CONSTRAINT "Desconto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "statusConta" BOOLEAN,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" TEXT NOT NULL,
    "dataCompra" TIMESTAMP(3) NOT NULL,
    "id_produto" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmpresasProdutos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmpresasProdutos_AB_unique" ON "_EmpresasProdutos"("A", "B");

-- CreateIndex
CREATE INDEX "_EmpresasProdutos_B_index" ON "_EmpresasProdutos"("B");

-- AddForeignKey
ALTER TABLE "Empresas" ADD CONSTRAINT "Empresas_tipoNegocio_id_fkey" FOREIGN KEY ("tipoNegocio_id") REFERENCES "TipoNegocio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokensAutenticacao" ADD CONSTRAINT "TokensAutenticacao_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogsAcessoEmpresas" ADD CONSTRAINT "LogsAcessoEmpresas_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_tipoProduto_id_fkey" FOREIGN KEY ("tipoProduto_id") REFERENCES "TipoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desconto" ADD CONSTRAINT "Desconto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmpresasProdutos" ADD CONSTRAINT "_EmpresasProdutos_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmpresasProdutos" ADD CONSTRAINT "_EmpresasProdutos_B_fkey" FOREIGN KEY ("B") REFERENCES "Produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

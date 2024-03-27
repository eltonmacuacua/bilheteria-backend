import prismaClient from "../../prisma";

interface CompraRequest {
    dataCompra: Date;
    id_cliente: string;
    id_produto: string;
    quantidade: number;
}

class CreateCompraService {
    async handle({ dataCompra, id_cliente, id_produto, quantidade }: CompraRequest) {
        const produto = await prismaClient.produtos.findUnique({
            where: { id: id_produto },
            select: { quantidadeDisponivel: true }
        });

        if (!produto) {
            throw new Error("Produto não encontrado");
        }

        if (quantidade > produto.quantidadeDisponivel) {
            throw new Error("Quantidade comprada excede a quantidade disponível");
        }

        const transaction = await prismaClient.$transaction([
            prismaClient.compra.create({
                data: {
                    dataCompra,
                    id_cliente,
                    id_produto
                }
            }),
            prismaClient.produtos.update({
                where: { id: id_produto },
                data: {
                    quantidadeDisponivel: {
                        decrement: quantidade
                    }
                }
            })
        ]);

        return transaction[0];
    }
}

export { CreateCompraService };

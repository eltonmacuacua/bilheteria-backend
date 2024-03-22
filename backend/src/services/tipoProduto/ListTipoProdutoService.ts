import prismaClient from "../../prisma";

export class ListTipoProdutoService {
    async handle() {
        const tipoProdutos = await prismaClient.tipoProduto.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true
            }
        });
        return tipoProdutos;
    }
}
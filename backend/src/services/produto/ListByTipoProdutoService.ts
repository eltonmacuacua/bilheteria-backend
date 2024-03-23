import prismaClient from "../../prisma";

interface TipoProdutoRequest {
    tipo_produto_id: string;
}

class ListByTipoProdutoService {

    async execute({ tipo_produto_id }: TipoProdutoRequest) {
        const produtos = await prismaClient.produtos.findMany({
            where: {
                tipoProduto_id: tipo_produto_id
            }
        })

        return produtos
    }
}
export { ListByTipoProdutoService }
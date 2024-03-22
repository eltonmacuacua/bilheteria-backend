import prismaClient from "../../prisma";

class ListProdutoService {
    async handle() {
        const produto = await prismaClient.produtos.findMany({
            select: {
                id: true,
                nome: true,
                imgUrl: true,
                descricao: true,
                dataInicio: true,
                dataFim: true,
                linkEvento: true,
                quantidadeDisponivel: true,
                valor: true,
                tipoProduto_id: true,
                endereco: true,
                cidade: true,
                estado: true,
                pais: true,
                empresa_id: true,
            }
        });
        return produto;
    }
} export { ListProdutoService }
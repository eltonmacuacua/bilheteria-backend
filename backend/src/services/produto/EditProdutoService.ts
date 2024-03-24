import prismaClient from "../../prisma";

interface ProdutoRequest {
    id: string;
    nome: string;
    imgUrl: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    linkEvento: string;
    endereco: string;
    cidade: string;
    estado: string;
    pais: string;
    valor: string;
    quantidadeDisponivel: number;
    tipoProduto_id: string;
}

export class EditProdutoService {
    async execute({ id, nome, imgUrl, descricao, dataInicio, dataFim, linkEvento, 
        quantidadeDisponivel, valor, tipoProduto_id, 
        endereco, cidade, estado, pais }: ProdutoRequest) {
        const produto = await prismaClient.produtos.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                imgUrl: imgUrl,
                descricao: descricao,
                dataInicio: dataInicio,
                dataFim: dataFim,
                linkEvento: linkEvento,
                quantidadeDisponivel: quantidadeDisponivel,
                valor: valor,
                tipoProduto_id: tipoProduto_id,
                endereco: endereco,
                cidade: cidade,
                estado: estado,
                pais: pais
            }
        })

        return produto
    }
}
import prismaClient from "../../prisma";
interface ProdutoRequest {
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
    empresa_id: string;
    tipoProduto_id: string;
}
export class CreateProdutoService {
    async execute({ nome, valor, empresa_id, tipoProduto_id,
        imgUrl, descricao, dataInicio, dataFim, linkEvento, 
        quantidadeDisponivel, endereco, cidade, estado, pais }: ProdutoRequest) {

        const quantidadeInteira = parseInt(quantidadeDisponivel.toString(), 10);

        if (!nome) {
            throw new Error("Preencha os campos correctamente");
        }
        
        if (!tipoProduto_id) {
            throw new Error("Escolha uma categoria.");
        }

        const produto = await prismaClient.produtos.create({
            data: {
                nome,
                valor,
                empresa_id,
                tipoProduto_id,
                imgUrl,
                descricao,
                dataInicio,
                dataFim,
                linkEvento,
                quantidadeDisponivel: quantidadeInteira, 
                endereco,
                cidade,
                estado,
                pais
            }, select: {
                id: true,
                nome: true,
                imgUrl: true,
                descricao: true,
                dataInicio: true,
                dataFim: true,
                linkEvento: true,
                quantidadeDisponivel: true, 
                valor: true,
                empresa_id: true,
                tipoProduto_id: true,
                endereco: true,
                cidade: true,
                estado: true,
                pais: true,
            }
        });
        return produto;
    }
}
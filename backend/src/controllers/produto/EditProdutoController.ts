import { Request, Response } from "express";
import { EditProdutoService } from "../../services/produto/EditProdutoService";

export class EditProdutoController {
    async handle(request: Request, response: Response) {
        const { id, nome, imgUrl, descricao, dataInicio, dataFim, linkEvento, 
                quantidadeDisponivel, valor, tipoProduto_id, 
                endereco, cidade, estado, pais } = request.body;

        const editProdutoService = new EditProdutoService();
        const produto = await editProdutoService.execute({
            id, nome, imgUrl, descricao, dataInicio, dataFim, linkEvento,
            quantidadeDisponivel, valor, tipoProduto_id, 
            endereco, cidade, estado, pais
        });

        return response.json(produto);
    }
}
import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/produto/CreateProdutoService";

class CreateProdutoController {

    async handle(req: Request, res: Response) {
        const { nome, imgUrl, descricao, dataInicio,
            dataFim, linkEvento, quantidadeDisponivel,
            valor, empresa_id, tipoProduto_id,
            endereco, cidade, estado, pais } = req.body;

        const createProdutoService = new CreateProdutoService();
        const produto = await createProdutoService.execute({
            nome, imgUrl, descricao, dataInicio,
            dataFim, linkEvento, quantidadeDisponivel,
            valor, empresa_id, tipoProduto_id,
            endereco, cidade, estado, pais
        });
        return res.json(produto);
    }
} export { CreateProdutoController }
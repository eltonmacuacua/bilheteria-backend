import { Request, Response } from "express";
import { ListProdutoService } from "../../services/produto/ListProdutoService";

export class ListProdutoController {
    async handle(request: Request, response: Response) {
        const listProdutosService = new ListProdutoService();
        const produto = await listProdutosService.handle();
        return response.json(produto);
    }
}
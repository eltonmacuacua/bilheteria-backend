import { Request, Response } from "express";
import { ListTipoProdutoService } from "../../services/tipoProduto/ListTipoProdutoService";

export class ListTipoProdutoController {
    async handle(req: Request, res: Response) {
        const service = new ListTipoProdutoService();
        const tipoProdutos = await service.handle();
        return res.json(tipoProdutos);
    }
}
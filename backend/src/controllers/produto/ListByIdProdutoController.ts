import { Request, Response } from 'express'
import { ListByIdProdutoService } from '../../services/produto/ListByIdProdutoService';

class ListByIdProdutoController {

    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const listByIdProdutoService = new ListByIdProdutoService();
        const produto = await listByIdProdutoService.execute({
            id: id
        })

        return res.json(produto);
    }
} export { ListByIdProdutoController }
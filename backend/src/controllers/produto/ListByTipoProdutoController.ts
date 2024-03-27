import {Request, Response} from 'express'
import { ListByTipoProdutoService } from '../../services/produto/ListByTipoProdutoService';

class ListByTipoProdutoController{

    async handle(req: Request, res: Response){
        const tipo_produto_id = req.query.categoria_id as string;
        const listByTipoProdutoService = new ListByTipoProdutoService();
        const produtos = await listByTipoProdutoService.execute({
            tipoProduto_id: tipo_produto_id
        })
            
        return res.json(produtos);
    }
} 
export { ListByTipoProdutoController }
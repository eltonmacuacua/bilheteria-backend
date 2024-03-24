import {Request, Response} from 'express'
import { ListByTipoNegocioService } from '../../services/empresa/ListByTipoNegocioService';

class ListByTipoNegocioController{

    async handle(req: Request, res: Response){
        const tipo_produto_id = req.query.categoria_id as string;
        const listByTipoNegocioService = new ListByTipoNegocioService();
        const empresas = await listByTipoNegocioService.execute({tipoNegocio_id: tipo_produto_id});
            
        return res.json(empresas);
    }
} 
export { ListByTipoNegocioController }
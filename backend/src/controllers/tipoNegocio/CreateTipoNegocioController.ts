
import { Request, Response } from "express";
import { CreateTipoNegocioService } from "../../services/tipoNegocio/CreateTipoNegocioService";


class CreateTipoNegocioController {

    async handle(req: Request, res: Response) {
        const { nome, descricao } = req.body;
        
        const createTipoNegocioService = new CreateTipoNegocioService();
       
        const tipoNegocio = await createTipoNegocioService.execute({
            nome,
            descricao
        });

        return res.json(tipoNegocio);
    }
} export { CreateTipoNegocioController }
import { Request, Response } from "express";
import { ListTipoNegocioService } from "../../services/tipoNegocio/ListTipoNegocioService";

export class ListTipoNegocioController {
    async handle(req: Request, res: Response) {
        const service = new ListTipoNegocioService();
        const tipoProdutos = await service.handle();
        return res.json(tipoProdutos);
    }
}
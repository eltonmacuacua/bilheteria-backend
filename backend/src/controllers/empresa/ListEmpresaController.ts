import { Request, Response } from "express";
import { ListEmpresaService } from "../../services/empresa/ListEmpresaService";

export class ListEmpresaController{
    async handle(req: Request, res: Response) {
        const empresaService = new ListEmpresaService();
        const empresas = await empresaService.handle();
        return res.json(empresas);
    }
}
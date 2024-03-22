import { Request, Response } from "express";
import { DetailEmpresaService } from "../../services/empresa/DetailEmpresaService";


export class DetailEmpresasController {
    async handle(req: Request, res: Response) {
        
        // armazenando o id do usuario no request
        const user_id = req.user_id;

        console.log("ID do usuario: ", user_id);

        const detailEmpresaService = new DetailEmpresaService();
        const user = await detailEmpresaService.execute(user_id);
        return res.json(user);
    }
}
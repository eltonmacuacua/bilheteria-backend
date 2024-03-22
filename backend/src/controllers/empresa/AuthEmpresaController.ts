import { Request, Response } from "express";
import { AuthEmpresaService } from "../../services/empresa/AuthEmpresaService";

class AuthEmpresaController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;
        const authEmpresaService = new AuthEmpresaService();
        const token = await authEmpresaService.execute({ email, senha });
        return res.json(token);
    }
}export { AuthEmpresaController }
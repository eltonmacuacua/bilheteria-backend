import { Request, Response } from "express";
import { ListClienteService } from "../../services/cliente/ListClienteService";


export class ListClienteController {
    async handle(request: Request, response: Response) {
        const listClienteService = new ListClienteService();
        const clientes = await listClienteService.handle();
        return response.json(clientes);
    }
}
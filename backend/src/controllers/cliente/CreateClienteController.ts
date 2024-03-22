import { Request, Response } from "express";
import { CreateClienteService } from "../../services/cliente/CreateClienteService";


export class CreateClienteController {
    async handle(request: Request, response: Response) {
        const { nome, telefone, statusConta } = request.body;
        const createClienteService = new CreateClienteService();
        const cliente = await createClienteService.handle({ nome, telefone, statusConta });
        return response.json(cliente);
    }
}
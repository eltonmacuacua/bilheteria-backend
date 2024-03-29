// CreateCompraController.ts

import { Request, Response } from "express";
import { CreateCompraService } from "../../services/compra/CreateCompraService";

class CreateCompraController {
    async handle(req: Request, res: Response) {
        const { id_produto, nomeCliente, telefoneCliente, quantidade } = req.body;
        const createCompraService = new CreateCompraService();

        try {
            const compra = await createCompraService.execute({
                id_produto,
                nomeCliente,
                telefoneCliente,
                quantidade
            });
            return res.status(201).json(compra);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}

export { CreateCompraController };

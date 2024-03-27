import { Request, Response } from "express";
import { CreateCompraService } from "../../services/compra/CreateCompraService";

class CreateCompraController {
    async handle(req: Request, res: Response) {
        const { dataCompra, id_cliente, id_produto, quantidade } = req.body;
        const createCompraService = new CreateCompraService();
        const compra = await createCompraService.handle({
            dataCompra,
            id_cliente,
            id_produto,
            quantidade 
        });
        return res.json(compra);
    }
}

export { CreateCompraController };
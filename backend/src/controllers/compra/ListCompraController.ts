import { ListCompraService } from "../../services/compra/ListCompraService";
import { Request, Response } from "express";

class ListCompraController{
    async handle(req: Request, res: Response) {
        const listCompraService = new ListCompraService();
        const compras = await listCompraService.handle();
        return res.json(compras)
    }
} export { ListCompraController }
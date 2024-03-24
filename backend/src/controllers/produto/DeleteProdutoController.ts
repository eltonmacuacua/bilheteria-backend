import { Request, Response } from "express";
import { DeleteProdutoService } from "../../services/produto/DeleteProdutoService";


export class DeleteProdutoController {
    async handle(request: Request, response: Response) {
        const id = request.query.id as string;

        const deleteProdutoService = new DeleteProdutoService();
        const result = await deleteProdutoService.execute({ id });
        return response.json(result);
    }
}   
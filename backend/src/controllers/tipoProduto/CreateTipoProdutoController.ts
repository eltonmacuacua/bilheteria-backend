import { Request, Response } from "express";
import { CreateTipoProdutoService } from "../../services/tipoProduto/CrateTipoProdutoService";


export class CreateTipoProdutoController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body;
        const createTipoProdutoService = new CreateTipoProdutoService();

        const tipoProduto = await createTipoProdutoService.execute({nome});


        return res.json(tipoProduto);

    }
}
import { Request, Response } from "express";
import { CreateDescontoService } from "../../services/desconto/CreateDescontoService";

class CreateDescontoController {
    async handle(request: Request, response: Response) {
        const { valor, descricao, dataInicio, dataFim, produto_id } = request.body;
        const createDescontoService = new CreateDescontoService();
        const desconto = await createDescontoService.execute({
            
            valor, descricao, dataInicio, dataFim, produto_id 
        });
        return response.json(desconto);
    }
} export { CreateDescontoController }
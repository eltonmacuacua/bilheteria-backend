
/**
 * Este controller é responsável por lidar com a lógica de criação de usuários.
 * Ele recebe os dados de um usuário no corpo da requisição e cria um usuário no banco de dados.
 * Retorna o usuário criado caso a operação seja bem-sucedida.
 * Caso ocorra algum erro durante a criação do usuário, ele é rejeitado com uma mensagem de erro.
 */

import { Request, Response } from "express";
import { CreateEmpresaService } from "../../services/empresa/CreateEmpresaService";

class CreateEmpresaController {
    async handle(req: Request, res: Response) {

        const { nome, imgUrl, email, username, senha, endereco, telefone, website, statusConta, tipoNegocio_id } = req.body;

        const createEmpresaService = new CreateEmpresaService();

        const empresa = await createEmpresaService.execute({
            nome,
            imgUrl,
            email,
            username,
            senha,
            endereco,
            telefone,
            website,
            statusConta,
            tipoNegocio_id
        });

        return res.json(empresa);
    }
} export { CreateEmpresaController }
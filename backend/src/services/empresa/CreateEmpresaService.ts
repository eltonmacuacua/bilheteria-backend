
/**
 * Serviço responsável por criar um usuário no banco de dados.
 *
 * Ele recebe um objeto com os dados do usuário e retorna o usuário criado.
 * Caso ocorra algum erro durante a criação do usuário, ele será rejeitado com uma mensagem de erro.
 */
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface EmpresaRequest {
    nome: string;
    imgUrl: string;
    email: string;
    username: string;
    senha: string;
    endereco: string;
    telefone: string;
    website: string;
    statusConta: boolean;
    tipoNegocio_id: string;
}

class CreateEmpresaService {
    async execute({
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

    }: EmpresaRequest) {

        // verificar se usuario enviou um email
        if (!email) {
            throw new Error("Insira um email valido");
        }


        // verificar se o email já existe
        const userAlreadyExists = await prismaClient.empresas.findFirst({
            where: {
                email: email,
            }
        });

        if (userAlreadyExists) {
            throw new Error("Este email ja existe");
        }

        // encriptar a senha
        const hashPassword = await hash(senha, 8);

        const empresa = await prismaClient.empresas.create({
            data: {
                nome: nome,
                imgUrl: imgUrl,
                email: email,
                username: username,
                senha: hashPassword,
                endereco: endereco,
                telefone: telefone,
                website: website,
                statusConta: true,
                tipoNegocio_id: tipoNegocio_id,
            },
            select: {
                id: true,
                nome: true,
                imgUrl: true,
                email: true,
                username: true,
                endereco: true,
                telefone: true,
                website: true,
                statusConta: true,
                tipoNegocio_id: true,
            }
        });

        console.log("Empresa criada com sucesso!");
        console.log(empresa);

        return empresa;
    }
} export { CreateEmpresaService }
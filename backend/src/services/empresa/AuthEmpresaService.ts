import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    senha: string;
}

class AuthEmpresaService {
    async execute({ email, senha }: AuthRequest) {
        const user = await prismaClient.empresas.findFirst({
            where: {    
                email: email
            }
        });

        if (!user) {
            throw new Error("Email ou senha invalida");
        }

        // verificar se a senha esta correta
        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            throw new Error("Email ou senha invalida");
        }

        const token = sign(
            {
                name: user.nome,
                email: user.email
            },
            process.env.JWT_PASS,
            {
                subject: user.id.toString(),
                expiresIn: "30d"
            }
        );

        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            token: token
        };
    } 
} export { AuthEmpresaService }
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    // Exibe o token completo no console
    //console.log(authToken);

    const [, token] = authToken.split(" ")

    // Verifica se o token e valido
    try {
        const { sub } = verify(token, process.env.JWT_PASS) as Payload;
        
        // Exibe o id do usuario no console
        //console.log(sub);

        //armazenando o id do usuario no request
        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }
    

}

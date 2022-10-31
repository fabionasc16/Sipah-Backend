import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/auth.service";

export const  checkJWT = async (req: Request, res: Response, next: NextFunction) => {
   // console.log('checkJwt')
    const token = <string>req.headers["authorization"];

    //Try to validate the token and get data
    try {
        const user = await AuthService.verify(token);
        if (user) {
            req.user = user;
        } else {
            res.status(401).json({ "message": "Acesso negado ou Sessão expirada!" });
            return;
        }
        next();
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(500).send();
        return;
    }

};
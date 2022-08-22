import { Request, Response, NextFunction } from "express";
import { AuthService } from "service/auth.service";

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    console.log('checkJwt')
    const token = <string>req.headers["authorization"];

    //Try to validate the token and get data
    try {
        const user = AuthService.verify(token);
        console.log('User: ', user);

        if (user) {
            req.user = user;
        } else {
            res.status(401).send();
            return;
        }
        next();
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(500).send();
        return;
    }

};
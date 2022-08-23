import { Request, Response, NextFunction } from "express";

export const checkRole = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      // Recupera as roles adicionadas no middleware checkJwt
      const userRoles = req.user.roles;
      let accessDenied = true;
      if (userRoles) {
        for (let index = 0; index < userRoles.length; index++) {
          const role = userRoles[index];
          if (roles.includes(role)) {
            accessDenied = false;
            next();
            break;
  
          }
        }
      }
  
      console.log('checkRole ', 'Acesso negado: ', accessDenied?'Sim':'Nao', 'Roles Usuário: ',userRoles, 'Roles Rota: ',roles );
  
      if (accessDenied) {
        res.status(401).send();
        return;
      }
    }
  };
  
import axios from 'axios'; 
import * as dotenv from 'dotenv';

type User = {
  id: number;
  email: string;
  first_name: string;
};

export class SSOService {
 
  constructor() {
    dotenv.config({
      path: './.env',
    });
   }

  public login(user: string, pass: string) {
   const response =  axios.get(`process.env.SSO_URL/{login}`, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  verify(token: string) {
    //TODO: implementar requisicao para o SSO
  }
}

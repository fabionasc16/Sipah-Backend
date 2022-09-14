// import axios from 'axios'; // urls com https
import axios from 'axios';
import { Response, Request } from 'express';
// import './types/UserSSO';

export class AuthService {
  private url = process.env.SSO_URL;

  async unities(request: Request, response: Response): Promise<Response> {
    const teste = request.params;
    const url = process.env.SSO_URL;

    try {
      const { data, status } = await axios.get(
        `${url}/unities/?${request.query}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      return await response.status(status).json(data);
    } catch (error) {
      return await response.status(500);
    }
  }

  async createUnities(request: Request, response: Response): Promise<Response> {
    const url = process.env.SSO_URL;
    try {
      const { status, data } = await axios.post(
        `${url}/unities/`,
        request.body,
      );
      return await response.status(status).json(data);
    } catch (error) {
      return await response.status(500);
    }
  }

  async listUnities(request: Request, response: Response): Promise<Response> {
    const url = process.env.SSO_URL;

    try {
      const page =
        request.query.currentPage != null
          ? `${request.query.currentPage}`
          : '1';
      const pageSize =
        request.query.perPage != null ? request.query.perPage : '10';

      const params = {
        perPage: pageSize,
        currentPage: page,
      };

      const { status, data } = await axios.get(`${url}/unities/`, { params });
      return await response.status(status).json(data);
    } catch (error) {
      return await response.status(500);
    }
  }

  async listByIdUnities(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const url = process.env.SSO_URL;

    const { status, data } = await axios.get(
      `${url}/unities/id/${request.params.id}`,
    );
    return await response.status(status).json(data);
  }

  async updateUnities(request: Request, response: Response): Promise<Response> {
    const url = process.env.SSO_URL;

    return await axios.put(`${url}/unities/${request.params.id}`, request.body);
  }

  async deleteUnities(request: Request, response: Response): Promise<Response> {
    const url = process.env.SSO_URL;

    return await axios.delete(`${url}/unities/${request.params.id}`);
  }

  async listByCNPJUnities(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const url = process.env.SSO_URL;

    const { status, data } = await axios.get(
      `${url}/unities/cnpj/${request.params.id}`,
    );

    return await response.status(status).json(data);
  }

  /** testar */

  async createUsuario(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;
    const { status, data } = await axios.post(url, request.body);
    return await response.status(status).json(data);
  }

  async listUsuarioByCPF(request: Request, response: Response): Promise<any[]> {
    const url = process.env.SSO_URL;
    const { status, data } = await axios.get(
      `${url}/users/cpf/${request.params.cpf}`,
    );
    return await response.status(status).json(data);
  }

  async listUsuarioById(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;
    const { status, data } = await axios.get(
      `${url}/users/id/${request.params.id}`,
    );
    return await response.status(status).json(data);
  }

  async listAllUsuario(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;
    const page =
      request.params.currentPage != null
        ? `${request.params.currentPage}`
        : '1';
    const pageSize =
      request.params.perPage != null ? request.params.perPage : '10';

    const params = {
      perPage: pageSize,
      currentPage: page,
    };

    const { status, data } = await axios.get(`${url}/users/`, {
      params,
    });

    return await response.status(status).json(data);
  }

  async listAllUsuarioByUnit(
    request: Request,
    response: Response,
  ): Promise<any> {
    const url = process.env.SSO_URL;
    const { status, data } = await axios.get(
      `${url}/users/unity/${request.params.id}`,
    );
    return await response.status(status).json(data);
  }

  async deleteUsuario(request: Request, response: Response): Promise<void> {
    const url = process.env.SSO_URL;
    const { status } = await axios.delete(`${url}${request.params.id}`);
    return await response.status(status);
  }

  async updateUsuario(request: Request, response: Response): Promise<void> {
    const url = process.env.SSO_URL;
    const { status, data } = await axios.put(
      `${url}${request.params.id}`,
      request.body,
    );
    return await response.status(status).json(data);
  }

  async mudarStatusUsuario(
    request: Request,
    response: Response,
  ): Promise<void> {
    const url = process.env.SSO_URL;
    const { status, data } = await axios.put(`${url}${request.params.id}`, {
      status: 'true',
    });
    return await response.status(status).json(data);
  }

  /** fim testar */

  async authenticate(request: Request, response: Response): Promise<Response> {
    const dataFrontend: any = request.body;
    const url = process.env.SSO_URL;
    const user: UserSSO = dataFrontend;

    const { data, status } = await axios.post(
      'https://reqres.in/api/users',
      user,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return response.status(status).json(data);
  }
  static ROLES = {
    USUARIO: 'SIPAH_USUARIO',
    USUARIO_EXCLUIR: 'SIPAH_USUARIO_EXCLUIR',
    CARACTERISTICA: 'SIPAH_CARACTERISTICA',
    LOG: 'SIPAH_LOG',
    PACIENTE: 'SIPAH_PACIENTE',
    PACIENTE_EDITAR_ENTRADA: 'SIPAH_PACIENTE_EDITAR_ENTRADA',
    PACIENTE_EDITAR_FICHA_SOCIAL: 'SIPAH_PACIENTE_EDITAR_FICHA_SOCIAL',
    PACIENTE_CAPTURAR_FOTO: 'SIPAH_PACIENTE_CAPTURAR_FOTO',
    PACIENTE_VISUALIZAR_FOTO: 'SIPAH_PACIENTE_VISUALIZAR_FOTO',
    PACIENTE_IDENTIFICAR_INTERNADO: 'SIPAH_PACIENTE_IDENTIFICAR_INTERNADO',
    PACIENTE_REGISTRAR_SAIDA: 'SIPAH_PACIENTE_REGISTRAR_SAIDA',
    PACIENTE_VISUALIZAR_FICHA_SOCIAL: 'SIPAH_PACIENTE_VISUALIZAR_FICHA_SOCIAL',
    PACIENTE_RECEPCAO: 'SIPAH_PACIENTE_RECEPCAO',
    PACIENTE_SERVICO_SOCIAL: 'SIPAH_SERVICO_SOCIAL',
    ATENDIMENTO: 'SIPAH_ATENDIMENTO',
    ADMIN: 'SIPAH_ADMINISTRADOR',
  };
  constructor() {}

  login(user: string, pass: string) {
    // TODO: implementar requisicao para o SSO
  }

  static verify(token: string) {
    // TODO: Implementar integração com o sso
    return {
      id: '62fce3201bc1df4518e69613',
      user_name: 'André Lucas',
      cpf: '99999999999',
      unit_id: '62fcea7f97531b81063b8a70', // CNPJ
      unit_name: 'HOSPITAL E PRONTO SOCORRO 28 DE AGOSTO',
      roles: [
        // 'SIPAH_USUARIO',
        // 'SIPAH_PACIENTE',
        // 'SIPAH_PACIENTE_EDITAR_FICHA_SOCIAL',
        // 'SIPAH_PACIENTE_VISUALIZAR_FICHA_SOCIAL',
        // 'SIPAH_PACIENTE_CAPTURAR_FOTO',
        // 'SIPAH_PACIENTE_VISUALIZAR_FOTO',
        // 'SIPAH_PACIENTE_IDENTIFICAR_INTERNADO',
        // 'SIPAH_PACIENTE_REGISTRAR_SAIDA',
        // 'SIPAH_ATENDIMENTO',
        'SIPAH_PACIENTE_RECEPCAO',
        // 'SIPAH_ADMINISTRADOR'
      ],
    };
  }

  static checkRoles(role: string, roles: Array<string>) {
    // Verifica se a role esta contida na lista
    if (role && roles) {
      const result = roles.includes(role);
      if (result) {
        return true;
      }
      return false;
    }
    return false;
  }
}

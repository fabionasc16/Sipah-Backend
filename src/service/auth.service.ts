// import axios from 'axios'; // urls com https
import axios from 'axios';
import { Response, Request } from 'express';
// import './types/UserSSO';

export class AuthService {
  private url = process.env.SSO_URL;

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

  async profiles(request: Request, response: Response): Promise<Response> {
    const url = process.env.SSO_URL;
    const perfis = [];

    try {
      const { data, status } = await axios.get(`${url}/profiles/`, {
        headers: {
          Accept: 'application/json',
        },
      });

      if (data.data) {
        data.data.forEach(item => {
          const perfil: any = {};
          perfil.id = item._id;
          perfil.profile_name = item.profile_name;
          perfil.profile_description = item.profile_description;

          perfis.push(perfil);
        });
      }

      return await response.status(status).json(perfis);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  async unities(request: Request, response: Response): Promise<Response> {
    const queryParams = request.url.substring(request.url.indexOf('?'));
    const url = process.env.SSO_URL;

    try {
      const { data, status } = await axios.get(
        `${url}/unities/${queryParams}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      const system = 'SIPAH';
      const units = [];
      for (let index = 0; index < data.data.length; index += 1) {
        console.log(data.data[index].systems);
        if (
          data.data[index].systems &&
          data.data[index].systems.length > 0 &&
          data.data[index].systems[0].system_name === system
        ) {
          const element = data.data[index];
          units.push(element);
        }
      }
      data.data = units;

      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  /** testar */

  // OK-testado
  async createUnities(request: Request, response: Response): Promise<Response> {
    const url = process.env.SSO_URL;
    try {
      const { status, data } = await axios.post(
        `${url}/unities/`,
        request.body,
      );
      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
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

      const units = [];
      for (let index = 0; index < data.data.length; index++) {
        const element = AuthService.convertSSOToUnit(data.data[index]);

        units.push(element);
      }
      data.data = units;

      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async listByIdUnities(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const url = process.env.SSO_URL;

      const { status, data } = await axios.get(
        `${url}/unities/id/${request.params.id}`,
      );

      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado - Somente quando envia todos os campos
  async updateUnities(request: Request, response: Response): Promise<Response> {
    try {
      const url = process.env.SSO_URL;

      const { status, data } = await axios.put(
        `${url}/unities/${request.params.id}`,
        request.body,
      );
      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async deleteUnities(request: Request, response: Response): Promise<Response> {
    try {
      const url = process.env.SSO_URL;

      const { status, statusText } = await axios.delete(
        `${url}/unities/${request.params.id}`,
      );
      return await response.status(status).json(statusText);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async listByCNPJUnities(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const url = process.env.SSO_URL;

      const { status, data } = await axios.get(
        `${url}/unities/cnpj/${request.params.id}`,
      );

      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async findUsuarioByCpf(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;

    // Verifica se o CPF já é cadastrado
    if (request.params.cpf) {
      try {
        const strCPF = request.params.cpf
          .replace('.', '')
          .replace('.', '')
          .replace('-', '');
        const result: any = await axios.get(`${url}/users/cpf/${strCPF}`);

        return await response.status(200).json({ id: result.data._id });
      } catch (error) {
        return response.status(404).send({
          message: 'Usuário não existe na base de dados.',
        });
      }
    }
    return await response.status(200).send();
  }
  async createUsuario(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;

    try {
      // Verifica se o CPF já é cadastrado
      if (request.body.cpf) {
        try {
          const strCPF = request.body.cpf
            .replaceAll('.', '')
            .replaceAll('-', '');
          const existUser: any = await axios.get(`${url}/users/cpf/${strCPF}`);
          // Caso o usuário já seja cadatrado, realiza-se o update, adicionando-se o perfil e a unidade
          try {
            const edit = await axios.put(
              `${url}/users/${existUser.data._id}`,
              request.body,
            );
            return await response.status(edit.status).json(edit.data);
          } catch (error) {
            return response.status(400).send({
              message: 'Não foi possível Atualizar dados de usuário',
            });
          }
        } catch (error) {
          request.body.perfilUsuario = [request.body.perfilUsuario];
          // Senão, realiza-se o cadastro do paciente normalmente.
          const { status, data } = await axios.post(
            `${url}/users/`,
            request.body,
          );

          return await response.status(status).json(data);
        }
      }
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async listUsuarioByCPF(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;
    try {
      const result = await axios.get(`${url}/users/cpf/${request.params.cpf}`);
      return await response.status(result.status).json(result.data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
    // return await response.status(status).json(data);
  }

  // OK-testado
  async listUsuarioById(request: Request, response: Response): Promise<any> {
    try {
      const url = process.env.SSO_URL;
      const { status, data } = await axios.get(
        `${url}/users/id/${request.params.id}`,
      );

      if (data.perfis && data.perfis.length >= 1) {
        // const element = data.perfis[0];
        // data.perfis[0].id = element._id;
        // data.perfis[0].profile_description = element.profile_name;
        // console.log(data.perfis[index])

        data.perfilUsuario = data.perfis[0]._id;
      }

      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async listAllUsuario(request: Request, response: Response): Promise<any> {
    const url = process.env.SSO_URL;
    const queryParams = request.url.substring(request.url.indexOf('?'));
    const userUnidadeID = request.user.unit_id;

    try {
      if (AuthService.checkRoles(AuthService.ROLES.ADMIN, request.user.roles)) {
        const { status, data } = await axios.get(`${url}/users${queryParams}`);

        return await response.status(status).json(data);
      }

      const { status, data } = await axios.get(
        `${url}/users/unity/${userUnidadeID}`,
      );

      return response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado
  async deleteUsuario(request: Request, response: Response): Promise<any> {
    try {
      const url = process.env.SSO_URL;
      const { status, statusText } = await axios.delete(
        `${url}/users/${request.params.id}`,
      );
      return await response.status(status).json(statusText);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // OK-testado - Somente quando envia todos os campos
  async updateUsuario(request: Request, response: Response): Promise<any> {
    try {
      const url = process.env.SSO_URL;

      const { status, data } = await axios.put(
        `${url}/users/${request.params.id}`,
        request.body,
      );
      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  // NOT OK-reprovado - basta usar o método update
  async mudarStatusUsuario(request: Request, response: Response): Promise<any> {
    try {
      const url = process.env.SSO_URL;

      const result = await axios.get(`${url}/users/id/${request.params.id}`);

      let status_atual = result.data.status;
      if (status_atual === 1) {
        status_atual = 0;
      } else {
        status_atual = 1;
      }

      const { status, data } = await axios.put(
        `${url}/users/${request.params.id}`,
        {
          status: status_atual,
        },
      );
      return await response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
  }

  /** fim testar */

  async authenticate(request: Request, response: Response): Promise<Response> {
    try {
      const dataFrontend: any = request.body;
      const url = process.env.SSO_URL;
      const user: UserSSO = dataFrontend;

      const { data, status } = await axios.post(`${url}/auth`, user, {
        headers: {
          Accept: 'application/json',
        },
      });

      return response.status(status).json(data);
    } catch (error) {
      return await AuthService.checkError(error, response);
    }
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
        'SIPAH_USUARIO_EXCLUIR',
        'SIPAH_USUARIO',
        'SIPAH_PACIENTE',
        'SIPAH_PACIENTE_EDITAR_FICHA_SOCIAL',
        'SIPAH_PACIENTE_VISUALIZAR_FICHA_SOCIAL',
        'SIPAH_PACIENTE_CAPTURAR_FOTO',
        'SIPAH_PACIENTE_VISUALIZAR_FOTO',
        'SIPAH_PACIENTE_IDENTIFICAR_INTERNADO',
        'SIPAH_PACIENTE_REGISTRAR_SAIDA',
        'SIPAH_ATENDIMENTO',
        'SIPAH_PACIENTE_RECEPCAO',
        'SIPAH_ADMINISTRADOR',
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

  static checkError(error: any, response: Response) {
    if (error && error.response) {
      return response.status(error.response.status).send();
    }
    if (error.code == 'ECONNREFUSED') {
      return response.status(404).send();
    }
    return response.status(500).send();
  }

  static convertSSOToUnit(modelSSO: any) {
    return {
      _id: modelSSO._id,
      nome: modelSSO.unit_name,
      status: modelSSO.status,
      systems: modelSSO.systems,
      excluido: modelSSO.excluido,
      cnpj: modelSSO.unit_cnpj,
      diretor: modelSSO.unit_director,
      created_at: modelSSO.created_at,
      updated_at: modelSSO.updated_at,
    };
  }
}

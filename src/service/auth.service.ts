import * as axios from "axios"; // urls com https


export class AuthService {
  static ROLES = {
    'USUARIO': 'SIPAH_USUARIO',
    'USUARIO_EXCLUIR': 'SIPAH_USUARIO_EXCLUIR',
    'CARACTERISTICA': 'SIPAH_CARACTERISTICA',
    'LOG': 'SIPAH_LOG',
    'PACIENTE': 'SIPAH_PACIENTE',
    'PACIENTE_EDITAR_ENTRADA': 'SIPAH_PACIENTE_EDITAR_ENTRADA',
    'PACIENTE_EDITAR_FICHA_SOCIAL': 'SIPAH_PACIENTE_EDITAR_FICHA_SOCIAL',
    'PACIENTE_CAPTURAR_FOTO': 'SIPAH_PACIENTE_CAPTURAR_FOTO',
    'PACIENTE_VISUALIZAR_FOTO': 'SIPAH_PACIENTE_VISUALIZAR_FOTO',
    'PACIENTE_IDENTIFICAR_INTERNADO': 'SIPAH_PACIENTE_IDENTIFICAR_INTERNADO',
    'PACIENTE_REGISTRAR_SAIDA': 'SIPAH_PACIENTE_REGISTRAR_SAIDA',
    'PACIENTE_VISUALIZAR_FICHA_SOCIAL': 'SIPAH_PACIENTE_VISUALIZAR_FICHA_SOCIAL',
    'PACIENTE_RECEPCAO' :'SIPAH_PACIENTE_RECEPCAO',
    'PACIENTE_SERVICO_SOCIAL' :'SIPAH_SERVICO_SOCIAL',
    'ATENDIMENTO': 'SIPAH_ATENDIMENTO',
    'ADMIN': 'SIPAH_ADMINISTRADOR'
  }
  constructor() { }

  login(user: string, pass: string) {
    //TODO: implementar requisicao para o SSO
  }

  static verify(token: string) {
    //TODO: Implementar integração com o sso
    return {
      'id': '62fce3201bc1df4518e69613',
      'user_name': 'André Lucas',
      'cpf': '99999999999',
      'unit_id': '62fcea7f97531b81063b8a70', // CNPJ
      'unit_name': 'HOSPITAL E PRONTO SOCORRO 28 DE AGOSTO',
      'roles': [
       // 'SIPAH_USUARIO',
       // 'SIPAH_PACIENTE',
       // 'SIPAH_PACIENTE_EDITAR_FICHA_SOCIAL',
        // 'SIPAH_PACIENTE_VISUALIZAR_FICHA_SOCIAL',
        // 'SIPAH_PACIENTE_CAPTURAR_FOTO',
        // 'SIPAH_PACIENTE_VISUALIZAR_FOTO',
        // 'SIPAH_PACIENTE_IDENTIFICAR_INTERNADO',
        // 'SIPAH_PACIENTE_REGISTRAR_SAIDA',
        //'SIPAH_ATENDIMENTO',
        'SIPAH_PACIENTE_RECEPCAO',
       // 'SIPAH_ADMINISTRADOR'
      ]
    };
  }

  static checkRoles(role: string, roles: Array<string>) {
    // Verifica se a role esta contida na lista 
    if (role && roles) {
      let result = roles.includes(role);
      if (result) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}

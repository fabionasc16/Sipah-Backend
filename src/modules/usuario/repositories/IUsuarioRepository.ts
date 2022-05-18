import { ICreateUsuarioDTO } from '../dtos/ICreateUsuarioDTO';

interface IUsuarioRepository {
  create(data: ICreateUsuarioDTO): Promise<any>;

  listById(id: string): Promise<any>;
  listByCPF(cpf_usuario: string): Promise<any>;
  listAllUsuario(): Promise<any[]>;
}

export { IUsuarioRepository };

import { ICreateUsuarioDTO } from '../modules/usuario/ICreateUsuarioDTO';
import { IUpdateUsuarioDTO } from '../modules/usuario/IUpdateUsuarioDTO';

interface IUsuarioRepository {
  create(data: any): Promise<any>;

  listById(id: string): Promise<any>;
  listByCPF(cpf: string): Promise<any>;
  listAllUsuario(params:any): any;
  delete(id: string): Promise<void>;
  update(id: string, data: IUpdateUsuarioDTO): Promise<void>;
}

export { IUsuarioRepository };

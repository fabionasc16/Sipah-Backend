import { ICreateUsuarioDTO } from './ICreateUsuarioDTO';
import { IUpdateUsuarioDTO } from './IUpdateUsuarioDTO';

interface IUsuarioRepository {
  create(data: ICreateUsuarioDTO): Promise<any>;

  listById(id: string): Promise<any>;
  listByCPF(cpf: string): Promise<any>;
  listAllUsuario(): Promise<any[]>;
  delete(id: string): Promise<void>;
  update(data: IUpdateUsuarioDTO): Promise<void>;
}

export { IUsuarioRepository };

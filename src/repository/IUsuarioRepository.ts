interface IUsuarioRepository {
  create(data: any): Promise<any>;

  listById(id: string): Promise<any>;
  listByCPF(cpf: string): Promise<any>;
  // listAllUsuario(paramsIn: any): Promise<any>;
  listAllUsuario(paramsIn: any, idunidade: any): Promise<any>;
  delete(id: string): Promise<void>;
  update(id: string, data: any): Promise<void>;
}

export { IUsuarioRepository };

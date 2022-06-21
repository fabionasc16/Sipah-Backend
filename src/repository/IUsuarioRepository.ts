interface IUsuarioRepository {
  create(data: any): Promise<any>;

  listById(id: string): Promise<any>;
  listByCPF(cpf: string): Promise<any>;
  listAllUsuario(params:any): any;
  delete(id: string): Promise<void>;
  update(id: string, data: any): Promise<void>;
}

export { IUsuarioRepository };

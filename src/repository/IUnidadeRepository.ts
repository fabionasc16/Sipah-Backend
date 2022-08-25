interface IUnidadeRepository {
  create(data: any): Promise<any>;
  list(paramsIn: any): any;
  listById(id: string): Promise<any>;
  listByCNPJ(cnpj: string): Promise<any>;
  delete(id: string): Promise<void>;
  update(id: string, data: any): Promise<void>;
}

export { IUnidadeRepository };

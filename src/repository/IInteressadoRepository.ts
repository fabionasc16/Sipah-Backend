interface IInteressadoRepository {
    create(data: any): Promise<any>;
    listById(id: string): Promise<any>;
    listByCPF(cpf: string): Promise<any>;
    listByIdExterno(idExterno: string): Promise<any>;
    listAllInteressado(params:any): any;
    delete(id: string): Promise<void>;
    update(id: string, data: any): Promise<void>;
  }
  
  export { IInteressadoRepository };
  
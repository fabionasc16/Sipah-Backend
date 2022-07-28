interface IBuscaRepository {
    create(data: any): Promise<any>;
    listById(id: string): Promise<any>;
    listByCPF(cpf: string): Promise<any>;
    listByIdPaciente(idPaciente: string): Promise<any>;
    listByIdInteressado(idInteressado: string): Promise<any>;
    listAllBusca(params:any): any;
  }
  
  export { IBuscaRepository };
  
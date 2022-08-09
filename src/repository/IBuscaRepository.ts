interface IBuscaRepository {
    create(data: any): Promise<any>;
    listByPaciente(params:any): Promise<any>;
    listByInteressado(params:any): Promise<any>;
    listAllBusca(params:any): any;
    listById(id: string): Promise<any>;
  }
  
  export { IBuscaRepository };
  
interface ITipoCaracteristicaRepository {
  create(name: string, id: string): Promise<any>;
  list(params:any): any;
  listById(id: string): Promise<any>;
  listByTipoCaracteristica(name: string, id: string): Promise<any>;
  update(id: string, name: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ITipoCaracteristicaRepository };

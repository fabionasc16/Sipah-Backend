interface ICaracteristicaRepository {
  create(name: string): Promise<any>;
  list(params:any): any;
  listById(id: string): Promise<any>;
  listByCaracteristica(name: string): Promise<any>;
  update(id: string, name: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICaracteristicaRepository };

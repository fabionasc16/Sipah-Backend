interface ITipoCabeloRepository {
  create(tipo_cabelo: string): Promise<any>;
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairType(tipo_cabelo: string): Promise<any>;
  update(id: string, tipo_cabelo: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ITipoCabeloRepository };

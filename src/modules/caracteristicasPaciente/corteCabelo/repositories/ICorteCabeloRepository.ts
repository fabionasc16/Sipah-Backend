interface ICorteCabeloRepository {
  create(corte_cabelo: string): Promise<any>;
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairCut(corte_cabelo: string): Promise<any>;
  update(id: string, corte_cabelo: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICorteCabeloRepository };

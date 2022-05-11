interface ICorteCabeloRepository {
  // Create Method
  create(corte_cabelo: string): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairCut(corte_cabelo: string): Promise<any>;

  // Update Method
  update(id: string, corte_cabelo: string): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ICorteCabeloRepository };

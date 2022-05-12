interface ITipoCabeloRepository {
  // Create Method
  create(tipo_cabelo: string): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairType(tipo_cabelo: string): Promise<any>;

  // Update Method
  update(id: string, tipo_cabelo: string): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ITipoCabeloRepository };

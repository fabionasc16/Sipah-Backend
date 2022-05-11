interface ICorCabeloRepository {
  // Create Method
  create(cor_cabelo: string): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairColor(cor_cabelo: string): Promise<any>;

  // Update Method
  update(id: string, cor_cabelo: string): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ICorCabeloRepository };

interface ICorOlhosRepository {
  // Create Method
  create(cor_olhos: string): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairColor(cor_olhos: string): Promise<any>;

  // Update Method
  update(id: string, cor_olhos: string): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ICorOlhosRepository };

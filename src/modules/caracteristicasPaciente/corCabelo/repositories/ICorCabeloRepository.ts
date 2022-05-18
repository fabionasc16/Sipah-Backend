interface ICorCabeloRepository {
  create(cor_cabelo: string): Promise<any>;
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairColor(cor_cabelo: string): Promise<any>;
  update(id: string, cor_cabelo: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICorCabeloRepository };

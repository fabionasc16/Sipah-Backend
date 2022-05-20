interface IBiotipoRepository {
  create(bio_tipo: string): Promise<any>;
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByBiotipo(bio_tipo: string): Promise<any>
  update(id: string, bio_tipo: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IBiotipoRepository };

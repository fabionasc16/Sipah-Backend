interface IRacaRepository {
  create(raca_etnia: string): Promise<any>;
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByRacaEtnia(raca_etnia: string): Promise<any>;
  update(id: string, raca_etnia: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IRacaRepository };

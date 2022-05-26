import { ICreateCadastroCaracteristicasDTO } from 'dto/ICreateCaracteristicasPacienteDTO';
import { IUpdateCaracteristicasPacienteDTO } from 'dto/IUpdateCaracteristicasPacienteDTO';
import { caracteristicas } from 'model/Caracteristicas.model';
import { ICadastroCaracteristicasRepository } from 'repository/ICadastroCaracteristicasRepository';

class CadastroCaracteristicasRepository
  implements ICadastroCaracteristicasRepository
{
  async create(data: ICreateCadastroCaracteristicasDTO): Promise<any> {
    const caracteristicasPaciente = await caracteristicas.create({
      raca_etnia: data.raca_etnia,
      cor_olhos: data.cor_olhos,
      biotipo: data.biotipo,
      cor_cabelos: data.cor_cabelos,
      tipo_cabelo: data.tipo_cabelo,
      corte_cabelo: data.corte_cabelo,
      estatura_aproximada: data.estatura_aproximada,
      peso_aproximado: data.peso_aproximado,
      idade_aproximada: data.idade_aproximada,
      tem_barba: data.tem_barba,
      tem_bigode: data.tem_bigode,
      sinais_particulares: data.sinais_particulares,
      acessorios_utilizados: data.acessorios_utilizados,
      deficiencias: data.deficiencias,
      vestimentas: data.vestimentas,
      local_encontrado: data.local_encontrado,
      bairro: data.bairro,
      condicoes_encontrado: data.condicoes_encontrado,
    });

    return caracteristicasPaciente;
  }

  async load(): Promise<any[]> {
    const caracteristicasPaciente = await caracteristicas.find();
    return caracteristicasPaciente;
  }

  async loadById(id: string): Promise<any> {
    const caracteristicasPaciente = await caracteristicas.findById(id);
    return caracteristicasPaciente;
  }

  async update(data: IUpdateCaracteristicasPacienteDTO): Promise<void> {
    await caracteristicas.findByIdAndUpdate(
      {
        _id: data.id,
      },
      {
        raca_etnia: data.raca_etnia,
        cor_olhos: data.cor_olhos,
        biotipo: data.biotipo,
        cor_cabelos: data.cor_cabelos,
        tipo_cabelo: data.tipo_cabelo,
        corte_cabelo: data.corte_cabelo,
        estatura_aproximada: data.estatura_aproximada,
        peso_aproximado: data.peso_aproximado,
        idade_aproximada: data.idade_aproximada,
        tem_barba: data.tem_barba,
        tem_bigode: data.tem_bigode,
        sinais_particulares: data.sinais_particulares,
        acessorios_utilizados: data.acessorios_utilizados,
        deficiencias: data.deficiencias,
        vestimentas: data.vestimentas,
        local_encontrado: data.local_encontrado,
        bairro: data.bairro,
        condicoes_encontrado: data.condicoes_encontrado,
      },
    );
  }

  async delete(id: string): Promise<void> {
    await caracteristicas.findByIdAndDelete(id);
  }
}

export { CadastroCaracteristicasRepository };

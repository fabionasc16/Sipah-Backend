import { ICreateCadastroCaracteristicasDTO } from '@modules/cadastroPaciente/dtos/caracteristicas/ICreateCaracteristicasPacienteDTO';

interface ICadastroCaracteristicasRepository {
  create(data: ICreateCadastroCaracteristicasDTO): Promise<any>;
  load(): Promise<any[]>;
}

export { ICadastroCaracteristicasRepository };

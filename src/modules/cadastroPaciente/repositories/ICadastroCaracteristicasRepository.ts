import { ICreateCadastroCaracteristicasDTO } from '@modules/cadastroPaciente/dtos/ICreateCaracteristicasPacienteDTO';

interface ICadastroCaracteristicasRepository {
  create(data: ICreateCadastroCaracteristicasDTO): Promise<any>;
}

export { ICadastroCaracteristicasRepository };

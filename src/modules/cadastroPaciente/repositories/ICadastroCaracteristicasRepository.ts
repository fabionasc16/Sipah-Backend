import { ICreateCadastroCaracteristicasDTO } from '@modules/cadastroPaciente/dtos/caracteristicas/ICreateCaracteristicasPacienteDTO';
import { IUpdateCaracteristicasPacienteDTO } from '@modules/cadastroPaciente/dtos/caracteristicas/IUpdateCaracteristicasPacienteDTO';

interface ICadastroCaracteristicasRepository {
  create(data: ICreateCadastroCaracteristicasDTO): Promise<any>;
  load(): Promise<any[]>;
  loadById(id: string): Promise<any>;
  update(data: IUpdateCaracteristicasPacienteDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICadastroCaracteristicasRepository };

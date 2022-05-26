import { ICreateCadastroCaracteristicasDTO } from 'dto/ICreateCaracteristicasPacienteDTO';
import { IUpdateCaracteristicasPacienteDTO } from 'dto/IUpdateCaracteristicasPacienteDTO';

interface ICadastroCaracteristicasRepository {
  create(data: ICreateCadastroCaracteristicasDTO): Promise<any>;
  load(): Promise<any[]>;
  loadById(id: string): Promise<any>;
  update(data: IUpdateCaracteristicasPacienteDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICadastroCaracteristicasRepository };

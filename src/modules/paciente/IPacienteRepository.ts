import { ICreatePacienteDTO } from './ICreatePacienteDTO';
import { IUpdatePacienteDTO } from './IUpdatePacienteDTO';

interface IPacienteRepository {
  create(data: ICreatePacienteDTO): Promise<any>;
  load(): Promise<any[]>;
  loadPaciente(nome_paciente: string): Promise<any>;
  loadById(id: string): Promise<any>;
  update(data: IUpdatePacienteDTO): Promise<void>;
  uploadImage(id: string, filename: string): Promise<any>;
  delete(id: string): Promise<void>;
}

export { IPacienteRepository };

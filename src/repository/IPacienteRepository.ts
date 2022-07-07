import { ICreatePacienteDTO } from '../dto/ICreatePacienteDTO';
import { IUpdatePacienteDTO } from '../dto/IUpdatePacienteDTO';

interface IPacienteRepository {
  create(data: ICreatePacienteDTO): Promise<any>;
  list(params: any): any;
  listsearch(params: any): any;
  listById(id: string): Promise<any>;
  delete(id: string): Promise<void>;
  update(id: string, data: IUpdatePacienteDTO): Promise<void>;
  uploadImage(id: string, filename: string): Promise<any>;
  loadImage(id: string): Promise<any>;

  // loadPaciente(nome_paciente: string): Promise<any>;
}

export { IPacienteRepository };

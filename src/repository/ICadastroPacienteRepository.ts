import { ICreateCadastroPacienteDTO } from 'dto/ICreateCadastroPacienteDTO';
import { IUpdateCadastroPacienteDTO } from 'dto/IUpdateCadastroPacienteDTO';

interface ICadastroPacienteRepository {
  create(data: ICreateCadastroPacienteDTO): Promise<any>;
  load(): Promise<any[]>;
  loadPaciente(nome_paciente: string): Promise<any>;
  loadById(id: string): Promise<any>;
  update(data: IUpdateCadastroPacienteDTO): Promise<void>;
  uploadImage(id: string, filename: string): Promise<any>;
  delete(id: string): Promise<void>;
}

export { ICadastroPacienteRepository };

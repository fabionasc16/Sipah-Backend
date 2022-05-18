import { ICreateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/pacientes/ICreateCadastroPacienteDTO';
import { IUpdateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/pacientes/IUpdateCadastroPacienteDTO';

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

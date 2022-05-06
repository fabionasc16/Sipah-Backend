import { ICreateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/ICreateCadastroPacienteDTO';

interface ICadastroPacienteRepository {
  create(data: ICreateCadastroPacienteDTO): Promise<any>;
  load(): Promise<any[]>;
  loadPaciente(nome_paciente: string): Promise<any>;
}

export { ICadastroPacienteRepository };

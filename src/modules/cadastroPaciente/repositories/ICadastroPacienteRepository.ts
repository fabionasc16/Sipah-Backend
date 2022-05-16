import { ICreateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/ICreateCadastroPacienteDTO';

interface ICadastroPacienteRepository {
  create(data: ICreateCadastroPacienteDTO): Promise<any>;
  list(): Promise<any[]>;
}

export { ICadastroPacienteRepository };

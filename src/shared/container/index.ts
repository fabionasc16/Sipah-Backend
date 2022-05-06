import { ICadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { CadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/implementations/CadastroCaracteristicasRepository';
import { CadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/implementations/CadastroPacienteRepository';
import { container } from 'tsyringe';

// * --------------------- Cadastro de Pacientes ---------------------

container.registerSingleton<ICadastroPacienteRepository>(
  'CadastroPacienteRepository',
  CadastroPacienteRepository,
);

container.registerSingleton<ICadastroCaracteristicasRepository>(
  'CadastroCaracteristicasRepository',
  CadastroCaracteristicasRepository,
);

// * -----------------------------------------------------------------

import { CaracteristicaRepository } from '../repository/implementations/CaracteristicaRepository';
import { ICaracteristicaRepository } from 'repository/ICaracteristicaRepository';
import { IPacienteRepository } from '@modules/paciente/IPacienteRepository';
import { PacienteRepository } from '@modules/paciente/PacienteRepository';
import { ITipoCaracteristicaRepository } from 'repository/ITipoCaracteristicaRepository';
import { TipoCaracteristicaRepository } from 'repository/implementations/TipoCaracteristicaRepository';
import { IUsuarioRepository } from '@modules/usuario/IUsuarioRepository';
import { UsuarioRepository } from '@modules/usuario/UsuarioRepository';
//import { ICadastroCaracteristicasRepository } from '../repository/ICaracteristicaRepository';
import { ICadastroPacienteRepository } from 'repository/ICadastroPacienteRepository';
//import { CadastroCaracteristicasRepository } from 'repository/implementations/CadastroCaracteristicasRepository';
import { CadastroPacienteRepository } from 'repository/implementations/CadastroPacienteRepository';
import { container } from 'tsyringe';

// * --------------------- Cadastro de Pacientes ---------------------

container.registerSingleton<ICadastroPacienteRepository>(
  'CadastroPacienteRepository',
  CadastroPacienteRepository,
);

// * ------------------------ Características ------------------------

container.registerSingleton<ICaracteristicaRepository>(
  'CaracteristicaRepository',
  CaracteristicaRepository,
);

container.registerSingleton<ITipoCaracteristicaRepository>(
  'TipoCaracteristicaRepository',
  TipoCaracteristicaRepository,
);

// * --------------------- Cadastro de Usuário ---------------------

container.registerSingleton<IUsuarioRepository>(
  'UsuarioRepository',
  UsuarioRepository,
);

container.registerSingleton<IPacienteRepository>(
  'PacienteRepository',
  PacienteRepository,
);

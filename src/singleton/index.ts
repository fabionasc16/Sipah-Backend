import { CaracteristicaRepository } from '@modules/caracteristica/CaracteristicaRepository';
import { ICaracteristicaRepository } from '@modules/caracteristica/ICaracteristicaRepository';
import { IPacienteRepository } from '@modules/paciente/IPacienteRepository';
import { PacienteRepository } from '@modules/paciente/PacienteRepository';
import { ITipoCaracteristicaRepository } from '@modules/tipoCaracteristica/ITipoCaracteristicaRepository';
import { TipoCaracteristicaRepository } from '@modules/tipoCaracteristica/TipoCaracteristicaRepository';
import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { UsuarioRepository } from 'repository/implementations/UsuarioRepository';
import { ICadastroCaracteristicasRepository } from 'repository/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from 'repository/ICadastroPacienteRepository';
import { CadastroCaracteristicasRepository } from 'repository/implementations/CadastroCaracteristicasRepository';
import { CadastroPacienteRepository } from 'repository/implementations/CadastroPacienteRepository';
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

import { CaracteristicaRepository } from 'repository/CaracteristicaRepository';
import { ICaracteristicaRepository } from 'repository/ICaracteristicaRepository';
import { IPacienteRepository } from 'repository/IPacienteRepository';
import { ITipoCaracteristicaRepository } from 'repository/ITipoCaracteristicaRepository';
import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { PacienteRepository } from 'repository/PacienteRepository';
import { TipoCaracteristicaRepository } from 'repository/TipoCaracteristicaRepository';
import { UsuarioRepository } from 'repository/UsuarioRepository';
import { container } from 'tsyringe';

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

import { CaracteristicaRepository } from 'repository/CaracteristicaRepository';
import { ICaracteristicaRepository } from 'repository/ICaracteristicaRepository';
import { IPacienteRepository } from 'repository/IPacienteRepository';
import { ITipoCaracteristicaRepository } from 'repository/ITipoCaracteristicaRepository';
import { PacienteRepository } from 'repository/PacienteRepository';
import { TipoCaracteristicaRepository } from 'repository/TipoCaracteristicaRepository';
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

// * --------------------- Cadastro de Paciente ---------------------

container.registerSingleton<IPacienteRepository>(
  'PacienteRepository',
  PacienteRepository,
);

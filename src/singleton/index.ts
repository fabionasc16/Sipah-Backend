import { CaracteristicaRepository } from 'repository/CaracteristicaRepository';
import { ICaracteristicaRepository } from 'repository/ICaracteristicaRepository';
import { IInteressadoRepository } from 'repository/IInteressadoRepository';
import { InteressadoRepository } from 'repository/InteressadoRepository';
import { IPacienteRepository } from 'repository/IPacienteRepository';
import { ITipoCaracteristicaRepository } from 'repository/ITipoCaracteristicaRepository';
import { IUnidadeRepository } from 'repository/IUnidadeRepository';
import { PacienteRepository } from 'repository/PacienteRepository';
import { TipoCaracteristicaRepository } from 'repository/TipoCaracteristicaRepository';
import { UnidadeRepository } from 'repository/unidade.repository';
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

// * --------------------- Cadastro de Interessado ---------------------

container.registerSingleton<IInteressadoRepository>(
  'InteressadoRepository',
  InteressadoRepository,
);

container.registerSingleton<IUnidadeRepository>(
  'UnidadeRepository',
  UnidadeRepository,
);

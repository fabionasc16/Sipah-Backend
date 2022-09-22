import { CaracteristicaRepository } from '../repository/CaracteristicaRepository';
import { ICaracteristicaRepository } from '../repository/ICaracteristicaRepository';
import { IPacienteRepository } from '../repository/IPacienteRepository';
import { ITipoCaracteristicaRepository } from '../repository/ITipoCaracteristicaRepository';
import { IUnidadeRepository } from '../repository/IUnidadeRepository';
import { UnidadeRepository } from '../repository/unidade.repository';
import { PacienteRepository } from '../repository/PacienteRepository';
import { TipoCaracteristicaRepository } from '../repository/TipoCaracteristicaRepository';
import { IInteressadoRepository } from '../repository/IInteressadoRepository';
import { InteressadoRepository } from '../repository/InteressadoRepository';
import { IBuscaRepository } from '../repository/IBuscaRepository';
import { BuscaRepository } from '../repository/BuscaRepository';

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

// * --------------------- Cadastro de Busca ---------------------

container.registerSingleton<IBuscaRepository>(
  'BuscaRepository',
  BuscaRepository,
);

container.registerSingleton<IUnidadeRepository>(
  'UnidadeRepository',
  UnidadeRepository,
);

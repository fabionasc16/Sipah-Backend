import { CaracteristicaRepository } from '../repository/implementations/CaracteristicaRepository';
import { ICaracteristicaRepository } from 'repository/ICaracteristicaRepository';
import { ITipoCaracteristicaRepository } from 'repository/ITipoCaracteristicaRepository';
import { TipoCaracteristicaRepository } from 'repository/implementations/TipoCaracteristicaRepository';
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


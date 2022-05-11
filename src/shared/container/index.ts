import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { CorCabeloRepository } from '@modules/corCabelo/repositories/implementations/CorCabeloRepository';
import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { CorteCabeloRepository } from '@modules/corteCabelo/repositories/implementations/CorteCabeloRepository';
import { TipoCabeloRepository } from '@modules/tipoCabelo/repositories/implementations/TipoCabeloRepository';
import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICorCabeloRepository>(
  'CorCabeloRepository',
  CorCabeloRepository,
);

container.registerSingleton<ICorteCabeloRepository>(
  'CorteCabeloRepository',
  CorteCabeloRepository,
);

container.registerSingleton<ITipoCabeloRepository>(
  'TipoCabeloRepository',
  TipoCabeloRepository,
);

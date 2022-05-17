import { ICadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { CadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/implementations/CadastroCaracteristicasRepository';
import { CadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/implementations/CadastroPacienteRepository';
import { ICorCabeloRepository } from '@modules/caracteristicasPaciente/corCabelo/repositories/ICorCabeloRepository';
import { CorCabeloRepository } from '@modules/caracteristicasPaciente/corCabelo/repositories/implementations/CorCabeloRepository';
import { ICorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/ICorteCabeloRepository';
import { CorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/implementations/CorteCabeloRepository';
import { TipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/implementations/TipoCabeloRepository';
import { ITipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/ITipoCabeloRepository';
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

import { ICadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { CadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/implementations/CadastroCaracteristicasRepository';
import { CadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/implementations/CadastroPacienteRepository';
import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { BiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/implementations/BiotipoRepository';
import { ICorCabeloRepository } from '@modules/caracteristicasPaciente/corCabelo/repositories/ICorCabeloRepository';
import { CorCabeloRepository } from '@modules/caracteristicasPaciente/corCabelo/repositories/implementations/CorCabeloRepository';
import { ICorOlhosRepository } from '@modules/caracteristicasPaciente/corOlhos/repositories/ICorOlhosRepository';
import { CorOlhosRepository } from '@modules/caracteristicasPaciente/corOlhos/repositories/implementations/CorOlhosRepository';
import { ICorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/ICorteCabeloRepository';
import { CorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/implementations/CorteCabeloRepository';
import { RacaRepository } from '@modules/caracteristicasPaciente/raca/repositories/implementations/RacaRepository';
import { IRacaRepository } from '@modules/caracteristicasPaciente/raca/repositories/IRacaRepository';
import { TipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/implementations/TipoCabeloRepository';
import { ITipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/ITipoCabeloRepository';
import { UsuarioRepository } from '@modules/usuario/repositories/implementations/UsuarioRepository';
import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
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

// * --------------------- Cadastro de Usuário ---------------------

container.registerSingleton<IUsuarioRepository>(
  'UsuarioRepository',
  UsuarioRepository,
);
container.registerSingleton<IBiotipoRepository>(
  'BiotipoRepository',
  BiotipoRepository,
);

container.registerSingleton<ICorOlhosRepository>(
  'CorOlhosRepository',
  CorOlhosRepository,
);

container.registerSingleton<IRacaRepository>('RacaRepository', RacaRepository);

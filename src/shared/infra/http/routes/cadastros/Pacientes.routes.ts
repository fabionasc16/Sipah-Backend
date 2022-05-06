import { CreateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/createCadastroPaciente/CreateCadastroPacienteController';
import { LoadCadastroPacienteController } from '@modules/cadastroPaciente/useCases/loadCadastroPaciente/LoadCadastroPacienteController';
import { Router } from 'express';

const pacientesRoutes = Router();

// * Métodos para cadastro de Pacientes
const createPaciente = new CreateCadastroPacienteController();
const loadPaciente = new LoadCadastroPacienteController();

// * Rotas para Cadastro de Pacientes
pacientesRoutes.post('/', createPaciente.handle);
pacientesRoutes.get('/', loadPaciente.handle);

export { pacientesRoutes };

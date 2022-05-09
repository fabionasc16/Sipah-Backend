import { CreateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/createCadastroPaciente/CreateCadastroPacienteController';
import { LoadCadastroPacienteController } from '@modules/cadastroPaciente/useCases/loadCadastroPaciente/LoadCadastroPacienteController';
import { UpdateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/updateCadastroPaciente/UpdateCadastroPacienteController';
import { Router } from 'express';

const pacientesRoutes = Router();

// * Métodos para cadastro de Pacientes
const createPaciente = new CreateCadastroPacienteController();
const loadPaciente = new LoadCadastroPacienteController();
const update = new UpdateCadastroPacienteController();

// * Rotas para Cadastro de Pacientes
pacientesRoutes.post('/', createPaciente.handle);
pacientesRoutes.get('/', loadPaciente.handle);
pacientesRoutes.put('/update/:pacienteid', update.handle);

export { pacientesRoutes };

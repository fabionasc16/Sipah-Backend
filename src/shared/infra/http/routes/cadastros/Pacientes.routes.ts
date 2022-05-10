import { CreateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/createCadastroPaciente/CreateCadastroPacienteController';
import { DeleteCadastroPacienteController } from '@modules/cadastroPaciente/useCases/deleteCadastroPaciente/DeleteCadastroPacienteController';
import { LoadCadastroPacienteController } from '@modules/cadastroPaciente/useCases/loadCadastroPaciente/LoadCadastroPacienteController';
import { UpdateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/updateCadastroPaciente/UpdateCadastroPacienteController';
import { Router } from 'express';

const pacientesRoutes = Router();

// * Métodos para cadastro de Pacientes
const createPaciente = new CreateCadastroPacienteController();
const loadPaciente = new LoadCadastroPacienteController();
const update = new UpdateCadastroPacienteController();
const purge = new DeleteCadastroPacienteController();

// * Rotas para Cadastro de Pacientes
pacientesRoutes.post('/', createPaciente.handle);
pacientesRoutes.get('/', loadPaciente.handle);
pacientesRoutes.put('/update/:pacienteid', update.handle);
pacientesRoutes.delete('/delete/:pacienteid', purge.handle);

export { pacientesRoutes };

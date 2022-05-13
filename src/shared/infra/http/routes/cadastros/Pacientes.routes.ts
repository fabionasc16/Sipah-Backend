import { CreateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/createCadastroPaciente/CreateCadastroPacienteController';
import { DeleteCadastroPacienteController } from '@modules/cadastroPaciente/useCases/deleteCadastroPaciente/DeleteCadastroPacienteController';
import { LoadCadastroPacienteController } from '@modules/cadastroPaciente/useCases/loadCadastroPaciente/LoadCadastroPacienteController';
import { LoadCadastroPacienteByIdController } from '@modules/cadastroPaciente/useCases/loadCadastroPacienteById/LoadCadastroPacienteByIdController';
import { UpdateCadastroPacienteController } from '@modules/cadastroPaciente/useCases/updateCadastroPaciente/UpdateCadastroPacienteController';
import { UploadImagensPacienteController } from '@modules/cadastroPaciente/useCases/uploadImagensPaciente/UploadImagensPacienteController';
import { upload } from 'config/upload';
import { Router } from 'express';

const pacientesRoutes = Router();

// * Métodos para cadastro de Pacientes
const createPaciente = new CreateCadastroPacienteController();
const loadPaciente = new LoadCadastroPacienteController();
const loadPacienteById = new LoadCadastroPacienteByIdController();
const update = new UpdateCadastroPacienteController();
const purge = new DeleteCadastroPacienteController();

const uploads = new UploadImagensPacienteController();

// * Rotas para Cadastro de Pacientes
pacientesRoutes.post('/', createPaciente.handle);
pacientesRoutes.get('/', loadPaciente.handle);
pacientesRoutes.get('/:id', loadPacienteById.handle);
pacientesRoutes.put('/update/:pacienteid', update.handle);
pacientesRoutes.delete('/delete/:pacienteid', purge.handle);

pacientesRoutes.post(
  '/upload/:pacienteid',
  upload.array('arquivos', 3),
  uploads.handle,
);

export { pacientesRoutes };

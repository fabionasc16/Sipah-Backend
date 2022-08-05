import { ICreatePacienteDTO } from '../dto/ICreatePacienteDTO';
import { IUpdatePacienteDTO } from '../dto/IUpdatePacienteDTO';

interface IPacienteRepository {
  create(data: ICreatePacienteDTO): Promise<any>;
  list(params: any): any;
  listsearch(params: any): any;
  listSearchOut(params: any): Promise<any>;
  listById(id: string): Promise<any>;
  listByExternalId(externalId: string): Promise<any>;
  delete(id: string): Promise<void>;
  // update(id: string, data: IUpdatePacienteDTO): Promise<void>;

  uploadImage(id: string, filename: string): Promise<any>;
  loadImage(id: string): Promise<any>;
  loadImageById(id: string): Promise<any>;
  loadImageByIdOpen(id: string): Promise<any>;
  deleteImage(id: string): Promise<void>;

  uploadTermo(id: string, filename: string): Promise<any>;
  loadTermo(id: string): Promise<any>;
  loadTermoById(id: string): Promise<any>;
  deleteTermo(id: string): Promise<void>;
  // discharged( id:string, data: any): Promise<void>;
  update(id: string, data: any): Promise<void>;
}

export { IPacienteRepository };

import { ICreateCorteCabeloDTO } from '@modules/corteCabelo/dtos/ICreateCorteCabeloDTO';
import { IUpdateCorteCabeloDTO } from '@modules/corteCabelo/dtos/IUpdateCorteCabeloDTO';

interface ICorteCabeloRepository {
  // Create Method
  create(data: ICreateCorteCabeloDTO): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairCut(nameCorteCabelo: string): Promise<any>;

  // Update Method
  update(data: IUpdateCorteCabeloDTO): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ICorteCabeloRepository };

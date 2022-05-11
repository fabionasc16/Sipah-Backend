import { ICreateCorCabeloDTO } from '@modules/corCabelo/dtos/ICreateCorCabeloDTO';
import { IUpdateCorCabeloDTO } from '@modules/corCabelo/dtos/IUpdateCorCabeloDTO';

interface ICorCabeloRepository {
  // Create Method
  create(data: ICreateCorCabeloDTO): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairColor(nameCorCabelo: string): Promise<any>;

  // Update Method
  update(data: IUpdateCorCabeloDTO): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ICorCabeloRepository };

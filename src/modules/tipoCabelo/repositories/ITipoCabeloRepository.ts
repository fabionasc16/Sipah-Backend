import { ICreateTipoCabeloDTO } from '@modules/tipoCabelo/dtos/ICreateTipoCabeloDTO';
import { IUpdateTipoCabeloDTO } from '@modules/tipoCabelo/dtos/IUpdateTipoCabeloDTO';

interface ITipoCabeloRepository {
  // Create Method
  create(data: ICreateTipoCabeloDTO): Promise<any>;

  // Listen Methods
  list(): Promise<any[]>;
  listById(id: string): Promise<any>;
  listByHairType(nameTipoCabelo: string): Promise<any>;

  // Update Method
  update(data: IUpdateTipoCabeloDTO): Promise<void>;

  // Delete Method
  delete(id: string): Promise<void>;
}

export { ITipoCabeloRepository };

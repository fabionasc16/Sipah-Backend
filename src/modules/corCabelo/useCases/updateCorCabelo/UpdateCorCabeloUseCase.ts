import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  nameCorCabelo?: string;
}

@injectable()
class UpdateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}
  async execute({ id, nameCorCabelo }: IRequest): Promise<void> {
    if (!id) {
      throw new AppError('Provide an Product ID to update data');
    }

    const corCabeloId = await this.corCabeloRepository.listById(id);
    if (!corCabeloId) {
      throw new AppError('Product not found in database', 404);
    }

    if (nameCorCabelo) {
      corCabeloId.nameCorCabelo = nameCorCabelo;
    } else {
      throw new AppError('There are not a nameCorCabelo argument', 404);
    }

    await this.corCabeloRepository.update(corCabeloId);
  }
}

export { UpdateCorCabeloUseCase };

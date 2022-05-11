import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}
  async execute(id: string, cor_cabelo: string): Promise<void> {
    if (!id) {
      throw new AppError('Provide an cor_cabelo ID to update data');
    }

    const corCabeloId = await this.corCabeloRepository.listById(id);
    if (!corCabeloId) {
      throw new AppError('Product not found in database', 404);
    }

    if (cor_cabelo) {
      corCabeloId.cor_cabelo = cor_cabelo;
    } else {
      throw new AppError('There are not a cor_cabelo argument', 404);
    }

    await this.corCabeloRepository.update(id, cor_cabelo);
  }
}

export { UpdateCorCabeloUseCase };

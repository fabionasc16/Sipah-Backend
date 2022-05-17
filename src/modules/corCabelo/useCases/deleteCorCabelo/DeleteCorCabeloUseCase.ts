import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const corCabelo = await this.corCabeloRepository.listById(id);
    if (!corCabelo) {
      throw new AppError('Product not found', 404);
    }

    await this.corCabeloRepository.delete(id);
  }
}

export { DeleteCorCabeloUseCase };

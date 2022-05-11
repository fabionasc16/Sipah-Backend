import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const tipoCabelo = await this.tipoCabeloRepository.listById(id);
    if (!tipoCabelo) {
      throw new AppError('Product not found', 404);
    }

    await this.tipoCabeloRepository.delete(id);
  }
}

export { DeleteTipoCabeloUseCase };

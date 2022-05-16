import { ICorOlhosRepository } from '@modules/CorOlhos/repositories/IOlhosRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteOlhosUseCase {
  constructor(
    @inject('CorOlhosRepository')
    private corolhosRepository: ICorOlhosRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const corolhos = await this.corolhosRepository.listById(id);
    if (!corolhos) {
      throw new AppError('Product not found', 404);
    }

    await this.corolhosRepository.delete(id);
  }
}

export { DeleteOlhosUseCase };

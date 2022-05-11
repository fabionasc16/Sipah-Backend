import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const corteCabelo = await this.corteCabeloRepository.listById(id);
    if (!corteCabelo) {
      throw new AppError('CorteCabelo not found', 404);
    }

    await this.corteCabeloRepository.delete(id);
  }
}

export { DeleteCorteCabeloUseCase };

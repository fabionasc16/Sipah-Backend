import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}
  async execute(id: string, corte_cabelo: string): Promise<void> {
    if (!id) {
      throw new AppError('Provide an Product ID to update data');
    }

    const corteCabeloId = await this.corteCabeloRepository.listById(id);
    if (!corteCabeloId) {
      throw new AppError('It not found in database', 404);
    }

    if (corte_cabelo) {
      corteCabeloId.corte_cabelo = corte_cabelo;
    } else {
      throw new AppError('There are not a corte_cabelo argument', 404);
    }

    await this.corteCabeloRepository.update(id, corte_cabelo);
  }
}

export { UpdateCorteCabeloUseCase };

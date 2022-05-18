import { ICorOlhosRepository } from '@modules/caracteristicasPaciente/corOlhos/repositories/ICorOlhosRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateOlhosUseCase {
  constructor(
    @inject('CorOlhosRepository')
    private corolhosRepository: ICorOlhosRepository,
  ) {}
  async execute(id: string, cor_olhos: string): Promise<void> {
    if (!id) {
      throw new AppError('Provide an eye color ID to update data');
    }

    const corolhosId = await this.corolhosRepository.listById(id);
    if (!corolhosId) {
      throw new AppError('Product not found in database', 404);
    }

    if (cor_olhos) {
      corolhosId.cor_olhos = cor_olhos;
    } else {
      throw new AppError('There are not a eye color argument', 404);
    }

    await this.corolhosRepository.update(id, cor_olhos);
  }
}

export { UpdateOlhosUseCase };

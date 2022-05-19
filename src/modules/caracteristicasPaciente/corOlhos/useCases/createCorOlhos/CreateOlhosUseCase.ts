import { ICorOlhosRepository } from '@modules/caracteristicasPaciente/corOlhos/repositories/ICorOlhosRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateOlhosUseCase {
  constructor(
    @inject('CorOlhosRepository')
    private corolhosRepository: ICorOlhosRepository,
  ) {}

  async execute(cor_olhos: string): Promise<any> {
    const corolhosExists = await this.corolhosRepository.listByHairColor(
      cor_olhos,
    );
    if (corolhosExists) {
      throw new AppError('This eye color already registered!', 404);
    }

    const corolhosCreated = await this.corolhosRepository.create(cor_olhos);

    return corolhosCreated;
  }
}

export { CreateOlhosUseCase };

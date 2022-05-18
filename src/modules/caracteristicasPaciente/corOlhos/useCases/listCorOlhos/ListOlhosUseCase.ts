import { ICorOlhosRepository } from '@modules/caracteristicasPaciente/corOlhos/repositories/ICorOlhosRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListOlhosUseCase {
  constructor(
    @inject('CorOlhosRepository')
    private corolhosRepository: ICorOlhosRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.corolhosRepository.list();

    if (data == null) {
      throw new AppError('No registered eye color in the database', 404);
    }

    return data;
  }
}

export { ListOlhosUseCase };

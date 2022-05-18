import { ICorOlhosRepository } from '@modules/caracteristicasPaciente/corOlhos/repositories/ICorOlhosRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListOlhosByIdUseCase {
  constructor(
    @inject('CorOlhosRepository')
    private corolhosRepository: ICorOlhosRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.corolhosRepository.listById(id);
    if (data == null) {
      throw new AppError('None eye Color was found in database!', 404);
    }

    return data;
  }
}

export { ListOlhosByIdUseCase };

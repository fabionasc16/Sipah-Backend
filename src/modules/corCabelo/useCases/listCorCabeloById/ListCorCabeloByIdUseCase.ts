import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListCorCabeloByIdUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.corCabeloRepository.listById(id);
    if (data == null) {
      throw new AppError('None Hair Color was found in database!', 404);
    }

    return data;
  }
}

export { ListCorCabeloByIdUseCase };

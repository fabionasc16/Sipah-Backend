import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class ListCorCabeloByIdUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const data = await this.corCabeloRepository.listById(id);
    if (!data) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }
}

export { ListCorCabeloByIdUseCase };

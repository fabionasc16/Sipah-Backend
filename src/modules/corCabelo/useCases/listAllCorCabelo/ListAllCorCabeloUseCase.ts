import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class ListAllCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = await this.corCabeloRepository.list();

    if (data.length === 0) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }
}

export { ListAllCorCabeloUseCase };

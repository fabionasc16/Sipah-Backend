import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListAllCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.corCabeloRepository.list();

    if (data == null) {
      throw new AppError('No registered hair color in the database', 404);
    }

    return data;
  }
}

export { ListAllCorCabeloUseCase };

import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListAllTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.tipoCabeloRepository.list();

    if (data == null) {
      throw new AppError('No registered hair type in the database', 404);
    }

    return data;
  }
}

export { ListAllTipoCabeloUseCase };

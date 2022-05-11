import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListTipoCabeloByIdUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.tipoCabeloRepository.listById(id);
    if (data == null) {
      throw new AppError('None Hair Type was found in database!', 404);
    }

    return data;
  }
}

export { ListTipoCabeloByIdUseCase };

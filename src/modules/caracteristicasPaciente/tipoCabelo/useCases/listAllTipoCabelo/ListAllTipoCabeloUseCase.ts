import { ITipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class ListAllTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = await this.tipoCabeloRepository.list();

    if (data.length === 0) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }
}

export { ListAllTipoCabeloUseCase };

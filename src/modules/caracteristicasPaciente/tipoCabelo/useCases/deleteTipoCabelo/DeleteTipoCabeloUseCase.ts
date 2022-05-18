import { ITipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class DeleteTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID da Característica`,
      );
    }

    const tipoCabelo = await this.tipoCabeloRepository.listById(id);
    if (!tipoCabelo) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    await this.tipoCabeloRepository.delete(id);
  }
}

export { DeleteTipoCabeloUseCase };

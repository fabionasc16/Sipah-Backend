import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

interface IRequest {
  id: string;
  nameTipoCabelo?: string;
}

@injectable()
class UpdateTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}
  async execute(id: string, tipo_cabelo: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID da Característica`,
      );
    }

    const tipoCabeloId = await this.tipoCabeloRepository.listById(id);
    if (!tipoCabeloId) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    if (tipo_cabelo) {
      tipoCabeloId.tipo_cabelo = tipo_cabelo;
    }

    await this.tipoCabeloRepository.update(
      tipoCabeloId._id,
      tipoCabeloId.tipo_cabelo,
    );
  }
}

export { UpdateTipoCabeloUseCase };

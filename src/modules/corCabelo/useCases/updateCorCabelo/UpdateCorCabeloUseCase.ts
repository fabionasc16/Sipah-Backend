import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class UpdateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}
  async execute(id: string, cor_cabelo: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const corCabeloId = await this.corCabeloRepository.listById(id);
    if (!corCabeloId) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    if (cor_cabelo) {
      corCabeloId.cor_cabelo = cor_cabelo;
    }

    await this.corCabeloRepository.update(
      corCabeloId._id,
      corCabeloId.cor_cabelo,
    );
  }
}

export { UpdateCorCabeloUseCase };

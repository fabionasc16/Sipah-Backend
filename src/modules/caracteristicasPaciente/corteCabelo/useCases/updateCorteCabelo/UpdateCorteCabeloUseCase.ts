import { ICorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/ICorteCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class UpdateCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}
  async execute(id: string, corte_cabelo: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const corteCabeloId = await this.corteCabeloRepository.listById(id);
    if (!corteCabeloId) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    if (corte_cabelo) {
      corteCabeloId.corte_cabelo = corte_cabelo;
    }

    await this.corteCabeloRepository.update(
      corteCabeloId._id,
      corteCabeloId.corte_cabelo,
    );
  }
}

export { UpdateCorteCabeloUseCase };

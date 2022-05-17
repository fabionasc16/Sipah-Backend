import { ICorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class DeleteCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Corte do Cabelo`,
      );
    }

    const corteCabelo = await this.corteCabeloRepository.listById(id);
    if (!corteCabelo) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    await this.corteCabeloRepository.delete(id);
  }
}

export { DeleteCorteCabeloUseCase };

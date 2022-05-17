import { ICorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute(corte_cabelo: string): Promise<any> {
    const corteCabeloExists = await this.corteCabeloRepository.listByHairCut(
      corte_cabelo,
    );

    if (corteCabeloExists != null) {
      throw new AppError('This hair cut already registered!', 404);
    }

    const corteCabeloCreated = await this.corteCabeloRepository.create(
      corte_cabelo,
    );

    return corteCabeloCreated;
  }
}

export { CreateCorteCabeloUseCase };

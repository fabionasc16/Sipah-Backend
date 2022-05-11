import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(tipo_cabelo: string): Promise<any> {
    const tipoCabeloExists = await this.tipoCabeloRepository.listByHairType(
      tipo_cabelo,
    );

    if (tipoCabeloExists != null) {
      throw new AppError('This hair type already registered!', 404);
    }

    const tipoCabeloCreated = await this.tipoCabeloRepository.create(
      tipo_cabelo,
    );

    return tipoCabeloCreated;
  }
}

export { CreateTipoCabeloUseCase };

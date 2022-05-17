import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class CreateTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute(tipo_cabelo: string): Promise<any> {
    if (!tipo_cabelo) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: Tipo de Cabelo`);
    }
    const tipoCabeloExists = await this.tipoCabeloRepository.listByHairType(
      tipo_cabelo,
    );

    if (tipoCabeloExists) {
      throw new AppError(Messages.CHARACTERISTICS_ALREADY_EXISTS);
    }

    const tipoCabeloCreated = await this.tipoCabeloRepository.create(
      tipo_cabelo,
    );

    return tipoCabeloCreated;
  }
}

export { CreateTipoCabeloUseCase };

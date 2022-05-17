import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class CreateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(cor_cabelo: string): Promise<any> {
    if (!cor_cabelo) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: Cor do Cabelo`);
    }
    const corCabeloExists = await this.corCabeloRepository.listByHairColor(
      cor_cabelo,
    );
    if (corCabeloExists) {
      throw new AppError(Messages.CHARACTERISTICS_ALREADY_EXISTS);
    }

    const corCabeloCreated = await this.corCabeloRepository.create(cor_cabelo);

    return corCabeloCreated;
  }
}

export { CreateCorCabeloUseCase };

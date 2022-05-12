import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(cor_cabelo: string): Promise<any> {
    const corCabeloExists = await this.corCabeloRepository.listByHairColor(
      cor_cabelo,
    );
    if (corCabeloExists) {
      throw new AppError('This hair color already registered!', 404);
    }

    const corCabeloCreated = await this.corCabeloRepository.create(cor_cabelo);

    return corCabeloCreated;
  }
}

export { CreateCorCabeloUseCase };

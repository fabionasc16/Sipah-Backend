import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute(nameCorCabelo: string): Promise<any> {
    console.log(`From useCase: ${nameCorCabelo}`);
    const corCabeloExists = await this.corCabeloRepository.listByHairColor(
      nameCorCabelo,
    );
    if (corCabeloExists) {
      throw new AppError('This hair color already registered!', 404);
    }

    const corCabeloCreated = await this.corCabeloRepository.create({
      nameCorCabelo,
    });

    return corCabeloCreated;
  }
}

export { CreateCorCabeloUseCase };

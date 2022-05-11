import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  nameCorCabelo: string;
}

@injectable()
class CreateCorCabeloUseCase {
  constructor(
    @inject('CorCabeloRepository')
    private corCabeloRepository: ICorCabeloRepository,
  ) {}

  async execute({ nameCorCabelo }: IRequest): Promise<any> {
    const corCabeloExists = await this.corCabeloRepository.listByHairColor(
      String(nameCorCabelo),
    );
    if (corCabeloExists != null) {
      throw new AppError('This hair color already registered!', 404);
    }

    const corCabeloCreated = await this.corCabeloRepository.create({
      nameCorCabelo,
    });

    return corCabeloCreated;
  }
}

export { CreateCorCabeloUseCase };

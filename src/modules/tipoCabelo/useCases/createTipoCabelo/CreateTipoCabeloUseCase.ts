import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  nameTipoCabelo: string;
}

@injectable()
class CreateTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}

  async execute({ nameTipoCabelo }: IRequest): Promise<any> {
    const tipoCabeloExists = await this.tipoCabeloRepository.listByHairType(
      String(nameTipoCabelo),
    );

    if (tipoCabeloExists != null) {
      throw new AppError('This hair type already registered!', 404);
    }

    const tipoCabeloCreated = await this.tipoCabeloRepository.create({
      nameTipoCabelo,
    });

    return tipoCabeloCreated;
  }
}

export { CreateTipoCabeloUseCase };

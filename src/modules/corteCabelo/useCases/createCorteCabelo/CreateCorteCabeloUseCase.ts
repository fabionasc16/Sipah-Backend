import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  nameCorteCabelo: string;
}

@injectable()
class CreateCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute({ nameCorteCabelo }: IRequest): Promise<any> {
    const corteCabeloExists = await this.corteCabeloRepository.listByHairCut(
      String(nameCorteCabelo),
    );

    if (corteCabeloExists != null) {
      throw new AppError('This hair cut already registered!', 404);
    }

    const corteCabeloCreated = await this.corteCabeloRepository.create({
      nameCorteCabelo,
    });

    return corteCabeloCreated;
  }
}

export { CreateCorteCabeloUseCase };

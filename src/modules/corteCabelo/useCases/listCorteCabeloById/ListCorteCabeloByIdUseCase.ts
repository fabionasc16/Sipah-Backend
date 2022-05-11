import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListCorteCabeloByIdUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.corteCabeloRepository.listById(id);
    if (data == null) {
      throw new AppError('None Hair Cut was found in database!', 404);
    }

    return data;
  }
}

export { ListCorteCabeloByIdUseCase };

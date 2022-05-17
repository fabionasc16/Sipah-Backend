import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListAllCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.corteCabeloRepository.list();

    if (data == null) {
      throw new AppError('No registered hair type in the database', 404);
    }

    return data;
  }
}

export { ListAllCorteCabeloUseCase };

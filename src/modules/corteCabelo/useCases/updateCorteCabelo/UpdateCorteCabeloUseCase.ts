import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  nameCorteCabelo?: string;
}

@injectable()
class UpdateCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}
  async execute({ id, nameCorteCabelo }: IRequest): Promise<void> {
    if (!id) {
      throw new AppError('Provide an Product ID to update data');
    }

    const corteCabeloId = await this.corteCabeloRepository.listById(id);
    if (!corteCabeloId) {
      throw new AppError('It not found in database', 404);
    }

    if (nameCorteCabelo) {
      corteCabeloId.nameCorteCabelo = nameCorteCabelo;
    } else {
      throw new AppError('There are not a nameCorteCabelo argument', 404);
    }

    await this.corteCabeloRepository.update(corteCabeloId);
  }
}

export { UpdateCorteCabeloUseCase };

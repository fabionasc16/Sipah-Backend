import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  nameTipoCabelo?: string;
}

@injectable()
class UpdateTipoCabeloUseCase {
  constructor(
    @inject('TipoCabeloRepository')
    private tipoCabeloRepository: ITipoCabeloRepository,
  ) {}
  async execute(id: string, tipo_cabelo: string): Promise<void> {
    if (!id) {
      throw new AppError('Provide an Product ID to update data');
    }

    const tipoCabeloId = await this.tipoCabeloRepository.listById(id);
    if (!tipoCabeloId) {
      throw new AppError('It not found in database', 404);
    }

    if (tipo_cabelo) {
      tipoCabeloId.tipo_cabelo = tipo_cabelo;
    } else {
      throw new AppError('There are not a nameTipoCabelo argument', 404);
    }

    await this.tipoCabeloRepository.update(id, tipo_cabelo);
  }
}

export { UpdateTipoCabeloUseCase };

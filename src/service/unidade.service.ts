import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { IUnidadeRepository } from 'repository/IUnidadeRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UnidadeService {
  constructor(
    @inject('UnidadeRepository')
    private unidadeRepository: IUnidadeRepository,
  ) {}

  async create(data: any): Promise<any> {
    const result = await this.unidadeRepository.create(data);
    return result;
  }

  async list(params: any) {
    const result = await this.unidadeRepository.list(params);
    if (result.length === 0) {
      throw new AppError(Messages.NO_UNIDADE_REGISTERED, 404);
    }

    return result;
  }

  async listById(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID da Unidade`);
    }

    const result = await this.unidadeRepository.listById(id);
    if (!result) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return result;
  }

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID da Unidade de Saúde`,
      );
    }

    const result = await this.unidadeRepository.listById(id);
    if (!result) {
      throw new AppError(Messages.UNIDADE_NOT_FOUND, 404);
    }

    return await this.unidadeRepository.delete(id);
  }

  async update(id: string, data: any): Promise<void> {
    return this.unidadeRepository.update(id, data);
  }
}

export { UnidadeService };

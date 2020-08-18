import { AbstractCustomError } from '../../errors';

export abstract class AbstractUseCase {
    abstract execute(params?: any): Promise<any | AbstractCustomError>;
}
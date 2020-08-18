import { AbstractUseCase, CertificateEntity } from 'src/app/core/domain';
import { AbstractCertificatesRepository } from '../repositories/abstract.certificates.repository';
import { AbstractCustomError } from 'src/app/core/errors';
import { Injectable } from '@angular/core';

@Injectable()
export class CertificateUseCase extends AbstractUseCase {

    constructor(private repo: AbstractCertificatesRepository) {
        super();
    }

    execute(): Promise<CertificateEntity[] | AbstractCustomError> {
        return this.repo.getCertificates();
    }

}
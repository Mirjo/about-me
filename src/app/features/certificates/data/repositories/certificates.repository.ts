import { Injectable } from "@angular/core";
import { CertificateEntity } from 'src/app/core/domain';
import { AbstractCustomError, CustomError } from 'src/app/core/errors';
import { AbstractCertificatesRepository } from '../../domain/repositories/abstract.certificates.repository';
import { AbstractCertificatesDataSource } from '../data-sources/abstract.certificates.data.source';

@Injectable()
export class CertificatesRepository extends AbstractCertificatesRepository {

    constructor(private dataSource: AbstractCertificatesDataSource) {
        super();
    }

    async getCertificates(): Promise<CertificateEntity[] | AbstractCustomError> {
        try {
            return this.dataSource.getCertificates();
        } catch (e) {
            if (e instanceof AbstractCustomError) {
                return e;
            } else {
                return new CustomError(e.message);
            }
        }
    }
}
import { AbstractCustomError } from 'src/app/core/errors';
import { CertificateEntity } from 'src/app/core/domain';

export abstract class AbstractCertificatesRepository {
    abstract getCertificates(): Promise<CertificateEntity[] | AbstractCustomError>
}
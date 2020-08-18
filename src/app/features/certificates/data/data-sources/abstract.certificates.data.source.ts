import { AbstractDataSource } from 'src/app/core/data';
import { CertificateModel } from 'src/app/core/data/models/certificate.model';

export abstract class AbstractCertificatesDataSource extends AbstractDataSource {
    abstract getCertificates(): Promise<CertificateModel[]>;
}
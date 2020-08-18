import { CertificateModel } from 'src/app/core/data/models/certificate.model';
import { AbstractCertificatesDataSource } from './abstract.certificates.data.source';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalCertificatesDataSource extends AbstractCertificatesDataSource {

    getCertificates(): Promise<CertificateModel[]> {
        return Promise.resolve([
            new CertificateModel({
                dateOfIssue: new Date,
                name: 'Cert 1',
                organization: 'Self assigned'
            }),
            new CertificateModel({
                dateOfIssue: new Date,
                name: 'Cert 1',
                organization: 'Organization 2'
            }),
        ])
    }

}
import { NgModule } from '@angular/core';
import { AbstractCertificatesDataSource } from './data/data-sources/abstract.certificates.data.source';
import { LocalCertificatesDataSource } from './data/data-sources/local.certificates.data.source';
import { CertificateUseCase } from './domain/use-case/certificates.use.case';
import { AbstractCertificatesRepository } from './domain/repositories/abstract.certificates.repository';
import { CertificatesRepository } from './data/repositories/certificates.repository';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        CertificateUseCase,
        {
            provide: AbstractCertificatesDataSource,
            useClass: LocalCertificatesDataSource
        },
        {
            provide: AbstractCertificatesRepository,
            useClass: CertificatesRepository
        }
    ]

})
export class CertificatesModule { }
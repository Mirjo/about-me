import { CertificateModel } from 'src/app/core/data/models/certificate.model';
import { AbstractCertificatesDataSource } from './abstract.certificates.data.source';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalCertificatesDataSource extends AbstractCertificatesDataSource {

    getCertificates(): Promise<CertificateModel[]> {
        return Promise.resolve([
            new CertificateModel({
                dateOfIssue: new Date(2020, 2, 27),
                name: 'Professional Scrum Master I',
                organization: 'Scrum.org',
                certificateId: '509731',
                miniIcon: 'https://static.scrum.org/web/badges/badge-psmi.svg'
            }),
            new CertificateModel({
                dateOfIssue: new Date(2020, 2, 27),
                name: 'Professional Scrum Product Owner I',
                organization: 'Scum.org',
                certificateId: '509684',
                miniIcon: 'https://static.scrum.org/web/badges/badge-pspoi.svg'
            }),
            new CertificateModel({
                dateOfIssue: new Date(2016, 6, 17),
                name: 'ITIL Foundation certificate in IT Service Management',
                organization: 'APMG International',
                certificateId: '2000420095',
            }),
            new CertificateModel({
                dateOfIssue: new Date(2017, 6, 19),
                name: 'Cambridge English Level 1 Certificate ESOL International (Business Vantage)',
                organization: 'University of Cambridge',
                certificateId: 'A4186065',
            })
        ]);
    }
}

import { AbstractEntity } from '../index';
import { CertificateModel } from '../../data/models/certificate.model';

export class CertificateEntity extends AbstractEntity {

    dateOfIssue: Date;
    miniIcon: string;
    organization: string;

    constructor(obj: Partial<CertificateEntity>) {
        super(obj);

        this.dateOfIssue = obj.dateOfIssue;
        this.miniIcon = obj.miniIcon;
        this.organization = obj.organization;

    }

    static fromModel(model: CertificateModel): CertificateEntity {
        return new CertificateEntity(model);
    }
}
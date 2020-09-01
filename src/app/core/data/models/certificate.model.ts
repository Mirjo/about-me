import { AbstractModel } from './abstract.model';
import { CertificateEntity } from '../../domain';

export class CertificateModel extends AbstractModel {
    dateOfIssue: Date;
    miniIcon: string;
    organization: string;
    certificateId: string;

    constructor(obj: Partial<CertificateModel>) {
        super(obj);

        this.dateOfIssue = obj.dateOfIssue;
        this.miniIcon = obj.miniIcon;
        this.organization = obj.organization;
        this.certificateId = obj.certificateId;
    }

    static fromEntity(entity: CertificateEntity): CertificateModel {
        return new CertificateModel(entity);
    }
}
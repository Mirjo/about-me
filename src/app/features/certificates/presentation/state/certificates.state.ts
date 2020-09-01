import { State } from '@ngxs/store';
import { CertificateEntity } from 'src/app/core/domain';
import { CustomError } from 'src/app/core/errors';

export interface CertificatesStateModel {

    isLoading: boolean;
    error: CustomError;
    certificates: CertificateEntity[];

}

@State<CertificatesStateModel>({
    name: 'certificateState',
    defaults: {
        certificates: undefined,
        error: undefined,
        isLoading: false
    }
})
export class CertificatesState { }

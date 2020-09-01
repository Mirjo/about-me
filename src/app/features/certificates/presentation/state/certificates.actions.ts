import { CertificateEntity } from 'src/app/core/domain';
import { CustomError } from 'src/app/core/errors';

export class SetError {
    static readonly type = '[Certificates] SetError';
    constructor(public readonly payload?: CustomError) { }
}

export class UnsetError {
    static readonly type = '[Certificates] UnsetError';
}

export class SetLoading {
    static readonly type = '[Certificates] SetLoading';
}

export class UnsetLoading {
    static readonly type = '[Certificates] UnsetLoading';
}

export class SetCertificates {
    static readonly type = '[Certificates] SetCertificates';
    constructor(public readonly payload?: CertificateEntity[]) { }
}

export class UnsetCertificates {
    static readonly type = '[Certificates] UnsetCertificates';
}

export class ResetState {
    static readonly type = '[Certificates] ResetState';
}




import { CertificateUseCase } from './certificates.use.case';
import { AbstractCertificatesRepository } from '../repositories/abstract.certificates.repository';
import { CertificateEntity } from 'src/app/core/domain';
import { AbstractCustomError, CustomError } from 'src/app/core/errors';
import { CertificatesRepository } from '../../data/repositories/certificates.repository';

class MockRepo extends AbstractCertificatesRepository {
    getCertificates(): Promise<CertificateEntity[] | AbstractCustomError> {
        return undefined;
    }
}

describe('[FEATURE | CERTIFICATES | USE CASE ]', () => {

    let uc: CertificateUseCase;
    const repo = new MockRepo();

    beforeEach((() => {
        uc = new CertificateUseCase(repo);
    }));

    it('should return an array of values', async () => {
        const fixture = [
            new CertificateEntity({
                dateOfIssue: new Date(),
                name: 'Cert 1',
                organization: 'Self assigned'
            }),
            new CertificateEntity({
                dateOfIssue: new Date(),
                name: 'Cert 1',
                organization: 'Organization 2'
            }),
        ];


        spyOn(repo, 'getCertificates').and.returnValue(Promise.resolve(fixture));

        const result = await uc.execute();

        expect(result).toEqual(fixture);
    });

    it('should return an array of values', async () => {

        spyOn(repo, 'getCertificates').and.returnValue(Promise.resolve(new CustomError()));

        const result = await uc.execute();

        expect(result).toEqual(new CustomError());
    });
});

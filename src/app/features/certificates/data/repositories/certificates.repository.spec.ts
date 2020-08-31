import { CertificateModel } from 'src/app/core/data/models/certificate.model';
import { MockCertificatesDataSource } from '../data-sources/mock.certificates.data.source';
import { CertificatesRepository } from './certificates.repository';
import { CertificateEntity } from 'src/app/core/domain';
import { CustomError } from 'src/app/core/errors';

describe('[FEATURE | CERTIFICATES | REPOSITORY ]', () => {

    let repo: CertificatesRepository;
    const ds = new MockCertificatesDataSource();

    beforeEach((() => {
        repo = new CertificatesRepository(ds);
    }));

    it('get data', async () => {

        const fixture = [
            new CertificateModel({
                dateOfIssue: new Date(),
                name: 'Cert 1',
                organization: 'Self assigned'
            }),
            new CertificateModel({
                dateOfIssue: new Date(),
                name: 'Cert 1',
                organization: 'Organization 2'
            }),
        ];

        spyOn(ds, 'getCertificates').and.returnValue(Promise.resolve(fixture));

        const expectedResult = fixture.map(el => CertificateEntity.fromModel(el));

        const result = await repo.getCertificates();

        expect(ds.getCertificates).toHaveBeenCalled();
        expect(result).toEqual(expectedResult);
    });

    it('get custom error from error', async () => {

        spyOn(ds, 'getCertificates').and.throwError('Could not get data');

        const expectedResult = new CustomError('Could not get data');

        const result = await repo.getCertificates();

        expect(ds.getCertificates).toHaveBeenCalled();
        expect(result).toEqual(expectedResult);
    });
});

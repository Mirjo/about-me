import { CertificateModel } from 'src/app/core/data/models/certificate.model';
import { LocalCertificatesDataSource } from './local.certificates.data.source';
import { MockCertificatesDataSource } from './mock.certificates.data.source';

describe('[FEATURE | CERTIFICATES | DATA SOURCE ]', () => {
    describe('Mock', () => {
        let dataSource: MockCertificatesDataSource;

        beforeEach((() => {
            dataSource = new MockCertificatesDataSource();
        }));

        it('get data', async () => {

            const expectedResult = [
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

            const result = await dataSource.getCertificates();

            expect(result).toEqual(expectedResult);
        });

    });

    describe('Local', () => {
        let dataSource: LocalCertificatesDataSource;

        beforeEach((() => {
            dataSource = new LocalCertificatesDataSource();
        }));

        it('get data', async () => {

            const result = await dataSource.getCertificates();

            expect(result instanceof Array).toBe(true);
            result.forEach(res => {
                expect(res instanceof CertificateModel).toBe(true);
            });

        });

    });

});

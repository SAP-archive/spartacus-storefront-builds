import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { QualtricsConfig } from './config/qualtrics-config';
import * as ɵngcc0 from '@angular/core';
export declare class QualtricsLoaderService {
    private winRef;
    private config;
    private qualtricsLoaded$;
    constructor(winRef: WindowRef, config: QualtricsConfig);
    private initialize;
    private setup;
    private isQualtricsConfigured;
    load(): Observable<boolean>;
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     */
    protected isDataLoaded(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsLoaderService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInF1YWx0cmljcy1sb2FkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBRdWFsdHJpY3NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9xdWFsdHJpY3MtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFF1YWx0cmljc0xvYWRlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgcXVhbHRyaWNzTG9hZGVkJDtcbiAgICBjb25zdHJ1Y3Rvcih3aW5SZWY6IFdpbmRvd1JlZiwgY29uZmlnOiBRdWFsdHJpY3NDb25maWcpO1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZTtcbiAgICBwcml2YXRlIHNldHVwO1xuICAgIHByaXZhdGUgaXNRdWFsdHJpY3NDb25maWd1cmVkO1xuICAgIGxvYWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGxvZ2ljIGV4aXN0IGluIG9yZGVyIHRvIGxldCB0aGUgY2xpZW50KHMpIGFkZCB0aGVpciBvd24gbG9naWMgdG8gd2FpdCBmb3IgYW55IGtpbmQgb2YgcGFnZSBkYXRhXG4gICAgICogSWYgY2xpZW50KHMpIGRvZXMgbm90IGV4dGVuZCB0aGlzIHNlcnZpY2UgdG8gb3ZlcnJpZGUgdGhpcyBpbXBsZW1lbnRhdGlvbiwgaXQgcmV0dXJucyB0cnVlXG4gICAgICogUmV0dXJuIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNEYXRhTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG59XG4iXX0=
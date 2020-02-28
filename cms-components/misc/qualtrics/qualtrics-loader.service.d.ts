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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsLoaderService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInF1YWx0cmljcy1sb2FkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUXVhbHRyaWNzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcXVhbHRyaWNzLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBRdWFsdHJpY3NMb2FkZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHdpblJlZjtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIHF1YWx0cmljc0xvYWRlZCQ7XG4gICAgY29uc3RydWN0b3Iod2luUmVmOiBXaW5kb3dSZWYsIGNvbmZpZzogUXVhbHRyaWNzQ29uZmlnKTtcbiAgICBwcml2YXRlIGluaXRpYWxpemU7XG4gICAgcHJpdmF0ZSBzZXR1cDtcbiAgICBwcml2YXRlIGlzUXVhbHRyaWNzQ29uZmlndXJlZDtcbiAgICBsb2FkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogVGhpcyBsb2dpYyBleGlzdCBpbiBvcmRlciB0byBsZXQgdGhlIGNsaWVudChzKSBhZGQgdGhlaXIgb3duIGxvZ2ljIHRvIHdhaXQgZm9yIGFueSBraW5kIG9mIHBhZ2UgZGF0YVxuICAgICAqIElmIGNsaWVudChzKSBkb2VzIG5vdCBleHRlbmQgdGhpcyBzZXJ2aWNlIHRvIG92ZXJyaWRlIHRoaXMgaW1wbGVtZW50YXRpb24sIGl0IHJldHVybnMgdHJ1ZVxuICAgICAqIFJldHVybiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzRGF0YUxvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xufVxuIl19
import { QualtricsConfig } from './config/qualtrics-config';
import { QualtricsLoaderService } from './qualtrics-loader.service';
/**
 * Adds the Qualtrics deployment script whenever the component is loaded. The
 * deployment script is loaded from the global configuration (`qualtrics.scriptSource`).
 */
import * as ɵngcc0 from '@angular/core';
export declare class QualtricsComponent {
    protected qualtricsLoader: QualtricsLoaderService;
    protected config: QualtricsConfig;
    constructor(qualtricsLoader: QualtricsLoaderService, config: QualtricsConfig);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<QualtricsComponent, "cx-qualtrics", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJxdWFsdHJpY3MuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWFsdHJpY3NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9xdWFsdHJpY3MtY29uZmlnJztcbmltcG9ydCB7IFF1YWx0cmljc0xvYWRlclNlcnZpY2UgfSBmcm9tICcuL3F1YWx0cmljcy1sb2FkZXIuc2VydmljZSc7XG4vKipcbiAqIEFkZHMgdGhlIFF1YWx0cmljcyBkZXBsb3ltZW50IHNjcmlwdCB3aGVuZXZlciB0aGUgY29tcG9uZW50IGlzIGxvYWRlZC4gVGhlXG4gKiBkZXBsb3ltZW50IHNjcmlwdCBpcyBsb2FkZWQgZnJvbSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gKGBxdWFsdHJpY3Muc2NyaXB0U291cmNlYCkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFF1YWx0cmljc0NvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHF1YWx0cmljc0xvYWRlcjogUXVhbHRyaWNzTG9hZGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBRdWFsdHJpY3NDb25maWc7XG4gICAgY29uc3RydWN0b3IocXVhbHRyaWNzTG9hZGVyOiBRdWFsdHJpY3NMb2FkZXJTZXJ2aWNlLCBjb25maWc6IFF1YWx0cmljc0NvbmZpZyk7XG59XG4iXX0=
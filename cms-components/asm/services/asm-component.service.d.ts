import { AsmAuthService, AuthService, RoutingService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class AsmComponentService {
    protected authService: AuthService;
    protected asmAuthService: AsmAuthService;
    protected routingService: RoutingService;
    protected winRef: WindowRef;
    constructor(authService: AuthService, asmAuthService: AsmAuthService, routingService: RoutingService, winRef: WindowRef);
    logoutCustomerSupportAgentAndCustomer(): void;
    logoutCustomer(): void;
    isCustomerEmulationSessionInProgress(): Observable<boolean>;
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    unload(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmComponentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImFzbS1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzbUF1dGhTZXJ2aWNlLCBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBc21Db21wb25lbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50QW5kQ3VzdG9tZXIoKTogdm9pZDtcbiAgICBsb2dvdXRDdXN0b21lcigpOiB2b2lkO1xuICAgIGlzQ3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uSW5Qcm9ncmVzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFdlJ3JlIGN1cnJlbnRseSBvbmx5IHJlbW92aW5nIHRoZSBwZXJzaXN0ZWQgc3RvcmFnZSBpbiB0aGUgYnJvd3NlclxuICAgICAqIHRvIGVuc3VyZSB0aGUgQVNNIGV4cGVyaWVuY2UgaXNuJ3QgbG9hZGVkIG9uIHRoZSBuZXh0IHZpc2l0LiBUaGVyZSBhcmUgYSBmZXdcbiAgICAgKiBvcHRpbXNpYXRpb25zIHdlIGNvdWxkIHRoaW5rIG9mOlxuICAgICAqIC0gZHJvcCB0aGUgYGFzbWAgcGFyYW1ldGVyIGZyb20gdGhlIFVSTCwgaW4gY2FzZSBpdCdzIHN0aWxsIHRoZXJlXG4gICAgICogLSByZW1vdmUgdGhlIGdlbmVyYXRlZCBVSSBmcm9tIHRoZSBET00gKG91dGxldHMgY3VycmVudGx5IGRvIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICovXG4gICAgdW5sb2FkKCk6IHZvaWQ7XG59XG4iXX0=
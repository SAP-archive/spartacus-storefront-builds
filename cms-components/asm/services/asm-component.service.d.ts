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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmComponentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImFzbS1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNtQXV0aFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbUNvbXBvbmVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCB3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgbG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRBbmRDdXN0b21lcigpOiB2b2lkO1xuICAgIGxvZ291dEN1c3RvbWVyKCk6IHZvaWQ7XG4gICAgaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogV2UncmUgY3VycmVudGx5IG9ubHkgcmVtb3ZpbmcgdGhlIHBlcnNpc3RlZCBzdG9yYWdlIGluIHRoZSBicm93c2VyXG4gICAgICogdG8gZW5zdXJlIHRoZSBBU00gZXhwZXJpZW5jZSBpc24ndCBsb2FkZWQgb24gdGhlIG5leHQgdmlzaXQuIFRoZXJlIGFyZSBhIGZld1xuICAgICAqIG9wdGltc2lhdGlvbnMgd2UgY291bGQgdGhpbmsgb2Y6XG4gICAgICogLSBkcm9wIHRoZSBgYXNtYCBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMLCBpbiBjYXNlIGl0J3Mgc3RpbGwgdGhlcmVcbiAgICAgKiAtIHJlbW92ZSB0aGUgZ2VuZXJhdGVkIFVJIGZyb20gdGhlIERPTSAob3V0bGV0cyBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgdGhpcylcbiAgICAgKi9cbiAgICB1bmxvYWQoKTogdm9pZDtcbn1cbiJdfQ==
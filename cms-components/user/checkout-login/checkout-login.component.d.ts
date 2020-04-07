import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutLoginComponent implements OnDestroy {
    protected formBuilder: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected activeCartService: ActiveCartService;
    checkoutLoginForm: FormGroup;
    sub: Subscription;
    constructor(formBuilder: FormBuilder, authRedirectService: AuthRedirectService, activeCartService: ActiveCartService);
    onSubmit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutLoginComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutLoginComponent, "cx-checkout-login", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY2hlY2tvdXRMb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
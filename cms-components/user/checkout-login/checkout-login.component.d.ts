import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutLoginComponent implements OnDestroy {
    protected formBuilder: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected activeCartService: ActiveCartService;
    form: FormGroup;
    sub: Subscription;
    private submitClicked;
    constructor(formBuilder: FormBuilder, authRedirectService: AuthRedirectService, activeCartService: ActiveCartService);
    isNotValid(formControlName: string): boolean;
    isEmailConfirmInvalid(): boolean;
    onSubmit(): void;
    ngOnDestroy(): void;
    private emailsMatch;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutLoginComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutLoginComponent, "cx-checkout-login", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQXV0aFJlZGlyZWN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXI7XG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkO1xuICAgIGNvbnN0cnVjdG9yKGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBpc0VtYWlsQ29uZmlybUludmFsaWQoKTogYm9vbGVhbjtcbiAgICBvblN1Ym1pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBlbWFpbHNNYXRjaDtcbn1cbiJdfQ==
import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, CartService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutLoginComponent implements OnDestroy {
    private formBuilder;
    private cartService;
    private authRedirectService;
    form: FormGroup;
    sub: Subscription;
    private submitClicked;
    constructor(formBuilder: FormBuilder, cartService: CartService, authRedirectService: AuthRedirectService);
    isNotValid(formControlName: string): boolean;
    isEmailConfirmInvalid(): boolean;
    onSubmit(): void;
    ngOnDestroy(): void;
    private emailsMatch;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutLoginComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutLoginComponent, "cx-checkout-login", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoUmVkaXJlY3RTZXJ2aWNlLCBDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTtcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgc3VibWl0Q2xpY2tlZDtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSk7XG4gICAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgaXNFbWFpbENvbmZpcm1JbnZhbGlkKCk6IGJvb2xlYW47XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByaXZhdGUgZW1haWxzTWF0Y2g7XG59XG4iXX0=
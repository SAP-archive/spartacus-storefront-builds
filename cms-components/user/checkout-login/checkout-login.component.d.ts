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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBBdXRoUmVkaXJlY3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHN1Ym1pdENsaWNrZWQ7XG4gICAgY29uc3RydWN0b3IoZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGlzRW1haWxDb25maXJtSW52YWxpZCgpOiBib29sZWFuO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIGVtYWlsc01hdGNoO1xufVxuIl19
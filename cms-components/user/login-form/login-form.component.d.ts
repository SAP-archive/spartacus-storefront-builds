import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    protected auth: AuthService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected winRef: WindowRef;
    sub: Subscription;
    loginForm: FormGroup;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef);
    ngOnInit(): void;
    submitForm(): void;
    ngOnDestroy(): void;
    protected loginUser(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginFormComponent, "cx-login-form", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXI7XG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgc3VibWl0Rm9ybSgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGxvZ2luVXNlcigpOiB2b2lkO1xufVxuIl19
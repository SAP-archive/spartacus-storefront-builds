import { OnInit } from '@angular/core';
import { AuthService, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LoginComponent implements OnInit {
    private auth;
    private userService;
    user$: Observable<User>;
    constructor(auth: AuthService, userService: UserService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginComponent, "cx-login", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgYXV0aDtcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlO1xuICAgIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=
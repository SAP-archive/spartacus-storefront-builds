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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginComponent, "cx-login", never, {}, {}, never, never>;
}

//# sourceMappingURL=login.component.d.ts.map
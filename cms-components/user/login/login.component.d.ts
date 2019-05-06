import { AuthService, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { LoginComponentService } from './login.component.service';
export declare class LoginComponent {
    private auth;
    private userService;
    private loginService;
    constructor(auth: AuthService, userService: UserService, loginService: LoginComponentService);
    readonly user$: Observable<User>;
}

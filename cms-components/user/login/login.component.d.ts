import { OnInit } from '@angular/core';
import { AuthService, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class LoginComponent implements OnInit {
    private auth;
    private userService;
    user$: Observable<User>;
    constructor(auth: AuthService, userService: UserService);
    ngOnInit(): void;
}

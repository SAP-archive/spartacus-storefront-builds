import { OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService, User, UserService } from '@spartacus/core';
export declare class LoginComponent implements OnInit, OnDestroy {
    private auth;
    private userService;
    user$: Observable<User>;
    isLogin: boolean;
    subscription: Subscription;
    constructor(auth: AuthService, userService: UserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

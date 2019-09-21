import { OnInit, OnDestroy } from '@angular/core';
import { AuthService, User, UserService, RoutingService, RoutingConfigService } from '@spartacus/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
export declare class LoginComponent implements OnInit, OnDestroy {
    private auth;
    private userService;
    private routingService?;
    private routingConfigService?;
    user$: Observable<User>;
    hidden: BehaviorSubject<boolean>;
    subscription: Subscription;
    constructor(auth: AuthService, userService: UserService, routingService: RoutingService, // tslint:disable-line
    routingConfigService: RoutingConfigService);
    /**
     * @deprecated since 1.x
     * NOTE: check issue:#4155 for more info
     *
     * TODO(issue:#4155) Deprecated since 1.x
     */
    constructor(auth: AuthService, userService: UserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

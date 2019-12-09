import { OnDestroy, OnInit } from '@angular/core';
import { AuthService, RoutingService, User, UserService } from '@spartacus/core';
export declare class CustomerEmulationComponent implements OnInit, OnDestroy {
    protected authService: AuthService;
    protected userService: UserService;
    protected routingService: RoutingService;
    customer: User;
    private subscription;
    constructor(authService: AuthService, userService: UserService, routingService: RoutingService);
    ngOnInit(): void;
    endSession(): void;
    ngOnDestroy(): void;
}

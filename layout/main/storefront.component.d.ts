import { OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
export declare class StorefrontComponent implements OnInit, OnDestroy {
    private hamburgerMenuService;
    private routingService;
    navigateSubscription: Subscription;
    isExpanded$: Observable<boolean>;
    startNavigating: any;
    stopNavigating: any;
    constructor(hamburgerMenuService: HamburgerMenuService, routingService: RoutingService);
    ngOnInit(): void;
    collapseMenu(): void;
    ngOnDestroy(): void;
}

import { OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
import * as ɵngcc0 from '@angular/core';
export declare class StorefrontComponent implements OnInit, OnDestroy {
    private hamburgerMenuService;
    private routingService;
    navigateSubscription: Subscription;
    isExpanded$: Observable<boolean>;
    startNavigating: any;
    stopNavigating: any;
    constructor(hamburgerMenuService: HamburgerMenuService, routingService: RoutingService);
    ngOnInit(): void;
    collapseMenuIfClickOutside(event: MouseEvent): void;
    collapseMenu(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StorefrontComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StorefrontComponent, "cx-storefront", never, {}, {}, never>;
}

//# sourceMappingURL=storefront.component.d.ts.map
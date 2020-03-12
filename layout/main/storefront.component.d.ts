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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmVmcm9udC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vaGVhZGVyL2hhbWJ1cmdlci1tZW51L2hhbWJ1cmdlci1tZW51LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVmcm9udENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgbmF2aWdhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBpc0V4cGFuZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzdGFydE5hdmlnYXRpbmc6IGFueTtcbiAgICBzdG9wTmF2aWdhdGluZzogYW55O1xuICAgIGNvbnN0cnVjdG9yKGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGNvbGxhcHNlTWVudUlmQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBjb2xsYXBzZU1lbnUoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
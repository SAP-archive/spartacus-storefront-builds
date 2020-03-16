import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { EscapeFocusService } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
import * as ɵngcc0 from '@angular/core';
export declare class StorefrontComponent implements OnInit, OnDestroy {
    private hamburgerMenuService;
    private routingService;
    protected elementRef: ElementRef<HTMLElement>;
    protected service: EscapeFocusService;
    navigateSubscription: Subscription;
    isExpanded$: Observable<boolean>;
    startNavigating: any;
    stopNavigating: any;
    tabindex: string;
    child: SkipLinkComponent;
    private config;
    handleEscape(event: KeyboardEvent): void;
    constructor(hamburgerMenuService: HamburgerMenuService, routingService: RoutingService, elementRef: ElementRef<HTMLElement>, service: EscapeFocusService);
    ngOnInit(): void;
    collapseMenuIfClickOutside(event: MouseEvent): void;
    collapseMenu(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StorefrontComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StorefrontComponent, "cx-storefront", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmVmcm9udC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVzY2FwZUZvY3VzU2VydmljZSB9IGZyb20gJy4uL2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgU2tpcExpbmtDb21wb25lbnQgfSBmcm9tICcuLi9hMTF5L3NraXAtbGluay9pbmRleCc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51U2VydmljZSB9IGZyb20gJy4uL2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBoYW1idXJnZXJNZW51U2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogRXNjYXBlRm9jdXNTZXJ2aWNlO1xuICAgIG5hdmlnYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgaXNFeHBhbmRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgc3RhcnROYXZpZ2F0aW5nOiBhbnk7XG4gICAgc3RvcE5hdmlnYXRpbmc6IGFueTtcbiAgICB0YWJpbmRleDogc3RyaW5nO1xuICAgIGNoaWxkOiBTa2lwTGlua0NvbXBvbmVudDtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgc2VydmljZTogRXNjYXBlRm9jdXNTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGNvbGxhcHNlTWVudUlmQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBjb2xsYXBzZU1lbnUoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { KeyboardFocusService } from '../a11y/keyboard-focus/index';
import { SkipLinkComponent } from '../a11y/skip-link/index';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
export declare class StorefrontComponent implements OnInit, OnDestroy {
    private hamburgerMenuService;
    private routingService;
    protected elementRef: ElementRef<HTMLElement>;
    protected keyboardFocusService: KeyboardFocusService;
    navigateSubscription: Subscription;
    isExpanded$: Observable<boolean>;
    startNavigating: any;
    stopNavigating: any;
    tabindex: string;
    child: SkipLinkComponent;
    private keyboardFocusConfig;
    handleEscape(event: KeyboardEvent): void;
    constructor(hamburgerMenuService: HamburgerMenuService, routingService: RoutingService, elementRef: ElementRef<HTMLElement>, keyboardFocusService: KeyboardFocusService);
    ngOnInit(): void;
    collapseMenuIfClickOutside(event: MouseEvent): void;
    collapseMenu(): void;
    ngOnDestroy(): void;
}

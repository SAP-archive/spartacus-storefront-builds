/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
export class StorefrontComponent {
    /**
     * @param {?} hamburgerMenuService
     * @param {?} routingService
     */
    constructor(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe(val => {
            this.startNavigating = val === true;
            this.stopNavigating = val === false;
        });
    }
    /**
     * @return {?}
     */
    collapseMenu() {
        this.hamburgerMenuService.toggle(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    }
}
StorefrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-storefront',
                template: "<header\n  [class.is-expanded]=\"isExpanded$ | async\"\n  (keydown.escape)=\"collapseMenu()\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n"
            }] }
];
/** @nocollapse */
StorefrontComponent.ctorParameters = () => [
    { type: HamburgerMenuService },
    { type: RoutingService }
];
StorefrontComponent.propDecorators = {
    startNavigating: [{ type: HostBinding, args: ['class.start-navigating',] }],
    stopNavigating: [{ type: HostBinding, args: ['class.stop-navigating',] }]
};
if (false) {
    /** @type {?} */
    StorefrontComponent.prototype.navigateSubscription;
    /** @type {?} */
    StorefrontComponent.prototype.isExpanded$;
    /** @type {?} */
    StorefrontComponent.prototype.startNavigating;
    /** @type {?} */
    StorefrontComponent.prototype.stopNavigating;
    /**
     * @type {?}
     * @private
     */
    StorefrontComponent.prototype.hamburgerMenuService;
    /**
     * @type {?}
     * @private
     */
    StorefrontComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU12RixNQUFNLE9BQU8sbUJBQW1COzs7OztJQU85QixZQUNVLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUQ5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxnQkFBVyxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0lBUXJFLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjO2FBQzVDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix5Y0FBMEM7YUFDM0M7Ozs7WUFMUSxvQkFBb0I7WUFGcEIsY0FBYzs7OzhCQVlwQixXQUFXLFNBQUMsd0JBQXdCOzZCQUNwQyxXQUFXLFNBQUMsdUJBQXVCOzs7O0lBSnBDLG1EQUFtQzs7SUFDbkMsMENBQXdFOztJQUV4RSw4Q0FBdUQ7O0lBQ3ZELDZDQUFxRDs7Ozs7SUFHbkQsbURBQWtEOzs7OztJQUNsRCw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51U2VydmljZSB9IGZyb20gJy4uL2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmVmcm9udCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZWZyb250LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbmF2aWdhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgaXNFeHBhbmRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLmlzRXhwYW5kZWQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGFydC1uYXZpZ2F0aW5nJykgc3RhcnROYXZpZ2F0aW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0b3AtbmF2aWdhdGluZycpIHN0b3BOYXZpZ2F0aW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaGFtYnVyZ2VyTWVudVNlcnZpY2U6IEhhbWJ1cmdlck1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmlzTmF2aWdhdGluZygpXG4gICAgICAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW5nID0gdmFsID09PSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BOYXZpZ2F0aW5nID0gdmFsID09PSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29sbGFwc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
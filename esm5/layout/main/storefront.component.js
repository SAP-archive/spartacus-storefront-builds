/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { HamburgerMenuService } from '../header/hamburger-menu/hamburger-menu.service';
var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe(function (val) {
            _this.startNavigating = val === true;
            _this.stopNavigating = val === false;
        });
    };
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.collapseMenu = /**
     * @return {?}
     */
    function () {
        this.hamburgerMenuService.toggle(true);
    };
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    };
    StorefrontComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-storefront',
                    template: "<header\n  [class.is-expanded]=\"isExpanded$ | async\"\n  (keydown.escape)=\"collapseMenu()\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n"
                }] }
    ];
    /** @nocollapse */
    StorefrontComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService },
        { type: RoutingService }
    ]; };
    StorefrontComponent.propDecorators = {
        startNavigating: [{ type: HostBinding, args: ['class.start-navigating',] }],
        stopNavigating: [{ type: HostBinding, args: ['class.stop-navigating',] }]
    };
    return StorefrontComponent;
}());
export { StorefrontComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV2RjtJQVdFLDZCQUNVLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUQ5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxnQkFBVyxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0lBUXJFLENBQUM7Ozs7SUFFSixzQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYzthQUM1QyxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5Y0FBMEM7aUJBQzNDOzs7O2dCQUxRLG9CQUFvQjtnQkFGcEIsY0FBYzs7O2tDQVlwQixXQUFXLFNBQUMsd0JBQXdCO2lDQUNwQyxXQUFXLFNBQUMsdUJBQXVCOztJQXlCdEMsMEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTlCWSxtQkFBbUI7OztJQUM5QixtREFBbUM7O0lBQ25DLDBDQUF3RTs7SUFFeEUsOENBQXVEOztJQUN2RCw2Q0FBcUQ7Ozs7O0lBR25ELG1EQUFrRDs7Ozs7SUFDbEQsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuLi9oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlZnJvbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmVmcm9udC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG5hdmlnYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGlzRXhwYW5kZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQtbmF2aWdhdGluZycpIHN0YXJ0TmF2aWdhdGluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdG9wLW5hdmlnYXRpbmcnKSBzdG9wTmF2aWdhdGluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5pc05hdmlnYXRpbmcoKVxuICAgICAgLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0TmF2aWdhdGluZyA9IHZhbCA9PT0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdG9wTmF2aWdhdGluZyA9IHZhbCA9PT0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbGxhcHNlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLnRvZ2dsZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
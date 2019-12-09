/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.startNavigating = val === true;
            _this.stopNavigating = val === false;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StorefrontComponent.prototype.collapseMenuIfClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (event.target))).className.includes('is-expanded')) {
            this.collapseMenu();
        }
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
                    template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer>\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV2RjtJQVdFLDZCQUNVLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUQ5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxnQkFBVyxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0lBUXJFLENBQUM7Ozs7SUFFSixzQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYzthQUM1QyxZQUFZLEVBQUU7YUFDZCxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsd0RBQTBCOzs7O0lBQTFCLFVBQTJCLEtBQWlCO1FBQzFDLElBQUksQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QiwydEJBQTBDO2lCQUMzQzs7OztnQkFMUSxvQkFBb0I7Z0JBRnBCLGNBQWM7OztrQ0FZcEIsV0FBVyxTQUFDLHdCQUF3QjtpQ0FDcEMsV0FBVyxTQUFDLHVCQUF1Qjs7SUErQnRDLDBCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQ1ksbUJBQW1COzs7SUFDOUIsbURBQW1DOztJQUNuQywwQ0FBd0U7O0lBRXhFLDhDQUF1RDs7SUFDdkQsNkNBQXFEOzs7OztJQUduRCxtREFBa0Q7Ozs7O0lBQ2xELDZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vaGVhZGVyL2hhbWJ1cmdlci1tZW51L2hhbWJ1cmdlci1tZW51LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZWZyb250JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlZnJvbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBuYXZpZ2F0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBpc0V4cGFuZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UuaXNFeHBhbmRlZDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXJ0LW5hdmlnYXRpbmcnKSBzdGFydE5hdmlnYXRpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RvcC1uYXZpZ2F0aW5nJykgc3RvcE5hdmlnYXRpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBoYW1idXJnZXJNZW51U2VydmljZTogSGFtYnVyZ2VyTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGVTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuaXNOYXZpZ2F0aW5nKClcbiAgICAgIC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgdGhpcy5zdGFydE5hdmlnYXRpbmcgPSB2YWwgPT09IHRydWU7XG4gICAgICAgIHRoaXMuc3RvcE5hdmlnYXRpbmcgPSB2YWwgPT09IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBjb2xsYXBzZU1lbnVJZkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NOYW1lLmluY2x1ZGVzKCdpcy1leHBhbmRlZCcpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbWJ1cmdlck1lbnVTZXJ2aWNlLnRvZ2dsZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm5hdmlnYXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
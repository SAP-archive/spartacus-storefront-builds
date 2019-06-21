/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HamburgerMenuService } from './hamburger-menu.service';
var HamburgerMenuComponent = /** @class */ (function () {
    function HamburgerMenuComponent(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    /**
     * @return {?}
     */
    HamburgerMenuComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.hamburgerMenuService.toggle();
    };
    Object.defineProperty(HamburgerMenuComponent.prototype, "isExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hamburgerMenuService.isExpanded;
        },
        enumerable: true,
        configurable: true
    });
    HamburgerMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-hamburger-menu',
                    template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HamburgerMenuComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService }
    ]; };
    return HamburgerMenuComponent;
}());
export { HamburgerMenuComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HamburgerMenuComponent.prototype.hamburgerMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFNRSxnQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFBRyxDQUFDOzs7O0lBRWxFLHVDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQUksOENBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHdaQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLG9CQUFvQjs7SUFpQjdCLDZCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksc0JBQXNCOzs7Ozs7SUFDckIsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1oYW1idXJnZXItbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oYW1idXJnZXItbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIYW1idXJnZXJNZW51Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoYW1idXJnZXJNZW51U2VydmljZTogSGFtYnVyZ2VyTWVudVNlcnZpY2UpIHt9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKCk7XG4gIH1cblxuICBnZXQgaXNFeHBhbmRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuICB9XG59XG4iXX0=
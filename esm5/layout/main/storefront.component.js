/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { HamburgerMenuService } from '../header/index';
var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    Object.defineProperty(StorefrontComponent.prototype, "isExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hamburgerMenuService.isExpanded;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.collapseMenu = /**
     * @return {?}
     */
    function () {
        this.hamburgerMenuService.toggle(true);
    };
    StorefrontComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-storefront',
                    template: "<header\n  [class.is-expanded]=\"isExpanded | async\"\n  (keydown.escape)=\"collapseMenu()\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StorefrontComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService }
    ]; };
    return StorefrontComponent;
}());
export { StorefrontComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StorefrontComponent.prototype.hamburgerMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RDtJQU1FLDZCQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUFHLENBQUM7SUFFbEUsc0JBQUksMkNBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3Y0FBMEM7O2lCQUUzQzs7OztnQkFOUSxvQkFBb0I7O0lBaUI3QiwwQkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLG1CQUFtQjs7Ozs7O0lBQ2xCLG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuLi9oZWFkZXIvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZWZyb250JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlZnJvbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZWZyb250LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSkge31cblxuICBnZXQgaXNFeHBhbmRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuICB9XG5cbiAgY29sbGFwc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICB9XG59XG4iXX0=
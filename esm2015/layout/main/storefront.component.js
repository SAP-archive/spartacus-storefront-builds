/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { HamburgerMenuService } from '../header/index';
export class StorefrontComponent {
    /**
     * @param {?} hamburgerMenuService
     */
    constructor(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    /**
     * @return {?}
     */
    get isExpanded() {
        return this.hamburgerMenuService.isExpanded;
    }
    /**
     * @return {?}
     */
    collapseMenu() {
        this.hamburgerMenuService.toggle(true);
    }
}
StorefrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-storefront',
                template: "<header\n  [class.is-expanded]=\"isExpanded | async\"\n  (keydown.escape)=\"collapseMenu()\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
StorefrontComponent.ctorParameters = () => [
    { type: HamburgerMenuService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StorefrontComponent.prototype.hamburgerMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9zdG9yZWZyb250LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU92RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzlCLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQzs7OztJQUVsRSxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsd2NBQTBDOzthQUUzQzs7OztZQU5RLG9CQUFvQjs7Ozs7OztJQVFmLG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudVNlcnZpY2UgfSBmcm9tICcuLi9oZWFkZXIvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZWZyb250JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlZnJvbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZWZyb250LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhbWJ1cmdlck1lbnVTZXJ2aWNlOiBIYW1idXJnZXJNZW51U2VydmljZSkge31cblxuICBnZXQgaXNFeHBhbmRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW1idXJnZXJNZW51U2VydmljZS5pc0V4cGFuZGVkO1xuICB9XG5cbiAgY29sbGFwc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuaGFtYnVyZ2VyTWVudVNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICB9XG59XG4iXX0=
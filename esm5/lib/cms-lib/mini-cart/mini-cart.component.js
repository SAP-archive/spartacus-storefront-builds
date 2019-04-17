/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(component, cartService) {
        this.component = component;
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
    MiniCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-mini-cart',
                    template: "<a\n  *ngIf=\"(cart$ | async) as cart\"\n  aria-label=\"Cart\"\n  [routerLink]=\"{ route: ['cart'] } | cxTranslateUrl\"\n>\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 35 28\">\n    <g transform=\"translate(-4758 4746)\">\n      <path\n        d=\"M4758.7-4746h4.7c0.3,0.1,0.6,0.3,0.7,0.5l1.7,7.5h23.6c0.4,0,0.7,0.4,0.7,0.8c0,0.1,0,0.1,0,0.2l-4,12\n c-0.1,0.2-0.4,0.4-0.7,0.4h-16.4l0.3,1.3h14.1c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7l0,0c-1.5,0-2.6-1.2-2.6-2.6\n c0-0.5,0.1-1,0.4-1.4h-10.1c0.8,1.2,0.4,2.9-0.9,3.6c-0.4,0.3-0.9,0.4-1.4,0.4c-1.5,0-2.7-1.2-2.7-2.7c0-1.2,0.8-2.2,1.9-2.5\n l-5.1-21.4h-4.1c-0.3,0-0.6-0.2-0.7-0.6c0,0,0-0.1,0-0.1C4758-4745.7,4758.2-4746,4758.7-4746C4758.6-4746,4758.6-4746,4758.7-4746\n z\"\n      />\n    </g>\n  </svg>\n\n  <span\n    class=\"count\"\n    *ngIf=\"cart.deliveryItemsQuantity || '0' as qty\"\n    [attr.aria-label]=\"'My cart. ' + qty + ' items currently in your cart.'\"\n    >{{ qty }}</span\n  >\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{margin-left:.75rem;display:block}a{display:flex;background:var(--cx-background,var(--cx-g-color-primary));padding:var(--cx-padding,0 .5rem);color:var(--cx-color,var(--cx-g-color-inverse));text-decoration:none}a svg{fill:currentColor;width:30px;height:30px;margin:9px 0}a span{color:currentColor;-ms-grid-row-align:center;align-self:center;padding:var(--cx-padding,0 .5rem)}@media (max-width:1199.98px){a{margin-right:.5rem}}@media (max-width:575.98px){a{margin-right:0;min-height:55px;flex-direction:column;padding:var(--cx-padding,.3rem .75rem)}a svg{margin:0;height:24px}}"]
                }] }
    ];
    /** @nocollapse */
    MiniCartComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CartService }
    ]; };
    return MiniCartComponent;
}());
export { MiniCartComponent };
if (false) {
    /** @type {?} */
    MiniCartComponent.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    MiniCartComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    MiniCartComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL21pbmktY2FydC9taW5pLWNhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxXQUFXLEVBQThCLE1BQU0saUJBQWlCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFeEY7SUFTRSwyQkFDWSxTQUFpRCxFQUNqRCxXQUF3QjtRQUR4QixjQUFTLEdBQVQsU0FBUyxDQUF3QztRQUNqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixzK0JBQXlDO29CQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVBRLGdCQUFnQjtnQkFGaEIsV0FBVzs7SUFtQnBCLHdCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVFksaUJBQWlCOzs7SUFDNUIsa0NBQXdCOzs7OztJQUd0QixzQ0FBMkQ7Ozs7O0lBQzNELHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgQ21zTWluaUNhcnRDb21wb25lbnQsIENhcnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1pbmktY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9taW5pLWNhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1pbmlDYXJ0Q29tcG9uZW50IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNNaW5pQ2FydENvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgfVxufVxuIl19
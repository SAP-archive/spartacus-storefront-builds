/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class MiniCartComponent {
    /**
     * @param {?} component
     * @param {?} cartService
     */
    constructor(component, cartService) {
        this.component = component;
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
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
MiniCartComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CartService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL21pbmktY2FydC9taW5pLWNhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxXQUFXLEVBQThCLE1BQU0saUJBQWlCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFReEYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFHNUIsWUFDWSxTQUFpRCxFQUNqRCxXQUF3QjtRQUR4QixjQUFTLEdBQVQsU0FBUyxDQUF3QztRQUNqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzK0JBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFQUSxnQkFBZ0I7WUFGaEIsV0FBVzs7OztJQVdsQixrQ0FBd0I7Ozs7O0lBR3RCLHNDQUEyRDs7Ozs7SUFDM0Qsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBDbXNNaW5pQ2FydENvbXBvbmVudCwgQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbWluaS1jYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktY2FydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21pbmktY2FydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRDb21wb25lbnQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc01pbmlDYXJ0Q29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG59XG4iXX0=
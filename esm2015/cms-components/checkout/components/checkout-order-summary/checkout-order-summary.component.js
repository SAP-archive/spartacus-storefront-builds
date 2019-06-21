/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '@spartacus/core';
export class CheckoutOrderSummaryComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
}
CheckoutOrderSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-order-summary',
                template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CheckoutOrderSummaryComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CheckoutOrderSummaryComponent.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    CheckoutOrderSummaryComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBTXBELE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFHeEMsWUFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVDLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw0RUFBc0Q7Z0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTFEsV0FBVzs7OztJQU9sQiw4Q0FBd0I7Ozs7O0lBRVosb0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIENhcnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtb3JkZXItc3VtbWFyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC1vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG59XG4iXX0=
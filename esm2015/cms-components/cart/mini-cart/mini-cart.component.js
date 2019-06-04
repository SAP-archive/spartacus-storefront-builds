/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
export class MiniCartComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService
            .getActive()
            .pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.deliveryItemsQuantity || 0)));
        this.total$ = this.cartService.getActive().pipe(filter((/**
         * @param {?} cart
         * @return {?}
         */
        cart => !!cart.totalPrice)), map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.totalPrice.formattedValue)));
    }
}
MiniCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-mini-cart',
                template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MiniCartComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    MiniCartComponent.prototype.iconTypes;
    /** @type {?} */
    MiniCartComponent.prototype.quantity$;
    /** @type {?} */
    MiniCartComponent.prototype.total$;
    /**
     * @type {?}
     * @protected
     */
    MiniCartComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT2xELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFZNUIsWUFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFYOUMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixjQUFTLEdBQXVCLElBQUksQ0FBQyxXQUFXO2FBQzdDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUV0RCxXQUFNLEdBQXVCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM1RCxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxFQUNqQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBQyxDQUM1QyxDQUFDO0lBRStDLENBQUM7OztZQWpCbkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix3VUFBeUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVFEsV0FBVzs7OztJQVdsQixzQ0FBc0I7O0lBRXRCLHNDQUVzRDs7SUFFdEQsbUNBR0U7Ozs7O0lBRVUsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1taW5pLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWluaS1jYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1pbmlDYXJ0Q29tcG9uZW50IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIHF1YW50aXR5JDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5jYXJ0U2VydmljZVxuICAgIC5nZXRBY3RpdmUoKVxuICAgIC5waXBlKG1hcChjYXJ0ID0+IGNhcnQuZGVsaXZlcnlJdGVtc1F1YW50aXR5IHx8IDApKTtcblxuICB0b3RhbCQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICBmaWx0ZXIoY2FydCA9PiAhIWNhcnQudG90YWxQcmljZSksXG4gICAgbWFwKGNhcnQgPT4gY2FydC50b3RhbFByaWNlLmZvcm1hdHRlZFZhbHVlKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHt9XG59XG4iXX0=
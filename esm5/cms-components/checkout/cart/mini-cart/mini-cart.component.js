/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { ICON_TYPES } from '../../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(component, cartService) {
        this.component = component;
        this.cartService = cartService;
        this.iconTypes = ICON_TYPES;
    }
    Object.defineProperty(MiniCartComponent.prototype, "quantity$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cartService
                .getActive()
                .pipe(map(function (cart) { return cart.deliveryItemsQuantity || 0; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniCartComponent.prototype, "total$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cartService.getActive().pipe(filter(function (cart) { return !!cart.totalPrice; }), map(function (cart) { return cart.totalPrice.formattedValue; }));
        },
        enumerable: true,
        configurable: true
    });
    MiniCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-mini-cart',
                    template: "<a\n  [attr.aria-label]=\"(quantity$ | async) + ' items currently in your cart'\"\n  [routerLink]=\"{ route: ['cart'] } | cxTranslateUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
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
    MiniCartComponent.prototype.iconTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBd0IsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUUzRjtJQVFFLDJCQUNZLFNBQWlELEVBQ2pELFdBQXdCO1FBRHhCLGNBQVMsR0FBVCxTQUFTLENBQXdDO1FBQ2pELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGNBQVMsR0FBRyxVQUFVLENBQUM7SUFLcEIsQ0FBQztJQUVKLHNCQUFJLHdDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO2lCQUNwQixTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFqQixDQUFpQixDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUE5QixDQUE4QixDQUFDLENBQzVDLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsaVVBQXlDO29CQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUpoQixXQUFXOztJQStCcEIsd0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSxpQkFBaUI7OztJQUM1QixzQ0FBdUI7Ozs7O0lBR3JCLHNDQUEyRDs7Ozs7SUFDM0Qsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIENtc01pbmlDYXJ0Q29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1pbmktY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEVTO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zTWluaUNhcnRDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBxdWFudGl0eSQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAucGlwZShtYXAoY2FydCA9PiBjYXJ0LmRlbGl2ZXJ5SXRlbXNRdWFudGl0eSB8fCAwKSk7XG4gIH1cblxuICBnZXQgdG90YWwkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICAgIGZpbHRlcihjYXJ0ID0+ICEhY2FydC50b3RhbFByaWNlKSxcbiAgICAgIG1hcChjYXJ0ID0+IGNhcnQudG90YWxQcmljZS5mb3JtYXR0ZWRWYWx1ZSlcbiAgICApO1xuICB9XG59XG4iXX0=
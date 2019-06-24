/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter, map, startWith } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return cart.deliveryItemsQuantity || 0; })));
        this.total$ = this.cartService.getActive().pipe(filter((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return !!cart.totalPrice; })), map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return cart.totalPrice.formattedValue; })));
    }
    MiniCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-mini-cart',
                    template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MiniCartComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return MiniCartComponent;
}());
export { MiniCartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRDtJQWtCRSwyQkFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFaOUMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixjQUFTLEdBQXVCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUMvRCxTQUFTLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUN2QyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQzdDLENBQUM7UUFFRixXQUFNLEdBQXVCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM1RCxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBakIsQ0FBaUIsRUFBQyxFQUNqQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBOUIsQ0FBOEIsRUFBQyxDQUM1QyxDQUFDO0lBRStDLENBQUM7O2dCQWxCbkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qix3VUFBeUM7b0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFUUSxXQUFXOztJQXdCcEIsd0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLGlCQUFpQjs7O0lBQzVCLHNDQUFzQjs7SUFFdEIsc0NBR0U7O0lBRUYsbUNBR0U7Ozs7O0lBRVUsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1pbmktY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcXVhbnRpdHkkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgc3RhcnRXaXRoKHsgZGVsaXZlcnlJdGVtc1F1YW50aXR5OiAwIH0pLFxuICAgIG1hcChjYXJ0ID0+IGNhcnQuZGVsaXZlcnlJdGVtc1F1YW50aXR5IHx8IDApXG4gICk7XG5cbiAgdG90YWwkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgZmlsdGVyKGNhcnQgPT4gISFjYXJ0LnRvdGFsUHJpY2UpLFxuICAgIG1hcChjYXJ0ID0+IGNhcnQudG90YWxQcmljZS5mb3JtYXR0ZWRWYWx1ZSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7fVxufVxuIl19
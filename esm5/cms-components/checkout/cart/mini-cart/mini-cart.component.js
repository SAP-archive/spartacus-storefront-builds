/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon/index';
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService
            .getActive()
            .pipe(map(function (cart) { return cart.deliveryItemsQuantity || 0; }));
        this.total$ = this.cartService.getActive().pipe(filter(function (cart) { return !!cart.totalPrice; }), map(function (cart) { return cart.totalPrice.formattedValue; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXJEO0lBaUJFLDJCQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVg5QyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLGNBQVMsR0FBdUIsSUFBSSxDQUFDLFdBQVc7YUFDN0MsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQyxDQUFDO1FBRXRELFdBQU0sR0FBdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQzVELE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFqQixDQUFpQixDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUE5QixDQUE4QixDQUFDLENBQzVDLENBQUM7SUFFK0MsQ0FBQzs7Z0JBakJuRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHdVQUF5QztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVRRLFdBQVc7O0lBdUJwQix3QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksaUJBQWlCOzs7SUFDNUIsc0NBQXNCOztJQUV0QixzQ0FFc0Q7O0lBRXRELG1DQUdFOzs7OztJQUVVLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbWluaS1jYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktY2FydC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5pQ2FydENvbXBvbmVudCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBxdWFudGl0eSQ6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAuZ2V0QWN0aXZlKClcbiAgICAucGlwZShtYXAoY2FydCA9PiBjYXJ0LmRlbGl2ZXJ5SXRlbXNRdWFudGl0eSB8fCAwKSk7XG5cbiAgdG90YWwkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgZmlsdGVyKGNhcnQgPT4gISFjYXJ0LnRvdGFsUHJpY2UpLFxuICAgIG1hcChjYXJ0ID0+IGNhcnQudG90YWxQcmljZS5mb3JtYXR0ZWRWYWx1ZSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7fVxufVxuIl19
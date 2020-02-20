import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter, map, startWith } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/icon.model';
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map(function (cart) { return cart.deliveryItemsQuantity || 0; }));
        this.total$ = this.cartService.getActive().pipe(filter(function (cart) { return !!cart.totalPrice; }), map(function (cart) { return cart.totalPrice.formattedValue; }));
    }
    MiniCartComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    MiniCartComponent = __decorate([
        Component({
            selector: 'cx-mini-cart',
            template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], MiniCartComponent);
    return MiniCartComponent;
}());
export { MiniCartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU92RDtJQWFFLDJCQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVo5QyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLGNBQVMsR0FBdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQy9ELFNBQVMsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3ZDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FDN0MsQ0FBQztRQUVGLFdBQU0sR0FBdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQzVELE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFqQixDQUFpQixDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUE5QixDQUE4QixDQUFDLENBQzVDLENBQUM7SUFFK0MsQ0FBQzs7Z0JBQWYsV0FBVzs7SUFibkMsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLHdVQUF5QztZQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBYzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1taW5pLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWluaS1jYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1pbmlDYXJ0Q29tcG9uZW50IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIHF1YW50aXR5JDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgIHN0YXJ0V2l0aCh7IGRlbGl2ZXJ5SXRlbXNRdWFudGl0eTogMCB9KSxcbiAgICBtYXAoY2FydCA9PiBjYXJ0LmRlbGl2ZXJ5SXRlbXNRdWFudGl0eSB8fCAwKVxuICApO1xuXG4gIHRvdGFsJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgIGZpbHRlcihjYXJ0ID0+ICEhY2FydC50b3RhbFByaWNlKSxcbiAgICBtYXAoY2FydCA9PiBjYXJ0LnRvdGFsUHJpY2UuZm9ybWF0dGVkVmFsdWUpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge31cbn1cbiJdfQ==
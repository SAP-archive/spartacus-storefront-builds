/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { ICON_TYPES } from '../../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export class MiniCartComponent {
    /**
     * @param {?} component
     * @param {?} cartService
     */
    constructor(component, cartService) {
        this.component = component;
        this.cartService = cartService;
        this.iconTypes = ICON_TYPES;
    }
    /**
     * @return {?}
     */
    get quantity$() {
        return this.cartService
            .getActive()
            .pipe(map(cart => cart.deliveryItemsQuantity || 0));
    }
    /**
     * @return {?}
     */
    get total$() {
        return this.cartService.getActive().pipe(filter(cart => !!cart.totalPrice), map(cart => cart.totalPrice.formattedValue));
    }
}
MiniCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-mini-cart',
                template: "<a\n  [attr.aria-label]=\"(quantity$ | async) + ' items currently in your cart'\"\n  [routerLink]=\"{ route: ['cart'] } | cxTranslateUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MiniCartComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CartService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBd0IsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQU8zRixNQUFNLE9BQU8saUJBQWlCOzs7OztJQUc1QixZQUNZLFNBQWlELEVBQ2pELFdBQXdCO1FBRHhCLGNBQVMsR0FBVCxTQUFTLENBQXdDO1FBQ2pELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGNBQVMsR0FBRyxVQUFVLENBQUM7SUFLcEIsQ0FBQzs7OztJQUVKLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUM1QyxDQUFDO0lBQ0osQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsaVVBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLGdCQUFnQjtZQUpoQixXQUFXOzs7O0lBWWxCLHNDQUF1Qjs7Ozs7SUFHckIsc0NBQTJEOzs7OztJQUMzRCx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgQ21zTWluaUNhcnRDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbWluaS1jYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktY2FydC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5pQ2FydENvbXBvbmVudCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRVM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNNaW5pQ2FydENvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0IHF1YW50aXR5JCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKG1hcChjYXJ0ID0+IGNhcnQuZGVsaXZlcnlJdGVtc1F1YW50aXR5IHx8IDApKTtcbiAgfVxuXG4gIGdldCB0b3RhbCQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgICAgZmlsdGVyKGNhcnQgPT4gISFjYXJ0LnRvdGFsUHJpY2UpLFxuICAgICAgbWFwKGNhcnQgPT4gY2FydC50b3RhbFByaWNlLmZvcm1hdHRlZFZhbHVlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
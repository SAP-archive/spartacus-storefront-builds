/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { CmsComponentData } from '../../../../cms-structure/page/index';
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(component, cartService) {
        this.component = component;
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
    MiniCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-mini-cart',
                    template: "<a\n  *ngIf=\"(cart$ | async) as cart\"\n  aria-label=\"Cart\"\n  [routerLink]=\"{ route: 'cart' } | cxTranslateUrl\"\n>\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 35 28\">\n    <g transform=\"translate(-4758 4746)\">\n      <path\n        d=\"M4758.7-4746h4.7c0.3,0.1,0.6,0.3,0.7,0.5l1.7,7.5h23.6c0.4,0,0.7,0.4,0.7,0.8c0,0.1,0,0.1,0,0.2l-4,12\n c-0.1,0.2-0.4,0.4-0.7,0.4h-16.4l0.3,1.3h14.1c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7l0,0c-1.5,0-2.6-1.2-2.6-2.6\n c0-0.5,0.1-1,0.4-1.4h-10.1c0.8,1.2,0.4,2.9-0.9,3.6c-0.4,0.3-0.9,0.4-1.4,0.4c-1.5,0-2.7-1.2-2.7-2.7c0-1.2,0.8-2.2,1.9-2.5\n l-5.1-21.4h-4.1c-0.3,0-0.6-0.2-0.7-0.6c0,0,0-0.1,0-0.1C4758-4745.7,4758.2-4746,4758.7-4746C4758.6-4746,4758.6-4746,4758.7-4746\n z\"\n      />\n    </g>\n  </svg>\n\n  <span\n    class=\"count\"\n    *ngIf=\"cart.deliveryItemsQuantity || '0' as qty\"\n    [attr.aria-label]=\"'My cart. ' + qty + ' items currently in your cart.'\"\n    >{{ qty }}</span\n  >\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBZ0MsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV4RTtJQVNFLDJCQUNZLFNBQWlELEVBQ2pELFdBQXdCO1FBRHhCLGNBQVMsR0FBVCxTQUFTLENBQXdDO1FBQ2pELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWxDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLG8rQkFBeUM7b0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUFEsZ0JBQWdCO2dCQUZoQixXQUFXOztJQW1CcEIsd0JBQUM7Q0FBQSxBQWZELElBZUM7U0FUWSxpQkFBaUI7OztJQUM1QixrQ0FBMEI7Ozs7O0lBR3hCLHNDQUEyRDs7Ozs7SUFDM0Qsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIENtc01pbmlDYXJ0Q29tcG9uZW50LCBVSUNhcnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1pbmktY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9taW5pLWNhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1pbmlDYXJ0Q29tcG9uZW50IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8VUlDYXJ0PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc01pbmlDYXJ0Q29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG59XG4iXX0=
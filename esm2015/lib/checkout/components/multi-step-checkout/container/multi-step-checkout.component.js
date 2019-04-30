/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { GlobalMessageService, CartService } from '@spartacus/core';
import { CheckoutDetailsService } from '../../../checkout-details.service';
export class MultiStepCheckoutComponent {
    /**
     * @param {?} checkoutDetailsService
     * @param {?} cartService
     * @param {?} globalMessageService
     * @param {?} cd
     */
    constructor(checkoutDetailsService, cartService, globalMessageService, cd) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.cartService = cartService;
        this.globalMessageService = globalMessageService;
        this.cd = cd;
        this.step = 1;
        this.navs = this.initializeCheckoutNavBar();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextStep(step) {
        /** @type {?} */
        const previousStep = step - 1;
        this.navs.forEach(function (nav) {
            if (nav.id === previousStep) {
                nav.status.completed = true;
            }
            if (nav.id === step) {
                nav.status.active = true;
                nav.status.disabled = false;
            }
            else {
                nav.status.active = false;
            }
            nav.progressBar = nav.status.active || nav.status.completed;
        });
        this.step = step;
    }
    /**
     * @return {?}
     */
    initializeCheckoutNavBar() {
        return [
            {
                id: 1,
                label: '1. Shipping Address',
                status: {
                    disabled: false,
                    completed: false,
                    active: true,
                },
                progressBar: true,
            },
            {
                id: 2,
                label: '2. Shipping Method',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 3,
                label: '3. Payment',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 4,
                label: '4. Review',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
        ];
    }
    /**
     * @return {?}
     */
    clearCheckoutNavBar() {
        this.navs = [];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearCheckoutNavBar();
    }
}
MultiStepCheckoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-multi-step-checkout',
                template: "<ng-container\n  *ngIf=\"(checkoutDetailsService.getCheckoutDetailsLoaded$ | async)\"\n>\n  <div *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-8\">\n        <!-- VISIBLE ONLY ON LG AND XL SCREENS -->\n        <!-- Navigation -->\n        <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n          <ul class=\"cx-list\">\n            <li\n              *ngFor=\"let nav of navs\"\n              class=\"cx-item\"\n              [ngClass]=\"{\n                ' is-disabled': nav.status.disabled,\n                ' is-active': nav.status.active\n              }\"\n            >\n              <a\n                class=\"cx-link \"\n                [ngClass]=\"{\n                  ' is-disabled': nav.status.disabled,\n                  ' is-active': nav.status.active\n                }\"\n                (click)=\"\n                  nav.status.disabled === false ? nextStep(nav.id) : false\n                \"\n                >{{ nav.label }}</a\n              >\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"cx-media\">\n          <div class=\"cx-list-media\">\n            {{\n              'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems }\n            }}:\n            {{ cart.subTotal?.formattedValue }}\n          </div>\n\n          <div *ngFor=\"let nav of navs\">\n            <!-- Navigation -->\n            <div\n              class=\"cx-list-media\"\n              [ngClass]=\"{ ' is-active': nav.status.active }\"\n            >\n              <div>{{ nav.label }}</div>\n              <button\n                *ngIf=\"nav.status.completed && !nav.status.active\"\n                class=\"btn btn-link\"\n                (click)=\"nextStep(nav.id)\"\n              >\n                {{ 'common.edit' | cxTranslate }}\n              </button>\n            </div>\n\n            <!-- Content -->\n            <div *ngIf=\"nav.status.active && step === 1\">\n              <cx-shipping-address\n                (goToStep)=\"nextStep($event)\"\n              ></cx-shipping-address>\n            </div>\n            <div *ngIf=\"nav.status.active && step === 2\">\n              <cx-delivery-mode\n                (goToStep)=\"nextStep($event)\"\n              ></cx-delivery-mode>\n            </div>\n            <div *ngIf=\"nav.status.active && step === 3\">\n              <cx-payment-method\n                (goToStep)=\"nextStep($event)\"\n              ></cx-payment-method>\n            </div>\n            <div *ngIf=\"nav.status.active && step === 4\">\n              <cx-review-submit></cx-review-submit>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- ORDER SUMMARY SECTION -->\n      <div class=\"col-md-7 offset-md-5 col-lg-4 offset-lg-0\">\n        <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n\n        <!-- CHECKBOX AND PLACE ORDER BUTTON -->\n        <div class=\"cx-place-order\" *ngIf=\"step === 4\">\n          <cx-place-order></cx-place-order>\n\n          <button class=\"btn btn-action btn-block\" (click)=\"nextStep(3)\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MultiStepCheckoutComponent.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CartService },
    { type: GlobalMessageService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.step;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.cart$;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.navs;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU8zRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7O0lBS3JDLFlBQ1Msc0JBQThDLEVBQzNDLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxFQUFxQjtRQUh4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzNDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFSakMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBeUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFPMUQsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTs7Y0FDYixZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHO1lBQzVCLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQUU7Z0JBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUM3QjtZQUNELElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUMzQjtZQUVELEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixNQUFNLEVBQUU7b0JBQ04sUUFBUSxFQUFFLEtBQUs7b0JBQ2YsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2dCQUNELFdBQVcsRUFBRSxJQUFJO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxLQUFLO29CQUNoQixNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxZQUFZO2dCQUNuQixNQUFNLEVBQUU7b0JBQ04sUUFBUSxFQUFFLElBQUk7b0JBQ2QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRTtvQkFDTixRQUFRLEVBQUUsSUFBSTtvQkFDZCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsV0FBVyxFQUFFLEtBQUs7YUFDbkI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsMHJHQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxzQkFBc0I7WUFMQSxXQUFXO1lBQWpDLG9CQUFvQjtZQUgzQixpQkFBaUI7Ozs7SUFnQmpCLDBDQUFTOztJQUNULDJDQUEwQjs7SUFDMUIsMENBQTZEOztJQUczRCw0REFBcUQ7Ozs7O0lBQ3JELGlEQUFrQzs7Ozs7SUFDbEMsMERBQW9EOzs7OztJQUNwRCx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgQ2FydFNlcnZpY2UsIFVJQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2hlY2tvdXROYXZCYXJJdGVtIH0gZnJvbSAnLi9jaGVja291dC1uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbXVsdGktc3RlcC1jaGVja291dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGVwID0gMTtcbiAgY2FydCQ6IE9ic2VydmFibGU8VUlDYXJ0PjtcbiAgbmF2czogQ2hlY2tvdXROYXZCYXJJdGVtW10gPSB0aGlzLmluaXRpYWxpemVDaGVja291dE5hdkJhcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjaGVja291dERldGFpbHNTZXJ2aWNlOiBDaGVja291dERldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgfVxuXG4gIG5leHRTdGVwKHN0ZXA6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHN0ZXAgLSAxO1xuICAgIHRoaXMubmF2cy5mb3JFYWNoKGZ1bmN0aW9uKG5hdikge1xuICAgICAgaWYgKG5hdi5pZCA9PT0gcHJldmlvdXNTdGVwKSB7XG4gICAgICAgIG5hdi5zdGF0dXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXYuaWQgPT09IHN0ZXApIHtcbiAgICAgICAgbmF2LnN0YXR1cy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBuYXYuc3RhdHVzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXYuc3RhdHVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBuYXYucHJvZ3Jlc3NCYXIgPSBuYXYuc3RhdHVzLmFjdGl2ZSB8fCBuYXYuc3RhdHVzLmNvbXBsZXRlZDtcbiAgICB9KTtcbiAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUNoZWNrb3V0TmF2QmFyKCk6IENoZWNrb3V0TmF2QmFySXRlbVtdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbGFiZWw6ICcxLiBTaGlwcGluZyBBZGRyZXNzJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBsYWJlbDogJzIuIFNoaXBwaW5nIE1ldGhvZCcsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGxhYmVsOiAnMy4gUGF5bWVudCcsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGxhYmVsOiAnNC4gUmV2aWV3JyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBjbGVhckNoZWNrb3V0TmF2QmFyKCk6IHZvaWQge1xuICAgIHRoaXMubmF2cyA9IFtdO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0TmF2QmFyKCk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUsxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU8zRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7O0lBS3JDLFlBQ1Msc0JBQThDLEVBQzNDLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxFQUFxQjtRQUh4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzNDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFSakMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBeUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFPMUQsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTs7Y0FDYixZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHO1lBQzVCLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQUU7Z0JBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUM3QjtZQUNELElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUMzQjtZQUVELEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixNQUFNLEVBQUU7b0JBQ04sUUFBUSxFQUFFLEtBQUs7b0JBQ2YsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2dCQUNELFdBQVcsRUFBRSxJQUFJO2FBQ2xCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxLQUFLO29CQUNoQixNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxZQUFZO2dCQUNuQixNQUFNLEVBQUU7b0JBQ04sUUFBUSxFQUFFLElBQUk7b0JBQ2QsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRTtvQkFDTixRQUFRLEVBQUUsSUFBSTtvQkFDZCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsV0FBVyxFQUFFLEtBQUs7YUFDbkI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsMHJHQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxzQkFBc0I7WUFMQSxXQUFXO1lBQWpDLG9CQUFvQjtZQUgzQixpQkFBaUI7Ozs7SUFnQmpCLDBDQUFTOztJQUNULDJDQUF3Qjs7SUFDeEIsMENBQTZEOztJQUczRCw0REFBcUQ7Ozs7O0lBQ3JELGlEQUFrQzs7Ozs7SUFDbEMsMERBQW9EOzs7OztJQUNwRCx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgQ2FydFNlcnZpY2UsIENhcnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoZWNrb3V0TmF2QmFySXRlbSB9IGZyb20gJy4vY2hlY2tvdXQtbmF2aWdhdGlvbi1iYXInO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW11bHRpLXN0ZXAtY2hlY2tvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVN0ZXBDaGVja291dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RlcCA9IDE7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBuYXZzOiBDaGVja291dE5hdkJhckl0ZW1bXSA9IHRoaXMuaW5pdGlhbGl6ZUNoZWNrb3V0TmF2QmFyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG5cbiAgbmV4dFN0ZXAoc3RlcDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNTdGVwID0gc3RlcCAtIDE7XG4gICAgdGhpcy5uYXZzLmZvckVhY2goZnVuY3Rpb24obmF2KSB7XG4gICAgICBpZiAobmF2LmlkID09PSBwcmV2aW91c1N0ZXApIHtcbiAgICAgICAgbmF2LnN0YXR1cy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hdi5pZCA9PT0gc3RlcCkge1xuICAgICAgICBuYXYuc3RhdHVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5hdi5zdGF0dXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdGF0dXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG5hdi5wcm9ncmVzc0JhciA9IG5hdi5zdGF0dXMuYWN0aXZlIHx8IG5hdi5zdGF0dXMuY29tcGxldGVkO1xuICAgIH0pO1xuICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gIH1cblxuICBpbml0aWFsaXplQ2hlY2tvdXROYXZCYXIoKTogQ2hlY2tvdXROYXZCYXJJdGVtW10ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBsYWJlbDogJzEuIFNoaXBwaW5nIEFkZHJlc3MnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGxhYmVsOiAnMi4gU2hpcHBpbmcgTWV0aG9kJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbGFiZWw6ICczLiBQYXltZW50JyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbGFiZWw6ICc0LiBSZXZpZXcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGNsZWFyQ2hlY2tvdXROYXZCYXIoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZzID0gW107XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXROYXZCYXIoKTtcbiAgfVxufVxuIl19
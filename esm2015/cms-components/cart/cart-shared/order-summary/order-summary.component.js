/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class OrderSummaryComponent {
}
OrderSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-summary',
                template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.net\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.totalDiscounts?.value > 0\">\n    {{ 'orderCost.discount' | cxTranslate }}\n    {{ cart.totalDiscounts?.formattedValue }}\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"!cart.net\">\n    {{ 'orderCost.grossTax' | cxTranslate }}\n    {{ cart.totalTax?.formattedValue }}.\n  </div>\n</div>\n\n<!--\n<cx-promotions [promotions]=\"cart.appliedOrderPromotions\"></cx-promotions>\n-->\n"
            }] }
];
OrderSummaryComponent.propDecorators = {
    cart: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OrderSummaryComponent.prototype.cart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtc2hhcmVkL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU0sT0FBTyxxQkFBcUI7OztZQUpqQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZ3BEQUE2QzthQUM5Qzs7O21CQUVFLEtBQUs7Ozs7SUFBTixxQ0FDVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyU3VtbWFyeUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNhcnQ6IENhcnQ7XG59XG4iXX0=
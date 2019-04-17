/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    OrderSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-summary',
                    template: "<h4>{{ 'orderCost.label.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-savings\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.discount' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalDiscounts?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.label.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n</div>\n\n<cx-promotions [promotions]=\"cart.appliedOrderPromotions\"></cx-promotions>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:block;padding:var(--cx-padding,1rem);margin:var(--cx-margin,0 0 1.5rem 0)}.cx-summary-label{text-align:var(--cx-text-align,start);padding:var(--cx-padding,0)}.cx-summary-amount{text-align:var(--cx-text-align,end);padding:var(--cx-padding,0)}.cx-summary-row{padding:var(--cx-padding,.5rem 0);display:var(--cx-display,flex);flex-wrap:var(--cx-flex-wrap,wrap)}.cx-summary-savings{color:var(--cx-color,var(--cx-g-color-success))}.cx-summary-total{font-weight:var(--cx-font-weight,var(--cx-g-font-weight-bold,700))}"]
                }] }
    ];
    OrderSummaryComponent.propDecorators = {
        cart: [{ type: Input }]
    };
    return OrderSummaryComponent;
}());
export { OrderSummaryComponent };
if (false) {
    /** @type {?} */
    OrderSummaryComponent.prototype.cart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2FydC9jYXJ0LXNoYXJlZC9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlqRDtJQUFBO0lBUUEsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDZsREFBNkM7O2lCQUU5Qzs7O3VCQUVFLEtBQUs7O0lBRVIsNEJBQUM7Q0FBQSxBQVJELElBUUM7U0FIWSxxQkFBcUI7OztJQUNoQyxxQ0FDVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29yZGVyLXN1bW1hcnkuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJTdW1tYXJ5Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY2FydDogQ2FydDtcbn1cbiJdfQ==
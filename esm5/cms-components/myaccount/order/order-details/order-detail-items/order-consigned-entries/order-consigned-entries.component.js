/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
var OrderConsignedEntriesComponent = /** @class */ (function () {
    function OrderConsignedEntriesComponent() {
        this.promotionLocation = PromotionLocation.Order;
    }
    /**
     * @param {?} consignment
     * @return {?}
     */
    OrderConsignedEntriesComponent.prototype.getConsignmentProducts = /**
     * @param {?} consignment
     * @return {?}
     */
    function (consignment) {
        /** @type {?} */
        var products = [];
        consignment.entries.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            products.push(element.orderEntry);
        }));
        return products;
    };
    OrderConsignedEntriesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-consigned-entries',
                    template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <div class=\"cx-list-header col-12\">\n    <div class=\"cx-list-status\">\n      <span *ngIf=\"consignment\">\n        {{\n          'orderDetails.deliveryStatus'\n            | cxTranslate: { context: consignment.status }\n        }}\n      </span>\n    </div>\n    <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n      <div>{{ consignment?.statusDate | cxDate }}</div>\n    </div>\n\n    <cx-consignment-tracking\n      [orderCode]=\"order.code\"\n      [consignment]=\"consignment\"\n      *cxFeature=\"'consignmentTracking'\"\n    >\n    </cx-consignment-tracking>\n  </div>\n  <div class=\"cx-list-item col-12\">\n    <cx-cart-item-list\n      [items]=\"consignment.entries\"\n      [readonly]=\"true\"\n      [promotionLocation]=\"promotionLocation\"\n    ></cx-cart-item-list>\n  </div>\n</div>\n"
                }] }
    ];
    OrderConsignedEntriesComponent.propDecorators = {
        consignments: [{ type: Input }],
        order: [{ type: Input }]
    };
    return OrderConsignedEntriesComponent;
}());
export { OrderConsignedEntriesComponent };
if (false) {
    /** @type {?} */
    OrderConsignedEntriesComponent.prototype.consignments;
    /** @type {?} */
    OrderConsignedEntriesComponent.prototype.order;
    /** @type {?} */
    OrderConsignedEntriesComponent.prototype.promotionLocation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUlMLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBQUE7UUFPRSxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBVWpFLENBQUM7Ozs7O0lBUkMsK0RBQXNCOzs7O0lBQXRCLFVBQXVCLFdBQXdCOztZQUN2QyxRQUFRLEdBQWlCLEVBQUU7UUFDakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyx5NEJBQXVEO2lCQUN4RDs7OytCQUVFLEtBQUs7d0JBQ0wsS0FBSzs7SUFXUixxQ0FBQztDQUFBLEFBakJELElBaUJDO1NBYlksOEJBQThCOzs7SUFDekMsc0RBQXFDOztJQUNyQywrQ0FBc0I7O0lBQ3RCLDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnNpZ25tZW50LFxuICBPcmRlcixcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWNvbnNpZ25lZC1lbnRyaWVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25zaWduZWRFbnRyaWVzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uc2lnbm1lbnRzOiBDb25zaWdubWVudFtdO1xuICBASW5wdXQoKSBvcmRlcjogT3JkZXI7XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLk9yZGVyO1xuXG4gIGdldENvbnNpZ25tZW50UHJvZHVjdHMoY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogT3JkZXJFbnRyeVtdIHtcbiAgICBjb25zdCBwcm9kdWN0czogT3JkZXJFbnRyeVtdID0gW107XG4gICAgY29uc2lnbm1lbnQuZW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgcHJvZHVjdHMucHVzaChlbGVtZW50Lm9yZGVyRW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xuICB9XG59XG4iXX0=
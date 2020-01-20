/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var OrderConsignedEntriesComponent = /** @class */ (function () {
    function OrderConsignedEntriesComponent() {
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
                    template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <div class=\"cx-list-header col-12\">\n    <div class=\"cx-list-status\">\n      <span *ngIf=\"consignment\">\n        {{\n          'orderDetails.deliveryStatus'\n            | cxTranslate: { context: consignment.status }\n        }}\n      </span>\n    </div>\n    <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n      <div>{{ consignment?.statusDate | cxDate }}</div>\n    </div>\n\n    <cx-consignment-tracking\n      [orderCode]=\"order.code\"\n      [consignment]=\"consignment\"\n      *cxFeature=\"'consignmentTracking'\"\n    >\n    </cx-consignment-tracking>\n  </div>\n  <div class=\"cx-list-item col-12\">\n    <cx-cart-item-list\n      [items]=\"consignment.entries\"\n      [isReadOnly]=\"true\"\n    ></cx-cart-item-list>\n  </div>\n</div>\n"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQ7SUFBQTtJQWdCQSxDQUFDOzs7OztJQVJDLCtEQUFzQjs7OztJQUF0QixVQUF1QixXQUF3Qjs7WUFDdkMsUUFBUSxHQUFpQixFQUFFO1FBQ2pDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QywwMUJBQXVEO2lCQUN4RDs7OytCQUVFLEtBQUs7d0JBQ0wsS0FBSzs7SUFVUixxQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWlksOEJBQThCOzs7SUFDekMsc0RBQXFDOztJQUNyQywrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudCwgT3JkZXIsIE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1jb25zaWduZWQtZW50cmllcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25zaWduZWQtZW50cmllcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uc2lnbmVkRW50cmllc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnNpZ25tZW50czogQ29uc2lnbm1lbnRbXTtcbiAgQElucHV0KCkgb3JkZXI6IE9yZGVyO1xuXG4gIGdldENvbnNpZ25tZW50UHJvZHVjdHMoY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogT3JkZXJFbnRyeVtdIHtcbiAgICBjb25zdCBwcm9kdWN0czogT3JkZXJFbnRyeVtdID0gW107XG4gICAgY29uc2lnbm1lbnQuZW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgcHJvZHVjdHMucHVzaChlbGVtZW50Lm9yZGVyRW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xuICB9XG59XG4iXX0=
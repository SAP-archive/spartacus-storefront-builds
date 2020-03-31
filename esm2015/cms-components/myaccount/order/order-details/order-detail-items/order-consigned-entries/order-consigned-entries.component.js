import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
let OrderConsignedEntriesComponent = class OrderConsignedEntriesComponent {
    constructor() {
        this.promotionLocation = PromotionLocation.Order;
    }
    getConsignmentProducts(consignment) {
        const products = [];
        consignment.entries.forEach((element) => {
            products.push(element.orderEntry);
        });
        return products;
    }
};
__decorate([
    Input()
], OrderConsignedEntriesComponent.prototype, "consignments", void 0);
__decorate([
    Input()
], OrderConsignedEntriesComponent.prototype, "order", void 0);
OrderConsignedEntriesComponent = __decorate([
    Component({
        selector: 'cx-order-consigned-entries',
        template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <div class=\"cx-list-header col-12\">\n    <div class=\"cx-list-status\">\n      <span *ngIf=\"consignment\">\n        {{\n          'orderDetails.deliveryStatus'\n            | cxTranslate: { context: consignment.status }\n        }}\n      </span>\n    </div>\n    <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n      <div>{{ consignment?.statusDate | cxDate }}</div>\n    </div>\n\n    <cx-consignment-tracking\n      [orderCode]=\"order.code\"\n      [consignment]=\"consignment\"\n      *cxFeature=\"'consignmentTracking'\"\n    >\n    </cx-consignment-tracking>\n  </div>\n  <div class=\"cx-list-item col-12\">\n    <cx-cart-item-list\n      [items]=\"consignment.entries\"\n      [readonly]=\"true\"\n      [promotionLocation]=\"promotionLocation\"\n    ></cx-cart-item-list>\n  </div>\n</div>\n"
    })
], OrderConsignedEntriesComponent);
export { OrderConsignedEntriesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUlMLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBQTNDO1FBR0Usc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQVVqRSxDQUFDO0lBUkMsc0JBQXNCLENBQUMsV0FBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUE7QUFaVTtJQUFSLEtBQUssRUFBRTtvRUFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7NkRBQWM7QUFGWCw4QkFBOEI7SUFKMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0Qyx5NEJBQXVEO0tBQ3hELENBQUM7R0FDVyw4QkFBOEIsQ0FhMUM7U0FiWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25zaWdubWVudCxcbiAgT3JkZXIsXG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1jb25zaWduZWQtZW50cmllcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25zaWduZWQtZW50cmllcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uc2lnbmVkRW50cmllc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnNpZ25tZW50czogQ29uc2lnbm1lbnRbXTtcbiAgQElucHV0KCkgb3JkZXI6IE9yZGVyO1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjtcblxuICBnZXRDb25zaWdubWVudFByb2R1Y3RzKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCk6IE9yZGVyRW50cnlbXSB7XG4gICAgY29uc3QgcHJvZHVjdHM6IE9yZGVyRW50cnlbXSA9IFtdO1xuICAgIGNvbnNpZ25tZW50LmVudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgcHJvZHVjdHMucHVzaChlbGVtZW50Lm9yZGVyRW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xuICB9XG59XG4iXX0=
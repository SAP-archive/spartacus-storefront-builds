import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
let OrderConsignedEntriesComponent = class OrderConsignedEntriesComponent {
    constructor() {
        this.promotionLocation = PromotionLocation.Order;
    }
    getConsignmentProducts(consignment) {
        const products = [];
        consignment.entries.forEach(element => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUlMLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBQTNDO1FBR0Usc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQVVqRSxDQUFDO0lBUkMsc0JBQXNCLENBQUMsV0FBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBWlU7SUFBUixLQUFLLEVBQUU7b0VBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFOzZEQUFjO0FBRlgsOEJBQThCO0lBSjFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMseTRCQUF1RDtLQUN4RCxDQUFDO0dBQ1csOEJBQThCLENBYTFDO1NBYlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uc2lnbm1lbnQsXG4gIE9yZGVyLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uc2lnbmVkLWVudHJpZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbnNpZ25lZEVudHJpZXNDb21wb25lbnQge1xuICBASW5wdXQoKSBjb25zaWdubWVudHM6IENvbnNpZ25tZW50W107XG4gIEBJbnB1dCgpIG9yZGVyOiBPcmRlcjtcbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uT3JkZXI7XG5cbiAgZ2V0Q29uc2lnbm1lbnRQcm9kdWN0cyhjb25zaWdubWVudDogQ29uc2lnbm1lbnQpOiBPcmRlckVudHJ5W10ge1xuICAgIGNvbnN0IHByb2R1Y3RzOiBPcmRlckVudHJ5W10gPSBbXTtcbiAgICBjb25zaWdubWVudC5lbnRyaWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBwcm9kdWN0cy5wdXNoKGVsZW1lbnQub3JkZXJFbnRyeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH1cbn1cbiJdfQ==
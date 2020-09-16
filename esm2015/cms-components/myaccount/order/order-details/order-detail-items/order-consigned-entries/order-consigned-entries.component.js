import { Component, Input } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
export class OrderConsignedEntriesComponent {
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
}
OrderConsignedEntriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-consigned-entries',
                template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <div class=\"cx-list-header col-12\">\n    <div class=\"cx-list-status\">\n      <span *ngIf=\"consignment\">\n        {{\n          'orderDetails.deliveryStatus'\n            | cxTranslate: { context: consignment.status }\n        }}\n      </span>\n    </div>\n    <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n      <div>{{ consignment?.statusDate | cxDate }}</div>\n    </div>\n\n    <cx-consignment-tracking\n      [orderCode]=\"order.code\"\n      [consignment]=\"consignment\"\n      *cxFeature=\"'consignmentTracking'\"\n    >\n    </cx-consignment-tracking>\n  </div>\n  <div class=\"cx-list-item col-12\">\n    <cx-cart-item-list\n      [items]=\"consignment.entries\"\n      [readonly]=\"true\"\n      [promotionLocation]=\"promotionLocation\"\n    ></cx-cart-item-list>\n  </div>\n</div>\n"
            },] }
];
OrderConsignedEntriesComponent.propDecorators = {
    consignments: [{ type: Input }],
    order: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBSUwsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFNekIsTUFBTSxPQUFPLDhCQUE4QjtJQUozQztRQU9FLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFVakUsQ0FBQztJQVJDLHNCQUFzQixDQUFDLFdBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFpQixFQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMseTRCQUF1RDthQUN4RDs7OzJCQUVFLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnNpZ25tZW50LFxuICBPcmRlcixcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWNvbnNpZ25lZC1lbnRyaWVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25zaWduZWRFbnRyaWVzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uc2lnbm1lbnRzOiBDb25zaWdubWVudFtdO1xuICBASW5wdXQoKSBvcmRlcjogT3JkZXI7XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLk9yZGVyO1xuXG4gIGdldENvbnNpZ25tZW50UHJvZHVjdHMoY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogT3JkZXJFbnRyeVtdIHtcbiAgICBjb25zdCBwcm9kdWN0czogT3JkZXJFbnRyeVtdID0gW107XG4gICAgY29uc2lnbm1lbnQuZW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBwcm9kdWN0cy5wdXNoKGVsZW1lbnQub3JkZXJFbnRyeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH1cbn1cbiJdfQ==
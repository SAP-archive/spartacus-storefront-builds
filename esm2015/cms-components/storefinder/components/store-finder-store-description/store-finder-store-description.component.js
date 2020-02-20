import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { StoreDataService, PointOfService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
let StoreFinderStoreDescriptionComponent = class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
    }
};
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: StoreDataService }
];
__decorate([
    Input()
], StoreFinderStoreDescriptionComponent.prototype, "location", void 0);
__decorate([
    Input()
], StoreFinderStoreDescriptionComponent.prototype, "disableMap", void 0);
StoreFinderStoreDescriptionComponent = __decorate([
    Component({
        selector: 'cx-store-finder-store-description',
        template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
    })
], StoreFinderStoreDescriptionComponent);
export { StoreFinderStoreDescriptionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU1sRyxJQUFhLG9DQUFvQyxHQUFqRCxNQUFhLG9DQUFxQyxTQUFRLDBCQUEwQjtJQUlsRixZQUFzQixnQkFBa0M7UUFDdEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFESixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXhELENBQUM7Q0FDRixDQUFBOztZQUh5QyxnQkFBZ0I7O0FBSC9DO0lBQVIsS0FBSyxFQUFFO3NFQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTt3RUFBcUI7QUFGbEIsb0NBQW9DO0lBSmhELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQ0FBbUM7UUFDN0MsaXVFQUE4RDtLQUMvRCxDQUFDO0dBQ1csb0NBQW9DLENBT2hEO1NBUFksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSwgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdG9yZS1pdGVtL2Fic3RyYWN0LXN0b3JlLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlO1xuICBASW5wdXQoKSBkaXNhYmxlTWFwOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKSB7XG4gICAgc3VwZXIoc3RvcmVEYXRhU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==
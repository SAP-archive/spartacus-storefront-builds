/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
export class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
    }
}
StoreFinderStoreDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-store-description',
                template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: StoreDataService }
];
StoreFinderStoreDescriptionComponent.propDecorators = {
    location: [{ type: Input }],
    disableMap: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.location;
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.disableMap;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU1sRyxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsMEJBQTBCOzs7O0lBSWxGLFlBQXNCLGdCQUFrQztRQUN0RCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQURKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFeEQsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLGl1RUFBOEQ7YUFDL0Q7Ozs7WUFOUSxnQkFBZ0I7Ozt1QkFRdEIsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRE4sd0RBQWtDOztJQUNsQywwREFBNkI7Ozs7O0lBRWpCLGdFQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UsIFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3Qtc3RvcmUtaXRlbS9hYnN0cmFjdC1zdG9yZS1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxvY2F0aW9uOiBQb2ludE9mU2VydmljZTtcbiAgQElucHV0KCkgZGlzYWJsZU1hcDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSkge1xuICAgIHN1cGVyKHN0b3JlRGF0YVNlcnZpY2UpO1xuICB9XG59XG4iXX0=
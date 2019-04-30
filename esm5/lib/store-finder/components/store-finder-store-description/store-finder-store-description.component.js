/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
import { StoreDataService, StoreFinderService } from '@spartacus/core';
var StoreFinderStoreDescriptionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StoreFinderStoreDescriptionComponent, _super);
    function StoreFinderStoreDescriptionComponent(storeDataService, storeFinderService, route) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.storeFinderService = storeFinderService;
        _this.route = route;
        return _this;
    }
    /**
     * @return {?}
     */
    StoreFinderStoreDescriptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.requestStoresData();
        this.location$ = this.storeFinderService.getFindStoresEntities();
        this.isLoading$ = this.storeFinderService.getStoresLoading();
    };
    /**
     * @return {?}
     */
    StoreFinderStoreDescriptionComponent.prototype.requestStoresData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeId = this.route.snapshot.params.store;
        this.storeFinderService.viewStoreById(storeId);
    };
    StoreFinderStoreDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-store-description',
                    template: "<div\n  class=\"container\"\n  *ngIf=\"!(isLoading$ | async) && (location$ | async) as location; else loading\"\n>\n  <div class=\"row\">\n    <article class=\"cx-store col-lg-4\">\n      <h2>{{ location.displayName }}</h2>\n\n      <p *ngIf=\"location.address\" class=\"storeAddress\">\n        {{ location.address.line1 }} <br />\n        {{ location.address.town + ',' }}\n        {{ location.address.region ? location.address.region.name + ',' : '' }}\n        {{ location.address.postalCode }}\n      </p>\n\n      <section class=\"cx-contact\">\n        <ul class=\"cx-list\">\n          <li class=\"cx-item\">\n            <a\n              class=\"cx-link\"\n              [href]=\"getDirections(location)\"\n              target=\"_blank\"\n              >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n            >\n          </li>\n          <li class=\"cx-item\">\n            {{ 'storeFinder.call' | cxTranslate }}\n            {{ location.address?.phone }}\n          </li>\n          <li class=\"cx-item\">\n            <a class=\"cx-link\" [routerLink]=\"['/contact']\">{{\n              'storeFinder.contactUs' | cxTranslate\n            }}</a>\n          </li>\n        </ul>\n      </section>\n      <div class=\"cx-schedule\">\n        <cx-schedule [location]=\"location\">\n          <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n        </cx-schedule>\n      </div>\n    </article>\n    <article class=\"cx-storeMap col-lg-8\">\n      <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n    </article>\n  </div>\n\n  <div class=\"row cx-feature\">\n    <div class=\"col-lg-12\">\n      <h3 class=\"cx-features-header\">\n        {{ 'storeFinder.storeFeatures' | cxTranslate }}\n      </h3>\n    </div>\n  </div>\n\n  <article class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let feature of location.features?.entry\">\n      <div class=\"cx-features\">{{ feature.value }}</div>\n    </div>\n  </article>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoreDescriptionComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: StoreFinderService },
        { type: ActivatedRoute }
    ]; };
    return StoreFinderStoreDescriptionComponent;
}(AbstractStoreItemComponent));
export { StoreFinderStoreDescriptionComponent };
if (false) {
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.location$;
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeDataService;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreDescriptionComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS1maW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24vc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZFO0lBS1UsZ0VBQTBCO0lBS2xDLDhDQUNZLGdCQUFrQyxFQUNsQyxrQkFBc0MsRUFDeEMsS0FBcUI7UUFIL0IsWUFLRSxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN4QjtRQUxXLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN4QyxXQUFLLEdBQUwsS0FBSyxDQUFnQjs7SUFHL0IsQ0FBQzs7OztJQUVELHVEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsZ0VBQWlCOzs7SUFBakI7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3Qyx1aUVBQThEO2lCQUMvRDs7OztnQkFMUSxnQkFBZ0I7Z0JBQUUsa0JBQWtCO2dCQUpwQyxjQUFjOztJQWtDdkIsMkNBQUM7Q0FBQSxBQTVCRCxDQUtVLDBCQUEwQixHQXVCbkM7U0F4Qlksb0NBQW9DOzs7SUFHL0MseURBQTJCOztJQUMzQiwwREFBNEI7Ozs7O0lBRzFCLGdFQUE0Qzs7Ozs7SUFDNUMsa0VBQWdEOzs7OztJQUNoRCxxREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSwgU3RvcmVGaW5kZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudFxuICBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9jYXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7XG4gICAgc3VwZXIoc3RvcmVEYXRhU2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlcXVlc3RTdG9yZXNEYXRhKCk7XG4gICAgdGhpcy5sb2NhdGlvbiQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRGaW5kU3RvcmVzRW50aXRpZXMoKTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRTdG9yZXNMb2FkaW5nKCk7XG4gIH1cblxuICByZXF1ZXN0U3RvcmVzRGF0YSgpIHtcbiAgICBjb25zdCBzdG9yZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuc3RvcmU7XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2Uudmlld1N0b3JlQnlJZChzdG9yZUlkKTtcbiAgfVxufVxuIl19
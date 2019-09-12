/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoutingService } from '@spartacus/core';
import { ICON_TYPE } from '../../../misc/icon';
export class StoreFinderSearchComponent {
    /**
     * @param {?} routingService
     */
    constructor(routingService) {
        this.routingService = routingService;
        this.searchBox = new FormControl();
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    findStores(address) {
        this.routingService.go(['store-finder/find'], { query: address });
    }
    /**
     * @return {?}
     */
    viewStoresWithMyLoc() {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
}
StoreFinderSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search',
                template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
StoreFinderSearchComponent.ctorParameters = () => [
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    StoreFinderSearchComponent.prototype.searchBox;
    /** @type {?} */
    StoreFinderSearchComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNL0MsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUlyQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIbEQsY0FBUyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzNDLGNBQVMsR0FBRyxTQUFTLENBQUM7SUFFK0IsQ0FBQzs7Ozs7SUFFdEQsVUFBVSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsSUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUMzQixLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFDckI7WUFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG84Q0FBbUQ7YUFDcEQ7Ozs7WUFOUSxjQUFjOzs7O0lBUXJCLCtDQUEyQzs7SUFDM0MsK0NBQXNCOzs7OztJQUVWLG9EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaENvbXBvbmVudCB7XG4gIHNlYXJjaEJveDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKSB7fVxuXG4gIGZpbmRTdG9yZXMoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbJ3N0b3JlLWZpbmRlci9maW5kJ10sIHsgcXVlcnk6IGFkZHJlc3MgfSk7XG4gIH1cblxuICB2aWV3U3RvcmVzV2l0aE15TG9jKCkge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oWydzdG9yZS1maW5kZXIvZmluZCddLCB7IHVzZU15TG9jYXRpb246IHRydWUgfSk7XG4gIH1cblxuICBvbktleShldmVudDogYW55KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zZWFyY2hCb3gudmFsdWUgJiZcbiAgICAgIHRoaXMuc2VhcmNoQm94LnZhbHVlLmxlbmd0aCAmJlxuICAgICAgZXZlbnQua2V5ID09PSAnRW50ZXInXG4gICAgKSB7XG4gICAgICB0aGlzLmZpbmRTdG9yZXModGhpcy5zZWFyY2hCb3gudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19
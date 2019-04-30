/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { StoreFinderService } from '@spartacus/core';
export class StoreFinderStoresCountComponent {
    /**
     * @param {?} storeFinderService
     */
    constructor(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    }
}
StoreFinderStoresCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-stores-count',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div\n      *ngFor=\"let country of locations?.countriesAndRegionsStoreCount\"\n      class=\"cx-set\"\n    >\n      <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n        <div class=\"cx-title\">\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            class=\"cx-name\"\n            >{{ country.name }}</span\n          >\n          <span\n            [ngClass]=\"\n              country?.storeCountDataList\n                ? 'country-header'\n                : 'country-header-link'\n            \"\n            *ngIf=\"!country?.storeCountDataList\"\n            class=\"cx-country-count\"\n            >({{ country.count }})</span\n          >\n        </div>\n      </a>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderStoresCountComponent.ctorParameters = () => [
    { type: StoreFinderService }
];
if (false) {
    /** @type {?} */
    StoreFinderStoresCountComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderStoresCountComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoresCountComponent.prototype.storeFinderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC9zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU1yRCxNQUFNLE9BQU8sK0JBQStCOzs7O0lBSTFDLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUcsQ0FBQzs7OztJQUU5RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsdW9DQUF5RDthQUMxRDs7OztZQUxRLGtCQUFrQjs7OztJQU96QixxREFBNEI7O0lBQzVCLHFEQUFnQzs7Ozs7SUFFcEIsNkRBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvY2F0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLnZpZXdBbGxTdG9yZXMoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpO1xuICB9XG59XG4iXX0=
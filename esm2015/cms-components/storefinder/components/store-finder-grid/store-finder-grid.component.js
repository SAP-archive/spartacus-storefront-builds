/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService, StoreFinderService } from '@spartacus/core';
export class StoreFinderGridComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     * @param {?} routingService
     */
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
        }
    }
    /**
     * @param {?} location
     * @return {?}
     */
    viewStore(location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    prepareRouteUrl(location) {
        /** @type {?} */
        const countryParam = this.route.snapshot.params.country
            ? `country/${this.route.snapshot.params.country}/`
            : '';
        /** @type {?} */
        const regionParam = this.route.snapshot.params.region
            ? `region/${this.route.snapshot.params.region}/`
            : '';
        return `store-finder/${countryParam}${regionParam}${location.name}`;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
StoreFinderGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-grid',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    StoreFinderGridComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderGridComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderGridComponent.prototype.defaultLocation;
    /** @type {?} */
    StoreFinderGridComponent.prototype.country;
    /** @type {?} */
    StoreFinderGridComponent.prototype.region;
    /**
     * @type {?}
     * @private
     */
    StoreFinderGridComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderGridComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    StoreFinderGridComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFPL0UsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBT25DLFlBQ1Usa0JBQXNDLEVBQ3RDLEtBQXFCLEVBQ3JCLGNBQThCO1FBRjlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLEVBQUUsRUFDRjtnQkFDRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2IsRUFDRCxTQUFTLEVBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDbkMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBYTtRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFFBQWE7O2NBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNyRCxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHO1lBQ2xELENBQUMsQ0FBQyxFQUFFOztjQUNBLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNuRCxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHO1lBQ2hELENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTyxnQkFBZ0IsWUFBWSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7WUFoRGpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywwbUJBQWlEO2FBQ2xEOzs7O1lBTndCLGtCQUFrQjtZQURsQyxjQUFjO1lBQ2QsY0FBYzs7OztJQVFyQiw4Q0FBZ0I7O0lBQ2hCLDhDQUFnQzs7SUFDaEMsbURBQTBCOztJQUMxQiwyQ0FBZ0I7O0lBQ2hCLDBDQUFlOzs7OztJQUdiLHNEQUE4Qzs7Ozs7SUFDOUMseUNBQTZCOzs7OztJQUM3QixrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgU3RvcmVGaW5kZXJTZXJ2aWNlLCBHZW9Qb2ludCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsb2NhdGlvbnMkOiBhbnk7XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGRlZmF1bHRMb2NhdGlvbjogR2VvUG9pbnQ7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTtcbiAgICB0aGlzLmRlZmF1bHRMb2NhdGlvbiA9IHt9O1xuXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnkpIHtcbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICAgICcnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVNpemU6IC0xLFxuICAgICAgICB9LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlld1N0b3JlKGxvY2F0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFt0aGlzLnByZXBhcmVSb3V0ZVVybChsb2NhdGlvbildKTtcbiAgfVxuXG4gIHByZXBhcmVSb3V0ZVVybChsb2NhdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBjb3VudHJ5UGFyYW0gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5XG4gICAgICA/IGBjb3VudHJ5LyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeX0vYFxuICAgICAgOiAnJztcbiAgICBjb25zdCByZWdpb25QYXJhbSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlZ2lvblxuICAgICAgPyBgcmVnaW9uLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVnaW9ufS9gXG4gICAgICA6ICcnO1xuICAgIHJldHVybiBgc3RvcmUtZmluZGVyLyR7Y291bnRyeVBhcmFtfSR7cmVnaW9uUGFyYW19JHtsb2NhdGlvbi5uYW1lfWA7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG59XG4iXX0=
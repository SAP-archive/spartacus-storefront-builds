/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', this.defaultLocation, {
                pageSize: -1,
            }, this.route.snapshot.params.country);
        }
    }
    /**
     * @param {?} location
     * @return {?}
     */
    viewStore(location) {
        if (this.route.snapshot.params.region) {
            this.routingService.go(['region', this.route.snapshot.params.region, location.name], undefined, { relativeTo: this.route });
            return;
        }
        this.routingService.go(['region', '', location.name], undefined, {
            relativeTo: this.route,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
StoreFinderGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-grid',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-md-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
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
    StoreFinderGridComponent.prototype.locationsSub;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFPL0UsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBUW5DLFlBQ1Usa0JBQXNDLEVBQ3RDLEtBQXFCLEVBQ3JCLGNBQThCO1FBRjlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRXJFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLEVBQUUsRUFDRixJQUFJLENBQUMsZUFBZSxFQUNwQjtnQkFDRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2IsRUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNuQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxRQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FDcEIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQzVELFNBQVMsRUFDVCxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQzNCLENBQUM7WUFDRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRTtZQUMvRCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7WUFoRGpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx3bEJBQWlEO2FBQ2xEOzs7O1lBTndCLGtCQUFrQjtZQURsQyxjQUFjO1lBQ2QsY0FBYzs7OztJQVFyQiw4Q0FBZ0I7O0lBQ2hCLDhDQUFnQzs7SUFDaEMsZ0RBQTJCOztJQUMzQixtREFBMEI7O0lBQzFCLDJDQUFnQjs7SUFDaEIsMENBQWU7Ozs7O0lBR2Isc0RBQThDOzs7OztJQUM5Qyx5Q0FBNkI7Ozs7O0lBQzdCLGtEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBTdG9yZUZpbmRlclNlcnZpY2UsIEdlb1BvaW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zJDogYW55O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBsb2NhdGlvbnNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgZGVmYXVsdExvY2F0aW9uOiBHZW9Qb2ludDtcbiAgY291bnRyeTogc3RyaW5nO1xuICByZWdpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcygpO1xuXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnkpIHtcbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICAgICcnLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VTaXplOiAtMSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2aWV3U3RvcmUobG9jYXRpb246IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5yZWdpb24pIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICAgIFsncmVnaW9uJywgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVnaW9uLCBsb2NhdGlvbi5uYW1lXSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbJ3JlZ2lvbicsICcnLCBsb2NhdGlvbi5uYW1lXSwgdW5kZWZpbmVkLCB7XG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuIl19
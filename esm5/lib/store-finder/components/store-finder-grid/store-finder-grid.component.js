/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService } from '@spartacus/core';
import { RoutingService } from '@spartacus/core';
var StoreFinderGridComponent = /** @class */ (function () {
    function StoreFinderGridComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    StoreFinderGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', this.defaultLocation, {
                pageSize: -1,
            }, this.route.snapshot.params.country);
        }
    };
    /**
     * @param {?} location
     * @return {?}
     */
    StoreFinderGridComponent.prototype.viewStore = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        if (this.route.snapshot.params.region) {
            this.routingService.go(['region', this.route.snapshot.params.region, location.name], undefined, { relativeTo: this.route });
            return;
        }
        this.routingService.go(['region', '', location.name], undefined, {
            relativeTo: this.route,
        });
    };
    /**
     * @return {?}
     */
    StoreFinderGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    StoreFinderGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-grid',
                    template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-md-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderGridComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    return StoreFinderGridComponent;
}());
export { StoreFinderGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1ncmlkL3N0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQ7SUFZRSxrQ0FDVSxrQkFBc0MsRUFDdEMsS0FBcUIsRUFDckIsY0FBOEI7UUFGOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxFQUFFLEVBQ0YsSUFBSSxDQUFDLGVBQWUsRUFDcEI7Z0JBQ0UsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNiLEVBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDbkMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsUUFBYTtRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM1RCxTQUFTLEVBQ1QsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUMzQixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUU7WUFDL0QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVgsY0FBZSxDQUFDOztnQkFoRGpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3bEJBQWlEO2lCQUNsRDs7OztnQkFMUSxrQkFBa0I7Z0JBSGxCLGNBQWM7Z0JBSWQsY0FBYzs7SUFrRHZCLCtCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E3Q1ksd0JBQXdCOzs7SUFDbkMsOENBQWdCOztJQUNoQiw4Q0FBZ0M7O0lBQ2hDLGdEQUEyQjs7SUFDM0IsbURBQW1DOztJQUNuQywyQ0FBZ0I7O0lBQ2hCLDBDQUFlOzs7OztJQUdiLHNEQUE4Qzs7Ozs7SUFDOUMseUNBQTZCOzs7OztJQUM3QixrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlLCBMb25naXR1ZGVMYXRpdHVkZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zJDogYW55O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBsb2NhdGlvbnNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgZGVmYXVsdExvY2F0aW9uOiBMb25naXR1ZGVMYXRpdHVkZTtcbiAgY291bnRyeTogc3RyaW5nO1xuICByZWdpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNFbnRpdGllcygpO1xuXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnkpIHtcbiAgICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICAgICcnLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VTaXplOiAtMSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2aWV3U3RvcmUobG9jYXRpb246IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5yZWdpb24pIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oXG4gICAgICAgIFsncmVnaW9uJywgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVnaW9uLCBsb2NhdGlvbi5uYW1lXSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbJ3JlZ2lvbicsICcnLCBsb2NhdGlvbi5uYW1lXSwgdW5kZWZpbmVkLCB7XG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuIl19
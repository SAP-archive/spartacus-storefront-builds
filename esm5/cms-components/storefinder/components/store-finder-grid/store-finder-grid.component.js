/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService, StoreFinderService } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFHL0U7SUFZRSxrQ0FDVSxrQkFBc0MsRUFDdEMsS0FBcUIsRUFDckIsY0FBOEI7UUFGOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxFQUFFLEVBQ0YsSUFBSSxDQUFDLGVBQWUsRUFDcEI7Z0JBQ0UsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNiLEVBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDbkMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsUUFBYTtRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3BCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM1RCxTQUFTLEVBQ1QsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUMzQixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUU7WUFDL0QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVgsY0FBZSxDQUFDOztnQkFoRGpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3bEJBQWlEO2lCQUNsRDs7OztnQkFOd0Isa0JBQWtCO2dCQURsQyxjQUFjO2dCQUNkLGNBQWM7O0lBb0R2QiwrQkFBQztDQUFBLEFBakRELElBaURDO1NBN0NZLHdCQUF3Qjs7O0lBQ25DLDhDQUFnQjs7SUFDaEIsOENBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLG1EQUEwQjs7SUFDMUIsMkNBQWdCOztJQUNoQiwwQ0FBZTs7Ozs7SUFHYixzREFBOEM7Ozs7O0lBQzlDLHlDQUE2Qjs7Ozs7SUFDN0Isa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFN0b3JlRmluZGVyU2VydmljZSwgR2VvUG9pbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsb2NhdGlvbnMkOiBhbnk7XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGxvY2F0aW9uc1N1YjogU3Vic2NyaXB0aW9uO1xuICBkZWZhdWx0TG9jYXRpb246IEdlb1BvaW50O1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2NhdGlvbnMkID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk7XG5cbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeSkge1xuICAgICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgICAgJycsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2F0aW9uLFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVNpemU6IC0xLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdTdG9yZShsb2NhdGlvbjogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlZ2lvbikge1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhcbiAgICAgICAgWydyZWdpb24nLCB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5yZWdpb24sIGxvY2F0aW9uLm5hbWVdLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9XG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsncmVnaW9uJywgJycsIGxvY2F0aW9uLm5hbWVdLCB1bmRlZmluZWQsIHtcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG59XG4iXX0=
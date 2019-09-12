/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
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
        this.routingService.go([this.prepareRouteUrl(location)]);
    };
    /**
     * @param {?} location
     * @return {?}
     */
    StoreFinderGridComponent.prototype.prepareRouteUrl = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        /** @type {?} */
        var countryParam = this.route.snapshot.params.country
            ? "country/" + this.route.snapshot.params.country + "/"
            : '';
        /** @type {?} */
        var regionParam = this.route.snapshot.params.region
            ? "region/" + this.route.snapshot.params.region + "/"
            : '';
        return "store-finder/" + countryParam + regionParam + location.name;
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
                    template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFHL0U7SUFXRSxrQ0FDVSxrQkFBc0MsRUFDdEMsS0FBcUIsRUFDckIsY0FBOEI7UUFGOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxFQUFFLEVBQ0Y7Z0JBQ0UsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNiLEVBQ0QsU0FBUyxFQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ25DLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVM7Ozs7SUFBVCxVQUFVLFFBQWE7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELGtEQUFlOzs7O0lBQWYsVUFBZ0IsUUFBYTs7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ3JELENBQUMsQ0FBQyxhQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLE1BQUc7WUFDbEQsQ0FBQyxDQUFDLEVBQUU7O1lBQ0EsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ25ELENBQUMsQ0FBQyxZQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLE1BQUc7WUFDaEQsQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLGtCQUFnQixZQUFZLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFNLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWCxjQUFlLENBQUM7O2dCQWhEakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDBtQkFBaUQ7aUJBQ2xEOzs7O2dCQU53QixrQkFBa0I7Z0JBRGxDLGNBQWM7Z0JBQ2QsY0FBYzs7SUFvRHZCLCtCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E3Q1ksd0JBQXdCOzs7SUFDbkMsOENBQWdCOztJQUNoQiw4Q0FBZ0M7O0lBQ2hDLG1EQUEwQjs7SUFDMUIsMkNBQWdCOztJQUNoQiwwQ0FBZTs7Ozs7SUFHYixzREFBOEM7Ozs7O0lBQzlDLHlDQUE2Qjs7Ozs7SUFDN0Isa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFN0b3JlRmluZGVyU2VydmljZSwgR2VvUG9pbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zJDogYW55O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBkZWZhdWx0TG9jYXRpb246IEdlb1BvaW50O1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFZpZXdBbGxTdG9yZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2NhdGlvbnMkID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzKCk7XG4gICAgdGhpcy5kZWZhdWx0TG9jYXRpb24gPSB7fTtcblxuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5KSB7XG4gICAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5maW5kU3RvcmVzQWN0aW9uKFxuICAgICAgICAnJyxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VTaXplOiAtMSxcbiAgICAgICAgfSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdTdG9yZShsb2NhdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbdGhpcy5wcmVwYXJlUm91dGVVcmwobG9jYXRpb24pXSk7XG4gIH1cblxuICBwcmVwYXJlUm91dGVVcmwobG9jYXRpb246IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgY291bnRyeVBhcmFtID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY291bnRyeVxuICAgICAgPyBgY291bnRyeS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnl9L2BcbiAgICAgIDogJyc7XG4gICAgY29uc3QgcmVnaW9uUGFyYW0gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5yZWdpb25cbiAgICAgID8gYHJlZ2lvbi8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlZ2lvbn0vYFxuICAgICAgOiAnJztcbiAgICByZXR1cm4gYHN0b3JlLWZpbmRlci8ke2NvdW50cnlQYXJhbX0ke3JlZ2lvblBhcmFtfSR7bG9jYXRpb24ubmFtZX1gO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuIl19
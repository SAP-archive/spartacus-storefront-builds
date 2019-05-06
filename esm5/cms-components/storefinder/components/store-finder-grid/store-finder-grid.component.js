/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService, StoreFinderService, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBR3pCO0lBWUUsa0NBQ1Usa0JBQXNDLEVBQ3RDLEtBQXFCLEVBQ3JCLGNBQThCO1FBRjlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSiwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFckUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDdEMsRUFBRSxFQUNGLElBQUksQ0FBQyxlQUFlLEVBQ3BCO2dCQUNFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDYixFQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ25DLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVM7Ozs7SUFBVCxVQUFVLFFBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUNwQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDNUQsU0FBUyxFQUNULEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FDM0IsQ0FBQztZQUNGLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFO1lBQy9ELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYLGNBQWUsQ0FBQzs7Z0JBaERqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsd2xCQUFpRDtpQkFDbEQ7Ozs7Z0JBUEMsa0JBQWtCO2dCQUpYLGNBQWM7Z0JBR3JCLGNBQWM7O0lBc0RoQiwrQkFBQztDQUFBLEFBakRELElBaURDO1NBN0NZLHdCQUF3Qjs7O0lBQ25DLDhDQUFnQjs7SUFDaEIsOENBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLG1EQUFtQzs7SUFDbkMsMkNBQWdCOztJQUNoQiwwQ0FBZTs7Ozs7SUFHYixzREFBOEM7Ozs7O0lBQzlDLHlDQUE2Qjs7Ozs7SUFDN0Isa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgTG9uZ2l0dWRlTGF0aXR1ZGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTdG9yZUZpbmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGxvY2F0aW9ucyQ6IGFueTtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbG9jYXRpb25zU3ViOiBTdWJzY3JpcHRpb247XG4gIGRlZmF1bHRMb2NhdGlvbjogTG9uZ2l0dWRlTGF0aXR1ZGU7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRWaWV3QWxsU3RvcmVzRW50aXRpZXMoKTtcblxuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5jb3VudHJ5KSB7XG4gICAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5maW5kU3RvcmVzQWN0aW9uKFxuICAgICAgICAnJyxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlU2l6ZTogLTEsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlld1N0b3JlKGxvY2F0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVnaW9uKSB7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFxuICAgICAgICBbJ3JlZ2lvbicsIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlZ2lvbiwgbG9jYXRpb24ubmFtZV0sXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH1cbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oWydyZWdpb24nLCAnJywgbG9jYXRpb24ubmFtZV0sIHVuZGVmaW5lZCwge1xuICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge31cbn1cbiJdfQ==
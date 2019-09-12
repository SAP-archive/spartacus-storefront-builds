/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { StoreFinderService, RoutingService, } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { ICON_TYPE } from '../../../misc/icon';
var StoreFinderStoreComponent = /** @class */ (function () {
    function StoreFinderStoreComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    StoreFinderStoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    };
    /**
     * @return {?}
     */
    StoreFinderStoreComponent.prototype.requestStoresData = /**
     * @return {?}
     */
    function () {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    };
    /**
     * @return {?}
     */
    StoreFinderStoreComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        this.routingService.go([
            "store-finder/country/" + this.route.snapshot.params.country,
        ]);
    };
    StoreFinderStoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-store',
                    template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoreComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    StoreFinderStoreComponent.propDecorators = {
        location: [{ type: Input }],
        disableMap: [{ type: Input }]
    };
    return StoreFinderStoreComponent;
}());
export { StoreFinderStoreComponent };
if (false) {
    /** @type {?} */
    StoreFinderStoreComponent.prototype.location$;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.iconTypes;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.location;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.disableMap;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlL3N0b3JlLWZpbmRlci1zdG9yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxrQkFBa0IsRUFFbEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQztJQVlFLG1DQUNVLGtCQUFzQyxFQUN0QyxLQUFxQixFQUNyQixjQUE4QjtRQUY5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJ4QyxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBU25CLENBQUM7Ozs7SUFFSiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7O0lBRUQscURBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsMENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7WUFDckIsMEJBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFTO1NBQzdELENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsOHlCQUFrRDtpQkFDbkQ7Ozs7Z0JBWEMsa0JBQWtCO2dCQUtYLGNBQWM7Z0JBSHJCLGNBQWM7OzsyQkFlYixLQUFLOzZCQUNMLEtBQUs7O0lBeUJSLGdDQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0EvQlkseUJBQXlCOzs7SUFDcEMsOENBQTJCOztJQUMzQiwrQ0FBNEI7O0lBQzVCLDhDQUFzQjs7SUFFdEIsNkNBQWtDOztJQUNsQywrQ0FBNkI7Ozs7O0lBRzNCLHVEQUE4Qzs7Ozs7SUFDOUMsMENBQTZCOzs7OztJQUM3QixtREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFN0b3JlRmluZGVyU2VydmljZSxcbiAgUG9pbnRPZlNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXN0b3JlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zdG9yZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2NhdGlvbiQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgQElucHV0KCkgbG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlO1xuICBASW5wdXQoKSBkaXNhYmxlTWFwOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5sb2NhdGlvbikge1xuICAgICAgdGhpcy5yZXF1ZXN0U3RvcmVzRGF0YSgpO1xuICAgICAgdGhpcy5sb2NhdGlvbiQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRGaW5kU3RvcmVzRW50aXRpZXMoKTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0U3RvcmVzRGF0YSgpIHtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS52aWV3U3RvcmVCeUlkKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnN0b3JlKTtcbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFtcbiAgICAgIGBzdG9yZS1maW5kZXIvY291bnRyeS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmNvdW50cnl9YCxcbiAgICBdKTtcbiAgfVxufVxuIl19
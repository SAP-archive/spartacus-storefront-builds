/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService, } from '@spartacus/core';
var StoreFinderSearchResultComponent = /** @class */ (function () {
    function StoreFinderSearchResultComponent(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    /**
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            return _this.initialize(params);
        }));
    };
    /**
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.viewPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.searchConfig = tslib_1.__assign({}, this.searchConfig, { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.initialize = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = tslib_1.__assign({}, this.searchConfig, { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    };
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.parseParameters = /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        /** @type {?} */
        var searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    };
    StoreFinderSearchResultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-search-result',
                    template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderSearchResultComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute }
    ]; };
    return StoreFinderSearchResultComponent;
}());
export { StoreFinderSearchResultComponent };
if (false) {
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.locations;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.searchQuery;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.geolocation;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.subscription;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.useMyLocation;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.countryCode;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.searchConfig;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchResultComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchResultComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUlMLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBR3pCO0lBaUJFLDBDQUNVLGtCQUFzQyxFQUN0QyxLQUFxQjtRQURyQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUC9CLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGlCQUFZLEdBQWlCO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUtDLENBQUM7Ozs7SUFFSixtREFBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUN6RCxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQXZCLENBQXVCLEVBQ3hCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsc0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUVELG1EQUFROzs7O0lBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsWUFBWSx3QkFBUSxJQUFJLENBQUMsWUFBWSxJQUFFLFdBQVcsRUFBRSxVQUFVLEdBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8scURBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLHdCQUFRLElBQUksQ0FBQyxZQUFZLElBQUUsV0FBVyxFQUFFLENBQUMsR0FBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQzFCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRU8sMERBQWU7Ozs7O0lBQXZCLFVBQXdCLFdBRXZCOztZQUNLLFdBQW1DO1FBRXZDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNyQixXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDakM7UUFFRCxXQUFXLENBQUMsYUFBYTtZQUN2QixXQUFXLENBQUMsYUFBYSxJQUFJLElBQUk7Z0JBQ2pDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1FBRXJELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsazJCQUEwRDtpQkFDM0Q7Ozs7Z0JBUEMsa0JBQWtCO2dCQUxYLGNBQWM7O0lBdUZ2Qix1Q0FBQztDQUFBLEFBOUVELElBOEVDO1NBMUVZLGdDQUFnQzs7O0lBQzNDLHFEQUFlOztJQUNmLHVEQUFvQzs7SUFDcEMsc0RBQTRCOztJQUM1QixzREFBNEI7O0lBQzVCLHVEQUFzQjs7SUFDdEIsd0RBQTJCOztJQUMzQix5REFBdUI7O0lBQ3ZCLHVEQUEyQjs7SUFDM0Isd0RBRUU7Ozs7O0lBR0EsOERBQThDOzs7OztJQUM5QyxpREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEdlb1BvaW50LFxuICBTZWFyY2hDb25maWcsXG4gIFN0b3JlRmluZGVyU2VhcmNoUXVlcnksXG4gIFN0b3JlRmluZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsb2NhdGlvbnM6IGFueTtcbiAgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG4gIGxvY2F0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBnZW9sb2NhdGlvbjogR2VvUG9pbnQ7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICB1c2VNeUxvY2F0aW9uOiBib29sZWFuO1xuICBjb3VudHJ5Q29kZTogc3RyaW5nID0gbnVsbDtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZShwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHsgLi4udGhpcy5zZWFyY2hDb25maWcsIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH07XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5zZWFyY2hDb25maWcsXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLFxuICAgICAgdGhpcy5jb3VudHJ5Q29kZSxcbiAgICAgIHRoaXMudXNlTXlMb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUocGFyYW1zOiBQYXJhbXMpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gdGhpcy5wYXJzZVBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICB0aGlzLnVzZU15TG9jYXRpb24gPSBwYXJhbXMgJiYgcGFyYW1zLnVzZU15TG9jYXRpb24gPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogMCB9O1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuY291bnRyeUNvZGUsXG4gICAgICB0aGlzLnVzZU15TG9jYXRpb25cbiAgICApO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0U3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtZXRlcnMocXVlcnlQYXJhbXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5IHtcbiAgICBsZXQgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG5cbiAgICBpZiAocXVlcnlQYXJhbXMucXVlcnkpIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6ICcnIH07XG4gICAgfVxuXG4gICAgc2VhcmNoUXVlcnkudXNlTXlMb2NhdGlvbiA9XG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uICE9IG51bGwgJiZcbiAgICAgIHF1ZXJ5UGFyYW1zLnVzZU15TG9jYXRpb24udG9VcHBlckNhc2UoKSA9PT0gJ1RSVUUnO1xuXG4gICAgcmV0dXJuIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
var StoreFinderSearchResultComponent = /** @class */ (function () {
    function StoreFinderSearchResultComponent(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
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
        this.route.queryParams.subscribe(function (params) { return _this.initialize(params); });
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
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
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
        var _this = this;
        this.searchQuery = this.parseParameters(params);
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
        this.subscription = this.locations$
            .pipe(filter(Boolean), map(function (data) { return data.geolocation; }))
            .subscribe(function (geoData) { return (_this.geolocation = geoData); });
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
                    template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <cx-store-finder-list [locations]=\"locations\"></cx-store-finder-list>\n  <div *ngIf=\"locations?.stores\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUlMLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFlRSwwQ0FDVSxrQkFBc0MsRUFDdEMsS0FBcUI7UUFEckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQU4vQixpQkFBWSxHQUFpQjtZQUMzQixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUM7SUFLQyxDQUFDOzs7O0lBRUosbURBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELHNEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtREFBUTs7OztJQUFSLFVBQVMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksd0JBQVEsSUFBSSxDQUFDLFlBQVksSUFBRSxXQUFXLEVBQUUsVUFBVSxHQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHFEQUFVOzs7OztJQUFsQixVQUFtQixNQUFjO1FBQWpDLGlCQWdCQztRQWZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDaEMsSUFBSSxDQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixDQUFnQixDQUFDLENBQzlCO2FBQ0EsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRU8sMERBQWU7Ozs7O0lBQXZCLFVBQXdCLFdBRXZCOztZQUNLLFdBQW1DO1FBRXZDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNyQixXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDakM7UUFFRCxXQUFXLENBQUMsYUFBYTtZQUN2QixXQUFXLENBQUMsYUFBYSxJQUFJLElBQUk7Z0JBQ2pDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1FBRXJELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsc2lCQUEwRDtpQkFDM0Q7Ozs7Z0JBUkMsa0JBQWtCO2dCQUxYLGNBQWM7O0lBb0Z2Qix1Q0FBQztDQUFBLEFBMUVELElBMEVDO1NBdEVZLGdDQUFnQzs7O0lBQzNDLHFEQUFlOztJQUNmLHVEQUFvQzs7SUFDcEMsc0RBQTRCOztJQUM1QixzREFBNEI7O0lBQzVCLHVEQUErQjs7SUFDL0Isd0RBQTJCOztJQUMzQix3REFFRTs7Ozs7SUFHQSw4REFBOEM7Ozs7O0lBQzlDLGlEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgTG9uZ2l0dWRlTGF0aXR1ZGUsXG4gIFNlYXJjaENvbmZpZyxcbiAgU3RvcmVGaW5kZXJTZWFyY2hRdWVyeSxcbiAgU3RvcmVGaW5kZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zOiBhbnk7XG4gIHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuICBsb2NhdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgZ2VvbG9jYXRpb246IExvbmdpdHVkZUxhdGl0dWRlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaW5pdGlhbGl6ZShwYXJhbXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHsgLi4udGhpcy5zZWFyY2hDb25maWcsIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH07XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZShwYXJhbXM6IFBhcmFtcykge1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSB0aGlzLnBhcnNlUGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb24sXG4gICAgICB0aGlzLnNlYXJjaENvbmZpZ1xuICAgICk7XG5cbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRTdG9yZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2NhdGlvbnMkID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmxvY2F0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIG1hcChkYXRhID0+IGRhdGEuZ2VvbG9jYXRpb24pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGdlb0RhdGEgPT4gKHRoaXMuZ2VvbG9jYXRpb24gPSBnZW9EYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlUGFyYW1ldGVycyhxdWVyeVBhcmFtczoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnkge1xuICAgIGxldCBzZWFyY2hRdWVyeTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeTtcblxuICAgIGlmIChxdWVyeVBhcmFtcy5xdWVyeSkge1xuICAgICAgc2VhcmNoUXVlcnkgPSB7IHF1ZXJ5VGV4dDogcXVlcnlQYXJhbXMucXVlcnkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoUXVlcnkgPSB7IHF1ZXJ5VGV4dDogJycgfTtcbiAgICB9XG5cbiAgICBzZWFyY2hRdWVyeS51c2VNeUxvY2F0aW9uID1cbiAgICAgIHF1ZXJ5UGFyYW1zLnVzZU15TG9jYXRpb24gIT0gbnVsbCAmJlxuICAgICAgcXVlcnlQYXJhbXMudXNlTXlMb2NhdGlvbi50b1VwcGVyQ2FzZSgpID09PSAnVFJVRSc7XG5cbiAgICByZXR1cm4gc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiJdfQ==
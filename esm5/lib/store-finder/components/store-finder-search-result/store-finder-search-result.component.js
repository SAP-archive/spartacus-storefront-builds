/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { StoreFinderService, } from '@spartacus/core';
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
            .pipe(map(function (data) { return data.geolocation; }))
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
                    template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <cx-store-finder-list [locations]=\"locations\"></cx-store-finder-list>\n  <div *ngIf=\"locations?.stores\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-pagination{margin:var(--cx-margin,2rem auto);justify-content:var(--cx-justify-content,center);display:var(--cx-display,flex)}.cx-spinner{padding:var(--cx-padding,2rem 0)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0L3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUNMLGtCQUFrQixHQUluQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBZ0JFLDBDQUNVLGtCQUFzQyxFQUN0QyxLQUFxQjtRQURyQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTi9CLGlCQUFZLEdBQWlCO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUtDLENBQUM7Ozs7SUFFSixtREFBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsc0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUVELG1EQUFROzs7O0lBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsWUFBWSx3QkFBUSxJQUFJLENBQUMsWUFBWSxJQUFFLFdBQVcsRUFBRSxVQUFVLEdBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8scURBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQWM7UUFBakMsaUJBYUM7UUFaQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVO2FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixDQUFnQixDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRU8sMERBQWU7Ozs7O0lBQXZCLFVBQXdCLFdBRXZCOztZQUNLLFdBQW1DO1FBRXZDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNyQixXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxXQUFXLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDakM7UUFFRCxXQUFXLENBQUMsYUFBYTtZQUN2QixXQUFXLENBQUMsYUFBYSxJQUFJLElBQUk7Z0JBQ2pDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1FBRXJELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsc2lCQUEwRDs7aUJBRTNEOzs7O2dCQVZDLGtCQUFrQjtnQkFOWCxjQUFjOztJQW9GdkIsdUNBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQW5FWSxnQ0FBZ0M7OztJQUMzQyxxREFBZTs7SUFDZix1REFBb0M7O0lBQ3BDLHNEQUE0Qjs7SUFDNUIsc0RBQTRCOztJQUM1Qix1REFBK0I7O0lBQy9CLHdEQUEyQjs7SUFDM0Isd0RBRUU7Ozs7O0lBR0EsOERBQThDOzs7OztJQUM5QyxpREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFN0b3JlRmluZGVyU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxuICBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5LFxuICBMb25naXR1ZGVMYXRpdHVkZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zOiBhbnk7XG4gIHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuICBsb2NhdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgZ2VvbG9jYXRpb246IExvbmdpdHVkZUxhdGl0dWRlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaW5pdGlhbGl6ZShwYXJhbXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHsgLi4udGhpcy5zZWFyY2hDb25maWcsIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH07XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZShwYXJhbXM6IFBhcmFtcykge1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSB0aGlzLnBhcnNlUGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb24sXG4gICAgICB0aGlzLnNlYXJjaENvbmZpZ1xuICAgICk7XG5cbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRTdG9yZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2NhdGlvbnMkID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmxvY2F0aW9ucyRcbiAgICAgIC5waXBlKG1hcChkYXRhID0+IGRhdGEuZ2VvbG9jYXRpb24pKVxuICAgICAgLnN1YnNjcmliZShnZW9EYXRhID0+ICh0aGlzLmdlb2xvY2F0aW9uID0gZ2VvRGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtZXRlcnMocXVlcnlQYXJhbXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5IHtcbiAgICBsZXQgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG5cbiAgICBpZiAocXVlcnlQYXJhbXMucXVlcnkpIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6ICcnIH07XG4gICAgfVxuXG4gICAgc2VhcmNoUXVlcnkudXNlTXlMb2NhdGlvbiA9XG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uICE9IG51bGwgJiZcbiAgICAgIHF1ZXJ5UGFyYW1zLnVzZU15TG9jYXRpb24udG9VcHBlckNhc2UoKSA9PT0gJ1RSVUUnO1xuXG4gICAgcmV0dXJuIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iXX0=
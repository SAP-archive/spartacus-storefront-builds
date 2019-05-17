/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
export class StoreFinderSearchResultComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     */
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.route.queryParams.subscribe(params => this.initialize(params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.searchConfig = Object.assign({}, this.searchConfig, { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
        this.subscription = this.locations$
            .pipe(filter(Boolean), map(data => data.longitudeLatitude))
            .subscribe(geoData => (this.geolocation = geoData));
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    parseParameters(queryParams) {
        /** @type {?} */
        let searchQuery;
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
    }
}
StoreFinderSearchResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search-result',
                template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <cx-store-finder-list [locations]=\"locations\"></cx-store-finder-list>\n  <div *ngIf=\"locations?.stores\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBR0wsa0JBQWtCLEdBRW5CLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03QyxNQUFNLE9BQU8sZ0NBQWdDOzs7OztJQVczQyxZQUNVLGtCQUFzQyxFQUN0QyxLQUFxQjtRQURyQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTi9CLGlCQUFZLEdBQWlCO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUtDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQjtRQUN6QixJQUFJLENBQUMsWUFBWSxxQkFBUSxJQUFJLENBQUMsWUFBWSxJQUFFLFdBQVcsRUFBRSxVQUFVLEdBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQzFCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVTthQUNoQyxJQUFJLENBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUNwQzthQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxXQUV2Qjs7WUFDSyxXQUFtQztRQUV2QyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsV0FBVyxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoRDthQUFNO1lBQ0wsV0FBVyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsV0FBVyxDQUFDLGFBQWE7WUFDdkIsV0FBVyxDQUFDLGFBQWEsSUFBSSxJQUFJO2dCQUNqQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztRQUVyRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHNpQkFBMEQ7YUFDM0Q7Ozs7WUFUQyxrQkFBa0I7WUFKWCxjQUFjOzs7O0lBZXJCLHFEQUFlOztJQUNmLHVEQUFvQzs7SUFDcEMsc0RBQTRCOztJQUM1QixzREFBNEI7O0lBQzVCLHVEQUFzQjs7SUFDdEIsd0RBQTJCOztJQUMzQix3REFFRTs7Ozs7SUFHQSw4REFBOEM7Ozs7O0lBQzlDLGlEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgU2VhcmNoQ29uZmlnLFxuICBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5LFxuICBTdG9yZUZpbmRlclNlcnZpY2UsXG4gIEdlb1BvaW50LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbG9jYXRpb25zOiBhbnk7XG4gIHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuICBsb2NhdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgZ2VvbG9jYXRpb246IEdlb1BvaW50O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7XG4gICAgY3VycmVudFBhZ2U6IDAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaW5pdGlhbGl6ZShwYXJhbXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHsgLi4udGhpcy5zZWFyY2hDb25maWcsIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH07XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZShwYXJhbXM6IFBhcmFtcykge1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSB0aGlzLnBhcnNlUGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb24sXG4gICAgICB0aGlzLnNlYXJjaENvbmZpZ1xuICAgICk7XG5cbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRTdG9yZXNMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2NhdGlvbnMkID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0RmluZFN0b3Jlc0VudGl0aWVzKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmxvY2F0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIG1hcChkYXRhID0+IGRhdGEubG9uZ2l0dWRlTGF0aXR1ZGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGdlb0RhdGEgPT4gKHRoaXMuZ2VvbG9jYXRpb24gPSBnZW9EYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlUGFyYW1ldGVycyhxdWVyeVBhcmFtczoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnkge1xuICAgIGxldCBzZWFyY2hRdWVyeTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeTtcblxuICAgIGlmIChxdWVyeVBhcmFtcy5xdWVyeSkge1xuICAgICAgc2VhcmNoUXVlcnkgPSB7IHF1ZXJ5VGV4dDogcXVlcnlQYXJhbXMucXVlcnkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoUXVlcnkgPSB7IHF1ZXJ5VGV4dDogJycgfTtcbiAgICB9XG5cbiAgICBzZWFyY2hRdWVyeS51c2VNeUxvY2F0aW9uID1cbiAgICAgIHF1ZXJ5UGFyYW1zLnVzZU15TG9jYXRpb24gIT0gbnVsbCAmJlxuICAgICAgcXVlcnlQYXJhbXMudXNlTXlMb2NhdGlvbi50b1VwcGVyQ2FzZSgpID09PSAnVFJVRSc7XG5cbiAgICByZXR1cm4gc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiJdfQ==
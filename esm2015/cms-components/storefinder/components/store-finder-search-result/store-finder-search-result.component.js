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
            .pipe(filter(Boolean), map(data => data.geolocation))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBSUwsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03QyxNQUFNLE9BQU8sZ0NBQWdDOzs7OztJQVczQyxZQUNVLGtCQUFzQyxFQUN0QyxLQUFxQjtRQURyQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTi9CLGlCQUFZLEdBQWlCO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUtDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQjtRQUN6QixJQUFJLENBQUMsWUFBWSxxQkFBUSxJQUFJLENBQUMsWUFBWSxJQUFFLFdBQVcsRUFBRSxVQUFVLEdBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQzFCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVTthQUNoQyxJQUFJLENBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDOUI7YUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsV0FFdkI7O1lBQ0ssV0FBbUM7UUFFdkMsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3JCLFdBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNqQztRQUVELFdBQVcsQ0FBQyxhQUFhO1lBQ3ZCLFdBQVcsQ0FBQyxhQUFhLElBQUksSUFBSTtnQkFDakMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUM7UUFFckQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxzaUJBQTBEO2FBQzNEOzs7O1lBUkMsa0JBQWtCO1lBTFgsY0FBYzs7OztJQWVyQixxREFBZTs7SUFDZix1REFBb0M7O0lBQ3BDLHNEQUE0Qjs7SUFDNUIsc0RBQTRCOztJQUM1Qix1REFBK0I7O0lBQy9CLHdEQUEyQjs7SUFDM0Isd0RBRUU7Ozs7O0lBR0EsOERBQThDOzs7OztJQUM5QyxpREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIExvbmdpdHVkZUxhdGl0dWRlLFxuICBTZWFyY2hDb25maWcsXG4gIFN0b3JlRmluZGVyU2VhcmNoUXVlcnksXG4gIFN0b3JlRmluZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGxvY2F0aW9uczogYW55O1xuICBzZWFyY2hRdWVyeTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeTtcbiAgbG9jYXRpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGFueT47XG4gIGdlb2xvY2F0aW9uOiBMb25naXR1ZGVMYXRpdHVkZTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0ge1xuICAgIGN1cnJlbnRQYWdlOiAwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmluaXRpYWxpemUocGFyYW1zKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9O1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb24sXG4gICAgICB0aGlzLnNlYXJjaENvbmZpZ1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUocGFyYW1zOiBQYXJhbXMpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gdGhpcy5wYXJzZVBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5maW5kU3RvcmVzQWN0aW9uKFxuICAgICAgdGhpcy5zZWFyY2hRdWVyeS5xdWVyeVRleHQsXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLFxuICAgICAgdGhpcy5zZWFyY2hDb25maWdcbiAgICApO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0U3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5sb2NhdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICBtYXAoZGF0YSA9PiBkYXRhLmdlb2xvY2F0aW9uKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShnZW9EYXRhID0+ICh0aGlzLmdlb2xvY2F0aW9uID0gZ2VvRGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtZXRlcnMocXVlcnlQYXJhbXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5IHtcbiAgICBsZXQgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG5cbiAgICBpZiAocXVlcnlQYXJhbXMucXVlcnkpIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaFF1ZXJ5ID0geyBxdWVyeVRleHQ6ICcnIH07XG4gICAgfVxuXG4gICAgc2VhcmNoUXVlcnkudXNlTXlMb2NhdGlvbiA9XG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uICE9IG51bGwgJiZcbiAgICAgIHF1ZXJ5UGFyYW1zLnVzZU15TG9jYXRpb24udG9VcHBlckNhc2UoKSA9PT0gJ1RSVUUnO1xuXG4gICAgcmV0dXJuIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iXX0=
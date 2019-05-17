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
            .pipe(filter(Boolean), map(function (data) { return data.longitudeLatitude; }))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUdMLGtCQUFrQixHQUVuQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFlRSwwQ0FDVSxrQkFBc0MsRUFDdEMsS0FBcUI7UUFEckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQU4vQixpQkFBWSxHQUFpQjtZQUMzQixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUM7SUFLQyxDQUFDOzs7O0lBRUosbURBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELHNEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtREFBUTs7OztJQUFSLFVBQVMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksd0JBQVEsSUFBSSxDQUFDLFlBQVksSUFBRSxXQUFXLEVBQUUsVUFBVSxHQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHFEQUFVOzs7OztJQUFsQixVQUFtQixNQUFjO1FBQWpDLGlCQWdCQztRQWZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDaEMsSUFBSSxDQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsaUJBQWlCLEVBQXRCLENBQXNCLENBQUMsQ0FDcEM7YUFDQSxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFTywwREFBZTs7Ozs7SUFBdkIsVUFBd0IsV0FFdkI7O1lBQ0ssV0FBbUM7UUFFdkMsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3JCLFdBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNqQztRQUVELFdBQVcsQ0FBQyxhQUFhO1lBQ3ZCLFdBQVcsQ0FBQyxhQUFhLElBQUksSUFBSTtnQkFDakMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUM7UUFFckQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxzaUJBQTBEO2lCQUMzRDs7OztnQkFUQyxrQkFBa0I7Z0JBSlgsY0FBYzs7SUFvRnZCLHVDQUFDO0NBQUEsQUExRUQsSUEwRUM7U0F0RVksZ0NBQWdDOzs7SUFDM0MscURBQWU7O0lBQ2YsdURBQW9DOztJQUNwQyxzREFBNEI7O0lBQzVCLHNEQUE0Qjs7SUFDNUIsdURBQXNCOztJQUN0Qix3REFBMkI7O0lBQzNCLHdEQUVFOzs7OztJQUdBLDhEQUE4Qzs7Ozs7SUFDOUMsaURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBTZWFyY2hDb25maWcsXG4gIFN0b3JlRmluZGVyU2VhcmNoUXVlcnksXG4gIFN0b3JlRmluZGVyU2VydmljZSxcbiAgR2VvUG9pbnQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBsb2NhdGlvbnM6IGFueTtcbiAgc2VhcmNoUXVlcnk6IFN0b3JlRmluZGVyU2VhcmNoUXVlcnk7XG4gIGxvY2F0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBnZW9sb2NhdGlvbjogR2VvUG9pbnQ7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyA9IHtcbiAgICBjdXJyZW50UGFnZTogMCxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy5pbml0aWFsaXplKHBhcmFtcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuc2VhcmNoQ29uZmlnID0geyAuLi50aGlzLnNlYXJjaENvbmZpZywgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIgfTtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5maW5kU3RvcmVzQWN0aW9uKFxuICAgICAgdGhpcy5zZWFyY2hRdWVyeS5xdWVyeVRleHQsXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLFxuICAgICAgdGhpcy5zZWFyY2hDb25maWdcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplKHBhcmFtczogUGFyYW1zKSB7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IHRoaXMucGFyc2VQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZmluZFN0b3Jlc0FjdGlvbihcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkucXVlcnlUZXh0LFxuICAgICAgdGhpcy5nZW9sb2NhdGlvbixcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnXG4gICAgKTtcblxuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFN0b3Jlc0xvYWRpbmcoKTtcbiAgICB0aGlzLmxvY2F0aW9ucyQgPSB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5nZXRGaW5kU3RvcmVzRW50aXRpZXMoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubG9jYXRpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgbWFwKGRhdGEgPT4gZGF0YS5sb25naXR1ZGVMYXRpdHVkZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZ2VvRGF0YSA9PiAodGhpcy5nZW9sb2NhdGlvbiA9IGdlb0RhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VQYXJhbWV0ZXJzKHF1ZXJ5UGFyYW1zOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeSB7XG4gICAgbGV0IHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiBxdWVyeVBhcmFtcy5xdWVyeSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiAnJyB9O1xuICAgIH1cblxuICAgIHNlYXJjaFF1ZXJ5LnVzZU15TG9jYXRpb24gPVxuICAgICAgcXVlcnlQYXJhbXMudXNlTXlMb2NhdGlvbiAhPSBudWxsICYmXG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uLnRvVXBwZXJDYXNlKCkgPT09ICdUUlVFJztcblxuICAgIHJldHVybiBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIl19
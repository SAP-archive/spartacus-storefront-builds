/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSearchService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
/**
 * @record
 */
function ProductListRouteParams() { }
if (false) {
    /** @type {?|undefined} */
    ProductListRouteParams.prototype.brandCode;
    /** @type {?|undefined} */
    ProductListRouteParams.prototype.categoryCode;
    /** @type {?|undefined} */
    ProductListRouteParams.prototype.query;
}
/**
 * @record
 */
function SearchCriteria() { }
if (false) {
    /** @type {?|undefined} */
    SearchCriteria.prototype.currentPage;
    /** @type {?|undefined} */
    SearchCriteria.prototype.pageSize;
    /** @type {?|undefined} */
    SearchCriteria.prototype.sortCode;
    /** @type {?|undefined} */
    SearchCriteria.prototype.query;
}
var ProductListComponentService = /** @class */ (function () {
    function ProductListComponentService(productSearchService, routing, activatedRoute, router) {
        var _this = this;
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.defaultPageSize = 10;
        this.RELEVANCE_CATEGORY = ':relevance:category:';
        this.RELEVANCE_BRAND = ':relevance:brand:';
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) { return Object.keys(searchResult).length > 0; })));
        this.searchByRouting$ = this.routing.getRouterState().pipe(distinctUntilChanged((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) {
            // router emits new value also when the anticipated `nextState` changes
            // but we want to perform search only when current url changes
            return x.state.url === y.state.url;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var state = _a.state;
            /** @type {?} */
            var criteria = _this.getCriteriaFromRoute(state.params, state.queryParams);
            _this.search(criteria);
        })));
        /**
         * This stream should be used only on the Product Listing Page.
         *
         * It not only emits search results, but also performs a search on every change
         * of the route (i.e. route params or query params).
         *
         * When a user leaves the PLP route, the PLP component unsubscribes from this stream
         * so no longer the search is performed on route change.
         */
        this.model$ = combineLatest(this.searchResults$, this.searchByRouting$).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), searchResults = _b[0];
            return searchResults;
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    ProductListComponentService.prototype.clearSearchResults = /**
     * @return {?}
     */
    function () {
        this.productSearchService.clearResults();
    };
    /**
     * @private
     * @param {?} routeParams
     * @param {?} queryParams
     * @return {?}
     */
    ProductListComponentService.prototype.getCriteriaFromRoute = /**
     * @private
     * @param {?} routeParams
     * @param {?} queryParams
     * @return {?}
     */
    function (routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    ProductListComponentService.prototype.getQueryFromRouteParams = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var brandCode = _a.brandCode, categoryCode = _a.categoryCode, query = _a.query;
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_CATEGORY + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_BRAND + brandCode;
        }
    };
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    ProductListComponentService.prototype.search = /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        /** @type {?} */
        var query = criteria.query;
        /** @type {?} */
        var searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    };
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    ProductListComponentService.prototype.getSearchConfig = /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        /** @type {?} */
        var result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !result[key] && delete result[key]; }));
        return result;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ProductListComponentService.prototype.setQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.setQueryParams({ query: query, currentPage: undefined });
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductListComponentService.prototype.viewPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    ProductListComponentService.prototype.sort = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        this.setQueryParams({ sortCode: sortCode });
    };
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    ProductListComponentService.prototype.setQueryParams = /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    };
    ProductListComponentService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ProductListComponentService.ctorParameters = function () { return [
        { type: ProductSearchService },
        { type: RoutingService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    /** @nocollapse */ ProductListComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
    return ProductListComponentService;
}());
export { ProductListComponentService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.defaultPageSize;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.sub;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.RELEVANCE_CATEGORY;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.RELEVANCE_BRAND;
    /**
     * @type {?}
     * @private
     */
    ProductListComponentService.prototype.searchResults$;
    /**
     * @type {?}
     * @private
     */
    ProductListComponentService.prototype.searchByRouting$;
    /**
     * This stream should be used only on the Product Listing Page.
     *
     * It not only emits search results, but also performs a search on every change
     * of the route (i.e. route params or query params).
     *
     * When a user leaves the PLP route, the PLP component unsubscribes from this stream
     * so no longer the search is performed on route change.
     * @type {?}
     */
    ProductListComponentService.prototype.model$;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.productSearchService;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.activatedRoute;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGNBQWMsR0FFZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxXQUFXLEVBQ1gsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFFeEIscUNBSUM7OztJQUhDLDJDQUFtQjs7SUFDbkIsOENBQXNCOztJQUN0Qix1Q0FBZTs7Ozs7QUFHakIsNkJBS0M7OztJQUpDLHFDQUFxQjs7SUFDckIsa0NBQWtCOztJQUNsQixrQ0FBa0I7O0lBQ2xCLCtCQUFlOztBQUdqQjtJQVNFLHFDQUNZLG9CQUEwQyxFQUMxQyxPQUF1QixFQUN2QixjQUE4QixFQUM5QixNQUFjO1FBSjFCLGlCQUtJO1FBSlEseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhoQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUlaLHVCQUFrQixHQUFHLHNCQUFzQixDQUFDO1FBQzVDLG9CQUFlLEdBQUcsbUJBQW1CLENBQUM7UUFT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RTs7Ozs7SUFFdEUsdURBZUU7Ozs7Ozs7Ozs7O0lBV0YsNkNBTUU7Ozs7O0lBNUNBLDJEQUFvRDs7Ozs7SUFDcEQsOENBQWlDOzs7OztJQUNqQyxxREFBd0M7Ozs7O0lBQ3hDLDZDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0Um91dGVQYXJhbXMge1xuICBicmFuZENvZGU/OiBzdHJpbmc7XG4gIGNhdGVnb3J5Q29kZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hDcml0ZXJpYSB7XG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgc29ydENvZGU/OiBzdHJpbmc7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB7XG4gIHByb3RlY3RlZCBkZWZhdWx0UGFnZVNpemUgPSAxMDtcblxuICBwcm90ZWN0ZWQgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9DQVRFR09SWSA9ICc6cmVsZXZhbmNlOmNhdGVnb3J5Oic7XG4gIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQlJBTkQgPSAnOnJlbGV2YW5jZTpicmFuZDonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBwcml2YXRlIHNlYXJjaFJlc3VsdHMkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlXG4gID4gPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgLmdldFJlc3VsdHMoKVxuICAgIC5waXBlKGZpbHRlcihzZWFyY2hSZXN1bHQgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKSk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hCeVJvdXRpbmckOiBPYnNlcnZhYmxlPFxuICAgIGFueVxuICA+ID0gdGhpcy5yb3V0aW5nLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgLy8gcm91dGVyIGVtaXRzIG5ldyB2YWx1ZSBhbHNvIHdoZW4gdGhlIGFudGljaXBhdGVkIGBuZXh0U3RhdGVgIGNoYW5nZXNcbiAgICAgIC8vIGJ1dCB3ZSB3YW50IHRvIHBlcmZvcm0gc2VhcmNoIG9ubHkgd2hlbiBjdXJyZW50IHVybCBjaGFuZ2VzXG4gICAgICByZXR1cm4geC5zdGF0ZS51cmwgPT09IHkuc3RhdGUudXJsO1xuICAgIH0pLFxuICAgIHRhcCgoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBjb25zdCBjcml0ZXJpYSA9IHRoaXMuZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgICAgIHN0YXRlLnBhcmFtcyxcbiAgICAgICAgc3RhdGUucXVlcnlQYXJhbXNcbiAgICAgICk7XG4gICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogVGhpcyBzdHJlYW0gc2hvdWxkIGJlIHVzZWQgb25seSBvbiB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gICAqXG4gICAqIEl0IG5vdCBvbmx5IGVtaXRzIHNlYXJjaCByZXN1bHRzLCBidXQgYWxzbyBwZXJmb3JtcyBhIHNlYXJjaCBvbiBldmVyeSBjaGFuZ2VcbiAgICogb2YgdGhlIHJvdXRlIChpLmUuIHJvdXRlIHBhcmFtcyBvciBxdWVyeSBwYXJhbXMpLlxuICAgKlxuICAgKiBXaGVuIGEgdXNlciBsZWF2ZXMgdGhlIFBMUCByb3V0ZSwgdGhlIFBMUCBjb21wb25lbnQgdW5zdWJzY3JpYmVzIGZyb20gdGhpcyBzdHJlYW1cbiAgICogc28gbm8gbG9uZ2VyIHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIG9uIHJvdXRlIGNoYW5nZS5cbiAgICovXG4gIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4gPSBjb21iaW5lTGF0ZXN0KFxuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyQsXG4gICAgdGhpcy5zZWFyY2hCeVJvdXRpbmckXG4gICkucGlwZShcbiAgICBtYXAoKFtzZWFyY2hSZXN1bHRzXSkgPT4gc2VhcmNoUmVzdWx0cyksXG4gICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICApO1xuXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICByb3V0ZVBhcmFtczogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyxcbiAgICBxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWFcbiAgKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeTogcXVlcnlQYXJhbXMucXVlcnkgfHwgdGhpcy5nZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyhyb3V0ZVBhcmFtcyksXG4gICAgICBwYWdlU2l6ZTogcXVlcnlQYXJhbXMucGFnZVNpemUgfHwgdGhpcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZTogcXVlcnlQYXJhbXMuY3VycmVudFBhZ2UsXG4gICAgICBzb3J0Q29kZTogcXVlcnlQYXJhbXMuc29ydENvZGUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMoe1xuICAgIGJyYW5kQ29kZSxcbiAgICBjYXRlZ29yeUNvZGUsXG4gICAgcXVlcnksXG4gIH06IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMpIHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gICAgaWYgKGNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0NBVEVHT1JZICsgY2F0ZWdvcnlDb2RlO1xuICAgIH1cbiAgICBpZiAoYnJhbmRDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQlJBTkQgKyBicmFuZENvZGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2goY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgY29uc3QgcXVlcnkgPSBjcml0ZXJpYS5xdWVyeTtcbiAgICBjb25zdCBzZWFyY2hDb25maWcgPSB0aGlzLmdldFNlYXJjaENvbmZpZyhjcml0ZXJpYSk7XG5cbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwgc2VhcmNoQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoQ29uZmlnKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0OiBTZWFyY2hDb25maWcgPSB7XG4gICAgICBjdXJyZW50UGFnZTogY3JpdGVyaWEuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogY3JpdGVyaWEucGFnZVNpemUsXG4gICAgICBzb3J0Q29kZTogY3JpdGVyaWEuc29ydENvZGUsXG4gICAgfTtcblxuICAgIC8vIGRyb3AgZW1wdHkga2V5c1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChrZXkgPT4gIXJlc3VsdFtrZXldICYmIGRlbGV0ZSByZXN1bHRba2V5XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBxdWVyeSwgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9KTtcbiAgfVxuXG4gIHNvcnQoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBzb3J0Q29kZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UXVlcnlQYXJhbXMocXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
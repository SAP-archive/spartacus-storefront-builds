/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService, LanguageService, ProductSearchService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, pluck, shareReplay, tap, } from 'rxjs/operators';
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
    function ProductListComponentService(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        var _this = this;
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.router = router;
        // TODO: make it configurable
        this.defaultPageSize = 10;
        this.RELEVANCE_ALLCATEGORIES = ':relevance:allCategories:';
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) { return Object.keys(searchResult).length > 0; })));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((/**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */
            function (x, y) {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            }))),
            // also trigger search on site context changes
            this.languageService.getActive(),
            this.currencyService.getActive(),
        ]).pipe(pluck(0, 'state'), tap((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
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
        this.model$ = combineLatest([
            this.searchResults$,
            this.searchByRouting$,
        ]).pipe(pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
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
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
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
     * Get items from a given page without using navigation
     */
    /**
     * Get items from a given page without using navigation
     * @param {?} pageNumber
     * @return {?}
     */
    ProductListComponentService.prototype.getPageItems = /**
     * Get items from a given page without using navigation
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        var _this = this;
        this.routing
            .getRouterState()
            .subscribe((/**
         * @param {?} route
         * @return {?}
         */
        function (route) {
            /** @type {?} */
            var routeCriteria = _this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            /** @type {?} */
            var criteria = tslib_1.__assign({}, routeCriteria, { currentPage: pageNumber });
            _this.search(criteria);
        }))
            .unsubscribe();
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
        { type: CurrencyService },
        { type: LanguageService },
        { type: Router }
    ]; };
    /** @nocollapse */ ProductListComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i1.CurrencyService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
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
    ProductListComponentService.prototype.RELEVANCE_ALLCATEGORIES;
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
    ProductListComponentService.prototype.currencyService;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.languageService;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBRUwsZUFBZSxFQUNmLGVBQWUsRUFFZixvQkFBb0IsRUFDcEIsY0FBYyxHQUVmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sS0FBSyxFQUNMLFdBQVcsRUFDWCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUV4QixxQ0FJQzs7O0lBSEMsMkNBQW1COztJQUNuQiw4Q0FBc0I7O0lBQ3RCLHVDQUFlOzs7OztBQUdqQiw2QkFLQzs7O0lBSkMscUNBQXFCOztJQUNyQixrQ0FBa0I7O0lBQ2xCLGtDQUFrQjs7SUFDbEIsK0JBQWU7O0FBR2pCO0lBU0UscUNBQ1ksb0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWM7UUFOMUIsaUJBT0k7UUFOUSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FB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Q3hCLENBQUMsRUFBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsMENBQUk7Ozs7SUFBSixVQUFLLFFBQWdCO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8sb0RBQWM7Ozs7O0lBQXRCLFVBQXVCLFdBQTJCO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLGFBQUE7WUFDWCxtQkFBbUIsRUFBRSxPQUFPO1lBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkEzSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkExQmhDLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFQUCxjQUFjO2dCQUdyQixlQUFlO2dCQUNmLGVBQWU7Z0JBSlEsTUFBTTs7O3NDQUQvQjtDQTZMQyxBQTVKRCxJQTRKQztTQTNKWSwyQkFBMkI7Ozs7OztJQUV0QyxzREFBK0I7Ozs7O0lBRS9CLDBDQUE0Qjs7Ozs7SUFFNUIsOERBQXlFOzs7OztJQVd6RSxxREFJc0U7Ozs7O0lBRXRFLHVEQXNCRTs7Ozs7Ozs7Ozs7SUFXRiw2Q0FNRTs7Ozs7SUFyREEsMkRBQW9EOzs7OztJQUNwRCw4Q0FBaUM7Ozs7O0lBQ2pDLHFEQUF3Qzs7Ozs7SUFDeEMsc0RBQTBDOzs7OztJQUMxQyxzREFBMEM7Ozs7O0lBQzFDLDZDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgQ3VycmVuY3lTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0Um91dGVQYXJhbXMge1xuICBicmFuZENvZGU/OiBzdHJpbmc7XG4gIGNhdGVnb3J5Q29kZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hDcml0ZXJpYSB7XG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgc29ydENvZGU/OiBzdHJpbmc7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB7XG4gIC8vIFRPRE86IG1ha2UgaXQgY29uZmlndXJhYmxlXG4gIHByb3RlY3RlZCBkZWZhdWx0UGFnZVNpemUgPSAxMDtcblxuICBwcm90ZWN0ZWQgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9BTExDQVRFR09SSUVTID0gJzpyZWxldmFuY2U6YWxsQ2F0ZWdvcmllczonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgc2VhcmNoUmVzdWx0cyQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFNlYXJjaFBhZ2VcbiAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgICAuZ2V0UmVzdWx0cygpXG4gICAgLnBpcGUoZmlsdGVyKHNlYXJjaFJlc3VsdCA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApKTtcblxuICBwcml2YXRlIHNlYXJjaEJ5Um91dGluZyQ6IE9ic2VydmFibGU8XG4gICAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdFxuICA+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5yb3V0aW5nLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG4gICAgICAgIC8vIHJvdXRlciBlbWl0cyBuZXcgdmFsdWUgYWxzbyB3aGVuIHRoZSBhbnRpY2lwYXRlZCBgbmV4dFN0YXRlYCBjaGFuZ2VzXG4gICAgICAgIC8vIGJ1dCB3ZSB3YW50IHRvIHBlcmZvcm0gc2VhcmNoIG9ubHkgd2hlbiBjdXJyZW50IHVybCBjaGFuZ2VzXG4gICAgICAgIHJldHVybiB4LnN0YXRlLnVybCA9PT0geS5zdGF0ZS51cmw7XG4gICAgICB9KVxuICAgICksXG4gICAgLy8gYWxzbyB0cmlnZ2VyIHNlYXJjaCBvbiBzaXRlIGNvbnRleHQgY2hhbmdlc1xuICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgIHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICBdKS5waXBlKFxuICAgIHBsdWNrKDAsICdzdGF0ZScpLFxuICAgIHRhcCgoc3RhdGU6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5nZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICAgICAgc3RhdGUucGFyYW1zLFxuICAgICAgICBzdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2VhcmNoKGNyaXRlcmlhKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiBUaGlzIHN0cmVhbSBzaG91bGQgYmUgdXNlZCBvbmx5IG9uIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAgICpcbiAgICogSXQgbm90IG9ubHkgZW1pdHMgc2VhcmNoIHJlc3VsdHMsIGJ1dCBhbHNvIHBlcmZvcm1zIGEgc2VhcmNoIG9uIGV2ZXJ5IGNoYW5nZVxuICAgKiBvZiB0aGUgcm91dGUgKGkuZS4gcm91dGUgcGFyYW1zIG9yIHF1ZXJ5IHBhcmFtcykuXG4gICAqXG4gICAqIFdoZW4gYSB1c2VyIGxlYXZlcyB0aGUgUExQIHJvdXRlLCB0aGUgUExQIGNvbXBvbmVudCB1bnN1YnNjcmliZXMgZnJvbSB0aGlzIHN0cmVhbVxuICAgKiBzbyBubyBsb25nZXIgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gcm91dGUgY2hhbmdlLlxuICAgKi9cbiAgcmVhZG9ubHkgbW9kZWwkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyQsXG4gICAgdGhpcy5zZWFyY2hCeVJvdXRpbmckLFxuICBdKS5waXBlKFxuICAgIHBsdWNrKDApLFxuICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgKTtcblxuICBjbGVhclNlYXJjaFJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgcm91dGVQYXJhbXM6IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMsXG4gICAgcXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhXG4gICk6IFNlYXJjaENyaXRlcmlhIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IHx8IHRoaXMuZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMocm91dGVQYXJhbXMpLFxuICAgICAgcGFnZVNpemU6IHF1ZXJ5UGFyYW1zLnBhZ2VTaXplIHx8IHRoaXMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgY3VycmVudFBhZ2U6IHF1ZXJ5UGFyYW1zLmN1cnJlbnRQYWdlLFxuICAgICAgc29ydENvZGU6IHF1ZXJ5UGFyYW1zLnNvcnRDb2RlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHtcbiAgICBicmFuZENvZGUsXG4gICAgY2F0ZWdvcnlDb2RlLFxuICAgIHF1ZXJ5LFxuICB9OiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zKSB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuICAgIGlmIChjYXRlZ29yeUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLlJFTEVWQU5DRV9BTExDQVRFR09SSUVTICsgY2F0ZWdvcnlDb2RlO1xuICAgIH1cbiAgICBpZiAoYnJhbmRDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyArIGJyYW5kQ29kZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlYXJjaChjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICBjb25zdCBxdWVyeSA9IGNyaXRlcmlhLnF1ZXJ5O1xuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuZ2V0U2VhcmNoQ29uZmlnKGNyaXRlcmlhKTtcblxuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWFyY2hDb25maWcoY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogU2VhcmNoQ29uZmlnIHtcbiAgICBjb25zdCByZXN1bHQ6IFNlYXJjaENvbmZpZyA9IHtcbiAgICAgIGN1cnJlbnRQYWdlOiBjcml0ZXJpYS5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VTaXplOiBjcml0ZXJpYS5wYWdlU2l6ZSxcbiAgICAgIHNvcnRDb2RlOiBjcml0ZXJpYS5zb3J0Q29kZSxcbiAgICB9O1xuXG4gICAgLy8gZHJvcCBlbXB0eSBrZXlzXG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGtleSA9PiAhcmVzdWx0W2tleV0gJiYgZGVsZXRlIHJlc3VsdFtrZXldKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRRdWVyeVBhcmFtcyh7IHF1ZXJ5LCBjdXJyZW50UGFnZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRRdWVyeVBhcmFtcyh7IGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdGVtcyBmcm9tIGEgZ2l2ZW4gcGFnZSB3aXRob3V0IHVzaW5nIG5hdmlnYXRpb25cbiAgICovXG4gIGdldFBhZ2VJdGVtcyhwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAuc3Vic2NyaWJlKHJvdXRlID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVDcml0ZXJpYSA9IHRoaXMuZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgICAgICAgcm91dGUuc3RhdGUucGFyYW1zLFxuICAgICAgICAgIHJvdXRlLnN0YXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNyaXRlcmlhID0ge1xuICAgICAgICAgIC4uLnJvdXRlQ3JpdGVyaWEsXG4gICAgICAgICAgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VhcmNoKGNyaXRlcmlhKTtcbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNvcnQoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBzb3J0Q29kZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UXVlcnlQYXJhbXMocXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
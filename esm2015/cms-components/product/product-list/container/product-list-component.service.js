/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ProductListComponentService {
    /**
     * @param {?} productSearchService
     * @param {?} routing
     * @param {?} activatedRoute
     * @param {?} currencyService
     * @param {?} languageService
     * @param {?} router
     */
    constructor(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.currencyService = currencyService;
        this.languageService = languageService;
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
        searchResult => Object.keys(searchResult).length > 0)));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((/**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */
            (x, y) => {
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
        (state) => {
            /** @type {?} */
            const criteria = this.getCriteriaFromRoute(state.params, state.queryParams);
            this.search(criteria);
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
    clearSearchResults() {
        this.productSearchService.clearResults();
    }
    /**
     * @private
     * @param {?} routeParams
     * @param {?} queryParams
     * @return {?}
     */
    getCriteriaFromRoute(routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    getQueryFromRouteParams({ brandCode, categoryCode, query, }) {
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_CATEGORY + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_BRAND + brandCode;
        }
    }
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    search(criteria) {
        /** @type {?} */
        const query = criteria.query;
        /** @type {?} */
        const searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    }
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    getSearchConfig(criteria) {
        /** @type {?} */
        const result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => !result[key] && delete result[key]));
        return result;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    setQuery(query) {
        this.setQueryParams({ query, currentPage: undefined });
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sort(sortCode) {
        this.setQueryParams({ sortCode });
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    setQueryParams(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    }
}
ProductListComponentService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProductListComponentService.ctorParameters = () => [
    { type: ProductSearchService },
    { type: RoutingService },
    { type: ActivatedRoute },
    { type: CurrencyService },
    { type: LanguageService },
    { type: Router }
];
/** @nocollapse */ ProductListComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i1.CurrencyService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFFTCxlQUFlLEVBQ2YsZUFBZSxFQUVmLG9CQUFvQixFQUNwQixjQUFjLEdBRWYsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRXhCLHFDQUlDOzs7SUFIQywyQ0FBbUI7O0lBQ25CLDhDQUFzQjs7SUFDdEIsdUNBQWU7Ozs7O0FBR2pCLDZCQUtDOzs7SUFKQyxxQ0FBcUI7O0lBQ3JCLGtDQUFrQjs7SUFDbEIsa0NBQWtCOztJQUNsQiwrQkFBZTs7QUFJakIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7Ozs7O0lBUXRDLFlBQ1ksb0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWM7UUFMZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FB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QUFNOzs7Ozs7OztJQWtDN0Isc0RBQStCOzs7OztJQUUvQiwwQ0FBNEI7Ozs7O0lBRTVCLHlEQUErRDs7Ozs7SUFDL0Qsc0RBQXlEOzs7OztJQVd6RCxxREFJc0U7Ozs7O0lBRXRFLHVEQXNCRTs7Ozs7Ozs7Ozs7SUFXRiw2Q0FNRTs7Ozs7SUFyREEsMkRBQW9EOzs7OztJQUNwRCw4Q0FBaUM7Ozs7O0lBQ2pDLHFEQUF3Qzs7Ozs7SUFDeEMsc0RBQTBDOzs7OztJQUMxQyxzREFBMEM7Ozs7O0lBQzFDLDZDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgQ3VycmVuY3lTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0Um91dGVQYXJhbXMge1xuICBicmFuZENvZGU/OiBzdHJpbmc7XG4gIGNhdGVnb3J5Q29kZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hDcml0ZXJpYSB7XG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgc29ydENvZGU/OiBzdHJpbmc7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB7XG4gIHByb3RlY3RlZCBkZWZhdWx0UGFnZVNpemUgPSAxMDtcblxuICBwcm90ZWN0ZWQgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9DQVRFR09SWSA9ICc6cmVsZXZhbmNlOmNhdGVnb3J5Oic7XG4gIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQlJBTkQgPSAnOnJlbGV2YW5jZTpicmFuZDonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgc2VhcmNoUmVzdWx0cyQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFNlYXJjaFBhZ2VcbiAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgICAuZ2V0UmVzdWx0cygpXG4gICAgLnBpcGUoZmlsdGVyKHNlYXJjaFJlc3VsdCA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApKTtcblxuICBwcml2YXRlIHNlYXJjaEJ5Um91dGluZyQ6IE9ic2VydmFibGU8XG4gICAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdFxuICA+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5yb3V0aW5nLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG4gICAgICAgIC8vIHJvdXRlciBlbWl0cyBuZXcgdmFsdWUgYWxzbyB3aGVuIHRoZSBhbnRpY2lwYXRlZCBgbmV4dFN0YXRlYCBjaGFuZ2VzXG4gICAgICAgIC8vIGJ1dCB3ZSB3YW50IHRvIHBlcmZvcm0gc2VhcmNoIG9ubHkgd2hlbiBjdXJyZW50IHVybCBjaGFuZ2VzXG4gICAgICAgIHJldHVybiB4LnN0YXRlLnVybCA9PT0geS5zdGF0ZS51cmw7XG4gICAgICB9KVxuICAgICksXG4gICAgLy8gYWxzbyB0cmlnZ2VyIHNlYXJjaCBvbiBzaXRlIGNvbnRleHQgY2hhbmdlc1xuICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgIHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICBdKS5waXBlKFxuICAgIHBsdWNrKDAsICdzdGF0ZScpLFxuICAgIHRhcCgoc3RhdGU6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5nZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICAgICAgc3RhdGUucGFyYW1zLFxuICAgICAgICBzdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2VhcmNoKGNyaXRlcmlhKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiBUaGlzIHN0cmVhbSBzaG91bGQgYmUgdXNlZCBvbmx5IG9uIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAgICpcbiAgICogSXQgbm90IG9ubHkgZW1pdHMgc2VhcmNoIHJlc3VsdHMsIGJ1dCBhbHNvIHBlcmZvcm1zIGEgc2VhcmNoIG9uIGV2ZXJ5IGNoYW5nZVxuICAgKiBvZiB0aGUgcm91dGUgKGkuZS4gcm91dGUgcGFyYW1zIG9yIHF1ZXJ5IHBhcmFtcykuXG4gICAqXG4gICAqIFdoZW4gYSB1c2VyIGxlYXZlcyB0aGUgUExQIHJvdXRlLCB0aGUgUExQIGNvbXBvbmVudCB1bnN1YnNjcmliZXMgZnJvbSB0aGlzIHN0cmVhbVxuICAgKiBzbyBubyBsb25nZXIgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gcm91dGUgY2hhbmdlLlxuICAgKi9cbiAgcmVhZG9ubHkgbW9kZWwkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyQsXG4gICAgdGhpcy5zZWFyY2hCeVJvdXRpbmckLFxuICBdKS5waXBlKFxuICAgIHBsdWNrKDApLFxuICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgKTtcblxuICBjbGVhclNlYXJjaFJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgcm91dGVQYXJhbXM6IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMsXG4gICAgcXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhXG4gICk6IFNlYXJjaENyaXRlcmlhIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IHx8IHRoaXMuZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMocm91dGVQYXJhbXMpLFxuICAgICAgcGFnZVNpemU6IHF1ZXJ5UGFyYW1zLnBhZ2VTaXplIHx8IHRoaXMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgY3VycmVudFBhZ2U6IHF1ZXJ5UGFyYW1zLmN1cnJlbnRQYWdlLFxuICAgICAgc29ydENvZGU6IHF1ZXJ5UGFyYW1zLnNvcnRDb2RlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHtcbiAgICBicmFuZENvZGUsXG4gICAgY2F0ZWdvcnlDb2RlLFxuICAgIHF1ZXJ5LFxuICB9OiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zKSB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuICAgIGlmIChjYXRlZ29yeUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLlJFTEVWQU5DRV9DQVRFR09SWSArIGNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKGJyYW5kQ29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0JSQU5EICsgYnJhbmRDb2RlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIGNvbnN0IHF1ZXJ5ID0gY3JpdGVyaWEucXVlcnk7XG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5nZXRTZWFyY2hDb25maWcoY3JpdGVyaWEpO1xuXG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5zZWFyY2gocXVlcnksIHNlYXJjaENvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlYXJjaENvbmZpZyhjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEpOiBTZWFyY2hDb25maWcge1xuICAgIGNvbnN0IHJlc3VsdDogU2VhcmNoQ29uZmlnID0ge1xuICAgICAgY3VycmVudFBhZ2U6IGNyaXRlcmlhLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZVNpemU6IGNyaXRlcmlhLnBhZ2VTaXplLFxuICAgICAgc29ydENvZGU6IGNyaXRlcmlhLnNvcnRDb2RlLFxuICAgIH07XG5cbiAgICAvLyBkcm9wIGVtcHR5IGtleXNcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goa2V5ID0+ICFyZXN1bHRba2V5XSAmJiBkZWxldGUgcmVzdWx0W2tleV0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgcXVlcnksIGN1cnJlbnRQYWdlOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIgfSk7XG4gIH1cblxuICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgc29ydENvZGUgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
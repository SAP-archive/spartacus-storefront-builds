/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * Get items from a given page without using navigation
     * @param {?} pageNumber
     * @return {?}
     */
    getPageItems(pageNumber) {
        this.routing
            .getRouterState()
            .subscribe((/**
         * @param {?} route
         * @return {?}
         */
        route => {
            /** @type {?} */
            const routeCriteria = this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            /** @type {?} */
            const criteria = Object.assign({}, routeCriteria, { currentPage: pageNumber });
            this.search(criteria);
        }))
            .unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFFTCxlQUFlLEVBQ2YsZUFBZSxFQUVmLG9CQUFvQixFQUNwQixjQUFjLEdBRWYsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRXhCLHFDQUlDOzs7SUFIQywyQ0FBbUI7O0lBQ25CLDhDQUFzQjs7SUFDdEIsdUNBQWU7Ozs7O0FBR2pCLDZCQUtDOzs7SUFKQyxxQ0FBcUI7O0lBQ3JCLGtDQUFrQjs7SUFDbEIsa0NBQWtCOztJQUNsQiwrQkFBZTs7QUFJakIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7Ozs7O0lBUXRDLFlBQ1ksb0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWM7UUFMZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FB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Z0I7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFdBQTJCO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXO1lBQ1gsbUJBQW1CLEVBQUUsT0FBTztZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM0pGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUExQmhDLG9CQUFvQjtZQUNwQixjQUFjO1lBUFAsY0FBYztZQUdyQixlQUFlO1lBQ2YsZUFBZTtZQUpRLE1BQU07Ozs7Ozs7O0lBa0M3QixzREFBK0I7Ozs7O0lBRS9CLDBDQUE0Qjs7Ozs7SUFFNUIseURBQStEOzs7OztJQUMvRCxzREFBeUQ7Ozs7O0lBV3pELHFEQUlzRTs7Ozs7SUFFdEUsdURBc0JFOzs7Ozs7Ozs7OztJQVdGLDZDQU1FOzs7OztJQXJEQSwyREFBb0Q7Ozs7O0lBQ3BELDhDQUFpQzs7Ozs7SUFDakMscURBQXdDOzs7OztJQUN4QyxzREFBMEM7Ozs7O0lBQzFDLHNEQUEwQzs7Ozs7SUFDMUMsNkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyB7XG4gIGJyYW5kQ29kZT86IHN0cmluZztcbiAgY2F0ZWdvcnlDb2RlPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaENyaXRlcmlhIHtcbiAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBzb3J0Q29kZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRQYWdlU2l6ZSA9IDEwO1xuXG4gIHByb3RlY3RlZCBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFX0NBVEVHT1JZID0gJzpyZWxldmFuY2U6Y2F0ZWdvcnk6JztcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9CUkFORCA9ICc6cmVsZXZhbmNlOmJyYW5kOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSBzZWFyY2hSZXN1bHRzJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZVxuICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZVxuICAgIC5nZXRSZXN1bHRzKClcbiAgICAucGlwZShmaWx0ZXIoc2VhcmNoUmVzdWx0ID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMCkpO1xuXG4gIHByaXZhdGUgc2VhcmNoQnlSb3V0aW5nJDogT2JzZXJ2YWJsZTxcbiAgICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gID4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnJvdXRpbmcuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHtcbiAgICAgICAgLy8gcm91dGVyIGVtaXRzIG5ldyB2YWx1ZSBhbHNvIHdoZW4gdGhlIGFudGljaXBhdGVkIGBuZXh0U3RhdGVgIGNoYW5nZXNcbiAgICAgICAgLy8gYnV0IHdlIHdhbnQgdG8gcGVyZm9ybSBzZWFyY2ggb25seSB3aGVuIGN1cnJlbnQgdXJsIGNoYW5nZXNcbiAgICAgICAgcmV0dXJuIHguc3RhdGUudXJsID09PSB5LnN0YXRlLnVybDtcbiAgICAgIH0pXG4gICAgKSxcbiAgICAvLyBhbHNvIHRyaWdnZXIgc2VhcmNoIG9uIHNpdGUgY29udGV4dCBjaGFuZ2VzXG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gIF0pLnBpcGUoXG4gICAgcGx1Y2soMCwgJ3N0YXRlJyksXG4gICAgdGFwKChzdGF0ZTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgY3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICBzdGF0ZS5wYXJhbXMsXG4gICAgICAgIHN0YXRlLnF1ZXJ5UGFyYW1zXG4gICAgICApO1xuICAgICAgdGhpcy5zZWFyY2goY3JpdGVyaWEpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqIFRoaXMgc3RyZWFtIHNob3VsZCBiZSB1c2VkIG9ubHkgb24gdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLlxuICAgKlxuICAgKiBJdCBub3Qgb25seSBlbWl0cyBzZWFyY2ggcmVzdWx0cywgYnV0IGFsc28gcGVyZm9ybXMgYSBzZWFyY2ggb24gZXZlcnkgY2hhbmdlXG4gICAqIG9mIHRoZSByb3V0ZSAoaS5lLiByb3V0ZSBwYXJhbXMgb3IgcXVlcnkgcGFyYW1zKS5cbiAgICpcbiAgICogV2hlbiBhIHVzZXIgbGVhdmVzIHRoZSBQTFAgcm91dGUsIHRoZSBQTFAgY29tcG9uZW50IHVuc3Vic2NyaWJlcyBmcm9tIHRoaXMgc3RyZWFtXG4gICAqIHNvIG5vIGxvbmdlciB0aGUgc2VhcmNoIGlzIHBlcmZvcm1lZCBvbiByb3V0ZSBjaGFuZ2UuXG4gICAqL1xuICByZWFkb25seSBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzJCxcbiAgICB0aGlzLnNlYXJjaEJ5Um91dGluZyQsXG4gIF0pLnBpcGUoXG4gICAgcGx1Y2soMCksXG4gICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICApO1xuXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICByb3V0ZVBhcmFtczogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyxcbiAgICBxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWFcbiAgKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeTogcXVlcnlQYXJhbXMucXVlcnkgfHwgdGhpcy5nZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyhyb3V0ZVBhcmFtcyksXG4gICAgICBwYWdlU2l6ZTogcXVlcnlQYXJhbXMucGFnZVNpemUgfHwgdGhpcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZTogcXVlcnlQYXJhbXMuY3VycmVudFBhZ2UsXG4gICAgICBzb3J0Q29kZTogcXVlcnlQYXJhbXMuc29ydENvZGUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMoe1xuICAgIGJyYW5kQ29kZSxcbiAgICBjYXRlZ29yeUNvZGUsXG4gICAgcXVlcnksXG4gIH06IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMpIHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gICAgaWYgKGNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0NBVEVHT1JZICsgY2F0ZWdvcnlDb2RlO1xuICAgIH1cbiAgICBpZiAoYnJhbmRDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQlJBTkQgKyBicmFuZENvZGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2goY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgY29uc3QgcXVlcnkgPSBjcml0ZXJpYS5xdWVyeTtcbiAgICBjb25zdCBzZWFyY2hDb25maWcgPSB0aGlzLmdldFNlYXJjaENvbmZpZyhjcml0ZXJpYSk7XG5cbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwgc2VhcmNoQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoQ29uZmlnKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0OiBTZWFyY2hDb25maWcgPSB7XG4gICAgICBjdXJyZW50UGFnZTogY3JpdGVyaWEuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogY3JpdGVyaWEucGFnZVNpemUsXG4gICAgICBzb3J0Q29kZTogY3JpdGVyaWEuc29ydENvZGUsXG4gICAgfTtcblxuICAgIC8vIGRyb3AgZW1wdHkga2V5c1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChrZXkgPT4gIXJlc3VsdFtrZXldICYmIGRlbGV0ZSByZXN1bHRba2V5XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBxdWVyeSwgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRlbXMgZnJvbSBhIGdpdmVuIHBhZ2Ugd2l0aG91dCB1c2luZyBuYXZpZ2F0aW9uXG4gICAqL1xuICBnZXRQYWdlSXRlbXMocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnN1YnNjcmliZShyb3V0ZSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlQ3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICAgIHJvdXRlLnN0YXRlLnBhcmFtcyxcbiAgICAgICAgICByb3V0ZS5zdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjcml0ZXJpYSA9IHtcbiAgICAgICAgICAuLi5yb3V0ZUNyaXRlcmlhLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgc29ydENvZGUgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ProductListComponentService {
    /**
     * @param {?} productSearchService
     * @param {?} routing
     * @param {?} activatedRoute
     * @param {?} router
     */
    constructor(productSearchService, routing, activatedRoute, router) {
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
        searchResult => Object.keys(searchResult).length > 0)));
        this.searchByRouting$ = this.routing.getRouterState().pipe(distinctUntilChanged((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            // router emits new value also when the anticipated `nextState` changes
            // but we want to perform search only when current url changes
            return x.state.url === y.state.url;
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ state }) => {
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
        this.model$ = combineLatest(this.searchResults$, this.searchByRouting$).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([searchResults]) => searchResults)), shareReplay({ bufferSize: 1, refCount: true }));
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
    { type: Router }
];
/** @nocollapse */ ProductListComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsY0FBYyxHQUVmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUV4QixxQ0FJQzs7O0lBSEMsMkNBQW1COztJQUNuQiw4Q0FBc0I7O0lBQ3RCLHVDQUFlOzs7OztBQUdqQiw2QkFLQzs7O0lBSkMscUNBQXFCOztJQUNyQixrQ0FBa0I7O0lBQ2xCLGtDQUFrQjs7SUFDbEIsK0JBQWU7O0FBSWpCLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUFRdEMsWUFDWSxvQkFBMEMsRUFDMUMsT0FBdUIsRUFDdkIsY0FBOEIsRUFDOUIsTUFBYztRQUhkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYaEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFJWix1QkFBa0IsR0FBRyxzQkFBc0IsQ0FBQztRQUM1QyxvQkFBZSxHQUFHLG1CQUFt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bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWFyY2hDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyB7XG4gIGJyYW5kQ29kZT86IHN0cmluZztcbiAgY2F0ZWdvcnlDb2RlPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaENyaXRlcmlhIHtcbiAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBzb3J0Q29kZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRQYWdlU2l6ZSA9IDEwO1xuXG4gIHByb3RlY3RlZCBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFX0NBVEVHT1JZID0gJzpyZWxldmFuY2U6Y2F0ZWdvcnk6JztcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9CUkFORCA9ICc6cmVsZXZhbmNlOmJyYW5kOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgc2VhcmNoUmVzdWx0cyQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFNlYXJjaFBhZ2VcbiAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgICAuZ2V0UmVzdWx0cygpXG4gICAgLnBpcGUoZmlsdGVyKHNlYXJjaFJlc3VsdCA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApKTtcblxuICBwcml2YXRlIHNlYXJjaEJ5Um91dGluZyQ6IE9ic2VydmFibGU8XG4gICAgYW55XG4gID4gPSB0aGlzLnJvdXRpbmcuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG4gICAgICAvLyByb3V0ZXIgZW1pdHMgbmV3IHZhbHVlIGFsc28gd2hlbiB0aGUgYW50aWNpcGF0ZWQgYG5leHRTdGF0ZWAgY2hhbmdlc1xuICAgICAgLy8gYnV0IHdlIHdhbnQgdG8gcGVyZm9ybSBzZWFyY2ggb25seSB3aGVuIGN1cnJlbnQgdXJsIGNoYW5nZXNcbiAgICAgIHJldHVybiB4LnN0YXRlLnVybCA9PT0geS5zdGF0ZS51cmw7XG4gICAgfSksXG4gICAgdGFwKCh7IHN0YXRlIH0pID0+IHtcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5nZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICAgICAgc3RhdGUucGFyYW1zLFxuICAgICAgICBzdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2VhcmNoKGNyaXRlcmlhKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiBUaGlzIHN0cmVhbSBzaG91bGQgYmUgdXNlZCBvbmx5IG9uIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAgICpcbiAgICogSXQgbm90IG9ubHkgZW1pdHMgc2VhcmNoIHJlc3VsdHMsIGJ1dCBhbHNvIHBlcmZvcm1zIGEgc2VhcmNoIG9uIGV2ZXJ5IGNoYW5nZVxuICAgKiBvZiB0aGUgcm91dGUgKGkuZS4gcm91dGUgcGFyYW1zIG9yIHF1ZXJ5IHBhcmFtcykuXG4gICAqXG4gICAqIFdoZW4gYSB1c2VyIGxlYXZlcyB0aGUgUExQIHJvdXRlLCB0aGUgUExQIGNvbXBvbmVudCB1bnN1YnNjcmliZXMgZnJvbSB0aGlzIHN0cmVhbVxuICAgKiBzbyBubyBsb25nZXIgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gcm91dGUgY2hhbmdlLlxuICAgKi9cbiAgcmVhZG9ubHkgbW9kZWwkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiA9IGNvbWJpbmVMYXRlc3QoXG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzJCxcbiAgICB0aGlzLnNlYXJjaEJ5Um91dGluZyRcbiAgKS5waXBlKFxuICAgIG1hcCgoW3NlYXJjaFJlc3VsdHNdKSA9PiBzZWFyY2hSZXN1bHRzKSxcbiAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICk7XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgIHJvdXRlUGFyYW1zOiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zLFxuICAgIHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYVxuICApOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtcy5xdWVyeSB8fCB0aGlzLmdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHJvdXRlUGFyYW1zKSxcbiAgICAgIHBhZ2VTaXplOiBxdWVyeVBhcmFtcy5wYWdlU2l6ZSB8fCB0aGlzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlOiBxdWVyeVBhcmFtcy5jdXJyZW50UGFnZSxcbiAgICAgIHNvcnRDb2RlOiBxdWVyeVBhcmFtcy5zb3J0Q29kZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyh7XG4gICAgYnJhbmRDb2RlLFxuICAgIGNhdGVnb3J5Q29kZSxcbiAgICBxdWVyeSxcbiAgfTogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcykge1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoY2F0ZWdvcnlDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQ0FURUdPUlkgKyBjYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmIChicmFuZENvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLlJFTEVWQU5DRV9CUkFORCArIGJyYW5kQ29kZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlYXJjaChjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICBjb25zdCBxdWVyeSA9IGNyaXRlcmlhLnF1ZXJ5O1xuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuZ2V0U2VhcmNoQ29uZmlnKGNyaXRlcmlhKTtcblxuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWFyY2hDb25maWcoY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogU2VhcmNoQ29uZmlnIHtcbiAgICBjb25zdCByZXN1bHQ6IFNlYXJjaENvbmZpZyA9IHtcbiAgICAgIGN1cnJlbnRQYWdlOiBjcml0ZXJpYS5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VTaXplOiBjcml0ZXJpYS5wYWdlU2l6ZSxcbiAgICAgIHNvcnRDb2RlOiBjcml0ZXJpYS5zb3J0Q29kZSxcbiAgICB9O1xuXG4gICAgLy8gZHJvcCBlbXB0eSBrZXlzXG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGtleSA9PiAhcmVzdWx0W2tleV0gJiYgZGVsZXRlIHJlc3VsdFtrZXldKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRRdWVyeVBhcmFtcyh7IHF1ZXJ5LCBjdXJyZW50UGFnZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRRdWVyeVBhcmFtcyh7IGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH0pO1xuICB9XG5cbiAgc29ydChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRRdWVyeVBhcmFtcyh7IHNvcnRDb2RlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRRdWVyeVBhcmFtcyhxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICB9KTtcbiAgfVxufVxuIl19
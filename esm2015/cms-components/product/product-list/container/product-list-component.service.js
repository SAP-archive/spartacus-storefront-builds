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
        // TODO: make it configurable
        this.defaultPageSize = 10;
        this.RELEVANCE_ALLCATEGORIES = ':relevance:allCategories:';
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
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFFTCxlQUFlLEVBQ2YsZUFBZSxFQUVmLG9CQUFvQixFQUNwQixjQUFjLEdBRWYsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRXhCLHFDQUlDOzs7SUFIQywyQ0FBbUI7O0lBQ25CLDhDQUFzQjs7SUFDdEIsdUNBQWU7Ozs7O0FBR2pCLDZCQUtDOzs7SUFKQyxxQ0FBcUI7O0lBQ3JCLGtDQUFrQjs7SUFDbEIsa0NBQWtCOztJQUNsQiwrQkFBZTs7QUFJakIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7Ozs7O0lBUXRDLFlBQ1ksb0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWM7UUFMZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FB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QUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxXQUEyQjtRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsV0FBVztZQUNYLG1CQUFtQixFQUFFLE9BQU87WUFDNUIsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTNKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBMUJoQyxvQkFBb0I7WUFDcEIsY0FBYztZQVBQLGNBQWM7WUFHckIsZUFBZTtZQUNmLGVBQWU7WUFKUSxNQUFNOzs7Ozs7OztJQW1DN0Isc0RBQStCOzs7OztJQUUvQiwwQ0FBNEI7Ozs7O0lBRTVCLDhEQUF5RTs7Ozs7SUFXekUscURBSXNFOzs7OztJQUV0RSx1REFzQkU7Ozs7Ozs7Ozs7O0lBV0YsNkNBTUU7Ozs7O0lBckRBLDJEQUFvRDs7Ozs7SUFDcEQsOENBQWlDOzs7OztJQUNqQyxxREFBd0M7Ozs7O0lBQ3hDLHNEQUEwQzs7Ozs7SUFDMUMsc0RBQTBDOzs7OztJQUMxQyw2Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWFyY2hDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zIHtcbiAgYnJhbmRDb2RlPzogc3RyaW5nO1xuICBjYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2VhcmNoQ3JpdGVyaWEge1xuICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHNvcnRDb2RlPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uge1xuICAvLyBUT0RPOiBtYWtlIGl0IGNvbmZpZ3VyYWJsZVxuICBwcm90ZWN0ZWQgZGVmYXVsdFBhZ2VTaXplID0gMTA7XG5cbiAgcHJvdGVjdGVkIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyA9ICc6cmVsZXZhbmNlOmFsbENhdGVnb3JpZXM6JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBwcml2YXRlIHNlYXJjaFJlc3VsdHMkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlXG4gID4gPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgLmdldFJlc3VsdHMoKVxuICAgIC5waXBlKGZpbHRlcihzZWFyY2hSZXN1bHQgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKSk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hCeVJvdXRpbmckOiBPYnNlcnZhYmxlPFxuICAgIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3RcbiAgPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMucm91dGluZy5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgICAvLyByb3V0ZXIgZW1pdHMgbmV3IHZhbHVlIGFsc28gd2hlbiB0aGUgYW50aWNpcGF0ZWQgYG5leHRTdGF0ZWAgY2hhbmdlc1xuICAgICAgICAvLyBidXQgd2Ugd2FudCB0byBwZXJmb3JtIHNlYXJjaCBvbmx5IHdoZW4gY3VycmVudCB1cmwgY2hhbmdlc1xuICAgICAgICByZXR1cm4geC5zdGF0ZS51cmwgPT09IHkuc3RhdGUudXJsO1xuICAgICAgfSlcbiAgICApLFxuICAgIC8vIGFsc28gdHJpZ2dlciBzZWFyY2ggb24gc2l0ZSBjb250ZXh0IGNoYW5nZXNcbiAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICB0aGlzLmN1cnJlbmN5U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgXSkucGlwZShcbiAgICBwbHVjaygwLCAnc3RhdGUnKSxcbiAgICB0YXAoKHN0YXRlOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBjcml0ZXJpYSA9IHRoaXMuZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgICAgIHN0YXRlLnBhcmFtcyxcbiAgICAgICAgc3RhdGUucXVlcnlQYXJhbXNcbiAgICAgICk7XG4gICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogVGhpcyBzdHJlYW0gc2hvdWxkIGJlIHVzZWQgb25seSBvbiB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gICAqXG4gICAqIEl0IG5vdCBvbmx5IGVtaXRzIHNlYXJjaCByZXN1bHRzLCBidXQgYWxzbyBwZXJmb3JtcyBhIHNlYXJjaCBvbiBldmVyeSBjaGFuZ2VcbiAgICogb2YgdGhlIHJvdXRlIChpLmUuIHJvdXRlIHBhcmFtcyBvciBxdWVyeSBwYXJhbXMpLlxuICAgKlxuICAgKiBXaGVuIGEgdXNlciBsZWF2ZXMgdGhlIFBMUCByb3V0ZSwgdGhlIFBMUCBjb21wb25lbnQgdW5zdWJzY3JpYmVzIGZyb20gdGhpcyBzdHJlYW1cbiAgICogc28gbm8gbG9uZ2VyIHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIG9uIHJvdXRlIGNoYW5nZS5cbiAgICovXG4gIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMkLFxuICAgIHRoaXMuc2VhcmNoQnlSb3V0aW5nJCxcbiAgXSkucGlwZShcbiAgICBwbHVjaygwKSxcbiAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICk7XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgIHJvdXRlUGFyYW1zOiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zLFxuICAgIHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYVxuICApOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtcy5xdWVyeSB8fCB0aGlzLmdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHJvdXRlUGFyYW1zKSxcbiAgICAgIHBhZ2VTaXplOiBxdWVyeVBhcmFtcy5wYWdlU2l6ZSB8fCB0aGlzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlOiBxdWVyeVBhcmFtcy5jdXJyZW50UGFnZSxcbiAgICAgIHNvcnRDb2RlOiBxdWVyeVBhcmFtcy5zb3J0Q29kZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyh7XG4gICAgYnJhbmRDb2RlLFxuICAgIGNhdGVnb3J5Q29kZSxcbiAgICBxdWVyeSxcbiAgfTogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcykge1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoY2F0ZWdvcnlDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyArIGNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKGJyYW5kQ29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgKyBicmFuZENvZGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2goY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgY29uc3QgcXVlcnkgPSBjcml0ZXJpYS5xdWVyeTtcbiAgICBjb25zdCBzZWFyY2hDb25maWcgPSB0aGlzLmdldFNlYXJjaENvbmZpZyhjcml0ZXJpYSk7XG5cbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwgc2VhcmNoQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoQ29uZmlnKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0OiBTZWFyY2hDb25maWcgPSB7XG4gICAgICBjdXJyZW50UGFnZTogY3JpdGVyaWEuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogY3JpdGVyaWEucGFnZVNpemUsXG4gICAgICBzb3J0Q29kZTogY3JpdGVyaWEuc29ydENvZGUsXG4gICAgfTtcblxuICAgIC8vIGRyb3AgZW1wdHkga2V5c1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChrZXkgPT4gIXJlc3VsdFtrZXldICYmIGRlbGV0ZSByZXN1bHRba2V5XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBxdWVyeSwgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRlbXMgZnJvbSBhIGdpdmVuIHBhZ2Ugd2l0aG91dCB1c2luZyBuYXZpZ2F0aW9uXG4gICAqL1xuICBnZXRQYWdlSXRlbXMocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnN1YnNjcmliZShyb3V0ZSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlQ3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICAgIHJvdXRlLnN0YXRlLnBhcmFtcyxcbiAgICAgICAgICByb3V0ZS5zdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjcml0ZXJpYSA9IHtcbiAgICAgICAgICAuLi5yb3V0ZUNyaXRlcmlhLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgc29ydENvZGUgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
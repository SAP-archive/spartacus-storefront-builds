/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/** @type {?} */
var DEFAULT_SEARCHBOCH_CONFIG = {
    minCharactersBeforeRequest: 1,
    maxProducts: 5,
    displaySuggestions: true,
    maxSuggestions: 5,
    displayProducts: true,
};
/** @type {?} */
var HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
var SearchBoxComponentService = /** @class */ (function () {
    function SearchBoxComponentService(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     */
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?=} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.search = /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?=} config
     * @return {?}
     */
    function (query, config) {
        if (config === void 0) { config = DEFAULT_SEARCHBOCH_CONFIG; }
        if (!query || query === '') {
            this.clearResults();
            return;
        }
        if (config.minCharactersBeforeRequest &&
            query.length < config.minCharactersBeforeRequest) {
            return;
        }
        if (config.displayProducts) {
            this.searchService.search(query, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.searchSuggestions(query, {
                pageSize: config.maxSuggestions,
            });
        }
    };
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @return {?}
     */
    SearchBoxComponentService.prototype.getResults = /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @return {?}
     */
    function () {
        var _this = this;
        return combineLatest(this.productResults$, this.productSuggestions$, this.searchMessage$).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
            return {
                products: productResults ? productResults.products : null,
                suggestions: suggestions,
                message: message,
            };
        }), tap(function (results) {
            return _this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, _this.hasResults(results));
        }));
    };
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    SearchBoxComponentService.prototype.clearResults = /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    function () {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    };
    /**
     * @param {?} className
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasBodyClass = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        return this.winRef.document.body.classList.contains(className);
    };
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    SearchBoxComponentService.prototype.toggleBodyClass = /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    function (className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    };
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasResults = /**
     * @private
     * @param {?} results
     * @return {?}
     */
    function (results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    };
    Object.defineProperty(SearchBoxComponentService.prototype, "productResults$", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.searchService.getResults();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBoxComponentService.prototype, "productSuggestions$", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.searchService
                .getSuggestionResults()
                .pipe(map(function (res) { return res.map(function (suggestion) { return suggestion.value; }); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBoxComponentService.prototype, "searchMessage$", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return combineLatest(this.productResults$, this.productSuggestions$).pipe(switchMap(function (_a) {
                var _b = tslib_1.__read(_a, 2), productResult = _b[0], suggestions = _b[1];
                if (!productResult || !productResult.products || !suggestions) {
                    return of(null);
                }
                else if (suggestions.length === 0 &&
                    productResult.products.length === 0) {
                    return _this.fetchTranslation('searchBox.help.noMatch');
                }
                else if (suggestions.length === 0 &&
                    productResult.products.length > 0) {
                    return _this.fetchTranslation('searchBox.help.exactMatch', {
                        term: productResult.freeTextSearch,
                    });
                }
                else {
                    return of(null);
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Navigates to the search result page with a given query
     */
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponentService.prototype.launchSearchPage = /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: query },
        });
    };
    /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    SearchBoxComponentService.prototype.fetchTranslation = /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    function (translationKey, options) {
        return this.translationService.translate(translationKey, options);
    };
    SearchBoxComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: SearchboxService },
        { type: RoutingService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SearchBoxComponentService.ngInjectableDef = i0.defineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.inject(i1.SearchboxService), i0.inject(i1.RoutingService), i0.inject(i1.TranslationService), i0.inject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
    return SearchBoxComponentService;
}());
export { SearchBoxComponentService };
if (false) {
    /** @type {?} */
    SearchBoxComponentService.prototype.searchService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.translationService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUFHL0MseUJBQXlCLEdBQW9CO0lBQ2pELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsV0FBVyxFQUFFLENBQUM7SUFDZCxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGVBQWUsRUFBRSxJQUFJO0NBQ3RCOztJQUVLLHVCQUF1QixHQUFHLHVCQUF1QjtBQUV2RDtJQUlFLG1DQUNTLGFBQStCLEVBQzVCLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxNQUFpQjtRQUhwQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUo7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ0gsMENBQU07Ozs7Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsTUFBbUQ7UUFBbkQsdUJBQUEsRUFBQSxrQ0FBbUQ7UUFFbkQsSUFBSSxDQUFDLEtBQUssSUFB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LGdCQUFnQixDQUFDLDJCQUEyQixFQUFFO3dCQUN4RCxJQUFJLEVBQUUsYUFBYSxDQUFDLGNBQWM7cUJBQ25DLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksb0RBQWdCOzs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE1BQU0sRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxvREFBZ0I7Ozs7OztJQUF4QixVQUNFLGNBQXNCLEVBQ3RCLE9BQWE7UUFFYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dCQXJKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXBCQyxnQkFBZ0I7Z0JBRGhCLGNBQWM7Z0JBRWQsa0JBQWtCO2dCQUNsQixTQUFTOzs7b0NBTlg7Q0E0S0MsQUF0SkQsSUFzSkM7U0FuSlkseUJBQXlCOzs7SUFFbEMsa0RBQXNDOzs7OztJQUN0QyxtREFBd0M7Ozs7O0lBQ3hDLHVEQUFnRDs7Ozs7SUFDaEQsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWFyY2hib3hTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcblxuY29uc3QgREVGQVVMVF9TRUFSQ0hCT0NIX0NPTkZJRzogU2VhcmNoQm94Q29uZmlnID0ge1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMSxcbiAgbWF4UHJvZHVjdHM6IDUsXG4gIGRpc3BsYXlTdWdnZXN0aW9uczogdHJ1ZSxcbiAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbn07XG5cbmNvbnN0IEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTID0gJ2hhcy1zZWFyY2hib3gtcmVzdWx0cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIHNlYXJjaCBmb3IgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zLFxuICAgKiB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gaXMgc2V0dXAgdG8gbm90IHNlYXJjaCBmb3JcbiAgICogcHJvZHVjdHMgb3Igc3VnZ2VzdGlvbnMuXG4gICAqL1xuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBjb25maWc6IFNlYXJjaEJveENvbmZpZyA9IERFRkFVTFRfU0VBUkNIQk9DSF9DT05GSUdcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0ICYmXG4gICAgICBxdWVyeS5sZW5ndGggPCBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3RcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hTdWdnZXN0aW9ucyhxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBTZWFyY2hSZXN1bHRzLiBXaGVuIHRoZXJlJ3MgYW55XG4gICAqIHJlc3VsdCwgdGhlIGJvZHkgdGFnIHdpbGwgZ2V0IGEgY2xhc3NuYW1lLCBzbyB0aGF0IHNwZWNpZmljIHN0eWxlXG4gICAqIHJ1bGVzIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgZ2V0UmVzdWx0cygpOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMucHJvZHVjdFJlc3VsdHMkLFxuICAgICAgdGhpcy5wcm9kdWN0U3VnZ2VzdGlvbnMkLFxuICAgICAgdGhpcy5zZWFyY2hNZXNzYWdlJFxuICAgICkucGlwZShcbiAgICAgIG1hcCgoW3Byb2R1Y3RSZXN1bHRzLCBzdWdnZXN0aW9ucywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdFJlc3VsdHMgPyBwcm9kdWN0UmVzdWx0cy5wcm9kdWN0cyA6IG51bGwsXG4gICAgICAgICAgc3VnZ2VzdGlvbnMsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgdGFwKHJlc3VsdHMgPT5cbiAgICAgICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIHRoaXMuaGFzUmVzdWx0cyhyZXN1bHRzKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoYm94IHJlc3VsdHMsIHNvIHRoYXQgb2xkIHZhbHVlcyBhcmVcbiAgICogbm8gbG9uZ2VyIGVtaXRlZCB1cG9uIG5leHQgc2VhcmNoLlxuICAgKi9cbiAgY2xlYXJSZXN1bHRzKCkge1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgZmFsc2UpO1xuICB9XG5cbiAgaGFzQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGFkZD86IGJvb2xlYW4pIHtcbiAgICBpZiAoYWRkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRcbiAgICAgICAgPyB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICA6IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzUmVzdWx0cyhyZXN1bHRzOiBTZWFyY2hSZXN1bHRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICghIXJlc3VsdHMucHJvZHVjdHMgJiYgcmVzdWx0cy5wcm9kdWN0cy5sZW5ndGggPiAwKSB8fFxuICAgICAgKCEhcmVzdWx0cy5zdWdnZXN0aW9ucyAmJiByZXN1bHRzLnN1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHx8XG4gICAgICAhIXJlc3VsdHMubWVzc2FnZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBwcm9kdWN0UmVzdWx0cyQoKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcHJvZHVjdFN1Z2dlc3Rpb25zJCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgLmdldFN1Z2dlc3Rpb25SZXN1bHRzKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLm1hcChzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24udmFsdWUpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBzZWFyY2hNZXNzYWdlJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMucHJvZHVjdFJlc3VsdHMkLCB0aGlzLnByb2R1Y3RTdWdnZXN0aW9ucyQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtwcm9kdWN0UmVzdWx0LCBzdWdnZXN0aW9uc10pID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0UmVzdWx0IHx8ICFwcm9kdWN0UmVzdWx0LnByb2R1Y3RzIHx8ICFzdWdnZXN0aW9ucykge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzdWdnZXN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5ub01hdGNoJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLmV4YWN0TWF0Y2gnLCB7XG4gICAgICAgICAgICB0ZXJtOiBwcm9kdWN0UmVzdWx0LmZyZWVUZXh0U2VhcmNoLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlIHdpdGggYSBnaXZlbiBxdWVyeVxuICAgKi9cbiAgcHVibGljIGxhdW5jaFNlYXJjaFBhZ2UocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hUcmFuc2xhdGlvbihcbiAgICB0cmFuc2xhdGlvbktleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19
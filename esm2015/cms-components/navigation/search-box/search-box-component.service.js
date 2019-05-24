/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/** @type {?} */
const HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
export class SearchBoxComponentService {
    /**
     * @param {?} searchService
     * @param {?} routingService
     * @param {?} translationService
     * @param {?} winRef
     */
    constructor(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    search(query, config) {
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
    }
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    getResults(config) {
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config), this.getSearchMessage(config)).pipe(map(([productResults, suggestions, message]) => {
            return {
                products: productResults ? productResults.products : null,
                suggestions,
                message,
            };
        }), tap(results => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results))));
    }
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    clearResults() {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    }
    /**
     * @param {?} className
     * @return {?}
     */
    hasBodyClass(className) {
        return this.winRef.document.body.classList.contains(className);
    }
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    toggleBodyClass(className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    }
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    hasResults(results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getProductResults(config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    }
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    getProductSuggestions(config) {
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map(res => res.map(suggestion => suggestion.value)), switchMap(suggestions => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map(match => (match ? [match] : [])));
                }
                else {
                    return of(suggestions);
                }
            }));
        }
    }
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    getExactSuggestion(config) {
        return this.getProductResults(config).pipe(switchMap(productResult => {
            return productResult.products && productResult.products.length > 0
                ? this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        }));
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getSearchMessage(config) {
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config)).pipe(switchMap(([productResult, suggestions]) => {
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        }));
    }
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    launchSearchPage(query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query },
        });
    }
    /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    fetchTranslation(translationKey, options) {
        return this.translationService.translate(translationKey, options);
    }
}
SearchBoxComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SearchBoxComponentService.ctorParameters = () => [
    { type: SearchboxService },
    { type: RoutingService },
    { type: TranslationService },
    { type: WindowRef }
];
/** @nocollapse */ SearchBoxComponentService.ngInjectableDef = i0.defineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.inject(i1.SearchboxService), i0.inject(i1.RoutingService), i0.inject(i1.TranslationService), i0.inject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztNQUcvQyx1QkFBdUIsR0FBRyx1QkFBdUI7QUFLdkQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQUNwQyxZQUNTLGFBQStCLEVBQzVCLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxNQUFpQjtRQUhwQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDOzs7Ozs7Ozs7SUFPSixNQUFNLENBQUMsS0FBYSxFQUFFLE1BQXVCO1FBQzNDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFDRSxNQUFNLENBQUMsMEJBQTBCO1lBQ2pDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixFQUNoRDtZQUNBLE9BQU87U0FDUjtR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Ozs7O0lBQ3hDLHVEQUFnRDs7Ozs7SUFDaEQsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWFyY2hib3hTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcblxuY29uc3QgSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MgPSAnaGFzLXNlYXJjaGJveC1yZXN1bHRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTogU2VhcmNoYm94U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyB0aGUgc2VhcmNoIGZvciBwcm9kdWN0cyBhbmQgc3VnZ2VzdGlvbnMsXG4gICAqIHVubGVzcyB0aGUgY29uZmlndXJhdGlvbiBpcyBzZXR1cCB0byBub3Qgc2VhcmNoIGZvclxuICAgKiBwcm9kdWN0cyBvciBzdWdnZXN0aW9ucy5cbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghcXVlcnkgfHwgcXVlcnkgPT09ICcnKSB7XG4gICAgICB0aGlzLmNsZWFyUmVzdWx0cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdCAmJlxuICAgICAgcXVlcnkubGVuZ3RoIDwgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2gocXVlcnksIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhQcm9kdWN0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoU3VnZ2VzdGlvbnMocXVlcnksIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgU2VhcmNoUmVzdWx0cy4gV2hlbiB0aGVyZSdzIGFueVxuICAgKiByZXN1bHQsIHRoZSBib2R5IHRhZyB3aWxsIGdldCBhIGNsYXNzbmFtZSwgc28gdGhhdCBzcGVjaWZpYyBzdHlsZVxuICAgKiBydWxlcyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG4gIGdldFJlc3VsdHMoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFNlYXJjaE1lc3NhZ2UoY29uZmlnKVxuICAgICkucGlwZShcbiAgICAgIG1hcCgoW3Byb2R1Y3RSZXN1bHRzLCBzdWdnZXN0aW9ucywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdFJlc3VsdHMgPyBwcm9kdWN0UmVzdWx0cy5wcm9kdWN0cyA6IG51bGwsXG4gICAgICAgICAgc3VnZ2VzdGlvbnMsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgdGFwKHJlc3VsdHMgPT5cbiAgICAgICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIHRoaXMuaGFzUmVzdWx0cyhyZXN1bHRzKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoYm94IHJlc3VsdHMsIHNvIHRoYXQgb2xkIHZhbHVlcyBhcmVcbiAgICogbm8gbG9uZ2VyIGVtaXRlZCB1cG9uIG5leHQgc2VhcmNoLlxuICAgKi9cbiAgY2xlYXJSZXN1bHRzKCkge1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgZmFsc2UpO1xuICB9XG5cbiAgaGFzQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGFkZD86IGJvb2xlYW4pIHtcbiAgICBpZiAoYWRkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRcbiAgICAgICAgPyB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICA6IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzUmVzdWx0cyhyZXN1bHRzOiBTZWFyY2hSZXN1bHRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICghIXJlc3VsdHMucHJvZHVjdHMgJiYgcmVzdWx0cy5wcm9kdWN0cy5sZW5ndGggPiAwKSB8fFxuICAgICAgKCEhcmVzdWx0cy5zdWdnZXN0aW9ucyAmJiByZXN1bHRzLnN1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHx8XG4gICAgICAhIXJlc3VsdHMubWVzc2FnZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RSZXN1bHRzKFxuICAgIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHN1Z2dlc3Rpb25zIGZyb20gdGhlIGJhY2tlbmQuIEluIGNhc2UgdGhlcmUncyBubyBzdWdnZXN0aW9uXG4gICAqIGF2YWlsYWJsZSwgd2UgdHJ5IHRvIGdldCBhbiBleGFjdCBtYXRjaCBzdWdnZXN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgaWYgKCFjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICByZXR1cm4gb2YoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN1Z2dlc3Rpb25SZXN1bHRzKCkucGlwZShcbiAgICAgICAgbWFwKHJlcyA9PiByZXMubWFwKHN1Z2dlc3Rpb24gPT4gc3VnZ2VzdGlvbi52YWx1ZSkpLFxuICAgICAgICBzd2l0Y2hNYXAoc3VnZ2VzdGlvbnMgPT4ge1xuICAgICAgICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEV4YWN0U3VnZ2VzdGlvbihjb25maWcpLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChtYXRjaCA9PiAobWF0Y2ggPyBbbWF0Y2hdIDogW10pKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHN1Z2dlc3Rpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB3aGVuZXZlciB0aGVyZSBpcyBhdCBsZWFzdCAxIHByb2R1Y3QsIHdlIHNpbXVsYXRlXG4gICAqIGEgc3VnZ2VzdGlvbiB0byBwcm92aWRlIGVhc3kgYWNjZXNzIHRvIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0RXhhY3RTdWdnZXN0aW9uKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocHJvZHVjdFJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzICYmIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID4gMFxuICAgICAgICAgID8gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5leGFjdE1hdGNoJywge1xuICAgICAgICAgICAgICB0ZXJtOiBwcm9kdWN0UmVzdWx0LmZyZWVUZXh0U2VhcmNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG9mKG51bGwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWFyY2hNZXNzYWdlKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZylcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtwcm9kdWN0UmVzdWx0LCBzdWdnZXN0aW9uc10pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAoc3VnZ2VzdGlvbnMgJiYgc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5ub01hdGNoJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2Ugd2l0aCBhIGdpdmVuIHF1ZXJ5XG4gICAqL1xuICBwdWJsaWMgbGF1bmNoU2VhcmNoUGFnZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICBjeFJvdXRlOiAnc2VhcmNoJyxcbiAgICAgIHBhcmFtczogeyBxdWVyeSB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaFRyYW5zbGF0aW9uKFxuICAgIHRyYW5zbGF0aW9uS2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IGFueVxuICApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS50cmFuc2xhdGUodHJhbnNsYXRpb25LZXksIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
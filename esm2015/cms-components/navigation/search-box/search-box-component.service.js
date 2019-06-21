/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([productResults, suggestions, message]) => {
            return {
                products: productResults ? productResults.products : null,
                suggestions,
                message,
            };
        })), tap((/**
         * @param {?} results
         * @return {?}
         */
        results => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results)))));
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
            return this.searchService.getSuggestionResults().pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            res => res.map((/**
             * @param {?} suggestion
             * @return {?}
             */
            suggestion => suggestion.value)))), switchMap((/**
             * @param {?} suggestions
             * @return {?}
             */
            suggestions => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map((/**
                     * @param {?} match
                     * @return {?}
                     */
                    match => (match ? [match] : []))));
                }
                else {
                    return of(suggestions);
                }
            })));
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
        return this.getProductResults(config).pipe(switchMap((/**
         * @param {?} productResult
         * @return {?}
         */
        productResult => {
            return productResult.products && productResult.products.length > 0
                ? this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        })));
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getSearchMessage(config) {
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config)).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([productResult, suggestions]) => {
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        })));
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
/** @nocollapse */ SearchBoxComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.ɵɵinject(i1.SearchboxService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztNQUcvQyx1QkFBdUIsR0FBRyx1QkFBdUI7QUFLdkQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQUNwQyxZQUNTLGFBQStCLEVBQzVCLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxNQUFpQjtRQUhwQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDOzs7Ozs7Ozs7SUFPSixNQUFNLENBQUMsS0FBYSxFQUFFLE1BQXVCO1FBQzNDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFDRSxNQUFNLENBQUMsMEJBQTBCO1lBQ2pDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixFQUNoRDtZQUNBLE9BQU87U0FDUjtR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Uzs7Ozs7SUFhUCxrREFBc0M7Ozs7O0lBQ3RDLG1EQUF3Qzs7Ozs7SUFDeEMsdURBQWdEOzs7OztJQUNoRCwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5jb25zdCBIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUyA9ICdoYXMtc2VhcmNoYm94LXJlc3VsdHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hib3hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBzZWFyY2ggZm9yIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9ucyxcbiAgICogdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIGlzIHNldHVwIHRvIG5vdCBzZWFyY2ggZm9yXG4gICAqIHByb2R1Y3RzIG9yIHN1Z2dlc3Rpb25zLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0ICYmXG4gICAgICBxdWVyeS5sZW5ndGggPCBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3RcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hTdWdnZXN0aW9ucyhxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBTZWFyY2hSZXN1bHRzLiBXaGVuIHRoZXJlJ3MgYW55XG4gICAqIHJlc3VsdCwgdGhlIGJvZHkgdGFnIHdpbGwgZ2V0IGEgY2xhc3NuYW1lLCBzbyB0aGF0IHNwZWNpZmljIHN0eWxlXG4gICAqIHJ1bGVzIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgZ2V0UmVzdWx0cyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFNlYXJjaE1lc3NhZ2UoY29uZmlnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcHJvZHVjdFJlc3VsdHMsIHN1Z2dlc3Rpb25zLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0UmVzdWx0cyA/IHByb2R1Y3RSZXN1bHRzLnByb2R1Y3RzIDogbnVsbCxcbiAgICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICB0YXAocmVzdWx0cyA9PlxuICAgICAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgdGhpcy5oYXNSZXN1bHRzKHJlc3VsdHMpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBzZWFyY2hib3ggcmVzdWx0cywgc28gdGhhdCBvbGQgdmFsdWVzIGFyZVxuICAgKiBubyBsb25nZXIgZW1pdGVkIHVwb24gbmV4dCBzZWFyY2guXG4gICAqL1xuICBjbGVhclJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCBmYWxzZSk7XG4gIH1cblxuICBoYXNCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUJvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgYWRkPzogYm9vbGVhbikge1xuICAgIGlmIChhZGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFxuICAgICAgICA/IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIDogdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNSZXN1bHRzKHJlc3VsdHM6IFNlYXJjaFJlc3VsdHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKCEhcmVzdWx0cy5wcm9kdWN0cyAmJiByZXN1bHRzLnByb2R1Y3RzLmxlbmd0aCA+IDApIHx8XG4gICAgICAoISFyZXN1bHRzLnN1Z2dlc3Rpb25zICYmIHJlc3VsdHMuc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkgfHxcbiAgICAgICEhcmVzdWx0cy5tZXNzYWdlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFJlc3VsdHMoXG4gICAgY29uZmlnOiBTZWFyY2hCb3hDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgc3VnZ2VzdGlvbnMgZnJvbSB0aGUgYmFja2VuZC4gSW4gY2FzZSB0aGVyZSdzIG5vIHN1Z2dlc3Rpb25cbiAgICogYXZhaWxhYmxlLCB3ZSB0cnkgdG8gZ2V0IGFuIGV4YWN0IG1hdGNoIHN1Z2dlc3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBpZiAoIWNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3VnZ2VzdGlvblJlc3VsdHMoKS5waXBlKFxuICAgICAgICBtYXAocmVzID0+IHJlcy5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnZhbHVlKSksXG4gICAgICAgIHN3aXRjaE1hcChzdWdnZXN0aW9ucyA9PiB7XG4gICAgICAgICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhhY3RTdWdnZXN0aW9uKGNvbmZpZykucGlwZShcbiAgICAgICAgICAgICAgbWFwKG1hdGNoID0+IChtYXRjaCA/IFttYXRjaF0gOiBbXSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHdoZW5ldmVyIHRoZXJlIGlzIGF0IGxlYXN0IDEgcHJvZHVjdCwgd2Ugc2ltdWxhdGVcbiAgICogYSBzdWdnZXN0aW9uIHRvIHByb3ZpZGUgZWFzeSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRFeGFjdFN1Z2dlc3Rpb24oY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZykucGlwZShcbiAgICAgIHN3aXRjaE1hcChwcm9kdWN0UmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiYgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLmV4YWN0TWF0Y2gnLCB7XG4gICAgICAgICAgICAgIHRlcm06IHByb2R1Y3RSZXN1bHQuZnJlZVRleHRTZWFyY2gsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlYXJjaE1lc3NhZ2UoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKVxuICAgICkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3Byb2R1Y3RSZXN1bHQsIHN1Z2dlc3Rpb25zXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdCAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgIChzdWdnZXN0aW9ucyAmJiBzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLm5vTWF0Y2gnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb24oXG4gICAgdHJhbnNsYXRpb25LZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
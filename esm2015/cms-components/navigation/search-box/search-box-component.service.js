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
const DEFAULT_SEARCHBOCH_CONFIG = {
    minCharactersBeforeRequest: 1,
    maxProducts: 5,
    displaySuggestions: true,
    maxSuggestions: 5,
    displayProducts: true,
};
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
     * @param {?=} config
     * @return {?}
     */
    search(query, config = DEFAULT_SEARCHBOCH_CONFIG) {
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
     * @return {?}
     */
    getResults() {
        return combineLatest(this.productResults$, this.productSuggestions$, this.searchMessage$).pipe(map(([productResults, suggestions, message]) => {
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
     * @return {?}
     */
    get productResults$() {
        return this.searchService.getResults();
    }
    /**
     * @private
     * @return {?}
     */
    get productSuggestions$() {
        return this.searchService
            .getSuggestionResults()
            .pipe(map(res => res.map(suggestion => suggestion.value)));
    }
    /**
     * @private
     * @return {?}
     */
    get searchMessage$() {
        return combineLatest(this.productResults$, this.productSuggestions$).pipe(switchMap(([productResult, suggestions]) => {
            if (!productResult || !productResult.products || !suggestions) {
                return of(null);
            }
            else if (suggestions.length === 0 &&
                productResult.products.length === 0) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else if (suggestions.length === 0 &&
                productResult.products.length > 0) {
                return this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztNQUcvQyx5QkFBeUIsR0FBb0I7SUFDakQsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixXQUFXLEVBQUUsQ0FBQztJQUNkLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFLENBQUM7SUFDakIsZUFBZSxFQUFFLElBQUk7Q0FDdEI7O01BRUssdUJBQXVCLEdBQUcsdUJBQXVCO0FBS3ZELE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7SUFDcEMsWUFDUyxhQUErQixFQUM1QixjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMsTUFBaUI7UUFIcEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDMUIsQ0FBQzs7Ozs7Ozs7O0lBT0osTUFBTSxDQUNKLEtBQWEsRUFDYixTQUEwQix5QkFBeUI7UUFFbkQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFF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QUNyQixPQUFPLEVBQUUsUUFBUTtZQUNqQixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLGdCQUFnQixDQUN0QixjQUFzQixFQUN0QixPQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUFySkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBcEJDLGdCQUFnQjtZQURoQixjQUFjO1lBRWQsa0JBQWtCO1lBQ2xCLFNBQVM7Ozs7O0lBcUJQLGtEQUFzQzs7Ozs7SUFDdEMsbURBQXdDOzs7OztJQUN4Qyx1REFBZ0Q7Ozs7O0lBQ2hELDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIQk9DSF9DT05GSUc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDEsXG4gIG1heFByb2R1Y3RzOiA1LFxuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IHRydWUsXG4gIG1heFN1Z2dlc3Rpb25zOiA1LFxuICBkaXNwbGF5UHJvZHVjdHM6IHRydWUsXG59O1xuXG5jb25zdCBIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUyA9ICdoYXMtc2VhcmNoYm94LXJlc3VsdHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hib3hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBzZWFyY2ggZm9yIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9ucyxcbiAgICogdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIGlzIHNldHVwIHRvIG5vdCBzZWFyY2ggZm9yXG4gICAqIHByb2R1Y3RzIG9yIHN1Z2dlc3Rpb25zLlxuICAgKi9cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgY29uZmlnOiBTZWFyY2hCb3hDb25maWcgPSBERUZBVUxUX1NFQVJDSEJPQ0hfQ09ORklHXG4gICk6IHZvaWQge1xuICAgIGlmICghcXVlcnkgfHwgcXVlcnkgPT09ICcnKSB7XG4gICAgICB0aGlzLmNsZWFyUmVzdWx0cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdCAmJlxuICAgICAgcXVlcnkubGVuZ3RoIDwgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2gocXVlcnksIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhQcm9kdWN0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoU3VnZ2VzdGlvbnMocXVlcnksIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgU2VhcmNoUmVzdWx0cy4gV2hlbiB0aGVyZSdzIGFueVxuICAgKiByZXN1bHQsIHRoZSBib2R5IHRhZyB3aWxsIGdldCBhIGNsYXNzbmFtZSwgc28gdGhhdCBzcGVjaWZpYyBzdHlsZVxuICAgKiBydWxlcyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG4gIGdldFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnByb2R1Y3RSZXN1bHRzJCxcbiAgICAgIHRoaXMucHJvZHVjdFN1Z2dlc3Rpb25zJCxcbiAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZSRcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKFtwcm9kdWN0UmVzdWx0cywgc3VnZ2VzdGlvbnMsIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RSZXN1bHRzID8gcHJvZHVjdFJlc3VsdHMucHJvZHVjdHMgOiBudWxsLFxuICAgICAgICAgIHN1Z2dlc3Rpb25zLFxuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHRhcChyZXN1bHRzID0+XG4gICAgICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCB0aGlzLmhhc1Jlc3VsdHMocmVzdWx0cykpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaGJveCByZXN1bHRzLCBzbyB0aGF0IG9sZCB2YWx1ZXMgYXJlXG4gICAqIG5vIGxvbmdlciBlbWl0ZWQgdXBvbiBuZXh0IHNlYXJjaC5cbiAgICovXG4gIGNsZWFyUmVzdWx0cygpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIGZhbHNlKTtcbiAgfVxuXG4gIGhhc0JvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBhZGQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGFkZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkXG4gICAgICAgID8gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgICAgOiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc1Jlc3VsdHMocmVzdWx0czogU2VhcmNoUmVzdWx0cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAoISFyZXN1bHRzLnByb2R1Y3RzICYmIHJlc3VsdHMucHJvZHVjdHMubGVuZ3RoID4gMCkgfHxcbiAgICAgICghIXJlc3VsdHMuc3VnZ2VzdGlvbnMgJiYgcmVzdWx0cy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB8fFxuICAgICAgISFyZXN1bHRzLm1lc3NhZ2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcHJvZHVjdFJlc3VsdHMkKCk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHByb2R1Y3RTdWdnZXN0aW9ucyQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRTdWdnZXN0aW9uUmVzdWx0cygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnZhbHVlKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc2VhcmNoTWVzc2FnZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLnByb2R1Y3RSZXN1bHRzJCwgdGhpcy5wcm9kdWN0U3VnZ2VzdGlvbnMkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbcHJvZHVjdFJlc3VsdCwgc3VnZ2VzdGlvbnNdKSA9PiB7XG4gICAgICAgIGlmICghcHJvZHVjdFJlc3VsdCB8fCAhcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyB8fCAhc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAubm9NYXRjaCcpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5leGFjdE1hdGNoJywge1xuICAgICAgICAgICAgdGVybTogcHJvZHVjdFJlc3VsdC5mcmVlVGV4dFNlYXJjaCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb24oXG4gICAgdHJhbnNsYXRpb25LZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
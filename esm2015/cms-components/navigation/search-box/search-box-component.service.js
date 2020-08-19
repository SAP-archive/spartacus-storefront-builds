import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ProductSearchPage, RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
const HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
let SearchBoxComponentService = class SearchBoxComponentService {
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
     */
    getResults(config) {
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map(([productResults, suggestions, message]) => {
            return {
                products: productResults ? productResults.products : null,
                suggestions,
                message,
            };
        }), tap((results) => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results))));
    }
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    clearResults() {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    }
    hasBodyClass(className) {
        return this.winRef.document.body.classList.contains(className);
    }
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
    hasResults(results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    }
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
     */
    getProductSuggestions(config) {
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map((res) => res.map((suggestion) => suggestion.value)), switchMap((suggestions) => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map((match) => (match ? [match] : [])));
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
     */
    getExactSuggestion(config) {
        return this.getProductResults(config).pipe(switchMap((productResult) => {
            return productResult.products && productResult.products.length > 0
                ? this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        }));
    }
    getSearchMessage(config) {
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
        ]).pipe(switchMap(([productResult, suggestions]) => {
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                suggestions &&
                suggestions.length === 0) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        }));
    }
    /**
     * Navigates to the search result page with a given query
     */
    launchSearchPage(query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query },
        });
    }
    fetchTranslation(translationKey, options) {
        return this.translationService.translate(translationKey, options);
    }
};
SearchBoxComponentService.ctorParameters = () => [
    { type: SearchboxService },
    { type: RoutingService },
    { type: TranslationService },
    { type: WindowRef }
];
SearchBoxComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.ɵɵinject(i1.SearchboxService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
SearchBoxComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SearchBoxComponentService);
export { SearchBoxComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUdyRCxNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0FBS3hELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBQ3BDLFlBQ1MsYUFBK0IsRUFDNUIsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBSHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEtBQWEsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQ0UsTUFBTSxDQUFDLDBCQUEwQjtZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FB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Uzs7O0FBTGxCLHlCQUF5QjtJQUhyQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1cseUJBQXlCLENBb0xyQztTQXBMWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlYXJjaGJveFNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5jb25zdCBIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUyA9ICdoYXMtc2VhcmNoYm94LXJlc3VsdHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hib3hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBzZWFyY2ggZm9yIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9ucyxcbiAgICogdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIGlzIHNldHVwIHRvIG5vdCBzZWFyY2ggZm9yXG4gICAqIHByb2R1Y3RzIG9yIHN1Z2dlc3Rpb25zLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuY2xlYXJSZXN1bHRzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0ICYmXG4gICAgICBxdWVyeS5sZW5ndGggPCBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3RcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hTdWdnZXN0aW9ucyhxdWVyeSwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBTZWFyY2hSZXN1bHRzLiBXaGVuIHRoZXJlJ3MgYW55XG4gICAqIHJlc3VsdCwgdGhlIGJvZHkgdGFnIHdpbGwgZ2V0IGEgY2xhc3NuYW1lLCBzbyB0aGF0IHNwZWNpZmljIHN0eWxlXG4gICAqIHJ1bGVzIGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgZ2V0UmVzdWx0cyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFNlYXJjaE1lc3NhZ2UoY29uZmlnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcHJvZHVjdFJlc3VsdHMsIHN1Z2dlc3Rpb25zLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0UmVzdWx0cyA/IHByb2R1Y3RSZXN1bHRzLnByb2R1Y3RzIDogbnVsbCxcbiAgICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICB0YXAoKHJlc3VsdHMpID0+XG4gICAgICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCB0aGlzLmhhc1Jlc3VsdHMocmVzdWx0cykpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaGJveCByZXN1bHRzLCBzbyB0aGF0IG9sZCB2YWx1ZXMgYXJlXG4gICAqIG5vIGxvbmdlciBlbWl0ZWQgdXBvbiBuZXh0IHNlYXJjaC5cbiAgICovXG4gIGNsZWFyUmVzdWx0cygpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIGZhbHNlKTtcbiAgfVxuXG4gIGhhc0JvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBhZGQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGFkZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkXG4gICAgICAgID8gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgICAgOiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc1Jlc3VsdHMocmVzdWx0czogU2VhcmNoUmVzdWx0cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAoISFyZXN1bHRzLnByb2R1Y3RzICYmIHJlc3VsdHMucHJvZHVjdHMubGVuZ3RoID4gMCkgfHxcbiAgICAgICghIXJlc3VsdHMuc3VnZ2VzdGlvbnMgJiYgcmVzdWx0cy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB8fFxuICAgICAgISFyZXN1bHRzLm1lc3NhZ2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UmVzdWx0cyhcbiAgICBjb25maWc6IFNlYXJjaEJveENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2Yoe30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBzdWdnZXN0aW9ucyBmcm9tIHRoZSBiYWNrZW5kLiBJbiBjYXNlIHRoZXJlJ3Mgbm8gc3VnZ2VzdGlvblxuICAgKiBhdmFpbGFibGUsIHdlIHRyeSB0byBnZXQgYW4gZXhhY3QgbWF0Y2ggc3VnZ2VzdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIGlmICghY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdWdnZXN0aW9uUmVzdWx0cygpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzKSA9PiByZXMubWFwKChzdWdnZXN0aW9uKSA9PiBzdWdnZXN0aW9uLnZhbHVlKSksXG4gICAgICAgIHN3aXRjaE1hcCgoc3VnZ2VzdGlvbnMpID0+IHtcbiAgICAgICAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGFjdFN1Z2dlc3Rpb24oY29uZmlnKS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKG1hdGNoKSA9PiAobWF0Y2ggPyBbbWF0Y2hdIDogW10pKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHN1Z2dlc3Rpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB3aGVuZXZlciB0aGVyZSBpcyBhdCBsZWFzdCAxIHByb2R1Y3QsIHdlIHNpbXVsYXRlXG4gICAqIGEgc3VnZ2VzdGlvbiB0byBwcm92aWRlIGVhc3kgYWNjZXNzIHRvIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0RXhhY3RTdWdnZXN0aW9uKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3RSZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiYgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLmV4YWN0TWF0Y2gnLCB7XG4gICAgICAgICAgICAgIHRlcm06IHByb2R1Y3RSZXN1bHQuZnJlZVRleHRTZWFyY2gsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlYXJjaE1lc3NhZ2UoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZyksXG4gICAgXSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3Byb2R1Y3RSZXN1bHQsIHN1Z2dlc3Rpb25zXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdCAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgIHN1Z2dlc3Rpb25zICYmXG4gICAgICAgICAgc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLm5vTWF0Y2gnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb24oXG4gICAgdHJhbnNsYXRpb25LZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
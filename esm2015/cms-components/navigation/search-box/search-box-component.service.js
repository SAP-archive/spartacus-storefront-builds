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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUdyRCxNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0FBS3hELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBQ3BDLFlBQ1MsYUFBK0IsRUFDNUIsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBSHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEtBQWEsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQ0UsTUFBTSxDQUFDLDBCQUEwQjtZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FB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QVM7OztBQUxsQix5QkFBeUI7SUFIckMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHlCQUF5QixDQXNMckM7U0F0TFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWFyY2hib3hTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcblxuY29uc3QgSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MgPSAnaGFzLXNlYXJjaGJveC1yZXN1bHRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTogU2VhcmNoYm94U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyB0aGUgc2VhcmNoIGZvciBwcm9kdWN0cyBhbmQgc3VnZ2VzdGlvbnMsXG4gICAqIHVubGVzcyB0aGUgY29uZmlndXJhdGlvbiBpcyBzZXR1cCB0byBub3Qgc2VhcmNoIGZvclxuICAgKiBwcm9kdWN0cyBvciBzdWdnZXN0aW9ucy5cbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghcXVlcnkgfHwgcXVlcnkgPT09ICcnKSB7XG4gICAgICB0aGlzLmNsZWFyUmVzdWx0cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdCAmJlxuICAgICAgcXVlcnkubGVuZ3RoIDwgY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2gocXVlcnksIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhQcm9kdWN0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoU3VnZ2VzdGlvbnMocXVlcnksIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgU2VhcmNoUmVzdWx0cy4gV2hlbiB0aGVyZSdzIGFueVxuICAgKiByZXN1bHQsIHRoZSBib2R5IHRhZyB3aWxsIGdldCBhIGNsYXNzbmFtZSwgc28gdGhhdCBzcGVjaWZpYyBzdHlsZVxuICAgKiBydWxlcyBjYW4gYmUgYXBwbGllZC5cbiAgICovXG4gIGdldFJlc3VsdHMoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRTZWFyY2hNZXNzYWdlKGNvbmZpZyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3Byb2R1Y3RSZXN1bHRzLCBzdWdnZXN0aW9ucywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdFJlc3VsdHMgPyBwcm9kdWN0UmVzdWx0cy5wcm9kdWN0cyA6IG51bGwsXG4gICAgICAgICAgc3VnZ2VzdGlvbnMsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgdGFwKChyZXN1bHRzKSA9PlxuICAgICAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgdGhpcy5oYXNSZXN1bHRzKHJlc3VsdHMpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBzZWFyY2hib3ggcmVzdWx0cywgc28gdGhhdCBvbGQgdmFsdWVzIGFyZVxuICAgKiBubyBsb25nZXIgZW1pdGVkIHVwb24gbmV4dCBzZWFyY2guXG4gICAqL1xuICBjbGVhclJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCBmYWxzZSk7XG4gIH1cblxuICBoYXNCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUJvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgYWRkPzogYm9vbGVhbikge1xuICAgIGlmIChhZGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFxuICAgICAgICA/IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIDogdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGhhc1Jlc3VsdHMocmVzdWx0czogU2VhcmNoUmVzdWx0cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAoISFyZXN1bHRzLnByb2R1Y3RzICYmIHJlc3VsdHMucHJvZHVjdHMubGVuZ3RoID4gMCkgfHxcbiAgICAgICghIXJlc3VsdHMuc3VnZ2VzdGlvbnMgJiYgcmVzdWx0cy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB8fFxuICAgICAgISFyZXN1bHRzLm1lc3NhZ2VcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RSZXN1bHRzKFxuICAgIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHN1Z2dlc3Rpb25zIGZyb20gdGhlIGJhY2tlbmQuIEluIGNhc2UgdGhlcmUncyBubyBzdWdnZXN0aW9uXG4gICAqIGF2YWlsYWJsZSwgd2UgdHJ5IHRvIGdldCBhbiBleGFjdCBtYXRjaCBzdWdnZXN0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RTdWdnZXN0aW9ucyhcbiAgICBjb25maWc6IFNlYXJjaEJveENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgaWYgKCFjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICByZXR1cm4gb2YoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN1Z2dlc3Rpb25SZXN1bHRzKCkucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHJlcy5tYXAoKHN1Z2dlc3Rpb24pID0+IHN1Z2dlc3Rpb24udmFsdWUpKSxcbiAgICAgICAgc3dpdGNoTWFwKChzdWdnZXN0aW9ucykgPT4ge1xuICAgICAgICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEV4YWN0U3VnZ2VzdGlvbihjb25maWcpLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobWF0Y2gpID0+IChtYXRjaCA/IFttYXRjaF0gOiBbXSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHdoZW5ldmVyIHRoZXJlIGlzIGF0IGxlYXN0IDEgcHJvZHVjdCwgd2Ugc2ltdWxhdGVcbiAgICogYSBzdWdnZXN0aW9uIHRvIHByb3ZpZGUgZWFzeSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEV4YWN0U3VnZ2VzdGlvbihjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0UmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzICYmIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID4gMFxuICAgICAgICAgID8gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5leGFjdE1hdGNoJywge1xuICAgICAgICAgICAgICB0ZXJtOiBwcm9kdWN0UmVzdWx0LmZyZWVUZXh0U2VhcmNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG9mKG51bGwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlYXJjaE1lc3NhZ2UoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZyksXG4gICAgXSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3Byb2R1Y3RSZXN1bHQsIHN1Z2dlc3Rpb25zXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdCAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgIHN1Z2dlc3Rpb25zICYmXG4gICAgICAgICAgc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoVHJhbnNsYXRpb24oJ3NlYXJjaEJveC5oZWxwLm5vTWF0Y2gnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb24oXG4gICAgdHJhbnNsYXRpb25LZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
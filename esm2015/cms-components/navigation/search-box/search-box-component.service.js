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
    /**
     * For search results model, it returns true when:
     * * there is any product OR
     * * the is any search suggestion OR
     * * there is a message.
     *
     * Otherwise it returns false.
     */
    hasResults(results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    }
    /**
     * Emits product search results in case when the config property `displayProducts` is true.
     * Otherwise it emits an empty object.
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
     * Whenever there is at least 1 product, we simulate
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
    /**
     * Emits a 'no match' message, in case the product search results and search suggestions are empty.
     * Otherwise it emits null.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUdyRCxNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0FBS3hELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBQ3BDLFlBQ1MsYUFBK0IsRUFDNUIsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBSHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEtBQWEsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQ0UsTUFBTSxDQUFDLDBCQUEwQjtZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FB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eUIsZ0JBQWdCO1lBQ1osY0FBYztZQUNWLGtCQUFrQjtZQUM5QixTQUFTOzs7QUFMbEIseUJBQXlCO0lBSHJDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx5QkFBeUIsQ0FzTXJDO1NBdE1ZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTID0gJ2hhcy1zZWFyY2hib3gtcmVzdWx0cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIHNlYXJjaCBmb3IgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zLFxuICAgKiB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gaXMgc2V0dXAgdG8gbm90IHNlYXJjaCBmb3JcbiAgICogcHJvZHVjdHMgb3Igc3VnZ2VzdGlvbnMuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5ID09PSAnJykge1xuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QgJiZcbiAgICAgIHF1ZXJ5Lmxlbmd0aCA8IGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4UHJvZHVjdHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaFN1Z2dlc3Rpb25zKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNlYXJjaFJlc3VsdHMuIFdoZW4gdGhlcmUncyBhbnlcbiAgICogcmVzdWx0LCB0aGUgYm9keSB0YWcgd2lsbCBnZXQgYSBjbGFzc25hbWUsIHNvIHRoYXQgc3BlY2lmaWMgc3R5bGVcbiAgICogcnVsZXMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuICBnZXRSZXN1bHRzKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0U2VhcmNoTWVzc2FnZShjb25maWcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtwcm9kdWN0UmVzdWx0cywgc3VnZ2VzdGlvbnMsIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RSZXN1bHRzID8gcHJvZHVjdFJlc3VsdHMucHJvZHVjdHMgOiBudWxsLFxuICAgICAgICAgIHN1Z2dlc3Rpb25zLFxuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHRhcCgocmVzdWx0cykgPT5cbiAgICAgICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIHRoaXMuaGFzUmVzdWx0cyhyZXN1bHRzKSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoYm94IHJlc3VsdHMsIHNvIHRoYXQgb2xkIHZhbHVlcyBhcmVcbiAgICogbm8gbG9uZ2VyIGVtaXRlZCB1cG9uIG5leHQgc2VhcmNoLlxuICAgKi9cbiAgY2xlYXJSZXN1bHRzKCkge1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgICB0aGlzLnRvZ2dsZUJvZHlDbGFzcyhIQVNfU0VBUkNIX1JFU1VMVF9DTEFTUywgZmFsc2UpO1xuICB9XG5cbiAgaGFzQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGFkZD86IGJvb2xlYW4pIHtcbiAgICBpZiAoYWRkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRcbiAgICAgICAgPyB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICA6IHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3Igc2VhcmNoIHJlc3VsdHMgbW9kZWwsIGl0IHJldHVybnMgdHJ1ZSB3aGVuOlxuICAgKiAqIHRoZXJlIGlzIGFueSBwcm9kdWN0IE9SXG4gICAqICogdGhlIGlzIGFueSBzZWFyY2ggc3VnZ2VzdGlvbiBPUlxuICAgKiAqIHRoZXJlIGlzIGEgbWVzc2FnZS5cbiAgICpcbiAgICogT3RoZXJ3aXNlIGl0IHJldHVybnMgZmFsc2UuXG4gICAqL1xuICBwcm90ZWN0ZWQgaGFzUmVzdWx0cyhyZXN1bHRzOiBTZWFyY2hSZXN1bHRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICghIXJlc3VsdHMucHJvZHVjdHMgJiYgcmVzdWx0cy5wcm9kdWN0cy5sZW5ndGggPiAwKSB8fFxuICAgICAgKCEhcmVzdWx0cy5zdWdnZXN0aW9ucyAmJiByZXN1bHRzLnN1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHx8XG4gICAgICAhIXJlc3VsdHMubWVzc2FnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgcHJvZHVjdCBzZWFyY2ggcmVzdWx0cyBpbiBjYXNlIHdoZW4gdGhlIGNvbmZpZyBwcm9wZXJ0eSBgZGlzcGxheVByb2R1Y3RzYCBpcyB0cnVlLlxuICAgKiBPdGhlcndpc2UgaXQgZW1pdHMgYW4gZW1wdHkgb2JqZWN0LlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RSZXN1bHRzKFxuICAgIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHN1Z2dlc3Rpb25zIGZyb20gdGhlIGJhY2tlbmQuIEluIGNhc2UgdGhlcmUncyBubyBzdWdnZXN0aW9uXG4gICAqIGF2YWlsYWJsZSwgd2UgdHJ5IHRvIGdldCBhbiBleGFjdCBtYXRjaCBzdWdnZXN0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RTdWdnZXN0aW9ucyhcbiAgICBjb25maWc6IFNlYXJjaEJveENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgaWYgKCFjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICByZXR1cm4gb2YoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN1Z2dlc3Rpb25SZXN1bHRzKCkucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHJlcy5tYXAoKHN1Z2dlc3Rpb24pID0+IHN1Z2dlc3Rpb24udmFsdWUpKSxcbiAgICAgICAgc3dpdGNoTWFwKChzdWdnZXN0aW9ucykgPT4ge1xuICAgICAgICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEV4YWN0U3VnZ2VzdGlvbihjb25maWcpLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobWF0Y2gpID0+IChtYXRjaCA/IFttYXRjaF0gOiBbXSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW5ldmVyIHRoZXJlIGlzIGF0IGxlYXN0IDEgcHJvZHVjdCwgd2Ugc2ltdWxhdGVcbiAgICogYSBzdWdnZXN0aW9uIHRvIHByb3ZpZGUgZWFzeSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEV4YWN0U3VnZ2VzdGlvbihjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0UmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzICYmIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID4gMFxuICAgICAgICAgID8gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5leGFjdE1hdGNoJywge1xuICAgICAgICAgICAgICB0ZXJtOiBwcm9kdWN0UmVzdWx0LmZyZWVUZXh0U2VhcmNoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG9mKG51bGwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgJ25vIG1hdGNoJyBtZXNzYWdlLCBpbiBjYXNlIHRoZSBwcm9kdWN0IHNlYXJjaCByZXN1bHRzIGFuZCBzZWFyY2ggc3VnZ2VzdGlvbnMgYXJlIGVtcHR5LlxuICAgKiBPdGhlcndpc2UgaXQgZW1pdHMgbnVsbC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTZWFyY2hNZXNzYWdlKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtwcm9kdWN0UmVzdWx0LCBzdWdnZXN0aW9uc10pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQgJiZcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICBzdWdnZXN0aW9ucyAmJlxuICAgICAgICAgIHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFRyYW5zbGF0aW9uKCdzZWFyY2hCb3guaGVscC5ub01hdGNoJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2Ugd2l0aCBhIGdpdmVuIHF1ZXJ5XG4gICAqL1xuICBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIGN4Um91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb24oXG4gICAgdHJhbnNsYXRpb25LZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
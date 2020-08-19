import { ProductSearchPage, RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SearchBoxConfig, SearchResults } from './search-box.model';
export declare class SearchBoxComponentService {
    searchService: SearchboxService;
    protected routingService: RoutingService;
    protected translationService: TranslationService;
    protected winRef: WindowRef;
    constructor(searchService: SearchboxService, routingService: RoutingService, translationService: TranslationService, winRef: WindowRef);
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     */
    search(query: string, config: SearchBoxConfig): void;
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    getResults(config: SearchBoxConfig): Observable<SearchResults>;
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    clearResults(): void;
    hasBodyClass(className: string): boolean;
    toggleBodyClass(className: string, add?: boolean): void;
    protected hasResults(results: SearchResults): boolean;
    protected getProductResults(config: SearchBoxConfig): Observable<ProductSearchPage>;
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    protected getProductSuggestions(config: SearchBoxConfig): Observable<string[]>;
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    protected getExactSuggestion(config: SearchBoxConfig): Observable<string>;
    protected getSearchMessage(config: SearchBoxConfig): Observable<string>;
    /**
     * Navigates to the search result page with a given query
     */
    launchSearchPage(query: string): void;
    private fetchTranslation;
}

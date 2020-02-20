import { RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
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
    private hasResults;
    private getProductResults;
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    private getProductSuggestions;
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    private getExactSuggestion;
    private getSearchMessage;
    /**
     * Navigates to the search result page with a given query
     */
    launchSearchPage(query: string): void;
    private fetchTranslation;
}

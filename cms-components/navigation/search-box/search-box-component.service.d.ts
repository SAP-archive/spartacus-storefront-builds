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
    search(query: string, config?: SearchBoxConfig): void;
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    getResults(): Observable<SearchResults>;
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    clearResults(): void;
    hasBodyClass(className: string): boolean;
    toggleBodyClass(className: string, add?: boolean): void;
    private hasResults;
    private readonly productResults$;
    private readonly productSuggestions$;
    private readonly searchMessage$;
    /**
     * Navigates to the search result page with a given query
     */
    launchSearchPage(query: string): void;
    private fetchTranslation;
}

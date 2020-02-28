import { RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SearchBoxConfig, SearchResults } from './search-box.model';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchBoxComponentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFNlYXJjaGJveFNlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgICBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hib3hTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBjb25zdHJ1Y3RvcihzZWFyY2hTZXJ2aWNlOiBTZWFyY2hib3hTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLCB3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHNlYXJjaCBmb3IgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zLFxuICAgICAqIHVubGVzcyB0aGUgY29uZmlndXJhdGlvbiBpcyBzZXR1cCB0byBub3Qgc2VhcmNoIGZvclxuICAgICAqIHByb2R1Y3RzIG9yIHN1Z2dlc3Rpb25zLlxuICAgICAqL1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNlYXJjaFJlc3VsdHMuIFdoZW4gdGhlcmUncyBhbnlcbiAgICAgKiByZXN1bHQsIHRoZSBib2R5IHRhZyB3aWxsIGdldCBhIGNsYXNzbmFtZSwgc28gdGhhdCBzcGVjaWZpYyBzdHlsZVxuICAgICAqIHJ1bGVzIGNhbiBiZSBhcHBsaWVkLlxuICAgICAqL1xuICAgIGdldFJlc3VsdHMoY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+O1xuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgc2VhcmNoYm94IHJlc3VsdHMsIHNvIHRoYXQgb2xkIHZhbHVlcyBhcmVcbiAgICAgKiBubyBsb25nZXIgZW1pdGVkIHVwb24gbmV4dCBzZWFyY2guXG4gICAgICovXG4gICAgY2xlYXJSZXN1bHRzKCk6IHZvaWQ7XG4gICAgaGFzQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICB0b2dnbGVCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGFkZD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIHByaXZhdGUgaGFzUmVzdWx0cztcbiAgICBwcml2YXRlIGdldFByb2R1Y3RSZXN1bHRzO1xuICAgIC8qKlxuICAgICAqIExvYWRzIHN1Z2dlc3Rpb25zIGZyb20gdGhlIGJhY2tlbmQuIEluIGNhc2UgdGhlcmUncyBubyBzdWdnZXN0aW9uXG4gICAgICogYXZhaWxhYmxlLCB3ZSB0cnkgdG8gZ2V0IGFuIGV4YWN0IG1hdGNoIHN1Z2dlc3Rpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0U3VnZ2VzdGlvbnM7XG4gICAgLyoqXG4gICAgICogd2hlbmV2ZXIgdGhlcmUgaXMgYXQgbGVhc3QgMSBwcm9kdWN0LCB3ZSBzaW11bGF0ZVxuICAgICAqIGEgc3VnZ2VzdGlvbiB0byBwcm92aWRlIGVhc3kgYWNjZXNzIHRvIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEV4YWN0U3VnZ2VzdGlvbjtcbiAgICBwcml2YXRlIGdldFNlYXJjaE1lc3NhZ2U7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2Ugd2l0aCBhIGdpdmVuIHF1ZXJ5XG4gICAgICovXG4gICAgbGF1bmNoU2VhcmNoUGFnZShxdWVyeTogc3RyaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIGZldGNoVHJhbnNsYXRpb247XG59XG4iXX0=
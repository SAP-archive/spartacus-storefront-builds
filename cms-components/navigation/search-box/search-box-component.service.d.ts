import { ProductSearchPage, RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
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
    /**
     * For search results model, it returns true when:
     * * there is any product OR
     * * the is any search suggestion OR
     * * there is a message.
     *
     * Otherwise it returns false.
     */
    protected hasResults(results: SearchResults): boolean;
    /**
     * Emits product search results in case when the config property `displayProducts` is true.
     * Otherwise it emits an empty object.
     */
    protected getProductResults(config: SearchBoxConfig): Observable<ProductSearchPage>;
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    protected getProductSuggestions(config: SearchBoxConfig): Observable<string[]>;
    /**
     * Whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    protected getExactSuggestion(config: SearchBoxConfig): Observable<string>;
    /**
     * Emits a 'no match' message, in case the product search results and search suggestions are empty.
     * Otherwise it emits null.
     */
    protected getSearchMessage(config: SearchBoxConfig): Observable<string>;
    /**
     * Navigates to the search result page with a given query
     */
    launchSearchPage(query: string): void;
    private fetchTranslation;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchBoxComponentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UsIFJvdXRpbmdTZXJ2aWNlLCBTZWFyY2hib3hTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gICAgc2VhcmNoU2VydmljZTogU2VhcmNoYm94U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgY29uc3RydWN0b3Ioc2VhcmNoU2VydmljZTogU2VhcmNoYm94U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBzZWFyY2ggZm9yIHByb2R1Y3RzIGFuZCBzdWdnZXN0aW9ucyxcbiAgICAgKiB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gaXMgc2V0dXAgdG8gbm90IHNlYXJjaCBmb3JcbiAgICAgKiBwcm9kdWN0cyBvciBzdWdnZXN0aW9ucy5cbiAgICAgKi9cbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBTZWFyY2hSZXN1bHRzLiBXaGVuIHRoZXJlJ3MgYW55XG4gICAgICogcmVzdWx0LCB0aGUgYm9keSB0YWcgd2lsbCBnZXQgYSBjbGFzc25hbWUsIHNvIHRoYXQgc3BlY2lmaWMgc3R5bGVcbiAgICAgKiBydWxlcyBjYW4gYmUgYXBwbGllZC5cbiAgICAgKi9cbiAgICBnZXRSZXN1bHRzKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPjtcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIHNlYXJjaGJveCByZXN1bHRzLCBzbyB0aGF0IG9sZCB2YWx1ZXMgYXJlXG4gICAgICogbm8gbG9uZ2VyIGVtaXRlZCB1cG9uIG5leHQgc2VhcmNoLlxuICAgICAqL1xuICAgIGNsZWFyUmVzdWx0cygpOiB2b2lkO1xuICAgIGhhc0JvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgdG9nZ2xlQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBhZGQ/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBGb3Igc2VhcmNoIHJlc3VsdHMgbW9kZWwsIGl0IHJldHVybnMgdHJ1ZSB3aGVuOlxuICAgICAqICogdGhlcmUgaXMgYW55IHByb2R1Y3QgT1JcbiAgICAgKiAqIHRoZSBpcyBhbnkgc2VhcmNoIHN1Z2dlc3Rpb24gT1JcbiAgICAgKiAqIHRoZXJlIGlzIGEgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGZhbHNlLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNSZXN1bHRzKHJlc3VsdHM6IFNlYXJjaFJlc3VsdHMpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHByb2R1Y3Qgc2VhcmNoIHJlc3VsdHMgaW4gY2FzZSB3aGVuIHRoZSBjb25maWcgcHJvcGVydHkgYGRpc3BsYXlQcm9kdWN0c2AgaXMgdHJ1ZS5cbiAgICAgKiBPdGhlcndpc2UgaXQgZW1pdHMgYW4gZW1wdHkgb2JqZWN0LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcm9kdWN0UmVzdWx0cyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICAgIC8qKlxuICAgICAqIExvYWRzIHN1Z2dlc3Rpb25zIGZyb20gdGhlIGJhY2tlbmQuIEluIGNhc2UgdGhlcmUncyBubyBzdWdnZXN0aW9uXG4gICAgICogYXZhaWxhYmxlLCB3ZSB0cnkgdG8gZ2V0IGFuIGV4YWN0IG1hdGNoIHN1Z2dlc3Rpb24uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIC8qKlxuICAgICAqIFdoZW5ldmVyIHRoZXJlIGlzIGF0IGxlYXN0IDEgcHJvZHVjdCwgd2Ugc2ltdWxhdGVcbiAgICAgKiBhIHN1Z2dlc3Rpb24gdG8gcHJvdmlkZSBlYXN5IGFjY2VzcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEV4YWN0U3VnZ2VzdGlvbihjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBhICdubyBtYXRjaCcgbWVzc2FnZSwgaW4gY2FzZSB0aGUgcHJvZHVjdCBzZWFyY2ggcmVzdWx0cyBhbmQgc2VhcmNoIHN1Z2dlc3Rpb25zIGFyZSBlbXB0eS5cbiAgICAgKiBPdGhlcndpc2UgaXQgZW1pdHMgbnVsbC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2VhcmNoTWVzc2FnZShjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICAgKi9cbiAgICBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkO1xuICAgIHByaXZhdGUgZmV0Y2hUcmFuc2xhdGlvbjtcbn1cbiJdfQ==
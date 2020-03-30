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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchBoxComponentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgU2VhcmNoYm94U2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uge1xuICAgIHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIGNvbnN0cnVjdG9yKHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHdpblJlZjogV2luZG93UmVmKTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgc2VhcmNoIGZvciBwcm9kdWN0cyBhbmQgc3VnZ2VzdGlvbnMsXG4gICAgICogdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIGlzIHNldHVwIHRvIG5vdCBzZWFyY2ggZm9yXG4gICAgICogcHJvZHVjdHMgb3Igc3VnZ2VzdGlvbnMuXG4gICAgICovXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgU2VhcmNoUmVzdWx0cy4gV2hlbiB0aGVyZSdzIGFueVxuICAgICAqIHJlc3VsdCwgdGhlIGJvZHkgdGFnIHdpbGwgZ2V0IGEgY2xhc3NuYW1lLCBzbyB0aGF0IHNwZWNpZmljIHN0eWxlXG4gICAgICogcnVsZXMgY2FuIGJlIGFwcGxpZWQuXG4gICAgICovXG4gICAgZ2V0UmVzdWx0cyhjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz47XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBzZWFyY2hib3ggcmVzdWx0cywgc28gdGhhdCBvbGQgdmFsdWVzIGFyZVxuICAgICAqIG5vIGxvbmdlciBlbWl0ZWQgdXBvbiBuZXh0IHNlYXJjaC5cbiAgICAgKi9cbiAgICBjbGVhclJlc3VsdHMoKTogdm9pZDtcbiAgICBoYXNCb2R5Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIHRvZ2dsZUJvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgYWRkPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgcHJpdmF0ZSBoYXNSZXN1bHRzO1xuICAgIHByaXZhdGUgZ2V0UHJvZHVjdFJlc3VsdHM7XG4gICAgLyoqXG4gICAgICogTG9hZHMgc3VnZ2VzdGlvbnMgZnJvbSB0aGUgYmFja2VuZC4gSW4gY2FzZSB0aGVyZSdzIG5vIHN1Z2dlc3Rpb25cbiAgICAgKiBhdmFpbGFibGUsIHdlIHRyeSB0byBnZXQgYW4gZXhhY3QgbWF0Y2ggc3VnZ2VzdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFByb2R1Y3RTdWdnZXN0aW9ucztcbiAgICAvKipcbiAgICAgKiB3aGVuZXZlciB0aGVyZSBpcyBhdCBsZWFzdCAxIHByb2R1Y3QsIHdlIHNpbXVsYXRlXG4gICAgICogYSBzdWdnZXN0aW9uIHRvIHByb3ZpZGUgZWFzeSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RXhhY3RTdWdnZXN0aW9uO1xuICAgIHByaXZhdGUgZ2V0U2VhcmNoTWVzc2FnZTtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHNlYXJjaCByZXN1bHQgcGFnZSB3aXRoIGEgZ2l2ZW4gcXVlcnlcbiAgICAgKi9cbiAgICBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkO1xuICAgIHByaXZhdGUgZmV0Y2hUcmFuc2xhdGlvbjtcbn1cbiJdfQ==
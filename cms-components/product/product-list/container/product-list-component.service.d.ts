import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService, LanguageService, ProductSearchPage, ProductSearchService, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ProductListComponentService {
    protected productSearchService: ProductSearchService;
    protected routing: RoutingService;
    protected activatedRoute: ActivatedRoute;
    protected currencyService: CurrencyService;
    protected languageService: LanguageService;
    protected router: Router;
    protected defaultPageSize: number;
    protected sub: Subscription;
    protected readonly RELEVANCE_ALLCATEGORIES = ":relevance:allCategories:";
    constructor(productSearchService: ProductSearchService, routing: RoutingService, activatedRoute: ActivatedRoute, currencyService: CurrencyService, languageService: LanguageService, router: Router);
    private searchResults$;
    private searchByRouting$;
    /**
     * This stream should be used only on the Product Listing Page.
     *
     * It not only emits search results, but also performs a search on every change
     * of the route (i.e. route params or query params).
     *
     * When a user leaves the PLP route, the PLP component unsubscribes from this stream
     * so no longer the search is performed on route change.
     */
    readonly model$: Observable<ProductSearchPage>;
    private getCriteriaFromRoute;
    private getQueryFromRouteParams;
    private search;
    private getSearchConfig;
    setQuery(query: string): void;
    viewPage(pageNumber: number): void;
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber: number): void;
    sort(sortCode: string): void;
    private setQueryParams;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductListComponentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UsIFByb2R1Y3RTZWFyY2hQYWdlLCBQcm9kdWN0U2VhcmNoU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgcHJvdGVjdGVkIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRQYWdlU2l6ZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgPSBcIjpyZWxldmFuY2U6YWxsQ2F0ZWdvcmllczpcIjtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlLCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIHByaXZhdGUgc2VhcmNoUmVzdWx0cyQ7XG4gICAgcHJpdmF0ZSBzZWFyY2hCeVJvdXRpbmckO1xuICAgIC8qKlxuICAgICAqIFRoaXMgc3RyZWFtIHNob3VsZCBiZSB1c2VkIG9ubHkgb24gdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLlxuICAgICAqXG4gICAgICogSXQgbm90IG9ubHkgZW1pdHMgc2VhcmNoIHJlc3VsdHMsIGJ1dCBhbHNvIHBlcmZvcm1zIGEgc2VhcmNoIG9uIGV2ZXJ5IGNoYW5nZVxuICAgICAqIG9mIHRoZSByb3V0ZSAoaS5lLiByb3V0ZSBwYXJhbXMgb3IgcXVlcnkgcGFyYW1zKS5cbiAgICAgKlxuICAgICAqIFdoZW4gYSB1c2VyIGxlYXZlcyB0aGUgUExQIHJvdXRlLCB0aGUgUExQIGNvbXBvbmVudCB1bnN1YnNjcmliZXMgZnJvbSB0aGlzIHN0cmVhbVxuICAgICAqIHNvIG5vIGxvbmdlciB0aGUgc2VhcmNoIGlzIHBlcmZvcm1lZCBvbiByb3V0ZSBjaGFuZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZWwkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgICBwcml2YXRlIGdldENyaXRlcmlhRnJvbVJvdXRlO1xuICAgIHByaXZhdGUgZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXM7XG4gICAgcHJpdmF0ZSBzZWFyY2g7XG4gICAgcHJpdmF0ZSBnZXRTZWFyY2hDb25maWc7XG4gICAgc2V0UXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQ7XG4gICAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbXMgZnJvbSBhIGdpdmVuIHBhZ2Ugd2l0aG91dCB1c2luZyBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgZ2V0UGFnZUl0ZW1zKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgc29ydChzb3J0Q29kZTogc3RyaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIHNldFF1ZXJ5UGFyYW1zO1xufVxuIl19
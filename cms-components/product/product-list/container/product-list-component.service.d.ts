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
    clearSearchResults(): void;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductListComponentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgUHJvZHVjdFNlYXJjaFBhZ2UsIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdFBhZ2VTaXplOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyA9IFwiOnJlbGV2YW5jZTphbGxDYXRlZ29yaWVzOlwiO1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSwgcm91dGluZzogUm91dGluZ1NlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLCByb3V0ZXI6IFJvdXRlcik7XG4gICAgcHJpdmF0ZSBzZWFyY2hSZXN1bHRzJDtcbiAgICBwcml2YXRlIHNlYXJjaEJ5Um91dGluZyQ7XG4gICAgLyoqXG4gICAgICogVGhpcyBzdHJlYW0gc2hvdWxkIGJlIHVzZWQgb25seSBvbiB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gICAgICpcbiAgICAgKiBJdCBub3Qgb25seSBlbWl0cyBzZWFyY2ggcmVzdWx0cywgYnV0IGFsc28gcGVyZm9ybXMgYSBzZWFyY2ggb24gZXZlcnkgY2hhbmdlXG4gICAgICogb2YgdGhlIHJvdXRlIChpLmUuIHJvdXRlIHBhcmFtcyBvciBxdWVyeSBwYXJhbXMpLlxuICAgICAqXG4gICAgICogV2hlbiBhIHVzZXIgbGVhdmVzIHRoZSBQTFAgcm91dGUsIHRoZSBQTFAgY29tcG9uZW50IHVuc3Vic2NyaWJlcyBmcm9tIHRoaXMgc3RyZWFtXG4gICAgICogc28gbm8gbG9uZ2VyIHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIG9uIHJvdXRlIGNoYW5nZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICAgIGNsZWFyU2VhcmNoUmVzdWx0cygpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0Q3JpdGVyaWFGcm9tUm91dGU7XG4gICAgcHJpdmF0ZSBnZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcztcbiAgICBwcml2YXRlIHNlYXJjaDtcbiAgICBwcml2YXRlIGdldFNlYXJjaENvbmZpZztcbiAgICBzZXRRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZDtcbiAgICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBpdGVtcyBmcm9tIGEgZ2l2ZW4gcGFnZSB3aXRob3V0IHVzaW5nIG5hdmlnYXRpb25cbiAgICAgKi9cbiAgICBnZXRQYWdlSXRlbXMocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIHByaXZhdGUgc2V0UXVlcnlQYXJhbXM7XG59XG4iXX0=
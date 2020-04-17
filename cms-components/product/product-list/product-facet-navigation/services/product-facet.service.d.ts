import { ActivatedRouterStateSnapshot, ProductSearchPage, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ProductListComponentService } from '../../container/product-list-component.service';
import { FacetList } from '../facet.model';
/**
 * Provides access to all the facets and active facets for the Product Listing Page.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ProductFacetService {
    protected routing: RoutingService;
    protected productListComponentService: ProductListComponentService;
    protected readonly routeState$: Observable<ActivatedRouterStateSnapshot>;
    protected readonly searchResult$: Observable<ProductSearchPage>;
    constructor(routing: RoutingService, productListComponentService: ProductListComponentService);
    /**
     * Observes the facets and active facets for the given page. The facet data
     * is provided in a `FacetList`.
     */
    readonly facetList$: Observable<FacetList>;
    /**
     * Filters the current result by verifying if the result is related to the page.
     * This is done to avoid a combination of the next page and the current search results.
     */
    protected filterForPage(state: ActivatedRouterStateSnapshot, page: ProductSearchPage): boolean;
    private mapResults;
    /**
     * filter breadcrumbs which are not actively selected
     * but coming from the route navigation
     */
    private filterBreadcrumbs;
    /**
     * Indicates whether the breadcrumb is related to navigation parameters,
     * since either the category or brand code should match those codes.
     */
    private hasBreadcrumb;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductFacetService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtZmFjZXQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCwgUHJvZHVjdFNlYXJjaFBhZ2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvbnRhaW5lci9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFjZXRMaXN0IH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuLyoqXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gYWxsIHRoZSBmYWNldHMgYW5kIGFjdGl2ZSBmYWNldHMgZm9yIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdEZhY2V0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVTdGF0ZSQ6IE9ic2VydmFibGU8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD47XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNlYXJjaFJlc3VsdCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLCBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXMgdGhlIGZhY2V0cyBhbmQgYWN0aXZlIGZhY2V0cyBmb3IgdGhlIGdpdmVuIHBhZ2UuIFRoZSBmYWNldCBkYXRhXG4gICAgICogaXMgcHJvdmlkZWQgaW4gYSBgRmFjZXRMaXN0YC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmYWNldExpc3QkOiBPYnNlcnZhYmxlPEZhY2V0TGlzdD47XG4gICAgLyoqXG4gICAgICogRmlsdGVycyB0aGUgY3VycmVudCByZXN1bHQgYnkgdmVyaWZ5aW5nIGlmIHRoZSByZXN1bHQgaXMgcmVsYXRlZCB0byB0aGUgcGFnZS5cbiAgICAgKiBUaGlzIGlzIGRvbmUgdG8gYXZvaWQgYSBjb21iaW5hdGlvbiBvZiB0aGUgbmV4dCBwYWdlIGFuZCB0aGUgY3VycmVudCBzZWFyY2ggcmVzdWx0cy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmlsdGVyRm9yUGFnZShzdGF0ZTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCwgcGFnZTogUHJvZHVjdFNlYXJjaFBhZ2UpOiBib29sZWFuO1xuICAgIHByaXZhdGUgbWFwUmVzdWx0cztcbiAgICAvKipcbiAgICAgKiBmaWx0ZXIgYnJlYWRjcnVtYnMgd2hpY2ggYXJlIG5vdCBhY3RpdmVseSBzZWxlY3RlZFxuICAgICAqIGJ1dCBjb21pbmcgZnJvbSB0aGUgcm91dGUgbmF2aWdhdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZmlsdGVyQnJlYWRjcnVtYnM7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJyZWFkY3J1bWIgaXMgcmVsYXRlZCB0byBuYXZpZ2F0aW9uIHBhcmFtZXRlcnMsXG4gICAgICogc2luY2UgZWl0aGVyIHRoZSBjYXRlZ29yeSBvciBicmFuZCBjb2RlIHNob3VsZCBtYXRjaCB0aG9zZSBjb2Rlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGhhc0JyZWFkY3J1bWI7XG59XG4iXX0=
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

//# sourceMappingURL=product-facet.service.d.ts.map
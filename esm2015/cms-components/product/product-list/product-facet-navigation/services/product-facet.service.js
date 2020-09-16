import { Injectable } from '@angular/core';
import { PageType, RoutingService, } from '@spartacus/core';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { ProductListComponentService } from '../../container/product-list-component.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../container/product-list-component.service";
/**
 * Provides access to all the facets and active facets for the Product Listing Page.
 */
export class ProductFacetService {
    constructor(routing, productListComponentService) {
        this.routing = routing;
        this.productListComponentService = productListComponentService;
        this.routeState$ = this.routing
            .getRouterState()
            .pipe(pluck('state'));
        this.searchResult$ = this.routeState$.pipe(switchMap((state) => this.productListComponentService.model$.pipe(filter((page) => this.filterForPage(state, page)), map((page) => this.mapResults(state, page)))));
        /**
         * Observes the facets and active facets for the given page. The facet data
         * is provided in a `FacetList`.
         */
        this.facetList$ = this.searchResult$.pipe(map((result) => ({
            facets: result.facets,
            activeFacets: result.breadcrumbs,
        })));
    }
    /**
     * Filters the current result by verifying if the result is related to the page.
     * This is done to avoid a combination of the next page and the current search results.
     */
    filterForPage(state, page) {
        var _a, _b, _c;
        if (state.context.type === PageType.CATEGORY_PAGE) {
            return (((_c = (_b = (_a = page.currentQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.indexOf(`allCategories:${state.context.id}`)) > -1);
        }
        if (state.context.type === PageType.CONTENT_PAGE &&
            state.context.id === 'search') {
            return page.currentQuery.query.value.startsWith(`${state.params.query}:`);
        }
        return false;
    }
    mapResults(state, page) {
        return Object.assign(Object.assign({}, page), { breadcrumbs: this.filterBreadcrumbs(page.breadcrumbs, state.params) });
    }
    /**
     * filter breadcrumbs which are not actively selected
     * but coming from the route navigation
     */
    filterBreadcrumbs(breadcrumbs, params) {
        return breadcrumbs
            ? breadcrumbs.filter((breadcrumb) => !this.hasBreadcrumb(breadcrumb, params))
            : [];
    }
    /**
     * Indicates whether the breadcrumb is related to navigation parameters,
     * since either the category or brand code should match those codes.
     */
    hasBreadcrumb(breadcrumb, params) {
        return (breadcrumb.facetCode === 'allCategories' &&
            (breadcrumb.facetValueCode === params.categoryCode ||
                breadcrumb.facetValueCode === params.brandCode));
    }
}
ProductFacetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductFacetService_Factory() { return new ProductFacetService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductListComponentService)); }, token: ProductFacetService, providedIn: "root" });
ProductFacetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductFacetService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductListComponentService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL3NlcnZpY2VzL3Byb2R1Y3QtZmFjZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFHTCxRQUFRLEVBRVIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBRzdGOztHQUVHO0FBSUgsTUFBTSxPQUFPLG1CQUFtQjtJQWdCOUIsWUFDWSxPQUF1QixFQUN2QiwyQkFBd0Q7UUFEeEQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQWpCakQsZ0JBQVcsR0FBRyxJQUFJLENBQUMsT0FBTzthQUMxQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRUwsa0JBQWEsR0FFNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3ZCLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2xCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDNUMsQ0FDRixDQUNGLENBQUM7UUFPRjs7O1dBR0c7UUFDTSxlQUFVLEdBQTBCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNsRSxHQUFHLENBQ0QsQ0FBQyxNQUF5QixFQUFFLEVBQUUsQ0FDNUIsQ0FBQztZQUNDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVc7U0FDbkIsQ0FBQSxDQUNsQixDQUNGLENBQUM7SUFkQyxDQUFDO0lBZ0JKOzs7T0FHRztJQUNPLGFBQWEsQ0FDckIsS0FBbUMsRUFDbkMsSUFBdUI7O1FBRXZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNqRCxPQUFPLENBQ0wsbUJBQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsS0FBSywwQ0FBRSxLQUFLLDBDQUFFLE9BQU8sQ0FDdEMsaUJBQWlCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQ2pDLENBQUMsQ0FBQyxDQUNQLENBQUM7U0FDSDtRQUVELElBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUM3QjtZQUNBLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUMzRTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLFVBQVUsQ0FDaEIsS0FBbUMsRUFDbkMsSUFBdUI7UUFFdkIsdUNBQ0ssSUFBSSxLQUNQLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQ25FO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNLLGlCQUFpQixDQUN2QixXQUF5QixFQUN6QixNQUFjO1FBRWQsT0FBTyxXQUFXO1lBQ2hCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUNoQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FDeEQ7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGFBQWEsQ0FBQyxVQUFzQixFQUFFLE1BQWM7UUFDMUQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxTQUFTLEtBQUssZUFBZTtZQUN4QyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDLFlBQVk7Z0JBQ2hELFVBQVUsQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQzs7OztZQWxHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVpDLGNBQWM7WUFJUCwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgQnJlYWRjcnVtYixcbiAgUGFnZVR5cGUsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBwbHVjaywgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBGYWNldExpc3QgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5cbi8qKlxuICogUHJvdmlkZXMgYWNjZXNzIHRvIGFsbCB0aGUgZmFjZXRzIGFuZCBhY3RpdmUgZmFjZXRzIGZvciB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RmFjZXRTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHJvdXRlU3RhdGUkID0gdGhpcy5yb3V0aW5nXG4gICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAucGlwZShwbHVjaygnc3RhdGUnKSk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHNlYXJjaFJlc3VsdCQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFNlYXJjaFBhZ2VcbiAgPiA9IHRoaXMucm91dGVTdGF0ZSQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHN0YXRlKSA9PlxuICAgICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UubW9kZWwkLnBpcGUoXG4gICAgICAgIGZpbHRlcigocGFnZSkgPT4gdGhpcy5maWx0ZXJGb3JQYWdlKHN0YXRlLCBwYWdlKSksXG4gICAgICAgIG1hcCgocGFnZSkgPT4gdGhpcy5tYXBSZXN1bHRzKHN0YXRlLCBwYWdlKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBmYWNldHMgYW5kIGFjdGl2ZSBmYWNldHMgZm9yIHRoZSBnaXZlbiBwYWdlLiBUaGUgZmFjZXQgZGF0YVxuICAgKiBpcyBwcm92aWRlZCBpbiBhIGBGYWNldExpc3RgLlxuICAgKi9cbiAgcmVhZG9ubHkgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+ID0gdGhpcy5zZWFyY2hSZXN1bHQkLnBpcGUoXG4gICAgbWFwKFxuICAgICAgKHJlc3VsdDogUHJvZHVjdFNlYXJjaFBhZ2UpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgZmFjZXRzOiByZXN1bHQuZmFjZXRzLFxuICAgICAgICAgIGFjdGl2ZUZhY2V0czogcmVzdWx0LmJyZWFkY3J1bWJzLFxuICAgICAgICB9IGFzIEZhY2V0TGlzdClcbiAgICApXG4gICk7XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdGhlIGN1cnJlbnQgcmVzdWx0IGJ5IHZlcmlmeWluZyBpZiB0aGUgcmVzdWx0IGlzIHJlbGF0ZWQgdG8gdGhlIHBhZ2UuXG4gICAqIFRoaXMgaXMgZG9uZSB0byBhdm9pZCBhIGNvbWJpbmF0aW9uIG9mIHRoZSBuZXh0IHBhZ2UgYW5kIHRoZSBjdXJyZW50IHNlYXJjaCByZXN1bHRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZpbHRlckZvclBhZ2UoXG4gICAgc3RhdGU6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gICAgcGFnZTogUHJvZHVjdFNlYXJjaFBhZ2VcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKHN0YXRlLmNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcGFnZS5jdXJyZW50UXVlcnk/LnF1ZXJ5Py52YWx1ZT8uaW5kZXhPZihcbiAgICAgICAgICBgYWxsQ2F0ZWdvcmllczoke3N0YXRlLmNvbnRleHQuaWR9YFxuICAgICAgICApID4gLTFcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3RhdGUuY29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UgJiZcbiAgICAgIHN0YXRlLmNvbnRleHQuaWQgPT09ICdzZWFyY2gnXG4gICAgKSB7XG4gICAgICByZXR1cm4gcGFnZS5jdXJyZW50UXVlcnkucXVlcnkudmFsdWUuc3RhcnRzV2l0aChgJHtzdGF0ZS5wYXJhbXMucXVlcnl9OmApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG1hcFJlc3VsdHMoXG4gICAgc3RhdGU6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gICAgcGFnZTogUHJvZHVjdFNlYXJjaFBhZ2VcbiAgKTogUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wYWdlLFxuICAgICAgYnJlYWRjcnVtYnM6IHRoaXMuZmlsdGVyQnJlYWRjcnVtYnMocGFnZS5icmVhZGNydW1icywgc3RhdGUucGFyYW1zKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIGZpbHRlciBicmVhZGNydW1icyB3aGljaCBhcmUgbm90IGFjdGl2ZWx5IHNlbGVjdGVkXG4gICAqIGJ1dCBjb21pbmcgZnJvbSB0aGUgcm91dGUgbmF2aWdhdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXJCcmVhZGNydW1icyhcbiAgICBicmVhZGNydW1iczogQnJlYWRjcnVtYltdLFxuICAgIHBhcmFtczogUGFyYW1zXG4gICk6IEJyZWFkY3J1bWJbXSB7XG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzXG4gICAgICA/IGJyZWFkY3J1bWJzLmZpbHRlcihcbiAgICAgICAgICAoYnJlYWRjcnVtYikgPT4gIXRoaXMuaGFzQnJlYWRjcnVtYihicmVhZGNydW1iLCBwYXJhbXMpXG4gICAgICAgIClcbiAgICAgIDogW107XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJyZWFkY3J1bWIgaXMgcmVsYXRlZCB0byBuYXZpZ2F0aW9uIHBhcmFtZXRlcnMsXG4gICAqIHNpbmNlIGVpdGhlciB0aGUgY2F0ZWdvcnkgb3IgYnJhbmQgY29kZSBzaG91bGQgbWF0Y2ggdGhvc2UgY29kZXMuXG4gICAqL1xuICBwcml2YXRlIGhhc0JyZWFkY3J1bWIoYnJlYWRjcnVtYjogQnJlYWRjcnVtYiwgcGFyYW1zOiBQYXJhbXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgYnJlYWRjcnVtYi5mYWNldENvZGUgPT09ICdhbGxDYXRlZ29yaWVzJyAmJlxuICAgICAgKGJyZWFkY3J1bWIuZmFjZXRWYWx1ZUNvZGUgPT09IHBhcmFtcy5jYXRlZ29yeUNvZGUgfHxcbiAgICAgICAgYnJlYWRjcnVtYi5mYWNldFZhbHVlQ29kZSA9PT0gcGFyYW1zLmJyYW5kQ29kZSlcbiAgICApO1xuICB9XG59XG4iXX0=
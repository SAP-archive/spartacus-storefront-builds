import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRouterStateSnapshot, Breadcrumb, PageType, ProductSearchPage, RoutingService, } from '@spartacus/core';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { ProductListComponentService } from '../../container/product-list-component.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../container/product-list-component.service";
/**
 * Provides access to all the facets and active facets for the Product Listing Page.
 */
var ProductFacetService = /** @class */ (function () {
    function ProductFacetService(routing, productListComponentService) {
        var _this = this;
        this.routing = routing;
        this.productListComponentService = productListComponentService;
        this.routeState$ = this.routing
            .getRouterState()
            .pipe(pluck('state'));
        this.searchResult$ = this.routeState$.pipe(switchMap(function (state) {
            return _this.productListComponentService.model$.pipe(filter(function (page) { return _this.filterForPage(state, page); }), map(function (page) { return _this.mapResults(state, page); }));
        }));
        /**
         * Observes the facets and active facets for the given page. The facet data
         * is provided in a `FacetList`.
         */
        this.facetList$ = this.searchResult$.pipe(map(function (result) {
            return ({
                facets: result.facets,
                activeFacets: result.breadcrumbs,
            });
        }));
    }
    /**
     * Filters the current result by verifying if the result is related to the page.
     * This is done to avoid a combination of the next page and the current search results.
     */
    ProductFacetService.prototype.filterForPage = function (state, page) {
        var _a, _b, _c;
        if (state.context.type === PageType.CATEGORY_PAGE) {
            return (((_c = (_b = (_a = page.currentQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.indexOf("allCategories:" + state.context.id)) > -1);
        }
        if (state.context.type === PageType.CONTENT_PAGE &&
            state.context.id === 'search') {
            return page.currentQuery.query.value.startsWith(state.params.query + ":");
        }
        return false;
    };
    ProductFacetService.prototype.mapResults = function (state, page) {
        return __assign(__assign({}, page), { breadcrumbs: this.filterBreadcrumbs(page.breadcrumbs, state.params) });
    };
    /**
     * filter breadcrumbs which are not actively selected
     * but coming from the route navigation
     */
    ProductFacetService.prototype.filterBreadcrumbs = function (breadcrumbs, params) {
        var _this = this;
        return breadcrumbs
            ? breadcrumbs.filter(function (breadcrumb) { return !_this.hasBreadcrumb(breadcrumb, params); })
            : [];
    };
    /**
     * Indicates whether the breadcrumb is related to navigation parameters,
     * since either the category or brand code should match those codes.
     */
    ProductFacetService.prototype.hasBreadcrumb = function (breadcrumb, params) {
        return (breadcrumb.facetCode === 'allCategories' &&
            (breadcrumb.facetValueCode === params.categoryCode ||
                breadcrumb.facetValueCode === params.brandCode));
    };
    ProductFacetService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductListComponentService }
    ]; };
    ProductFacetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductFacetService_Factory() { return new ProductFacetService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductListComponentService)); }, token: ProductFacetService, providedIn: "root" });
    ProductFacetService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductFacetService);
    return ProductFacetService;
}());
export { ProductFacetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL3NlcnZpY2VzL3Byb2R1Y3QtZmFjZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLFVBQVUsRUFDVixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQUc3Rjs7R0FFRztBQUlIO0lBZ0JFLDZCQUNZLE9BQXVCLEVBQ3ZCLDJCQUF3RDtRQUZwRSxpQkFHSTtRQUZRLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFqQmpELGdCQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDMUMsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVMLGtCQUFhLEdBRTVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN2QixTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ2QsT0FBQSxLQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDakQsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FDNUM7UUFIRCxDQUdDLENBQ0YsQ0FDRixDQUFDO1FBT0Y7OztXQUdHO1FBQ00sZUFBVSxHQUEwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbEUsR0FBRyxDQUNELFVBQUMsTUFBeUI7WUFDeEIsT0FBQSxDQUFDO2dCQUNDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDckIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQ25CLENBQUE7UUFIZixDQUdlLENBQ2xCLENBQ0YsQ0FBQztJQWRDLENBQUM7SUFnQko7OztPQUdHO0lBQ08sMkNBQWEsR0FBdkIsVUFDRSxLQUFtQyxFQUNuQyxJQUF1Qjs7UUFFdkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2pELE9BQU8sQ0FDTCxtQkFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxLQUFLLDBDQUFFLEtBQUssMENBQUUsT0FBTyxDQUN0QyxtQkFBaUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFJLEtBQ2pDLENBQUMsQ0FBQyxDQUNQLENBQUM7U0FDSDtRQUVELElBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUM3QjtZQUNBLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBRyxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyx3Q0FBVSxHQUFsQixVQUNFLEtBQW1DLEVBQ25DLElBQXVCO1FBRXZCLDZCQUNLLElBQUksS0FDUCxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUNuRTtJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSywrQ0FBaUIsR0FBekIsVUFDRSxXQUF5QixFQUN6QixNQUFjO1FBRmhCLGlCQVNDO1FBTEMsT0FBTyxXQUFXO1lBQ2hCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUNoQixVQUFDLFVBQVUsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQXZDLENBQXVDLENBQ3hEO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRDs7O09BR0c7SUFDSywyQ0FBYSxHQUFyQixVQUFzQixVQUFzQixFQUFFLE1BQWM7UUFDMUQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxTQUFTLEtBQUssZUFBZTtZQUN4QyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDLFlBQVk7Z0JBQ2hELFVBQVUsQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBOUVvQixjQUFjO2dCQUNNLDJCQUEyQjs7O0lBbEJ6RCxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG1CQUFtQixDQWdHL0I7OEJBcEhEO0NBb0hDLEFBaEdELElBZ0dDO1NBaEdZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBCcmVhZGNydW1iLFxuICBQYWdlVHlwZSxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHBsdWNrLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb250YWluZXIvcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEZhY2V0TGlzdCB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcblxuLyoqXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gYWxsIHRoZSBmYWNldHMgYW5kIGFjdGl2ZSBmYWNldHMgZm9yIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RGYWNldFNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVTdGF0ZSQgPSB0aGlzLnJvdXRpbmdcbiAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgIC5waXBlKHBsdWNrKCdzdGF0ZScpKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2VhcmNoUmVzdWx0JDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZVxuICA+ID0gdGhpcy5yb3V0ZVN0YXRlJC5waXBlKFxuICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+XG4gICAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5tb2RlbCQucGlwZShcbiAgICAgICAgZmlsdGVyKChwYWdlKSA9PiB0aGlzLmZpbHRlckZvclBhZ2Uoc3RhdGUsIHBhZ2UpKSxcbiAgICAgICAgbWFwKChwYWdlKSA9PiB0aGlzLm1hcFJlc3VsdHMoc3RhdGUsIHBhZ2UpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIGZhY2V0cyBhbmQgYWN0aXZlIGZhY2V0cyBmb3IgdGhlIGdpdmVuIHBhZ2UuIFRoZSBmYWNldCBkYXRhXG4gICAqIGlzIHByb3ZpZGVkIGluIGEgYEZhY2V0TGlzdGAuXG4gICAqL1xuICByZWFkb25seSBmYWNldExpc3QkOiBPYnNlcnZhYmxlPEZhY2V0TGlzdD4gPSB0aGlzLnNlYXJjaFJlc3VsdCQucGlwZShcbiAgICBtYXAoXG4gICAgICAocmVzdWx0OiBQcm9kdWN0U2VhcmNoUGFnZSkgPT5cbiAgICAgICAgKHtcbiAgICAgICAgICBmYWNldHM6IHJlc3VsdC5mYWNldHMsXG4gICAgICAgICAgYWN0aXZlRmFjZXRzOiByZXN1bHQuYnJlYWRjcnVtYnMsXG4gICAgICAgIH0gYXMgRmFjZXRMaXN0KVxuICAgIClcbiAgKTtcblxuICAvKipcbiAgICogRmlsdGVycyB0aGUgY3VycmVudCByZXN1bHQgYnkgdmVyaWZ5aW5nIGlmIHRoZSByZXN1bHQgaXMgcmVsYXRlZCB0byB0aGUgcGFnZS5cbiAgICogVGhpcyBpcyBkb25lIHRvIGF2b2lkIGEgY29tYmluYXRpb24gb2YgdGhlIG5leHQgcGFnZSBhbmQgdGhlIGN1cnJlbnQgc2VhcmNoIHJlc3VsdHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZmlsdGVyRm9yUGFnZShcbiAgICBzdGF0ZTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZVxuICApOiBib29sZWFuIHtcbiAgICBpZiAoc3RhdGUuY29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwYWdlLmN1cnJlbnRRdWVyeT8ucXVlcnk/LnZhbHVlPy5pbmRleE9mKFxuICAgICAgICAgIGBhbGxDYXRlZ29yaWVzOiR7c3RhdGUuY29udGV4dC5pZH1gXG4gICAgICAgICkgPiAtMVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdGF0ZS5jb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSAmJlxuICAgICAgc3RhdGUuY29udGV4dC5pZCA9PT0gJ3NlYXJjaCdcbiAgICApIHtcbiAgICAgIHJldHVybiBwYWdlLmN1cnJlbnRRdWVyeS5xdWVyeS52YWx1ZS5zdGFydHNXaXRoKGAke3N0YXRlLnBhcmFtcy5xdWVyeX06YCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwUmVzdWx0cyhcbiAgICBzdGF0ZTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBwYWdlOiBQcm9kdWN0U2VhcmNoUGFnZVxuICApOiBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBhZ2UsXG4gICAgICBicmVhZGNydW1iczogdGhpcy5maWx0ZXJCcmVhZGNydW1icyhwYWdlLmJyZWFkY3J1bWJzLCBzdGF0ZS5wYXJhbXMpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogZmlsdGVyIGJyZWFkY3J1bWJzIHdoaWNoIGFyZSBub3QgYWN0aXZlbHkgc2VsZWN0ZWRcbiAgICogYnV0IGNvbWluZyBmcm9tIHRoZSByb3V0ZSBuYXZpZ2F0aW9uXG4gICAqL1xuICBwcml2YXRlIGZpbHRlckJyZWFkY3J1bWJzKFxuICAgIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iW10sXG4gICAgcGFyYW1zOiBQYXJhbXNcbiAgKTogQnJlYWRjcnVtYltdIHtcbiAgICByZXR1cm4gYnJlYWRjcnVtYnNcbiAgICAgID8gYnJlYWRjcnVtYnMuZmlsdGVyKFxuICAgICAgICAgIChicmVhZGNydW1iKSA9PiAhdGhpcy5oYXNCcmVhZGNydW1iKGJyZWFkY3J1bWIsIHBhcmFtcylcbiAgICAgICAgKVxuICAgICAgOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYnJlYWRjcnVtYiBpcyByZWxhdGVkIHRvIG5hdmlnYXRpb24gcGFyYW1ldGVycyxcbiAgICogc2luY2UgZWl0aGVyIHRoZSBjYXRlZ29yeSBvciBicmFuZCBjb2RlIHNob3VsZCBtYXRjaCB0aG9zZSBjb2Rlcy5cbiAgICovXG4gIHByaXZhdGUgaGFzQnJlYWRjcnVtYihicmVhZGNydW1iOiBCcmVhZGNydW1iLCBwYXJhbXM6IFBhcmFtcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBicmVhZGNydW1iLmZhY2V0Q29kZSA9PT0gJ2FsbENhdGVnb3JpZXMnICYmXG4gICAgICAoYnJlYWRjcnVtYi5mYWNldFZhbHVlQ29kZSA9PT0gcGFyYW1zLmNhdGVnb3J5Q29kZSB8fFxuICAgICAgICBicmVhZGNydW1iLmZhY2V0VmFsdWVDb2RlID09PSBwYXJhbXMuYnJhbmRDb2RlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
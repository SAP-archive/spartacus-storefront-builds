import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createFrom, EventService, ProductSearchService, ProductService, } from '@spartacus/core';
import { EMPTY } from 'rxjs';
import { filter, map, skip, switchMap, take } from 'rxjs/operators';
import { PageEvent } from '../page/page.events';
import { CategoryPageResultsEvent, ProductDetailsPageEvent, SearchPageResultsEvent, } from './product-page.events';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var ProductPageEventBuilder = /** @class */ (function () {
    function ProductPageEventBuilder(eventService, productService, productSearchService) {
        this.eventService = eventService;
        this.productService = productService;
        this.productSearchService = productSearchService;
        this.register();
    }
    ProductPageEventBuilder.prototype.register = function () {
        this.eventService.register(SearchPageResultsEvent, this.buildSearchPageResultsEvent());
        this.eventService.register(ProductDetailsPageEvent, this.buildProductDetailsPageEvent());
        this.eventService.register(CategoryPageResultsEvent, this.buildCategoryResultsPageEvent());
    };
    ProductPageEventBuilder.prototype.buildProductDetailsPageEvent = function () {
        var _this = this;
        return this.eventService.get(PageEvent).pipe(filter(function (pageEvent) { return pageEvent.semanticRoute === 'product'; }), map(function (pageEvent) { return pageEvent.context.id; }), switchMap(function (productId) {
            return _this.productService.get(productId).pipe(filter(function (product) { return Boolean(product); }), take(1), map(function (product) {
                return createFrom(ProductDetailsPageEvent, {
                    categories: product.categories,
                    code: product.code,
                    name: product.name,
                    price: product.price,
                });
            }));
        }));
    };
    ProductPageEventBuilder.prototype.buildCategoryResultsPageEvent = function () {
        var searchResults$ = this.productSearchService.getResults().pipe(
        // skipping the initial value, and preventing emission of the previous search state
        skip(1));
        var categoryPageEvent$ = this.eventService.get(PageEvent).pipe(map(function (pageEvent) { return ({
            isCategoryPage: pageEvent.semanticRoute === 'category',
            categoryCode: pageEvent.context.id,
        }); }));
        return categoryPageEvent$.pipe(switchMap(function (pageEvent) {
            if (!pageEvent.isCategoryPage) {
                return EMPTY;
            }
            return searchResults$.pipe(map(function (searchResults) { return ({
                categoryCode: pageEvent.categoryCode,
                categoryName: searchResults.breadcrumbs[0].facetValueName,
            }); }), map(function (categoryPage) {
                return createFrom(CategoryPageResultsEvent, categoryPage);
            }));
        }));
    };
    ProductPageEventBuilder.prototype.buildSearchPageResultsEvent = function () {
        var searchResults$ = this.productSearchService.getResults().pipe(
        // skipping the initial value, and preventing emission of the previous search state
        skip(1), map(function (searchResults) { return ({
            searchTerm: searchResults.freeTextSearch,
            numberOfResults: searchResults.pagination.totalResults,
        }); }), map(function (searchPage) { return createFrom(SearchPageResultsEvent, searchPage); }));
        var searchPageEvent$ = this.eventService
            .get(PageEvent)
            .pipe(map(function (pageEvent) { return pageEvent.semanticRoute === 'search'; }));
        return searchPageEvent$.pipe(switchMap(function (isSearchPage) { return (isSearchPage ? searchResults$ : EMPTY); }));
    };
    ProductPageEventBuilder.ctorParameters = function () { return [
        { type: EventService },
        { type: ProductService },
        { type: ProductSearchService }
    ]; };
    ProductPageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductPageEventBuilder_Factory() { return new ProductPageEventBuilder(i0.ɵɵinject(i1.EventService), i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.ProductSearchService)); }, token: ProductPageEventBuilder, providedIn: "root" });
    ProductPageEventBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductPageEventBuilder);
    return ProductPageEventBuilder;
}());
export { ProductPageEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvcHJvZHVjdC9wcm9kdWN0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixzQkFBc0IsR0FDdkIsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBSy9CO0lBQ0UsaUNBQ1ksWUFBMEIsRUFDMUIsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRXBELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsMENBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsc0JBQXNCLEVBQ3RCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLHVCQUF1QixFQUN2QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FDcEMsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN4Qix3QkFBd0IsRUFDeEIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQ3JDLENBQUM7SUFDSixDQUFDO0lBRVMsOERBQTRCLEdBQXRDO1FBQUEsaUJBcUJDO1FBbEJDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxTQUFTLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBckMsQ0FBcUMsQ0FBQyxFQUM1RCxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxFQUN4QyxTQUFTLENBQUMsVUFBQyxTQUFTO1lBQ2xCLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNyQyxNQUFNLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQWhCLENBQWdCLENBQUMsRUFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxVQUFDLE9BQU87Z0JBQ1YsT0FBQSxVQUFVLENBQUMsdUJBQXVCLEVBQUU7b0JBQ2xDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtvQkFDOUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNsQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztpQkFDckIsQ0FBQztZQUxGLENBS0UsQ0FDSCxDQUNGO1FBWEQsQ0FXQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFUywrREFBNkIsR0FBdkM7UUFHRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSTtRQUNoRSxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7UUFFRixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDOUQsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQztZQUNsQixjQUFjLEVBQUUsU0FBUyxDQUFDLGFBQWEsS0FBSyxVQUFVO1lBQ3RELFlBQVksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDbkMsQ0FBQyxFQUhpQixDQUdqQixDQUFDLENBQ0osQ0FBQztRQUVGLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUM1QixTQUFTLENBQUMsVUFBQyxTQUFTO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFO2dCQUM3QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUN4QixHQUFHLENBQUMsVUFBQyxhQUFhLElBQUssT0FBQSxDQUFDO2dCQUN0QixZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVk7Z0JBQ3BDLFlBQVksRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7YUFDMUQsQ0FBQyxFQUhxQixDQUdyQixDQUFDLEVBQ0gsR0FBRyxDQUFDLFVBQUMsWUFBWTtnQkFDZixPQUFBLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUM7WUFBbEQsQ0FBa0QsQ0FDbkQsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyw2REFBMkIsR0FBckM7UUFDRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSTtRQUNoRSxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxVQUFDLGFBQWEsSUFBSyxPQUFBLENBQUM7WUFDdEIsVUFBVSxFQUFFLGFBQWEsQ0FBQyxjQUFjO1lBQ3hDLGVBQWUsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVk7U0FDdkQsQ0FBQyxFQUhxQixDQUdyQixDQUFDLEVBQ0gsR0FBRyxDQUFDLFVBQUMsVUFBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQ3BFLENBQUM7UUFFRixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZO2FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUM7YUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQXBDLENBQW9DLENBQUMsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUMxQixTQUFTLENBQUMsVUFBQyxZQUFZLElBQUssT0FBQSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBakd5QixZQUFZO2dCQUNWLGNBQWM7Z0JBQ1Isb0JBQW9COzs7SUFKM0MsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx1QkFBdUIsQ0FvR25DO2tDQXZIRDtDQXVIQyxBQXBHRCxJQW9HQztTQXBHWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBjcmVhdGVGcm9tLFxuICBFdmVudFNlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2tpcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLmV2ZW50cyc7XG5pbXBvcnQge1xuICBDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnQsXG4gIFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50LFxuICBTZWFyY2hQYWdlUmVzdWx0c0V2ZW50LFxufSBmcm9tICcuL3Byb2R1Y3QtcGFnZS5ldmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihcbiAgICAgIFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQsXG4gICAgICB0aGlzLmJ1aWxkU2VhcmNoUGFnZVJlc3VsdHNFdmVudCgpXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihcbiAgICAgIFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50LFxuICAgICAgdGhpcy5idWlsZFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50KClcbiAgICApO1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50LFxuICAgICAgdGhpcy5idWlsZENhdGVnb3J5UmVzdWx0c1BhZ2VFdmVudCgpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50KCk6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdERldGFpbHNQYWdlRXZlbnRcbiAgPiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldChQYWdlRXZlbnQpLnBpcGUoXG4gICAgICBmaWx0ZXIoKHBhZ2VFdmVudCkgPT4gcGFnZUV2ZW50LnNlbWFudGljUm91dGUgPT09ICdwcm9kdWN0JyksXG4gICAgICBtYXAoKHBhZ2VFdmVudCkgPT4gcGFnZUV2ZW50LmNvbnRleHQuaWQpLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0SWQpID0+XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KHByb2R1Y3RJZCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKHByb2R1Y3QpID0+IEJvb2xlYW4ocHJvZHVjdCkpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWFwKChwcm9kdWN0KSA9PlxuICAgICAgICAgICAgY3JlYXRlRnJvbShQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCwge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBwcm9kdWN0LmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgIGNvZGU6IHByb2R1Y3QuY29kZSxcbiAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENhdGVnb3J5UmVzdWx0c1BhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPFxuICAgIENhdGVnb3J5UGFnZVJlc3VsdHNFdmVudFxuICA+IHtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzJCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICAvLyBza2lwcGluZyB0aGUgaW5pdGlhbCB2YWx1ZSwgYW5kIHByZXZlbnRpbmcgZW1pc3Npb24gb2YgdGhlIHByZXZpb3VzIHNlYXJjaCBzdGF0ZVxuICAgICAgc2tpcCgxKVxuICAgICk7XG5cbiAgICBjb25zdCBjYXRlZ29yeVBhZ2VFdmVudCQgPSB0aGlzLmV2ZW50U2VydmljZS5nZXQoUGFnZUV2ZW50KS5waXBlKFxuICAgICAgbWFwKChwYWdlRXZlbnQpID0+ICh7XG4gICAgICAgIGlzQ2F0ZWdvcnlQYWdlOiBwYWdlRXZlbnQuc2VtYW50aWNSb3V0ZSA9PT0gJ2NhdGVnb3J5JyxcbiAgICAgICAgY2F0ZWdvcnlDb2RlOiBwYWdlRXZlbnQuY29udGV4dC5pZCxcbiAgICAgIH0pKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2F0ZWdvcnlQYWdlRXZlbnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXBhZ2VFdmVudC5pc0NhdGVnb3J5UGFnZSkge1xuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzJC5waXBlKFxuICAgICAgICAgIG1hcCgoc2VhcmNoUmVzdWx0cykgPT4gKHtcbiAgICAgICAgICAgIGNhdGVnb3J5Q29kZTogcGFnZUV2ZW50LmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZTogc2VhcmNoUmVzdWx0cy5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgbWFwKChjYXRlZ29yeVBhZ2UpID0+XG4gICAgICAgICAgICBjcmVhdGVGcm9tKENhdGVnb3J5UGFnZVJlc3VsdHNFdmVudCwgY2F0ZWdvcnlQYWdlKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQoKTogT2JzZXJ2YWJsZTxTZWFyY2hQYWdlUmVzdWx0c0V2ZW50PiB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgLy8gc2tpcHBpbmcgdGhlIGluaXRpYWwgdmFsdWUsIGFuZCBwcmV2ZW50aW5nIGVtaXNzaW9uIG9mIHRoZSBwcmV2aW91cyBzZWFyY2ggc3RhdGVcbiAgICAgIHNraXAoMSksXG4gICAgICBtYXAoKHNlYXJjaFJlc3VsdHMpID0+ICh7XG4gICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFJlc3VsdHMuZnJlZVRleHRTZWFyY2gsXG4gICAgICAgIG51bWJlck9mUmVzdWx0czogc2VhcmNoUmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyxcbiAgICAgIH0pKSxcbiAgICAgIG1hcCgoc2VhcmNoUGFnZSkgPT4gY3JlYXRlRnJvbShTZWFyY2hQYWdlUmVzdWx0c0V2ZW50LCBzZWFyY2hQYWdlKSlcbiAgICApO1xuXG4gICAgY29uc3Qgc2VhcmNoUGFnZUV2ZW50JCA9IHRoaXMuZXZlbnRTZXJ2aWNlXG4gICAgICAuZ2V0KFBhZ2VFdmVudClcbiAgICAgIC5waXBlKG1hcCgocGFnZUV2ZW50KSA9PiBwYWdlRXZlbnQuc2VtYW50aWNSb3V0ZSA9PT0gJ3NlYXJjaCcpKTtcblxuICAgIHJldHVybiBzZWFyY2hQYWdlRXZlbnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGlzU2VhcmNoUGFnZSkgPT4gKGlzU2VhcmNoUGFnZSA/IHNlYXJjaFJlc3VsdHMkIDogRU1QVFkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
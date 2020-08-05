import { __assign, __decorate } from "tslib";
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
        return this.eventService.get(PageEvent).pipe(filter(function (pageEvent) { return pageEvent.semanticRoute === 'product'; }), switchMap(function (pageEvent) {
            return _this.productService.get(pageEvent.context.id).pipe(filter(function (product) { return Boolean(product); }), take(1), map(function (product) {
                return createFrom(ProductDetailsPageEvent, __assign(__assign({}, pageEvent), { categories: product.categories, code: product.code, name: product.name, price: product.price }));
            }));
        }));
    };
    ProductPageEventBuilder.prototype.buildCategoryResultsPageEvent = function () {
        var searchResults$ = this.productSearchService.getResults().pipe(
        // skipping the initial value, and preventing emission of the previous search state
        skip(1));
        return this.eventService.get(PageEvent).pipe(switchMap(function (pageEvent) {
            if ((pageEvent === null || pageEvent === void 0 ? void 0 : pageEvent.semanticRoute) !== 'category') {
                return EMPTY;
            }
            return searchResults$.pipe(map(function (searchResults) {
                var _a, _b, _c;
                return (__assign(__assign({}, pageEvent), {
                    categoryCode: (_a = pageEvent === null || pageEvent === void 0 ? void 0 : pageEvent.context) === null || _a === void 0 ? void 0 : _a.id,
                    numberOfResults: (_b = searchResults === null || searchResults === void 0 ? void 0 : searchResults.pagination) === null || _b === void 0 ? void 0 : _b.totalResults,
                    categoryName: (_c = searchResults.breadcrumbs) === null || _c === void 0 ? void 0 : _c[0].facetValueName,
                }));
            }), map(function (categoryPage) {
                return createFrom(CategoryPageResultsEvent, categoryPage);
            }));
        }));
    };
    ProductPageEventBuilder.prototype.buildSearchPageResultsEvent = function () {
        var searchResults$ = this.productSearchService.getResults().pipe(
        // skipping the initial value, and preventing emission of the previous search state
        skip(1));
        return this.eventService.get(PageEvent).pipe(switchMap(function (pageEvent) {
            if ((pageEvent === null || pageEvent === void 0 ? void 0 : pageEvent.semanticRoute) !== 'search') {
                return EMPTY;
            }
            return searchResults$.pipe(map(function (searchResults) {
                var _a;
                return (__assign(__assign({}, pageEvent), {
                    searchTerm: searchResults === null || searchResults === void 0 ? void 0 : searchResults.freeTextSearch,
                    numberOfResults: (_a = searchResults === null || searchResults === void 0 ? void 0 : searchResults.pagination) === null || _a === void 0 ? void 0 : _a.totalResults,
                }));
            }), map(function (searchPage) { return createFrom(SearchPageResultsEvent, searchPage); }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvcHJvZHVjdC9wcm9kdWN0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixzQkFBc0IsR0FDdkIsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBSy9CO0lBQ0UsaUNBQ1ksWUFBMEIsRUFDMUIsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRXBELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsMENBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsc0JBQXNCLEVBQ3RCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLHVCQUF1QixFQUN2QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FDcEMsQ0FBQztRQUNGLElB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QUssT0FBQSx1QkFDbEIsU0FBUyxHQUNUO29CQUNELFVBQVUsRUFBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsY0FBYztvQkFDekMsZUFBZSxRQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxVQUFVLDBDQUFFLFlBQVk7aUJBQ3pELEVBQ0QsQ0FBQTthQUFBLENBQUMsRUFDSCxHQUFHLENBQUMsVUFBQyxVQUFVLElBQUssT0FBQSxVQUFVLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FDcEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwR3lCLFlBQVk7Z0JBQ1YsY0FBYztnQkFDUixvQkFBb0I7OztJQUozQyx1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHVCQUF1QixDQXVHbkM7a0NBMUhEO0NBMEhDLEFBdkdELElBdUdDO1NBdkdZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGNyZWF0ZUZyb20sXG4gIEV2ZW50U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBza2lwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuZXZlbnRzJztcbmltcG9ydCB7XG4gIENhdGVnb3J5UGFnZVJlc3VsdHNFdmVudCxcbiAgUHJvZHVjdERldGFpbHNQYWdlRXZlbnQsXG4gIFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQsXG59IGZyb20gJy4vcHJvZHVjdC1wYWdlLmV2ZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgU2VhcmNoUGFnZVJlc3VsdHNFdmVudCxcbiAgICAgIHRoaXMuYnVpbGRTZWFyY2hQYWdlUmVzdWx0c0V2ZW50KClcbiAgICApO1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgUHJvZHVjdERldGFpbHNQYWdlRXZlbnQsXG4gICAgICB0aGlzLmJ1aWxkUHJvZHVjdERldGFpbHNQYWdlRXZlbnQoKVxuICAgICk7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICBDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnQsXG4gICAgICB0aGlzLmJ1aWxkQ2F0ZWdvcnlSZXN1bHRzUGFnZUV2ZW50KClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkUHJvZHVjdERldGFpbHNQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudFxuICA+IHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0KFBhZ2VFdmVudCkucGlwZShcbiAgICAgIGZpbHRlcigocGFnZUV2ZW50KSA9PiBwYWdlRXZlbnQuc2VtYW50aWNSb3V0ZSA9PT0gJ3Byb2R1Y3QnKSxcbiAgICAgIHN3aXRjaE1hcCgocGFnZUV2ZW50KSA9PlxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChwYWdlRXZlbnQuY29udGV4dC5pZCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKHByb2R1Y3QpID0+IEJvb2xlYW4ocHJvZHVjdCkpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWFwKChwcm9kdWN0KSA9PlxuICAgICAgICAgICAgY3JlYXRlRnJvbShQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCwge1xuICAgICAgICAgICAgICAuLi5wYWdlRXZlbnQsXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHByb2R1Y3QuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgY29kZTogcHJvZHVjdC5jb2RlLFxuICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQ2F0ZWdvcnlSZXN1bHRzUGFnZUV2ZW50KCk6IE9ic2VydmFibGU8XG4gICAgQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50XG4gID4ge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMkID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgIC8vIHNraXBwaW5nIHRoZSBpbml0aWFsIHZhbHVlLCBhbmQgcHJldmVudGluZyBlbWlzc2lvbiBvZiB0aGUgcHJldmlvdXMgc2VhcmNoIHN0YXRlXG4gICAgICBza2lwKDEpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5nZXQoUGFnZUV2ZW50KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHBhZ2VFdmVudD8uc2VtYW50aWNSb3V0ZSAhPT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzJC5waXBlKFxuICAgICAgICAgIG1hcCgoc2VhcmNoUmVzdWx0cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnBhZ2VFdmVudCxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgY2F0ZWdvcnlDb2RlOiBwYWdlRXZlbnQ/LmNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICBudW1iZXJPZlJlc3VsdHM6IHNlYXJjaFJlc3VsdHM/LnBhZ2luYXRpb24/LnRvdGFsUmVzdWx0cyxcbiAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiBzZWFyY2hSZXN1bHRzLmJyZWFkY3J1bWJzPy5bMF0uZmFjZXRWYWx1ZU5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBtYXAoKGNhdGVnb3J5UGFnZSkgPT5cbiAgICAgICAgICAgIGNyZWF0ZUZyb20oQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50LCBjYXRlZ29yeVBhZ2UpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkU2VhcmNoUGFnZVJlc3VsdHNFdmVudCgpOiBPYnNlcnZhYmxlPFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQ+IHtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzJCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICAvLyBza2lwcGluZyB0aGUgaW5pdGlhbCB2YWx1ZSwgYW5kIHByZXZlbnRpbmcgZW1pc3Npb24gb2YgdGhlIHByZXZpb3VzIHNlYXJjaCBzdGF0ZVxuICAgICAgc2tpcCgxKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0KFBhZ2VFdmVudCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocGFnZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChwYWdlRXZlbnQ/LnNlbWFudGljUm91dGUgIT09ICdzZWFyY2gnKSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHMkLnBpcGUoXG4gICAgICAgICAgbWFwKChzZWFyY2hSZXN1bHRzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucGFnZUV2ZW50LFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hSZXN1bHRzPy5mcmVlVGV4dFNlYXJjaCxcbiAgICAgICAgICAgICAgbnVtYmVyT2ZSZXN1bHRzOiBzZWFyY2hSZXN1bHRzPy5wYWdpbmF0aW9uPy50b3RhbFJlc3VsdHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBtYXAoKHNlYXJjaFBhZ2UpID0+IGNyZWF0ZUZyb20oU2VhcmNoUGFnZVJlc3VsdHNFdmVudCwgc2VhcmNoUGFnZSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
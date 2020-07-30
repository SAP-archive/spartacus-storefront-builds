import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createFrom, EventService, ProductSearchService, ProductService, } from '@spartacus/core';
import { EMPTY } from 'rxjs';
import { filter, map, skip, switchMap, take } from 'rxjs/operators';
import { PageVisitedEvent } from '../page/page.events';
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
        return this.eventService.get(PageVisitedEvent).pipe(filter(function (pageVisitedEvent) { return pageVisitedEvent.semanticRoute === 'product'; }), map(function (pageVisitedEvent) { return pageVisitedEvent.context.id; }), switchMap(function (productId) {
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
        var categoryPageVisitedEvent$ = this.eventService
            .get(PageVisitedEvent)
            .pipe(map(function (pageVisitedEvent) { return ({
            isCategoryPage: pageVisitedEvent.semanticRoute === 'category',
            categoryCode: pageVisitedEvent.context.id,
        }); }));
        return categoryPageVisitedEvent$.pipe(switchMap(function (pageEvent) {
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
        var searchPageVisitedEvent$ = this.eventService
            .get(PageVisitedEvent)
            .pipe(map(function (pageVisitedEvent) { return pageVisitedEvent.semanticRoute === 'search'; }));
        return searchPageVisitedEvent$.pipe(switchMap(function (isSearchPage) { return (isSearchPage ? searchResults$ : EMPTY); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvcHJvZHVjdC9wcm9kdWN0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFLL0I7SUFDRSxpQ0FDWSxZQUEwQixFQUMxQixjQUE4QixFQUM5QixvQkFBMEM7UUFGMUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFcEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFUywwQ0FBUSxHQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN4QixzQkFBc0IsRUFDdEIsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQ25DLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsdUJBQXVCLEVBQ3ZCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUNwQyxDQUFDO1FBQ0Ys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VUFBVSxDQUFDLFlBQVk7U0FDdkQsQ0FBQyxFQUhxQixDQUdyQixDQUFDLEVBQ0gsR0FBRyxDQUFDLFVBQUMsVUFBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQ3BFLENBQUM7UUFFRixJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxZQUFZO2FBQzlDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNyQixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsZ0JBQWdCLElBQUssT0FBQSxnQkFBZ0IsQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUEzQyxDQUEyQyxDQUFDLENBQ3ZFLENBQUM7UUFFSixPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FDakMsU0FBUyxDQUFDLFVBQUMsWUFBWSxJQUFLLE9BQUEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FDckUsQ0FBQztJQUNKLENBQUM7O2dCQXZHeUIsWUFBWTtnQkFDVixjQUFjO2dCQUNSLG9CQUFvQjs7O0lBSjNDLHVCQUF1QjtRQUhuQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csdUJBQXVCLENBMEduQztrQ0E3SEQ7Q0E2SEMsQUExR0QsSUEwR0M7U0ExR1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgY3JlYXRlRnJvbSxcbiAgRXZlbnRTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNraXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VWaXNpdGVkRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuZXZlbnRzJztcbmltcG9ydCB7XG4gIENhdGVnb3J5UGFnZVJlc3VsdHNFdmVudCxcbiAgUHJvZHVjdERldGFpbHNQYWdlRXZlbnQsXG4gIFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQsXG59IGZyb20gJy4vcHJvZHVjdC1wYWdlLmV2ZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgU2VhcmNoUGFnZVJlc3VsdHNFdmVudCxcbiAgICAgIHRoaXMuYnVpbGRTZWFyY2hQYWdlUmVzdWx0c0V2ZW50KClcbiAgICApO1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgUHJvZHVjdERldGFpbHNQYWdlRXZlbnQsXG4gICAgICB0aGlzLmJ1aWxkUHJvZHVjdERldGFpbHNQYWdlRXZlbnQoKVxuICAgICk7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICBDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnQsXG4gICAgICB0aGlzLmJ1aWxkQ2F0ZWdvcnlSZXN1bHRzUGFnZUV2ZW50KClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkUHJvZHVjdERldGFpbHNQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudFxuICA+IHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0KFBhZ2VWaXNpdGVkRXZlbnQpLnBpcGUoXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChwYWdlVmlzaXRlZEV2ZW50KSA9PiBwYWdlVmlzaXRlZEV2ZW50LnNlbWFudGljUm91dGUgPT09ICdwcm9kdWN0J1xuICAgICAgKSxcbiAgICAgIG1hcCgocGFnZVZpc2l0ZWRFdmVudCkgPT4gcGFnZVZpc2l0ZWRFdmVudC5jb250ZXh0LmlkKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdElkKSA9PlxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChwcm9kdWN0SWQpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKChwcm9kdWN0KSA9PiBCb29sZWFuKHByb2R1Y3QpKSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIG1hcCgocHJvZHVjdCkgPT5cbiAgICAgICAgICAgIGNyZWF0ZUZyb20oUHJvZHVjdERldGFpbHNQYWdlRXZlbnQsIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllczogcHJvZHVjdC5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICBjb2RlOiBwcm9kdWN0LmNvZGUsXG4gICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDYXRlZ29yeVJlc3VsdHNQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxcbiAgICBDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnRcbiAgPiB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgLy8gc2tpcHBpbmcgdGhlIGluaXRpYWwgdmFsdWUsIGFuZCBwcmV2ZW50aW5nIGVtaXNzaW9uIG9mIHRoZSBwcmV2aW91cyBzZWFyY2ggc3RhdGVcbiAgICAgIHNraXAoMSlcbiAgICApO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlQYWdlVmlzaXRlZEV2ZW50JCA9IHRoaXMuZXZlbnRTZXJ2aWNlXG4gICAgICAuZ2V0KFBhZ2VWaXNpdGVkRXZlbnQpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChwYWdlVmlzaXRlZEV2ZW50KSA9PiAoe1xuICAgICAgICAgIGlzQ2F0ZWdvcnlQYWdlOiBwYWdlVmlzaXRlZEV2ZW50LnNlbWFudGljUm91dGUgPT09ICdjYXRlZ29yeScsXG4gICAgICAgICAgY2F0ZWdvcnlDb2RlOiBwYWdlVmlzaXRlZEV2ZW50LmNvbnRleHQuaWQsXG4gICAgICAgIH0pKVxuICAgICAgKTtcblxuICAgIHJldHVybiBjYXRlZ29yeVBhZ2VWaXNpdGVkRXZlbnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXBhZ2VFdmVudC5pc0NhdGVnb3J5UGFnZSkge1xuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzJC5waXBlKFxuICAgICAgICAgIG1hcCgoc2VhcmNoUmVzdWx0cykgPT4gKHtcbiAgICAgICAgICAgIGNhdGVnb3J5Q29kZTogcGFnZUV2ZW50LmNhdGVnb3J5Q29kZSxcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZTogc2VhcmNoUmVzdWx0cy5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgbWFwKChjYXRlZ29yeVBhZ2UpID0+XG4gICAgICAgICAgICBjcmVhdGVGcm9tKENhdGVnb3J5UGFnZVJlc3VsdHNFdmVudCwgY2F0ZWdvcnlQYWdlKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQoKTogT2JzZXJ2YWJsZTxTZWFyY2hQYWdlUmVzdWx0c0V2ZW50PiB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgLy8gc2tpcHBpbmcgdGhlIGluaXRpYWwgdmFsdWUsIGFuZCBwcmV2ZW50aW5nIGVtaXNzaW9uIG9mIHRoZSBwcmV2aW91cyBzZWFyY2ggc3RhdGVcbiAgICAgIHNraXAoMSksXG4gICAgICBtYXAoKHNlYXJjaFJlc3VsdHMpID0+ICh7XG4gICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFJlc3VsdHMuZnJlZVRleHRTZWFyY2gsXG4gICAgICAgIG51bWJlck9mUmVzdWx0czogc2VhcmNoUmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyxcbiAgICAgIH0pKSxcbiAgICAgIG1hcCgoc2VhcmNoUGFnZSkgPT4gY3JlYXRlRnJvbShTZWFyY2hQYWdlUmVzdWx0c0V2ZW50LCBzZWFyY2hQYWdlKSlcbiAgICApO1xuXG4gICAgY29uc3Qgc2VhcmNoUGFnZVZpc2l0ZWRFdmVudCQgPSB0aGlzLmV2ZW50U2VydmljZVxuICAgICAgLmdldChQYWdlVmlzaXRlZEV2ZW50KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocGFnZVZpc2l0ZWRFdmVudCkgPT4gcGFnZVZpc2l0ZWRFdmVudC5zZW1hbnRpY1JvdXRlID09PSAnc2VhcmNoJylcbiAgICAgICk7XG5cbiAgICByZXR1cm4gc2VhcmNoUGFnZVZpc2l0ZWRFdmVudCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoaXNTZWFyY2hQYWdlKSA9PiAoaXNTZWFyY2hQYWdlID8gc2VhcmNoUmVzdWx0cyQgOiBFTVBUWSkpXG4gICAgKTtcbiAgfVxufVxuIl19
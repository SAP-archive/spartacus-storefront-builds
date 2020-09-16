import { Injectable } from '@angular/core';
import { createFrom, EventService, ProductSearchService, ProductService, } from '@spartacus/core';
import { EMPTY } from 'rxjs';
import { filter, map, skip, switchMap, take } from 'rxjs/operators';
import { PageEvent } from '../page/page.events';
import { CategoryPageResultsEvent, ProductDetailsPageEvent, SearchPageResultsEvent, } from './product-page.events';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class ProductPageEventBuilder {
    constructor(eventService, productService, productSearchService) {
        this.eventService = eventService;
        this.productService = productService;
        this.productSearchService = productSearchService;
        this.register();
    }
    register() {
        this.eventService.register(SearchPageResultsEvent, this.buildSearchPageResultsEvent());
        this.eventService.register(ProductDetailsPageEvent, this.buildProductDetailsPageEvent());
        this.eventService.register(CategoryPageResultsEvent, this.buildCategoryResultsPageEvent());
    }
    buildProductDetailsPageEvent() {
        return this.eventService.get(PageEvent).pipe(filter((pageEvent) => pageEvent.semanticRoute === 'product'), switchMap((pageEvent) => this.productService.get(pageEvent.context.id).pipe(filter((product) => Boolean(product)), take(1), map((product) => createFrom(ProductDetailsPageEvent, Object.assign(Object.assign({}, pageEvent), { categories: product.categories, code: product.code, name: product.name, price: product.price }))))));
    }
    buildCategoryResultsPageEvent() {
        const searchResults$ = this.productSearchService.getResults().pipe(
        // skipping the initial value, and preventing emission of the previous search state
        skip(1));
        return this.eventService.get(PageEvent).pipe(switchMap((pageEvent) => {
            if ((pageEvent === null || pageEvent === void 0 ? void 0 : pageEvent.semanticRoute) !== 'category') {
                return EMPTY;
            }
            return searchResults$.pipe(map((searchResults) => {
                var _a, _b, _c;
                return (Object.assign(Object.assign({}, pageEvent), {
                    categoryCode: (_a = pageEvent === null || pageEvent === void 0 ? void 0 : pageEvent.context) === null || _a === void 0 ? void 0 : _a.id,
                    numberOfResults: (_b = searchResults === null || searchResults === void 0 ? void 0 : searchResults.pagination) === null || _b === void 0 ? void 0 : _b.totalResults,
                    categoryName: (_c = searchResults.breadcrumbs) === null || _c === void 0 ? void 0 : _c[0].facetValueName,
                }));
            }), map((categoryPage) => createFrom(CategoryPageResultsEvent, categoryPage)));
        }));
    }
    buildSearchPageResultsEvent() {
        const searchResults$ = this.productSearchService.getResults().pipe(
        // skipping the initial value, and preventing emission of the previous search state
        skip(1));
        return this.eventService.get(PageEvent).pipe(switchMap((pageEvent) => {
            if ((pageEvent === null || pageEvent === void 0 ? void 0 : pageEvent.semanticRoute) !== 'search') {
                return EMPTY;
            }
            return searchResults$.pipe(map((searchResults) => {
                var _a;
                return (Object.assign(Object.assign({}, pageEvent), {
                    searchTerm: searchResults === null || searchResults === void 0 ? void 0 : searchResults.freeTextSearch,
                    numberOfResults: (_a = searchResults === null || searchResults === void 0 ? void 0 : searchResults.pagination) === null || _a === void 0 ? void 0 : _a.totalResults,
                }));
            }), map((searchPage) => createFrom(SearchPageResultsEvent, searchPage)));
        }));
    }
}
ProductPageEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductPageEventBuilder_Factory() { return new ProductPageEventBuilder(i0.ɵɵinject(i1.EventService), i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.ProductSearchService)); }, token: ProductPageEventBuilder, providedIn: "root" });
ProductPageEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductPageEventBuilder.ctorParameters = () => [
    { type: EventService },
    { type: ProductService },
    { type: ProductSearchService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9ldmVudHMvcHJvZHVjdC9wcm9kdWN0LXBhZ2UtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFLL0IsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNZLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUVwRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVTLFFBQVE7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLHNCQUFzQixFQUN0QixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FDbkMsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN4Qix1QkFBdUIsRUFDdkIsSUFBSSxDQUFDLDRCQUE0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OztnQkFBQyxPQUFBLGlDQUNsQixTQUFTLEdBQ1Q7b0JBQ0QsVUFBVSxFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxjQUFjO29CQUN6QyxlQUFlLFFBQUUsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFVBQVUsMENBQUUsWUFBWTtpQkFDekQsRUFDRCxDQUFBO2FBQUEsQ0FBQyxFQUNILEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQ3BFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQXpHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWZDLFlBQVk7WUFFWixjQUFjO1lBRGQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgY3JlYXRlRnJvbSxcbiAgRXZlbnRTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNraXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VFdmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS5ldmVudHMnO1xuaW1wb3J0IHtcbiAgQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50LFxuICBQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCxcbiAgU2VhcmNoUGFnZVJlc3VsdHNFdmVudCxcbn0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UuZXZlbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlRXZlbnRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICBTZWFyY2hQYWdlUmVzdWx0c0V2ZW50LFxuICAgICAgdGhpcy5idWlsZFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQoKVxuICAgICk7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICBQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCxcbiAgICAgIHRoaXMuYnVpbGRQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCgpXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yZWdpc3RlcihcbiAgICAgIENhdGVnb3J5UGFnZVJlc3VsdHNFdmVudCxcbiAgICAgIHRoaXMuYnVpbGRDYXRlZ29yeVJlc3VsdHNQYWdlRXZlbnQoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50XG4gID4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5nZXQoUGFnZUV2ZW50KS5waXBlKFxuICAgICAgZmlsdGVyKChwYWdlRXZlbnQpID0+IHBhZ2VFdmVudC5zZW1hbnRpY1JvdXRlID09PSAncHJvZHVjdCcpLFxuICAgICAgc3dpdGNoTWFwKChwYWdlRXZlbnQpID0+XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KHBhZ2VFdmVudC5jb250ZXh0LmlkKS5waXBlKFxuICAgICAgICAgIGZpbHRlcigocHJvZHVjdCkgPT4gQm9vbGVhbihwcm9kdWN0KSksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBtYXAoKHByb2R1Y3QpID0+XG4gICAgICAgICAgICBjcmVhdGVGcm9tKFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50LCB7XG4gICAgICAgICAgICAgIC4uLnBhZ2VFdmVudCxcbiAgICAgICAgICAgICAgY2F0ZWdvcmllczogcHJvZHVjdC5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICBjb2RlOiBwcm9kdWN0LmNvZGUsXG4gICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRDYXRlZ29yeVJlc3VsdHNQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxcbiAgICBDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnRcbiAgPiB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgLy8gc2tpcHBpbmcgdGhlIGluaXRpYWwgdmFsdWUsIGFuZCBwcmV2ZW50aW5nIGVtaXNzaW9uIG9mIHRoZSBwcmV2aW91cyBzZWFyY2ggc3RhdGVcbiAgICAgIHNraXAoMSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldChQYWdlRXZlbnQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAocGFnZUV2ZW50Py5zZW1hbnRpY1JvdXRlICE9PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHMkLnBpcGUoXG4gICAgICAgICAgbWFwKChzZWFyY2hSZXN1bHRzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucGFnZUV2ZW50LFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBjYXRlZ29yeUNvZGU6IHBhZ2VFdmVudD8uY29udGV4dD8uaWQsXG4gICAgICAgICAgICAgIG51bWJlck9mUmVzdWx0czogc2VhcmNoUmVzdWx0cz8ucGFnaW5hdGlvbj8udG90YWxSZXN1bHRzLFxuICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU6IHNlYXJjaFJlc3VsdHMuYnJlYWRjcnVtYnM/LlswXS5mYWNldFZhbHVlTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIG1hcCgoY2F0ZWdvcnlQYWdlKSA9PlxuICAgICAgICAgICAgY3JlYXRlRnJvbShDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnQsIGNhdGVnb3J5UGFnZSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRTZWFyY2hQYWdlUmVzdWx0c0V2ZW50KCk6IE9ic2VydmFibGU8U2VhcmNoUGFnZVJlc3VsdHNFdmVudD4ge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMkID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgIC8vIHNraXBwaW5nIHRoZSBpbml0aWFsIHZhbHVlLCBhbmQgcHJldmVudGluZyBlbWlzc2lvbiBvZiB0aGUgcHJldmlvdXMgc2VhcmNoIHN0YXRlXG4gICAgICBza2lwKDEpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5nZXQoUGFnZUV2ZW50KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHBhZ2VFdmVudD8uc2VtYW50aWNSb3V0ZSAhPT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0cyQucGlwZShcbiAgICAgICAgICBtYXAoKHNlYXJjaFJlc3VsdHMpID0+ICh7XG4gICAgICAgICAgICAuLi5wYWdlRXZlbnQsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFJlc3VsdHM/LmZyZWVUZXh0U2VhcmNoLFxuICAgICAgICAgICAgICBudW1iZXJPZlJlc3VsdHM6IHNlYXJjaFJlc3VsdHM/LnBhZ2luYXRpb24/LnRvdGFsUmVzdWx0cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIG1hcCgoc2VhcmNoUGFnZSkgPT4gY3JlYXRlRnJvbShTZWFyY2hQYWdlUmVzdWx0c0V2ZW50LCBzZWFyY2hQYWdlKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
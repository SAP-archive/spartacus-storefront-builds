/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { ProductSearchService, RoutingService, } from '@spartacus/core';
import { combineLatest, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
/**
 * @record
 */
export function SearchBoxConfig() { }
if (false) {
    /** @type {?} */
    SearchBoxConfig.prototype.maxProducts;
    /** @type {?} */
    SearchBoxConfig.prototype.displaySuggestions;
    /** @type {?} */
    SearchBoxConfig.prototype.maxSuggestions;
    /** @type {?} */
    SearchBoxConfig.prototype.minCharactersBeforeRequest;
    /** @type {?} */
    SearchBoxConfig.prototype.displayProducts;
}
export class SearchBoxComponentService {
    /**
     * @param {?} componentData
     * @param {?} searchService
     * @param {?} routingService
     */
    constructor(componentData, searchService, routingService) {
        this.componentData = componentData;
        this.searchService = searchService;
        this.routingService = routingService;
        this.defaultConfig = {
            maxProducts: 2,
            displaySuggestions: true,
            maxSuggestions: 5,
            minCharactersBeforeRequest: 3,
            displayProducts: true,
        };
        this.config$ = of(this.defaultConfig);
        this.queryParam$ = this.routingService
            .getRouterState()
            .pipe(map(routingData => routingData.state.params.query));
        this.typeahead = (text$) => combineLatest(text$.pipe(debounceTime(300), distinctUntilChanged()), this.config$).pipe(switchMap(([term, config]) => {
            if (term.length >= config.minCharactersBeforeRequest) {
                return this.fetch(term, config);
            }
            else {
                return of([]);
            }
        }));
        if (componentData) {
            this.config$ = merge(this.config$, this.componentData.data$.pipe(map(config => (Object.assign({}, this.defaultConfig, config)))));
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    launchSearchPage(query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query },
        });
    }
    /**
     * @private
     * @param {?} text
     * @param {?} config
     * @return {?}
     */
    fetch(text, config) {
        this.executeSearch(text, config);
        /** @type {?} */
        const suggestions = this.searchService
            .getSearchSuggestions()
            .pipe(map(res => res.map(suggestion => suggestion.value)));
        /** @type {?} */
        const products = this.searchService
            .getAuxSearchResults()
            .pipe(map(res => res.products || []));
        return combineLatest(suggestions, products).pipe(map(([a, b]) => [...a, ...b]));
    }
    /**
     * @private
     * @param {?} search
     * @param {?} config
     * @return {?}
     */
    executeSearch(search, config) {
        if (config.displayProducts) {
            this.searchService.searchAuxiliary(search, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.getSuggestions(search, {
                pageSize: config.maxSuggestions,
            });
        }
    }
}
SearchBoxComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchBoxComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ProductSearchService },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    SearchBoxComponentService.prototype.defaultConfig;
    /** @type {?} */
    SearchBoxComponentService.prototype.config$;
    /** @type {?} */
    SearchBoxComponentService.prototype.queryParam$;
    /** @type {?} */
    SearchBoxComponentService.prototype.typeahead;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.componentData;
    /** @type {?} */
    SearchBoxComponentService.prototype.searchService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7QUFFeEYscUNBTUM7OztJQUxDLHNDQUFvQjs7SUFDcEIsNkNBQTRCOztJQUM1Qix5Q0FBdUI7O0lBQ3ZCLHFEQUFtQzs7SUFDbkMsMENBQXlCOztBQUkzQixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFlcEMsWUFFWSxhQUFzRCxFQUN6RCxhQUFtQyxFQUNoQyxjQUE4QjtRQUY5QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUM7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWxCMUMsa0JBQWEsR0FBb0I7WUFDL0IsV0FBVyxFQUFFLENBQUM7WUFDZCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLDBCQUEwQixFQUFFLENBQUM7WUFDN0IsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUVGLFlBQU8sR0FBZ0MsRUFBRSxDQUFDLElB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LFVBQVU7Ozs7WUFWRixnQkFBZ0IsdUJBMkJwQixRQUFRO1lBckNYLG9CQUFvQjtZQUNwQixjQUFjOzs7O0lBcUJkLGtEQU1FOztJQUVGLDRDQUE4RDs7SUFFOUQsZ0RBRTREOztJQWtCNUQsOENBZUk7Ozs7O0lBOUJGLGtEQUNnRTs7SUFDaEUsa0RBQTBDOzs7OztJQUMxQyxtREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VhcmNoQm94Q29tcG9uZW50LFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQm94Q29uZmlnIHtcbiAgbWF4UHJvZHVjdHM6IG51bWJlcjtcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiBib29sZWFuO1xuICBtYXhTdWdnZXN0aW9uczogbnVtYmVyO1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogbnVtYmVyO1xuICBkaXNwbGF5UHJvZHVjdHM6IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgZGVmYXVsdENvbmZpZzogU2VhcmNoQm94Q29uZmlnID0ge1xuICAgIG1heFByb2R1Y3RzOiAyLFxuICAgIGRpc3BsYXlTdWdnZXN0aW9uczogdHJ1ZSxcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcbiAgICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMyxcbiAgICBkaXNwbGF5UHJvZHVjdHM6IHRydWUsXG4gIH07XG5cbiAgY29uZmlnJDogT2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+ID0gb2YodGhpcy5kZWZhdWx0Q29uZmlnKTtcblxuICBxdWVyeVBhcmFtJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgLnBpcGUobWFwKHJvdXRpbmdEYXRhID0+IHJvdXRpbmdEYXRhLnN0YXRlLnBhcmFtcy5xdWVyeSkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PixcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHtcbiAgICBpZiAoY29tcG9uZW50RGF0YSkge1xuICAgICAgdGhpcy5jb25maWckID0gbWVyZ2UoXG4gICAgICAgIHRoaXMuY29uZmlnJCxcbiAgICAgICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICAgICAgbWFwKGNvbmZpZyA9PiAoeyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0eXBlYWhlYWQgPSAodGV4dCQ6IE9ic2VydmFibGU8c3RyaW5nPik6IE9ic2VydmFibGU8YW55W10+ID0+XG4gICAgY29tYmluZUxhdGVzdChcbiAgICAgIHRleHQkLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApLFxuICAgICAgdGhpcy5jb25maWckXG4gICAgKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbdGVybSwgY29uZmlnXSkgPT4ge1xuICAgICAgICBpZiAodGVybS5sZW5ndGggPj0gY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2godGVybSwgY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIGxhdW5jaFNlYXJjaFBhZ2UocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2godGV4dDogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICB0aGlzLmV4ZWN1dGVTZWFyY2godGV4dCwgY29uZmlnKTtcblxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuZ2V0U2VhcmNoU3VnZ2VzdGlvbnMoKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiByZXMubWFwKHN1Z2dlc3Rpb24gPT4gc3VnZ2VzdGlvbi52YWx1ZSkpKTtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuZ2V0QXV4U2VhcmNoUmVzdWx0cygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5wcm9kdWN0cyB8fCBbXSkpO1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHN1Z2dlc3Rpb25zLCBwcm9kdWN0cykucGlwZShcbiAgICAgIG1hcCgoW2EsIGJdKSA9PiBbLi4uYSwgLi4uYl0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVNlYXJjaChzZWFyY2g6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaEF1eGlsaWFyeShzZWFyY2gsIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhQcm9kdWN0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoc2VhcmNoLCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
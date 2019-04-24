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
            route: 'search',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3NlYXJjaC1ib3gvc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7O0FBRXhGLHFDQU1DOzs7SUFMQyxzQ0FBb0I7O0lBQ3BCLDZDQUE0Qjs7SUFDNUIseUNBQXVCOztJQUN2QixxREFBbUM7O0lBQ25DLDBDQUF5Qjs7QUFJM0IsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBZXBDLFlBRVksYUFBc0QsRUFDekQsYUFBbUMsRUFDaEMsY0FBOEI7UUFGOUIsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3pELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsQjFDLGtCQUFhLEdBQW9CO1lBQy9CLFdBQVcsRUFBRSxDQUFDO1lBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixjQUFjLEVBQUUsQ0FBQztZQUNqQiwwQkFBMEIsRUFBRSxDQUFDO1lBQzdCLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUM7UUFFRixZQUFPLEdBQWdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxD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QkFBZ0IsdUJBMkJwQixRQUFRO1lBckNYLG9CQUFvQjtZQUNwQixjQUFjOzs7O0lBcUJkLGtEQU1FOztJQUVGLDRDQUE4RDs7SUFFOUQsZ0RBRTREOztJQWtCNUQsOENBZUk7Ozs7O0lBOUJGLGtEQUNnRTs7SUFDaEUsa0RBQTBDOzs7OztJQUMxQyxtREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VhcmNoQm94Q29tcG9uZW50LFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQm94Q29uZmlnIHtcbiAgbWF4UHJvZHVjdHM6IG51bWJlcjtcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiBib29sZWFuO1xuICBtYXhTdWdnZXN0aW9uczogbnVtYmVyO1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogbnVtYmVyO1xuICBkaXNwbGF5UHJvZHVjdHM6IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgZGVmYXVsdENvbmZpZzogU2VhcmNoQm94Q29uZmlnID0ge1xuICAgIG1heFByb2R1Y3RzOiAyLFxuICAgIGRpc3BsYXlTdWdnZXN0aW9uczogdHJ1ZSxcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcbiAgICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMyxcbiAgICBkaXNwbGF5UHJvZHVjdHM6IHRydWUsXG4gIH07XG5cbiAgY29uZmlnJDogT2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+ID0gb2YodGhpcy5kZWZhdWx0Q29uZmlnKTtcblxuICBxdWVyeVBhcmFtJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgLnBpcGUobWFwKHJvdXRpbmdEYXRhID0+IHJvdXRpbmdEYXRhLnN0YXRlLnBhcmFtcy5xdWVyeSkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PixcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHtcbiAgICBpZiAoY29tcG9uZW50RGF0YSkge1xuICAgICAgdGhpcy5jb25maWckID0gbWVyZ2UoXG4gICAgICAgIHRoaXMuY29uZmlnJCxcbiAgICAgICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICAgICAgbWFwKGNvbmZpZyA9PiAoeyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0eXBlYWhlYWQgPSAodGV4dCQ6IE9ic2VydmFibGU8c3RyaW5nPik6IE9ic2VydmFibGU8YW55W10+ID0+XG4gICAgY29tYmluZUxhdGVzdChcbiAgICAgIHRleHQkLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApLFxuICAgICAgdGhpcy5jb25maWckXG4gICAgKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbdGVybSwgY29uZmlnXSkgPT4ge1xuICAgICAgICBpZiAodGVybS5sZW5ndGggPj0gY29uZmlnLm1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2godGVybSwgY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIGxhdW5jaFNlYXJjaFBhZ2UocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgcm91dGU6ICdzZWFyY2gnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoKHRleHQ6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgdGhpcy5leGVjdXRlU2VhcmNoKHRleHQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgLmdldFNlYXJjaFN1Z2dlc3Rpb25zKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLm1hcChzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24udmFsdWUpKSk7XG5cbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgLmdldEF1eFNlYXJjaFJlc3VsdHMoKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiByZXMucHJvZHVjdHMgfHwgW10pKTtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChzdWdnZXN0aW9ucywgcHJvZHVjdHMpLnBpcGUoXG4gICAgICBtYXAoKFthLCBiXSkgPT4gWy4uLmEsIC4uLmJdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVTZWFyY2goc2VhcmNoOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hBdXhpbGlhcnkoc2VhcmNoLCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4UHJvZHVjdHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN1Z2dlc3Rpb25zKHNlYXJjaCwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7QUFFeEYscUNBTUM7OztJQUxDLHNDQUFvQjs7SUFDcEIsNkNBQTRCOztJQUM1Qix5Q0FBdUI7O0lBQ3ZCLHFEQUFtQzs7SUFDbkMsMENBQXlCOztBQUkzQixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFlcEMsWUFFWSxhQUFzRCxFQUN6RCxhQUFtQyxFQUNoQyxjQUE4QjtRQUY5QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUM7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWxCMUMsa0JBQWEsR0FBb0I7WUFDL0IsV0FBVyxFQUFFLENBQUM7WUFDZCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLDBCQUEwQixFQUFFLENBQUM7WUFDN0IsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUVGLFlBQU8sR0FBZ0MsRUFBRSxDQUFDLElB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VUFBVTs7OztZQVZGLGdCQUFnQix1QkEyQnBCLFFBQVE7WUFyQ1gsb0JBQW9CO1lBQ3BCLGNBQWM7Ozs7SUFxQmQsa0RBTUU7O0lBRUYsNENBQThEOztJQUU5RCxnREFFNEQ7O0lBa0I1RCw4Q0FlSTs7Ozs7SUE5QkYsa0RBQ2dFOztJQUNoRSxrREFBMEM7Ozs7O0lBQzFDLG1EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZWFyY2hCb3hDb21wb25lbnQsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hCb3hDb25maWcge1xuICBtYXhQcm9kdWN0czogbnVtYmVyO1xuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IGJvb2xlYW47XG4gIG1heFN1Z2dlc3Rpb25zOiBudW1iZXI7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiBudW1iZXI7XG4gIGRpc3BsYXlQcm9kdWN0czogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uge1xuICBkZWZhdWx0Q29uZmlnOiBTZWFyY2hCb3hDb25maWcgPSB7XG4gICAgbWF4UHJvZHVjdHM6IDIsXG4gICAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxuICAgIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiAzLFxuICAgIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgfTtcblxuICBjb25maWckOiBPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4gPSBvZih0aGlzLmRlZmF1bHRDb25maWcpO1xuXG4gIHF1ZXJ5UGFyYW0kOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLnF1ZXJ5KSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+LFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIGlmIChjb21wb25lbnREYXRhKSB7XG4gICAgICB0aGlzLmNvbmZpZyQgPSBtZXJnZShcbiAgICAgICAgdGhpcy5jb25maWckLFxuICAgICAgICB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgICBtYXAoY29uZmlnID0+ICh7IC4uLnRoaXMuZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT5cbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGV4dCQucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICksXG4gICAgICB0aGlzLmNvbmZpZyRcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0ZXJtLCBjb25maWddKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtLmxlbmd0aCA+PSBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaCh0ZXJtLCBjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgbGF1bmNoU2VhcmNoUGFnZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICByb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2godGV4dDogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICB0aGlzLmV4ZWN1dGVTZWFyY2godGV4dCwgY29uZmlnKTtcblxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuZ2V0U2VhcmNoU3VnZ2VzdGlvbnMoKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiByZXMubWFwKHN1Z2dlc3Rpb24gPT4gc3VnZ2VzdGlvbi52YWx1ZSkpKTtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuZ2V0QXV4U2VhcmNoUmVzdWx0cygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5wcm9kdWN0cyB8fCBbXSkpO1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHN1Z2dlc3Rpb25zLCBwcm9kdWN0cykucGlwZShcbiAgICAgIG1hcCgoW2EsIGJdKSA9PiBbLi4uYSwgLi4uYl0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVNlYXJjaChzZWFyY2g6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaEF1eGlsaWFyeShzZWFyY2gsIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhQcm9kdWN0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoc2VhcmNoLCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
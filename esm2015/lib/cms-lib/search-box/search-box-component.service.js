/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { ProductSearchService } from '@spartacus/core';
import { combineLatest, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, } from 'rxjs/operators';
import { RoutingService } from '@spartacus/core';
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
            displayProducts: false,
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
            route: [{ name: 'search', params: { query } }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3NlYXJjaC1ib3gvc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLEdBQUcsRUFDSCxTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsY0FBYyxFQUF5QixNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXhFLHFDQU1DOzs7SUFMQyxzQ0FBb0I7O0lBQ3BCLDZDQUE0Qjs7SUFDNUIseUNBQXVCOztJQUN2QixxREFBbUM7O0lBQ25DLDBDQUF5Qjs7QUFJM0IsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBZXBDLFlBRVksYUFBc0QsRUFDekQsYUFBbUMsRUFDaEMsY0FBOEI7UUFGOUIsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3pELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsQjFDLGtCQUFhLEdBQW9CO1lBQy9CLFdBQVcsRUFBRSxDQUFDO1lBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixjQUFjLEVBQUUsQ0FBQztZQUNqQiwwQkFBMEIsRUFBRSxDQUFDO1lBQzdCLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUM7UUFFRixZQUFP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Q0FBQyxjQUFjO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBbEZGLFVBQVU7Ozs7WUFuQkYsZ0JBQWdCLHVCQW9DcEIsUUFBUTtZQW5DSixvQkFBb0I7WUFRcEIsY0FBYzs7OztJQVlyQixrREFNRTs7SUFFRiw0Q0FBOEQ7O0lBRTlELGdEQUU0RDs7SUFrQjVELDhDQWVJOzs7OztJQTlCRixrREFDZ0U7O0lBQ2hFLGtEQUEwQzs7Ozs7SUFDMUMsbURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBDbXNTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEJveENvbmZpZyB7XG4gIG1heFByb2R1Y3RzOiBudW1iZXI7XG4gIGRpc3BsYXlTdWdnZXN0aW9uczogYm9vbGVhbjtcbiAgbWF4U3VnZ2VzdGlvbnM6IG51bWJlcjtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IG51bWJlcjtcbiAgZGlzcGxheVByb2R1Y3RzOiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gIGRlZmF1bHRDb25maWc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgICBtYXhQcm9kdWN0czogMixcbiAgICBkaXNwbGF5U3VnZ2VzdGlvbnM6IHRydWUsXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gICAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDMsXG4gICAgZGlzcGxheVByb2R1Y3RzOiBmYWxzZSxcbiAgfTtcblxuICBjb25maWckOiBPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4gPSBvZih0aGlzLmRlZmF1bHRDb25maWcpO1xuXG4gIHF1ZXJ5UGFyYW0kOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLnF1ZXJ5KSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+LFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIGlmIChjb21wb25lbnREYXRhKSB7XG4gICAgICB0aGlzLmNvbmZpZyQgPSBtZXJnZShcbiAgICAgICAgdGhpcy5jb25maWckLFxuICAgICAgICB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgICBtYXAoY29uZmlnID0+ICh7IC4uLnRoaXMuZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT5cbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGV4dCQucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICksXG4gICAgICB0aGlzLmNvbmZpZyRcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0ZXJtLCBjb25maWddKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtLmxlbmd0aCA+PSBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaCh0ZXJtLCBjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgbGF1bmNoU2VhcmNoUGFnZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICByb3V0ZTogW3sgbmFtZTogJ3NlYXJjaCcsIHBhcmFtczogeyBxdWVyeSB9IH1dLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaCh0ZXh0OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHRoaXMuZXhlY3V0ZVNlYXJjaCh0ZXh0LCBjb25maWcpO1xuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRTZWFyY2hTdWdnZXN0aW9ucygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnZhbHVlKSkpO1xuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRBdXhTZWFyY2hSZXN1bHRzKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLnByb2R1Y3RzIHx8IFtdKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc3VnZ2VzdGlvbnMsIHByb2R1Y3RzKS5waXBlKFxuICAgICAgbWFwKChbYSwgYl0pID0+IFsuLi5hLCAuLi5iXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlU2VhcmNoKHNlYXJjaDogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IHZvaWQge1xuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoQXV4aWxpYXJ5KHNlYXJjaCwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdWdnZXN0aW9ucyhzZWFyY2gsIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
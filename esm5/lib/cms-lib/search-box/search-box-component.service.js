/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SearchBoxComponentService = /** @class */ (function () {
    function SearchBoxComponentService(componentData, searchService, routingService) {
        var _this = this;
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
            .pipe(map(function (routingData) { return routingData.state.params.query; }));
        this.typeahead = function (text$) {
            return combineLatest(text$.pipe(debounceTime(300), distinctUntilChanged()), _this.config$).pipe(switchMap(function (_a) {
                var _b = tslib_1.__read(_a, 2), term = _b[0], config = _b[1];
                if (term.length >= config.minCharactersBeforeRequest) {
                    return _this.fetch(term, config);
                }
                else {
                    return of([]);
                }
            }));
        };
        if (componentData) {
            this.config$ = merge(this.config$, this.componentData.data$.pipe(map(function (config) { return (tslib_1.__assign({}, _this.defaultConfig, config)); })));
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponentService.prototype.launchSearchPage = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.routingService.go({
            route: 'search',
            params: { query: query },
        });
    };
    /**
     * @private
     * @param {?} text
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.fetch = /**
     * @private
     * @param {?} text
     * @param {?} config
     * @return {?}
     */
    function (text, config) {
        this.executeSearch(text, config);
        /** @type {?} */
        var suggestions = this.searchService
            .getSearchSuggestions()
            .pipe(map(function (res) { return res.map(function (suggestion) { return suggestion.value; }); }));
        /** @type {?} */
        var products = this.searchService
            .getAuxSearchResults()
            .pipe(map(function (res) { return res.products || []; }));
        return combineLatest(suggestions, products).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), a = _b[0], b = _b[1];
            return tslib_1.__spread(a, b);
        }));
    };
    /**
     * @private
     * @param {?} search
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.executeSearch = /**
     * @private
     * @param {?} search
     * @param {?} config
     * @return {?}
     */
    function (search, config) {
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
    };
    SearchBoxComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: ProductSearchService },
        { type: RoutingService }
    ]; };
    return SearchBoxComponentService;
}());
export { SearchBoxComponentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3NlYXJjaC1ib3gvc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLEdBQUcsRUFDSCxTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7OztBQUV4RixxQ0FNQzs7O0lBTEMsc0NBQW9COztJQUNwQiw2Q0FBNEI7O0lBQzVCLHlDQUF1Qjs7SUFDdkIscURBQW1DOztJQUNuQywwQ0FBeUI7O0FBRzNCO0lBZ0JFLG1DQUVZLGFBQXNELEVBQ3pELGFBQW1DLEVBQ2hDLGNBQThCO1FBSjFDLGlCQWNDO1FBWlcsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3pELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsQjFDLGtCQUFhLEdBQW9CO1lBQy9CLFdBQVcsRUFBRSxDQUFDO1lBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixjQUFjLEVBQUUsQ0FBQztZQUNqQiwwQkFBMEIsRUFBRSxDQUFDO1lBQzdCLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUM7UUFFRixZQUFPLEdBQWdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7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QyxNQUFNLEVBQUU7Z0JBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYzthQUNoQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQW5GRixVQUFVOzs7O2dCQVZGLGdCQUFnQix1QkEyQnBCLFFBQVE7Z0JBckNYLG9CQUFvQjtnQkFDcEIsY0FBYzs7SUF1R2hCLGdDQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0FuRlkseUJBQXlCOzs7SUFDcEMsa0RBTUU7O0lBRUYsNENBQThEOztJQUU5RCxnREFFNEQ7O0lBa0I1RCw4Q0FlSTs7Ozs7SUE5QkYsa0RBQ2dFOztJQUNoRSxrREFBMEM7Ozs7O0lBQzFDLG1EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZWFyY2hCb3hDb21wb25lbnQsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hCb3hDb25maWcge1xuICBtYXhQcm9kdWN0czogbnVtYmVyO1xuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IGJvb2xlYW47XG4gIG1heFN1Z2dlc3Rpb25zOiBudW1iZXI7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiBudW1iZXI7XG4gIGRpc3BsYXlQcm9kdWN0czogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uge1xuICBkZWZhdWx0Q29uZmlnOiBTZWFyY2hCb3hDb25maWcgPSB7XG4gICAgbWF4UHJvZHVjdHM6IDIsXG4gICAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxuICAgIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiAzLFxuICAgIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgfTtcblxuICBjb25maWckOiBPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4gPSBvZih0aGlzLmRlZmF1bHRDb25maWcpO1xuXG4gIHF1ZXJ5UGFyYW0kOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLnF1ZXJ5KSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+LFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIGlmIChjb21wb25lbnREYXRhKSB7XG4gICAgICB0aGlzLmNvbmZpZyQgPSBtZXJnZShcbiAgICAgICAgdGhpcy5jb25maWckLFxuICAgICAgICB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgICBtYXAoY29uZmlnID0+ICh7IC4uLnRoaXMuZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT5cbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGV4dCQucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICksXG4gICAgICB0aGlzLmNvbmZpZyRcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0ZXJtLCBjb25maWddKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtLmxlbmd0aCA+PSBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaCh0ZXJtLCBjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgbGF1bmNoU2VhcmNoUGFnZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICByb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2godGV4dDogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICB0aGlzLmV4ZWN1dGVTZWFyY2godGV4dCwgY29uZmlnKTtcblxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuZ2V0U2VhcmNoU3VnZ2VzdGlvbnMoKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiByZXMubWFwKHN1Z2dlc3Rpb24gPT4gc3VnZ2VzdGlvbi52YWx1ZSkpKTtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuZ2V0QXV4U2VhcmNoUmVzdWx0cygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5wcm9kdWN0cyB8fCBbXSkpO1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHN1Z2dlc3Rpb25zLCBwcm9kdWN0cykucGlwZShcbiAgICAgIG1hcCgoW2EsIGJdKSA9PiBbLi4uYSwgLi4uYl0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVNlYXJjaChzZWFyY2g6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoY29uZmlnLmRpc3BsYXlQcm9kdWN0cykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaEF1eGlsaWFyeShzZWFyY2gsIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhQcm9kdWN0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoc2VhcmNoLCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
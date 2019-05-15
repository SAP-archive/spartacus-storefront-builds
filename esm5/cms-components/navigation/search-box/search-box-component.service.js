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
            cxRoute: 'search',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7O0FBRXhGLHFDQU1DOzs7SUFMQyxzQ0FBb0I7O0lBQ3BCLDZDQUE0Qjs7SUFDNUIseUNBQXVCOztJQUN2QixxREFBbUM7O0lBQ25DLDBDQUF5Qjs7QUFHM0I7SUFnQkUsbUNBRVksYUFBc0QsRUFDekQsYUFBbUMsRUFDaEMsY0FBOEI7UUFKMUMsaUJBY0M7UUFaVyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUM7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWxCMUMsa0JBQWEsR0FBb0I7WUFDL0IsV0FBVyxFQUFFLENBQUM7WUFDZCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLDBCQUEwQixFQUFFLENBQUM7WUFDN0IsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUVGLFlBQU8sR0FBZ0MsRUFBRSxDQUFDLElBQUksQ0FBQyxh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YSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYzthQUNoQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQW5GRixVQUFVOzs7O2dCQVZGLGdCQUFnQix1QkEyQnBCLFFBQVE7Z0JBckNYLG9CQUFvQjtnQkFDcEIsY0FBYzs7SUF1R2hCLGdDQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0FuRlkseUJBQXlCOzs7SUFDcEMsa0RBTUU7O0lBRUYsNENBQThEOztJQUU5RCxnREFFNEQ7O0lBa0I1RCw4Q0FlSTs7Ozs7SUE5QkYsa0RBQ2dFOztJQUNoRSxrREFBMEM7Ozs7O0lBQzFDLG1EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZWFyY2hCb3hDb21wb25lbnQsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hCb3hDb25maWcge1xuICBtYXhQcm9kdWN0czogbnVtYmVyO1xuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IGJvb2xlYW47XG4gIG1heFN1Z2dlc3Rpb25zOiBudW1iZXI7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiBudW1iZXI7XG4gIGRpc3BsYXlQcm9kdWN0czogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uge1xuICBkZWZhdWx0Q29uZmlnOiBTZWFyY2hCb3hDb25maWcgPSB7XG4gICAgbWF4UHJvZHVjdHM6IDIsXG4gICAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxuICAgIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiAzLFxuICAgIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgfTtcblxuICBjb25maWckOiBPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4gPSBvZih0aGlzLmRlZmF1bHRDb25maWcpO1xuXG4gIHF1ZXJ5UGFyYW0kOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLnF1ZXJ5KSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+LFxuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIGlmIChjb21wb25lbnREYXRhKSB7XG4gICAgICB0aGlzLmNvbmZpZyQgPSBtZXJnZShcbiAgICAgICAgdGhpcy5jb25maWckLFxuICAgICAgICB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgICBtYXAoY29uZmlnID0+ICh7IC4uLnRoaXMuZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT5cbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGV4dCQucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICksXG4gICAgICB0aGlzLmNvbmZpZyRcbiAgICApLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFt0ZXJtLCBjb25maWddKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtLmxlbmd0aCA+PSBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaCh0ZXJtLCBjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgbGF1bmNoU2VhcmNoUGFnZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICBjeFJvdXRlOiAnc2VhcmNoJyxcbiAgICAgIHBhcmFtczogeyBxdWVyeSB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaCh0ZXh0OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHRoaXMuZXhlY3V0ZVNlYXJjaCh0ZXh0LCBjb25maWcpO1xuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRTZWFyY2hTdWdnZXN0aW9ucygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnZhbHVlKSkpO1xuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRBdXhTZWFyY2hSZXN1bHRzKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLnByb2R1Y3RzIHx8IFtdKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc3VnZ2VzdGlvbnMsIHByb2R1Y3RzKS5waXBlKFxuICAgICAgbWFwKChbYSwgYl0pID0+IFsuLi5hLCAuLi5iXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlU2VhcmNoKHNlYXJjaDogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IHZvaWQge1xuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoQXV4aWxpYXJ5KHNlYXJjaCwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdWdnZXN0aW9ucyhzZWFyY2gsIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
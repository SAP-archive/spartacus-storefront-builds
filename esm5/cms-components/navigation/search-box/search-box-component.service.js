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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7O0FBRXhGLHFDQU1DOzs7SUFMQyxzQ0FBb0I7O0lBQ3BCLDZDQUE0Qjs7SUFDNUIseUNBQXVCOztJQUN2QixxREFBbUM7O0lBQ25DLDBDQUF5Qjs7QUFHM0I7SUFnQkUsbUNBRVksYUFBc0QsRUFDekQsYUFBbUMsRUFDaEMsY0FBOEI7UUFKMUMsaUJBY0M7UUFaVyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUM7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWxCMUMsa0JBQWEsR0FBb0I7WUFDL0IsV0FBVyxFQUFFLENBQUM7WUFDZCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLDBCQUEwQixFQUFFLENBQUM7WUFDN0IsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUVGLFlBQU8sR0FBZ0MsRUFBRSxDQUFDLElBQUksQ0FBQyxh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LENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBbkZGLFVBQVU7Ozs7Z0JBVkYsZ0JBQWdCLHVCQTJCcEIsUUFBUTtnQkFyQ1gsb0JBQW9CO2dCQUNwQixjQUFjOztJQXVHaEIsZ0NBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQW5GWSx5QkFBeUI7OztJQUNwQyxrREFNRTs7SUFFRiw0Q0FBOEQ7O0lBRTlELGdEQUU0RDs7SUFrQjVELDhDQWVJOzs7OztJQTlCRixrREFDZ0U7O0lBQ2hFLGtEQUEwQzs7Ozs7SUFDMUMsbURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlYXJjaEJveENvbXBvbmVudCxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEJveENvbmZpZyB7XG4gIG1heFByb2R1Y3RzOiBudW1iZXI7XG4gIGRpc3BsYXlTdWdnZXN0aW9uczogYm9vbGVhbjtcbiAgbWF4U3VnZ2VzdGlvbnM6IG51bWJlcjtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IG51bWJlcjtcbiAgZGlzcGxheVByb2R1Y3RzOiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB7XG4gIGRlZmF1bHRDb25maWc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgICBtYXhQcm9kdWN0czogMixcbiAgICBkaXNwbGF5U3VnZ2VzdGlvbnM6IHRydWUsXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gICAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDMsXG4gICAgZGlzcGxheVByb2R1Y3RzOiB0cnVlLFxuICB9O1xuXG4gIGNvbmZpZyQ6IE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPiA9IG9mKHRoaXMuZGVmYXVsdENvbmZpZyk7XG5cbiAgcXVlcnlQYXJhbSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMucXVlcnkpKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NlYXJjaEJveENvbXBvbmVudD4sXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKGNvbXBvbmVudERhdGEpIHtcbiAgICAgIHRoaXMuY29uZmlnJCA9IG1lcmdlKFxuICAgICAgICB0aGlzLmNvbmZpZyQsXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgICAgICAgIG1hcChjb25maWcgPT4gKHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdHlwZWFoZWFkID0gKHRleHQkOiBPYnNlcnZhYmxlPHN0cmluZz4pOiBPYnNlcnZhYmxlPGFueVtdPiA9PlxuICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0ZXh0JC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKSxcbiAgICAgIHRoaXMuY29uZmlnJFxuICAgICkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3Rlcm0sIGNvbmZpZ10pID0+IHtcbiAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID49IGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoKHRlcm0sIGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIHJvdXRlOiAnc2VhcmNoJyxcbiAgICAgIHBhcmFtczogeyBxdWVyeSB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaCh0ZXh0OiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHRoaXMuZXhlY3V0ZVNlYXJjaCh0ZXh0LCBjb25maWcpO1xuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRTZWFyY2hTdWdnZXN0aW9ucygpXG4gICAgICAucGlwZShtYXAocmVzID0+IHJlcy5tYXAoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnZhbHVlKSkpO1xuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5nZXRBdXhTZWFyY2hSZXN1bHRzKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLnByb2R1Y3RzIHx8IFtdKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc3VnZ2VzdGlvbnMsIHByb2R1Y3RzKS5waXBlKFxuICAgICAgbWFwKChbYSwgYl0pID0+IFsuLi5hLCAuLi5iXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlU2VhcmNoKHNlYXJjaDogc3RyaW5nLCBjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IHZvaWQge1xuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoQXV4aWxpYXJ5KHNlYXJjaCwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFByb2R1Y3RzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdWdnZXN0aW9ucyhzZWFyY2gsIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbmZpZy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
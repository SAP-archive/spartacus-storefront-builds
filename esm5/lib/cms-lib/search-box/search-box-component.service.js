/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
            displayProducts: false,
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
            route: [{ name: 'search', params: { query: query } }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3NlYXJjaC1ib3gvc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBeUIsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUV4RSxxQ0FNQzs7O0lBTEMsc0NBQW9COztJQUNwQiw2Q0FBNEI7O0lBQzVCLHlDQUF1Qjs7SUFDdkIscURBQW1DOztJQUNuQywwQ0FBeUI7O0FBRzNCO0lBZ0JFLG1DQUVZLGFBQXNELEVBQ3pELGFBQW1DLEVBQ2hDLGNBQThCO1FBSjFDLGlCQWNDO1FBWlcsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3pELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsQjFDLGtCQUFhLEdBQW9CO1lBQy9CLFdBQVcsRUFBRSxDQUFDO1lBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixjQUFjLEVBQUUsQ0FBQztZQUNqQiwwQkFBMEIsRUFBRSxDQUFDO1lBQzdCLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUM7UUFFRixZQUFPLEdBQWdDLEVB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RCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYzthQUNoQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQWxGRixVQUFVOzs7O2dCQW5CRixnQkFBZ0IsdUJBb0NwQixRQUFRO2dCQW5DSixvQkFBb0I7Z0JBUXBCLGNBQWM7O0lBNkZ2QixnQ0FBQztDQUFBLEFBbkZELElBbUZDO1NBbEZZLHlCQUF5Qjs7O0lBQ3BDLGtEQU1FOztJQUVGLDRDQUE4RDs7SUFFOUQsZ0RBRTREOztJQWtCNUQsOENBZUk7Ozs7O0lBOUJGLGtEQUNnRTs7SUFDaEUsa0RBQTBDOzs7OztJQUMxQyxtREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIENtc1NlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQm94Q29uZmlnIHtcbiAgbWF4UHJvZHVjdHM6IG51bWJlcjtcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiBib29sZWFuO1xuICBtYXhTdWdnZXN0aW9uczogbnVtYmVyO1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogbnVtYmVyO1xuICBkaXNwbGF5UHJvZHVjdHM6IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgZGVmYXVsdENvbmZpZzogU2VhcmNoQm94Q29uZmlnID0ge1xuICAgIG1heFByb2R1Y3RzOiAyLFxuICAgIGRpc3BsYXlTdWdnZXN0aW9uczogdHJ1ZSxcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcbiAgICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMyxcbiAgICBkaXNwbGF5UHJvZHVjdHM6IGZhbHNlLFxuICB9O1xuXG4gIGNvbmZpZyQ6IE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPiA9IG9mKHRoaXMuZGVmYXVsdENvbmZpZyk7XG5cbiAgcXVlcnlQYXJhbSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMucXVlcnkpKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NlYXJjaEJveENvbXBvbmVudD4sXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKGNvbXBvbmVudERhdGEpIHtcbiAgICAgIHRoaXMuY29uZmlnJCA9IG1lcmdlKFxuICAgICAgICB0aGlzLmNvbmZpZyQsXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgICAgICAgIG1hcChjb25maWcgPT4gKHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdHlwZWFoZWFkID0gKHRleHQkOiBPYnNlcnZhYmxlPHN0cmluZz4pOiBPYnNlcnZhYmxlPGFueVtdPiA9PlxuICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0ZXh0JC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKSxcbiAgICAgIHRoaXMuY29uZmlnJFxuICAgICkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3Rlcm0sIGNvbmZpZ10pID0+IHtcbiAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID49IGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoKHRlcm0sIGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIHB1YmxpYyBsYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgIHJvdXRlOiBbeyBuYW1lOiAnc2VhcmNoJywgcGFyYW1zOiB7IHF1ZXJ5IH0gfV0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoKHRleHQ6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgdGhpcy5leGVjdXRlU2VhcmNoKHRleHQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgLmdldFNlYXJjaFN1Z2dlc3Rpb25zKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLm1hcChzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24udmFsdWUpKSk7XG5cbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgLmdldEF1eFNlYXJjaFJlc3VsdHMoKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiByZXMucHJvZHVjdHMgfHwgW10pKTtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChzdWdnZXN0aW9ucywgcHJvZHVjdHMpLnBpcGUoXG4gICAgICBtYXAoKFthLCBiXSkgPT4gWy4uLmEsIC4uLmJdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVTZWFyY2goc2VhcmNoOiBzdHJpbmcsIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hBdXhpbGlhcnkoc2VhcmNoLCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4UHJvZHVjdHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN1Z2dlc3Rpb25zKHNlYXJjaCwge1xuICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
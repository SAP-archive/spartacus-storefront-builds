/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService, SearchboxService, TranslationService, WindowRef, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/** @type {?} */
var HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
var SearchBoxComponentService = /** @class */ (function () {
    function SearchBoxComponentService(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     */
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.search = /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    function (query, config) {
        if (!query || query === '') {
            this.clearResults();
            return;
        }
        if (config.minCharactersBeforeRequest &&
            query.length < config.minCharactersBeforeRequest) {
            return;
        }
        if (config.displayProducts) {
            this.searchService.search(query, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.searchSuggestions(query, {
                pageSize: config.maxSuggestions,
            });
        }
    };
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getResults = /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
            return {
                products: productResults ? productResults.products : null,
                suggestions: suggestions,
                message: message,
            };
        })), tap((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            return _this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, _this.hasResults(results));
        })));
    };
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    SearchBoxComponentService.prototype.clearResults = /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    function () {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    };
    /**
     * @param {?} className
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasBodyClass = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        return this.winRef.document.body.classList.contains(className);
    };
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    SearchBoxComponentService.prototype.toggleBodyClass = /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    function (className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    };
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasResults = /**
     * @private
     * @param {?} results
     * @return {?}
     */
    function (results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getProductResults = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    };
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getProductSuggestions = /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res.map((/**
             * @param {?} suggestion
             * @return {?}
             */
            function (suggestion) { return suggestion.value; })); })), switchMap((/**
             * @param {?} suggestions
             * @return {?}
             */
            function (suggestions) {
                if (suggestions.length === 0) {
                    return _this.getExactSuggestion(config).pipe(map((/**
                     * @param {?} match
                     * @return {?}
                     */
                    function (match) { return (match ? [match] : []); })));
                }
                else {
                    return of(suggestions);
                }
            })));
        }
    };
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getExactSuggestion = /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return this.getProductResults(config).pipe(switchMap((/**
         * @param {?} productResult
         * @return {?}
         */
        function (productResult) {
            return productResult.products && productResult.products.length > 0
                ? _this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        })));
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getSearchMessage = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return combineLatest(this.getProductResults(config), this.getProductSuggestions(config)).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), productResult = _b[0], suggestions = _b[1];
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return _this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        })));
    };
    /**
     * Navigates to the search result page with a given query
     */
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponentService.prototype.launchSearchPage = /**
     * Navigates to the search result page with a given query
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
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    SearchBoxComponentService.prototype.fetchTranslation = /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    function (translationKey, options) {
        return this.translationService.translate(translationKey, options);
    };
    SearchBoxComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: SearchboxService },
        { type: RoutingService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SearchBoxComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(i0.ɵɵinject(i1.SearchboxService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.TranslationService), i0.ɵɵinject(i1.WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
    return SearchBoxComponentService;
}());
export { SearchBoxComponentService };
if (false) {
    /** @type {?} */
    SearchBoxComponentService.prototype.searchService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.translationService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL25hdmlnYXRpb24vc2VhcmNoLWJveC9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUFHL0MsdUJBQXVCLEdBQUcsdUJBQXVCO0FBRXZEO0lBSUUsbUNBQ1MsYUFBK0IsRUFDNUIsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBSHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSjs7OztPQUlHOzs7Ozs7Ozs7SUFDSCwwQ0FBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxNQUF1QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQ0UsTUFBTSxDQUFDLDBCQUEwQjtZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsRUFDaEQ7WUFDQSxPQUFPO1NB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WUFDckIsT0FBTyxFQUFFLFFBQVE7WUFDakIsTUFBTSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUU7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLG9EQUFnQjs7Ozs7O0lBQXhCLFVBQ0UsY0FBc0IsRUFDdEIsT0FBYTtRQUViLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0JBckxGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWkMsZ0JBQWdCO2dCQURoQixjQUFjO2dCQUVkLGtCQUFrQjtnQkFDbEIsU0FBUzs7O29DQU5YO0NBb01DLEFBdExELElBc0xDO1NBbkxZLHlCQUF5Qjs7O0lBRWxDLGtEQUFzQzs7Ozs7SUFDdEMsbURBQXdDOzs7OztJQUN4Qyx1REFBZ0Q7Ozs7O0lBQ2hELDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoYm94U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTID0gJ2hhcy1zZWFyY2hib3gtcmVzdWx0cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6IFNlYXJjaGJveFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIHNlYXJjaCBmb3IgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zLFxuICAgKiB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gaXMgc2V0dXAgdG8gbm90IHNlYXJjaCBmb3JcbiAgICogcHJvZHVjdHMgb3Igc3VnZ2VzdGlvbnMuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZywgY29uZmlnOiBTZWFyY2hCb3hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5ID09PSAnJykge1xuICAgICAgdGhpcy5jbGVhclJlc3VsdHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb25maWcubWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3QgJiZcbiAgICAgIHF1ZXJ5Lmxlbmd0aCA8IGNvbmZpZy5taW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGlzcGxheVByb2R1Y3RzKSB7XG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4UHJvZHVjdHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaFN1Z2dlc3Rpb25zKHF1ZXJ5LCB7XG4gICAgICAgIHBhZ2VTaXplOiBjb25maWcubWF4U3VnZ2VzdGlvbnMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNlYXJjaFJlc3VsdHMuIFdoZW4gdGhlcmUncyBhbnlcbiAgICogcmVzdWx0LCB0aGUgYm9keSB0YWcgd2lsbCBnZXQgYSBjbGFzc25hbWUsIHNvIHRoYXQgc3BlY2lmaWMgc3R5bGVcbiAgICogcnVsZXMgY2FuIGJlIGFwcGxpZWQuXG4gICAqL1xuICBnZXRSZXN1bHRzKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVzdWx0cyhjb25maWcpLFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3VnZ2VzdGlvbnMoY29uZmlnKSxcbiAgICAgIHRoaXMuZ2V0U2VhcmNoTWVzc2FnZShjb25maWcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtwcm9kdWN0UmVzdWx0cywgc3VnZ2VzdGlvbnMsIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RSZXN1bHRzID8gcHJvZHVjdFJlc3VsdHMucHJvZHVjdHMgOiBudWxsLFxuICAgICAgICAgIHN1Z2dlc3Rpb25zLFxuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHRhcChyZXN1bHRzID0+XG4gICAgICAgIHRoaXMudG9nZ2xlQm9keUNsYXNzKEhBU19TRUFSQ0hfUkVTVUxUX0NMQVNTLCB0aGlzLmhhc1Jlc3VsdHMocmVzdWx0cykpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaGJveCByZXN1bHRzLCBzbyB0aGF0IG9sZCB2YWx1ZXMgYXJlXG4gICAqIG5vIGxvbmdlciBlbWl0ZWQgdXBvbiBuZXh0IHNlYXJjaC5cbiAgICovXG4gIGNsZWFyUmVzdWx0cygpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gICAgdGhpcy50b2dnbGVCb2R5Q2xhc3MoSEFTX1NFQVJDSF9SRVNVTFRfQ0xBU1MsIGZhbHNlKTtcbiAgfVxuXG4gIGhhc0JvZHlDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQm9keUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBhZGQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGFkZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkXG4gICAgICAgID8gdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgICAgOiB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc1Jlc3VsdHMocmVzdWx0czogU2VhcmNoUmVzdWx0cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAoISFyZXN1bHRzLnByb2R1Y3RzICYmIHJlc3VsdHMucHJvZHVjdHMubGVuZ3RoID4gMCkgfHxcbiAgICAgICghIXJlc3VsdHMuc3VnZ2VzdGlvbnMgJiYgcmVzdWx0cy5zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB8fFxuICAgICAgISFyZXN1bHRzLm1lc3NhZ2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UmVzdWx0cyhcbiAgICBjb25maWc6IFNlYXJjaEJveENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgaWYgKGNvbmZpZy5kaXNwbGF5UHJvZHVjdHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2Yoe30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBzdWdnZXN0aW9ucyBmcm9tIHRoZSBiYWNrZW5kLiBJbiBjYXNlIHRoZXJlJ3Mgbm8gc3VnZ2VzdGlvblxuICAgKiBhdmFpbGFibGUsIHdlIHRyeSB0byBnZXQgYW4gZXhhY3QgbWF0Y2ggc3VnZ2VzdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKGNvbmZpZzogU2VhcmNoQm94Q29uZmlnKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIGlmICghY29uZmlnLmRpc3BsYXlTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdWdnZXN0aW9uUmVzdWx0cygpLnBpcGUoXG4gICAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24udmFsdWUpKSxcbiAgICAgICAgc3dpdGNoTWFwKHN1Z2dlc3Rpb25zID0+IHtcbiAgICAgICAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGFjdFN1Z2dlc3Rpb24oY29uZmlnKS5waXBlKFxuICAgICAgICAgICAgICBtYXAobWF0Y2ggPT4gKG1hdGNoID8gW21hdGNoXSA6IFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZihzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogd2hlbmV2ZXIgdGhlcmUgaXMgYXQgbGVhc3QgMSBwcm9kdWN0LCB3ZSBzaW11bGF0ZVxuICAgKiBhIHN1Z2dlc3Rpb24gdG8gcHJvdmlkZSBlYXN5IGFjY2VzcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlXG4gICAqL1xuICBwcml2YXRlIGdldEV4YWN0U3VnZ2VzdGlvbihjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdFJlc3VsdHMoY29uZmlnKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHByb2R1Y3RSZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyAmJiBwcm9kdWN0UmVzdWx0LnByb2R1Y3RzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAuZXhhY3RNYXRjaCcsIHtcbiAgICAgICAgICAgICAgdGVybTogcHJvZHVjdFJlc3VsdC5mcmVlVGV4dFNlYXJjaCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBvZihudWxsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoTWVzc2FnZShjb25maWc6IFNlYXJjaEJveENvbmZpZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmdldFByb2R1Y3RSZXN1bHRzKGNvbmZpZyksXG4gICAgICB0aGlzLmdldFByb2R1Y3RTdWdnZXN0aW9ucyhjb25maWcpXG4gICAgKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbcHJvZHVjdFJlc3VsdCwgc3VnZ2VzdGlvbnNdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9kdWN0UmVzdWx0ICYmXG4gICAgICAgICAgcHJvZHVjdFJlc3VsdC5wcm9kdWN0cyAmJlxuICAgICAgICAgIHByb2R1Y3RSZXN1bHQucHJvZHVjdHMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgKHN1Z2dlc3Rpb25zICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hUcmFuc2xhdGlvbignc2VhcmNoQm94LmhlbHAubm9NYXRjaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlIHdpdGggYSBnaXZlbiBxdWVyeVxuICAgKi9cbiAgcHVibGljIGxhdW5jaFNlYXJjaFBhZ2UocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgY3hSb3V0ZTogJ3NlYXJjaCcsXG4gICAgICBwYXJhbXM6IHsgcXVlcnkgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hUcmFuc2xhdGlvbihcbiAgICB0cmFuc2xhdGlvbktleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19
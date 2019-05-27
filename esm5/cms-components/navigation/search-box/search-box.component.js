/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SearchBoxComponentService } from './search-box-component.service';
/** @type {?} */
var DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 1,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    maxSuggestions: 5,
    displayProductImages: true,
};
var SearchBoxComponent = /** @class */ (function () {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    function SearchBoxComponent(searchBoxComponentService, componentData) {
        var _this = this;
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.config$.pipe(tap(function (c) { return (_this.config = c); }), switchMap(function (config) { return _this.searchBoxComponentService.getResults(config); }));
    }
    Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
        /**
         * Sets the search box input field
         */
        set: /**
         * Sets the search box input field
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.search(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBoxComponent.prototype, "config$", {
        /**
         * Returns the backend configuration or default configuration for the searchbox.
         */
        get: /**
         * Returns the backend configuration or default configuration for the searchbox.
         * @private
         * @return {?}
         */
        function () {
            if (this.componentData) {
                return (/** @type {?} */ (this.componentData.data$.pipe(
                // Since the backend returns string values (i.e. displayProducts: "true") for
                // boolean values, we replace them with boolean values.
                map(function (c) {
                    return tslib_1.__assign({}, c, { displayProducts: (/** @type {?} */ (c.displayProducts)) === 'true' || c.displayProducts === true, displayProductImages: (/** @type {?} */ (c.displayProductImages)) === 'true' ||
                            c.displayProductImages === true, displaySuggestions: (/** @type {?} */ (c.displaySuggestions)) === 'true' ||
                            c.displaySuggestions === true });
                }))));
            }
            else {
                return of(DEFAULT_SEARCHBOX_CONFIG);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the searchbox and opens the search result page.
     */
    /**
     * Closes the searchbox and opens the search result page.
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponent.prototype.search = /**
     * Closes the searchbox and opens the search result page.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    };
    /**
     * Opens the typeahead searchbox
     */
    /**
     * Opens the typeahead searchbox
     * @return {?}
     */
    SearchBoxComponent.prototype.open = /**
     * Opens the typeahead searchbox
     * @return {?}
     */
    function () {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    };
    /**
     * Closes the typehead searchbox.
     */
    /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.close = /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.ignoreCloseEvent) {
            this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
            if (event && event.target) {
                ((/** @type {?} */ (event.target))).blur();
            }
        }
        this.ignoreCloseEvent = false;
    };
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     *
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.avoidReopen = /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     *
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    };
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     */
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     * @param {?} event
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponent.prototype.launchSearchResult = /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     * @param {?} event
     * @param {?} query
     * @return {?}
     */
    function (event, query) {
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    };
    /**
     * Disables closing the search result list.
     */
    /**
     * Disables closing the search result list.
     * @return {?}
     */
    SearchBoxComponent.prototype.disableClose = /**
     * Disables closing the search result list.
     * @return {?}
     */
    function () {
        this.ignoreCloseEvent = true;
    };
    /**
     * Clears the search box input field
     */
    /**
     * Clears the search box input field
     * @param {?} el
     * @return {?}
     */
    SearchBoxComponent.prototype.clear = /**
     * Clears the search box input field
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    };
    SearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-searchbox',
                    template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"(results$ | async) as result\"\n  class=\"results\"\n  (click)=\"close($event)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService },
        { type: CmsComponentData, decorators: [{ type: Optional }] }
    ]; };
    SearchBoxComponent.propDecorators = {
        queryText: [{ type: Input, args: ['queryText',] }]
    };
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.config;
    /** @type {?} */
    SearchBoxComponent.prototype.iconTypes;
    /**
     * In some occasions we need to ignore the close event,
     * for example when we click inside the search result section.
     * @type {?}
     * @private
     */
    SearchBoxComponent.prototype.ignoreCloseEvent;
    /** @type {?} */
    SearchBoxComponent.prototype.results$;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponent.prototype.searchBoxComponentService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponent.prototype.componentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQUdyRSx3QkFBd0IsR0FBb0I7SUFDaEQsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixlQUFlLEVBQUUsSUFBSTtJQUNyQixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsb0JBQW9CLEVBQUUsSUFBSTtDQUMzQjtBQUVEO0lBeUJFOzs7T0FHRztJQUNILDRCQUNZLHlCQUFvRCxFQUVwRCxhQUFzRDtRQUhsRSxpQkFJSTtRQUhRLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFFcEQsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBZmxFLGNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7O1FBTWQscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBWWpDLGFBQVEsR0FBOEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3JELEdBQUcsQ0FBQyxVQUFBLENB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LHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBWTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLGtDQUFLOzs7OztJQUFaLFVBQWEsRUFBb0I7UUFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7O2dCQXRJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHU3REFBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFoQlEseUJBQXlCO2dCQUR6QixnQkFBZ0IsdUJBNENwQixRQUFROzs7NEJBckJWLEtBQUssU0FBQyxXQUFXOztJQTZIcEIseUJBQUM7Q0FBQSxBQXZJRCxJQXVJQztTQWxJWSxrQkFBa0I7OztJQUM3QixvQ0FBd0I7O0lBV3hCLHVDQUFzQjs7Ozs7OztJQU10Qiw4Q0FBaUM7O0lBWWpDLHNDQUdFOzs7OztJQVJBLHVEQUE4RDs7Ozs7SUFDOUQsMkNBQ2dFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIQk9YX0NPTkZJRzogU2VhcmNoQm94Q29uZmlnID0ge1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMSxcbiAgZGlzcGxheVByb2R1Y3RzOiB0cnVlLFxuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IHRydWUsXG4gIG1heFByb2R1Y3RzOiA1LFxuICBtYXhTdWdnZXN0aW9uczogNSxcbiAgZGlzcGxheVByb2R1Y3RJbWFnZXM6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xuICBjb25maWc6IFNlYXJjaEJveENvbmZpZztcbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIEBJbnB1dCgncXVlcnlUZXh0JylcbiAgc2V0IHF1ZXJ5VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBJbiBzb21lIG9jY2FzaW9ucyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUgY2xvc2UgZXZlbnQsXG4gICAqIGZvciBleGFtcGxlIHdoZW4gd2UgY2xpY2sgaW5zaWRlIHRoZSBzZWFyY2ggcmVzdWx0IHNlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCBkYXRhIGlzIG9wdGlvbmFsLCBzbyB0aGF0IHRoaXMgY29tcG9uZW50XG4gICAqIGNhbiBiZSByZXVzZWQgd2l0aG91dCBDTVMgaW50ZWdyYXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VhcmNoQm94Q29tcG9uZW50U2VydmljZTogU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NlYXJjaEJveENvbXBvbmVudD5cbiAgKSB7fVxuXG4gIHJlc3VsdHMkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+ID0gdGhpcy5jb25maWckLnBpcGUoXG4gICAgdGFwKGMgPT4gKHRoaXMuY29uZmlnID0gYykpLFxuICAgIHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmdldFJlc3VsdHMoY29uZmlnKSlcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9yIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlYXJjaGJveC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGNvbmZpZyQoKTogT2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+IHtcbiAgICBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gPE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPj50aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgLy8gU2luY2UgdGhlIGJhY2tlbmQgcmV0dXJucyBzdHJpbmcgdmFsdWVzIChpLmUuIGRpc3BsYXlQcm9kdWN0czogXCJ0cnVlXCIpIGZvclxuICAgICAgICAvLyBib29sZWFuIHZhbHVlcywgd2UgcmVwbGFjZSB0aGVtIHdpdGggYm9vbGVhbiB2YWx1ZXMuXG4gICAgICAgIG1hcChjID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYyxcbiAgICAgICAgICAgIGRpc3BsYXlQcm9kdWN0czpcbiAgICAgICAgICAgICAgPGFueT5jLmRpc3BsYXlQcm9kdWN0cyA9PT0gJ3RydWUnIHx8IGMuZGlzcGxheVByb2R1Y3RzID09PSB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheVByb2R1Y3RJbWFnZXM6XG4gICAgICAgICAgICAgIDxhbnk+Yy5kaXNwbGF5UHJvZHVjdEltYWdlcyA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgIGMuZGlzcGxheVByb2R1Y3RJbWFnZXMgPT09IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5U3VnZ2VzdGlvbnM6XG4gICAgICAgICAgICAgIDxhbnk+Yy5kaXNwbGF5U3VnZ2VzdGlvbnMgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICBjLmRpc3BsYXlTdWdnZXN0aW9ucyA9PT0gdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKERFRkFVTFRfU0VBUkNIQk9YX0NPTkZJRyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc2VhcmNoYm94IGFuZCBvcGVucyB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLmNvbmZpZyk7XG4gICAgLy8gZm9yY2UgdGhlIHNlYXJjaGJveCB0byBvcGVuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHR5cGVhaGVhZCBzZWFyY2hib3hcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHlwZWhlYWQgc2VhcmNoYm94LlxuICAgKi9cbiAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaWdub3JlQ2xvc2VFdmVudCkge1xuICAgICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcyhcbiAgICAgICAgJ3NlYXJjaGJveC1pcy1hY3RpdmUnLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRXNwZWNpYWxseSBpbiBtb2JpbGUgd2UgZG8gbm90IHdhbnQgdGhlIHNlYXJjaCBpY29uXG4gICAqIHRvIGZvY3VzIHRoZSBpbnB1dCBhZ2FpbiB3aGVuIGl0J3MgYWxyZWFkeSBvcGVuLlxuICAgKiAqL1xuICBhdm9pZFJlb3BlbihldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuaGFzQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIFBMUCB3aXRoIHRoZSBnaXZlbiBxdWVyeS5cbiAgICpcbiAgICogVE9ETzogaWYgdGhlcmUncyBhIHNpbmdlIHByb2R1Y3QgbWF0Y2gsIHdlIGNvdWxkIG9wZW4gdGhlIFBEUC5cbiAgICovXG4gIGxhdW5jaFNlYXJjaFJlc3VsdChldmVudDogVUlFdmVudCwgcXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBjbG9zaW5nIHRoZSBzZWFyY2ggcmVzdWx0IGxpc3QuXG4gICAqL1xuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIHB1YmxpYyBjbGVhcihlbDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlKCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cbn1cbiJdfQ==
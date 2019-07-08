/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
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
    function SearchBoxComponent(searchBoxComponentService, componentData, winRef) {
        var _this = this;
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.winRef = winRef;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.config$.pipe(tap((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return (_this.config = c); })), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return _this.searchBoxComponentService.getResults(config); })));
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
                map((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) {
                    return tslib_1.__assign({}, c, { displayProducts: (/** @type {?} */ (c.displayProducts)) === 'true' || c.displayProducts === true, displayProductImages: (/** @type {?} */ (c.displayProductImages)) === 'true' ||
                            c.displayProductImages === true, displaySuggestions: (/** @type {?} */ (c.displaySuggestions)) === 'true' ||
                            c.displaySuggestions === true });
                })))));
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
     * @param {?=} force
     * @return {?}
     */
    SearchBoxComponent.prototype.close = /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @param {?=} force
     * @return {?}
     */
    function (event, force) {
        var _this = this;
        // Use timeout to detect changes
        setTimeout((/**
         * @return {?}
         */
        function () {
            if ((!_this.ignoreCloseEvent && !_this.isSearchboxFocused()) || force) {
                _this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
                if (event && event.target) {
                    ((/** @type {?} */ (event.target))).blur();
                }
            }
            _this.ignoreCloseEvent = false;
        }), 0);
    };
    // Check if focus is on searchbox or result list elements
    // Check if focus is on searchbox or result list elements
    /**
     * @private
     * @return {?}
     */
    SearchBoxComponent.prototype.isSearchboxFocused = 
    // Check if focus is on searchbox or result list elements
    /**
     * @private
     * @return {?}
     */
    function () {
        return (this.getResultElements().includes(this.getFocusedElement()) ||
            this.winRef.document.querySelector('input[aria-label="search"]') ===
                this.getFocusedElement());
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
    // Return result list as HTMLElement array
    // Return result list as HTMLElement array
    /**
     * @private
     * @return {?}
     */
    SearchBoxComponent.prototype.getResultElements = 
    // Return result list as HTMLElement array
    /**
     * @private
     * @return {?}
     */
    function () {
        return Array.from(this.winRef.document.querySelectorAll('.products > a, .suggestions > a'));
    };
    // Return focused element as HTMLElement
    // Return focused element as HTMLElement
    /**
     * @private
     * @return {?}
     */
    SearchBoxComponent.prototype.getFocusedElement = 
    // Return focused element as HTMLElement
    /**
     * @private
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.winRef.document.activeElement));
    };
    /**
     * @private
     * @return {?}
     */
    SearchBoxComponent.prototype.getFocusedIndex = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getResultElements().indexOf(this.getFocusedElement());
    };
    // Focus on previous item in results list
    // Focus on previous item in results list
    /**
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.focusPreviousChild = 
    // Focus on previous item in results list
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault(); // Negate normal keyscroll
        // Negate normal keyscroll
        var _a = tslib_1.__read([
            this.getResultElements(),
            this.getFocusedIndex(),
        ], 2), results = _a[0], focusedIndex = _a[1];
        // Focus on last index moving to first
        if (results.length) {
            if (focusedIndex < 1) {
                results[results.length - 1].focus();
            }
            else {
                results[focusedIndex - 1].focus();
            }
        }
    };
    // Focus on next item in results list
    // Focus on next item in results list
    /**
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.focusNextChild = 
    // Focus on next item in results list
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault(); // Negate normal keyscroll
        // Negate normal keyscroll
        var _a = tslib_1.__read([
            this.getResultElements(),
            this.getFocusedIndex(),
        ], 2), results = _a[0], focusedIndex = _a[1];
        // Focus on first index moving to last
        if (results.length) {
            if (focusedIndex >= results.length - 1) {
                results[0].focus();
            }
            else {
                results[focusedIndex + 1].focus();
            }
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
        this.close(event, true);
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
                    template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"(results$ | async) as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService },
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: WindowRef }
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
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponent.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBeUIsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0lBR3JFLHdCQUF3QixHQUFvQjtJQUNoRCwwQkFBMEIsRUFBRSxDQUFDO0lBQzdCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsV0FBVyxFQUFFLENBQUM7SUFDZCxjQUFjLEVBQUUsQ0FBQztJQUNqQixvQkFBb0IsRUFBRSxJQUFJO0NBQzNCO0FBRUQ7SUEwQkU7OztPQUdHO0lBQ0gsNEJBQ1kseUJBQW9ELEVBRXBELGFBQXNELEVBQ3RELE1BQWlCO1FBSjdCLGlCQUtJO1FBSlEsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUVwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBeUM7UUFDdEQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWhCN0IsY0FBUyxHQUFHLFNBQVMsQ0FBQzs7Ozs7UUFNZCxxQkFB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LEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7O2dCQXRNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLG02RUFBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFoQlEseUJBQXlCO2dCQUR6QixnQkFBZ0IsdUJBNkNwQixRQUFRO2dCQWpEbUIsU0FBUzs7OzRCQTRCdEMsS0FBSyxTQUFDLFdBQVc7O0lBNExwQix5QkFBQztDQUFBLEFBdk1ELElBdU1DO1NBbE1ZLGtCQUFrQjs7O0lBQzdCLG9DQUF3Qjs7SUFZeEIsdUNBQXNCOzs7Ozs7O0lBTXRCLDhDQUFpQzs7SUFhakMsc0NBR0U7Ozs7O0lBVEEsdURBQThEOzs7OztJQUM5RCwyQ0FDZ0U7Ozs7O0lBQ2hFLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZWFyY2hCb3hDb21wb25lbnQsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIQk9YX0NPTkZJRzogU2VhcmNoQm94Q29uZmlnID0ge1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMSxcbiAgZGlzcGxheVByb2R1Y3RzOiB0cnVlLFxuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IHRydWUsXG4gIG1heFByb2R1Y3RzOiA1LFxuICBtYXhTdWdnZXN0aW9uczogNSxcbiAgZGlzcGxheVByb2R1Y3RJbWFnZXM6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xuICBjb25maWc6IFNlYXJjaEJveENvbmZpZztcblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluIHNvbWUgb2NjYXNpb25zIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjbG9zZSBldmVudCxcbiAgICogZm9yIGV4YW1wbGUgd2hlbiB3ZSBjbGljayBpbnNpZGUgdGhlIHNlYXJjaCByZXN1bHQgc2VjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IGRhdGEgaXMgb3B0aW9uYWwsIHNvIHRoYXQgdGhpcyBjb21wb25lbnRcbiAgICogY2FuIGJlIHJldXNlZCB3aXRob3V0IENNUyBpbnRlZ3JhdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIHJlc3VsdHMkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+ID0gdGhpcy5jb25maWckLnBpcGUoXG4gICAgdGFwKGMgPT4gKHRoaXMuY29uZmlnID0gYykpLFxuICAgIHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmdldFJlc3VsdHMoY29uZmlnKSlcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9yIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlYXJjaGJveC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGNvbmZpZyQoKTogT2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+IHtcbiAgICBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gPE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPj50aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgLy8gU2luY2UgdGhlIGJhY2tlbmQgcmV0dXJucyBzdHJpbmcgdmFsdWVzIChpLmUuIGRpc3BsYXlQcm9kdWN0czogXCJ0cnVlXCIpIGZvclxuICAgICAgICAvLyBib29sZWFuIHZhbHVlcywgd2UgcmVwbGFjZSB0aGVtIHdpdGggYm9vbGVhbiB2YWx1ZXMuXG4gICAgICAgIG1hcChjID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYyxcbiAgICAgICAgICAgIGRpc3BsYXlQcm9kdWN0czpcbiAgICAgICAgICAgICAgPGFueT5jLmRpc3BsYXlQcm9kdWN0cyA9PT0gJ3RydWUnIHx8IGMuZGlzcGxheVByb2R1Y3RzID09PSB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheVByb2R1Y3RJbWFnZXM6XG4gICAgICAgICAgICAgIDxhbnk+Yy5kaXNwbGF5UHJvZHVjdEltYWdlcyA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgIGMuZGlzcGxheVByb2R1Y3RJbWFnZXMgPT09IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5U3VnZ2VzdGlvbnM6XG4gICAgICAgICAgICAgIDxhbnk+Yy5kaXNwbGF5U3VnZ2VzdGlvbnMgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICBjLmRpc3BsYXlTdWdnZXN0aW9ucyA9PT0gdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKERFRkFVTFRfU0VBUkNIQk9YX0NPTkZJRyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc2VhcmNoYm94IGFuZCBvcGVucyB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLmNvbmZpZyk7XG4gICAgLy8gZm9yY2UgdGhlIHNlYXJjaGJveCB0byBvcGVuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHR5cGVhaGVhZCBzZWFyY2hib3hcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHlwZWhlYWQgc2VhcmNoYm94LlxuICAgKi9cbiAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIFVzZSB0aW1lb3V0IHRvIGRldGVjdCBjaGFuZ2VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoKCF0aGlzLmlnbm9yZUNsb3NlRXZlbnQgJiYgIXRoaXMuaXNTZWFyY2hib3hGb2N1c2VkKCkpIHx8IGZvcmNlKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS50b2dnbGVCb2R5Q2xhc3MoXG4gICAgICAgICAgJ3NlYXJjaGJveC1pcy1hY3RpdmUnLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGZvY3VzIGlzIG9uIHNlYXJjaGJveCBvciByZXN1bHQgbGlzdCBlbGVtZW50c1xuICBwcml2YXRlIGlzU2VhcmNoYm94Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluY2x1ZGVzKHRoaXMuZ2V0Rm9jdXNlZEVsZW1lbnQoKSkgfHxcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJzZWFyY2hcIl0nKSA9PT1cbiAgICAgICAgdGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3BlY2lhbGx5IGluIG1vYmlsZSB3ZSBkbyBub3Qgd2FudCB0aGUgc2VhcmNoIGljb25cbiAgICogdG8gZm9jdXMgdGhlIGlucHV0IGFnYWluIHdoZW4gaXQncyBhbHJlYWR5IG9wZW4uXG4gICAqICovXG4gIGF2b2lkUmVvcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5oYXNCb2R5Q2xhc3MoJ3NlYXJjaGJveC1pcy1hY3RpdmUnKSkge1xuICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiByZXN1bHQgbGlzdCBhcyBIVE1MRWxlbWVudCBhcnJheVxuICBwcml2YXRlIGdldFJlc3VsdEVsZW1lbnRzKCk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzID4gYSwgLnN1Z2dlc3Rpb25zID4gYScpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJldHVybiBmb2N1c2VkIGVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSBnZXRGb2N1c2VkRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIDxIVE1MRWxlbWVudD50aGlzLndpblJlZi5kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb2N1c2VkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluZGV4T2YodGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpKTtcbiAgfVxuXG4gIC8vIEZvY3VzIG9uIHByZXZpb3VzIGl0ZW0gaW4gcmVzdWx0cyBsaXN0XG4gIGZvY3VzUHJldmlvdXNDaGlsZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIE5lZ2F0ZSBub3JtYWwga2V5c2Nyb2xsXG4gICAgY29uc3QgW3Jlc3VsdHMsIGZvY3VzZWRJbmRleF0gPSBbXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCksXG4gICAgICB0aGlzLmdldEZvY3VzZWRJbmRleCgpLFxuICAgIF07XG4gICAgLy8gRm9jdXMgb24gbGFzdCBpbmRleCBtb3ZpbmcgdG8gZmlyc3RcbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb2N1c2VkSW5kZXggPCAxKSB7XG4gICAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZvY3VzIG9uIG5leHQgaXRlbSBpbiByZXN1bHRzIGxpc3RcbiAgZm9jdXNOZXh0Q2hpbGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWdhdGUgbm9ybWFsIGtleXNjcm9sbFxuICAgIGNvbnN0IFtyZXN1bHRzLCBmb2N1c2VkSW5kZXhdID0gW1xuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLFxuICAgICAgdGhpcy5nZXRGb2N1c2VkSW5kZXgoKSxcbiAgICBdO1xuICAgIC8vIEZvY3VzIG9uIGZpcnN0IGluZGV4IG1vdmluZyB0byBsYXN0XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZm9jdXNlZEluZGV4ID49IHJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXN1bHRzWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ZvY3VzZWRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBQTFAgd2l0aCB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqXG4gICAqIFRPRE86IGlmIHRoZXJlJ3MgYSBzaW5nZSBwcm9kdWN0IG1hdGNoLCB3ZSBjb3VsZCBvcGVuIHRoZSBQRFAuXG4gICAqL1xuICBsYXVuY2hTZWFyY2hSZXN1bHQoZXZlbnQ6IFVJRXZlbnQsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKGV2ZW50LCB0cnVlKTtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZShxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgY2xvc2luZyB0aGUgc2VhcmNoIHJlc3VsdCBsaXN0LlxuICAgKi9cbiAgZGlzYWJsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBzZWFyY2ggYm94IGlucHV0IGZpZWxkXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoZWw6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVDbG9zZSgpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICB9XG59XG4iXX0=
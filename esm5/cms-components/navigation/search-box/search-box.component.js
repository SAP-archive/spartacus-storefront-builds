/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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
    displayProductImages: false,
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
        get: /**
         * @return {?}
         */
        function () {
            if (this.componentData) {
                return (/** @type {?} */ (this.componentData.data$));
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
                    template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"(results$ | async) as result\"\n  class=\"results\"\n  (click)=\"close($event)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"\n        config?.displayProductImages && product.images?.PRIMARY\n      \"\n    >\n      <cx-media\n        *ngIf=\"config?.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFHckUsd0JBQXdCLEdBQW9CO0lBQ2hELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixFQUFFLEtBQUs7Q0FDNUI7QUFFRDtJQXlCRTs7O09BR0c7SUFDSCw0QkFDWSx5QkFBb0QsRUFFcEQsYUFBc0Q7UUFIbEUsaUJBSUk7UUFIUSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBRXBELGtCQUFhLEdBQWIsYUFBYSxDQUF5QztRQWZsRSxjQUFTLEdBQUcsU0FBUyxDQUFDOzs7OztRQU1kLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQVlqQyxhQUFRLEdBQThCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNyRCxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FB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OztnQkFoQlEseUJBQXlCO2dCQUR6QixnQkFBZ0IsdUJBNENwQixRQUFROzs7NEJBckJWLEtBQUssU0FBQyxXQUFXOztJQTBHcEIseUJBQUM7Q0FBQSxBQXBIRCxJQW9IQztTQS9HWSxrQkFBa0I7OztJQUM3QixvQ0FBd0I7O0lBV3hCLHVDQUFzQjs7Ozs7OztJQU10Qiw4Q0FBaUM7O0lBWWpDLHNDQUdFOzs7OztJQVJBLHVEQUE4RDs7Ozs7SUFDOUQsMkNBQ2dFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5jb25zdCBERUZBVUxUX1NFQVJDSEJPWF9DT05GSUc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDEsXG4gIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICBtYXhQcm9kdWN0czogNSxcbiAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gIGRpc3BsYXlQcm9kdWN0SW1hZ2VzOiBmYWxzZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNlYXJjaGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XG4gIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnO1xuICAvKipcbiAgICogU2V0cyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluIHNvbWUgb2NjYXNpb25zIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjbG9zZSBldmVudCxcbiAgICogZm9yIGV4YW1wbGUgd2hlbiB3ZSBjbGljayBpbnNpZGUgdGhlIHNlYXJjaCByZXN1bHQgc2VjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IGRhdGEgaXMgb3B0aW9uYWwsIHNvIHRoYXQgdGhpcyBjb21wb25lbnRcbiAgICogY2FuIGJlIHJldXNlZCB3aXRob3V0IENNUyBpbnRlZ3JhdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PlxuICApIHt9XG5cbiAgcmVzdWx0cyQ6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4gPSB0aGlzLmNvbmZpZyQucGlwZShcbiAgICB0YXAoYyA9PiAodGhpcy5jb25maWcgPSBjKSksXG4gICAgc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuZ2V0UmVzdWx0cyhjb25maWcpKVxuICApO1xuXG4gIGdldCBjb25maWckKCk6IE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPiB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4+dGhpcy5jb21wb25lbnREYXRhLmRhdGEkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YoREVGQVVMVF9TRUFSQ0hCT1hfQ09ORklHKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzZWFyY2hib3ggYW5kIG9wZW5zIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2UuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5zZWFyY2gocXVlcnksIHRoaXMuY29uZmlnKTtcbiAgICAvLyBmb3JjZSB0aGUgc2VhcmNoYm94IHRvIG9wZW5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHlwZWFoZWFkIHNlYXJjaGJveFxuICAgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0eXBlaGVhZCBzZWFyY2hib3guXG4gICAqL1xuICBjbG9zZShldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZ25vcmVDbG9zZUV2ZW50KSB7XG4gICAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKFxuICAgICAgICAnc2VhcmNoYm94LWlzLWFjdGl2ZScsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3BlY2lhbGx5IGluIG1vYmlsZSB3ZSBkbyBub3Qgd2FudCB0aGUgc2VhcmNoIGljb25cbiAgICogdG8gZm9jdXMgdGhlIGlucHV0IGFnYWluIHdoZW4gaXQncyBhbHJlYWR5IG9wZW4uXG4gICAqICovXG4gIGF2b2lkUmVvcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5oYXNCb2R5Q2xhc3MoJ3NlYXJjaGJveC1pcy1hY3RpdmUnKSkge1xuICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgUExQIHdpdGggdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKlxuICAgKiBUT0RPOiBpZiB0aGVyZSdzIGEgc2luZ2UgcHJvZHVjdCBtYXRjaCwgd2UgY291bGQgb3BlbiB0aGUgUERQLlxuICAgKi9cbiAgbGF1bmNoU2VhcmNoUmVzdWx0KGV2ZW50OiBVSUV2ZW50LCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UocXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGNsb3NpbmcgdGhlIHNlYXJjaCByZXN1bHQgbGlzdC5cbiAgICovXG4gIGRpc2FibGVDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgcHVibGljIGNsZWFyKGVsOiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlQ2xvc2UoKTtcbiAgICBlbC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgfVxufVxuIl19
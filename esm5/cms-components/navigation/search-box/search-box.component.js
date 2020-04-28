import { __assign, __decorate, __param, __read } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { CmsSearchBoxComponent, WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SearchBoxComponentService } from './search-box-component.service';
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
        this.results$ = this.config$.pipe(tap(function (c) { return (_this.config = c); }), switchMap(function (config) { return _this.searchBoxComponentService.getResults(config); }));
    }
    Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
        /**
         * Sets the search box input field
         */
        set: function (value) {
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
        get: function () {
            if (this.componentData) {
                return this.componentData.data$.pipe(
                // Since the backend returns string values (i.e. displayProducts: "true") for
                // boolean values, we replace them with boolean values.
                map(function (c) {
                    return __assign(__assign({}, c), { displayProducts: (c === null || c === void 0 ? void 0 : c.displayProducts) === 'true' || (c === null || c === void 0 ? void 0 : c.displayProducts) === true, displayProductImages: (c === null || c === void 0 ? void 0 : c.displayProductImages) === 'true' ||
                            (c === null || c === void 0 ? void 0 : c.displayProductImages) === true, displaySuggestions: (c === null || c === void 0 ? void 0 : c.displaySuggestions) === 'true' ||
                            (c === null || c === void 0 ? void 0 : c.displaySuggestions) === true });
                }));
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
    SearchBoxComponent.prototype.search = function (query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    };
    /**
     * Opens the typeahead searchbox
     */
    SearchBoxComponent.prototype.open = function () {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    };
    /**
     * Closes the typehead searchbox.
     */
    SearchBoxComponent.prototype.close = function (event, force) {
        var _this = this;
        // Use timeout to detect changes
        setTimeout(function () {
            if ((!_this.ignoreCloseEvent && !_this.isSearchboxFocused()) || force) {
                _this.blurSearchBox(event);
            }
        });
    };
    SearchBoxComponent.prototype.blurSearchBox = function (event) {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
        if (event && event.target) {
            event.target.blur();
        }
    };
    // Check if focus is on searchbox or result list elements
    SearchBoxComponent.prototype.isSearchboxFocused = function () {
        return (this.getResultElements().includes(this.getFocusedElement()) ||
            this.winRef.document.querySelector('input[aria-label="search"]') ===
                this.getFocusedElement());
    };
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    SearchBoxComponent.prototype.avoidReopen = function (event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    };
    // Return result list as HTMLElement array
    SearchBoxComponent.prototype.getResultElements = function () {
        return Array.from(this.winRef.document.querySelectorAll('.products > a, .suggestions > a'));
    };
    // Return focused element as HTMLElement
    SearchBoxComponent.prototype.getFocusedElement = function () {
        return this.winRef.document.activeElement;
    };
    SearchBoxComponent.prototype.getFocusedIndex = function () {
        return this.getResultElements().indexOf(this.getFocusedElement());
    };
    // Focus on previous item in results list
    SearchBoxComponent.prototype.focusPreviousChild = function (event) {
        event.preventDefault(); // Negate normal keyscroll
        var _a = __read([
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
    SearchBoxComponent.prototype.focusNextChild = function (event) {
        event.preventDefault(); // Negate normal keyscroll
        var _a = __read([
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
     * TODO: if there's a single product match, we could open the PDP.
     */
    SearchBoxComponent.prototype.launchSearchResult = function (event, query) {
        if (!query || query.trim().length === 0) {
            return;
        }
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    };
    /**
     * Disables closing the search result list.
     */
    SearchBoxComponent.prototype.disableClose = function () {
        this.ignoreCloseEvent = true;
    };
    /**
     * Clears the search box input field
     */
    SearchBoxComponent.prototype.clear = function (el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    };
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService },
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: WindowRef }
    ]; };
    __decorate([
        Input('queryText')
    ], SearchBoxComponent.prototype, "queryText", null);
    SearchBoxComponent = __decorate([
        Component({
            selector: 'cx-searchbox',
            template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(1, Optional())
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFLElBQU0sd0JBQXdCLEdBQW9CO0lBQ2hELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixFQUFFLElBQUk7Q0FDM0IsQ0FBQztBQU9GO0lBb0JFOzs7T0FHRztJQUVILDRCQUNZLHlCQUFvRCxFQUVwRCxhQUFzRCxFQUN0RCxNQUFpQjtRQUo3QixpQkFLSTtRQUpRLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFFcEQsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3RELFdBQU0sR0FBTixNQUFNLENBQVc7UUFqQjdCLGNBQVMsR0FBRyxTQUFTLENB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LEdBQVosVUFBYSxFQUFvQjtRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Z0JBN0tzQyx5QkFBeUI7Z0JBRXJDLGdCQUFnQix1QkFEeEMsUUFBUTtnQkFFUyxTQUFTOztJQXZCN0I7UUFEQyxLQUFLLENBQUMsV0FBVyxDQUFDO3VEQUtsQjtJQVZVLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4Qix5a0ZBQTBDO1lBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7UUE0QkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQTNCRixrQkFBa0IsQ0F3TTlCO0lBQUQseUJBQUM7Q0FBQSxBQXhNRCxJQXdNQztTQXhNWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VhcmNoQm94Q29tcG9uZW50LCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5jb25zdCBERUZBVUxUX1NFQVJDSEJPWF9DT05GSUc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDEsXG4gIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICBtYXhQcm9kdWN0czogNSxcbiAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gIGRpc3BsYXlQcm9kdWN0SW1hZ2VzOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcbiAgY29uZmlnOiBTZWFyY2hCb3hDb25maWc7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZWFyY2ggYm94IGlucHV0IGZpZWxkXG4gICAqL1xuICBASW5wdXQoJ3F1ZXJ5VGV4dCcpXG4gIHNldCBxdWVyeVRleHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICAvKipcbiAgICogSW4gc29tZSBvY2Nhc2lvbnMgd2UgbmVlZCB0byBpZ25vcmUgdGhlIGNsb3NlIGV2ZW50LFxuICAgKiBmb3IgZXhhbXBsZSB3aGVuIHdlIGNsaWNrIGluc2lkZSB0aGUgc2VhcmNoIHJlc3VsdCBzZWN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBpZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgZGF0YSBpcyBvcHRpb25hbCwgc28gdGhhdCB0aGlzIGNvbXBvbmVudFxuICAgKiBjYW4gYmUgcmV1c2VkIHdpdGhvdXQgQ01TIGludGVncmF0aW9uLlxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VhcmNoQm94Q29tcG9uZW50U2VydmljZTogU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NlYXJjaEJveENvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICByZXN1bHRzJDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiA9IHRoaXMuY29uZmlnJC5waXBlKFxuICAgIHRhcCgoYykgPT4gKHRoaXMuY29uZmlnID0gYykpLFxuICAgIHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuZ2V0UmVzdWx0cyhjb25maWcpKVxuICApO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBiYWNrZW5kIGNvbmZpZ3VyYXRpb24gb3IgZGVmYXVsdCBjb25maWd1cmF0aW9uIGZvciB0aGUgc2VhcmNoYm94LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgY29uZmlnJCgpOiBPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4ge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudERhdGEpIHtcbiAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+PnRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgICAgICAvLyBTaW5jZSB0aGUgYmFja2VuZCByZXR1cm5zIHN0cmluZyB2YWx1ZXMgKGkuZS4gZGlzcGxheVByb2R1Y3RzOiBcInRydWVcIikgZm9yXG4gICAgICAgIC8vIGJvb2xlYW4gdmFsdWVzLCB3ZSByZXBsYWNlIHRoZW0gd2l0aCBib29sZWFuIHZhbHVlcy5cbiAgICAgICAgbWFwKChjKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmMsXG4gICAgICAgICAgICBkaXNwbGF5UHJvZHVjdHM6XG4gICAgICAgICAgICAgIDxhbnk+Yz8uZGlzcGxheVByb2R1Y3RzID09PSAndHJ1ZScgfHwgYz8uZGlzcGxheVByb2R1Y3RzID09PSB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheVByb2R1Y3RJbWFnZXM6XG4gICAgICAgICAgICAgIDxhbnk+Yz8uZGlzcGxheVByb2R1Y3RJbWFnZXMgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICBjPy5kaXNwbGF5UHJvZHVjdEltYWdlcyA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc3BsYXlTdWdnZXN0aW9uczpcbiAgICAgICAgICAgICAgPGFueT5jPy5kaXNwbGF5U3VnZ2VzdGlvbnMgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICBjPy5kaXNwbGF5U3VnZ2VzdGlvbnMgPT09IHRydWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZihERUZBVUxUX1NFQVJDSEJPWF9DT05GSUcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNlYXJjaGJveCBhbmQgb3BlbnMgdGhlIHNlYXJjaCByZXN1bHQgcGFnZS5cbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnNlYXJjaChxdWVyeSwgdGhpcy5jb25maWcpO1xuICAgIC8vIGZvcmNlIHRoZSBzZWFyY2hib3ggdG8gb3BlblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0eXBlYWhlYWQgc2VhcmNoYm94XG4gICAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS50b2dnbGVCb2R5Q2xhc3MoJ3NlYXJjaGJveC1pcy1hY3RpdmUnLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHR5cGVoZWFkIHNlYXJjaGJveC5cbiAgICovXG4gIGNsb3NlKGV2ZW50OiBVSUV2ZW50LCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBVc2UgdGltZW91dCB0byBkZXRlY3QgY2hhbmdlc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCghdGhpcy5pZ25vcmVDbG9zZUV2ZW50ICYmICF0aGlzLmlzU2VhcmNoYm94Rm9jdXNlZCgpKSB8fCBmb3JjZSkge1xuICAgICAgICB0aGlzLmJsdXJTZWFyY2hCb3goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJsdXJTZWFyY2hCb3goZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKFxuICAgICAgJ3NlYXJjaGJveC1pcy1hY3RpdmUnLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZm9jdXMgaXMgb24gc2VhcmNoYm94IG9yIHJlc3VsdCBsaXN0IGVsZW1lbnRzXG4gIHByaXZhdGUgaXNTZWFyY2hib3hGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCkuaW5jbHVkZXModGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpKSB8fFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbYXJpYS1sYWJlbD1cInNlYXJjaFwiXScpID09PVxuICAgICAgICB0aGlzLmdldEZvY3VzZWRFbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzcGVjaWFsbHkgaW4gbW9iaWxlIHdlIGRvIG5vdCB3YW50IHRoZSBzZWFyY2ggaWNvblxuICAgKiB0byBmb2N1cyB0aGUgaW5wdXQgYWdhaW4gd2hlbiBpdCdzIGFscmVhZHkgb3Blbi5cbiAgICogKi9cbiAgYXZvaWRSZW9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmhhc0JvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScpKSB7XG4gICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIHJlc3VsdCBsaXN0IGFzIEhUTUxFbGVtZW50IGFycmF5XG4gIHByaXZhdGUgZ2V0UmVzdWx0RWxlbWVudHMoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdHMgPiBhLCAuc3VnZ2VzdGlvbnMgPiBhJylcbiAgICApO1xuICB9XG5cbiAgLy8gUmV0dXJuIGZvY3VzZWQgZWxlbWVudCBhcyBIVE1MRWxlbWVudFxuICBwcml2YXRlIGdldEZvY3VzZWRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gPEhUTUxFbGVtZW50PnRoaXMud2luUmVmLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGdldEZvY3VzZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCkuaW5kZXhPZih0aGlzLmdldEZvY3VzZWRFbGVtZW50KCkpO1xuICB9XG5cbiAgLy8gRm9jdXMgb24gcHJldmlvdXMgaXRlbSBpbiByZXN1bHRzIGxpc3RcbiAgZm9jdXNQcmV2aW91c0NoaWxkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gTmVnYXRlIG5vcm1hbCBrZXlzY3JvbGxcbiAgICBjb25zdCBbcmVzdWx0cywgZm9jdXNlZEluZGV4XSA9IFtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0RWxlbWVudHMoKSxcbiAgICAgIHRoaXMuZ2V0Rm9jdXNlZEluZGV4KCksXG4gICAgXTtcbiAgICAvLyBGb2N1cyBvbiBsYXN0IGluZGV4IG1vdmluZyB0byBmaXJzdFxuICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgaWYgKGZvY3VzZWRJbmRleCA8IDEpIHtcbiAgICAgICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ZvY3VzZWRJbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRm9jdXMgb24gbmV4dCBpdGVtIGluIHJlc3VsdHMgbGlzdFxuICBmb2N1c05leHRDaGlsZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIE5lZ2F0ZSBub3JtYWwga2V5c2Nyb2xsXG4gICAgY29uc3QgW3Jlc3VsdHMsIGZvY3VzZWRJbmRleF0gPSBbXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCksXG4gICAgICB0aGlzLmdldEZvY3VzZWRJbmRleCgpLFxuICAgIF07XG4gICAgLy8gRm9jdXMgb24gZmlyc3QgaW5kZXggbW92aW5nIHRvIGxhc3RcbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb2N1c2VkSW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJlc3VsdHNbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbZm9jdXNlZEluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIFBMUCB3aXRoIHRoZSBnaXZlbiBxdWVyeS5cbiAgICpcbiAgICogVE9ETzogaWYgdGhlcmUncyBhIHNpbmdsZSBwcm9kdWN0IG1hdGNoLCB3ZSBjb3VsZCBvcGVuIHRoZSBQRFAuXG4gICAqL1xuICBsYXVuY2hTZWFyY2hSZXN1bHQoZXZlbnQ6IFVJRXZlbnQsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5LnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UocXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGNsb3NpbmcgdGhlIHNlYXJjaCByZXN1bHQgbGlzdC5cbiAgICovXG4gIGRpc2FibGVDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgcHVibGljIGNsZWFyKGVsOiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlQ2xvc2UoKTtcbiAgICBlbC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5jbGVhclJlc3VsdHMoKTtcbiAgfVxufVxuIl19
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
                    return __assign(__assign({}, c), { displayProducts: c.displayProducts === 'true' || c.displayProducts === true, displayProductImages: c.displayProductImages === 'true' ||
                            c.displayProductImages === true, displaySuggestions: c.displaySuggestions === 'true' ||
                            c.displaySuggestions === true });
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
            template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(1, Optional())
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFLElBQU0sd0JBQXdCLEdBQW9CO0lBQ2hELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixFQUFFLElBQUk7Q0FDM0IsQ0FBQztBQU9GO0lBb0JFOzs7T0FHRztJQUVILDRCQUNZLHlCQUFvRCxFQUVwRCxhQUFzRCxFQUN0RCxNQUFpQjtRQUo3QixpQkFLSTtRQUpRLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFFcEQsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3RELFdBQU0sR0FBTixNQUFNLENBQVc7UUFqQjdCLGNBQVMsR0FBRyxTQUFTLENB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QyxnQkFBZ0IsdUJBRHhDLFFBQVE7Z0JBRVMsU0FBUzs7SUF2QjdCO1FBREMsS0FBSyxDQUFDLFdBQVcsQ0FBQzt1REFLbEI7SUFWVSxrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsdW1GQUEwQztZQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO1FBNEJHLFdBQUEsUUFBUSxFQUFFLENBQUE7T0EzQkYsa0JBQWtCLENBd005QjtJQUFELHlCQUFDO0NBQUEsQUF4TUQsSUF3TUM7U0F4TVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlYXJjaEJveENvbXBvbmVudCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcblxuY29uc3QgREVGQVVMVF9TRUFSQ0hCT1hfQ09ORklHOiBTZWFyY2hCb3hDb25maWcgPSB7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiAxLFxuICBkaXNwbGF5UHJvZHVjdHM6IHRydWUsXG4gIGRpc3BsYXlTdWdnZXN0aW9uczogdHJ1ZSxcbiAgbWF4UHJvZHVjdHM6IDUsXG4gIG1heFN1Z2dlc3Rpb25zOiA1LFxuICBkaXNwbGF5UHJvZHVjdEltYWdlczogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNlYXJjaGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XG4gIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnO1xuICAvKipcbiAgICogU2V0cyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluIHNvbWUgb2NjYXNpb25zIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjbG9zZSBldmVudCxcbiAgICogZm9yIGV4YW1wbGUgd2hlbiB3ZSBjbGljayBpbnNpZGUgdGhlIHNlYXJjaCByZXN1bHQgc2VjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IGRhdGEgaXMgb3B0aW9uYWwsIHNvIHRoYXQgdGhpcyBjb21wb25lbnRcbiAgICogY2FuIGJlIHJldXNlZCB3aXRob3V0IENNUyBpbnRlZ3JhdGlvbi5cbiAgICovXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgcmVzdWx0cyQ6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4gPSB0aGlzLmNvbmZpZyQucGlwZShcbiAgICB0YXAoKGMpID0+ICh0aGlzLmNvbmZpZyA9IGMpKSxcbiAgICBzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmdldFJlc3VsdHMoY29uZmlnKSlcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9yIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlYXJjaGJveC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGNvbmZpZyQoKTogT2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+IHtcbiAgICBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gPE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPj50aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgLy8gU2luY2UgdGhlIGJhY2tlbmQgcmV0dXJucyBzdHJpbmcgdmFsdWVzIChpLmUuIGRpc3BsYXlQcm9kdWN0czogXCJ0cnVlXCIpIGZvclxuICAgICAgICAvLyBib29sZWFuIHZhbHVlcywgd2UgcmVwbGFjZSB0aGVtIHdpdGggYm9vbGVhbiB2YWx1ZXMuXG4gICAgICAgIG1hcCgoYykgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jLFxuICAgICAgICAgICAgZGlzcGxheVByb2R1Y3RzOlxuICAgICAgICAgICAgICA8YW55PmMuZGlzcGxheVByb2R1Y3RzID09PSAndHJ1ZScgfHwgYy5kaXNwbGF5UHJvZHVjdHMgPT09IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5UHJvZHVjdEltYWdlczpcbiAgICAgICAgICAgICAgPGFueT5jLmRpc3BsYXlQcm9kdWN0SW1hZ2VzID09PSAndHJ1ZScgfHxcbiAgICAgICAgICAgICAgYy5kaXNwbGF5UHJvZHVjdEltYWdlcyA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc3BsYXlTdWdnZXN0aW9uczpcbiAgICAgICAgICAgICAgPGFueT5jLmRpc3BsYXlTdWdnZXN0aW9ucyA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgIGMuZGlzcGxheVN1Z2dlc3Rpb25zID09PSB0cnVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YoREVGQVVMVF9TRUFSQ0hCT1hfQ09ORklHKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzZWFyY2hib3ggYW5kIG9wZW5zIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2UuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5zZWFyY2gocXVlcnksIHRoaXMuY29uZmlnKTtcbiAgICAvLyBmb3JjZSB0aGUgc2VhcmNoYm94IHRvIG9wZW5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHlwZWFoZWFkIHNlYXJjaGJveFxuICAgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0eXBlaGVhZCBzZWFyY2hib3guXG4gICAqL1xuICBjbG9zZShldmVudDogVUlFdmVudCwgZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gVXNlIHRpbWVvdXQgdG8gZGV0ZWN0IGNoYW5nZXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgoIXRoaXMuaWdub3JlQ2xvc2VFdmVudCAmJiAhdGhpcy5pc1NlYXJjaGJveEZvY3VzZWQoKSkgfHwgZm9yY2UpIHtcbiAgICAgICAgdGhpcy5ibHVyU2VhcmNoQm94KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBibHVyU2VhcmNoQm94KGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcyhcbiAgICAgICdzZWFyY2hib3gtaXMtYWN0aXZlJyxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIGZvY3VzIGlzIG9uIHNlYXJjaGJveCBvciByZXN1bHQgbGlzdCBlbGVtZW50c1xuICBwcml2YXRlIGlzU2VhcmNoYm94Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluY2x1ZGVzKHRoaXMuZ2V0Rm9jdXNlZEVsZW1lbnQoKSkgfHxcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJzZWFyY2hcIl0nKSA9PT1cbiAgICAgICAgdGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3BlY2lhbGx5IGluIG1vYmlsZSB3ZSBkbyBub3Qgd2FudCB0aGUgc2VhcmNoIGljb25cbiAgICogdG8gZm9jdXMgdGhlIGlucHV0IGFnYWluIHdoZW4gaXQncyBhbHJlYWR5IG9wZW4uXG4gICAqICovXG4gIGF2b2lkUmVvcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5oYXNCb2R5Q2xhc3MoJ3NlYXJjaGJveC1pcy1hY3RpdmUnKSkge1xuICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiByZXN1bHQgbGlzdCBhcyBIVE1MRWxlbWVudCBhcnJheVxuICBwcml2YXRlIGdldFJlc3VsdEVsZW1lbnRzKCk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzID4gYSwgLnN1Z2dlc3Rpb25zID4gYScpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJldHVybiBmb2N1c2VkIGVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSBnZXRGb2N1c2VkRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIDxIVE1MRWxlbWVudD50aGlzLndpblJlZi5kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb2N1c2VkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluZGV4T2YodGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpKTtcbiAgfVxuXG4gIC8vIEZvY3VzIG9uIHByZXZpb3VzIGl0ZW0gaW4gcmVzdWx0cyBsaXN0XG4gIGZvY3VzUHJldmlvdXNDaGlsZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIE5lZ2F0ZSBub3JtYWwga2V5c2Nyb2xsXG4gICAgY29uc3QgW3Jlc3VsdHMsIGZvY3VzZWRJbmRleF0gPSBbXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCksXG4gICAgICB0aGlzLmdldEZvY3VzZWRJbmRleCgpLFxuICAgIF07XG4gICAgLy8gRm9jdXMgb24gbGFzdCBpbmRleCBtb3ZpbmcgdG8gZmlyc3RcbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb2N1c2VkSW5kZXggPCAxKSB7XG4gICAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZvY3VzIG9uIG5leHQgaXRlbSBpbiByZXN1bHRzIGxpc3RcbiAgZm9jdXNOZXh0Q2hpbGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWdhdGUgbm9ybWFsIGtleXNjcm9sbFxuICAgIGNvbnN0IFtyZXN1bHRzLCBmb2N1c2VkSW5kZXhdID0gW1xuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLFxuICAgICAgdGhpcy5nZXRGb2N1c2VkSW5kZXgoKSxcbiAgICBdO1xuICAgIC8vIEZvY3VzIG9uIGZpcnN0IGluZGV4IG1vdmluZyB0byBsYXN0XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZm9jdXNlZEluZGV4ID49IHJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXN1bHRzWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ZvY3VzZWRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBQTFAgd2l0aCB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqXG4gICAqIFRPRE86IGlmIHRoZXJlJ3MgYSBzaW5nbGUgcHJvZHVjdCBtYXRjaCwgd2UgY291bGQgb3BlbiB0aGUgUERQLlxuICAgKi9cbiAgbGF1bmNoU2VhcmNoUmVzdWx0KGV2ZW50OiBVSUV2ZW50LCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBjbG9zaW5nIHRoZSBzZWFyY2ggcmVzdWx0IGxpc3QuXG4gICAqL1xuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIHB1YmxpYyBjbGVhcihlbDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlKCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cbn1cbiJdfQ==
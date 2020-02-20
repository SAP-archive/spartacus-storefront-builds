import { __assign, __decorate, __param } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
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
    SearchBoxComponent.prototype.close = function (event) {
        if (!this.ignoreCloseEvent) {
            this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
            if (event && event.target) {
                event.target.blur();
            }
        }
        this.ignoreCloseEvent = false;
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
        { type: CmsComponentData, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input('queryText')
    ], SearchBoxComponent.prototype, "queryText", null);
    SearchBoxComponent = __decorate([
        Component({
            selector: 'cx-searchbox',
            template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div *ngIf=\"results$ | async as result\" class=\"results\" (click)=\"close($event)\">\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(1, Optional())
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHM0UsSUFBTSx3QkFBd0IsR0FBb0I7SUFDaEQsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixlQUFlLEVBQUUsSUFBSTtJQUNyQixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsb0JBQW9CLEVBQUUsSUFBSTtDQUMzQixDQUFDO0FBT0Y7SUFvQkU7OztPQUdHO0lBQ0gsNEJBQ1kseUJBQW9ELEVBRXBELGFBQXNEO1FBSGxFLGlCQUlJO1FBSFEsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUVwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBeUM7UUFmbEUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0Qjs7O1dBR0c7UUFDSyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFZakMsYUFBUSxHQUE4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDckQsR0FB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QUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0NBQUssR0FBWixVQUFhLEVBQW9CO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztnQkEzR3NDLHlCQUF5QjtnQkFFckMsZ0JBQWdCLHVCQUR4QyxRQUFROztJQXBCWDtRQURDLEtBQUssQ0FBQyxXQUFXLENBQUM7dURBS2xCO0lBVlUsa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDQ2REFBMEM7WUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztRQTJCRyxXQUFBLFFBQVEsRUFBRSxDQUFBO09BMUJGLGtCQUFrQixDQXFJOUI7SUFBRCx5QkFBQztDQUFBLEFBcklELElBcUlDO1NBcklZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5jb25zdCBERUZBVUxUX1NFQVJDSEJPWF9DT05GSUc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDEsXG4gIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICBtYXhQcm9kdWN0czogNSxcbiAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gIGRpc3BsYXlQcm9kdWN0SW1hZ2VzOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcbiAgY29uZmlnOiBTZWFyY2hCb3hDb25maWc7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZWFyY2ggYm94IGlucHV0IGZpZWxkXG4gICAqL1xuICBASW5wdXQoJ3F1ZXJ5VGV4dCcpXG4gIHNldCBxdWVyeVRleHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICAvKipcbiAgICogSW4gc29tZSBvY2Nhc2lvbnMgd2UgbmVlZCB0byBpZ25vcmUgdGhlIGNsb3NlIGV2ZW50LFxuICAgKiBmb3IgZXhhbXBsZSB3aGVuIHdlIGNsaWNrIGluc2lkZSB0aGUgc2VhcmNoIHJlc3VsdCBzZWN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBpZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgZGF0YSBpcyBvcHRpb25hbCwgc28gdGhhdCB0aGlzIGNvbXBvbmVudFxuICAgKiBjYW4gYmUgcmV1c2VkIHdpdGhvdXQgQ01TIGludGVncmF0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+XG4gICkge31cblxuICByZXN1bHRzJDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiA9IHRoaXMuY29uZmlnJC5waXBlKFxuICAgIHRhcChjID0+ICh0aGlzLmNvbmZpZyA9IGMpKSxcbiAgICBzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5nZXRSZXN1bHRzKGNvbmZpZykpXG4gICk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhY2tlbmQgY29uZmlndXJhdGlvbiBvciBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZWFyY2hib3guXG4gICAqL1xuICBwcml2YXRlIGdldCBjb25maWckKCk6IE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPiB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4+dGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICAgIC8vIFNpbmNlIHRoZSBiYWNrZW5kIHJldHVybnMgc3RyaW5nIHZhbHVlcyAoaS5lLiBkaXNwbGF5UHJvZHVjdHM6IFwidHJ1ZVwiKSBmb3JcbiAgICAgICAgLy8gYm9vbGVhbiB2YWx1ZXMsIHdlIHJlcGxhY2UgdGhlbSB3aXRoIGJvb2xlYW4gdmFsdWVzLlxuICAgICAgICBtYXAoYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmMsXG4gICAgICAgICAgICBkaXNwbGF5UHJvZHVjdHM6XG4gICAgICAgICAgICAgIDxhbnk+Yy5kaXNwbGF5UHJvZHVjdHMgPT09ICd0cnVlJyB8fCBjLmRpc3BsYXlQcm9kdWN0cyA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc3BsYXlQcm9kdWN0SW1hZ2VzOlxuICAgICAgICAgICAgICA8YW55PmMuZGlzcGxheVByb2R1Y3RJbWFnZXMgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICBjLmRpc3BsYXlQcm9kdWN0SW1hZ2VzID09PSB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheVN1Z2dlc3Rpb25zOlxuICAgICAgICAgICAgICA8YW55PmMuZGlzcGxheVN1Z2dlc3Rpb25zID09PSAndHJ1ZScgfHxcbiAgICAgICAgICAgICAgYy5kaXNwbGF5U3VnZ2VzdGlvbnMgPT09IHRydWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZihERUZBVUxUX1NFQVJDSEJPWF9DT05GSUcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNlYXJjaGJveCBhbmQgb3BlbnMgdGhlIHNlYXJjaCByZXN1bHQgcGFnZS5cbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnNlYXJjaChxdWVyeSwgdGhpcy5jb25maWcpO1xuICAgIC8vIGZvcmNlIHRoZSBzZWFyY2hib3ggdG8gb3BlblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0eXBlYWhlYWQgc2VhcmNoYm94XG4gICAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS50b2dnbGVCb2R5Q2xhc3MoJ3NlYXJjaGJveC1pcy1hY3RpdmUnLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHR5cGVoZWFkIHNlYXJjaGJveC5cbiAgICovXG4gIGNsb3NlKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZUNsb3NlRXZlbnQpIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS50b2dnbGVCb2R5Q2xhc3MoXG4gICAgICAgICdzZWFyY2hib3gtaXMtYWN0aXZlJyxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzcGVjaWFsbHkgaW4gbW9iaWxlIHdlIGRvIG5vdCB3YW50IHRoZSBzZWFyY2ggaWNvblxuICAgKiB0byBmb2N1cyB0aGUgaW5wdXQgYWdhaW4gd2hlbiBpdCdzIGFscmVhZHkgb3Blbi5cbiAgICogKi9cbiAgYXZvaWRSZW9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmhhc0JvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScpKSB7XG4gICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBQTFAgd2l0aCB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqXG4gICAqIFRPRE86IGlmIHRoZXJlJ3MgYSBzaW5nbGUgcHJvZHVjdCBtYXRjaCwgd2UgY291bGQgb3BlbiB0aGUgUERQLlxuICAgKi9cbiAgbGF1bmNoU2VhcmNoUmVzdWx0KGV2ZW50OiBVSUV2ZW50LCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBjbG9zaW5nIHRoZSBzZWFyY2ggcmVzdWx0IGxpc3QuXG4gICAqL1xuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIHB1YmxpYyBjbGVhcihlbDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlKCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cbn1cbiJdfQ==
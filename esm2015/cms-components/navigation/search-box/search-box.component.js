import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SearchBoxComponentService } from './search-box-component.service';
const DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 1,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    maxSuggestions: 5,
    displayProductImages: true,
};
export class SearchBoxComponent {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    constructor(searchBoxComponentService, componentData, winRef) {
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.winRef = winRef;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.config$.pipe(tap((c) => (this.config = c)), switchMap((config) => this.searchBoxComponentService.getResults(config)));
    }
    /**
     * Sets the search box input field
     */
    set queryText(value) {
        if (value) {
            this.search(value);
        }
    }
    /**
     * Returns the backend configuration or default configuration for the searchbox.
     */
    get config$() {
        if (this.componentData) {
            return this.componentData.data$.pipe(
            // Since the backend returns string values (i.e. displayProducts: "true") for
            // boolean values, we replace them with boolean values.
            map((c) => {
                return Object.assign(Object.assign({}, c), { displayProducts: (c === null || c === void 0 ? void 0 : c.displayProducts) === 'true' || (c === null || c === void 0 ? void 0 : c.displayProducts) === true, displayProductImages: (c === null || c === void 0 ? void 0 : c.displayProductImages) === 'true' ||
                        (c === null || c === void 0 ? void 0 : c.displayProductImages) === true, displaySuggestions: (c === null || c === void 0 ? void 0 : c.displaySuggestions) === 'true' ||
                        (c === null || c === void 0 ? void 0 : c.displaySuggestions) === true });
            }));
        }
        else {
            return of(DEFAULT_SEARCHBOX_CONFIG);
        }
    }
    /**
     * Closes the searchbox and opens the search result page.
     */
    search(query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    }
    /**
     * Opens the typeahead searchbox
     */
    open() {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    }
    /**
     * Closes the typehead searchbox.
     */
    close(event, force) {
        // Use timeout to detect changes
        setTimeout(() => {
            if ((!this.ignoreCloseEvent && !this.isSearchboxFocused()) || force) {
                this.blurSearchBox(event);
            }
        });
    }
    blurSearchBox(event) {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
        if (event && event.target) {
            event.target.blur();
        }
    }
    // Check if focus is on searchbox or result list elements
    isSearchboxFocused() {
        return (this.getResultElements().includes(this.getFocusedElement()) ||
            this.winRef.document.querySelector('input[aria-label="search"]') ===
                this.getFocusedElement());
    }
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    avoidReopen(event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    }
    // Return result list as HTMLElement array
    getResultElements() {
        return Array.from(this.winRef.document.querySelectorAll('.products > a, .suggestions > a'));
    }
    // Return focused element as HTMLElement
    getFocusedElement() {
        return this.winRef.document.activeElement;
    }
    getFocusedIndex() {
        return this.getResultElements().indexOf(this.getFocusedElement());
    }
    // Focus on previous item in results list
    focusPreviousChild(event) {
        event.preventDefault(); // Negate normal keyscroll
        const [results, focusedIndex] = [
            this.getResultElements(),
            this.getFocusedIndex(),
        ];
        // Focus on last index moving to first
        if (results.length) {
            if (focusedIndex < 1) {
                results[results.length - 1].focus();
            }
            else {
                results[focusedIndex - 1].focus();
            }
        }
    }
    // Focus on next item in results list
    focusNextChild(event) {
        event.preventDefault(); // Negate normal keyscroll
        const [results, focusedIndex] = [
            this.getResultElements(),
            this.getFocusedIndex(),
        ];
        // Focus on first index moving to last
        if (results.length) {
            if (focusedIndex >= results.length - 1) {
                results[0].focus();
            }
            else {
                results[focusedIndex + 1].focus();
            }
        }
    }
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a single product match, we could open the PDP.
     */
    launchSearchResult(event, query) {
        if (!query || query.trim().length === 0) {
            return;
        }
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    }
    /**
     * Disables closing the search result list.
     */
    disableClose() {
        this.ignoreCloseEvent = true;
    }
    /**
     * Clears the search box input field
     */
    clear(el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-searchbox',
                template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService },
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: WindowRef }
];
SearchBoxComponent.propDecorators = {
    queryText: [{ type: Input, args: ['queryText',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFLE1BQU0sd0JBQXdCLEdBQW9CO0lBQ2hELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixFQUFFLElBQUk7Q0FDM0IsQ0FBQztBQU9GLE1BQU0sT0FBTyxrQkFBa0I7SUFvQjdCOzs7T0FHRztJQUVILFlBQ1kseUJBQW9ELEVBRXBELGFBQXNELEVBQ3RELE1BQWlCO1FBSGpCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFFcEQsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3RELFdBQU0sR0FBTixNQUFNLENBQVc7UUFqQjdCLGNBQVMs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O09BRUc7SUFDSSxLQUFLLENBQUMsRUFBb0I7UUFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7OztZQTVNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHlrRkFBMEM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFoQlEseUJBQXlCO1lBRHpCLGdCQUFnQix1QkE2Q3BCLFFBQVE7WUFqRG1CLFNBQVM7Ozt3QkEyQnRDLEtBQUssU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlYXJjaEJveENvbXBvbmVudCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcblxuY29uc3QgREVGQVVMVF9TRUFSQ0hCT1hfQ09ORklHOiBTZWFyY2hCb3hDb25maWcgPSB7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0OiAxLFxuICBkaXNwbGF5UHJvZHVjdHM6IHRydWUsXG4gIGRpc3BsYXlTdWdnZXN0aW9uczogdHJ1ZSxcbiAgbWF4UHJvZHVjdHM6IDUsXG4gIG1heFN1Z2dlc3Rpb25zOiA1LFxuICBkaXNwbGF5UHJvZHVjdEltYWdlczogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNlYXJjaGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XG4gIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnO1xuICAvKipcbiAgICogU2V0cyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluIHNvbWUgb2NjYXNpb25zIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjbG9zZSBldmVudCxcbiAgICogZm9yIGV4YW1wbGUgd2hlbiB3ZSBjbGljayBpbnNpZGUgdGhlIHNlYXJjaCByZXN1bHQgc2VjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IGRhdGEgaXMgb3B0aW9uYWwsIHNvIHRoYXQgdGhpcyBjb21wb25lbnRcbiAgICogY2FuIGJlIHJldXNlZCB3aXRob3V0IENNUyBpbnRlZ3JhdGlvbi5cbiAgICovXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgcmVzdWx0cyQ6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4gPSB0aGlzLmNvbmZpZyQucGlwZShcbiAgICB0YXAoKGMpID0+ICh0aGlzLmNvbmZpZyA9IGMpKSxcbiAgICBzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmdldFJlc3VsdHMoY29uZmlnKSlcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9yIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNlYXJjaGJveC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGNvbmZpZyQoKTogT2JzZXJ2YWJsZTxTZWFyY2hCb3hDb25maWc+IHtcbiAgICBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gPE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPj50aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgLy8gU2luY2UgdGhlIGJhY2tlbmQgcmV0dXJucyBzdHJpbmcgdmFsdWVzIChpLmUuIGRpc3BsYXlQcm9kdWN0czogXCJ0cnVlXCIpIGZvclxuICAgICAgICAvLyBib29sZWFuIHZhbHVlcywgd2UgcmVwbGFjZSB0aGVtIHdpdGggYm9vbGVhbiB2YWx1ZXMuXG4gICAgICAgIG1hcCgoYykgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jLFxuICAgICAgICAgICAgZGlzcGxheVByb2R1Y3RzOlxuICAgICAgICAgICAgICA8YW55PmM/LmRpc3BsYXlQcm9kdWN0cyA9PT0gJ3RydWUnIHx8IGM/LmRpc3BsYXlQcm9kdWN0cyA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc3BsYXlQcm9kdWN0SW1hZ2VzOlxuICAgICAgICAgICAgICA8YW55PmM/LmRpc3BsYXlQcm9kdWN0SW1hZ2VzID09PSAndHJ1ZScgfHxcbiAgICAgICAgICAgICAgYz8uZGlzcGxheVByb2R1Y3RJbWFnZXMgPT09IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5U3VnZ2VzdGlvbnM6XG4gICAgICAgICAgICAgIDxhbnk+Yz8uZGlzcGxheVN1Z2dlc3Rpb25zID09PSAndHJ1ZScgfHxcbiAgICAgICAgICAgICAgYz8uZGlzcGxheVN1Z2dlc3Rpb25zID09PSB0cnVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YoREVGQVVMVF9TRUFSQ0hCT1hfQ09ORklHKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzZWFyY2hib3ggYW5kIG9wZW5zIHRoZSBzZWFyY2ggcmVzdWx0IHBhZ2UuXG4gICAqL1xuICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5zZWFyY2gocXVlcnksIHRoaXMuY29uZmlnKTtcbiAgICAvLyBmb3JjZSB0aGUgc2VhcmNoYm94IHRvIG9wZW5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHlwZWFoZWFkIHNlYXJjaGJveFxuICAgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0eXBlaGVhZCBzZWFyY2hib3guXG4gICAqL1xuICBjbG9zZShldmVudDogVUlFdmVudCwgZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gVXNlIHRpbWVvdXQgdG8gZGV0ZWN0IGNoYW5nZXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgoIXRoaXMuaWdub3JlQ2xvc2VFdmVudCAmJiAhdGhpcy5pc1NlYXJjaGJveEZvY3VzZWQoKSkgfHwgZm9yY2UpIHtcbiAgICAgICAgdGhpcy5ibHVyU2VhcmNoQm94KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBibHVyU2VhcmNoQm94KGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcyhcbiAgICAgICdzZWFyY2hib3gtaXMtYWN0aXZlJyxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIGZvY3VzIGlzIG9uIHNlYXJjaGJveCBvciByZXN1bHQgbGlzdCBlbGVtZW50c1xuICBwcml2YXRlIGlzU2VhcmNoYm94Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluY2x1ZGVzKHRoaXMuZ2V0Rm9jdXNlZEVsZW1lbnQoKSkgfHxcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJzZWFyY2hcIl0nKSA9PT1cbiAgICAgICAgdGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3BlY2lhbGx5IGluIG1vYmlsZSB3ZSBkbyBub3Qgd2FudCB0aGUgc2VhcmNoIGljb25cbiAgICogdG8gZm9jdXMgdGhlIGlucHV0IGFnYWluIHdoZW4gaXQncyBhbHJlYWR5IG9wZW4uXG4gICAqICovXG4gIGF2b2lkUmVvcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5oYXNCb2R5Q2xhc3MoJ3NlYXJjaGJveC1pcy1hY3RpdmUnKSkge1xuICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiByZXN1bHQgbGlzdCBhcyBIVE1MRWxlbWVudCBhcnJheVxuICBwcml2YXRlIGdldFJlc3VsdEVsZW1lbnRzKCk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzID4gYSwgLnN1Z2dlc3Rpb25zID4gYScpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJldHVybiBmb2N1c2VkIGVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSBnZXRGb2N1c2VkRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIDxIVE1MRWxlbWVudD50aGlzLndpblJlZi5kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb2N1c2VkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLmluZGV4T2YodGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpKTtcbiAgfVxuXG4gIC8vIEZvY3VzIG9uIHByZXZpb3VzIGl0ZW0gaW4gcmVzdWx0cyBsaXN0XG4gIGZvY3VzUHJldmlvdXNDaGlsZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIE5lZ2F0ZSBub3JtYWwga2V5c2Nyb2xsXG4gICAgY29uc3QgW3Jlc3VsdHMsIGZvY3VzZWRJbmRleF0gPSBbXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCksXG4gICAgICB0aGlzLmdldEZvY3VzZWRJbmRleCgpLFxuICAgIF07XG4gICAgLy8gRm9jdXMgb24gbGFzdCBpbmRleCBtb3ZpbmcgdG8gZmlyc3RcbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb2N1c2VkSW5kZXggPCAxKSB7XG4gICAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZvY3VzIG9uIG5leHQgaXRlbSBpbiByZXN1bHRzIGxpc3RcbiAgZm9jdXNOZXh0Q2hpbGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWdhdGUgbm9ybWFsIGtleXNjcm9sbFxuICAgIGNvbnN0IFtyZXN1bHRzLCBmb2N1c2VkSW5kZXhdID0gW1xuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLFxuICAgICAgdGhpcy5nZXRGb2N1c2VkSW5kZXgoKSxcbiAgICBdO1xuICAgIC8vIEZvY3VzIG9uIGZpcnN0IGluZGV4IG1vdmluZyB0byBsYXN0XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZm9jdXNlZEluZGV4ID49IHJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXN1bHRzWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ZvY3VzZWRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBQTFAgd2l0aCB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqXG4gICAqIFRPRE86IGlmIHRoZXJlJ3MgYSBzaW5nbGUgcHJvZHVjdCBtYXRjaCwgd2UgY291bGQgb3BlbiB0aGUgUERQLlxuICAgKi9cbiAgbGF1bmNoU2VhcmNoUmVzdWx0KGV2ZW50OiBVSUV2ZW50LCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFxdWVyeSB8fCBxdWVyeS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBjbG9zaW5nIHRoZSBzZWFyY2ggcmVzdWx0IGxpc3QuXG4gICAqL1xuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIHB1YmxpYyBjbGVhcihlbDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlKCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cbn1cbiJdfQ==
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
        // Use Timeout to run after blur event to prevent the searchbox from closing on mobile
        setTimeout(() => {
            // Retain focus on input lost by clicking on icon
            el.focus();
            this.ignoreCloseEvent = false;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFLE1BQU0sd0JBQXdCLEdBQW9CO0lBQ2hELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixFQUFFLElBQUk7Q0FDM0IsQ0FBQztBQU9GLE1BQU0sT0FBTyxrQkFBa0I7SUFvQjdCOzs7T0FHRztJQUVILFlBQ1kseUJBQW9ELEVBRXBELGFBQXNELEVBQ3RELE1BQWlCO1FBSGpCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFFcEQsa0JBQWEsR0FBYixhQUFhLENBQXlDO1FBQ3RELFdBQU0sR0FBTixNQUFNLENBQVc7UUFqQjdCLGNBQVMs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O09BRUc7SUFDSCxLQUFLLENBQUMsRUFBb0I7UUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTlDLHNGQUFzRjtRQUN0RixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsaURBQWlEO1lBQ2pELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix5a0ZBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBaEJRLHlCQUF5QjtZQUR6QixnQkFBZ0IsdUJBNkNwQixRQUFRO1lBakRtQixTQUFTOzs7d0JBMkJ0QyxLQUFLLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZWFyY2hCb3hDb21wb25lbnQsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIQk9YX0NPTkZJRzogU2VhcmNoQm94Q29uZmlnID0ge1xuICBtaW5DaGFyYWN0ZXJzQmVmb3JlUmVxdWVzdDogMSxcbiAgZGlzcGxheVByb2R1Y3RzOiB0cnVlLFxuICBkaXNwbGF5U3VnZ2VzdGlvbnM6IHRydWUsXG4gIG1heFByb2R1Y3RzOiA1LFxuICBtYXhTdWdnZXN0aW9uczogNSxcbiAgZGlzcGxheVByb2R1Y3RJbWFnZXM6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xuICBjb25maWc6IFNlYXJjaEJveENvbmZpZztcbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIEBJbnB1dCgncXVlcnlUZXh0JylcbiAgc2V0IHF1ZXJ5VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBJbiBzb21lIG9jY2FzaW9ucyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUgY2xvc2UgZXZlbnQsXG4gICAqIGZvciBleGFtcGxlIHdoZW4gd2UgY2xpY2sgaW5zaWRlIHRoZSBzZWFyY2ggcmVzdWx0IHNlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCBkYXRhIGlzIG9wdGlvbmFsLCBzbyB0aGF0IHRoaXMgY29tcG9uZW50XG4gICAqIGNhbiBiZSByZXVzZWQgd2l0aG91dCBDTVMgaW50ZWdyYXRpb24uXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIHJlc3VsdHMkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+ID0gdGhpcy5jb25maWckLnBpcGUoXG4gICAgdGFwKChjKSA9PiAodGhpcy5jb25maWcgPSBjKSksXG4gICAgc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5nZXRSZXN1bHRzKGNvbmZpZykpXG4gICk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhY2tlbmQgY29uZmlndXJhdGlvbiBvciBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZWFyY2hib3guXG4gICAqL1xuICBwcml2YXRlIGdldCBjb25maWckKCk6IE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPiB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFNlYXJjaEJveENvbmZpZz4+dGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICAgIC8vIFNpbmNlIHRoZSBiYWNrZW5kIHJldHVybnMgc3RyaW5nIHZhbHVlcyAoaS5lLiBkaXNwbGF5UHJvZHVjdHM6IFwidHJ1ZVwiKSBmb3JcbiAgICAgICAgLy8gYm9vbGVhbiB2YWx1ZXMsIHdlIHJlcGxhY2UgdGhlbSB3aXRoIGJvb2xlYW4gdmFsdWVzLlxuICAgICAgICBtYXAoKGMpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYyxcbiAgICAgICAgICAgIGRpc3BsYXlQcm9kdWN0czpcbiAgICAgICAgICAgICAgPGFueT5jPy5kaXNwbGF5UHJvZHVjdHMgPT09ICd0cnVlJyB8fCBjPy5kaXNwbGF5UHJvZHVjdHMgPT09IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5UHJvZHVjdEltYWdlczpcbiAgICAgICAgICAgICAgPGFueT5jPy5kaXNwbGF5UHJvZHVjdEltYWdlcyA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgIGM/LmRpc3BsYXlQcm9kdWN0SW1hZ2VzID09PSB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheVN1Z2dlc3Rpb25zOlxuICAgICAgICAgICAgICA8YW55PmM/LmRpc3BsYXlTdWdnZXN0aW9ucyA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgIGM/LmRpc3BsYXlTdWdnZXN0aW9ucyA9PT0gdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKERFRkFVTFRfU0VBUkNIQk9YX0NPTkZJRyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc2VhcmNoYm94IGFuZCBvcGVucyB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLmNvbmZpZyk7XG4gICAgLy8gZm9yY2UgdGhlIHNlYXJjaGJveCB0byBvcGVuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHR5cGVhaGVhZCBzZWFyY2hib3hcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHlwZWhlYWQgc2VhcmNoYm94LlxuICAgKi9cbiAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIFVzZSB0aW1lb3V0IHRvIGRldGVjdCBjaGFuZ2VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoKCF0aGlzLmlnbm9yZUNsb3NlRXZlbnQgJiYgIXRoaXMuaXNTZWFyY2hib3hGb2N1c2VkKCkpIHx8IGZvcmNlKSB7XG4gICAgICAgIHRoaXMuYmx1clNlYXJjaEJveChldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYmx1clNlYXJjaEJveChldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS50b2dnbGVCb2R5Q2xhc3MoXG4gICAgICAnc2VhcmNoYm94LWlzLWFjdGl2ZScsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xuICAgICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiBmb2N1cyBpcyBvbiBzZWFyY2hib3ggb3IgcmVzdWx0IGxpc3QgZWxlbWVudHNcbiAgcHJpdmF0ZSBpc1NlYXJjaGJveEZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZ2V0UmVzdWx0RWxlbWVudHMoKS5pbmNsdWRlcyh0aGlzLmdldEZvY3VzZWRFbGVtZW50KCkpIHx8XG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFthcmlhLWxhYmVsPVwic2VhcmNoXCJdJykgPT09XG4gICAgICAgIHRoaXMuZ2V0Rm9jdXNlZEVsZW1lbnQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRXNwZWNpYWxseSBpbiBtb2JpbGUgd2UgZG8gbm90IHdhbnQgdGhlIHNlYXJjaCBpY29uXG4gICAqIHRvIGZvY3VzIHRoZSBpbnB1dCBhZ2FpbiB3aGVuIGl0J3MgYWxyZWFkeSBvcGVuLlxuICAgKiAqL1xuICBhdm9pZFJlb3BlbihldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuaGFzQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gcmVzdWx0IGxpc3QgYXMgSFRNTEVsZW1lbnQgYXJyYXlcbiAgcHJpdmF0ZSBnZXRSZXN1bHRFbGVtZW50cygpOiBIVE1MRWxlbWVudFtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0cyA+IGEsIC5zdWdnZXN0aW9ucyA+IGEnKVxuICAgICk7XG4gIH1cblxuICAvLyBSZXR1cm4gZm9jdXNlZCBlbGVtZW50IGFzIEhUTUxFbGVtZW50XG4gIHByaXZhdGUgZ2V0Rm9jdXNlZEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiA8SFRNTEVsZW1lbnQ+dGhpcy53aW5SZWYuZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9jdXNlZEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzdWx0RWxlbWVudHMoKS5pbmRleE9mKHRoaXMuZ2V0Rm9jdXNlZEVsZW1lbnQoKSk7XG4gIH1cblxuICAvLyBGb2N1cyBvbiBwcmV2aW91cyBpdGVtIGluIHJlc3VsdHMgbGlzdFxuICBmb2N1c1ByZXZpb3VzQ2hpbGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWdhdGUgbm9ybWFsIGtleXNjcm9sbFxuICAgIGNvbnN0IFtyZXN1bHRzLCBmb2N1c2VkSW5kZXhdID0gW1xuICAgICAgdGhpcy5nZXRSZXN1bHRFbGVtZW50cygpLFxuICAgICAgdGhpcy5nZXRGb2N1c2VkSW5kZXgoKSxcbiAgICBdO1xuICAgIC8vIEZvY3VzIG9uIGxhc3QgaW5kZXggbW92aW5nIHRvIGZpcnN0XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZm9jdXNlZEluZGV4IDwgMSkge1xuICAgICAgICByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbZm9jdXNlZEluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGb2N1cyBvbiBuZXh0IGl0ZW0gaW4gcmVzdWx0cyBsaXN0XG4gIGZvY3VzTmV4dENoaWxkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gTmVnYXRlIG5vcm1hbCBrZXlzY3JvbGxcbiAgICBjb25zdCBbcmVzdWx0cywgZm9jdXNlZEluZGV4XSA9IFtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0RWxlbWVudHMoKSxcbiAgICAgIHRoaXMuZ2V0Rm9jdXNlZEluZGV4KCksXG4gICAgXTtcbiAgICAvLyBGb2N1cyBvbiBmaXJzdCBpbmRleCBtb3ZpbmcgdG8gbGFzdFxuICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgaWYgKGZvY3VzZWRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmVzdWx0c1swXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tmb2N1c2VkSW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgUExQIHdpdGggdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKlxuICAgKiBUT0RPOiBpZiB0aGVyZSdzIGEgc2luZ2xlIHByb2R1Y3QgbWF0Y2gsIHdlIGNvdWxkIG9wZW4gdGhlIFBEUC5cbiAgICovXG4gIGxhdW5jaFNlYXJjaFJlc3VsdChldmVudDogVUlFdmVudCwgcXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghcXVlcnkgfHwgcXVlcnkudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZShxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgY2xvc2luZyB0aGUgc2VhcmNoIHJlc3VsdCBsaXN0LlxuICAgKi9cbiAgZGlzYWJsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBzZWFyY2ggYm94IGlucHV0IGZpZWxkXG4gICAqL1xuICBjbGVhcihlbDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlKCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG5cbiAgICAvLyBVc2UgVGltZW91dCB0byBydW4gYWZ0ZXIgYmx1ciBldmVudCB0byBwcmV2ZW50IHRoZSBzZWFyY2hib3ggZnJvbSBjbG9zaW5nIG9uIG1vYmlsZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmV0YWluIGZvY3VzIG9uIGlucHV0IGxvc3QgYnkgY2xpY2tpbmcgb24gaWNvblxuICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
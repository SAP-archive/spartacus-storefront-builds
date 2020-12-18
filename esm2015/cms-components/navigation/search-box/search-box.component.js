import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SearchBoxComponentService } from './search-box-component.service';
const DEFAULT_SEARCH_BOX_CONFIG = {
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
        var _a;
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.winRef = winRef;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        /**
         * Returns the SearchBox configuration. The configuration is driven by multiple
         * layers: default configuration, (optional) backend configuration and (optional)
         * input configuration.
         */
        this.config$ = (((_a = this.componentData) === null || _a === void 0 ? void 0 : _a.data$) || of({})).pipe(map((config) => {
            const isBool = (obj, prop) => (obj === null || obj === void 0 ? void 0 : obj[prop]) !== 'false' && (obj === null || obj === void 0 ? void 0 : obj[prop]) !== false;
            return Object.assign(Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_BOX_CONFIG), config), { displayProducts: isBool(config, 'displayProducts'), displayProductImages: isBool(config, 'displayProductImages'), displaySuggestions: isBool(config, 'displaySuggestions') }), this.config);
        }), tap((config) => (this.config = config)));
        this.results$ = this.config$.pipe(switchMap((config) => this.searchBoxComponentService.getResults(config)));
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
     * Closes the searchBox and opens the search result page.
     */
    search(query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchBox to open
        this.open();
    }
    /**
     * Opens the type-ahead searchBox
     */
    open() {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    }
    /**
     * Closes the type-ahead searchBox.
     */
    close(event, force) {
        // Use timeout to detect changes
        setTimeout(() => {
            if ((!this.ignoreCloseEvent && !this.isSearchBoxFocused()) || force) {
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
    isSearchBoxFocused() {
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
                template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService },
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: WindowRef }
];
SearchBoxComponent.propDecorators = {
    config: [{ type: Input }],
    queryText: [{ type: Input, args: ['queryText',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFLE1BQU0seUJBQXlCLEdBQW9CO0lBQ2pELDBCQUEwQixFQUFFLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixFQUFFLElBQUk7Q0FDM0IsQ0FBQztBQU9GLE1BQU0sT0FBTyxrQkFBa0I7SUFxQjdCOzs7T0FHRztJQUVILFlBQ1kseUJBQW9ELEVBRXBELGFBQXNELEVBQ3RELE1BQWlCOztRQUhqQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBRXBELGtCQUFhLEdBQWIsYUFBYSxDQUF5QztRQUN0RCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBakI3QixjQUFT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QUFZLEVBQUUsQ0FBQztRQUU5QyxzRkFBc0Y7UUFDdEYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlEQUFpRDtZQUNqRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbE5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsdW1GQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQWhCUSx5QkFBeUI7WUFEekIsZ0JBQWdCLHVCQThDcEIsUUFBUTtZQWxEbUIsU0FBUzs7O3FCQXVCdEMsS0FBSzt3QkFLTCxLQUFLLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZWFyY2hCb3hDb21wb25lbnQsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIX0JPWF9DT05GSUc6IFNlYXJjaEJveENvbmZpZyA9IHtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q6IDEsXG4gIGRpc3BsYXlQcm9kdWN0czogdHJ1ZSxcbiAgZGlzcGxheVN1Z2dlc3Rpb25zOiB0cnVlLFxuICBtYXhQcm9kdWN0czogNSxcbiAgbWF4U3VnZ2VzdGlvbnM6IDUsXG4gIGRpc3BsYXlQcm9kdWN0SW1hZ2VzOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlnOiBTZWFyY2hCb3hDb25maWc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIEBJbnB1dCgncXVlcnlUZXh0JylcbiAgc2V0IHF1ZXJ5VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBJbiBzb21lIG9jY2FzaW9ucyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUgY2xvc2UgZXZlbnQsXG4gICAqIGZvciBleGFtcGxlIHdoZW4gd2UgY2xpY2sgaW5zaWRlIHRoZSBzZWFyY2ggcmVzdWx0IHNlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCBkYXRhIGlzIG9wdGlvbmFsLCBzbyB0aGF0IHRoaXMgY29tcG9uZW50XG4gICAqIGNhbiBiZSByZXVzZWQgd2l0aG91dCBDTVMgaW50ZWdyYXRpb24uXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBTZWFyY2hCb3ggY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gaXMgZHJpdmVuIGJ5IG11bHRpcGxlXG4gICAqIGxheWVyczogZGVmYXVsdCBjb25maWd1cmF0aW9uLCAob3B0aW9uYWwpIGJhY2tlbmQgY29uZmlndXJhdGlvbiBhbmQgKG9wdGlvbmFsKVxuICAgKiBpbnB1dCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZyQ6IE9ic2VydmFibGU8U2VhcmNoQm94Q29uZmlnPiA9IChcbiAgICB0aGlzLmNvbXBvbmVudERhdGE/LmRhdGEkIHx8IG9mKHt9IGFzIGFueSlcbiAgKS5waXBlKFxuICAgIG1hcCgoY29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBpc0Jvb2wgPSAob2JqOiBTZWFyY2hCb3hDb25maWcsIHByb3A6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgICAgICAgb2JqPy5bcHJvcF0gIT09ICdmYWxzZScgJiYgb2JqPy5bcHJvcF0gIT09IGZhbHNlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5ERUZBVUxUX1NFQVJDSF9CT1hfQ09ORklHLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIGRpc3BsYXlQcm9kdWN0czogaXNCb29sKGNvbmZpZywgJ2Rpc3BsYXlQcm9kdWN0cycpLFxuICAgICAgICBkaXNwbGF5UHJvZHVjdEltYWdlczogaXNCb29sKGNvbmZpZywgJ2Rpc3BsYXlQcm9kdWN0SW1hZ2VzJyksXG4gICAgICAgIGRpc3BsYXlTdWdnZXN0aW9uczogaXNCb29sKGNvbmZpZywgJ2Rpc3BsYXlTdWdnZXN0aW9ucycpLFxuICAgICAgICAvLyB3ZSdyZSBtZXJnaW5nIHRoZSAob3B0aW9uYWwpIGlucHV0IG9mIHRoaXMgY29tcG9uZW50LCBidXQgd3JpdGUgdGhlIG1lcmdlZFxuICAgICAgICAvLyByZXN1bHQgYmFjayB0byB0aGUgaW5wdXQgcHJvcGVydHksIGFzIHRoZSB2aWV3IGxvZ2ljIGRlcGVuZHMgb24gaXQuXG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgfTtcbiAgICB9KSxcbiAgICB0YXAoKGNvbmZpZykgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSlcbiAgKTtcblxuICByZXN1bHRzJDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPiA9IHRoaXMuY29uZmlnJC5waXBlKFxuICAgIHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuZ2V0UmVzdWx0cyhjb25maWcpKVxuICApO1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNlYXJjaEJveCBhbmQgb3BlbnMgdGhlIHNlYXJjaCByZXN1bHQgcGFnZS5cbiAgICovXG4gIHNlYXJjaChxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnNlYXJjaChxdWVyeSwgdGhpcy5jb25maWcpO1xuICAgIC8vIGZvcmNlIHRoZSBzZWFyY2hCb3ggdG8gb3BlblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0eXBlLWFoZWFkIHNlYXJjaEJveFxuICAgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0eXBlLWFoZWFkIHNlYXJjaEJveC5cbiAgICovXG4gIGNsb3NlKGV2ZW50OiBVSUV2ZW50LCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBVc2UgdGltZW91dCB0byBkZXRlY3QgY2hhbmdlc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCghdGhpcy5pZ25vcmVDbG9zZUV2ZW50ICYmICF0aGlzLmlzU2VhcmNoQm94Rm9jdXNlZCgpKSB8fCBmb3JjZSkge1xuICAgICAgICB0aGlzLmJsdXJTZWFyY2hCb3goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJsdXJTZWFyY2hCb3goZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UudG9nZ2xlQm9keUNsYXNzKFxuICAgICAgJ3NlYXJjaGJveC1pcy1hY3RpdmUnLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZm9jdXMgaXMgb24gc2VhcmNoYm94IG9yIHJlc3VsdCBsaXN0IGVsZW1lbnRzXG4gIHByaXZhdGUgaXNTZWFyY2hCb3hGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCkuaW5jbHVkZXModGhpcy5nZXRGb2N1c2VkRWxlbWVudCgpKSB8fFxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbYXJpYS1sYWJlbD1cInNlYXJjaFwiXScpID09PVxuICAgICAgICB0aGlzLmdldEZvY3VzZWRFbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzcGVjaWFsbHkgaW4gbW9iaWxlIHdlIGRvIG5vdCB3YW50IHRoZSBzZWFyY2ggaWNvblxuICAgKiB0byBmb2N1cyB0aGUgaW5wdXQgYWdhaW4gd2hlbiBpdCdzIGFscmVhZHkgb3Blbi5cbiAgICogKi9cbiAgYXZvaWRSZW9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmhhc0JvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScpKSB7XG4gICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIHJlc3VsdCBsaXN0IGFzIEhUTUxFbGVtZW50IGFycmF5XG4gIHByaXZhdGUgZ2V0UmVzdWx0RWxlbWVudHMoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdHMgPiBhLCAuc3VnZ2VzdGlvbnMgPiBhJylcbiAgICApO1xuICB9XG5cbiAgLy8gUmV0dXJuIGZvY3VzZWQgZWxlbWVudCBhcyBIVE1MRWxlbWVudFxuICBwcml2YXRlIGdldEZvY3VzZWRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gPEhUTUxFbGVtZW50PnRoaXMud2luUmVmLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGdldEZvY3VzZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCkuaW5kZXhPZih0aGlzLmdldEZvY3VzZWRFbGVtZW50KCkpO1xuICB9XG5cbiAgLy8gRm9jdXMgb24gcHJldmlvdXMgaXRlbSBpbiByZXN1bHRzIGxpc3RcbiAgZm9jdXNQcmV2aW91c0NoaWxkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gTmVnYXRlIG5vcm1hbCBrZXlzY3JvbGxcbiAgICBjb25zdCBbcmVzdWx0cywgZm9jdXNlZEluZGV4XSA9IFtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0RWxlbWVudHMoKSxcbiAgICAgIHRoaXMuZ2V0Rm9jdXNlZEluZGV4KCksXG4gICAgXTtcbiAgICAvLyBGb2N1cyBvbiBsYXN0IGluZGV4IG1vdmluZyB0byBmaXJzdFxuICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgaWYgKGZvY3VzZWRJbmRleCA8IDEpIHtcbiAgICAgICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ZvY3VzZWRJbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRm9jdXMgb24gbmV4dCBpdGVtIGluIHJlc3VsdHMgbGlzdFxuICBmb2N1c05leHRDaGlsZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIE5lZ2F0ZSBub3JtYWwga2V5c2Nyb2xsXG4gICAgY29uc3QgW3Jlc3VsdHMsIGZvY3VzZWRJbmRleF0gPSBbXG4gICAgICB0aGlzLmdldFJlc3VsdEVsZW1lbnRzKCksXG4gICAgICB0aGlzLmdldEZvY3VzZWRJbmRleCgpLFxuICAgIF07XG4gICAgLy8gRm9jdXMgb24gZmlyc3QgaW5kZXggbW92aW5nIHRvIGxhc3RcbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChmb2N1c2VkSW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJlc3VsdHNbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbZm9jdXNlZEluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIFBMUCB3aXRoIHRoZSBnaXZlbiBxdWVyeS5cbiAgICpcbiAgICogVE9ETzogaWYgdGhlcmUncyBhIHNpbmdsZSBwcm9kdWN0IG1hdGNoLCB3ZSBjb3VsZCBvcGVuIHRoZSBQRFAuXG4gICAqL1xuICBsYXVuY2hTZWFyY2hSZXN1bHQoZXZlbnQ6IFVJRXZlbnQsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5LnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UocXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGNsb3NpbmcgdGhlIHNlYXJjaCByZXN1bHQgbGlzdC5cbiAgICovXG4gIGRpc2FibGVDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgY2xlYXIoZWw6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVDbG9zZSgpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuXG4gICAgLy8gVXNlIFRpbWVvdXQgdG8gcnVuIGFmdGVyIGJsdXIgZXZlbnQgdG8gcHJldmVudCB0aGUgc2VhcmNoYm94IGZyb20gY2xvc2luZyBvbiBtb2JpbGVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFJldGFpbiBmb2N1cyBvbiBpbnB1dCBsb3N0IGJ5IGNsaWNraW5nIG9uIGljb25cbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgICB0aGlzLmlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIl19
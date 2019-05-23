/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Optional, } from '@angular/core';
import { CmsComponentData } from 'projects/storefrontlib/src/cms-structure/page/model/cms-component-data';
import { first } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { SearchBoxComponentService } from './search-box-component.service';
export class SearchBoxComponent {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     * @param {?} searchBoxComponentService
     * @param {?} componentData
     */
    constructor(searchBoxComponentService, componentData) {
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.searchBoxComponentService.getResults();
    }
    /**
     * Sets the search box input field
     * @param {?} value
     * @return {?}
     */
    set queryText(value) {
        if (value) {
            this.search(value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.componentData) {
            this.componentData.data$
                .pipe(first())
                .subscribe(c => (this.config = (/** @type {?} */ (c))));
        }
    }
    /**
     * Closes the searchbox and opens the search result page.
     * @param {?} query
     * @return {?}
     */
    search(query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    }
    /**
     * Opens the typeahead searchbox
     * @return {?}
     */
    open() {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    }
    /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @return {?}
     */
    close(event) {
        if (!this.ignoreCloseEvent) {
            this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
            if (event && event.target) {
                ((/** @type {?} */ (event.target))).blur();
            }
        }
        this.ignoreCloseEvent = false;
    }
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     *
     * @param {?} event
     * @return {?}
     */
    avoidReopen(event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    }
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     * @param {?} event
     * @param {?} query
     * @return {?}
     */
    launchSearchResult(event, query) {
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    }
    /**
     * Disables closing the search result list.
     * @return {?}
     */
    disableClose() {
        this.ignoreCloseEvent = true;
    }
    /**
     * Clears the search box input field
     * @param {?} el
     * @return {?}
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
                template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"(results$ | async) as result\"\n  class=\"results\"\n  (click)=\"close($event)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n    >\n      <cx-media\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService },
    { type: CmsComponentData, decorators: [{ type: Optional }] }
];
SearchBoxComponent.propDecorators = {
    queryText: [{ type: Input, args: ['queryText',] }]
};
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    SearchBoxComponent.prototype.config;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFFMUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVEzRSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7O0lBeUI3QixZQUNZLHlCQUFvRCxFQUVwRCxhQUFzRDtRQUZ0RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBRXBELGtCQUFhLEdBQWIsYUFBYSxDQUF5QztRQWpCbEUsY0FBUyxHQUFHLFNBQVMsQ0FBQzs7Ozs7UUFRZCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFZakMsYUFBUSxHQUVKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUo3QyxDQUFDOzs7Ozs7SUF6QkosSUFDSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBMEJELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLO2lCQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2IsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFpQixDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBS0QsSUFBSTtRQUNGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBS0QsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUM1QyxxQkFBcUIsRUFDckIsS0FBSyxDQUNOLENBQUM7WUFDRixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN6QixDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7O0lBTUQsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFPRCxrQkFBa0IsQ0FBQyxLQUFjLEVBQUUsS0FBYTtRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUtELFlBQVk7UUFDVixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUtNLEtBQUssQ0FBQyxFQUFvQjtRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsKzBEQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSx5QkFBeUI7WUFKekIsZ0JBQWdCLHVCQXVDcEIsUUFBUTs7O3dCQXZCVixLQUFLLFNBQUMsV0FBVzs7OztJQU9sQix1Q0FBc0I7Ozs7O0lBRXRCLG9DQUFnQzs7Ozs7OztJQU1oQyw4Q0FBaUM7O0lBWWpDLHNDQUVnRDs7Ozs7SUFQOUMsdURBQThEOzs7OztJQUM5RCwyQ0FDZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJ3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb25maWcsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3NlYXJjaC1ib3gubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogU2V0cyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgKi9cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcHJpdmF0ZSBjb25maWc6IFNlYXJjaEJveENvbmZpZztcblxuICAvKipcbiAgICogSW4gc29tZSBvY2Nhc2lvbnMgd2UgbmVlZCB0byBpZ25vcmUgdGhlIGNsb3NlIGV2ZW50LFxuICAgKiBmb3IgZXhhbXBsZSB3aGVuIHdlIGNsaWNrIGluc2lkZSB0aGUgc2VhcmNoIHJlc3VsdCBzZWN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBpZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgZGF0YSBpcyBvcHRpb25hbCwgc28gdGhhdCB0aGlzIGNvbXBvbmVudFxuICAgKiBjYW4gYmUgcmV1c2VkIHdpdGhvdXQgQ01TIGludGVncmF0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTZWFyY2hCb3hDb21wb25lbnQ+XG4gICkge31cblxuICByZXN1bHRzJDogT2JzZXJ2YWJsZTxcbiAgICBTZWFyY2hSZXN1bHRzXG4gID4gPSB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudERhdGEpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJFxuICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAuc3Vic2NyaWJlKGMgPT4gKHRoaXMuY29uZmlnID0gPFNlYXJjaEJveENvbmZpZz5jKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc2VhcmNoYm94IGFuZCBvcGVucyB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLmNvbmZpZyk7XG4gICAgLy8gZm9yY2UgdGhlIHNlYXJjaGJveCB0byBvcGVuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHR5cGVhaGVhZCBzZWFyY2hib3hcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcygnc2VhcmNoYm94LWlzLWFjdGl2ZScsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHlwZWhlYWQgc2VhcmNoYm94LlxuICAgKi9cbiAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaWdub3JlQ2xvc2VFdmVudCkge1xuICAgICAgdGhpcy5zZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLnRvZ2dsZUJvZHlDbGFzcyhcbiAgICAgICAgJ3NlYXJjaGJveC1pcy1hY3RpdmUnLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRXNwZWNpYWxseSBpbiBtb2JpbGUgd2UgZG8gbm90IHdhbnQgdGhlIHNlYXJjaCBpY29uXG4gICAqIHRvIGZvY3VzIHRoZSBpbnB1dCBhZ2FpbiB3aGVuIGl0J3MgYWxyZWFkeSBvcGVuLlxuICAgKiAqL1xuICBhdm9pZFJlb3BlbihldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuaGFzQm9keUNsYXNzKCdzZWFyY2hib3gtaXMtYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIFBMUCB3aXRoIHRoZSBnaXZlbiBxdWVyeS5cbiAgICpcbiAgICogVE9ETzogaWYgdGhlcmUncyBhIHNpbmdlIHByb2R1Y3QgbWF0Y2gsIHdlIGNvdWxkIG9wZW4gdGhlIFBEUC5cbiAgICovXG4gIGxhdW5jaFNlYXJjaFJlc3VsdChldmVudDogVUlFdmVudCwgcXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29tcG9uZW50U2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBjbG9zaW5nIHRoZSBzZWFyY2ggcmVzdWx0IGxpc3QuXG4gICAqL1xuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICovXG4gIHB1YmxpYyBjbGVhcihlbDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZUNsb3NlKCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cbn1cbiJdfQ==
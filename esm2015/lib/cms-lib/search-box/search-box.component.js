/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { SearchBoxComponentService } from './search-box-component.service';
export class SearchBoxComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.searchBoxControl = new FormControl();
        this.queryText$ = new Subject();
        this.typeahead = (text$) => this.service.typeahead(merge(text$, this.queryText$));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set queryText(value) {
        this.queryText$.next(value);
        this.searchBoxControl.setValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service.queryParam$.pipe(take(1)).subscribe(query => {
            if (query) {
                this.searchBoxControl.setValue(query);
            }
        });
    }
    /**
     * @return {?}
     */
    submitSearch() {
        this.service.launchSearchPage(this.searchBoxControl.value);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectSuggestion(item) {
        if (typeof item.item === 'string') {
            this.searchBoxControl.setValue(item.item);
            this.submitSearch();
        }
        else {
            item.preventDefault();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === 'Enter') {
            this.service.launchSearchPage(this.searchBoxControl.value);
        }
    }
    /**
     * @return {?}
     */
    toggleMobileSearchInput() {
        this.isMobileSearchVisible = !this.isMobileSearchVisible;
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-searchbox',
                template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'searchBox.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit \"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <svg\n        class=\"cx-icon \"\n        xmlns=\"http://www.w3.org/2000/svg \"\n        viewBox=\"-4472 4760 26 26 \"\n      >\n        <path\n          id=\"Trac\u00E9_982 \"\n          data-name=\"Trac\u00E9 982 \"\n          d=\"M9.75,19.5a9.241,9.241,0,0,0,6.067-2.167l8.342,8.342a1.072,1.072,0,0,0,1.517-1.517l-8.342-8.342A9.854,9.854,0,0,0,19.5,9.75,9.75,9.75,0,1,0,9.75,19.5Zm0-17.333A7.583,7.583,0,1,1,2.167,9.75,7.537,7.537,0,0,1,9.75,2.167Z \"\n          transform=\"translate(-4472 4760) \"\n        />\n      </svg>\n    </button>\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search \"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <svg\n        class=\"cx-icon \"\n        xmlns=\"http://www.w3.org/2000/svg \"\n        viewBox=\"-4472 4760 26 26 \"\n      >\n        <path\n          id=\"Trac\u00E9_982 \"\n          data-name=\"Trac\u00E9 982 \"\n          d=\"M9.75,19.5a9.241,9.241,0,0,0,6.067-2.167l8.342,8.342a1.072,1.072,0,0,0,1.517-1.517l-8.342-8.342A9.854,9.854,0,0,0,19.5,9.75,9.75,9.75,0,1,0,9.75,19.5Zm0-17.333A7.583,7.583,0,1,1,2.167,9.75,7.537,7.537,0,0,1,9.75,2.167Z \"\n          transform=\"translate(-4472 4760) \"\n        />\n      </svg>\n    </button>\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              route: [\n                {\n                  name: 'product',\n                  params: suggestion | stripHtml\n                }\n              ]\n            } | cxTranslateUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-picture\n            [imageContainer]=\"suggestion.images?.PRIMARY\"\n            imageFormat=\"product\"\n            [imageAlt]=\"suggestion.summary\"\n          ></cx-picture>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService }
];
SearchBoxComponent.propDecorators = {
    queryText: [{ type: Input, args: ['queryText',] }]
};
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.searchBoxControl;
    /** @type {?} */
    SearchBoxComponent.prototype.isMobileSearchVisible;
    /** @type {?} */
    SearchBoxComponent.prototype.queryText$;
    /** @type {?} */
    SearchBoxComponent.prototype.typeahead;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPM0UsTUFBTSxPQUFPLGtCQUFrQjs7OztJQVk3QixZQUFzQixPQUFrQztRQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQVh4RCxxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUdsRCxlQUFVLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQjVDLGNBQVMsR0FBRyxDQUFDLEtBQXlCLEVBQXdCLEVBQUUsQ0FDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQVhHLENBQUM7Ozs7O0lBTjVELElBQ0ksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUtNLFlBQVk7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQW9CO1FBQy9CLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7O0lBRU0sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMzRCxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix3bkdBQTBDO2dCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSx5QkFBeUI7Ozt3QkFhL0IsS0FBSyxTQUFDLFdBQVc7Ozs7SUFMbEIsOENBQWtEOztJQUNsRCxtREFBK0I7O0lBRS9CLHdDQUE0Qzs7SUFrQjVDLHVDQUN3RDs7Ozs7SUFYNUMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2VhcmNoQm94Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgaXNNb2JpbGVTZWFyY2hWaXNpYmxlOiBib29sZWFuO1xuXG4gIHF1ZXJ5VGV4dCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5VGV4dCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5xdWVyeVBhcmFtJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShxdWVyeSA9PiB7XG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4gPT5cbiAgICB0aGlzLnNlcnZpY2UudHlwZWFoZWFkKG1lcmdlKHRleHQkLCB0aGlzLnF1ZXJ5VGV4dCQpKTtcblxuICBwdWJsaWMgc3VibWl0U2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gIH1cblxuICBzZWxlY3RTdWdnZXN0aW9uKGl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZShpdGVtLml0ZW0pO1xuICAgICAgdGhpcy5zdWJtaXRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZU1vYmlsZVNlYXJjaElucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlID0gIXRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICON_TYPES } from '../../../cms-components/misc/icon/index';
import { SearchBoxComponentService } from './search-box-component.service';
export class SearchBoxComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.iconTypes = ICON_TYPES;
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
                template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'searchBox.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit\"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search\"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              route: 'product',\n              params: suggestion | stripHtml\n            } | cxTranslateUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-media\n            [container]=\"suggestion.images?.PRIMARY\"\n            format=\"product\"\n            [alt]=\"suggestion.summary\"\n          ></cx-media>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
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
    SearchBoxComponent.prototype.iconTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPM0UsTUFBTSxPQUFPLGtCQUFrQjs7OztJQWE3QixZQUFzQixPQUFrQztRQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQVp4RCxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBR2xELGVBQVUsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCNUMsY0FBUyxHQUFHLENBQUMsS0FBeUIsRUFBd0IsRUFBRSxDQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBWEcsQ0FBQzs7Ozs7SUFONUQsSUFDSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBS00sWUFBWTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQUk7UUFDbkIsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7SUFFTSx1QkFBdUI7UUFDNUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzNELENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGlsRUFBMEM7Z0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLHlCQUF5Qjs7O3dCQWMvQixLQUFLLFNBQUMsV0FBVzs7OztJQU5sQix1Q0FBdUI7O0lBQ3ZCLDhDQUFrRDs7SUFDbEQsbURBQStCOztJQUUvQix3Q0FBNEM7O0lBa0I1Qyx1Q0FDd0Q7Ozs7O0lBWDVDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcbiAgc2VhcmNoQm94Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgaXNNb2JpbGVTZWFyY2hWaXNpYmxlOiBib29sZWFuO1xuXG4gIHF1ZXJ5VGV4dCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5VGV4dCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5xdWVyeVBhcmFtJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShxdWVyeSA9PiB7XG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4gPT5cbiAgICB0aGlzLnNlcnZpY2UudHlwZWFoZWFkKG1lcmdlKHRleHQkLCB0aGlzLnF1ZXJ5VGV4dCQpKTtcblxuICBwdWJsaWMgc3VibWl0U2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gIH1cblxuICBzZWxlY3RTdWdnZXN0aW9uKGl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZShpdGVtLml0ZW0pO1xuICAgICAgdGhpcy5zdWJtaXRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZU1vYmlsZVNlYXJjaElucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlID0gIXRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlO1xuICB9XG59XG4iXX0=
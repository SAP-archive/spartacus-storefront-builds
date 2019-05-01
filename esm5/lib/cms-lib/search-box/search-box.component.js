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
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(service) {
        var _this = this;
        this.service = service;
        this.iconTypes = ICON_TYPES;
        this.searchBoxControl = new FormControl();
        this.queryText$ = new Subject();
        this.typeahead = function (text$) {
            return _this.service.typeahead(merge(text$, _this.queryText$));
        };
    }
    Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.queryText$.next(value);
            this.searchBoxControl.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SearchBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.queryParam$.pipe(take(1)).subscribe(function (query) {
            if (query) {
                _this.searchBoxControl.setValue(query);
            }
        });
    };
    /**
     * @return {?}
     */
    SearchBoxComponent.prototype.submitSearch = /**
     * @return {?}
     */
    function () {
        this.service.launchSearchPage(this.searchBoxControl.value);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SearchBoxComponent.prototype.selectSuggestion = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (typeof item.item === 'string') {
            this.searchBoxControl.setValue(item.item);
            this.submitSearch();
        }
        else {
            item.preventDefault();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.onKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === 'Enter') {
            this.service.launchSearchPage(this.searchBoxControl.value);
        }
    };
    /**
     * @return {?}
     */
    SearchBoxComponent.prototype.toggleMobileSearchInput = /**
     * @return {?}
     */
    function () {
        this.isMobileSearchVisible = !this.isMobileSearchVisible;
    };
    SearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-searchbox',
                    template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'searchBox.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit\"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search\"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              route: 'product',\n              params: suggestion | stripHtml\n            } | cxTranslateUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-media\n            [container]=\"suggestion.images?.PRIMARY\"\n            format=\"product\"\n            [alt]=\"suggestion.summary\"\n          ></cx-media>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService }
    ]; };
    SearchBoxComponent.propDecorators = {
        queryText: [{ type: Input, args: ['queryText',] }]
    };
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFO0lBbUJFLDRCQUFzQixPQUFrQztRQUF4RCxpQkFBNEQ7UUFBdEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7UUFaeEQsY0FBUyxHQUFHLFVBQVUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUdsRCxlQUFVLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQjVDLGNBQVMsR0FBRyxVQUFDLEtBQXlCO1lBQ3BDLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFBckQsQ0FBcUQsQ0FBQztJQVhHLENBQUM7SUFONUQsc0JBQ0kseUNBQVM7Ozs7O1FBRGIsVUFDYyxLQUFhO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7Ozs7SUFJRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ3BELElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFLTSx5Q0FBWTs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVNLGtDQUFLOzs7O0lBQVosVUFBYSxLQUFvQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7OztJQUVNLG9EQUF1Qjs7O0lBQTlCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzNELENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGlsRUFBMEM7b0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEseUJBQXlCOzs7NEJBYy9CLEtBQUssU0FBQyxXQUFXOztJQXlDcEIseUJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWhEWSxrQkFBa0I7OztJQUM3Qix1Q0FBdUI7O0lBQ3ZCLDhDQUFrRDs7SUFDbEQsbURBQStCOztJQUUvQix3Q0FBNEM7O0lBa0I1Qyx1Q0FDd0Q7Ozs7O0lBWDVDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcbiAgc2VhcmNoQm94Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgaXNNb2JpbGVTZWFyY2hWaXNpYmxlOiBib29sZWFuO1xuXG4gIHF1ZXJ5VGV4dCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5VGV4dCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5xdWVyeVBhcmFtJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShxdWVyeSA9PiB7XG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4gPT5cbiAgICB0aGlzLnNlcnZpY2UudHlwZWFoZWFkKG1lcmdlKHRleHQkLCB0aGlzLnF1ZXJ5VGV4dCQpKTtcblxuICBwdWJsaWMgc3VibWl0U2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gIH1cblxuICBzZWxlY3RTdWdnZXN0aW9uKGl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZShpdGVtLml0ZW0pO1xuICAgICAgdGhpcy5zdWJtaXRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZU1vYmlsZVNlYXJjaElucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlID0gIXRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlO1xuICB9XG59XG4iXX0=
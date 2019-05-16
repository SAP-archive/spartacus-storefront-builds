/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { SearchBoxComponentService } from './search-box-component.service';
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(service) {
        var _this = this;
        this.service = service;
        this.iconTypes = ICON_TYPE;
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
                    template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'searchBox.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit\"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search\"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              cxRoute: 'product',\n              params: suggestion | stripHtml\n            } | cxUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-media\n            [container]=\"suggestion.images?.PRIMARY\"\n            format=\"product\"\n            [alt]=\"suggestion.summary\"\n          ></cx-media>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0U7SUFtQkUsNEJBQXNCLE9BQWtDO1FBQXhELGlCQUE0RDtRQUF0QyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQVp4RCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBR2xELGVBQVUsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCNUMsY0FBUyxHQUFHLFVBQUMsS0FBeUI7WUFDcEMsT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUFyRCxDQUFxRCxDQUFDO0lBWEcsQ0FBQztJQU41RCxzQkFDSSx5Q0FBUzs7Ozs7UUFEYixVQUNjLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTs7OztJQUlELHFDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUtNLHlDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU0sa0NBQUs7Ozs7SUFBWixVQUFhLEtBQW9CO1FBQy9CLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7O0lBRU0sb0RBQXVCOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDM0QsQ0FBQzs7Z0JBckRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMGtFQUEwQztvQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSx5QkFBeUI7Ozs0QkFjL0IsS0FBSyxTQUFDLFdBQVc7O0lBeUNwQix5QkFBQztDQUFBLEFBdERELElBc0RDO1NBaERZLGtCQUFrQjs7O0lBQzdCLHVDQUFzQjs7SUFDdEIsOENBQWtEOztJQUNsRCxtREFBK0I7O0lBRS9CLHdDQUE0Qzs7SUFrQjVDLHVDQUN3RDs7Ozs7SUFYNUMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNlYXJjaGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgc2VhcmNoQm94Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgaXNNb2JpbGVTZWFyY2hWaXNpYmxlOiBib29sZWFuO1xuXG4gIHF1ZXJ5VGV4dCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCdxdWVyeVRleHQnKVxuICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5VGV4dCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5xdWVyeVBhcmFtJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShxdWVyeSA9PiB7XG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHR5cGVhaGVhZCA9ICh0ZXh0JDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4gPT5cbiAgICB0aGlzLnNlcnZpY2UudHlwZWFoZWFkKG1lcmdlKHRleHQkLCB0aGlzLnF1ZXJ5VGV4dCQpKTtcblxuICBwdWJsaWMgc3VibWl0U2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gIH1cblxuICBzZWxlY3RTdWdnZXN0aW9uKGl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZShpdGVtLml0ZW0pO1xuICAgICAgdGhpcy5zdWJtaXRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuc2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuc2VhcmNoQm94Q29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZU1vYmlsZVNlYXJjaElucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlID0gIXRoaXMuaXNNb2JpbGVTZWFyY2hWaXNpYmxlO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
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
            this.input.nativeElement.blur();
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
                    template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      #searchInput\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'searchBox.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit\"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search\"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <cx-icon [type]=\"iconTypes.SEARCH\"></cx-icon>\n    </button>\n\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              cxRoute: 'product',\n              params: suggestion | stripHtml\n            } | cxUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-media\n            [container]=\"suggestion.images?.PRIMARY\"\n            format=\"product\"\n            [alt]=\"suggestion.summary\"\n          ></cx-media>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService }
    ]; };
    SearchBoxComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['searchInput',] }],
        queryText: [{ type: Input, args: ['queryText',] }]
    };
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.input;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRTtJQXNCRSw0QkFBc0IsT0FBa0M7UUFBeEQsaUJBQTREO1FBQXRDLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBWnhELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIscUJBQWdCLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHbEQsZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBa0I1QyxjQUFTLEdBQUcsVUFBQyxLQUF5QjtZQUNwQyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQXJELENBQXFELENBQUM7SUFYRyxDQUFDO0lBTjVELHNCQUNJLHlDQUFTOzs7OztRQURiLFVBQ2MsS0FBYTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBOzs7O0lBSUQscUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNwRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBS00seUNBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxrQ0FBSzs7OztJQUFaLFVBQWEsS0FBb0I7UUFDL0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7SUFFTSxvREFBdUI7OztJQUE5QjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMzRCxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw4bEVBQTBDO29CQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLHlCQUF5Qjs7O3dCQVEvQixTQUFTLFNBQUMsYUFBYTs0QkFTdkIsS0FBSyxTQUFDLFdBQVc7O0lBMENwQix5QkFBQztDQUFBLEFBMURELElBMERDO1NBcERZLGtCQUFrQjs7O0lBQzdCLG1DQUN5Qjs7SUFFekIsdUNBQXNCOztJQUN0Qiw4Q0FBa0Q7O0lBQ2xELG1EQUErQjs7SUFFL0Isd0NBQTRDOztJQWtCNUMsdUNBQ3dEOzs7OztJQVg1QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcpXG4gIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIHNlYXJjaEJveENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGlzTW9iaWxlU2VhcmNoVmlzaWJsZTogYm9vbGVhbjtcblxuICBxdWVyeVRleHQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgncXVlcnlUZXh0JylcbiAgc2V0IHF1ZXJ5VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeVRleHQkLm5leHQodmFsdWUpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlcnZpY2UucXVlcnlQYXJhbSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocXVlcnkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZShxdWVyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0eXBlYWhlYWQgPSAodGV4dCQ6IE9ic2VydmFibGU8c3RyaW5nPik6IE9ic2VydmFibGU8c3RyaW5nW10+ID0+XG4gICAgdGhpcy5zZXJ2aWNlLnR5cGVhaGVhZChtZXJnZSh0ZXh0JCwgdGhpcy5xdWVyeVRleHQkKSk7XG5cbiAgcHVibGljIHN1Ym1pdFNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZSh0aGlzLnNlYXJjaEJveENvbnRyb2wudmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0U3VnZ2VzdGlvbihpdGVtKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLml0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnNlYXJjaEJveENvbnRyb2wuc2V0VmFsdWUoaXRlbS5pdGVtKTtcbiAgICAgIHRoaXMuc3VibWl0U2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0ucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5zZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UodGhpcy5zZWFyY2hCb3hDb250cm9sLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlTW9iaWxlU2VhcmNoSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc01vYmlsZVNlYXJjaFZpc2libGUgPSAhdGhpcy5pc01vYmlsZVNlYXJjaFZpc2libGU7XG4gIH1cbn1cbiJdfQ==
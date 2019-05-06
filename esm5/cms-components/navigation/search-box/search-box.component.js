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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0U7SUFtQkUsNEJBQXNCLE9BQWtDO1FBQXhELGlCQUE0RDtRQUF0QyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQVp4RCxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBR2xELGVBQVUsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCNUMsY0FBUyxHQUFHLFVBQUMsS0FBeUI7WUFDcEMsT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUFyRCxDQUFxRCxDQUFDO0lBWEcsQ0FBQztJQU41RCxzQkFDSSx5Q0FBUzs7Ozs7UUFEYixVQUNjLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTs7OztJQUlELHFDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUtNLHlDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU0sa0NBQUs7Ozs7SUFBWixVQUFhLEtBQW9CO1FBQy9CLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7O0lBRU0sb0RBQXVCOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDM0QsQ0FBQzs7Z0JBckRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsaWxFQUEwQztvQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSx5QkFBeUI7Ozs0QkFjL0IsS0FBSyxTQUFDLFdBQVc7O0lBeUNwQix5QkFBQztDQUFBLEFBdERELElBc0RDO1NBaERZLGtCQUFrQjs7O0lBQzdCLHVDQUF1Qjs7SUFDdkIsOENBQWtEOztJQUNsRCxtREFBK0I7O0lBRS9CLHdDQUE0Qzs7SUFrQjVDLHVDQUN3RDs7Ozs7SUFYNUMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJveC1jb21wb25lbnQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zZWFyY2hib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEVTO1xuICBzZWFyY2hCb3hDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBpc01vYmlsZVNlYXJjaFZpc2libGU6IGJvb2xlYW47XG5cbiAgcXVlcnlUZXh0JDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoJ3F1ZXJ5VGV4dCcpXG4gIHNldCBxdWVyeVRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucXVlcnlUZXh0JC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLnNlYXJjaEJveENvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnF1ZXJ5UGFyYW0kLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHF1ZXJ5ID0+IHtcbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICB0aGlzLnNlYXJjaEJveENvbnRyb2wuc2V0VmFsdWUocXVlcnkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdHlwZWFoZWFkID0gKHRleHQkOiBPYnNlcnZhYmxlPHN0cmluZz4pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9PlxuICAgIHRoaXMuc2VydmljZS50eXBlYWhlYWQobWVyZ2UodGV4dCQsIHRoaXMucXVlcnlUZXh0JCkpO1xuXG4gIHB1YmxpYyBzdWJtaXRTZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UodGhpcy5zZWFyY2hCb3hDb250cm9sLnZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdFN1Z2dlc3Rpb24oaXRlbSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgaXRlbS5pdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKGl0ZW0uaXRlbSk7XG4gICAgICB0aGlzLnN1Ym1pdFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5zZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UodGhpcy5zZWFyY2hCb3hDb250cm9sLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlTW9iaWxlU2VhcmNoSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc01vYmlsZVNlYXJjaFZpc2libGUgPSAhdGhpcy5pc01vYmlsZVNlYXJjaFZpc2libGU7XG4gIH1cbn1cbiJdfQ==
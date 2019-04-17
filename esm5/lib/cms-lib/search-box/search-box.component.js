/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { SearchBoxComponentService } from './search-box-component.service';
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(service) {
        var _this = this;
        this.service = service;
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
                    template: "<form class=\"cx-form\">\n  <div class=\"cx-form-group form-group\">\n    <!-- searchbox input -->\n    <input\n      class=\"cx-input form-control dropdown-menu-toggle\"\n      [ngClass]=\"{ 'show-mobile': isMobileSearchVisible }\"\n      type=\"text\"\n      placeholder=\"{{ 'common.placeholder.searchHere' | cxTranslate }}\"\n      aria-label=\"search\"\n      [ngbTypeahead]=\"typeahead\"\n      [resultTemplate]=\"rt\"\n      [formControl]=\"searchBoxControl\"\n      (keyup)=\"onKey($event)\"\n      (selectItem)=\"selectSuggestion($event)\"\n    />\n    <!-- searchbox button desktop -->\n    <button\n      class=\"cx-button cx-button-desktop\"\n      type=\"submit\"\n      aria-label=\"Submit \"\n      (click)=\"submitSearch()\"\n      [disabled]=\"!searchBoxControl?.value\"\n    >\n      <svg\n        class=\"cx-icon \"\n        xmlns=\"http://www.w3.org/2000/svg \"\n        viewBox=\"-4472 4760 26 26 \"\n      >\n        <path\n          id=\"Trac\u00E9_982 \"\n          data-name=\"Trac\u00E9 982 \"\n          d=\"M9.75,19.5a9.241,9.241,0,0,0,6.067-2.167l8.342,8.342a1.072,1.072,0,0,0,1.517-1.517l-8.342-8.342A9.854,9.854,0,0,0,19.5,9.75,9.75,9.75,0,1,0,9.75,19.5Zm0-17.333A7.583,7.583,0,1,1,2.167,9.75,7.537,7.537,0,0,1,9.75,2.167Z \"\n          transform=\"translate(-4472 4760) \"\n        />\n      </svg>\n    </button>\n    <!-- searchbox button mobile -->\n    <button\n      class=\"cx-button cx-button-mobile\"\n      type=\"button\"\n      aria-label=\"Search \"\n      (click)=\"toggleMobileSearchInput()\"\n    >\n      <svg\n        class=\"cx-icon \"\n        xmlns=\"http://www.w3.org/2000/svg \"\n        viewBox=\"-4472 4760 26 26 \"\n      >\n        <path\n          id=\"Trac\u00E9_982 \"\n          data-name=\"Trac\u00E9 982 \"\n          d=\"M9.75,19.5a9.241,9.241,0,0,0,6.067-2.167l8.342,8.342a1.072,1.072,0,0,0,1.517-1.517l-8.342-8.342A9.854,9.854,0,0,0,19.5,9.75,9.75,9.75,0,1,0,9.75,19.5Zm0-17.333A7.583,7.583,0,1,1,2.167,9.75,7.537,7.537,0,0,1,9.75,2.167Z \"\n          transform=\"translate(-4472 4760) \"\n        />\n      </svg>\n    </button>\n    <!-- searchbox results -->\n    <ng-template #rt let-suggestion=\"result\">\n      <div\n        *ngIf=\"!suggestion.code; else productView\"\n        class=\"cx-dropdown-content\"\n      >\n        {{ suggestion }}\n      </div>\n      <ng-template #productView>\n        <div\n          [routerLink]=\"\n            {\n              route: [\n                {\n                  name: 'product',\n                  params: suggestion | stripHtml\n                }\n              ]\n            } | cxTranslateUrl\n          \"\n          class=\"cx-product\"\n        >\n          <cx-picture\n            [imageContainer]=\"suggestion.images?.PRIMARY\"\n            imageFormat=\"product\"\n            [imageAlt]=\"suggestion.summary\"\n          ></cx-picture>\n          <div [innerHtml]=\"suggestion.name\" class=\"cx-product-name\">\n            {{ suggestion.name }}\n          </div>\n          <div class=\"cx-product-price\">\n            {{ suggestion.price.formattedValue }}\n          </div>\n        </div>\n      </ng-template>\n    </ng-template>\n  </div>\n</form>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:var(--cx-display,block)}@media (max-width:575.98px){:host{margin:var(--cx-margin,0)}}.cx-form-group{background-color:var(--cx-background-color,var(--cx-g-color-secondary));padding:var(--cx-padding,0);display:var(--cx-display,flex);margin:var(--cx-margin,auto)}.cx-form{display:var(--cx-display,inline-block);vertical-align:var(--cx-vertical-align,middle)}.cx-input{background-color:var(--cx-background-color,var(--cx-g-color-transparent));color:var(--cx-color,var(--cx-g-color-inverse));border-radius:var(--cx-border-radius,0);border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);margin:var(--cx-margin,0);z-index:var(--cx-z-index,1)}.cx-input::-webkit-input-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input::-moz-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input:-moz-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input:-ms-input-placeholder{color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input[aria-label=search]{width:var(--cx-width,22rem)}.cx-input[aria-label=search]:focus{background-color:var(--cx-background-color,var(--cx-g-color-transparent));color:var(--cx-color,var(--cx-g-color-inverse));box-shadow:var(--cx-box-shadow,none)}@media (max-width:1199.98px){.cx-input[aria-label=search]{width:var(--cx-width,18rem)}}@media (max-width:991.98px){.cx-input[aria-label=search]{width:var(--cx-width,16rem)}}@media (max-width:767.98px){.cx-input[aria-label=search]{width:var(--cx-width,7rem)}}@media (max-width:575.98px){.cx-form-group{background-color:var(--cx-background-color,var(--cx-g-color-transparent))}.cx-input[aria-label=search]{background-color:var(--cx-background-color,var(--cx-g-color-secondary));color:var(--cx-color,var(--cx-g-color-inverse));display:var(--cx-display,none);position:var(--cx-position,absolute);left:var(--cx-left,0);top:var(--cx-top,56px);width:var(--cx-width,100%)}.cx-input[aria-label=search]:focus{background-color:var(--cx-background-color,var(--cx-g-color-secondary));color:var(--cx-color,var(--cx-g-color-inverse))}.cx-input[aria-label=search]+.dropdown-menu{width:var(--cx-width,100%);border-radius:var(--cx-border-radius,0);border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);margin:var(--cx-margin,0)}.cx-button-desktop{display:var(--cx-display,none)}}.cx-input.show-mobile{display:var(--cx-display,block)}.cx-button{border-style:var(--cx-border-style,none);border-width:var(--cx-border-width,0);padding:var(--cx-padding,5px);margin:var(--cx-margin,5px);background-color:var(--cx-background-color,var(--cx-g-color-transparent))}.cx-button-mobile{display:var(--cx-display,none)}.cx-icon{width:var(--cx-width,28px);height:var(--cx-height,28px);fill:var(--cx-fill,var(--cx-g-color-inverse));pointer-events:var(--cx-pointer-events,none)}.cx-dropdown-content{width:var(--cx-width,22rem)}@media (max-width:1199.98px){.cx-dropdown-content{width:var(--cx-width,18rem)}}@media (max-width:991.98px){.cx-dropdown-content{width:var(--cx-width,16rem)}}@media (max-width:767.98px){.cx-dropdown-content{width:var(--cx-width,7rem)}}@media (max-width:575.98px){.cx-button-mobile{display:var(--cx-display,block)}.cx-dropdown-content{width:var(--cx-width,auto)}}.cx-product{display:var(--cx-display,flex)}.cx-product cx-picture{min-width:var(--cx-min-width,80px);width:var(--cx-width,80px);flex-shrink:var(--cx-flex-shrink,0)}.cx-product-name{padding:var(--cx-padding,0 15px);flex-grow:var(--cx-flex-grow,1);flex-shrink:var(--cx-flex-shrink,1);height:var(--cx-height,80px);display:var(--cx-display,flex);align-items:var(--cx-align-items,center);overflow:var(--cx-overflow,hidden)}.cx-product-price{text-align:var(--cx-text-align,right);-ms-grid-row-align:var(--cx-align-self,center);align-self:var(--cx-align-self,center);flex-shrink:var(--cx-flex-shrink,0)}.dropdown-menu .dropdown-item.active{background-color:var(--cx-background-color,var(--cx-g-color-primary))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFFakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0U7SUFtQkUsNEJBQXNCLE9BQWtDO1FBQXhELGlCQUE0RDtRQUF0QyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQVh4RCxxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUdsRCxlQUFVLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQjVDLGNBQVMsR0FBRyxVQUFDLEtBQXlCO1lBQ3BDLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFBckQsQ0FBcUQsQ0FBQztJQVhHLENBQUM7SUFONUQsc0JBQ0kseUNBQVM7Ozs7O1FBRGIsVUFDYyxLQUFhO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7Ozs7SUFJRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ3BELElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFLTSx5Q0FBWTs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVNLGtDQUFLOzs7O0lBQVosVUFBYSxLQUFvQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7OztJQUVNLG9EQUF1Qjs7O0lBQTlCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzNELENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGlvR0FBMEM7b0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVBRLHlCQUF5Qjs7OzRCQWMvQixLQUFLLFNBQUMsV0FBVzs7SUF5Q3BCLHlCQUFDO0NBQUEsQUF0REQsSUFzREM7U0EvQ1ksa0JBQWtCOzs7SUFDN0IsOENBQWtEOztJQUNsRCxtREFBK0I7O0lBRS9CLHdDQUE0Qzs7SUFrQjVDLHVDQUN3RDs7Ozs7SUFYNUMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2VhcmNoYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzZWFyY2hCb3hDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBpc01vYmlsZVNlYXJjaFZpc2libGU6IGJvb2xlYW47XG5cbiAgcXVlcnlUZXh0JDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoJ3F1ZXJ5VGV4dCcpXG4gIHNldCBxdWVyeVRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucXVlcnlUZXh0JC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLnNlYXJjaEJveENvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnF1ZXJ5UGFyYW0kLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHF1ZXJ5ID0+IHtcbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICB0aGlzLnNlYXJjaEJveENvbnRyb2wuc2V0VmFsdWUocXVlcnkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdHlwZWFoZWFkID0gKHRleHQkOiBPYnNlcnZhYmxlPHN0cmluZz4pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9PlxuICAgIHRoaXMuc2VydmljZS50eXBlYWhlYWQobWVyZ2UodGV4dCQsIHRoaXMucXVlcnlUZXh0JCkpO1xuXG4gIHB1YmxpYyBzdWJtaXRTZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UodGhpcy5zZWFyY2hCb3hDb250cm9sLnZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdFN1Z2dlc3Rpb24oaXRlbSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgaXRlbS5pdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5zZWFyY2hCb3hDb250cm9sLnNldFZhbHVlKGl0ZW0uaXRlbSk7XG4gICAgICB0aGlzLnN1Ym1pdFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5zZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UodGhpcy5zZWFyY2hCb3hDb250cm9sLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlTW9iaWxlU2VhcmNoSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc01vYmlsZVNlYXJjaFZpc2libGUgPSAhdGhpcy5pc01vYmlsZVNlYXJjaFZpc2libGU7XG4gIH1cbn1cbiJdfQ==
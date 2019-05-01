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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzNFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFhN0IsWUFBc0IsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7UUFaeEQsY0FBUyxHQUFHLFVBQVUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUdsRCxlQUFVLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQjVDLGNBQVMsR0FBRyxDQUFDLEtBQXlCLEVBQXdCLEVBQUUsQ0FDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQVhHLENBQUM7Ozs7O0lBTjVELElBQ0ksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUtNLFlBQVk7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQW9CO1FBQy9CLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7O0lBRU0sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMzRCxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixpbEVBQTBDO2dCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSx5QkFBeUI7Ozt3QkFjL0IsS0FBSyxTQUFDLFdBQVc7Ozs7SUFObEIsdUNBQXVCOztJQUN2Qiw4Q0FBa0Q7O0lBQ2xELG1EQUErQjs7SUFFL0Isd0NBQTRDOztJQWtCNUMsdUNBQ3dEOzs7OztJQVg1QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNlYXJjaGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRVM7XG4gIHNlYXJjaEJveENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGlzTW9iaWxlU2VhcmNoVmlzaWJsZTogYm9vbGVhbjtcblxuICBxdWVyeVRleHQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgncXVlcnlUZXh0JylcbiAgc2V0IHF1ZXJ5VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWVyeVRleHQkLm5leHQodmFsdWUpO1xuICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogU2VhcmNoQm94Q29tcG9uZW50U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlcnZpY2UucXVlcnlQYXJhbSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocXVlcnkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQm94Q29udHJvbC5zZXRWYWx1ZShxdWVyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0eXBlYWhlYWQgPSAodGV4dCQ6IE9ic2VydmFibGU8c3RyaW5nPik6IE9ic2VydmFibGU8c3RyaW5nW10+ID0+XG4gICAgdGhpcy5zZXJ2aWNlLnR5cGVhaGVhZChtZXJnZSh0ZXh0JCwgdGhpcy5xdWVyeVRleHQkKSk7XG5cbiAgcHVibGljIHN1Ym1pdFNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZSh0aGlzLnNlYXJjaEJveENvbnRyb2wudmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0U3VnZ2VzdGlvbihpdGVtKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLml0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnNlYXJjaEJveENvbnRyb2wuc2V0VmFsdWUoaXRlbS5pdGVtKTtcbiAgICAgIHRoaXMuc3VibWl0U2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0ucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLnNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZSh0aGlzLnNlYXJjaEJveENvbnRyb2wudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVNb2JpbGVTZWFyY2hJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzTW9iaWxlU2VhcmNoVmlzaWJsZSA9ICF0aGlzLmlzTW9iaWxlU2VhcmNoVmlzaWJsZTtcbiAgfVxufVxuIl19
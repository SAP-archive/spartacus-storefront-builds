/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, } from '@angular/core';
var SortingComponent = /** @class */ (function () {
    function SortingComponent() {
        this.sortListEvent = new EventEmitter();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    SortingComponent.prototype.sortList = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        this.sortListEvent.emit(sortCode);
    };
    SortingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-sorting',
                    template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SortingComponent.ctorParameters = function () { return []; };
    SortingComponent.propDecorators = {
        sortOptions: [{ type: Input }],
        selectedOption: [{ type: Input }],
        placeholder: [{ type: Input }],
        sortLabels: [{ type: Input }],
        sortListEvent: [{ type: Output }]
    };
    return SortingComponent;
}());
export { SortingComponent };
if (false) {
    /** @type {?} */
    SortingComponent.prototype.sortOptions;
    /** @type {?} */
    SortingComponent.prototype.selectedOption;
    /** @type {?} */
    SortingComponent.prototype.placeholder;
    /** @type {?} */
    SortingComponent.prototype.sortLabels;
    /** @type {?} */
    SortingComponent.prototype.sortListEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLHVCQUF1QixFQUN2QixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFtQkU7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsbVdBQXVDO29CQUV2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Ozs4QkFFRSxLQUFLO2lDQUVMLEtBQUs7OEJBRUwsS0FBSzs2QkFFTCxLQUFLO2dDQUdMLE1BQU07O0lBVVQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXBCWSxnQkFBZ0I7OztJQUMzQix1Q0FDeUI7O0lBQ3pCLDBDQUN1Qjs7SUFDdkIsdUNBQ29COztJQUNwQixzQ0FDdUM7O0lBRXZDLHlDQUNvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0TW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zb3J0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvcnRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb3J0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc29ydE9wdGlvbnM6IFNvcnRNb2RlbFtdO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzb3J0TGFiZWxzOiB7IFtjb2RlOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBAT3V0cHV0KClcbiAgc29ydExpc3RFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb3J0TGlzdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0TGlzdEV2ZW50LmVtaXQoc29ydENvZGUpO1xuICB9XG59XG4iXX0=
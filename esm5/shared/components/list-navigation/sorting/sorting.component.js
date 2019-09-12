/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFrQkU7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsbVdBQXVDO29CQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7OzhCQUVFLEtBQUs7aUNBRUwsS0FBSzs4QkFFTCxLQUFLOzZCQUVMLEtBQUs7Z0NBR0wsTUFBTTs7SUFVVCx1QkFBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLGdCQUFnQjs7O0lBQzNCLHVDQUN5Qjs7SUFDekIsMENBQ3VCOztJQUN2Qix1Q0FDb0I7O0lBQ3BCLHNDQUN1Qzs7SUFFdkMseUNBQ29DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvcnRNb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNvcnRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc29ydGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc29ydE9wdGlvbnM6IFNvcnRNb2RlbFtdO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzb3J0TGFiZWxzOiB7IFtjb2RlOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBAT3V0cHV0KClcbiAgc29ydExpc3RFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb3J0TGlzdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0TGlzdEV2ZW50LmVtaXQoc29ydENvZGUpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class SortingComponent {
    constructor() {
        this.sortListEvent = new EventEmitter();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.sortListEvent.emit(sortCode);
    }
}
SortingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-sorting',
                template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SortingComponent.ctorParameters = () => [];
SortingComponent.propDecorators = {
    sortOptions: [{ type: Input }],
    selectedOption: [{ type: Input }],
    placeholder: [{ type: Input }],
    sortLabels: [{ type: Input }],
    sortListEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixtV0FBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7OzswQkFFRSxLQUFLOzZCQUVMLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLOzRCQUdMLE1BQU07Ozs7SUFUUCx1Q0FDeUI7O0lBQ3pCLDBDQUN1Qjs7SUFDdkIsdUNBQ29COztJQUNwQixzQ0FDdUM7O0lBRXZDLHlDQUNvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0TW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zb3J0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvcnRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHNvcnRPcHRpb25zOiBTb3J0TW9kZWxbXTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRPcHRpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc29ydExhYmVsczogeyBbY29kZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgQE91dHB1dCgpXG4gIHNvcnRMaXN0RXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ydExpc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICB9XG5cbiAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydExpc3RFdmVudC5lbWl0KHNvcnRDb2RlKTtcbiAgfVxufVxuIl19
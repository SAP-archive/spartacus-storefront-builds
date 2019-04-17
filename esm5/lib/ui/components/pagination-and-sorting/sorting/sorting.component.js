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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvY29tcG9uZW50cy9wYWdpbmF0aW9uLWFuZC1zb3J0aW5nL3NvcnRpbmcvc29ydGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBbUJFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsbUNBQVE7Ozs7SUFBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLG1XQUF1QztvQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs7OEJBRUUsS0FBSztpQ0FFTCxLQUFLOzhCQUVMLEtBQUs7NkJBRUwsS0FBSztnQ0FHTCxNQUFNOztJQVVULHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FwQlksZ0JBQWdCOzs7SUFDM0IsdUNBQ3lCOztJQUN6QiwwQ0FDdUI7O0lBQ3ZCLHVDQUNvQjs7SUFDcEIsc0NBQ3VDOztJQUV2Qyx5Q0FDb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ydE1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc29ydGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zb3J0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc29ydGluZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHNvcnRPcHRpb25zOiBTb3J0TW9kZWxbXTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRPcHRpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc29ydExhYmVsczogeyBbY29kZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgQE91dHB1dCgpXG4gIHNvcnRMaXN0RXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ydExpc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICB9XG5cbiAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydExpc3RFdmVudC5lbWl0KHNvcnRDb2RlKTtcbiAgfVxufVxuIl19
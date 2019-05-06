/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.viewPageEvent = new EventEmitter();
    }
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.viewPageEvent.emit(page - 1);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-pagination',
                    template: "<ngb-pagination\n  [collectionSize]=\"pagination.totalResults\"\n  [page]=\"pagination.currentPage + 1\"\n  (pageChange)=\"pageChange($event)\"\n  [maxSize]=\"3\"\n  [pageSize]=\"pagination.pageSize\"\n>\n</ngb-pagination>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    PaginationComponent.propDecorators = {
        pagination: [{ type: Input }],
        viewPageEvent: [{ type: Output }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.viewPageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFBQTtRQU9ZLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFLN0UsQ0FBQzs7Ozs7SUFIQyx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0T0FBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OzZCQUVFLEtBQUs7Z0NBQ0wsTUFBTTs7SUFLVCwwQkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLG1CQUFtQjs7O0lBQzlCLHlDQUFxQzs7SUFDckMsNENBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBAT3V0cHV0KCkgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmlld1BhZ2VFdmVudC5lbWl0KHBhZ2UgLSAxKTtcbiAgfVxufVxuIl19
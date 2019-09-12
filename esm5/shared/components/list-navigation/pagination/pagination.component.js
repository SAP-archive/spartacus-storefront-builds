/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
/** @type {?} */
var PAGE_FIRST = 1;
/** @type {?} */
var PAGE_WINDOW_SIZE = 3;
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.hideOnSinglePage = false;
        this.viewPageEvent = new EventEmitter();
    }
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    /**
     * @private
     * @return {?}
     */
    PaginationComponent.prototype.getCurrentPageNumber = 
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    /**
     * @private
     * @return {?}
     */
    function () {
        return this.pagination.currentPage + 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPagePrevious = /**
     * @return {?}
     */
    function () {
        return this.getCurrentPageNumber() - 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageNext = /**
     * @return {?}
     */
    function () {
        return this.getCurrentPageNumber() + 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageIndicies = /**
     * @return {?}
     */
    function () {
        return Array(this.pagination.totalPages);
    };
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageWindowMinIndex = 
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    function () {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE);
    };
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageWindowMaxIndex = 
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    function () {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE +
            2);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.hasPages = /**
     * @return {?}
     */
    function () {
        return this.pagination.totalPages > 0;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.onFirstPage = /**
     * @return {?}
     */
    function () {
        return this.pagination.currentPage === 0;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.onLastPage = /**
     * @return {?}
     */
    function () {
        return this.pagination.currentPage === this.pagination.totalPages - 1;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.onPageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.pagination.currentPage === index;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.hidePageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return ((this.getPageWindowMinIndex() > index ||
            this.getPageWindowMaxIndex() < index) &&
            (index > 0 && index < this.pagination.totalPages - 1));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.showDots = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (this.hidePageIndex(index) &&
            (index === this.getPageWindowMaxIndex() + 1 ||
                index === this.getPageWindowMinIndex() - 1));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.clickPageNo = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // Change page on valid index
        if (page >= PAGE_FIRST &&
            page <= this.pagination.totalPages &&
            page !== this.getCurrentPageNumber()) {
            this.pageChange(page);
            return page;
        }
        // Page stays the same on invalid index
        return this.pagination.currentPage;
    };
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
    /**
     * @return {?}
     */
    PaginationComponent.prototype.showPagination = /**
     * @return {?}
     */
    function () {
        return !(this.hideOnSinglePage && this.pagination.totalPages <= 1);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-pagination',
                    template: "<ul class=\"pagination\" *ngIf=\"showPagination()\">\n  <!-- Previous -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onFirstPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPagePrevious())\">\u00AB</a>\n  </li>\n\n  <!-- Page Index -->\n  <li\n    class=\"page-item\"\n    *ngFor=\"let page of getPageIndicies(); let i = index\"\n    [ngClass]=\"{ active: onPageIndex(i), disabled: showDots(i) }\"\n  >\n    <a class=\"page-link\" *ngIf=\"showDots(i)\">...</a>\n    <a\n      class=\"page-link\"\n      *ngIf=\"!hidePageIndex(i)\"\n      (click)=\"clickPageNo(i + 1)\"\n      >{{ i + 1 }}</a\n    >\n  </li>\n\n  <!-- Next -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onLastPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPageNext())\">\u00BB</a>\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    PaginationComponent.propDecorators = {
        pagination: [{ type: Input }],
        hideOnSinglePage: [{ type: Input }],
        viewPageEvent: [{ type: Output }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.hideOnSinglePage;
    /** @type {?} */
    PaginationComponent.prototype.viewPageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0lBR2pCLFVBQVUsR0FBRyxDQUFDOztJQUNkLGdCQUFnQixHQUFHLENBQUM7QUFFMUI7SUFBQTtRQU9XLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBMkY3RSxDQUFDO0lBekZDLHlEQUF5RDtJQUN6RCxtQ0FBbUM7Ozs7Ozs7SUFDM0Isa0RBQW9COzs7Ozs7O0lBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUdBQWlHOzs7OztJQUNqRyxtREFBcUI7Ozs7O0lBQXJCO1FBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFDMUQsZ0JBQWdCLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsaUdBQWlHOzs7OztJQUNqRyxtREFBcUI7Ozs7O0lBQXJCO1FBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFDeEQsZ0JBQWdCO1lBQ2xCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxLQUFhO1FBQ3pCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEtBQUs7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDOzs7OztJQUVELHNDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sQ0FDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QixDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDO2dCQUN6QyxLQUFLLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3RCLDZCQUE2QjtRQUM3QixJQUNFLElBQUksSUFBSSxVQUFVO1lBQ2xCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDbEMsSUFBSSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUNwQztZQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHVDQUF1QztRQUN2QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIseTFCQUEwQztvQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7NkJBRUUsS0FBSzttQ0FDTCxLQUFLO2dDQUNMLE1BQU07O0lBMkZULDBCQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0E5RlksbUJBQW1COzs7SUFDOUIseUNBQXFDOztJQUNyQywrQ0FBa0M7O0lBQ2xDLDRDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5jb25zdCBQQUdFX0ZJUlNUID0gMTtcbmNvbnN0IFBBR0VfV0lORE9XX1NJWkUgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcbiAgQElucHV0KCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvLyBCZWNhdXNlIHBhZ2luYXRpb24gbW9kZWwgdXNlcyBpbmRleGVzIHN0YXJ0aW5nIGZyb20gMCxcbiAgLy8gYWRkIDEgdG8gZ2V0IGN1cnJlbnQgcGFnZSBudW1iZXJcbiAgcHJpdmF0ZSBnZXRDdXJyZW50UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICsgMTtcbiAgfVxuXG4gIGdldFBhZ2VQcmV2aW91cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlTnVtYmVyKCkgLSAxO1xuICB9XG5cbiAgZ2V0UGFnZU5leHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZU51bWJlcigpICsgMTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRpY2llcygpOiBBcnJheTxudW1iZXI+IHtcbiAgICByZXR1cm4gQXJyYXkodGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgLy8gR2V0cyB0aGUgbWluaW11bSBpbmRleCBvZiBwYWdlIG51bWJlcnMgdGhhdCBjYW4gYmUgc2hvd24gYnkgYmVpbmcgd2l0aGluIHRoZSBwYWdlIHdpbmRvdyByYW5nZVxuICBnZXRQYWdlV2luZG93TWluSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5mbG9vcih0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgLyBQQUdFX1dJTkRPV19TSVpFKSAqXG4gICAgICBQQUdFX1dJTkRPV19TSVpFXG4gICAgKTtcbiAgfVxuXG4gIC8vIEdldHMgdGhlIG1heGltdW0gaW5kZXggb2YgcGFnZSBudW1iZXJzIHRoYXQgY2FuIGJlIHNob3duIGJ5IGJlaW5nIHdpdGhpbiB0aGUgcGFnZSB3aW5kb3cgcmFuZ2VcbiAgZ2V0UGFnZVdpbmRvd01heEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGguZmxvb3IodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC8gUEFHRV9XSU5ET1dfU0laRSkgKlxuICAgICAgICBQQUdFX1dJTkRPV19TSVpFICtcbiAgICAgIDJcbiAgICApO1xuICB9XG5cbiAgaGFzUGFnZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzID4gMDtcbiAgfVxuXG4gIG9uRmlyc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IDA7XG4gIH1cblxuICBvbkxhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzIC0gMTtcbiAgfVxuXG4gIG9uUGFnZUluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSBpbmRleDtcbiAgfVxuXG4gIGhpZGVQYWdlSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5nZXRQYWdlV2luZG93TWluSW5kZXgoKSA+IGluZGV4IHx8XG4gICAgICAgIHRoaXMuZ2V0UGFnZVdpbmRvd01heEluZGV4KCkgPCBpbmRleCkgJiZcbiAgICAgIChpbmRleCA+IDAgJiYgaW5kZXggPCB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAtIDEpXG4gICAgKTtcbiAgfVxuXG4gIHNob3dEb3RzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5oaWRlUGFnZUluZGV4KGluZGV4KSAmJlxuICAgICAgKGluZGV4ID09PSB0aGlzLmdldFBhZ2VXaW5kb3dNYXhJbmRleCgpICsgMSB8fFxuICAgICAgICBpbmRleCA9PT0gdGhpcy5nZXRQYWdlV2luZG93TWluSW5kZXgoKSAtIDEpXG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrUGFnZU5vKHBhZ2U6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gQ2hhbmdlIHBhZ2Ugb24gdmFsaWQgaW5kZXhcbiAgICBpZiAoXG4gICAgICBwYWdlID49IFBBR0VfRklSU1QgJiZcbiAgICAgIHBhZ2UgPD0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgJiZcbiAgICAgIHBhZ2UgIT09IHRoaXMuZ2V0Q3VycmVudFBhZ2VOdW1iZXIoKVxuICAgICkge1xuICAgICAgdGhpcy5wYWdlQ2hhbmdlKHBhZ2UpO1xuICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuXG4gICAgLy8gUGFnZSBzdGF5cyB0aGUgc2FtZSBvbiBpbnZhbGlkIGluZGV4XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52aWV3UGFnZUV2ZW50LmVtaXQocGFnZSAtIDEpO1xuICB9XG5cbiAgc2hvd1BhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuICEodGhpcy5oaWRlT25TaW5nbGVQYWdlICYmIHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzIDw9IDEpO1xuICB9XG59XG4iXX0=
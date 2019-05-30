/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
/** @type {?} */
var PAGE_FIRST = 1;
/** @type {?} */
var PAGE_WINDOW_SIZE = 3;
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
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
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-pagination',
                    template: "<ul class=\"pagination\">\n  <!-- Previous -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onFirstPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPagePrevious())\">\u00AB</a>\n  </li>\n\n  <!-- Page Index -->\n  <li\n    class=\"page-item\"\n    *ngFor=\"let page of getPageIndicies(); let i = index\"\n    [ngClass]=\"{ active: onPageIndex(i), disabled: showDots(i) }\"\n  >\n    <a class=\"page-link\" *ngIf=\"showDots(i)\">...</a>\n    <a\n      class=\"page-link\"\n      *ngIf=\"!hidePageIndex(i)\"\n      (click)=\"clickPageNo(i + 1)\"\n      >{{ i + 1 }}</a\n    >\n  </li>\n\n  <!-- Next -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onLastPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPageNext())\">\u00BB</a>\n  </li>\n</ul>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0lBR2pCLFVBQVUsR0FBRyxDQUFDOztJQUNkLGdCQUFnQixHQUFHLENBQUM7QUFFMUI7SUFBQTtRQU9ZLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUF1RjdFLENBQUM7SUFyRkMseURBQXlEO0lBQ3pELG1DQUFtQzs7Ozs7OztJQUMzQixrREFBb0I7Ozs7Ozs7SUFBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxpR0FBaUc7Ozs7O0lBQ2pHLG1EQUFxQjs7Ozs7SUFBckI7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztZQUMxRCxnQkFBZ0IsQ0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRCxpR0FBaUc7Ozs7O0lBQ2pHLG1EQUFxQjs7Ozs7SUFBckI7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztZQUN4RCxnQkFBZ0I7WUFDbEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLEtBQWE7UUFDekIsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsS0FBSztZQUNuQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pCLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUM7Z0JBQ3pDLEtBQUssS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLElBQVk7UUFDdEIsNkJBQTZCO1FBQzdCLElBQ0UsSUFBSSxJQUFJLFVBQVU7WUFDbEIsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUNsQyxJQUFJLEtBQUssSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQ3BDO1lBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBN0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsOHpCQUEwQztvQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7NkJBRUUsS0FBSztnQ0FDTCxNQUFNOztJQXVGVCwwQkFBQztDQUFBLEFBOUZELElBOEZDO1NBekZZLG1CQUFtQjs7O0lBQzlCLHlDQUFxQzs7SUFDckMsNENBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmNvbnN0IFBBR0VfRklSU1QgPSAxO1xuY29uc3QgUEFHRV9XSU5ET1dfU0laRSA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBAT3V0cHV0KCkgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvLyBCZWNhdXNlIHBhZ2luYXRpb24gbW9kZWwgdXNlcyBpbmRleGVzIHN0YXJ0aW5nIGZyb20gMCxcbiAgLy8gYWRkIDEgdG8gZ2V0IGN1cnJlbnQgcGFnZSBudW1iZXJcbiAgcHJpdmF0ZSBnZXRDdXJyZW50UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICsgMTtcbiAgfVxuXG4gIGdldFBhZ2VQcmV2aW91cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlTnVtYmVyKCkgLSAxO1xuICB9XG5cbiAgZ2V0UGFnZU5leHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZU51bWJlcigpICsgMTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRpY2llcygpOiBBcnJheTxudW1iZXI+IHtcbiAgICByZXR1cm4gQXJyYXkodGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgLy8gR2V0cyB0aGUgbWluaW11bSBpbmRleCBvZiBwYWdlIG51bWJlcnMgdGhhdCBjYW4gYmUgc2hvd24gYnkgYmVpbmcgd2l0aGluIHRoZSBwYWdlIHdpbmRvdyByYW5nZVxuICBnZXRQYWdlV2luZG93TWluSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5mbG9vcih0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgLyBQQUdFX1dJTkRPV19TSVpFKSAqXG4gICAgICBQQUdFX1dJTkRPV19TSVpFXG4gICAgKTtcbiAgfVxuXG4gIC8vIEdldHMgdGhlIG1heGltdW0gaW5kZXggb2YgcGFnZSBudW1iZXJzIHRoYXQgY2FuIGJlIHNob3duIGJ5IGJlaW5nIHdpdGhpbiB0aGUgcGFnZSB3aW5kb3cgcmFuZ2VcbiAgZ2V0UGFnZVdpbmRvd01heEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGguZmxvb3IodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC8gUEFHRV9XSU5ET1dfU0laRSkgKlxuICAgICAgICBQQUdFX1dJTkRPV19TSVpFICtcbiAgICAgIDJcbiAgICApO1xuICB9XG5cbiAgaGFzUGFnZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzID4gMDtcbiAgfVxuXG4gIG9uRmlyc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IDA7XG4gIH1cblxuICBvbkxhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzIC0gMTtcbiAgfVxuXG4gIG9uUGFnZUluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSBpbmRleDtcbiAgfVxuXG4gIGhpZGVQYWdlSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5nZXRQYWdlV2luZG93TWluSW5kZXgoKSA+IGluZGV4IHx8XG4gICAgICAgIHRoaXMuZ2V0UGFnZVdpbmRvd01heEluZGV4KCkgPCBpbmRleCkgJiZcbiAgICAgIChpbmRleCA+IDAgJiYgaW5kZXggPCB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAtIDEpXG4gICAgKTtcbiAgfVxuXG4gIHNob3dEb3RzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5oaWRlUGFnZUluZGV4KGluZGV4KSAmJlxuICAgICAgKGluZGV4ID09PSB0aGlzLmdldFBhZ2VXaW5kb3dNYXhJbmRleCgpICsgMSB8fFxuICAgICAgICBpbmRleCA9PT0gdGhpcy5nZXRQYWdlV2luZG93TWluSW5kZXgoKSAtIDEpXG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrUGFnZU5vKHBhZ2U6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gQ2hhbmdlIHBhZ2Ugb24gdmFsaWQgaW5kZXhcbiAgICBpZiAoXG4gICAgICBwYWdlID49IFBBR0VfRklSU1QgJiZcbiAgICAgIHBhZ2UgPD0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgJiZcbiAgICAgIHBhZ2UgIT09IHRoaXMuZ2V0Q3VycmVudFBhZ2VOdW1iZXIoKVxuICAgICkge1xuICAgICAgdGhpcy5wYWdlQ2hhbmdlKHBhZ2UpO1xuICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuXG4gICAgLy8gUGFnZSBzdGF5cyB0aGUgc2FtZSBvbiBpbnZhbGlkIGluZGV4XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52aWV3UGFnZUV2ZW50LmVtaXQocGFnZSAtIDEpO1xuICB9XG59XG4iXX0=
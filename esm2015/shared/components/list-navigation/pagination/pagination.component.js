/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
/** @type {?} */
const PAGE_FIRST = 1;
/** @type {?} */
const PAGE_WINDOW_SIZE = 3;
export class PaginationComponent {
    constructor() {
        this.viewPageEvent = new EventEmitter();
    }
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    /**
     * @private
     * @return {?}
     */
    getCurrentPageNumber() {
        return this.pagination.currentPage + 1;
    }
    /**
     * @return {?}
     */
    getPagePrevious() {
        return this.getCurrentPageNumber() - 1;
    }
    /**
     * @return {?}
     */
    getPageNext() {
        return this.getCurrentPageNumber() + 1;
    }
    /**
     * @return {?}
     */
    getPageIndicies() {
        return Array(this.pagination.totalPages);
    }
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    getPageWindowMinIndex() {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE);
    }
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    getPageWindowMaxIndex() {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE +
            2);
    }
    /**
     * @return {?}
     */
    hasPages() {
        return this.pagination.totalPages > 0;
    }
    /**
     * @return {?}
     */
    onFirstPage() {
        return this.pagination.currentPage === 0;
    }
    /**
     * @return {?}
     */
    onLastPage() {
        return this.pagination.currentPage === this.pagination.totalPages - 1;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndex(index) {
        return this.pagination.currentPage === index;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hidePageIndex(index) {
        return ((this.getPageWindowMinIndex() > index ||
            this.getPageWindowMaxIndex() < index) &&
            (index > 0 && index < this.pagination.totalPages - 1));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showDots(index) {
        return (this.hidePageIndex(index) &&
            (index === this.getPageWindowMaxIndex() + 1 ||
                index === this.getPageWindowMinIndex() - 1));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    clickPageNo(page) {
        // Change page on valid index
        if (page >= PAGE_FIRST &&
            page <= this.pagination.totalPages &&
            page !== this.getCurrentPageNumber()) {
            this.pageChange(page);
            return page;
        }
        // Page stays the same on invalid index
        return this.pagination.currentPage;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.viewPageEvent.emit(page - 1);
    }
}
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
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.viewPageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O01BR2pCLFVBQVUsR0FBRyxDQUFDOztNQUNkLGdCQUFnQixHQUFHLENBQUM7QUFPMUIsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9ZLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUF1RjdFLENBQUM7Ozs7Ozs7SUFuRlMsb0JBQW9CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxxQkFBcUI7UUFDbkIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFDMUQsZ0JBQWdCLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7OztJQUdELHFCQUFxQjtRQUNuQixPQUFPLENBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztZQUN4RCxnQkFBZ0I7WUFDbEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsS0FBSztZQUNuQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pCLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUM7Z0JBQ3pDLEtBQUssS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsNkJBQTZCO1FBQzdCLElBQ0UsSUFBSSxJQUFJLFVBQVU7WUFDbEIsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUNsQyxJQUFJLEtBQUssSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQ3BDO1lBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBN0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsOHpCQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozt5QkFFRSxLQUFLOzRCQUNMLE1BQU07Ozs7SUFEUCx5Q0FBcUM7O0lBQ3JDLDRDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5jb25zdCBQQUdFX0ZJUlNUID0gMTtcbmNvbnN0IFBBR0VfV0lORE9XX1NJWkUgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcbiAgQE91dHB1dCgpIHZpZXdQYWdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLy8gQmVjYXVzZSBwYWdpbmF0aW9uIG1vZGVsIHVzZXMgaW5kZXhlcyBzdGFydGluZyBmcm9tIDAsXG4gIC8vIGFkZCAxIHRvIGdldCBjdXJyZW50IHBhZ2UgbnVtYmVyXG4gIHByaXZhdGUgZ2V0Q3VycmVudFBhZ2VOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSArIDE7XG4gIH1cblxuICBnZXRQYWdlUHJldmlvdXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZU51bWJlcigpIC0gMTtcbiAgfVxuXG4gIGdldFBhZ2VOZXh0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBhZ2VOdW1iZXIoKSArIDE7XG4gIH1cblxuICBnZXRQYWdlSW5kaWNpZXMoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIEFycmF5KHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIC8vIEdldHMgdGhlIG1pbmltdW0gaW5kZXggb2YgcGFnZSBudW1iZXJzIHRoYXQgY2FuIGJlIHNob3duIGJ5IGJlaW5nIHdpdGhpbiB0aGUgcGFnZSB3aW5kb3cgcmFuZ2VcbiAgZ2V0UGFnZVdpbmRvd01pbkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGguZmxvb3IodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC8gUEFHRV9XSU5ET1dfU0laRSkgKlxuICAgICAgUEFHRV9XSU5ET1dfU0laRVxuICAgICk7XG4gIH1cblxuICAvLyBHZXRzIHRoZSBtYXhpbXVtIGluZGV4IG9mIHBhZ2UgbnVtYmVycyB0aGF0IGNhbiBiZSBzaG93biBieSBiZWluZyB3aXRoaW4gdGhlIHBhZ2Ugd2luZG93IHJhbmdlXG4gIGdldFBhZ2VXaW5kb3dNYXhJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmZsb29yKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSAvIFBBR0VfV0lORE9XX1NJWkUpICpcbiAgICAgICAgUEFHRV9XSU5ET1dfU0laRSArXG4gICAgICAyXG4gICAgKTtcbiAgfVxuXG4gIGhhc1BhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyA+IDA7XG4gIH1cblxuICBvbkZpcnN0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSAwO1xuICB9XG5cbiAgb25MYXN0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAtIDE7XG4gIH1cblxuICBvblBhZ2VJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gaW5kZXg7XG4gIH1cblxuICBoaWRlUGFnZUluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuZ2V0UGFnZVdpbmRvd01pbkluZGV4KCkgPiBpbmRleCB8fFxuICAgICAgICB0aGlzLmdldFBhZ2VXaW5kb3dNYXhJbmRleCgpIDwgaW5kZXgpICYmXG4gICAgICAoaW5kZXggPiAwICYmIGluZGV4IDwgdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgLSAxKVxuICAgICk7XG4gIH1cblxuICBzaG93RG90cyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaGlkZVBhZ2VJbmRleChpbmRleCkgJiZcbiAgICAgIChpbmRleCA9PT0gdGhpcy5nZXRQYWdlV2luZG93TWF4SW5kZXgoKSArIDEgfHxcbiAgICAgICAgaW5kZXggPT09IHRoaXMuZ2V0UGFnZVdpbmRvd01pbkluZGV4KCkgLSAxKVxuICAgICk7XG4gIH1cblxuICBjbGlja1BhZ2VObyhwYWdlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIENoYW5nZSBwYWdlIG9uIHZhbGlkIGluZGV4XG4gICAgaWYgKFxuICAgICAgcGFnZSA+PSBQQUdFX0ZJUlNUICYmXG4gICAgICBwYWdlIDw9IHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzICYmXG4gICAgICBwYWdlICE9PSB0aGlzLmdldEN1cnJlbnRQYWdlTnVtYmVyKClcbiAgICApIHtcbiAgICAgIHRoaXMucGFnZUNoYW5nZShwYWdlKTtcbiAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIC8vIFBhZ2Ugc3RheXMgdGhlIHNhbWUgb24gaW52YWxpZCBpbmRleFxuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2U7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmlld1BhZ2VFdmVudC5lbWl0KHBhZ2UgLSAxKTtcbiAgfVxufVxuIl19
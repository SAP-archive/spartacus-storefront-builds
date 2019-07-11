/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
/** @type {?} */
const PAGE_FIRST = 1;
/** @type {?} */
const PAGE_WINDOW_SIZE = 3;
export class PaginationComponent {
    constructor() {
        this.hideOnSinglePage = false;
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
    /**
     * @return {?}
     */
    showPagination() {
        return !(this.hideOnSinglePage && this.pagination.totalPages <= 1);
    }
}
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
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.hideOnSinglePage;
    /** @type {?} */
    PaginationComponent.prototype.viewPageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O01BR2pCLFVBQVUsR0FBRyxDQUFDOztNQUNkLGdCQUFnQixHQUFHLENBQUM7QUFPMUIsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9XLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBMkY3RSxDQUFDOzs7Ozs7O0lBdkZTLG9CQUFvQjtRQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBR0QscUJBQXFCO1FBQ25CLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1lBQzFELGdCQUFnQixDQUNqQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxxQkFBcUI7UUFDbkIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFDeEQsZ0JBQWdCO1lBQ2xCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEtBQUs7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLE9BQU8sQ0FDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QixDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDO2dCQUN6QyxLQUFLLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLDZCQUE2QjtRQUM3QixJQUNFLElBQUksSUFBSSxVQUFVO1lBQ2xCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDbEMsSUFBSSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUNwQztZQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHVDQUF1QztRQUN2QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQWxHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHkxQkFBMEM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7eUJBRUUsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLE1BQU07Ozs7SUFGUCx5Q0FBcUM7O0lBQ3JDLCtDQUFrQzs7SUFDbEMsNENBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmNvbnN0IFBBR0VfRklSU1QgPSAxO1xuY29uc3QgUEFHRV9XSU5ET1dfU0laRSA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBASW5wdXQoKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XG4gIEBPdXRwdXQoKSB2aWV3UGFnZUV2ZW50OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8vIEJlY2F1c2UgcGFnaW5hdGlvbiBtb2RlbCB1c2VzIGluZGV4ZXMgc3RhcnRpbmcgZnJvbSAwLFxuICAvLyBhZGQgMSB0byBnZXQgY3VycmVudCBwYWdlIG51bWJlclxuICBwcml2YXRlIGdldEN1cnJlbnRQYWdlTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgKyAxO1xuICB9XG5cbiAgZ2V0UGFnZVByZXZpb3VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBhZ2VOdW1iZXIoKSAtIDE7XG4gIH1cblxuICBnZXRQYWdlTmV4dCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlTnVtYmVyKCkgKyAxO1xuICB9XG5cbiAgZ2V0UGFnZUluZGljaWVzKCk6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiBBcnJheSh0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyk7XG4gIH1cblxuICAvLyBHZXRzIHRoZSBtaW5pbXVtIGluZGV4IG9mIHBhZ2UgbnVtYmVycyB0aGF0IGNhbiBiZSBzaG93biBieSBiZWluZyB3aXRoaW4gdGhlIHBhZ2Ugd2luZG93IHJhbmdlXG4gIGdldFBhZ2VXaW5kb3dNaW5JbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmZsb29yKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSAvIFBBR0VfV0lORE9XX1NJWkUpICpcbiAgICAgIFBBR0VfV0lORE9XX1NJWkVcbiAgICApO1xuICB9XG5cbiAgLy8gR2V0cyB0aGUgbWF4aW11bSBpbmRleCBvZiBwYWdlIG51bWJlcnMgdGhhdCBjYW4gYmUgc2hvd24gYnkgYmVpbmcgd2l0aGluIHRoZSBwYWdlIHdpbmRvdyByYW5nZVxuICBnZXRQYWdlV2luZG93TWF4SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5mbG9vcih0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgLyBQQUdFX1dJTkRPV19TSVpFKSAqXG4gICAgICAgIFBBR0VfV0lORE9XX1NJWkUgK1xuICAgICAgMlxuICAgICk7XG4gIH1cblxuICBoYXNQYWdlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgPiAwO1xuICB9XG5cbiAgb25GaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gMDtcbiAgfVxuXG4gIG9uTGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgLSAxO1xuICB9XG5cbiAgb25QYWdlSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IGluZGV4O1xuICB9XG5cbiAgaGlkZVBhZ2VJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmdldFBhZ2VXaW5kb3dNaW5JbmRleCgpID4gaW5kZXggfHxcbiAgICAgICAgdGhpcy5nZXRQYWdlV2luZG93TWF4SW5kZXgoKSA8IGluZGV4KSAmJlxuICAgICAgKGluZGV4ID4gMCAmJiBpbmRleCA8IHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzIC0gMSlcbiAgICApO1xuICB9XG5cbiAgc2hvd0RvdHMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmhpZGVQYWdlSW5kZXgoaW5kZXgpICYmXG4gICAgICAoaW5kZXggPT09IHRoaXMuZ2V0UGFnZVdpbmRvd01heEluZGV4KCkgKyAxIHx8XG4gICAgICAgIGluZGV4ID09PSB0aGlzLmdldFBhZ2VXaW5kb3dNaW5JbmRleCgpIC0gMSlcbiAgICApO1xuICB9XG5cbiAgY2xpY2tQYWdlTm8ocGFnZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyBDaGFuZ2UgcGFnZSBvbiB2YWxpZCBpbmRleFxuICAgIGlmIChcbiAgICAgIHBhZ2UgPj0gUEFHRV9GSVJTVCAmJlxuICAgICAgcGFnZSA8PSB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAmJlxuICAgICAgcGFnZSAhPT0gdGhpcy5nZXRDdXJyZW50UGFnZU51bWJlcigpXG4gICAgKSB7XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UocGFnZSk7XG4gICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG5cbiAgICAvLyBQYWdlIHN0YXlzIHRoZSBzYW1lIG9uIGludmFsaWQgaW5kZXhcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdQYWdlRXZlbnQuZW1pdChwYWdlIC0gMSk7XG4gIH1cblxuICBzaG93UGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gISh0aGlzLmhpZGVPblNpbmdsZVBhZ2UgJiYgdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgPD0gMSk7XG4gIH1cbn1cbiJdfQ==
import { EventEmitter } from '@angular/core';
import { PaginationModel } from '@spartacus/core';
export declare class PaginationComponent {
    pagination: PaginationModel;
    hideOnSinglePage: boolean;
    viewPageEvent: EventEmitter<number>;
    private getCurrentPageNumber;
    getPagePrevious(): number;
    getPageNext(): number;
    getPageIndicies(): Array<number>;
    getPageWindowMinIndex(): number;
    getPageWindowMaxIndex(): number;
    hasPages(): boolean;
    onFirstPage(): boolean;
    onLastPage(): boolean;
    onPageIndex(index: number): boolean;
    hidePageIndex(index: number): boolean;
    showDots(index: number): boolean;
    clickPageNo(page: number): number;
    pageChange(page: number): void;
    showPagination(): boolean;
}

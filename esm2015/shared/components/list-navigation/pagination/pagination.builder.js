/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PaginationConfig } from './config/index';
import { PaginationItemType, PaginationNavigationPosition, } from './pagination.model';
import * as i0 from "@angular/core";
import * as i1 from "./config/pagination.config";
/** @type {?} */
const FALLBACK_PAGINATION_OPTIONS = {
    rangeCount: 3,
    dotsLabel: '...',
    startLabel: '«',
    previousLabel: '‹',
    nextLabel: '›',
    endLabel: '»',
};
/**
 * Builds a pagination structures based on a pageCount and current page number.
 * There are various {\@link PaginationConfig} options which can be used to configure
 * the behaviour of the build. Alternatively, CSS can be used to further customise
 * the pagination.
 *
 * Examples:
 * The full blown pagination items contain the follow elements:
 *
 * `« ‹ 1 ... 4 (5) 6 ... 9 › »`
 *
 * This includes pagination items to the following pages:
 * - start page
 * - previous page
 * - first page
 * - page range
 * - last page
 * - next page
 * - end page
 *
 * All of those links are configurable, including the size of the page range.
 * The current page will always be centered in the page range to provide direct access
 * to the previous and next page.
 */
export class PaginationBuilder {
    /**
     * @param {?} paginationConfig
     */
    constructor(paginationConfig) {
        this.paginationConfig = paginationConfig;
    }
    /**
     * Builds a list of `PaginationItem`. The give pageCount and current are used
     * to build out the full pagination. There are various {\@link PaginationConfig} options
     * which can be used to configure the behaviour of the build. Alternatively, CSS
     * can be used to further specialize visibility of the pagination.
     *
     * @param {?} pageCount The total number of pages
     * @param {?} current The current page number, 0-index based
     * @return {?} An array of `PaginationItem`
     */
    paginate(pageCount, current) {
        /** @type {?} */
        const pages = [];
        if (pageCount < 2) {
            return pages;
        }
        this.addPages(pages, pageCount, current);
        this.addDots(pages, pageCount);
        this.addFirstLast(pages, pageCount);
        this.addNavigation(pages, pageCount, current);
        return pages;
    }
    /**
     * Returns the current page with surrounding pages (based on the `config.rangeCount`).
     * The current page is always centered to provide direct access to the previous and next page.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     * @param {?} current The current page number, 0-index based
     * @return {?}
     */
    addPages(pages, pageCount, current) {
        /** @type {?} */
        const start = this.getStartOfRange(pageCount, current);
        /** @type {?} */
        const max = Math.min(this.config.rangeCount, pageCount);
        Array.from(Array(max)).forEach((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => {
            pages.push({
                number: i + start,
                label: String(i + start + 1),
                type: PaginationItemType.PAGE,
            });
        }));
    }
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     * @return {?}
     */
    addDots(pages, pageCount) {
        if (!this.config.addDots) {
            return;
        }
        /** @type {?} */
        const addFirstGap = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const firstItemNumber = pages[0].number;
            /** @type {?} */
            const gapNumber = this.config.addFirst ? 1 : 0;
            if (firstItemNumber > gapNumber) {
                /** @type {?} */
                const isGap = !this.config.substituteDotsForSingularPage ||
                    firstItemNumber !== gapNumber + 1;
                /** @type {?} */
                const isSubstitued = this.config.addFirst &&
                    this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
                /** @type {?} */
                const type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.FIRST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? this.config.dotsLabel : String(gapNumber + 1),
                        type,
                    }, isGap ? null : { number: gapNumber }),
                ];
            }
            else
                return [];
        });
        /** @type {?} */
        const addLastGap = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const nextPageNumber = pages[pages.length - 1].number + 1;
            /** @type {?} */
            const last = pageCount - (this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                /** @type {?} */
                const isSubstitued = this.config.addLast &&
                    this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                /** @type {?} */
                const isGap = nextPageNumber <
                    pageCount -
                        (this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (this.config.addLast ? 1 : 0);
                /** @type {?} */
                const type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.LAST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? this.config.dotsLabel : String(nextPageNumber + 1),
                        type,
                    }, isGap ? null : { number: nextPageNumber }),
                ];
            }
            else
                return [];
        });
        pages.unshift(...addFirstGap());
        pages.push(...addLastGap());
    }
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     *
     * @return {?}
     */
    addFirstLast(pages, pageCount) {
        if (this.config.addFirst && pages[0].number !== 0) {
            pages.unshift({
                number: 0,
                label: '1',
                type: PaginationItemType.FIRST,
            });
        }
        if (this.config.addLast &&
            pages[pages.length - 1].number !== pageCount - 1) {
            pages.push({
                number: pageCount - 1,
                label: String(pageCount),
                type: PaginationItemType.LAST,
            });
        }
    }
    /**
     * Add links to the start, previous, next and last page, if configured to do so.
     * The order of the links can be configured by using the {\@link PaginationConfig},
     * using the `PaginationNavigationPosition` (`BEFORE` or `AFTER`).
     * The `PaginationNavigationPosition` allows for 3 flavours:
     *
     * - by default the pagination starts with start and previous and ends with the next and end links
     * - BEFORE – all navigation links are added in the front of the pagination list
     * - AFTER – all navigation links are pushed to the end of the pagination list
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     * @param {?} current The current page number, 0-index based
     *
     * @return {?}
     */
    addNavigation(pages, pageCount, current) {
        /** @type {?} */
        const before = this.getBeforeLinks(current);
        /** @type {?} */
        const after = this.getAfter(pageCount, current);
        /** @type {?} */
        const pos = this.config.navigationPosition;
        if (!pos || pos === PaginationNavigationPosition.ASIDE) {
            pages.unshift(...before);
            pages.push(...after);
        }
        else {
            if (pos === PaginationNavigationPosition.BEFORE) {
                pages.unshift(...before, ...after);
            }
            if (pos === PaginationNavigationPosition.AFTER) {
                pages.push(...before, ...after);
            }
        }
    }
    /**
     * Returns the start and previous links, if applicable.
     * @private
     * @param {?} current
     * @return {?}
     */
    getBeforeLinks(current) {
        /** @type {?} */
        const list = [];
        if (this.config.addStart) {
            /** @type {?} */
            const start = (/**
             * @return {?}
             */
            () => {
                return Object.assign({
                    label: this.config.startLabel,
                    type: PaginationItemType.START,
                }, current > 0 ? { number: 0 } : null);
            });
            list.push(start());
        }
        if (this.config.addPrevious) {
            /** @type {?} */
            const previous = (/**
             * @return {?}
             */
            () => {
                return Object.assign({
                    label: this.config.previousLabel,
                    type: PaginationItemType.PREVIOUS,
                }, current > 0 ? { number: current - 1 } : null);
            });
            list.push(previous());
        }
        return list;
    }
    /**
     * Returns the next and end links, if applicable.
     * @private
     * @param {?} pageCount
     * @param {?} current
     * @return {?}
     */
    getAfter(pageCount, current) {
        /** @type {?} */
        const list = [];
        if (this.config.addNext) {
            /** @type {?} */
            const next = (/**
             * @return {?}
             */
            () => {
                return Object.assign({
                    label: this.config.nextLabel,
                    type: PaginationItemType.NEXT,
                }, current < pageCount - 1 ? { number: current + 1 } : null);
            });
            list.push(next());
        }
        if (this.config.addEnd) {
            /** @type {?} */
            const end = (/**
             * @return {?}
             */
            () => {
                return Object.assign({
                    label: this.config.endLabel,
                    type: PaginationItemType.END,
                }, current < pageCount - 1 ? { number: pageCount - 1 } : null);
            });
            list.push(end());
        }
        return list;
    }
    /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @private
     * @param {?} pageCount The total number of pages.
     * @param {?} current The current page number, 0-index based.
     * @return {?}
     */
    getStartOfRange(pageCount, current) {
        /** @type {?} */
        const count = this.config.rangeCount - 1;
        // the least number of pages before and after the current
        /** @type {?} */
        const delta = Math.round(count / 2);
        // ensure that we start with at least the first page
        /** @type {?} */
        const minStart = Math.max(0, current - delta);
        // ensures that we start with at least 1 and do not pass the last range
        /** @type {?} */
        const maxStart = Math.max(0, pageCount - count - 1);
        // ensure that we get at least a full range at the end
        return Math.min(maxStart, minStart);
    }
    /**
     * @private
     * @return {?}
     */
    get config() {
        return Object.assign(FALLBACK_PAGINATION_OPTIONS, this.paginationConfig.pagination);
    }
}
PaginationBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PaginationBuilder.ctorParameters = () => [
    { type: PaginationConfig }
];
/** @nocollapse */ PaginationBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PaginationBuilder_Factory() { return new PaginationBuilder(i0.ɵɵinject(i1.PaginationConfig)); }, token: PaginationBuilder, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PaginationBuilder.prototype.paginationConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsNEJBQTRCLEdBRTdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7TUFFdEIsMkJBQTJCLEdBQXNCO0lBQ3JELFVBQVUsRUFBRSxDQUFDO0lBQ2IsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEdBQUc7SUFDZixhQUFhLEVBQUUsR0FBRztJQUNsQixTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7Ozs7Ozs7Ozs7O0lBWTVELFFBQVEsQ0FBQyxTQUFpQixFQUFFLE9BQWU7O2NBQ25DLEtBQUssR0FBcUIsRUFBRTtRQUNsQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMs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LENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7O2NBRzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7Y0FFdkMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FDbEIsMkJBQTJCLEVBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQ2pDLENBQUM7SUFDSixDQUFDOzs7WUE5UkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBM0NRLGdCQUFnQjs7Ozs7Ozs7SUE2Q1gsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7XG4gIFBhZ2luYXRpb25JdGVtLFxuICBQYWdpbmF0aW9uSXRlbVR5cGUsXG4gIFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb24sXG4gIFBhZ2luYXRpb25PcHRpb25zLFxufSBmcm9tICcuL3BhZ2luYXRpb24ubW9kZWwnO1xuXG5jb25zdCBGQUxMQkFDS19QQUdJTkFUSU9OX09QVElPTlM6IFBhZ2luYXRpb25PcHRpb25zID0ge1xuICByYW5nZUNvdW50OiAzLFxuICBkb3RzTGFiZWw6ICcuLi4nLFxuICBzdGFydExhYmVsOiAnwqsnLFxuICBwcmV2aW91c0xhYmVsOiAn4oC5JyxcbiAgbmV4dExhYmVsOiAn4oC6JyxcbiAgZW5kTGFiZWw6ICfCuycsXG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIHBhZ2luYXRpb24gc3RydWN0dXJlcyBiYXNlZCBvbiBhIHBhZ2VDb3VudCBhbmQgY3VycmVudCBwYWdlIG51bWJlci5cbiAqIFRoZXJlIGFyZSB2YXJpb3VzIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSBvcHRpb25zIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZVxuICogdGhlIGJlaGF2aW91ciBvZiB0aGUgYnVpbGQuIEFsdGVybmF0aXZlbHksIENTUyBjYW4gYmUgdXNlZCB0byBmdXJ0aGVyIGN1c3RvbWlzZVxuICogdGhlIHBhZ2luYXRpb24uXG4gKlxuICogRXhhbXBsZXM6XG4gKiBUaGUgZnVsbCBibG93biBwYWdpbmF0aW9uIGl0ZW1zIGNvbnRhaW4gdGhlIGZvbGxvdyBlbGVtZW50czpcbiAqXG4gKiBgwqsg4oC5IDEgLi4uIDQgKDUpIDYgLi4uIDkg4oC6IMK7YFxuICpcbiAqIFRoaXMgaW5jbHVkZXMgcGFnaW5hdGlvbiBpdGVtcyB0byB0aGUgZm9sbG93aW5nIHBhZ2VzOlxuICogLSBzdGFydCBwYWdlXG4gKiAtIHByZXZpb3VzIHBhZ2VcbiAqIC0gZmlyc3QgcGFnZVxuICogLSBwYWdlIHJhbmdlXG4gKiAtIGxhc3QgcGFnZVxuICogLSBuZXh0IHBhZ2VcbiAqIC0gZW5kIHBhZ2VcbiAqXG4gKiBBbGwgb2YgdGhvc2UgbGlua3MgYXJlIGNvbmZpZ3VyYWJsZSwgaW5jbHVkaW5nIHRoZSBzaXplIG9mIHRoZSBwYWdlIHJhbmdlLlxuICogVGhlIGN1cnJlbnQgcGFnZSB3aWxsIGFsd2F5cyBiZSBjZW50ZXJlZCBpbiB0aGUgcGFnZSByYW5nZSB0byBwcm92aWRlIGRpcmVjdCBhY2Nlc3NcbiAqIHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBwYWdlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZykge31cblxuICAvKipcbiAgICogQnVpbGRzIGEgbGlzdCBvZiBgUGFnaW5hdGlvbkl0ZW1gLiBUaGUgZ2l2ZSBwYWdlQ291bnQgYW5kIGN1cnJlbnQgYXJlIHVzZWRcbiAgICogdG8gYnVpbGQgb3V0IHRoZSBmdWxsIHBhZ2luYXRpb24uIFRoZXJlIGFyZSB2YXJpb3VzIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSBvcHRpb25zXG4gICAqIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgYmVoYXZpb3VyIG9mIHRoZSBidWlsZC4gQWx0ZXJuYXRpdmVseSwgQ1NTXG4gICAqIGNhbiBiZSB1c2VkIHRvIGZ1cnRoZXIgc3BlY2lhbGl6ZSB2aXNpYmlsaXR5IG9mIHRoZSBwYWdpbmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYFBhZ2luYXRpb25JdGVtYFxuICAgKi9cbiAgcGFnaW5hdGUocGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IFBhZ2luYXRpb25JdGVtW10ge1xuICAgIGNvbnN0IHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdID0gW107XG4gICAgaWYgKHBhZ2VDb3VudCA8IDIpIHtcbiAgICAgIHJldHVybiBwYWdlcztcbiAgICB9XG4gICAgdGhpcy5hZGRQYWdlcyhwYWdlcywgcGFnZUNvdW50LCBjdXJyZW50KTtcbiAgICB0aGlzLmFkZERvdHMocGFnZXMsIHBhZ2VDb3VudCk7XG4gICAgdGhpcy5hZGRGaXJzdExhc3QocGFnZXMsIHBhZ2VDb3VudCk7XG4gICAgdGhpcy5hZGROYXZpZ2F0aW9uKHBhZ2VzLCBwYWdlQ291bnQsIGN1cnJlbnQpO1xuXG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZSB3aXRoIHN1cnJvdW5kaW5nIHBhZ2VzIChiYXNlZCBvbiB0aGUgYGNvbmZpZy5yYW5nZUNvdW50YCkuXG4gICAqIFRoZSBjdXJyZW50IHBhZ2UgaXMgYWx3YXlzIGNlbnRlcmVkIHRvIHByb3ZpZGUgZGlyZWN0IGFjY2VzcyB0byB0aGUgcHJldmlvdXMgYW5kIG5leHQgcGFnZS5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFBhZ2VzKFxuICAgIHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdLFxuICAgIHBhZ2VDb3VudDogbnVtYmVyLFxuICAgIGN1cnJlbnQ6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuZ2V0U3RhcnRPZlJhbmdlKHBhZ2VDb3VudCwgY3VycmVudCk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5taW4odGhpcy5jb25maWcucmFuZ2VDb3VudCwgcGFnZUNvdW50KTtcblxuICAgIEFycmF5LmZyb20oQXJyYXkobWF4KSkuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgIG51bWJlcjogaSArIHN0YXJ0LFxuICAgICAgICBsYWJlbDogU3RyaW5nKGkgKyBzdGFydCArIDEpLFxuICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZG90cyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBnaXZlbiBwYWdlcywgaWYgY29uZmlndXJlZCAoZGVmYXVsdHMgdG8gdHJ1ZSkuXG4gICAqIElmIHRoZSBkb3RzIG9ubHkgcmVwcmVzZW50IGEgc2luZ2xlIHBhZ2UsIHRoZSBwYWdlIG51bWJlciBpcyBhZGRlZCBpbnN0ZWFkIG9mXG4gICAqIHRoZSBkb3RzLCB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gcmVxdWlyZXMgZG90cyBhbHdheXMuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICovXG4gIHByb3RlY3RlZCBhZGREb3RzKHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdLCBwYWdlQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb25maWcuYWRkRG90cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEZpcnN0R2FwID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmlyc3RJdGVtTnVtYmVyID0gcGFnZXNbMF0ubnVtYmVyO1xuICAgICAgY29uc3QgZ2FwTnVtYmVyID0gdGhpcy5jb25maWcuYWRkRmlyc3QgPyAxIDogMDtcbiAgICAgIGlmIChmaXJzdEl0ZW1OdW1iZXIgPiBnYXBOdW1iZXIpIHtcbiAgICAgICAgY29uc3QgaXNHYXAgPVxuICAgICAgICAgICF0aGlzLmNvbmZpZy5zdWJzdGl0dXRlRG90c0ZvclNpbmd1bGFyUGFnZSB8fFxuICAgICAgICAgIGZpcnN0SXRlbU51bWJlciAhPT0gZ2FwTnVtYmVyICsgMTtcbiAgICAgICAgY29uc3QgaXNTdWJzdGl0dWVkID1cbiAgICAgICAgICB0aGlzLmNvbmZpZy5hZGRGaXJzdCAmJlxuICAgICAgICAgIHRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlICYmXG4gICAgICAgICAgZ2FwTnVtYmVyID09PSAwO1xuICAgICAgICBjb25zdCB0eXBlID0gaXNHYXBcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5HQVBcbiAgICAgICAgICA6IGlzU3Vic3RpdHVlZFxuICAgICAgICAgID8gUGFnaW5hdGlvbkl0ZW1UeXBlLkZJUlNUXG4gICAgICAgICAgOiBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogaXNHYXAgPyB0aGlzLmNvbmZpZy5kb3RzTGFiZWwgOiBTdHJpbmcoZ2FwTnVtYmVyICsgMSksXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNHYXAgPyBudWxsIDogeyBudW1iZXI6IGdhcE51bWJlciB9XG4gICAgICAgICAgKSxcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSByZXR1cm4gW107XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZExhc3RHYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0UGFnZU51bWJlciA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLm51bWJlciArIDE7XG4gICAgICBjb25zdCBsYXN0ID0gcGFnZUNvdW50IC0gKHRoaXMuY29uZmlnLmFkZExhc3QgPyAyIDogMSk7XG4gICAgICBpZiAobmV4dFBhZ2VOdW1iZXIgPD0gbGFzdCkge1xuICAgICAgICBjb25zdCBpc1N1YnN0aXR1ZWQgPVxuICAgICAgICAgIHRoaXMuY29uZmlnLmFkZExhc3QgJiZcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zdWJzdGl0dXRlRG90c0ZvclNpbmd1bGFyUGFnZSAmJlxuICAgICAgICAgIG5leHRQYWdlTnVtYmVyID09PSBsYXN0O1xuICAgICAgICBjb25zdCBpc0dhcCA9XG4gICAgICAgICAgbmV4dFBhZ2VOdW1iZXIgPFxuICAgICAgICAgIHBhZ2VDb3VudCAtXG4gICAgICAgICAgICAodGhpcy5jb25maWcuc3Vic3RpdHV0ZURvdHNGb3JTaW5ndWxhclBhZ2UgPyAxIDogMCkgLVxuICAgICAgICAgICAgKHRoaXMuY29uZmlnLmFkZExhc3QgPyAxIDogMCk7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGlzR2FwXG4gICAgICAgICAgPyBQYWdpbmF0aW9uSXRlbVR5cGUuR0FQXG4gICAgICAgICAgOiBpc1N1YnN0aXR1ZWRcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5MQVNUXG4gICAgICAgICAgOiBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogaXNHYXAgPyB0aGlzLmNvbmZpZy5kb3RzTGFiZWwgOiBTdHJpbmcobmV4dFBhZ2VOdW1iZXIgKyAxKSxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0dhcCA/IG51bGwgOiB7IG51bWJlcjogbmV4dFBhZ2VOdW1iZXIgfVxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgICBwYWdlcy51bnNoaWZ0KC4uLmFkZEZpcnN0R2FwKCkpO1xuICAgIHBhZ2VzLnB1c2goLi4uYWRkTGFzdEdhcCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbGlua3MgdG8gdGhlIGZpcnN0IGFuZCBsYXN0IHBhZ2UsIGlmIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICpcbiAgICovXG4gIHByb3RlY3RlZCBhZGRGaXJzdExhc3QocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZEZpcnN0ICYmIHBhZ2VzWzBdLm51bWJlciAhPT0gMCkge1xuICAgICAgcGFnZXMudW5zaGlmdCh7XG4gICAgICAgIG51bWJlcjogMCxcbiAgICAgICAgbGFiZWw6ICcxJyxcbiAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLkZJUlNULFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmFkZExhc3QgJiZcbiAgICAgIHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLm51bWJlciAhPT0gcGFnZUNvdW50IC0gMVxuICAgICkge1xuICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgIG51bWJlcjogcGFnZUNvdW50IC0gMSxcbiAgICAgICAgbGFiZWw6IFN0cmluZyhwYWdlQ291bnQpLFxuICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuTEFTVCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbGlua3MgdG8gdGhlIHN0YXJ0LCBwcmV2aW91cywgbmV4dCBhbmQgbGFzdCBwYWdlLCBpZiBjb25maWd1cmVkIHRvIGRvIHNvLlxuICAgKiBUaGUgb3JkZXIgb2YgdGhlIGxpbmtzIGNhbiBiZSBjb25maWd1cmVkIGJ5IHVzaW5nIHRoZSB7QGxpbmsgUGFnaW5hdGlvbkNvbmZpZ30sXG4gICAqIHVzaW5nIHRoZSBgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbmAgKGBCRUZPUkVgIG9yIGBBRlRFUmApLlxuICAgKiBUaGUgYFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb25gIGFsbG93cyBmb3IgMyBmbGF2b3VyczpcbiAgICpcbiAgICogLSBieSBkZWZhdWx0IHRoZSBwYWdpbmF0aW9uIHN0YXJ0cyB3aXRoIHN0YXJ0IGFuZCBwcmV2aW91cyBhbmQgZW5kcyB3aXRoIHRoZSBuZXh0IGFuZCBlbmQgbGlua3NcbiAgICogLSBCRUZPUkUg4oCTwqBhbGwgbmF2aWdhdGlvbiBsaW5rcyBhcmUgYWRkZWQgaW4gdGhlIGZyb250IG9mIHRoZSBwYWdpbmF0aW9uIGxpc3RcbiAgICogLSBBRlRFUiDigJPCoGFsbCBuYXZpZ2F0aW9uIGxpbmtzIGFyZSBwdXNoZWQgdG8gdGhlIGVuZCBvZiB0aGUgcGFnaW5hdGlvbiBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICpcbiAgICovXG4gIHByb3RlY3RlZCBhZGROYXZpZ2F0aW9uKFxuICAgIHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdLFxuICAgIHBhZ2VDb3VudDogbnVtYmVyLFxuICAgIGN1cnJlbnQ6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLmdldEJlZm9yZUxpbmtzKGN1cnJlbnQpO1xuICAgIGNvbnN0IGFmdGVyID0gdGhpcy5nZXRBZnRlcihwYWdlQ291bnQsIGN1cnJlbnQpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuY29uZmlnLm5hdmlnYXRpb25Qb3NpdGlvbjtcbiAgICBpZiAoIXBvcyB8fCBwb3MgPT09IFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb24uQVNJREUpIHtcbiAgICAgIHBhZ2VzLnVuc2hpZnQoLi4uYmVmb3JlKTtcbiAgICAgIHBhZ2VzLnB1c2goLi4uYWZ0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocG9zID09PSBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLkJFRk9SRSkge1xuICAgICAgICBwYWdlcy51bnNoaWZ0KC4uLmJlZm9yZSwgLi4uYWZ0ZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHBvcyA9PT0gUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbi5BRlRFUikge1xuICAgICAgICBwYWdlcy5wdXNoKC4uLmJlZm9yZSwgLi4uYWZ0ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGFydCBhbmQgcHJldmlvdXMgbGlua3MsIGlmIGFwcGxpY2FibGUuXG4gICAqL1xuICBwcml2YXRlIGdldEJlZm9yZUxpbmtzKGN1cnJlbnQ6IG51bWJlcik6IFBhZ2luYXRpb25JdGVtW10ge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5hZGRTdGFydCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5zdGFydExhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLlNUQVJULFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA+IDAgPyB7IG51bWJlcjogMCB9IDogbnVsbFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChzdGFydCgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZFByZXZpb3VzKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLnByZXZpb3VzTGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuUFJFVklPVVMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXJyZW50ID4gMCA/IHsgbnVtYmVyOiBjdXJyZW50IC0gMSB9IDogbnVsbFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChwcmV2aW91cygpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCBhbmQgZW5kIGxpbmtzLCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRBZnRlcihwYWdlQ291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogUGFnaW5hdGlvbkl0ZW1bXSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZE5leHQpIHtcbiAgICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5uZXh0TGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuTkVYVCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnQgPCBwYWdlQ291bnQgLSAxID8geyBudW1iZXI6IGN1cnJlbnQgKyAxIH0gOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKG5leHQoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZy5hZGRFbmQpIHtcbiAgICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmVuZExhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLkVORCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnQgPCBwYWdlQ291bnQgLSAxID8geyBudW1iZXI6IHBhZ2VDb3VudCAtIDEgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goZW5kKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgZmlyc3QgcGFnZSBvZiB0aGUgcmFuZ2Ugd2UgbmVlZCB0byBidWlsZC5cbiAgICogVGhpcyBpcyB0aGUgcGFnZSB0aGF0IGlzIGxlYWRpbmcgdXAgdG8gdGhlIHJhbmdlIG9mIHRoZVxuICAgKiBjdXJyZW50IHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlcy5cbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWQuXG4gICAqL1xuICBwcml2YXRlIGdldFN0YXJ0T2ZSYW5nZShwYWdlQ291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuY29uZmlnLnJhbmdlQ291bnQgLSAxO1xuICAgIC8vIHRoZSBsZWFzdCBudW1iZXIgb2YgcGFnZXMgYmVmb3JlIGFuZCBhZnRlciB0aGUgY3VycmVudFxuICAgIGNvbnN0IGRlbHRhID0gTWF0aC5yb3VuZChjb3VudCAvIDIpO1xuXG4gICAgLy8gZW5zdXJlIHRoYXQgd2Ugc3RhcnQgd2l0aCBhdCBsZWFzdCB0aGUgZmlyc3QgcGFnZVxuICAgIGNvbnN0IG1pblN0YXJ0ID0gTWF0aC5tYXgoMCwgY3VycmVudCAtIGRlbHRhKTtcbiAgICAvLyBlbnN1cmVzIHRoYXQgd2Ugc3RhcnQgd2l0aCBhdCBsZWFzdCAxIGFuZCBkbyBub3QgcGFzcyB0aGUgbGFzdCByYW5nZVxuICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgcGFnZUNvdW50IC0gY291bnQgLSAxKTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIGdldCBhdCBsZWFzdCBhIGZ1bGwgcmFuZ2UgYXQgdGhlIGVuZFxuICAgIHJldHVybiBNYXRoLm1pbihtYXhTdGFydCwgbWluU3RhcnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29uZmlnKCk6IFBhZ2luYXRpb25PcHRpb25zIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgIEZBTExCQUNLX1BBR0lOQVRJT05fT1BUSU9OUyxcbiAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdpbmF0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19
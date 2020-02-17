/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PaginationConfig } from './config/index';
import { PaginationItemType, PaginationNavigationPosition, } from './pagination.model';
import * as i0 from "@angular/core";
import * as i1 from "./config/pagination.config";
/** @type {?} */
var FALLBACK_PAGINATION_OPTIONS = {
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
var PaginationBuilder = /** @class */ (function () {
    function PaginationBuilder(paginationConfig) {
        this.paginationConfig = paginationConfig;
    }
    /**
     * Builds a list of `PaginationItem`. The give pageCount and current are used
     * to build out the full pagination. There are various {@link PaginationConfig} options
     * which can be used to configure the behaviour of the build. Alternatively, CSS
     * can be used to further specialize visibility of the pagination.
     *
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     * @returns An array of `PaginationItem`
     */
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
    PaginationBuilder.prototype.paginate = /**
     * Builds a list of `PaginationItem`. The give pageCount and current are used
     * to build out the full pagination. There are various {\@link PaginationConfig} options
     * which can be used to configure the behaviour of the build. Alternatively, CSS
     * can be used to further specialize visibility of the pagination.
     *
     * @param {?} pageCount The total number of pages
     * @param {?} current The current page number, 0-index based
     * @return {?} An array of `PaginationItem`
     */
    function (pageCount, current) {
        /** @type {?} */
        var pages = [];
        if (pageCount < 2) {
            return pages;
        }
        this.addPages(pages, pageCount, current);
        this.addDots(pages, pageCount);
        this.addFirstLast(pages, pageCount);
        this.addNavigation(pages, pageCount, current);
        return pages;
    };
    /**
     * Returns the current page with surrounding pages (based on the `config.rangeCount`).
     * The current page is always centered to provide direct access to the previous and next page.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     */
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
    PaginationBuilder.prototype.addPages = /**
     * Returns the current page with surrounding pages (based on the `config.rangeCount`).
     * The current page is always centered to provide direct access to the previous and next page.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     * @param {?} current The current page number, 0-index based
     * @return {?}
     */
    function (pages, pageCount, current) {
        /** @type {?} */
        var start = this.getStartOfRange(pageCount, current);
        /** @type {?} */
        var max = Math.min(this.config.rangeCount, pageCount);
        Array.from(Array(max)).forEach((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        function (_, i) {
            pages.push({
                number: i + start,
                label: String(i + start + 1),
                type: PaginationItemType.PAGE,
            });
        }));
    };
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     */
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
    PaginationBuilder.prototype.addDots = /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     * @return {?}
     */
    function (pages, pageCount) {
        var _this = this;
        if (!this.config.addDots) {
            return;
        }
        /** @type {?} */
        var addFirstGap = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var firstItemNumber = pages[0].number;
            /** @type {?} */
            var gapNumber = _this.config.addFirst ? 1 : 0;
            if (firstItemNumber > gapNumber) {
                /** @type {?} */
                var isGap = !_this.config.substituteDotsForSingularPage ||
                    firstItemNumber !== gapNumber + 1;
                /** @type {?} */
                var isSubstitued = _this.config.addFirst &&
                    _this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
                /** @type {?} */
                var type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.FIRST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? _this.config.dotsLabel : String(gapNumber + 1),
                        type: type,
                    }, isGap ? null : { number: gapNumber }),
                ];
            }
            else
                return [];
        });
        /** @type {?} */
        var addLastGap = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var nextPageNumber = pages[pages.length - 1].number + 1;
            /** @type {?} */
            var last = pageCount - (_this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                /** @type {?} */
                var isSubstitued = _this.config.addLast &&
                    _this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                /** @type {?} */
                var isGap = nextPageNumber <
                    pageCount -
                        (_this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (_this.config.addLast ? 1 : 0);
                /** @type {?} */
                var type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.LAST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? _this.config.dotsLabel : String(nextPageNumber + 1),
                        type: type,
                    }, isGap ? null : { number: nextPageNumber }),
                ];
            }
            else
                return [];
        });
        pages.unshift.apply(pages, tslib_1.__spread(addFirstGap()));
        pages.push.apply(pages, tslib_1.__spread(addLastGap()));
    };
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     *
     */
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     *
     * @return {?}
     */
    PaginationBuilder.prototype.addFirstLast = /**
     * Add links to the first and last page, if configured to do so.
     *
     * @protected
     * @param {?} pages The list of page items that is used to amend
     * @param {?} pageCount The total number of pages
     *
     * @return {?}
     */
    function (pages, pageCount) {
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
    };
    /**
     * Add links to the start, previous, next and last page, if configured to do so.
     * The order of the links can be configured by using the {@link PaginationConfig},
     * using the `PaginationNavigationPosition` (`BEFORE` or `AFTER`).
     * The `PaginationNavigationPosition` allows for 3 flavours:
     *
     * - by default the pagination starts with start and previous and ends with the next and end links
     * - BEFORE – all navigation links are added in the front of the pagination list
     * - AFTER – all navigation links are pushed to the end of the pagination list
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     *
     */
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
    PaginationBuilder.prototype.addNavigation = /**
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
    function (pages, pageCount, current) {
        /** @type {?} */
        var before = this.getBeforeLinks(current);
        /** @type {?} */
        var after = this.getAfter(pageCount, current);
        /** @type {?} */
        var pos = this.config.navigationPosition;
        if (!pos || pos === PaginationNavigationPosition.ASIDE) {
            pages.unshift.apply(pages, tslib_1.__spread(before));
            pages.push.apply(pages, tslib_1.__spread(after));
        }
        else {
            if (pos === PaginationNavigationPosition.BEFORE) {
                pages.unshift.apply(pages, tslib_1.__spread(before, after));
            }
            if (pos === PaginationNavigationPosition.AFTER) {
                pages.push.apply(pages, tslib_1.__spread(before, after));
            }
        }
    };
    /**
     * Returns the start and previous links, if applicable.
     */
    /**
     * Returns the start and previous links, if applicable.
     * @private
     * @param {?} current
     * @return {?}
     */
    PaginationBuilder.prototype.getBeforeLinks = /**
     * Returns the start and previous links, if applicable.
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var list = [];
        if (this.config.addStart) {
            /** @type {?} */
            var start = (/**
             * @return {?}
             */
            function () {
                return Object.assign({
                    label: _this.config.startLabel,
                    type: PaginationItemType.START,
                }, current > 0 ? { number: 0 } : null);
            });
            list.push(start());
        }
        if (this.config.addPrevious) {
            /** @type {?} */
            var previous = (/**
             * @return {?}
             */
            function () {
                return Object.assign({
                    label: _this.config.previousLabel,
                    type: PaginationItemType.PREVIOUS,
                }, current > 0 ? { number: current - 1 } : null);
            });
            list.push(previous());
        }
        return list;
    };
    /**
     * Returns the next and end links, if applicable.
     */
    /**
     * Returns the next and end links, if applicable.
     * @private
     * @param {?} pageCount
     * @param {?} current
     * @return {?}
     */
    PaginationBuilder.prototype.getAfter = /**
     * Returns the next and end links, if applicable.
     * @private
     * @param {?} pageCount
     * @param {?} current
     * @return {?}
     */
    function (pageCount, current) {
        var _this = this;
        /** @type {?} */
        var list = [];
        if (this.config.addNext) {
            /** @type {?} */
            var next = (/**
             * @return {?}
             */
            function () {
                return Object.assign({
                    label: _this.config.nextLabel,
                    type: PaginationItemType.NEXT,
                }, current < pageCount - 1 ? { number: current + 1 } : null);
            });
            list.push(next());
        }
        if (this.config.addEnd) {
            /** @type {?} */
            var end = (/**
             * @return {?}
             */
            function () {
                return Object.assign({
                    label: _this.config.endLabel,
                    type: PaginationItemType.END,
                }, current < pageCount - 1 ? { number: pageCount - 1 } : null);
            });
            list.push(end());
        }
        return list;
    };
    /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @param pageCount The total number of pages.
     * @param current The current page number, 0-index based.
     */
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
    PaginationBuilder.prototype.getStartOfRange = /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @private
     * @param {?} pageCount The total number of pages.
     * @param {?} current The current page number, 0-index based.
     * @return {?}
     */
    function (pageCount, current) {
        /** @type {?} */
        var count = this.config.rangeCount - 1;
        // the least number of pages before and after the current
        /** @type {?} */
        var delta = Math.round(count / 2);
        // ensure that we start with at least the first page
        /** @type {?} */
        var minStart = Math.max(0, current - delta);
        // ensures that we start with at least 1 and do not pass the last range
        /** @type {?} */
        var maxStart = Math.max(0, pageCount - count - 1);
        // ensure that we get at least a full range at the end
        return Math.min(maxStart, minStart);
    };
    Object.defineProperty(PaginationBuilder.prototype, "config", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return Object.assign(FALLBACK_PAGINATION_OPTIONS, this.paginationConfig.pagination);
        },
        enumerable: true,
        configurable: true
    });
    PaginationBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PaginationBuilder.ctorParameters = function () { return [
        { type: PaginationConfig }
    ]; };
    /** @nocollapse */ PaginationBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PaginationBuilder_Factory() { return new PaginationBuilder(i0.ɵɵinject(i1.PaginationConfig)); }, token: PaginationBuilder, providedIn: "root" });
    return PaginationBuilder;
}());
export { PaginationBuilder };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PaginationBuilder.prototype.paginationConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLDRCQUE0QixHQUU3QixNQUFNLG9CQUFvQixDQUFDOzs7O0lBRXRCLDJCQUEyQixHQUFzQjtJQUNyRCxVQUFVLEVBQUUsQ0FBQztJQUNiLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEdBQUc7SUFDbEIsU0FBUyxFQUFFLEdBQUc7SUFDZCxRQUFRLEVBQUUsR0FBRztDQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJEO0lBSUUsMkJBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUU1RDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7O0lBQ0gsb0NBQVE7Ozs7Ozs7Ozs7SUFBUixVQUFTLFNBQWlCLEVBQUUsT0FBZTs7WUFDbkMsS0FBSyxHQUFxQixFQUFFO1FBQ2xDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FB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LENBQUMsQ0FBQztTQUNsQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7O0lBQ0ssMkNBQWU7Ozs7Ozs7Ozs7SUFBdkIsVUFBd0IsU0FBaUIsRUFBRSxPQUFlOztZQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQzs7O1lBRWxDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7OztZQUc3QixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLEtBQUssQ0FBQzs7O1lBRXZDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVuRCxzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQVkscUNBQU07Ozs7O1FBQWxCO1lBQ0UsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNsQiwyQkFBMkIsRUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FDakMsQ0FBQztRQUNKLENBQUM7OztPQUFBOztnQkE5UkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkEzQ1EsZ0JBQWdCOzs7NEJBRHpCO0NBeVVDLEFBL1JELElBK1JDO1NBNVJZLGlCQUFpQjs7Ozs7O0lBQ2hCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQge1xuICBQYWdpbmF0aW9uSXRlbSxcbiAgUGFnaW5hdGlvbkl0ZW1UeXBlLFxuICBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLFxuICBQYWdpbmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnLi9wYWdpbmF0aW9uLm1vZGVsJztcblxuY29uc3QgRkFMTEJBQ0tfUEFHSU5BVElPTl9PUFRJT05TOiBQYWdpbmF0aW9uT3B0aW9ucyA9IHtcbiAgcmFuZ2VDb3VudDogMyxcbiAgZG90c0xhYmVsOiAnLi4uJyxcbiAgc3RhcnRMYWJlbDogJ8KrJyxcbiAgcHJldmlvdXNMYWJlbDogJ+KAuScsXG4gIG5leHRMYWJlbDogJ+KAuicsXG4gIGVuZExhYmVsOiAnwrsnLFxufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBwYWdpbmF0aW9uIHN0cnVjdHVyZXMgYmFzZWQgb24gYSBwYWdlQ291bnQgYW5kIGN1cnJlbnQgcGFnZSBudW1iZXIuXG4gKiBUaGVyZSBhcmUgdmFyaW91cyB7QGxpbmsgUGFnaW5hdGlvbkNvbmZpZ30gb3B0aW9ucyB3aGljaCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmVcbiAqIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGJ1aWxkLiBBbHRlcm5hdGl2ZWx5LCBDU1MgY2FuIGJlIHVzZWQgdG8gZnVydGhlciBjdXN0b21pc2VcbiAqIHRoZSBwYWdpbmF0aW9uLlxuICpcbiAqIEV4YW1wbGVzOlxuICogVGhlIGZ1bGwgYmxvd24gcGFnaW5hdGlvbiBpdGVtcyBjb250YWluIHRoZSBmb2xsb3cgZWxlbWVudHM6XG4gKlxuICogYMKrIOKAuSAxIC4uLiA0ICg1KSA2IC4uLiA5IOKAuiDCu2BcbiAqXG4gKiBUaGlzIGluY2x1ZGVzIHBhZ2luYXRpb24gaXRlbXMgdG8gdGhlIGZvbGxvd2luZyBwYWdlczpcbiAqIC0gc3RhcnQgcGFnZVxuICogLSBwcmV2aW91cyBwYWdlXG4gKiAtIGZpcnN0IHBhZ2VcbiAqIC0gcGFnZSByYW5nZVxuICogLSBsYXN0IHBhZ2VcbiAqIC0gbmV4dCBwYWdlXG4gKiAtIGVuZCBwYWdlXG4gKlxuICogQWxsIG9mIHRob3NlIGxpbmtzIGFyZSBjb25maWd1cmFibGUsIGluY2x1ZGluZyB0aGUgc2l6ZSBvZiB0aGUgcGFnZSByYW5nZS5cbiAqIFRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBhbHdheXMgYmUgY2VudGVyZWQgaW4gdGhlIHBhZ2UgcmFuZ2UgdG8gcHJvdmlkZSBkaXJlY3QgYWNjZXNzXG4gKiB0byB0aGUgcHJldmlvdXMgYW5kIG5leHQgcGFnZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25CdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcpIHt9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIGxpc3Qgb2YgYFBhZ2luYXRpb25JdGVtYC4gVGhlIGdpdmUgcGFnZUNvdW50IGFuZCBjdXJyZW50IGFyZSB1c2VkXG4gICAqIHRvIGJ1aWxkIG91dCB0aGUgZnVsbCBwYWdpbmF0aW9uLiBUaGVyZSBhcmUgdmFyaW91cyB7QGxpbmsgUGFnaW5hdGlvbkNvbmZpZ30gb3B0aW9uc1xuICAgKiB3aGljaCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIGJlaGF2aW91ciBvZiB0aGUgYnVpbGQuIEFsdGVybmF0aXZlbHksIENTU1xuICAgKiBjYW4gYmUgdXNlZCB0byBmdXJ0aGVyIHNwZWNpYWxpemUgdmlzaWJpbGl0eSBvZiB0aGUgcGFnaW5hdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGBQYWdpbmF0aW9uSXRlbWBcbiAgICovXG4gIHBhZ2luYXRlKHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBQYWdpbmF0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSA9IFtdO1xuICAgIGlmIChwYWdlQ291bnQgPCAyKSB7XG4gICAgICByZXR1cm4gcGFnZXM7XG4gICAgfVxuICAgIHRoaXMuYWRkUGFnZXMocGFnZXMsIHBhZ2VDb3VudCwgY3VycmVudCk7XG4gICAgdGhpcy5hZGREb3RzKHBhZ2VzLCBwYWdlQ291bnQpO1xuICAgIHRoaXMuYWRkRmlyc3RMYXN0KHBhZ2VzLCBwYWdlQ291bnQpO1xuICAgIHRoaXMuYWRkTmF2aWdhdGlvbihwYWdlcywgcGFnZUNvdW50LCBjdXJyZW50KTtcblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2Ugd2l0aCBzdXJyb3VuZGluZyBwYWdlcyAoYmFzZWQgb24gdGhlIGBjb25maWcucmFuZ2VDb3VudGApLlxuICAgKiBUaGUgY3VycmVudCBwYWdlIGlzIGFsd2F5cyBjZW50ZXJlZCB0byBwcm92aWRlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIHByZXZpb3VzIGFuZCBuZXh0IHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRQYWdlcyhcbiAgICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSxcbiAgICBwYWdlQ291bnQ6IG51bWJlcixcbiAgICBjdXJyZW50OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFN0YXJ0T2ZSYW5nZShwYWdlQ291bnQsIGN1cnJlbnQpO1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMuY29uZmlnLnJhbmdlQ291bnQsIHBhZ2VDb3VudCk7XG5cbiAgICBBcnJheS5mcm9tKEFycmF5KG1heCkpLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgIHBhZ2VzLnB1c2goe1xuICAgICAgICBudW1iZXI6IGkgKyBzdGFydCxcbiAgICAgICAgbGFiZWw6IFN0cmluZyhpICsgc3RhcnQgKyAxKSxcbiAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLlBBR0UsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGRvdHMgYmVmb3JlIGFuZCBhZnRlciB0aGUgZ2l2ZW4gcGFnZXMsIGlmIGNvbmZpZ3VyZWQgKGRlZmF1bHRzIHRvIHRydWUpLlxuICAgKiBJZiB0aGUgZG90cyBvbmx5IHJlcHJlc2VudCBhIHNpbmdsZSBwYWdlLCB0aGUgcGFnZSBudW1iZXIgaXMgYWRkZWQgaW5zdGVhZCBvZlxuICAgKiB0aGUgZG90cywgdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIHJlcXVpcmVzIGRvdHMgYWx3YXlzLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkRG90cyhwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmFkZERvdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRGaXJzdEdhcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0SXRlbU51bWJlciA9IHBhZ2VzWzBdLm51bWJlcjtcbiAgICAgIGNvbnN0IGdhcE51bWJlciA9IHRoaXMuY29uZmlnLmFkZEZpcnN0ID8gMSA6IDA7XG4gICAgICBpZiAoZmlyc3RJdGVtTnVtYmVyID4gZ2FwTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGlzR2FwID1cbiAgICAgICAgICAhdGhpcy5jb25maWcuc3Vic3RpdHV0ZURvdHNGb3JTaW5ndWxhclBhZ2UgfHxcbiAgICAgICAgICBmaXJzdEl0ZW1OdW1iZXIgIT09IGdhcE51bWJlciArIDE7XG4gICAgICAgIGNvbnN0IGlzU3Vic3RpdHVlZCA9XG4gICAgICAgICAgdGhpcy5jb25maWcuYWRkRmlyc3QgJiZcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zdWJzdGl0dXRlRG90c0ZvclNpbmd1bGFyUGFnZSAmJlxuICAgICAgICAgIGdhcE51bWJlciA9PT0gMDtcbiAgICAgICAgY29uc3QgdHlwZSA9IGlzR2FwXG4gICAgICAgICAgPyBQYWdpbmF0aW9uSXRlbVR5cGUuR0FQXG4gICAgICAgICAgOiBpc1N1YnN0aXR1ZWRcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5GSVJTVFxuICAgICAgICAgIDogUGFnaW5hdGlvbkl0ZW1UeXBlLlBBR0U7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IGlzR2FwID8gdGhpcy5jb25maWcuZG90c0xhYmVsIDogU3RyaW5nKGdhcE51bWJlciArIDEpLFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzR2FwID8gbnVsbCA6IHsgbnVtYmVyOiBnYXBOdW1iZXIgfVxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRMYXN0R2FwID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dFBhZ2VOdW1iZXIgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXS5udW1iZXIgKyAxO1xuICAgICAgY29uc3QgbGFzdCA9IHBhZ2VDb3VudCAtICh0aGlzLmNvbmZpZy5hZGRMYXN0ID8gMiA6IDEpO1xuICAgICAgaWYgKG5leHRQYWdlTnVtYmVyIDw9IGxhc3QpIHtcbiAgICAgICAgY29uc3QgaXNTdWJzdGl0dWVkID1cbiAgICAgICAgICB0aGlzLmNvbmZpZy5hZGRMYXN0ICYmXG4gICAgICAgICAgdGhpcy5jb25maWcuc3Vic3RpdHV0ZURvdHNGb3JTaW5ndWxhclBhZ2UgJiZcbiAgICAgICAgICBuZXh0UGFnZU51bWJlciA9PT0gbGFzdDtcbiAgICAgICAgY29uc3QgaXNHYXAgPVxuICAgICAgICAgIG5leHRQYWdlTnVtYmVyIDxcbiAgICAgICAgICBwYWdlQ291bnQgLVxuICAgICAgICAgICAgKHRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlID8gMSA6IDApIC1cbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5hZGRMYXN0ID8gMSA6IDApO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBpc0dhcFxuICAgICAgICAgID8gUGFnaW5hdGlvbkl0ZW1UeXBlLkdBUFxuICAgICAgICAgIDogaXNTdWJzdGl0dWVkXG4gICAgICAgICAgPyBQYWdpbmF0aW9uSXRlbVR5cGUuTEFTVFxuICAgICAgICAgIDogUGFnaW5hdGlvbkl0ZW1UeXBlLlBBR0U7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IGlzR2FwID8gdGhpcy5jb25maWcuZG90c0xhYmVsIDogU3RyaW5nKG5leHRQYWdlTnVtYmVyICsgMSksXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNHYXAgPyBudWxsIDogeyBudW1iZXI6IG5leHRQYWdlTnVtYmVyIH1cbiAgICAgICAgICApLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgcGFnZXMudW5zaGlmdCguLi5hZGRGaXJzdEdhcCgpKTtcbiAgICBwYWdlcy5wdXNoKC4uLmFkZExhc3RHYXAoKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGxpbmtzIHRvIHRoZSBmaXJzdCBhbmQgbGFzdCBwYWdlLCBpZiBjb25maWd1cmVkIHRvIGRvIHNvLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkRmlyc3RMYXN0KHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdLCBwYWdlQ291bnQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hZGRGaXJzdCAmJiBwYWdlc1swXS5udW1iZXIgIT09IDApIHtcbiAgICAgIHBhZ2VzLnVuc2hpZnQoe1xuICAgICAgICBudW1iZXI6IDAsXG4gICAgICAgIGxhYmVsOiAnMScsXG4gICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5GSVJTVCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5hZGRMYXN0ICYmXG4gICAgICBwYWdlc1twYWdlcy5sZW5ndGggLSAxXS5udW1iZXIgIT09IHBhZ2VDb3VudCAtIDFcbiAgICApIHtcbiAgICAgIHBhZ2VzLnB1c2goe1xuICAgICAgICBudW1iZXI6IHBhZ2VDb3VudCAtIDEsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcocGFnZUNvdW50KSxcbiAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLkxBU1QsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGxpbmtzIHRvIHRoZSBzdGFydCwgcHJldmlvdXMsIG5leHQgYW5kIGxhc3QgcGFnZSwgaWYgY29uZmlndXJlZCB0byBkbyBzby5cbiAgICogVGhlIG9yZGVyIG9mIHRoZSBsaW5rcyBjYW4gYmUgY29uZmlndXJlZCBieSB1c2luZyB0aGUge0BsaW5rIFBhZ2luYXRpb25Db25maWd9LFxuICAgKiB1c2luZyB0aGUgYFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb25gIChgQkVGT1JFYCBvciBgQUZURVJgKS5cbiAgICogVGhlIGBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uYCBhbGxvd3MgZm9yIDMgZmxhdm91cnM6XG4gICAqXG4gICAqIC0gYnkgZGVmYXVsdCB0aGUgcGFnaW5hdGlvbiBzdGFydHMgd2l0aCBzdGFydCBhbmQgcHJldmlvdXMgYW5kIGVuZHMgd2l0aCB0aGUgbmV4dCBhbmQgZW5kIGxpbmtzXG4gICAqIC0gQkVGT1JFIOKAk8KgYWxsIG5hdmlnYXRpb24gbGlua3MgYXJlIGFkZGVkIGluIHRoZSBmcm9udCBvZiB0aGUgcGFnaW5hdGlvbiBsaXN0XG4gICAqIC0gQUZURVIg4oCTwqBhbGwgbmF2aWdhdGlvbiBsaW5rcyBhcmUgcHVzaGVkIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2luYXRpb24gbGlzdFxuICAgKlxuICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkXG4gICAqXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkTmF2aWdhdGlvbihcbiAgICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSxcbiAgICBwYWdlQ291bnQ6IG51bWJlcixcbiAgICBjdXJyZW50OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5nZXRCZWZvcmVMaW5rcyhjdXJyZW50KTtcbiAgICBjb25zdCBhZnRlciA9IHRoaXMuZ2V0QWZ0ZXIocGFnZUNvdW50LCBjdXJyZW50KTtcbiAgICBjb25zdCBwb3MgPSB0aGlzLmNvbmZpZy5uYXZpZ2F0aW9uUG9zaXRpb247XG4gICAgaWYgKCFwb3MgfHwgcG9zID09PSBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLkFTSURFKSB7XG4gICAgICBwYWdlcy51bnNoaWZ0KC4uLmJlZm9yZSk7XG4gICAgICBwYWdlcy5wdXNoKC4uLmFmdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBvcyA9PT0gUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbi5CRUZPUkUpIHtcbiAgICAgICAgcGFnZXMudW5zaGlmdCguLi5iZWZvcmUsIC4uLmFmdGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3MgPT09IFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb24uQUZURVIpIHtcbiAgICAgICAgcGFnZXMucHVzaCguLi5iZWZvcmUsIC4uLmFmdGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhcnQgYW5kIHByZXZpb3VzIGxpbmtzLCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRCZWZvcmVMaW5rcyhjdXJyZW50OiBudW1iZXIpOiBQYWdpbmF0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jb25maWcuYWRkU3RhcnQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcuc3RhcnRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5TVEFSVCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnQgPiAwID8geyBudW1iZXI6IDAgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goc3RhcnQoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZy5hZGRQcmV2aW91cykge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5wcmV2aW91c0xhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLlBSRVZJT1VTLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA+IDAgPyB7IG51bWJlcjogY3VycmVudCAtIDEgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2gocHJldmlvdXMoKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5leHQgYW5kIGVuZCBsaW5rcywgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0QWZ0ZXIocGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IFBhZ2luYXRpb25JdGVtW10ge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5hZGROZXh0KSB7XG4gICAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcubmV4dExhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLk5FWFQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXJyZW50IDwgcGFnZUNvdW50IC0gMSA/IHsgbnVtYmVyOiBjdXJyZW50ICsgMSB9IDogbnVsbFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChuZXh0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWcuYWRkRW5kKSB7XG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5lbmRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5FTkQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXJyZW50IDwgcGFnZUNvdW50IC0gMSA/IHsgbnVtYmVyOiBwYWdlQ291bnQgLSAxIH0gOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKGVuZCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIGZpcnN0IHBhZ2Ugb2YgdGhlIHJhbmdlIHdlIG5lZWQgdG8gYnVpbGQuXG4gICAqIFRoaXMgaXMgdGhlIHBhZ2UgdGhhdCBpcyBsZWFkaW5nIHVwIHRvIHRoZSByYW5nZSBvZiB0aGVcbiAgICogY3VycmVudCBwYWdlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMuXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGFydE9mUmFuZ2UocGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvbmZpZy5yYW5nZUNvdW50IC0gMTtcbiAgICAvLyB0aGUgbGVhc3QgbnVtYmVyIG9mIHBhZ2VzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGN1cnJlbnRcbiAgICBjb25zdCBkZWx0YSA9IE1hdGgucm91bmQoY291bnQgLyAyKTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIHN0YXJ0IHdpdGggYXQgbGVhc3QgdGhlIGZpcnN0IHBhZ2VcbiAgICBjb25zdCBtaW5TdGFydCA9IE1hdGgubWF4KDAsIGN1cnJlbnQgLSBkZWx0YSk7XG4gICAgLy8gZW5zdXJlcyB0aGF0IHdlIHN0YXJ0IHdpdGggYXQgbGVhc3QgMSBhbmQgZG8gbm90IHBhc3MgdGhlIGxhc3QgcmFuZ2VcbiAgICBjb25zdCBtYXhTdGFydCA9IE1hdGgubWF4KDAsIHBhZ2VDb3VudCAtIGNvdW50IC0gMSk7XG5cbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBnZXQgYXQgbGVhc3QgYSBmdWxsIHJhbmdlIGF0IHRoZSBlbmRcbiAgICByZXR1cm4gTWF0aC5taW4obWF4U3RhcnQsIG1pblN0YXJ0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbmZpZygpOiBQYWdpbmF0aW9uT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICBGQUxMQkFDS19QQUdJTkFUSU9OX09QVElPTlMsXG4gICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcucGFnaW5hdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==
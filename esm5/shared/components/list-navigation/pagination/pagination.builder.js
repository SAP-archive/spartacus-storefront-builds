import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { PaginationConfig } from './config/pagination.config';
import { PaginationItemType, PaginationNavigationPosition, } from './pagination.model';
import * as i0 from "@angular/core";
import * as i1 from "./config/pagination.config";
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
 * There are various {@link PaginationConfig} options which can be used to configure
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
    PaginationBuilder.prototype.paginate = function (pageCount, current) {
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
    PaginationBuilder.prototype.addPages = function (pages, pageCount, current) {
        var start = this.getStartOfRange(pageCount, current);
        var max = Math.min(this.config.rangeCount, pageCount);
        Array.from(Array(max)).forEach(function (_, i) {
            pages.push({
                number: i + start,
                label: String(i + start + 1),
                type: PaginationItemType.PAGE,
            });
        });
    };
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     */
    PaginationBuilder.prototype.addDots = function (pages, pageCount) {
        var _this = this;
        if (!this.config.addDots) {
            return;
        }
        var addFirstGap = function () {
            var firstItemNumber = pages[0].number;
            var gapNumber = _this.config.addFirst ? 1 : 0;
            if (firstItemNumber > gapNumber) {
                var isGap = !_this.config.substituteDotsForSingularPage ||
                    firstItemNumber !== gapNumber + 1;
                var isSubstitued = _this.config.addFirst &&
                    _this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
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
        };
        var addLastGap = function () {
            var nextPageNumber = pages[pages.length - 1].number + 1;
            var last = pageCount - (_this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                var isSubstitued = _this.config.addLast &&
                    _this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                var isGap = nextPageNumber <
                    pageCount -
                        (_this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (_this.config.addLast ? 1 : 0);
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
        };
        pages.unshift.apply(pages, __spread(addFirstGap()));
        pages.push.apply(pages, __spread(addLastGap()));
    };
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     *
     */
    PaginationBuilder.prototype.addFirstLast = function (pages, pageCount) {
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
    PaginationBuilder.prototype.addNavigation = function (pages, pageCount, current) {
        var before = this.getBeforeLinks(current);
        var after = this.getAfter(pageCount, current);
        var pos = this.config.navigationPosition;
        if (!pos || pos === PaginationNavigationPosition.ASIDE) {
            pages.unshift.apply(pages, __spread(before));
            pages.push.apply(pages, __spread(after));
        }
        else {
            if (pos === PaginationNavigationPosition.BEFORE) {
                pages.unshift.apply(pages, __spread(before, after));
            }
            if (pos === PaginationNavigationPosition.AFTER) {
                pages.push.apply(pages, __spread(before, after));
            }
        }
    };
    /**
     * Returns the start and previous links, if applicable.
     */
    PaginationBuilder.prototype.getBeforeLinks = function (current) {
        var _this = this;
        var list = [];
        if (this.config.addStart) {
            var start = function () {
                return Object.assign({
                    label: _this.config.startLabel,
                    type: PaginationItemType.START,
                }, current > 0 ? { number: 0 } : null);
            };
            list.push(start());
        }
        if (this.config.addPrevious) {
            var previous = function () {
                return Object.assign({
                    label: _this.config.previousLabel,
                    type: PaginationItemType.PREVIOUS,
                }, current > 0 ? { number: current - 1 } : null);
            };
            list.push(previous());
        }
        return list;
    };
    /**
     * Returns the next and end links, if applicable.
     */
    PaginationBuilder.prototype.getAfter = function (pageCount, current) {
        var _this = this;
        var list = [];
        if (this.config.addNext) {
            var next = function () {
                return Object.assign({
                    label: _this.config.nextLabel,
                    type: PaginationItemType.NEXT,
                }, current < pageCount - 1 ? { number: current + 1 } : null);
            };
            list.push(next());
        }
        if (this.config.addEnd) {
            var end = function () {
                return Object.assign({
                    label: _this.config.endLabel,
                    type: PaginationItemType.END,
                }, current < pageCount - 1 ? { number: pageCount - 1 } : null);
            };
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
    PaginationBuilder.prototype.getStartOfRange = function (pageCount, current) {
        var count = this.config.rangeCount - 1;
        // the least number of pages before and after the current
        var delta = Math.round(count / 2);
        // ensure that we start with at least the first page
        var minStart = Math.max(0, current - delta);
        // ensures that we start with at least 1 and do not pass the last range
        var maxStart = Math.max(0, pageCount - count - 1);
        // ensure that we get at least a full range at the end
        return Math.min(maxStart, minStart);
    };
    Object.defineProperty(PaginationBuilder.prototype, "config", {
        get: function () {
            return Object.assign(FALLBACK_PAGINATION_OPTIONS, this.paginationConfig.pagination);
        },
        enumerable: true,
        configurable: true
    });
    PaginationBuilder.ctorParameters = function () { return [
        { type: PaginationConfig }
    ]; };
    PaginationBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginationBuilder_Factory() { return new PaginationBuilder(i0.ɵɵinject(i1.PaginationConfig)); }, token: PaginationBuilder, providedIn: "root" });
    PaginationBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PaginationBuilder);
    return PaginationBuilder;
}());
export { PaginationBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsNEJBQTRCLEdBRTdCLE1BQU0sb0JBQW9CLENBQUM7OztBQUU1QixJQUFNLDJCQUEyQixHQUFzQjtJQUNyRCxVQUFVLEVBQUUsQ0FBQztJQUNiLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEdBQUc7SUFDbEIsU0FBUyxFQUFFLEdBQUc7SUFDZCxRQUFRLEVBQUUsR0FBRztDQUNkLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFJSDtJQUNFLDJCQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFNUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsb0NBQVEsR0FBUixVQUFTLFNBQWlCLEVBQUUsT0FBZTtRQUN6QyxJQUFNLEtBQUssR0FBcUIsRUFBRSxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFD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QUFDLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0ssMkNBQWUsR0FBdkIsVUFBd0IsU0FBaUIsRUFBRSxPQUFlO1FBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6Qyx5REFBeUQ7UUFDekQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFcEMsb0RBQW9EO1FBQ3BELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5Qyx1RUFBdUU7UUFDdkUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwRCxzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQVkscUNBQU07YUFBbEI7WUFDRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2xCLDJCQUEyQixFQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUNqQyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7O2dCQTFSdUMsZ0JBQWdCOzs7SUFEN0MsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0E0UjdCOzRCQXpVRDtDQXlVQyxBQTVSRCxJQTRSQztTQTVSWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcGFnaW5hdGlvbi5jb25maWcnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdGlvbkl0ZW0sXG4gIFBhZ2luYXRpb25JdGVtVHlwZSxcbiAgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbixcbiAgUGFnaW5hdGlvbk9wdGlvbnMsXG59IGZyb20gJy4vcGFnaW5hdGlvbi5tb2RlbCc7XG5cbmNvbnN0IEZBTExCQUNLX1BBR0lOQVRJT05fT1BUSU9OUzogUGFnaW5hdGlvbk9wdGlvbnMgPSB7XG4gIHJhbmdlQ291bnQ6IDMsXG4gIGRvdHNMYWJlbDogJy4uLicsXG4gIHN0YXJ0TGFiZWw6ICfCqycsXG4gIHByZXZpb3VzTGFiZWw6ICfigLknLFxuICBuZXh0TGFiZWw6ICfigLonLFxuICBlbmRMYWJlbDogJ8K7Jyxcbn07XG5cbi8qKlxuICogQnVpbGRzIGEgcGFnaW5hdGlvbiBzdHJ1Y3R1cmVzIGJhc2VkIG9uIGEgcGFnZUNvdW50IGFuZCBjdXJyZW50IHBhZ2UgbnVtYmVyLlxuICogVGhlcmUgYXJlIHZhcmlvdXMge0BsaW5rIFBhZ2luYXRpb25Db25maWd9IG9wdGlvbnMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlXG4gKiB0aGUgYmVoYXZpb3VyIG9mIHRoZSBidWlsZC4gQWx0ZXJuYXRpdmVseSwgQ1NTIGNhbiBiZSB1c2VkIHRvIGZ1cnRoZXIgY3VzdG9taXNlXG4gKiB0aGUgcGFnaW5hdGlvbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqIFRoZSBmdWxsIGJsb3duIHBhZ2luYXRpb24gaXRlbXMgY29udGFpbiB0aGUgZm9sbG93IGVsZW1lbnRzOlxuICpcbiAqIGDCqyDigLkgMSAuLi4gNCAoNSkgNiAuLi4gOSDigLogwrtgXG4gKlxuICogVGhpcyBpbmNsdWRlcyBwYWdpbmF0aW9uIGl0ZW1zIHRvIHRoZSBmb2xsb3dpbmcgcGFnZXM6XG4gKiAtIHN0YXJ0IHBhZ2VcbiAqIC0gcHJldmlvdXMgcGFnZVxuICogLSBmaXJzdCBwYWdlXG4gKiAtIHBhZ2UgcmFuZ2VcbiAqIC0gbGFzdCBwYWdlXG4gKiAtIG5leHQgcGFnZVxuICogLSBlbmQgcGFnZVxuICpcbiAqIEFsbCBvZiB0aG9zZSBsaW5rcyBhcmUgY29uZmlndXJhYmxlLCBpbmNsdWRpbmcgdGhlIHNpemUgb2YgdGhlIHBhZ2UgcmFuZ2UuXG4gKiBUaGUgY3VycmVudCBwYWdlIHdpbGwgYWx3YXlzIGJlIGNlbnRlcmVkIGluIHRoZSBwYWdlIHJhbmdlIHRvIHByb3ZpZGUgZGlyZWN0IGFjY2Vzc1xuICogdG8gdGhlIHByZXZpb3VzIGFuZCBuZXh0IHBhZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBsaXN0IG9mIGBQYWdpbmF0aW9uSXRlbWAuIFRoZSBnaXZlIHBhZ2VDb3VudCBhbmQgY3VycmVudCBhcmUgdXNlZFxuICAgKiB0byBidWlsZCBvdXQgdGhlIGZ1bGwgcGFnaW5hdGlvbi4gVGhlcmUgYXJlIHZhcmlvdXMge0BsaW5rIFBhZ2luYXRpb25Db25maWd9IG9wdGlvbnNcbiAgICogd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGJ1aWxkLiBBbHRlcm5hdGl2ZWx5LCBDU1NcbiAgICogY2FuIGJlIHVzZWQgdG8gZnVydGhlciBzcGVjaWFsaXplIHZpc2liaWxpdHkgb2YgdGhlIHBhZ2luYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBgUGFnaW5hdGlvbkl0ZW1gXG4gICAqL1xuICBwYWdpbmF0ZShwYWdlQ291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogUGFnaW5hdGlvbkl0ZW1bXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10gPSBbXTtcbiAgICBpZiAocGFnZUNvdW50IDwgMikge1xuICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgIH1cbiAgICB0aGlzLmFkZFBhZ2VzKHBhZ2VzLCBwYWdlQ291bnQsIGN1cnJlbnQpO1xuICAgIHRoaXMuYWRkRG90cyhwYWdlcywgcGFnZUNvdW50KTtcbiAgICB0aGlzLmFkZEZpcnN0TGFzdChwYWdlcywgcGFnZUNvdW50KTtcbiAgICB0aGlzLmFkZE5hdmlnYXRpb24ocGFnZXMsIHBhZ2VDb3VudCwgY3VycmVudCk7XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlIHdpdGggc3Vycm91bmRpbmcgcGFnZXMgKGJhc2VkIG9uIHRoZSBgY29uZmlnLnJhbmdlQ291bnRgKS5cbiAgICogVGhlIGN1cnJlbnQgcGFnZSBpcyBhbHdheXMgY2VudGVyZWQgdG8gcHJvdmlkZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBwYWdlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkUGFnZXMoXG4gICAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10sXG4gICAgcGFnZUNvdW50OiBudW1iZXIsXG4gICAgY3VycmVudDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5nZXRTdGFydE9mUmFuZ2UocGFnZUNvdW50LCBjdXJyZW50KTtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1pbih0aGlzLmNvbmZpZy5yYW5nZUNvdW50LCBwYWdlQ291bnQpO1xuXG4gICAgQXJyYXkuZnJvbShBcnJheShtYXgpKS5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgbnVtYmVyOiBpICsgc3RhcnQsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcoaSArIHN0YXJ0ICsgMSksXG4gICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBkb3RzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGdpdmVuIHBhZ2VzLCBpZiBjb25maWd1cmVkIChkZWZhdWx0cyB0byB0cnVlKS5cbiAgICogSWYgdGhlIGRvdHMgb25seSByZXByZXNlbnQgYSBzaW5nbGUgcGFnZSwgdGhlIHBhZ2UgbnVtYmVyIGlzIGFkZGVkIGluc3RlYWQgb2ZcbiAgICogdGhlIGRvdHMsIHVubGVzcyB0aGUgY29uZmlndXJhdGlvbiByZXF1aXJlcyBkb3RzIGFsd2F5cy5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFkZERvdHMocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hZGREb3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRmlyc3RHYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdEl0ZW1OdW1iZXIgPSBwYWdlc1swXS5udW1iZXI7XG4gICAgICBjb25zdCBnYXBOdW1iZXIgPSB0aGlzLmNvbmZpZy5hZGRGaXJzdCA/IDEgOiAwO1xuICAgICAgaWYgKGZpcnN0SXRlbU51bWJlciA+IGdhcE51bWJlcikge1xuICAgICAgICBjb25zdCBpc0dhcCA9XG4gICAgICAgICAgIXRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlIHx8XG4gICAgICAgICAgZmlyc3RJdGVtTnVtYmVyICE9PSBnYXBOdW1iZXIgKyAxO1xuICAgICAgICBjb25zdCBpc1N1YnN0aXR1ZWQgPVxuICAgICAgICAgIHRoaXMuY29uZmlnLmFkZEZpcnN0ICYmXG4gICAgICAgICAgdGhpcy5jb25maWcuc3Vic3RpdHV0ZURvdHNGb3JTaW5ndWxhclBhZ2UgJiZcbiAgICAgICAgICBnYXBOdW1iZXIgPT09IDA7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBpc0dhcFxuICAgICAgICAgID8gUGFnaW5hdGlvbkl0ZW1UeXBlLkdBUFxuICAgICAgICAgIDogaXNTdWJzdGl0dWVkXG4gICAgICAgICAgPyBQYWdpbmF0aW9uSXRlbVR5cGUuRklSU1RcbiAgICAgICAgICA6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBpc0dhcCA/IHRoaXMuY29uZmlnLmRvdHNMYWJlbCA6IFN0cmluZyhnYXBOdW1iZXIgKyAxKSxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0dhcCA/IG51bGwgOiB7IG51bWJlcjogZ2FwTnVtYmVyIH1cbiAgICAgICAgICApLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTGFzdEdhcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRQYWdlTnVtYmVyID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0ubnVtYmVyICsgMTtcbiAgICAgIGNvbnN0IGxhc3QgPSBwYWdlQ291bnQgLSAodGhpcy5jb25maWcuYWRkTGFzdCA/IDIgOiAxKTtcbiAgICAgIGlmIChuZXh0UGFnZU51bWJlciA8PSBsYXN0KSB7XG4gICAgICAgIGNvbnN0IGlzU3Vic3RpdHVlZCA9XG4gICAgICAgICAgdGhpcy5jb25maWcuYWRkTGFzdCAmJlxuICAgICAgICAgIHRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlICYmXG4gICAgICAgICAgbmV4dFBhZ2VOdW1iZXIgPT09IGxhc3Q7XG4gICAgICAgIGNvbnN0IGlzR2FwID1cbiAgICAgICAgICBuZXh0UGFnZU51bWJlciA8XG4gICAgICAgICAgcGFnZUNvdW50IC1cbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5zdWJzdGl0dXRlRG90c0ZvclNpbmd1bGFyUGFnZSA/IDEgOiAwKSAtXG4gICAgICAgICAgICAodGhpcy5jb25maWcuYWRkTGFzdCA/IDEgOiAwKTtcblxuICAgICAgICBjb25zdCB0eXBlID0gaXNHYXBcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5HQVBcbiAgICAgICAgICA6IGlzU3Vic3RpdHVlZFxuICAgICAgICAgID8gUGFnaW5hdGlvbkl0ZW1UeXBlLkxBU1RcbiAgICAgICAgICA6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBpc0dhcCA/IHRoaXMuY29uZmlnLmRvdHNMYWJlbCA6IFN0cmluZyhuZXh0UGFnZU51bWJlciArIDEpLFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzR2FwID8gbnVsbCA6IHsgbnVtYmVyOiBuZXh0UGFnZU51bWJlciB9XG4gICAgICAgICAgKSxcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSByZXR1cm4gW107XG4gICAgfTtcblxuICAgIHBhZ2VzLnVuc2hpZnQoLi4uYWRkRmlyc3RHYXAoKSk7XG4gICAgcGFnZXMucHVzaCguLi5hZGRMYXN0R2FwKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsaW5rcyB0byB0aGUgZmlyc3QgYW5kIGxhc3QgcGFnZSwgaWYgY29uZmlndXJlZCB0byBkbyBzby5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZEZpcnN0TGFzdChwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYWRkRmlyc3QgJiYgcGFnZXNbMF0ubnVtYmVyICE9PSAwKSB7XG4gICAgICBwYWdlcy51bnNoaWZ0KHtcbiAgICAgICAgbnVtYmVyOiAwLFxuICAgICAgICBsYWJlbDogJzEnLFxuICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuRklSU1QsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuYWRkTGFzdCAmJlxuICAgICAgcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0ubnVtYmVyICE9PSBwYWdlQ291bnQgLSAxXG4gICAgKSB7XG4gICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgbnVtYmVyOiBwYWdlQ291bnQgLSAxLFxuICAgICAgICBsYWJlbDogU3RyaW5nKHBhZ2VDb3VudCksXG4gICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5MQVNULFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsaW5rcyB0byB0aGUgc3RhcnQsIHByZXZpb3VzLCBuZXh0IGFuZCBsYXN0IHBhZ2UsIGlmIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAqIFRoZSBvcmRlciBvZiB0aGUgbGlua3MgY2FuIGJlIGNvbmZpZ3VyZWQgYnkgdXNpbmcgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSxcbiAgICogdXNpbmcgdGhlIGBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uYCAoYEJFRk9SRWAgb3IgYEFGVEVSYCkuXG4gICAqIFRoZSBgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbmAgYWxsb3dzIGZvciAzIGZsYXZvdXJzOlxuICAgKlxuICAgKiAtIGJ5IGRlZmF1bHQgdGhlIHBhZ2luYXRpb24gc3RhcnRzIHdpdGggc3RhcnQgYW5kIHByZXZpb3VzIGFuZCBlbmRzIHdpdGggdGhlIG5leHQgYW5kIGVuZCBsaW5rc1xuICAgKiAtIEJFRk9SRSDigJPCoGFsbCBuYXZpZ2F0aW9uIGxpbmtzIGFyZSBhZGRlZCBpbiB0aGUgZnJvbnQgb2YgdGhlIHBhZ2luYXRpb24gbGlzdFxuICAgKiAtIEFGVEVSIOKAk8KgYWxsIG5hdmlnYXRpb24gbGlua3MgYXJlIHB1c2hlZCB0byB0aGUgZW5kIG9mIHRoZSBwYWdpbmF0aW9uIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgKlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZE5hdmlnYXRpb24oXG4gICAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10sXG4gICAgcGFnZUNvdW50OiBudW1iZXIsXG4gICAgY3VycmVudDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMuZ2V0QmVmb3JlTGlua3MoY3VycmVudCk7XG4gICAgY29uc3QgYWZ0ZXIgPSB0aGlzLmdldEFmdGVyKHBhZ2VDb3VudCwgY3VycmVudCk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5jb25maWcubmF2aWdhdGlvblBvc2l0aW9uO1xuICAgIGlmICghcG9zIHx8IHBvcyA9PT0gUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbi5BU0lERSkge1xuICAgICAgcGFnZXMudW5zaGlmdCguLi5iZWZvcmUpO1xuICAgICAgcGFnZXMucHVzaCguLi5hZnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwb3MgPT09IFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb24uQkVGT1JFKSB7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQoLi4uYmVmb3JlLCAuLi5hZnRlcik7XG4gICAgICB9XG4gICAgICBpZiAocG9zID09PSBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICAgIHBhZ2VzLnB1c2goLi4uYmVmb3JlLCAuLi5hZnRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IGFuZCBwcmV2aW91cyBsaW5rcywgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0QmVmb3JlTGlua3MoY3VycmVudDogbnVtYmVyKTogUGFnaW5hdGlvbkl0ZW1bXSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZFN0YXJ0KSB7XG4gICAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLnN0YXJ0TGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuU1RBUlQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXJyZW50ID4gMCA/IHsgbnVtYmVyOiAwIH0gOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKHN0YXJ0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWcuYWRkUHJldmlvdXMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcucHJldmlvdXNMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5QUkVWSU9VUyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnQgPiAwID8geyBudW1iZXI6IGN1cnJlbnQgLSAxIH0gOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKHByZXZpb3VzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuZXh0IGFuZCBlbmQgbGlua3MsIGlmIGFwcGxpY2FibGUuXG4gICAqL1xuICBwcml2YXRlIGdldEFmdGVyKHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBQYWdpbmF0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jb25maWcuYWRkTmV4dCkge1xuICAgICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLm5leHRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5ORVhULFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA8IHBhZ2VDb3VudCAtIDEgPyB7IG51bWJlcjogY3VycmVudCArIDEgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2gobmV4dCgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZEVuZCkge1xuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcuZW5kTGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuRU5ELFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA8IHBhZ2VDb3VudCAtIDEgPyB7IG51bWJlcjogcGFnZUNvdW50IC0gMSB9IDogbnVsbFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChlbmQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBmaXJzdCBwYWdlIG9mIHRoZSByYW5nZSB3ZSBuZWVkIHRvIGJ1aWxkLlxuICAgKiBUaGlzIGlzIHRoZSBwYWdlIHRoYXQgaXMgbGVhZGluZyB1cCB0byB0aGUgcmFuZ2Ugb2YgdGhlXG4gICAqIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzLlxuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RhcnRPZlJhbmdlKHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb25maWcucmFuZ2VDb3VudCAtIDE7XG4gICAgLy8gdGhlIGxlYXN0IG51bWJlciBvZiBwYWdlcyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBjdXJyZW50XG4gICAgY29uc3QgZGVsdGEgPSBNYXRoLnJvdW5kKGNvdW50IC8gMik7XG5cbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBzdGFydCB3aXRoIGF0IGxlYXN0IHRoZSBmaXJzdCBwYWdlXG4gICAgY29uc3QgbWluU3RhcnQgPSBNYXRoLm1heCgwLCBjdXJyZW50IC0gZGVsdGEpO1xuICAgIC8vIGVuc3VyZXMgdGhhdCB3ZSBzdGFydCB3aXRoIGF0IGxlYXN0IDEgYW5kIGRvIG5vdCBwYXNzIHRoZSBsYXN0IHJhbmdlXG4gICAgY29uc3QgbWF4U3RhcnQgPSBNYXRoLm1heCgwLCBwYWdlQ291bnQgLSBjb3VudCAtIDEpO1xuXG4gICAgLy8gZW5zdXJlIHRoYXQgd2UgZ2V0IGF0IGxlYXN0IGEgZnVsbCByYW5nZSBhdCB0aGUgZW5kXG4gICAgcmV0dXJuIE1hdGgubWluKG1heFN0YXJ0LCBtaW5TdGFydCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjb25maWcoKTogUGFnaW5hdGlvbk9wdGlvbnMge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgRkFMTEJBQ0tfUEFHSU5BVElPTl9PUFRJT05TLFxuICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnBhZ2luYXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=
import { Injectable } from '@angular/core';
import { PaginationConfig } from './config/pagination.config';
import { PaginationItemType, PaginationNavigationPosition, } from './pagination.model';
import * as i0 from "@angular/core";
import * as i1 from "./config/pagination.config";
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
 * There are various {@link PaginationConfig} options which can be used to configure
 * the behavior of the build. Alternatively, CSS can be used to further customize
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
    constructor(paginationConfig) {
        this.paginationConfig = paginationConfig;
    }
    /**
     * Builds a list of `PaginationItem`. The give pageCount and current are used
     * to build out the full pagination. There are various {@link PaginationConfig} options
     * which can be used to configure the behavior of the build. Alternatively, CSS
     * can be used to further specialize visibility of the pagination.
     *
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     * @returns An array of `PaginationItem`
     */
    paginate(pageCount, current) {
        const pages = [];
        if (!pageCount || pageCount < 2) {
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
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     */
    addPages(pages, pageCount, current) {
        const start = this.getStartOfRange(pageCount, current);
        const max = Math.min(this.config.rangeCount, pageCount);
        Array.from(Array(max)).forEach((_, i) => {
            pages.push({
                number: i + start,
                label: String(i + start + 1),
                type: PaginationItemType.PAGE,
            });
        });
    }
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     */
    addDots(pages, pageCount) {
        if (!this.config.addDots) {
            return;
        }
        const addFirstGap = () => {
            const firstItemNumber = pages[0].number;
            const gapNumber = this.config.addFirst ? 1 : 0;
            if (firstItemNumber > gapNumber) {
                const isGap = !this.config.substituteDotsForSingularPage ||
                    firstItemNumber !== gapNumber + 1;
                const isSubstituted = this.config.addFirst &&
                    this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
                const type = isGap
                    ? PaginationItemType.GAP
                    : isSubstituted
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
        };
        const addLastGap = () => {
            const nextPageNumber = pages[pages.length - 1].number + 1;
            const last = pageCount - (this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                const isSubstituted = this.config.addLast &&
                    this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                const isGap = nextPageNumber <
                    pageCount -
                        (this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (this.config.addLast ? 1 : 0);
                const type = isGap
                    ? PaginationItemType.GAP
                    : isSubstituted
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
        };
        pages.unshift(...addFirstGap());
        pages.push(...addLastGap());
    }
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     *
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
    addNavigation(pages, pageCount, current) {
        const before = this.getBeforeLinks(current);
        const after = this.getAfterLinks(pageCount, current);
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
     */
    getBeforeLinks(current) {
        const list = [];
        if (this.config.addStart) {
            const start = () => {
                return Object.assign({
                    label: this.config.startLabel,
                    type: PaginationItemType.START,
                }, current > 0 ? { number: 0 } : null);
            };
            list.push(start());
        }
        if (this.config.addPrevious) {
            const previous = () => {
                return Object.assign({
                    label: this.config.previousLabel,
                    type: PaginationItemType.PREVIOUS,
                }, current > 0 ? { number: current - 1 } : null);
            };
            list.push(previous());
        }
        return list;
    }
    /**
     * Returns the next and end links, if applicable.
     */
    getAfterLinks(pageCount, current) {
        const list = [];
        if (this.config.addNext) {
            const next = () => {
                return Object.assign({
                    label: this.config.nextLabel,
                    type: PaginationItemType.NEXT,
                }, current < pageCount - 1 ? { number: current + 1 } : null);
            };
            list.push(next());
        }
        if (this.config.addEnd) {
            const end = () => {
                return Object.assign({
                    label: this.config.endLabel,
                    type: PaginationItemType.END,
                }, current < pageCount - 1 ? { number: pageCount - 1 } : null);
            };
            list.push(end());
        }
        return list;
    }
    /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @param pageCount The total number of pages.
     * @param current The current page number, 0-index based.
     */
    getStartOfRange(pageCount, current) {
        const count = this.config.rangeCount - 1;
        // the least number of pages before and after the current
        const delta = Math.round(count / 2);
        // ensure that we start with at least the first page
        const minStart = Math.max(0, current - delta);
        // ensures that we start with at least 1 and do not pass the last range
        const maxStart = Math.max(0, pageCount - count - 1);
        // ensure that we get at least a full range at the end
        return Math.min(maxStart, minStart);
    }
    /**
     * Returns the pagination configuration. The configuration is driven by the
     * (default) application configuration.
     *
     * The default application is limited to adding the start and end link:
     * ```ts
     *   addStart: true,
     *   addEnd: true
     * ```
     *
     * The application configuration is however merged into the following static configuration:
     * ```ts
     * {
     *   rangeCount: 3,
     *   dotsLabel: '...',
     *   startLabel: '«',
     *   previousLabel: '‹',
     *   nextLabel: '›',
     *   endLabel: '»'
     * }
     * ```
     */
    get config() {
        return Object.assign(FALLBACK_PAGINATION_OPTIONS, this.paginationConfig.pagination);
    }
}
PaginationBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginationBuilder_Factory() { return new PaginationBuilder(i0.ɵɵinject(i1.PaginationConfig)); }, token: PaginationBuilder, providedIn: "root" });
PaginationBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PaginationBuilder.ctorParameters = () => [
    { type: PaginationConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUVMLGtCQUFrQixFQUNsQiw0QkFBNEIsR0FFN0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRTVCLE1BQU0sMkJBQTJCLEdBQXNCO0lBQ3JELFVBQVUsRUFBRSxDQUFDO0lBQ2IsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEdBQUc7SUFDZixhQUFhLEVBQUUsR0FBRztJQUNsQixTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTVEOzs7Ozs7Ozs7T0FTRztJQUNILFFBQVEsQ0FBQyxTQUFpQixFQUFFLE9BQWU7UUFDekMsTUFBTSxLQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMv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Q0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRCxDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNPLGVBQWUsQ0FBQyxTQUFpQixFQUFFLE9BQWU7UUFDMUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLHlEQUF5RDtRQUN6RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwQyxvREFBb0Q7UUFDcEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlDLHVFQUF1RTtRQUN2RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBELHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHO0lBQ0gsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FDbEIsMkJBQTJCLEVBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQ2pDLENBQUM7SUFDSixDQUFDOzs7O1lBdFRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBM0NRLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9wYWdpbmF0aW9uLmNvbmZpZyc7XG5pbXBvcnQge1xuICBQYWdpbmF0aW9uSXRlbSxcbiAgUGFnaW5hdGlvbkl0ZW1UeXBlLFxuICBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLFxuICBQYWdpbmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnLi9wYWdpbmF0aW9uLm1vZGVsJztcblxuY29uc3QgRkFMTEJBQ0tfUEFHSU5BVElPTl9PUFRJT05TOiBQYWdpbmF0aW9uT3B0aW9ucyA9IHtcbiAgcmFuZ2VDb3VudDogMyxcbiAgZG90c0xhYmVsOiAnLi4uJyxcbiAgc3RhcnRMYWJlbDogJ8KrJyxcbiAgcHJldmlvdXNMYWJlbDogJ+KAuScsXG4gIG5leHRMYWJlbDogJ+KAuicsXG4gIGVuZExhYmVsOiAnwrsnLFxufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBwYWdpbmF0aW9uIHN0cnVjdHVyZXMgYmFzZWQgb24gYSBwYWdlQ291bnQgYW5kIGN1cnJlbnQgcGFnZSBudW1iZXIuXG4gKiBUaGVyZSBhcmUgdmFyaW91cyB7QGxpbmsgUGFnaW5hdGlvbkNvbmZpZ30gb3B0aW9ucyB3aGljaCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmVcbiAqIHRoZSBiZWhhdmlvciBvZiB0aGUgYnVpbGQuIEFsdGVybmF0aXZlbHksIENTUyBjYW4gYmUgdXNlZCB0byBmdXJ0aGVyIGN1c3RvbWl6ZVxuICogdGhlIHBhZ2luYXRpb24uXG4gKlxuICogRXhhbXBsZXM6XG4gKiBUaGUgZnVsbCBibG93biBwYWdpbmF0aW9uIGl0ZW1zIGNvbnRhaW4gdGhlIGZvbGxvdyBlbGVtZW50czpcbiAqXG4gKiBgwqsg4oC5IDEgLi4uIDQgKDUpIDYgLi4uIDkg4oC6IMK7YFxuICpcbiAqIFRoaXMgaW5jbHVkZXMgcGFnaW5hdGlvbiBpdGVtcyB0byB0aGUgZm9sbG93aW5nIHBhZ2VzOlxuICogLSBzdGFydCBwYWdlXG4gKiAtIHByZXZpb3VzIHBhZ2VcbiAqIC0gZmlyc3QgcGFnZVxuICogLSBwYWdlIHJhbmdlXG4gKiAtIGxhc3QgcGFnZVxuICogLSBuZXh0IHBhZ2VcbiAqIC0gZW5kIHBhZ2VcbiAqXG4gKiBBbGwgb2YgdGhvc2UgbGlua3MgYXJlIGNvbmZpZ3VyYWJsZSwgaW5jbHVkaW5nIHRoZSBzaXplIG9mIHRoZSBwYWdlIHJhbmdlLlxuICogVGhlIGN1cnJlbnQgcGFnZSB3aWxsIGFsd2F5cyBiZSBjZW50ZXJlZCBpbiB0aGUgcGFnZSByYW5nZSB0byBwcm92aWRlIGRpcmVjdCBhY2Nlc3NcbiAqIHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBwYWdlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZykge31cblxuICAvKipcbiAgICogQnVpbGRzIGEgbGlzdCBvZiBgUGFnaW5hdGlvbkl0ZW1gLiBUaGUgZ2l2ZSBwYWdlQ291bnQgYW5kIGN1cnJlbnQgYXJlIHVzZWRcbiAgICogdG8gYnVpbGQgb3V0IHRoZSBmdWxsIHBhZ2luYXRpb24uIFRoZXJlIGFyZSB2YXJpb3VzIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSBvcHRpb25zXG4gICAqIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgdGhlIGJ1aWxkLiBBbHRlcm5hdGl2ZWx5LCBDU1NcbiAgICogY2FuIGJlIHVzZWQgdG8gZnVydGhlciBzcGVjaWFsaXplIHZpc2liaWxpdHkgb2YgdGhlIHBhZ2luYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBgUGFnaW5hdGlvbkl0ZW1gXG4gICAqL1xuICBwYWdpbmF0ZShwYWdlQ291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogUGFnaW5hdGlvbkl0ZW1bXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10gPSBbXTtcbiAgICBpZiAoIXBhZ2VDb3VudCB8fCBwYWdlQ291bnQgPCAyKSB7XG4gICAgICByZXR1cm4gcGFnZXM7XG4gICAgfVxuICAgIHRoaXMuYWRkUGFnZXMocGFnZXMsIHBhZ2VDb3VudCwgY3VycmVudCk7XG4gICAgdGhpcy5hZGREb3RzKHBhZ2VzLCBwYWdlQ291bnQpO1xuICAgIHRoaXMuYWRkRmlyc3RMYXN0KHBhZ2VzLCBwYWdlQ291bnQpO1xuICAgIHRoaXMuYWRkTmF2aWdhdGlvbihwYWdlcywgcGFnZUNvdW50LCBjdXJyZW50KTtcblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2Ugd2l0aCBzdXJyb3VuZGluZyBwYWdlcyAoYmFzZWQgb24gdGhlIGBjb25maWcucmFuZ2VDb3VudGApLlxuICAgKiBUaGUgY3VycmVudCBwYWdlIGlzIGFsd2F5cyBjZW50ZXJlZCB0byBwcm92aWRlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIHByZXZpb3VzIGFuZCBuZXh0IHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRQYWdlcyhcbiAgICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSxcbiAgICBwYWdlQ291bnQ6IG51bWJlcixcbiAgICBjdXJyZW50OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFN0YXJ0T2ZSYW5nZShwYWdlQ291bnQsIGN1cnJlbnQpO1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMuY29uZmlnLnJhbmdlQ291bnQsIHBhZ2VDb3VudCk7XG4gICAgQXJyYXkuZnJvbShBcnJheShtYXgpKS5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgbnVtYmVyOiBpICsgc3RhcnQsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcoaSArIHN0YXJ0ICsgMSksXG4gICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBkb3RzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGdpdmVuIHBhZ2VzLCBpZiBjb25maWd1cmVkIChkZWZhdWx0cyB0byB0cnVlKS5cbiAgICogSWYgdGhlIGRvdHMgb25seSByZXByZXNlbnQgYSBzaW5nbGUgcGFnZSwgdGhlIHBhZ2UgbnVtYmVyIGlzIGFkZGVkIGluc3RlYWQgb2ZcbiAgICogdGhlIGRvdHMsIHVubGVzcyB0aGUgY29uZmlndXJhdGlvbiByZXF1aXJlcyBkb3RzIGFsd2F5cy5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFkZERvdHMocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hZGREb3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRmlyc3RHYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdEl0ZW1OdW1iZXIgPSBwYWdlc1swXS5udW1iZXI7XG4gICAgICBjb25zdCBnYXBOdW1iZXIgPSB0aGlzLmNvbmZpZy5hZGRGaXJzdCA/IDEgOiAwO1xuICAgICAgaWYgKGZpcnN0SXRlbU51bWJlciA+IGdhcE51bWJlcikge1xuICAgICAgICBjb25zdCBpc0dhcCA9XG4gICAgICAgICAgIXRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlIHx8XG4gICAgICAgICAgZmlyc3RJdGVtTnVtYmVyICE9PSBnYXBOdW1iZXIgKyAxO1xuICAgICAgICBjb25zdCBpc1N1YnN0aXR1dGVkID1cbiAgICAgICAgICB0aGlzLmNvbmZpZy5hZGRGaXJzdCAmJlxuICAgICAgICAgIHRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlICYmXG4gICAgICAgICAgZ2FwTnVtYmVyID09PSAwO1xuICAgICAgICBjb25zdCB0eXBlID0gaXNHYXBcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5HQVBcbiAgICAgICAgICA6IGlzU3Vic3RpdHV0ZWRcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5GSVJTVFxuICAgICAgICAgIDogUGFnaW5hdGlvbkl0ZW1UeXBlLlBBR0U7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IGlzR2FwID8gdGhpcy5jb25maWcuZG90c0xhYmVsIDogU3RyaW5nKGdhcE51bWJlciArIDEpLFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzR2FwID8gbnVsbCA6IHsgbnVtYmVyOiBnYXBOdW1iZXIgfVxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRMYXN0R2FwID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dFBhZ2VOdW1iZXIgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXS5udW1iZXIgKyAxO1xuICAgICAgY29uc3QgbGFzdCA9IHBhZ2VDb3VudCAtICh0aGlzLmNvbmZpZy5hZGRMYXN0ID8gMiA6IDEpO1xuICAgICAgaWYgKG5leHRQYWdlTnVtYmVyIDw9IGxhc3QpIHtcbiAgICAgICAgY29uc3QgaXNTdWJzdGl0dXRlZCA9XG4gICAgICAgICAgdGhpcy5jb25maWcuYWRkTGFzdCAmJlxuICAgICAgICAgIHRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlICYmXG4gICAgICAgICAgbmV4dFBhZ2VOdW1iZXIgPT09IGxhc3Q7XG4gICAgICAgIGNvbnN0IGlzR2FwID1cbiAgICAgICAgICBuZXh0UGFnZU51bWJlciA8XG4gICAgICAgICAgcGFnZUNvdW50IC1cbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5zdWJzdGl0dXRlRG90c0ZvclNpbmd1bGFyUGFnZSA/IDEgOiAwKSAtXG4gICAgICAgICAgICAodGhpcy5jb25maWcuYWRkTGFzdCA/IDEgOiAwKTtcblxuICAgICAgICBjb25zdCB0eXBlID0gaXNHYXBcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5HQVBcbiAgICAgICAgICA6IGlzU3Vic3RpdHV0ZWRcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5MQVNUXG4gICAgICAgICAgOiBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogaXNHYXAgPyB0aGlzLmNvbmZpZy5kb3RzTGFiZWwgOiBTdHJpbmcobmV4dFBhZ2VOdW1iZXIgKyAxKSxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0dhcCA/IG51bGwgOiB7IG51bWJlcjogbmV4dFBhZ2VOdW1iZXIgfVxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgICBwYWdlcy51bnNoaWZ0KC4uLmFkZEZpcnN0R2FwKCkpO1xuICAgIHBhZ2VzLnB1c2goLi4uYWRkTGFzdEdhcCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbGlua3MgdG8gdGhlIGZpcnN0IGFuZCBsYXN0IHBhZ2UsIGlmIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICpcbiAgICovXG4gIHByb3RlY3RlZCBhZGRGaXJzdExhc3QocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZEZpcnN0ICYmIHBhZ2VzWzBdLm51bWJlciAhPT0gMCkge1xuICAgICAgcGFnZXMudW5zaGlmdCh7XG4gICAgICAgIG51bWJlcjogMCxcbiAgICAgICAgbGFiZWw6ICcxJyxcbiAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLkZJUlNULFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmFkZExhc3QgJiZcbiAgICAgIHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLm51bWJlciAhPT0gcGFnZUNvdW50IC0gMVxuICAgICkge1xuICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgIG51bWJlcjogcGFnZUNvdW50IC0gMSxcbiAgICAgICAgbGFiZWw6IFN0cmluZyhwYWdlQ291bnQpLFxuICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuTEFTVCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbGlua3MgdG8gdGhlIHN0YXJ0LCBwcmV2aW91cywgbmV4dCBhbmQgbGFzdCBwYWdlLCBpZiBjb25maWd1cmVkIHRvIGRvIHNvLlxuICAgKiBUaGUgb3JkZXIgb2YgdGhlIGxpbmtzIGNhbiBiZSBjb25maWd1cmVkIGJ5IHVzaW5nIHRoZSB7QGxpbmsgUGFnaW5hdGlvbkNvbmZpZ30sXG4gICAqIHVzaW5nIHRoZSBgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbmAgKGBCRUZPUkVgIG9yIGBBRlRFUmApLlxuICAgKiBUaGUgYFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb25gIGFsbG93cyBmb3IgMyBmbGF2b3VyczpcbiAgICpcbiAgICogLSBieSBkZWZhdWx0IHRoZSBwYWdpbmF0aW9uIHN0YXJ0cyB3aXRoIHN0YXJ0IGFuZCBwcmV2aW91cyBhbmQgZW5kcyB3aXRoIHRoZSBuZXh0IGFuZCBlbmQgbGlua3NcbiAgICogLSBCRUZPUkUg4oCTwqBhbGwgbmF2aWdhdGlvbiBsaW5rcyBhcmUgYWRkZWQgaW4gdGhlIGZyb250IG9mIHRoZSBwYWdpbmF0aW9uIGxpc3RcbiAgICogLSBBRlRFUiDigJPCoGFsbCBuYXZpZ2F0aW9uIGxpbmtzIGFyZSBwdXNoZWQgdG8gdGhlIGVuZCBvZiB0aGUgcGFnaW5hdGlvbiBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICpcbiAgICovXG4gIHByb3RlY3RlZCBhZGROYXZpZ2F0aW9uKFxuICAgIHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdLFxuICAgIHBhZ2VDb3VudDogbnVtYmVyLFxuICAgIGN1cnJlbnQ6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLmdldEJlZm9yZUxpbmtzKGN1cnJlbnQpO1xuICAgIGNvbnN0IGFmdGVyID0gdGhpcy5nZXRBZnRlckxpbmtzKHBhZ2VDb3VudCwgY3VycmVudCk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5jb25maWcubmF2aWdhdGlvblBvc2l0aW9uO1xuICAgIGlmICghcG9zIHx8IHBvcyA9PT0gUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbi5BU0lERSkge1xuICAgICAgcGFnZXMudW5zaGlmdCguLi5iZWZvcmUpO1xuICAgICAgcGFnZXMucHVzaCguLi5hZnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwb3MgPT09IFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb24uQkVGT1JFKSB7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQoLi4uYmVmb3JlLCAuLi5hZnRlcik7XG4gICAgICB9XG4gICAgICBpZiAocG9zID09PSBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICAgIHBhZ2VzLnB1c2goLi4uYmVmb3JlLCAuLi5hZnRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IGFuZCBwcmV2aW91cyBsaW5rcywgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRCZWZvcmVMaW5rcyhjdXJyZW50OiBudW1iZXIpOiBQYWdpbmF0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jb25maWcuYWRkU3RhcnQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcuc3RhcnRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5TVEFSVCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnQgPiAwID8geyBudW1iZXI6IDAgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goc3RhcnQoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZy5hZGRQcmV2aW91cykge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5wcmV2aW91c0xhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlLlBSRVZJT1VTLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA+IDAgPyB7IG51bWJlcjogY3VycmVudCAtIDEgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2gocHJldmlvdXMoKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5leHQgYW5kIGVuZCBsaW5rcywgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRBZnRlckxpbmtzKFxuICAgIHBhZ2VDb3VudDogbnVtYmVyLFxuICAgIGN1cnJlbnQ6IG51bWJlclxuICApOiBQYWdpbmF0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jb25maWcuYWRkTmV4dCkge1xuICAgICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLm5leHRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5ORVhULFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA8IHBhZ2VDb3VudCAtIDEgPyB7IG51bWJlcjogY3VycmVudCArIDEgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2gobmV4dCgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZEVuZCkge1xuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcuZW5kTGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuRU5ELFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA8IHBhZ2VDb3VudCAtIDEgPyB7IG51bWJlcjogcGFnZUNvdW50IC0gMSB9IDogbnVsbFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChlbmQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBmaXJzdCBwYWdlIG9mIHRoZSByYW5nZSB3ZSBuZWVkIHRvIGJ1aWxkLlxuICAgKiBUaGlzIGlzIHRoZSBwYWdlIHRoYXQgaXMgbGVhZGluZyB1cCB0byB0aGUgcmFuZ2Ugb2YgdGhlXG4gICAqIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzLlxuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTdGFydE9mUmFuZ2UocGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvbmZpZy5yYW5nZUNvdW50IC0gMTtcbiAgICAvLyB0aGUgbGVhc3QgbnVtYmVyIG9mIHBhZ2VzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGN1cnJlbnRcbiAgICBjb25zdCBkZWx0YSA9IE1hdGgucm91bmQoY291bnQgLyAyKTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIHN0YXJ0IHdpdGggYXQgbGVhc3QgdGhlIGZpcnN0IHBhZ2VcbiAgICBjb25zdCBtaW5TdGFydCA9IE1hdGgubWF4KDAsIGN1cnJlbnQgLSBkZWx0YSk7XG4gICAgLy8gZW5zdXJlcyB0aGF0IHdlIHN0YXJ0IHdpdGggYXQgbGVhc3QgMSBhbmQgZG8gbm90IHBhc3MgdGhlIGxhc3QgcmFuZ2VcbiAgICBjb25zdCBtYXhTdGFydCA9IE1hdGgubWF4KDAsIHBhZ2VDb3VudCAtIGNvdW50IC0gMSk7XG5cbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBnZXQgYXQgbGVhc3QgYSBmdWxsIHJhbmdlIGF0IHRoZSBlbmRcbiAgICByZXR1cm4gTWF0aC5taW4obWF4U3RhcnQsIG1pblN0YXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYWdpbmF0aW9uIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIGlzIGRyaXZlbiBieSB0aGVcbiAgICogKGRlZmF1bHQpIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IGFwcGxpY2F0aW9uIGlzIGxpbWl0ZWQgdG8gYWRkaW5nIHRoZSBzdGFydCBhbmQgZW5kIGxpbms6XG4gICAqIGBgYHRzXG4gICAqICAgYWRkU3RhcnQ6IHRydWUsXG4gICAqICAgYWRkRW5kOiB0cnVlXG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBpcyBob3dldmVyIG1lcmdlZCBpbnRvIHRoZSBmb2xsb3dpbmcgc3RhdGljIGNvbmZpZ3VyYXRpb246XG4gICAqIGBgYHRzXG4gICAqIHtcbiAgICogICByYW5nZUNvdW50OiAzLFxuICAgKiAgIGRvdHNMYWJlbDogJy4uLicsXG4gICAqICAgc3RhcnRMYWJlbDogJ8KrJyxcbiAgICogICBwcmV2aW91c0xhYmVsOiAn4oC5JyxcbiAgICogICBuZXh0TGFiZWw6ICfigLonLFxuICAgKiAgIGVuZExhYmVsOiAnwrsnXG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZygpOiBQYWdpbmF0aW9uT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICBGQUxMQkFDS19QQUdJTkFUSU9OX09QVElPTlMsXG4gICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcucGFnaW5hdGlvblxuICAgICk7XG4gIH1cbn1cbiJdfQ==
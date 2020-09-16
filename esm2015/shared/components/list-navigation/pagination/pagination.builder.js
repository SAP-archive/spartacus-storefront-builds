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
    constructor(paginationConfig) {
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
    paginate(pageCount, current) {
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
                const isSubstitued = this.config.addFirst &&
                    this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
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
        };
        const addLastGap = () => {
            const nextPageNumber = pages[pages.length - 1].number + 1;
            const last = pageCount - (this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                const isSubstitued = this.config.addLast &&
                    this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                const isGap = nextPageNumber <
                    pageCount -
                        (this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (this.config.addLast ? 1 : 0);
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
        const after = this.getAfter(pageCount, current);
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
    getAfter(pageCount, current) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUVMLGtCQUFrQixFQUNsQiw0QkFBNEIsR0FFN0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRTVCLE1BQU0sMkJBQTJCLEdBQXNCO0lBQ3JELFVBQVUsRUFBRSxDQUFDO0lBQ2IsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEdBQUc7SUFDZixhQUFhLEVBQUUsR0FBRztJQUNsQixTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTVEOzs7Ozs7Ozs7T0FTRztJQUNILFFBQVEsQ0FBQyxTQUFpQixFQUFFLE9BQWU7UUFDekMsTUFBTSxLQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFB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QUFJLENBQzNELENBQUM7WUFDSixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0ssZUFBZSxDQUFDLFNBQWlCLEVBQUUsT0FBZTtRQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekMseURBQXlEO1FBQ3pELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBDLG9EQUFvRDtRQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDOUMsdUVBQXVFO1FBQ3ZFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFcEQsc0RBQXNEO1FBQ3RELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQVksTUFBTTtRQUNoQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2xCLDJCQUEyQixFQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUNqQyxDQUFDO0lBQ0osQ0FBQzs7OztZQTlSRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTNDUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcGFnaW5hdGlvbi5jb25maWcnO1xuaW1wb3J0IHtcbiAgUGFnaW5hdGlvbkl0ZW0sXG4gIFBhZ2luYXRpb25JdGVtVHlwZSxcbiAgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbixcbiAgUGFnaW5hdGlvbk9wdGlvbnMsXG59IGZyb20gJy4vcGFnaW5hdGlvbi5tb2RlbCc7XG5cbmNvbnN0IEZBTExCQUNLX1BBR0lOQVRJT05fT1BUSU9OUzogUGFnaW5hdGlvbk9wdGlvbnMgPSB7XG4gIHJhbmdlQ291bnQ6IDMsXG4gIGRvdHNMYWJlbDogJy4uLicsXG4gIHN0YXJ0TGFiZWw6ICfCqycsXG4gIHByZXZpb3VzTGFiZWw6ICfigLknLFxuICBuZXh0TGFiZWw6ICfigLonLFxuICBlbmRMYWJlbDogJ8K7Jyxcbn07XG5cbi8qKlxuICogQnVpbGRzIGEgcGFnaW5hdGlvbiBzdHJ1Y3R1cmVzIGJhc2VkIG9uIGEgcGFnZUNvdW50IGFuZCBjdXJyZW50IHBhZ2UgbnVtYmVyLlxuICogVGhlcmUgYXJlIHZhcmlvdXMge0BsaW5rIFBhZ2luYXRpb25Db25maWd9IG9wdGlvbnMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlXG4gKiB0aGUgYmVoYXZpb3VyIG9mIHRoZSBidWlsZC4gQWx0ZXJuYXRpdmVseSwgQ1NTIGNhbiBiZSB1c2VkIHRvIGZ1cnRoZXIgY3VzdG9taXNlXG4gKiB0aGUgcGFnaW5hdGlvbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqIFRoZSBmdWxsIGJsb3duIHBhZ2luYXRpb24gaXRlbXMgY29udGFpbiB0aGUgZm9sbG93IGVsZW1lbnRzOlxuICpcbiAqIGDCqyDigLkgMSAuLi4gNCAoNSkgNiAuLi4gOSDigLogwrtgXG4gKlxuICogVGhpcyBpbmNsdWRlcyBwYWdpbmF0aW9uIGl0ZW1zIHRvIHRoZSBmb2xsb3dpbmcgcGFnZXM6XG4gKiAtIHN0YXJ0IHBhZ2VcbiAqIC0gcHJldmlvdXMgcGFnZVxuICogLSBmaXJzdCBwYWdlXG4gKiAtIHBhZ2UgcmFuZ2VcbiAqIC0gbGFzdCBwYWdlXG4gKiAtIG5leHQgcGFnZVxuICogLSBlbmQgcGFnZVxuICpcbiAqIEFsbCBvZiB0aG9zZSBsaW5rcyBhcmUgY29uZmlndXJhYmxlLCBpbmNsdWRpbmcgdGhlIHNpemUgb2YgdGhlIHBhZ2UgcmFuZ2UuXG4gKiBUaGUgY3VycmVudCBwYWdlIHdpbGwgYWx3YXlzIGJlIGNlbnRlcmVkIGluIHRoZSBwYWdlIHJhbmdlIHRvIHByb3ZpZGUgZGlyZWN0IGFjY2Vzc1xuICogdG8gdGhlIHByZXZpb3VzIGFuZCBuZXh0IHBhZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBsaXN0IG9mIGBQYWdpbmF0aW9uSXRlbWAuIFRoZSBnaXZlIHBhZ2VDb3VudCBhbmQgY3VycmVudCBhcmUgdXNlZFxuICAgKiB0byBidWlsZCBvdXQgdGhlIGZ1bGwgcGFnaW5hdGlvbi4gVGhlcmUgYXJlIHZhcmlvdXMge0BsaW5rIFBhZ2luYXRpb25Db25maWd9IG9wdGlvbnNcbiAgICogd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGJ1aWxkLiBBbHRlcm5hdGl2ZWx5LCBDU1NcbiAgICogY2FuIGJlIHVzZWQgdG8gZnVydGhlciBzcGVjaWFsaXplIHZpc2liaWxpdHkgb2YgdGhlIHBhZ2luYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBgUGFnaW5hdGlvbkl0ZW1gXG4gICAqL1xuICBwYWdpbmF0ZShwYWdlQ291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogUGFnaW5hdGlvbkl0ZW1bXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10gPSBbXTtcbiAgICBpZiAocGFnZUNvdW50IDwgMikge1xuICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgIH1cbiAgICB0aGlzLmFkZFBhZ2VzKHBhZ2VzLCBwYWdlQ291bnQsIGN1cnJlbnQpO1xuICAgIHRoaXMuYWRkRG90cyhwYWdlcywgcGFnZUNvdW50KTtcbiAgICB0aGlzLmFkZEZpcnN0TGFzdChwYWdlcywgcGFnZUNvdW50KTtcbiAgICB0aGlzLmFkZE5hdmlnYXRpb24ocGFnZXMsIHBhZ2VDb3VudCwgY3VycmVudCk7XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlIHdpdGggc3Vycm91bmRpbmcgcGFnZXMgKGJhc2VkIG9uIHRoZSBgY29uZmlnLnJhbmdlQ291bnRgKS5cbiAgICogVGhlIGN1cnJlbnQgcGFnZSBpcyBhbHdheXMgY2VudGVyZWQgdG8gcHJvdmlkZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBwYWdlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkUGFnZXMoXG4gICAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10sXG4gICAgcGFnZUNvdW50OiBudW1iZXIsXG4gICAgY3VycmVudDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5nZXRTdGFydE9mUmFuZ2UocGFnZUNvdW50LCBjdXJyZW50KTtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1pbih0aGlzLmNvbmZpZy5yYW5nZUNvdW50LCBwYWdlQ291bnQpO1xuXG4gICAgQXJyYXkuZnJvbShBcnJheShtYXgpKS5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgbnVtYmVyOiBpICsgc3RhcnQsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcoaSArIHN0YXJ0ICsgMSksXG4gICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBkb3RzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGdpdmVuIHBhZ2VzLCBpZiBjb25maWd1cmVkIChkZWZhdWx0cyB0byB0cnVlKS5cbiAgICogSWYgdGhlIGRvdHMgb25seSByZXByZXNlbnQgYSBzaW5nbGUgcGFnZSwgdGhlIHBhZ2UgbnVtYmVyIGlzIGFkZGVkIGluc3RlYWQgb2ZcbiAgICogdGhlIGRvdHMsIHVubGVzcyB0aGUgY29uZmlndXJhdGlvbiByZXF1aXJlcyBkb3RzIGFsd2F5cy5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFkZERvdHMocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hZGREb3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRmlyc3RHYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdEl0ZW1OdW1iZXIgPSBwYWdlc1swXS5udW1iZXI7XG4gICAgICBjb25zdCBnYXBOdW1iZXIgPSB0aGlzLmNvbmZpZy5hZGRGaXJzdCA/IDEgOiAwO1xuICAgICAgaWYgKGZpcnN0SXRlbU51bWJlciA+IGdhcE51bWJlcikge1xuICAgICAgICBjb25zdCBpc0dhcCA9XG4gICAgICAgICAgIXRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlIHx8XG4gICAgICAgICAgZmlyc3RJdGVtTnVtYmVyICE9PSBnYXBOdW1iZXIgKyAxO1xuICAgICAgICBjb25zdCBpc1N1YnN0aXR1ZWQgPVxuICAgICAgICAgIHRoaXMuY29uZmlnLmFkZEZpcnN0ICYmXG4gICAgICAgICAgdGhpcy5jb25maWcuc3Vic3RpdHV0ZURvdHNGb3JTaW5ndWxhclBhZ2UgJiZcbiAgICAgICAgICBnYXBOdW1iZXIgPT09IDA7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBpc0dhcFxuICAgICAgICAgID8gUGFnaW5hdGlvbkl0ZW1UeXBlLkdBUFxuICAgICAgICAgIDogaXNTdWJzdGl0dWVkXG4gICAgICAgICAgPyBQYWdpbmF0aW9uSXRlbVR5cGUuRklSU1RcbiAgICAgICAgICA6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBpc0dhcCA/IHRoaXMuY29uZmlnLmRvdHNMYWJlbCA6IFN0cmluZyhnYXBOdW1iZXIgKyAxKSxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0dhcCA/IG51bGwgOiB7IG51bWJlcjogZ2FwTnVtYmVyIH1cbiAgICAgICAgICApLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTGFzdEdhcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRQYWdlTnVtYmVyID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0ubnVtYmVyICsgMTtcbiAgICAgIGNvbnN0IGxhc3QgPSBwYWdlQ291bnQgLSAodGhpcy5jb25maWcuYWRkTGFzdCA/IDIgOiAxKTtcbiAgICAgIGlmIChuZXh0UGFnZU51bWJlciA8PSBsYXN0KSB7XG4gICAgICAgIGNvbnN0IGlzU3Vic3RpdHVlZCA9XG4gICAgICAgICAgdGhpcy5jb25maWcuYWRkTGFzdCAmJlxuICAgICAgICAgIHRoaXMuY29uZmlnLnN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlICYmXG4gICAgICAgICAgbmV4dFBhZ2VOdW1iZXIgPT09IGxhc3Q7XG4gICAgICAgIGNvbnN0IGlzR2FwID1cbiAgICAgICAgICBuZXh0UGFnZU51bWJlciA8XG4gICAgICAgICAgcGFnZUNvdW50IC1cbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5zdWJzdGl0dXRlRG90c0ZvclNpbmd1bGFyUGFnZSA/IDEgOiAwKSAtXG4gICAgICAgICAgICAodGhpcy5jb25maWcuYWRkTGFzdCA/IDEgOiAwKTtcblxuICAgICAgICBjb25zdCB0eXBlID0gaXNHYXBcbiAgICAgICAgICA/IFBhZ2luYXRpb25JdGVtVHlwZS5HQVBcbiAgICAgICAgICA6IGlzU3Vic3RpdHVlZFxuICAgICAgICAgID8gUGFnaW5hdGlvbkl0ZW1UeXBlLkxBU1RcbiAgICAgICAgICA6IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBpc0dhcCA/IHRoaXMuY29uZmlnLmRvdHNMYWJlbCA6IFN0cmluZyhuZXh0UGFnZU51bWJlciArIDEpLFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzR2FwID8gbnVsbCA6IHsgbnVtYmVyOiBuZXh0UGFnZU51bWJlciB9XG4gICAgICAgICAgKSxcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSByZXR1cm4gW107XG4gICAgfTtcblxuICAgIHBhZ2VzLnVuc2hpZnQoLi4uYWRkRmlyc3RHYXAoKSk7XG4gICAgcGFnZXMucHVzaCguLi5hZGRMYXN0R2FwKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsaW5rcyB0byB0aGUgZmlyc3QgYW5kIGxhc3QgcGFnZSwgaWYgY29uZmlndXJlZCB0byBkbyBzby5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZEZpcnN0TGFzdChwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYWRkRmlyc3QgJiYgcGFnZXNbMF0ubnVtYmVyICE9PSAwKSB7XG4gICAgICBwYWdlcy51bnNoaWZ0KHtcbiAgICAgICAgbnVtYmVyOiAwLFxuICAgICAgICBsYWJlbDogJzEnLFxuICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuRklSU1QsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuYWRkTGFzdCAmJlxuICAgICAgcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0ubnVtYmVyICE9PSBwYWdlQ291bnQgLSAxXG4gICAgKSB7XG4gICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgbnVtYmVyOiBwYWdlQ291bnQgLSAxLFxuICAgICAgICBsYWJlbDogU3RyaW5nKHBhZ2VDb3VudCksXG4gICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5MQVNULFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsaW5rcyB0byB0aGUgc3RhcnQsIHByZXZpb3VzLCBuZXh0IGFuZCBsYXN0IHBhZ2UsIGlmIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAqIFRoZSBvcmRlciBvZiB0aGUgbGlua3MgY2FuIGJlIGNvbmZpZ3VyZWQgYnkgdXNpbmcgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSxcbiAgICogdXNpbmcgdGhlIGBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uYCAoYEJFRk9SRWAgb3IgYEFGVEVSYCkuXG4gICAqIFRoZSBgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbmAgYWxsb3dzIGZvciAzIGZsYXZvdXJzOlxuICAgKlxuICAgKiAtIGJ5IGRlZmF1bHQgdGhlIHBhZ2luYXRpb24gc3RhcnRzIHdpdGggc3RhcnQgYW5kIHByZXZpb3VzIGFuZCBlbmRzIHdpdGggdGhlIG5leHQgYW5kIGVuZCBsaW5rc1xuICAgKiAtIEJFRk9SRSDigJPCoGFsbCBuYXZpZ2F0aW9uIGxpbmtzIGFyZSBhZGRlZCBpbiB0aGUgZnJvbnQgb2YgdGhlIHBhZ2luYXRpb24gbGlzdFxuICAgKiAtIEFGVEVSIOKAk8KgYWxsIG5hdmlnYXRpb24gbGlua3MgYXJlIHB1c2hlZCB0byB0aGUgZW5kIG9mIHRoZSBwYWdpbmF0aW9uIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgKlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZE5hdmlnYXRpb24oXG4gICAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10sXG4gICAgcGFnZUNvdW50OiBudW1iZXIsXG4gICAgY3VycmVudDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMuZ2V0QmVmb3JlTGlua3MoY3VycmVudCk7XG4gICAgY29uc3QgYWZ0ZXIgPSB0aGlzLmdldEFmdGVyKHBhZ2VDb3VudCwgY3VycmVudCk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5jb25maWcubmF2aWdhdGlvblBvc2l0aW9uO1xuICAgIGlmICghcG9zIHx8IHBvcyA9PT0gUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbi5BU0lERSkge1xuICAgICAgcGFnZXMudW5zaGlmdCguLi5iZWZvcmUpO1xuICAgICAgcGFnZXMucHVzaCguLi5hZnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwb3MgPT09IFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb24uQkVGT1JFKSB7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQoLi4uYmVmb3JlLCAuLi5hZnRlcik7XG4gICAgICB9XG4gICAgICBpZiAocG9zID09PSBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICAgIHBhZ2VzLnB1c2goLi4uYmVmb3JlLCAuLi5hZnRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IGFuZCBwcmV2aW91cyBsaW5rcywgaWYgYXBwbGljYWJsZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0QmVmb3JlTGlua3MoY3VycmVudDogbnVtYmVyKTogUGFnaW5hdGlvbkl0ZW1bXSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZFN0YXJ0KSB7XG4gICAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLnN0YXJ0TGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuU1RBUlQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXJyZW50ID4gMCA/IHsgbnVtYmVyOiAwIH0gOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKHN0YXJ0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWcuYWRkUHJldmlvdXMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcucHJldmlvdXNMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5QUkVWSU9VUyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1cnJlbnQgPiAwID8geyBudW1iZXI6IGN1cnJlbnQgLSAxIH0gOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKHByZXZpb3VzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuZXh0IGFuZCBlbmQgbGlua3MsIGlmIGFwcGxpY2FibGUuXG4gICAqL1xuICBwcml2YXRlIGdldEFmdGVyKHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBQYWdpbmF0aW9uSXRlbVtdIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jb25maWcuYWRkTmV4dCkge1xuICAgICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLm5leHRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZS5ORVhULFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA8IHBhZ2VDb3VudCAtIDEgPyB7IG51bWJlcjogY3VycmVudCArIDEgfSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2gobmV4dCgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnLmFkZEVuZCkge1xuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5jb25maWcuZW5kTGFiZWwsXG4gICAgICAgICAgICB0eXBlOiBQYWdpbmF0aW9uSXRlbVR5cGUuRU5ELFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudCA8IHBhZ2VDb3VudCAtIDEgPyB7IG51bWJlcjogcGFnZUNvdW50IC0gMSB9IDogbnVsbFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChlbmQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBmaXJzdCBwYWdlIG9mIHRoZSByYW5nZSB3ZSBuZWVkIHRvIGJ1aWxkLlxuICAgKiBUaGlzIGlzIHRoZSBwYWdlIHRoYXQgaXMgbGVhZGluZyB1cCB0byB0aGUgcmFuZ2Ugb2YgdGhlXG4gICAqIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzLlxuICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RhcnRPZlJhbmdlKHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb25maWcucmFuZ2VDb3VudCAtIDE7XG4gICAgLy8gdGhlIGxlYXN0IG51bWJlciBvZiBwYWdlcyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBjdXJyZW50XG4gICAgY29uc3QgZGVsdGEgPSBNYXRoLnJvdW5kKGNvdW50IC8gMik7XG5cbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBzdGFydCB3aXRoIGF0IGxlYXN0IHRoZSBmaXJzdCBwYWdlXG4gICAgY29uc3QgbWluU3RhcnQgPSBNYXRoLm1heCgwLCBjdXJyZW50IC0gZGVsdGEpO1xuICAgIC8vIGVuc3VyZXMgdGhhdCB3ZSBzdGFydCB3aXRoIGF0IGxlYXN0IDEgYW5kIGRvIG5vdCBwYXNzIHRoZSBsYXN0IHJhbmdlXG4gICAgY29uc3QgbWF4U3RhcnQgPSBNYXRoLm1heCgwLCBwYWdlQ291bnQgLSBjb3VudCAtIDEpO1xuXG4gICAgLy8gZW5zdXJlIHRoYXQgd2UgZ2V0IGF0IGxlYXN0IGEgZnVsbCByYW5nZSBhdCB0aGUgZW5kXG4gICAgcmV0dXJuIE1hdGgubWluKG1heFN0YXJ0LCBtaW5TdGFydCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjb25maWcoKTogUGFnaW5hdGlvbk9wdGlvbnMge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgRkFMTEJBQ0tfUEFHSU5BVElPTl9PUFRJT05TLFxuICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnBhZ2luYXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=
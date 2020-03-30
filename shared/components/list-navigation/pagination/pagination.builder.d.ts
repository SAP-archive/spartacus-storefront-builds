import { PaginationConfig } from './config/pagination.config';
import { PaginationItem } from './pagination.model';
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
import * as ɵngcc0 from '@angular/core';
export declare class PaginationBuilder {
    protected paginationConfig: PaginationConfig;
    constructor(paginationConfig: PaginationConfig);
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
    paginate(pageCount: number, current: number): PaginationItem[];
    /**
     * Returns the current page with surrounding pages (based on the `config.rangeCount`).
     * The current page is always centered to provide direct access to the previous and next page.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     */
    protected addPages(pages: PaginationItem[], pageCount: number, current: number): void;
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     */
    protected addDots(pages: PaginationItem[], pageCount: number): void;
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     *
     */
    protected addFirstLast(pages: PaginationItem[], pageCount: number): void;
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
    protected addNavigation(pages: PaginationItem[], pageCount: number, current: number): void;
    /**
     * Returns the start and previous links, if applicable.
     */
    private getBeforeLinks;
    /**
     * Returns the next and end links, if applicable.
     */
    private getAfter;
    /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @param pageCount The total number of pages.
     * @param current The current page number, 0-index based.
     */
    private getStartOfRange;
    private get config();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationBuilder, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9wYWdpbmF0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbSB9IGZyb20gJy4vcGFnaW5hdGlvbi5tb2RlbCc7XG4vKipcbiAqIEJ1aWxkcyBhIHBhZ2luYXRpb24gc3RydWN0dXJlcyBiYXNlZCBvbiBhIHBhZ2VDb3VudCBhbmQgY3VycmVudCBwYWdlIG51bWJlci5cbiAqIFRoZXJlIGFyZSB2YXJpb3VzIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSBvcHRpb25zIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZVxuICogdGhlIGJlaGF2aW91ciBvZiB0aGUgYnVpbGQuIEFsdGVybmF0aXZlbHksIENTUyBjYW4gYmUgdXNlZCB0byBmdXJ0aGVyIGN1c3RvbWlzZVxuICogdGhlIHBhZ2luYXRpb24uXG4gKlxuICogRXhhbXBsZXM6XG4gKiBUaGUgZnVsbCBibG93biBwYWdpbmF0aW9uIGl0ZW1zIGNvbnRhaW4gdGhlIGZvbGxvdyBlbGVtZW50czpcbiAqXG4gKiBgwqsg4oC5IDEgLi4uIDQgKDUpIDYgLi4uIDkg4oC6IMK7YFxuICpcbiAqIFRoaXMgaW5jbHVkZXMgcGFnaW5hdGlvbiBpdGVtcyB0byB0aGUgZm9sbG93aW5nIHBhZ2VzOlxuICogLSBzdGFydCBwYWdlXG4gKiAtIHByZXZpb3VzIHBhZ2VcbiAqIC0gZmlyc3QgcGFnZVxuICogLSBwYWdlIHJhbmdlXG4gKiAtIGxhc3QgcGFnZVxuICogLSBuZXh0IHBhZ2VcbiAqIC0gZW5kIHBhZ2VcbiAqXG4gKiBBbGwgb2YgdGhvc2UgbGlua3MgYXJlIGNvbmZpZ3VyYWJsZSwgaW5jbHVkaW5nIHRoZSBzaXplIG9mIHRoZSBwYWdlIHJhbmdlLlxuICogVGhlIGN1cnJlbnQgcGFnZSB3aWxsIGFsd2F5cyBiZSBjZW50ZXJlZCBpbiB0aGUgcGFnZSByYW5nZSB0byBwcm92aWRlIGRpcmVjdCBhY2Nlc3NcbiAqIHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBwYWdlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdpbmF0aW9uQnVpbGRlciB7XG4gICAgcHJvdGVjdGVkIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWc7XG4gICAgY29uc3RydWN0b3IocGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyk7XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgbGlzdCBvZiBgUGFnaW5hdGlvbkl0ZW1gLiBUaGUgZ2l2ZSBwYWdlQ291bnQgYW5kIGN1cnJlbnQgYXJlIHVzZWRcbiAgICAgKiB0byBidWlsZCBvdXQgdGhlIGZ1bGwgcGFnaW5hdGlvbi4gVGhlcmUgYXJlIHZhcmlvdXMge0BsaW5rIFBhZ2luYXRpb25Db25maWd9IG9wdGlvbnNcbiAgICAgKiB3aGljaCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIGJlaGF2aW91ciBvZiB0aGUgYnVpbGQuIEFsdGVybmF0aXZlbHksIENTU1xuICAgICAqIGNhbiBiZSB1c2VkIHRvIGZ1cnRoZXIgc3BlY2lhbGl6ZSB2aXNpYmlsaXR5IG9mIHRoZSBwYWdpbmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBgUGFnaW5hdGlvbkl0ZW1gXG4gICAgICovXG4gICAgcGFnaW5hdGUocGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IFBhZ2luYXRpb25JdGVtW107XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlIHdpdGggc3Vycm91bmRpbmcgcGFnZXMgKGJhc2VkIG9uIHRoZSBgY29uZmlnLnJhbmdlQ291bnRgKS5cbiAgICAgKiBUaGUgY3VycmVudCBwYWdlIGlzIGFsd2F5cyBjZW50ZXJlZCB0byBwcm92aWRlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIHByZXZpb3VzIGFuZCBuZXh0IHBhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRQYWdlcyhwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQWRkcyBkb3RzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGdpdmVuIHBhZ2VzLCBpZiBjb25maWd1cmVkIChkZWZhdWx0cyB0byB0cnVlKS5cbiAgICAgKiBJZiB0aGUgZG90cyBvbmx5IHJlcHJlc2VudCBhIHNpbmdsZSBwYWdlLCB0aGUgcGFnZSBudW1iZXIgaXMgYWRkZWQgaW5zdGVhZCBvZlxuICAgICAqIHRoZSBkb3RzLCB1bmxlc3MgdGhlIGNvbmZpZ3VyYXRpb24gcmVxdWlyZXMgZG90cyBhbHdheXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRG90cyhwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZCBsaW5rcyB0byB0aGUgZmlyc3QgYW5kIGxhc3QgcGFnZSwgaWYgY29uZmlndXJlZCB0byBkbyBzby5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgICAqXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZEZpcnN0TGFzdChwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZCBsaW5rcyB0byB0aGUgc3RhcnQsIHByZXZpb3VzLCBuZXh0IGFuZCBsYXN0IHBhZ2UsIGlmIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAgICogVGhlIG9yZGVyIG9mIHRoZSBsaW5rcyBjYW4gYmUgY29uZmlndXJlZCBieSB1c2luZyB0aGUge0BsaW5rIFBhZ2luYXRpb25Db25maWd9LFxuICAgICAqIHVzaW5nIHRoZSBgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbmAgKGBCRUZPUkVgIG9yIGBBRlRFUmApLlxuICAgICAqIFRoZSBgUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbmAgYWxsb3dzIGZvciAzIGZsYXZvdXJzOlxuICAgICAqXG4gICAgICogLSBieSBkZWZhdWx0IHRoZSBwYWdpbmF0aW9uIHN0YXJ0cyB3aXRoIHN0YXJ0IGFuZCBwcmV2aW91cyBhbmQgZW5kcyB3aXRoIHRoZSBuZXh0IGFuZCBlbmQgbGlua3NcbiAgICAgKiAtIEJFRk9SRSDigJPCoGFsbCBuYXZpZ2F0aW9uIGxpbmtzIGFyZSBhZGRlZCBpbiB0aGUgZnJvbnQgb2YgdGhlIHBhZ2luYXRpb24gbGlzdFxuICAgICAqIC0gQUZURVIg4oCTwqBhbGwgbmF2aWdhdGlvbiBsaW5rcyBhcmUgcHVzaGVkIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2luYXRpb24gbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICAgKlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGROYXZpZ2F0aW9uKHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdLCBwYWdlQ291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdGFydCBhbmQgcHJldmlvdXMgbGlua3MsIGlmIGFwcGxpY2FibGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRCZWZvcmVMaW5rcztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IGFuZCBlbmQgbGlua3MsIGlmIGFwcGxpY2FibGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRBZnRlcjtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB0aGUgZmlyc3QgcGFnZSBvZiB0aGUgcmFuZ2Ugd2UgbmVlZCB0byBidWlsZC5cbiAgICAgKiBUaGlzIGlzIHRoZSBwYWdlIHRoYXQgaXMgbGVhZGluZyB1cCB0byB0aGUgcmFuZ2Ugb2YgdGhlXG4gICAgICogY3VycmVudCBwYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzLlxuICAgICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U3RhcnRPZlJhbmdlO1xuICAgIHByaXZhdGUgZ2V0IGNvbmZpZygpO1xufVxuIl19
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationBuilder>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBFQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcGFnaW5hdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW0gfSBmcm9tICcuL3BhZ2luYXRpb24ubW9kZWwnO1xuLyoqXG4gKiBCdWlsZHMgYSBwYWdpbmF0aW9uIHN0cnVjdHVyZXMgYmFzZWQgb24gYSBwYWdlQ291bnQgYW5kIGN1cnJlbnQgcGFnZSBudW1iZXIuXG4gKiBUaGVyZSBhcmUgdmFyaW91cyB7QGxpbmsgUGFnaW5hdGlvbkNvbmZpZ30gb3B0aW9ucyB3aGljaCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmVcbiAqIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGJ1aWxkLiBBbHRlcm5hdGl2ZWx5LCBDU1MgY2FuIGJlIHVzZWQgdG8gZnVydGhlciBjdXN0b21pc2VcbiAqIHRoZSBwYWdpbmF0aW9uLlxuICpcbiAqIEV4YW1wbGVzOlxuICogVGhlIGZ1bGwgYmxvd24gcGFnaW5hdGlvbiBpdGVtcyBjb250YWluIHRoZSBmb2xsb3cgZWxlbWVudHM6XG4gKlxuICogYMKrIOKAuSAxIC4uLiA0ICg1KSA2IC4uLiA5IOKAuiDCu2BcbiAqXG4gKiBUaGlzIGluY2x1ZGVzIHBhZ2luYXRpb24gaXRlbXMgdG8gdGhlIGZvbGxvd2luZyBwYWdlczpcbiAqIC0gc3RhcnQgcGFnZVxuICogLSBwcmV2aW91cyBwYWdlXG4gKiAtIGZpcnN0IHBhZ2VcbiAqIC0gcGFnZSByYW5nZVxuICogLSBsYXN0IHBhZ2VcbiAqIC0gbmV4dCBwYWdlXG4gKiAtIGVuZCBwYWdlXG4gKlxuICogQWxsIG9mIHRob3NlIGxpbmtzIGFyZSBjb25maWd1cmFibGUsIGluY2x1ZGluZyB0aGUgc2l6ZSBvZiB0aGUgcGFnZSByYW5nZS5cbiAqIFRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBhbHdheXMgYmUgY2VudGVyZWQgaW4gdGhlIHBhZ2UgcmFuZ2UgdG8gcHJvdmlkZSBkaXJlY3QgYWNjZXNzXG4gKiB0byB0aGUgcHJldmlvdXMgYW5kIG5leHQgcGFnZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnaW5hdGlvbkJ1aWxkZXIge1xuICAgIHByb3RlY3RlZCBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcpO1xuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhIGxpc3Qgb2YgYFBhZ2luYXRpb25JdGVtYC4gVGhlIGdpdmUgcGFnZUNvdW50IGFuZCBjdXJyZW50IGFyZSB1c2VkXG4gICAgICogdG8gYnVpbGQgb3V0IHRoZSBmdWxsIHBhZ2luYXRpb24uIFRoZXJlIGFyZSB2YXJpb3VzIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSBvcHRpb25zXG4gICAgICogd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGJ1aWxkLiBBbHRlcm5hdGl2ZWx5LCBDU1NcbiAgICAgKiBjYW4gYmUgdXNlZCB0byBmdXJ0aGVyIHNwZWNpYWxpemUgdmlzaWJpbGl0eSBvZiB0aGUgcGFnaW5hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYFBhZ2luYXRpb25JdGVtYFxuICAgICAqL1xuICAgIHBhZ2luYXRlKHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiBQYWdpbmF0aW9uSXRlbVtdO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZSB3aXRoIHN1cnJvdW5kaW5nIHBhZ2VzIChiYXNlZCBvbiB0aGUgYGNvbmZpZy5yYW5nZUNvdW50YCkuXG4gICAgICogVGhlIGN1cnJlbnQgcGFnZSBpcyBhbHdheXMgY2VudGVyZWQgdG8gcHJvdmlkZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBwYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgcGFnZSBudW1iZXIsIDAtaW5kZXggYmFzZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkUGFnZXMocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZHMgZG90cyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBnaXZlbiBwYWdlcywgaWYgY29uZmlndXJlZCAoZGVmYXVsdHMgdG8gdHJ1ZSkuXG4gICAgICogSWYgdGhlIGRvdHMgb25seSByZXByZXNlbnQgYSBzaW5nbGUgcGFnZSwgdGhlIHBhZ2UgbnVtYmVyIGlzIGFkZGVkIGluc3RlYWQgb2ZcbiAgICAgKiB0aGUgZG90cywgdW5sZXNzIHRoZSBjb25maWd1cmF0aW9uIHJlcXVpcmVzIGRvdHMgYWx3YXlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VzIFRoZSBsaXN0IG9mIHBhZ2UgaXRlbXMgdGhhdCBpcyB1c2VkIHRvIGFtZW5kXG4gICAgICogQHBhcmFtIHBhZ2VDb3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERvdHMocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGQgbGlua3MgdG8gdGhlIGZpcnN0IGFuZCBsYXN0IHBhZ2UsIGlmIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnZXMgVGhlIGxpc3Qgb2YgcGFnZSBpdGVtcyB0aGF0IGlzIHVzZWQgdG8gYW1lbmRcbiAgICAgKiBAcGFyYW0gcGFnZUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRGaXJzdExhc3QocGFnZXM6IFBhZ2luYXRpb25JdGVtW10sIHBhZ2VDb3VudDogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGQgbGlua3MgdG8gdGhlIHN0YXJ0LCBwcmV2aW91cywgbmV4dCBhbmQgbGFzdCBwYWdlLCBpZiBjb25maWd1cmVkIHRvIGRvIHNvLlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgbGlua3MgY2FuIGJlIGNvbmZpZ3VyZWQgYnkgdXNpbmcgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29uZmlnfSxcbiAgICAgKiB1c2luZyB0aGUgYFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb25gIChgQkVGT1JFYCBvciBgQUZURVJgKS5cbiAgICAgKiBUaGUgYFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb25gIGFsbG93cyBmb3IgMyBmbGF2b3VyczpcbiAgICAgKlxuICAgICAqIC0gYnkgZGVmYXVsdCB0aGUgcGFnaW5hdGlvbiBzdGFydHMgd2l0aCBzdGFydCBhbmQgcHJldmlvdXMgYW5kIGVuZHMgd2l0aCB0aGUgbmV4dCBhbmQgZW5kIGxpbmtzXG4gICAgICogLSBCRUZPUkUg4oCTwqBhbGwgbmF2aWdhdGlvbiBsaW5rcyBhcmUgYWRkZWQgaW4gdGhlIGZyb250IG9mIHRoZSBwYWdpbmF0aW9uIGxpc3RcbiAgICAgKiAtIEFGVEVSIOKAk8KgYWxsIG5hdmlnYXRpb24gbGlua3MgYXJlIHB1c2hlZCB0byB0aGUgZW5kIG9mIHRoZSBwYWdpbmF0aW9uIGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlcyBUaGUgbGlzdCBvZiBwYWdlIGl0ZW1zIHRoYXQgaXMgdXNlZCB0byBhbWVuZFxuICAgICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgICAqIEBwYXJhbSBjdXJyZW50IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLCAwLWluZGV4IGJhc2VkXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkTmF2aWdhdGlvbihwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSwgcGFnZUNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RhcnQgYW5kIHByZXZpb3VzIGxpbmtzLCBpZiBhcHBsaWNhYmxlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QmVmb3JlTGlua3M7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCBhbmQgZW5kIGxpbmtzLCBpZiBhcHBsaWNhYmxlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QWZ0ZXI7XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIGZpcnN0IHBhZ2Ugb2YgdGhlIHJhbmdlIHdlIG5lZWQgdG8gYnVpbGQuXG4gICAgICogVGhpcyBpcyB0aGUgcGFnZSB0aGF0IGlzIGxlYWRpbmcgdXAgdG8gdGhlIHJhbmdlIG9mIHRoZVxuICAgICAqIGN1cnJlbnQgcGFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlcy5cbiAgICAgKiBAcGFyYW0gY3VycmVudCBUaGUgY3VycmVudCBwYWdlIG51bWJlciwgMC1pbmRleCBiYXNlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFN0YXJ0T2ZSYW5nZTtcbiAgICBwcml2YXRlIGdldCBjb25maWcoKTtcbn1cbiJdfQ==
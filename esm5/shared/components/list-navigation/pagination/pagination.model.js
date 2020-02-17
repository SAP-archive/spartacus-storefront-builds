/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents a page item for a pagination system. This is used
 * to store the model of each page.
 * @record
 */
export function PaginationItem() { }
if (false) {
    /** @type {?|undefined} */
    PaginationItem.prototype.label;
    /** @type {?|undefined} */
    PaginationItem.prototype.type;
    /**
     * The number is used when the type is {\@link PaginationItemType.PAGE}
     * @type {?|undefined}
     */
    PaginationItem.prototype.number;
}
/** @enum {string} */
var PaginationItemType = {
    GAP: 'gap',
    FIRST: 'first',
    LAST: 'last',
    PREVIOUS: 'previous',
    NEXT: 'next',
    START: 'start',
    END: 'end',
    PAGE: 'page',
};
export { PaginationItemType };
/**
 * @record
 */
export function PaginationOptions() { }
if (false) {
    /**
     * The range of direct accessible pages in the pagination.
     *
     * `« 4 (5) 6 »`
     *
     * Defaults to 3.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.rangeCount;
    /**
     * Adds a link to skip to the start of the pages, defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addStart;
    /**
     * A link to skip to the end of the pages, defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addEnd;
    /**
     * A link to the previous page, defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addPrevious;
    /**
     * A link to the previous page, defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addNext;
    /** @type {?|undefined} */
    PaginationOptions.prototype.navigationPosition;
    /**
     * A link to the first page can be added in case it is not included already, defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addFirst;
    /**
     * A link to the last page can be added in case it is not included already, defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addLast;
    /**
     * Adds a gap before and after the pages. to visualize hidden pages. Defaults to false.
     *
     * `1 ...  4 (5) 6 ... 18`
     *
     * Defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.addDots;
    /**
     * If the page dots only represents a single page, we rather add the page
     * as this would take the same amount of space. Some UX might want to use
     * the dots for consistency reasons, which why this option is configurable.
     *
     * This typically happens on the 4th page (in case the range is 3):
     * Instead of having:
     *
     *  `1 ...  3 (4) 5`
     *
     * we'd have
     *
     * `1 2 3 (4) 5`.
     *
     * Defaults to false.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.substituteDotsForSingularPage;
    /**
     * Custom label for the start link, defaults to `«`.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.startLabel;
    /**
     * Custom label for the previous link, defaults to `‹`.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.previousLabel;
    /**
     * Custom label for the next link, defaults to `›`.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.nextLabel;
    /**
     * Custom label for the end link, defaults to `»`.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.endLabel;
    /**
     * Custom label for the dots, defaults to `...`.
     * @type {?|undefined}
     */
    PaginationOptions.prototype.dotsLabel;
}
/** @enum {string} */
var PaginationNavigationPosition = {
    ASIDE: 'aside',
    BEFORE: 'before',
    AFTER: 'after',
};
export { PaginationNavigationPosition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2xpc3QtbmF2aWdhdGlvbi9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsb0NBS0M7OztJQUpDLCtCQUFlOztJQUNmLDhCQUEwQjs7Ozs7SUFFMUIsZ0NBQWdCOzs7O0lBUWhCLEtBQU0sS0FBSztJQUNYLE9BQVEsT0FBTztJQUNmLE1BQU8sTUFBTTtJQUNiLFVBQVcsVUFBVTtJQUNyQixNQUFPLE1BQU07SUFDYixPQUFRLE9BQU87SUFDZixLQUFNLEtBQUs7SUFDWCxNQUFPLE1BQU07Ozs7OztBQUdmLHVDQStEQzs7Ozs7Ozs7OztJQXZEQyx1Q0FBb0I7Ozs7O0lBR3BCLHFDQUFtQjs7Ozs7SUFFbkIsbUNBQWlCOzs7OztJQUVqQix3Q0FBc0I7Ozs7O0lBRXRCLG9DQUFrQjs7SUFFbEIsK0NBQWtEOzs7OztJQUdsRCxxQ0FBbUI7Ozs7O0lBRW5CLG9DQUFrQjs7Ozs7Ozs7O0lBU2xCLG9DQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JsQiwwREFBd0M7Ozs7O0lBR3hDLHVDQUFvQjs7Ozs7SUFFcEIsMENBQXVCOzs7OztJQUV2QixzQ0FBbUI7Ozs7O0lBRW5CLHFDQUFrQjs7Ozs7SUFFbEIsc0NBQW1COzs7O0lBSW5CLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTtJQUNqQixPQUFRLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcHJlc2VudHMgYSBwYWdlIGl0ZW0gZm9yIGEgcGFnaW5hdGlvbiBzeXN0ZW0uIFRoaXMgaXMgdXNlZFxuICogdG8gc3RvcmUgdGhlIG1vZGVsIG9mIGVhY2ggcGFnZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uSXRlbSB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0eXBlPzogUGFnaW5hdGlvbkl0ZW1UeXBlO1xuICAvKiogVGhlIG51bWJlciBpcyB1c2VkIHdoZW4gdGhlIHR5cGUgaXMge0BsaW5rIFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFfSAqL1xuICBudW1iZXI/OiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhlIGl0ZW0gdHlwZSBpcyB1c2VkIHRvIGFkZCBzZW1hbnRpYyBzdHJ1Y3R1cmUgdG8gdGhlXG4gKiBQYWdpbmF0aW9uSXRlbSwgc28gdGhhdCB0aGUgVUkgdW5kZXJzdGFuZHMgdGhlIHVzYWdlLlxuICovXG5leHBvcnQgZW51bSBQYWdpbmF0aW9uSXRlbVR5cGUge1xuICBHQVAgPSAnZ2FwJyxcbiAgRklSU1QgPSAnZmlyc3QnLFxuICBMQVNUID0gJ2xhc3QnLFxuICBQUkVWSU9VUyA9ICdwcmV2aW91cycsXG4gIE5FWFQgPSAnbmV4dCcsXG4gIFNUQVJUID0gJ3N0YXJ0JyxcbiAgRU5EID0gJ2VuZCcsXG4gIFBBR0UgPSAncGFnZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIHJhbmdlIG9mIGRpcmVjdCBhY2Nlc3NpYmxlIHBhZ2VzIGluIHRoZSBwYWdpbmF0aW9uLlxuICAgKlxuICAgKiBgwqsgNCAoNSkgNiDCu2BcbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMy5cbiAgICovXG4gIHJhbmdlQ291bnQ/OiBudW1iZXI7XG5cbiAgLyoqIEFkZHMgYSBsaW5rIHRvIHNraXAgdG8gdGhlIHN0YXJ0IG9mIHRoZSBwYWdlcywgZGVmYXVsdHMgdG8gZmFsc2UuICovXG4gIGFkZFN0YXJ0PzogYm9vbGVhbjtcbiAgLyoqIEEgbGluayB0byBza2lwIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VzLCBkZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgYWRkRW5kPzogYm9vbGVhbjtcbiAgLyoqIEEgbGluayB0byB0aGUgcHJldmlvdXMgcGFnZSwgZGVmYXVsdHMgdG8gZmFsc2UuICovXG4gIGFkZFByZXZpb3VzPzogYm9vbGVhbjtcbiAgLyoqIEEgbGluayB0byB0aGUgcHJldmlvdXMgcGFnZSwgZGVmYXVsdHMgdG8gZmFsc2UuICovXG4gIGFkZE5leHQ/OiBib29sZWFuO1xuXG4gIG5hdmlnYXRpb25Qb3NpdGlvbj86IFBhZ2luYXRpb25OYXZpZ2F0aW9uUG9zaXRpb247XG5cbiAgLyoqIEEgbGluayB0byB0aGUgZmlyc3QgcGFnZSBjYW4gYmUgYWRkZWQgaW4gY2FzZSBpdCBpcyBub3QgaW5jbHVkZWQgYWxyZWFkeSwgZGVmYXVsdHMgdG8gZmFsc2UuICovXG4gIGFkZEZpcnN0PzogYm9vbGVhbjtcbiAgLyoqIEEgbGluayB0byB0aGUgbGFzdCBwYWdlIGNhbiBiZSBhZGRlZCBpbiBjYXNlIGl0IGlzIG5vdCBpbmNsdWRlZCBhbHJlYWR5LCBkZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgYWRkTGFzdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBnYXAgYmVmb3JlIGFuZCBhZnRlciB0aGUgcGFnZXMuIHRvIHZpc3VhbGl6ZSBoaWRkZW4gcGFnZXMuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKlxuICAgKiBgMSAuLi4gIDQgKDUpIDYgLi4uIDE4YFxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGFkZERvdHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgcGFnZSBkb3RzIG9ubHkgcmVwcmVzZW50cyBhIHNpbmdsZSBwYWdlLCB3ZSByYXRoZXIgYWRkIHRoZSBwYWdlXG4gICAqIGFzIHRoaXMgd291bGQgdGFrZSB0aGUgc2FtZSBhbW91bnQgb2Ygc3BhY2UuIFNvbWUgVVggbWlnaHQgd2FudCB0byB1c2VcbiAgICogdGhlIGRvdHMgZm9yIGNvbnNpc3RlbmN5IHJlYXNvbnMsIHdoaWNoIHdoeSB0aGlzIG9wdGlvbiBpcyBjb25maWd1cmFibGUuXG4gICAqXG4gICAqIFRoaXMgdHlwaWNhbGx5IGhhcHBlbnMgb24gdGhlIDR0aCBwYWdlIChpbiBjYXNlIHRoZSByYW5nZSBpcyAzKTpcbiAgICogSW5zdGVhZCBvZiBoYXZpbmc6XG4gICAqXG4gICAqICBgMSAuLi4gIDMgKDQpIDVgXG4gICAqXG4gICAqIHdlJ2QgaGF2ZVxuICAgKlxuICAgKiBgMSAyIDMgKDQpIDVgLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIHN1YnN0aXR1dGVEb3RzRm9yU2luZ3VsYXJQYWdlPzogYm9vbGVhbjtcblxuICAvKiogQ3VzdG9tIGxhYmVsIGZvciB0aGUgc3RhcnQgbGluaywgZGVmYXVsdHMgdG8gYMKrYC4gKi9cbiAgc3RhcnRMYWJlbD86IHN0cmluZztcbiAgLyoqIEN1c3RvbSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIGxpbmssIGRlZmF1bHRzIHRvIGDigLlgLiAqL1xuICBwcmV2aW91c0xhYmVsPzogc3RyaW5nO1xuICAvKiogQ3VzdG9tIGxhYmVsIGZvciB0aGUgbmV4dCBsaW5rLCBkZWZhdWx0cyB0byBg4oC6YC4gKi9cbiAgbmV4dExhYmVsPzogc3RyaW5nO1xuICAvKiogQ3VzdG9tIGxhYmVsIGZvciB0aGUgZW5kIGxpbmssIGRlZmF1bHRzIHRvIGDCu2AuICovXG4gIGVuZExhYmVsPzogc3RyaW5nO1xuICAvKiogQ3VzdG9tIGxhYmVsIGZvciB0aGUgZG90cywgZGVmYXVsdHMgdG8gYC4uLmAuICovXG4gIGRvdHNMYWJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbiB7XG4gIEFTSURFID0gJ2FzaWRlJyxcbiAgQkVGT1JFID0gJ2JlZm9yZScsXG4gIEFGVEVSID0gJ2FmdGVyJyxcbn1cbiJdfQ==
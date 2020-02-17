/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationBuilder } from './pagination.builder';
import { PaginationItemType } from './pagination.model';
/**
 * The `PaginationComponent` is a generic component that is used for
 * all lists in Spartacus that require pagination. The component supports
 * all common features, which can be configured or hidden by CSS.
 */
export class PaginationComponent {
    /**
     * @param {?} paginationBuilder
     * @param {?} activatedRoute
     */
    constructor(paginationBuilder, activatedRoute) {
        this.paginationBuilder = paginationBuilder;
        this.activatedRoute = activatedRoute;
        this.viewPageEvent = new EventEmitter();
        this.pages = [];
    }
    /**
     * @return {?}
     */
    get pagination() {
        return this._pagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pagination(value) {
        this._pagination = value;
        this.render(value);
    }
    /**
     * @private
     * @param {?} pagination
     * @return {?}
     */
    render(pagination) {
        this.pages = this.paginationBuilder.paginate(pagination.totalPages, pagination.currentPage);
    }
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param {?} item PaginationItem
     * @return {?} boolean
     */
    isCurrent(item) {
        return (item.type === PaginationItemType.PAGE &&
            item.number === this.pagination.currentPage);
    }
    /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param {?} item PaginationItem
     * @return {?} returns -1 in case of a disabled
     */
    isInactive(item) {
        return (!item.hasOwnProperty('number') ||
            item.number === this.pagination.currentPage);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getQueryParams(item) {
        /** @type {?} */
        const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        if (this.queryParam &&
            item.number < this.pagination.totalPages &&
            !this.isCurrent(item)) {
            queryParams[this.queryParam] = item.number;
        }
        // omit the page number from the query parameters in case it's the default
        // to clean up the experience and avoid unnecessary polluting of the URL
        if (queryParams[this.queryParam] === this.defaultPage) {
            delete queryParams[this.queryParam];
        }
        return queryParams;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.viewPageEvent.emit(page.number);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-pagination',
                template: "<a\n  *ngFor=\"let item of pages\"\n  [class]=\"item.type\"\n  [class.disabled]=\"isInactive(item)\"\n  [class.current]=\"isCurrent(item)\"\n  [routerLink]=\"pageRoute\"\n  [queryParams]=\"getQueryParams(item)\"\n  [tabIndex]=\"isInactive(item) ? -1 : 0\"\n  (click)=\"pageChange(item)\"\n>\n  {{ item.label }}\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: PaginationBuilder },
    { type: ActivatedRoute }
];
PaginationComponent.propDecorators = {
    pageRoute: [{ type: Input }],
    queryParam: [{ type: Input }],
    defaultPage: [{ type: Input }],
    pagination: [{ type: Input }],
    viewPageEvent: [{ type: Output }]
};
if (false) {
    /**
     * The (optional) pageRoute used for the anchor links created in the pagination
     * @type {?}
     */
    PaginationComponent.prototype.pageRoute;
    /**
     * The (optional) query parameter which is added to the page route.
     * @type {?}
     */
    PaginationComponent.prototype.queryParam;
    /**
     * Whenever there's a default page specified, the routing logic
     * will omit the page number in routeLink or parameters.
     * @type {?}
     */
    PaginationComponent.prototype.defaultPage;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._pagination;
    /** @type {?} */
    PaginationComponent.prototype.viewPageEvent;
    /** @type {?} */
    PaginationComponent.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.paginationBuilder;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBa0Isa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBWXhFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBMEI5QixZQUNVLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU45QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNFLFVBQUssR0FBcUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7Ozs7SUFmSixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFhLFVBQVUsQ0FBQyxLQUFzQjtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQVdPLE1BQU0sQ0FBQyxVQUEyQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQzFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3JCLFVBQVUsQ0FBQyxXQUFXLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUUQsU0FBUyxDQUFDLElBQW9CO1FBQzVCLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDLElBQUk7WUFDckMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7Ozs7SUFXRCxVQUFVLENBQUMsSUFBb0I7UUFDN0IsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQW9COztjQUMzQixXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDL0IsRUFBRSxFQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDekM7UUFDRCxJQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNyQjtZQUNBLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELDBFQUEwRTtRQUMxRSx3RUFBd0U7UUFDeEUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBb0I7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDBVQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFaUSxpQkFBaUI7WUFGakIsY0FBYzs7O3dCQWlCcEIsS0FBSzt5QkFHTCxLQUFLOzBCQU1MLEtBQUs7eUJBTUwsS0FBSzs0QkFLTCxNQUFNOzs7Ozs7O0lBcEJQLHdDQUEyQjs7Ozs7SUFHM0IseUNBQTRCOzs7Ozs7SUFNNUIsMENBQXFCOzs7OztJQUVyQiwwQ0FBcUM7O0lBU3JDLDRDQUEyRTs7SUFFM0Usb0NBQTZCOzs7OztJQUczQixnREFBNEM7Ozs7O0lBQzVDLDZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQnVpbGRlciB9IGZyb20gJy4vcGFnaW5hdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtLCBQYWdpbmF0aW9uSXRlbVR5cGUgfSBmcm9tICcuL3BhZ2luYXRpb24ubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgUGFnaW5hdGlvbkNvbXBvbmVudGAgaXMgYSBnZW5lcmljIGNvbXBvbmVudCB0aGF0IGlzIHVzZWQgZm9yXG4gKiBhbGwgbGlzdHMgaW4gU3BhcnRhY3VzIHRoYXQgcmVxdWlyZSBwYWdpbmF0aW9uLiBUaGUgY29tcG9uZW50IHN1cHBvcnRzXG4gKiBhbGwgY29tbW9uIGZlYXR1cmVzLCB3aGljaCBjYW4gYmUgY29uZmlndXJlZCBvciBoaWRkZW4gYnkgQ1NTLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIC8qKiBUaGUgKG9wdGlvbmFsKSBwYWdlUm91dGUgdXNlZCBmb3IgdGhlIGFuY2hvciBsaW5rcyBjcmVhdGVkIGluIHRoZSBwYWdpbmF0aW9uICAgKi9cbiAgQElucHV0KCkgcGFnZVJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSAob3B0aW9uYWwpIHF1ZXJ5IHBhcmFtZXRlciB3aGljaCBpcyBhZGRlZCB0byB0aGUgcGFnZSByb3V0ZS4gICovXG4gIEBJbnB1dCgpIHF1ZXJ5UGFyYW06IHN0cmluZztcblxuICAvKipcbiAgICogV2hlbmV2ZXIgdGhlcmUncyBhIGRlZmF1bHQgcGFnZSBzcGVjaWZpZWQsIHRoZSByb3V0aW5nIGxvZ2ljXG4gICAqIHdpbGwgb21pdCB0aGUgcGFnZSBudW1iZXIgaW4gcm91dGVMaW5rIG9yIHBhcmFtZXRlcnMuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0UGFnZTtcblxuICBwcml2YXRlIF9wYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG4gIGdldCBwYWdpbmF0aW9uKCk6IFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRpb247XG4gIH1cbiAgQElucHV0KCkgc2V0IHBhZ2luYXRpb24odmFsdWU6IFBhZ2luYXRpb25Nb2RlbCkge1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcih2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXI6IFBhZ2luYXRpb25CdWlsZGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBwcml2YXRlIHJlbmRlcihwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWwpIHtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5wYWdpbmF0aW9uQnVpbGRlci5wYWdpbmF0ZShcbiAgICAgIHBhZ2luYXRpb24udG90YWxQYWdlcyxcbiAgICAgIHBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaWRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gaXRlbSBpcyB0aGUgY3VycmVudCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBpc0N1cnJlbnQoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXRlbS50eXBlID09PSBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRSAmJlxuICAgICAgaXRlbS5udW1iZXIgPT09IHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gaXRlbSBpcyBpbmFjdGl2ZS4gVGhpcyBpcyB1c2VkXG4gICAqIHRvIGRpc2FibGVkIGEgbGluayBvciBzZXQgdGhlIHRhYmluZGV4IHRvIGAtMWAuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIHRydWVcbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gUGFnaW5hdGlvbkl0ZW1cbiAgICogQHJldHVybnMgcmV0dXJucyAtMSBpbiBjYXNlIG9mIGEgZGlzYWJsZWRcbiAgICovXG4gIGlzSW5hY3RpdmUoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWl0ZW0uaGFzT3duUHJvcGVydHkoJ251bWJlcicpIHx8XG4gICAgICBpdGVtLm51bWJlciA9PT0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5UGFyYW1zKGl0ZW06IFBhZ2luYXRpb25JdGVtKTogUGFyYW1zIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMucXVlcnlQYXJhbSAmJlxuICAgICAgaXRlbS5udW1iZXIgPCB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAmJlxuICAgICAgIXRoaXMuaXNDdXJyZW50KGl0ZW0pXG4gICAgKSB7XG4gICAgICBxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dID0gaXRlbS5udW1iZXI7XG4gICAgfVxuICAgIC8vIG9taXQgdGhlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gY2FzZSBpdCdzIHRoZSBkZWZhdWx0XG4gICAgLy8gdG8gY2xlYW4gdXAgdGhlIGV4cGVyaWVuY2UgYW5kIGF2b2lkIHVubmVjZXNzYXJ5IHBvbGx1dGluZyBvZiB0aGUgVVJMXG4gICAgaWYgKHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV0gPT09IHRoaXMuZGVmYXVsdFBhZ2UpIHtcbiAgICAgIGRlbGV0ZSBxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IFBhZ2luYXRpb25JdGVtKTogdm9pZCB7XG4gICAgdGhpcy52aWV3UGFnZUV2ZW50LmVtaXQocGFnZS5udW1iZXIpO1xuICB9XG59XG4iXX0=
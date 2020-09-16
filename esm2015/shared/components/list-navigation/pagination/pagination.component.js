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
    constructor(paginationBuilder, activatedRoute) {
        this.paginationBuilder = paginationBuilder;
        this.activatedRoute = activatedRoute;
        this.viewPageEvent = new EventEmitter();
        this.pages = [];
    }
    get pagination() {
        return this._pagination;
    }
    set pagination(value) {
        this._pagination = value;
        this.render(value);
    }
    render(pagination) {
        this.pages = this.paginationBuilder.paginate(pagination.totalPages, pagination.currentPage);
    }
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param item PaginationItem
     * @returns boolean
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
     * @param item PaginationItem
     * @returns returns -1 in case of a disabled
     */
    isInactive(item) {
        return (!item.hasOwnProperty('number') ||
            item.number === this.pagination.currentPage);
    }
    getQueryParams(item) {
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
    pageChange(page) {
        this.viewPageEvent.emit(page.number);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-pagination',
                template: "<a\n  *ngFor=\"let item of pages\"\n  [class]=\"item.type\"\n  [class.disabled]=\"isInactive(item)\"\n  [class.current]=\"isCurrent(item)\"\n  [routerLink]=\"pageRoute\"\n  [queryParams]=\"getQueryParams(item)\"\n  [tabIndex]=\"isInactive(item) ? -1 : 0\"\n  (click)=\"pageChange(item)\"\n>\n  {{ item.label }}\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFrQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhFOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBMEI5QixZQUNVLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU45QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNFLFVBQUssR0FBcUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFmSixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQWEsVUFBVSxDQUFDLEtBQXNCO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVdPLE1BQU0sQ0FBQyxVQUEyQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQzFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3JCLFVBQVUsQ0FBQyxXQUFXLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsSUFBb0I7UUFDNUIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsSUFBSTtZQUNyQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsVUFBVSxDQUFDLElBQW9CO1FBQzdCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQW9CO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQy9CLEVBQUUsRUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3pDLENBQUM7UUFDRixJQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNyQjtZQUNBLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELDBFQUEwRTtRQUMxRSx3RUFBd0U7UUFDeEUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFvQjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMFVBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWlEsaUJBQWlCO1lBRmpCLGNBQWM7Ozt3QkFpQnBCLEtBQUs7eUJBR0wsS0FBSzswQkFNTCxLQUFLO3lCQU1MLEtBQUs7NEJBS0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQnVpbGRlciB9IGZyb20gJy4vcGFnaW5hdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtLCBQYWdpbmF0aW9uSXRlbVR5cGUgfSBmcm9tICcuL3BhZ2luYXRpb24ubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgUGFnaW5hdGlvbkNvbXBvbmVudGAgaXMgYSBnZW5lcmljIGNvbXBvbmVudCB0aGF0IGlzIHVzZWQgZm9yXG4gKiBhbGwgbGlzdHMgaW4gU3BhcnRhY3VzIHRoYXQgcmVxdWlyZSBwYWdpbmF0aW9uLiBUaGUgY29tcG9uZW50IHN1cHBvcnRzXG4gKiBhbGwgY29tbW9uIGZlYXR1cmVzLCB3aGljaCBjYW4gYmUgY29uZmlndXJlZCBvciBoaWRkZW4gYnkgQ1NTLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIC8qKiBUaGUgKG9wdGlvbmFsKSBwYWdlUm91dGUgdXNlZCBmb3IgdGhlIGFuY2hvciBsaW5rcyBjcmVhdGVkIGluIHRoZSBwYWdpbmF0aW9uICAgKi9cbiAgQElucHV0KCkgcGFnZVJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSAob3B0aW9uYWwpIHF1ZXJ5IHBhcmFtZXRlciB3aGljaCBpcyBhZGRlZCB0byB0aGUgcGFnZSByb3V0ZS4gICovXG4gIEBJbnB1dCgpIHF1ZXJ5UGFyYW06IHN0cmluZztcblxuICAvKipcbiAgICogV2hlbmV2ZXIgdGhlcmUncyBhIGRlZmF1bHQgcGFnZSBzcGVjaWZpZWQsIHRoZSByb3V0aW5nIGxvZ2ljXG4gICAqIHdpbGwgb21pdCB0aGUgcGFnZSBudW1iZXIgaW4gcm91dGVMaW5rIG9yIHBhcmFtZXRlcnMuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0UGFnZTtcblxuICBwcml2YXRlIF9wYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG4gIGdldCBwYWdpbmF0aW9uKCk6IFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRpb247XG4gIH1cbiAgQElucHV0KCkgc2V0IHBhZ2luYXRpb24odmFsdWU6IFBhZ2luYXRpb25Nb2RlbCkge1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcih2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXI6IFBhZ2luYXRpb25CdWlsZGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBwcml2YXRlIHJlbmRlcihwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWwpIHtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5wYWdpbmF0aW9uQnVpbGRlci5wYWdpbmF0ZShcbiAgICAgIHBhZ2luYXRpb24udG90YWxQYWdlcyxcbiAgICAgIHBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaWRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gaXRlbSBpcyB0aGUgY3VycmVudCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBpc0N1cnJlbnQoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXRlbS50eXBlID09PSBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRSAmJlxuICAgICAgaXRlbS5udW1iZXIgPT09IHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gaXRlbSBpcyBpbmFjdGl2ZS4gVGhpcyBpcyB1c2VkXG4gICAqIHRvIGRpc2FibGVkIGEgbGluayBvciBzZXQgdGhlIHRhYmluZGV4IHRvIGAtMWAuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIHRydWVcbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gUGFnaW5hdGlvbkl0ZW1cbiAgICogQHJldHVybnMgcmV0dXJucyAtMSBpbiBjYXNlIG9mIGEgZGlzYWJsZWRcbiAgICovXG4gIGlzSW5hY3RpdmUoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWl0ZW0uaGFzT3duUHJvcGVydHkoJ251bWJlcicpIHx8XG4gICAgICBpdGVtLm51bWJlciA9PT0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5UGFyYW1zKGl0ZW06IFBhZ2luYXRpb25JdGVtKTogUGFyYW1zIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMucXVlcnlQYXJhbSAmJlxuICAgICAgaXRlbS5udW1iZXIgPCB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAmJlxuICAgICAgIXRoaXMuaXNDdXJyZW50KGl0ZW0pXG4gICAgKSB7XG4gICAgICBxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dID0gaXRlbS5udW1iZXI7XG4gICAgfVxuICAgIC8vIG9taXQgdGhlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gY2FzZSBpdCdzIHRoZSBkZWZhdWx0XG4gICAgLy8gdG8gY2xlYW4gdXAgdGhlIGV4cGVyaWVuY2UgYW5kIGF2b2lkIHVubmVjZXNzYXJ5IHBvbGx1dGluZyBvZiB0aGUgVVJMXG4gICAgaWYgKHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV0gPT09IHRoaXMuZGVmYXVsdFBhZ2UpIHtcbiAgICAgIGRlbGV0ZSBxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IFBhZ2luYXRpb25JdGVtKTogdm9pZCB7XG4gICAgdGhpcy52aWV3UGFnZUV2ZW50LmVtaXQocGFnZS5udW1iZXIpO1xuICB9XG59XG4iXX0=
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
     * Indicates whether the given item is the current item.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFrQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhFOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBMEI5QixZQUNVLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU45QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNFLFVBQUssR0FBcUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFmSixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQWEsVUFBVSxDQUFDLEtBQXNCO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVdPLE1BQU0sQ0FBQyxVQUEyQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQzFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3JCLFVBQVUsQ0FBQyxXQUFXLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsSUFBb0I7UUFDNUIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsSUFBSTtZQUNyQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsVUFBVSxDQUFDLElBQW9CO1FBQzdCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQW9CO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQy9CLEVBQUUsRUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3pDLENBQUM7UUFDRixJQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNyQjtZQUNBLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELDBFQUEwRTtRQUMxRSx3RUFBd0U7UUFDeEUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFvQjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMFVBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWlEsaUJBQWlCO1lBRmpCLGNBQWM7Ozt3QkFpQnBCLEtBQUs7eUJBR0wsS0FBSzswQkFNTCxLQUFLO3lCQU1MLEtBQUs7NEJBS0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQnVpbGRlciB9IGZyb20gJy4vcGFnaW5hdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtLCBQYWdpbmF0aW9uSXRlbVR5cGUgfSBmcm9tICcuL3BhZ2luYXRpb24ubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgUGFnaW5hdGlvbkNvbXBvbmVudGAgaXMgYSBnZW5lcmljIGNvbXBvbmVudCB0aGF0IGlzIHVzZWQgZm9yXG4gKiBhbGwgbGlzdHMgaW4gU3BhcnRhY3VzIHRoYXQgcmVxdWlyZSBwYWdpbmF0aW9uLiBUaGUgY29tcG9uZW50IHN1cHBvcnRzXG4gKiBhbGwgY29tbW9uIGZlYXR1cmVzLCB3aGljaCBjYW4gYmUgY29uZmlndXJlZCBvciBoaWRkZW4gYnkgQ1NTLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIC8qKiBUaGUgKG9wdGlvbmFsKSBwYWdlUm91dGUgdXNlZCBmb3IgdGhlIGFuY2hvciBsaW5rcyBjcmVhdGVkIGluIHRoZSBwYWdpbmF0aW9uICAgKi9cbiAgQElucHV0KCkgcGFnZVJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSAob3B0aW9uYWwpIHF1ZXJ5IHBhcmFtZXRlciB3aGljaCBpcyBhZGRlZCB0byB0aGUgcGFnZSByb3V0ZS4gICovXG4gIEBJbnB1dCgpIHF1ZXJ5UGFyYW06IHN0cmluZztcblxuICAvKipcbiAgICogV2hlbmV2ZXIgdGhlcmUncyBhIGRlZmF1bHQgcGFnZSBzcGVjaWZpZWQsIHRoZSByb3V0aW5nIGxvZ2ljXG4gICAqIHdpbGwgb21pdCB0aGUgcGFnZSBudW1iZXIgaW4gcm91dGVMaW5rIG9yIHBhcmFtZXRlcnMuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0UGFnZTtcblxuICBwcml2YXRlIF9wYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG4gIGdldCBwYWdpbmF0aW9uKCk6IFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRpb247XG4gIH1cbiAgQElucHV0KCkgc2V0IHBhZ2luYXRpb24odmFsdWU6IFBhZ2luYXRpb25Nb2RlbCkge1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcih2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXI6IFBhZ2luYXRpb25CdWlsZGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBwcml2YXRlIHJlbmRlcihwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWwpIHtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5wYWdpbmF0aW9uQnVpbGRlci5wYWdpbmF0ZShcbiAgICAgIHBhZ2luYXRpb24udG90YWxQYWdlcyxcbiAgICAgIHBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBpdGVtIGlzIHRoZSBjdXJyZW50IGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtIFBhZ2luYXRpb25JdGVtXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGlzQ3VycmVudChpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpdGVtLnR5cGUgPT09IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFICYmXG4gICAgICBpdGVtLm51bWJlciA9PT0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBpdGVtIGlzIGluYWN0aXZlLiBUaGlzIGlzIHVzZWRcbiAgICogdG8gZGlzYWJsZWQgYSBsaW5rIG9yIHNldCB0aGUgdGFiaW5kZXggdG8gYC0xYC5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgKiBAcmV0dXJucyByZXR1cm5zIC0xIGluIGNhc2Ugb2YgYSBkaXNhYmxlZFxuICAgKi9cbiAgaXNJbmFjdGl2ZShpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhaXRlbS5oYXNPd25Qcm9wZXJ0eSgnbnVtYmVyJykgfHxcbiAgICAgIGl0ZW0ubnVtYmVyID09PSB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnlQYXJhbXMoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBQYXJhbXMge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1xuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5xdWVyeVBhcmFtICYmXG4gICAgICBpdGVtLm51bWJlciA8IHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzICYmXG4gICAgICAhdGhpcy5pc0N1cnJlbnQoaXRlbSlcbiAgICApIHtcbiAgICAgIHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV0gPSBpdGVtLm51bWJlcjtcbiAgICB9XG4gICAgLy8gb21pdCB0aGUgcGFnZSBudW1iZXIgZnJvbSB0aGUgcXVlcnkgcGFyYW1ldGVycyBpbiBjYXNlIGl0J3MgdGhlIGRlZmF1bHRcbiAgICAvLyB0byBjbGVhbiB1cCB0aGUgZXhwZXJpZW5jZSBhbmQgYXZvaWQgdW5uZWNlc3NhcnkgcG9sbHV0aW5nIG9mIHRoZSBVUkxcbiAgICBpZiAocXVlcnlQYXJhbXNbdGhpcy5xdWVyeVBhcmFtXSA9PT0gdGhpcy5kZWZhdWx0UGFnZSkge1xuICAgICAgZGVsZXRlIHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogUGFnaW5hdGlvbkl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdQYWdlRXZlbnQuZW1pdChwYWdlLm51bWJlcik7XG4gIH1cbn1cbiJdfQ==
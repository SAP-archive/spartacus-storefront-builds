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
        if (!pagination) {
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFrQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhFOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBMEI5QixZQUNVLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU45QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNFLFVBQUssR0FBcUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFmSixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQWEsVUFBVSxDQUFDLEtBQXNCO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVdTLE1BQU0sQ0FBQyxVQUEyQjtRQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUMxQyxVQUFVLENBQUMsVUFBVSxFQUNyQixVQUFVLENBQUMsV0FBVyxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBUyxDQUFDLElBQW9CO1FBQzVCLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDLElBQUk7WUFDckMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFVBQVUsQ0FBQyxJQUFvQjtRQUM3QixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFvQjtRQUNqQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMvQixFQUFFLEVBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN6QyxDQUFDO1FBQ0YsSUFDRSxJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO1lBQ3hDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDckI7WUFDQSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUM7UUFDRCwwRUFBMEU7UUFDMUUsd0VBQXdFO1FBQ3hFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBb0I7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQWpHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDBVQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVpRLGlCQUFpQjtZQUZqQixjQUFjOzs7d0JBaUJwQixLQUFLO3lCQUdMLEtBQUs7MEJBTUwsS0FBSzt5QkFNTCxLQUFLOzRCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkJ1aWxkZXIgfSBmcm9tICcuL3BhZ2luYXRpb24uYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbSwgUGFnaW5hdGlvbkl0ZW1UeXBlIH0gZnJvbSAnLi9wYWdpbmF0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYFBhZ2luYXRpb25Db21wb25lbnRgIGlzIGEgZ2VuZXJpYyBjb21wb25lbnQgdGhhdCBpcyB1c2VkIGZvclxuICogYWxsIGxpc3RzIGluIFNwYXJ0YWN1cyB0aGF0IHJlcXVpcmUgcGFnaW5hdGlvbi4gVGhlIGNvbXBvbmVudCBzdXBwb3J0c1xuICogYWxsIGNvbW1vbiBmZWF0dXJlcywgd2hpY2ggY2FuIGJlIGNvbmZpZ3VyZWQgb3IgaGlkZGVuIGJ5IENTUy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuICAvKiogVGhlIChvcHRpb25hbCkgcGFnZVJvdXRlIHVzZWQgZm9yIHRoZSBhbmNob3IgbGlua3MgY3JlYXRlZCBpbiB0aGUgcGFnaW5hdGlvbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VSb3V0ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgKG9wdGlvbmFsKSBxdWVyeSBwYXJhbWV0ZXIgd2hpY2ggaXMgYWRkZWQgdG8gdGhlIHBhZ2Ugcm91dGUuICAqL1xuICBASW5wdXQoKSBxdWVyeVBhcmFtOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZW5ldmVyIHRoZXJlJ3MgYSBkZWZhdWx0IHBhZ2Ugc3BlY2lmaWVkLCB0aGUgcm91dGluZyBsb2dpY1xuICAgKiB3aWxsIG9taXQgdGhlIHBhZ2UgbnVtYmVyIGluIHJvdXRlTGluayBvciBwYXJhbWV0ZXJzLlxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdFBhZ2U7XG5cbiAgcHJpdmF0ZSBfcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBnZXQgcGFnaW5hdGlvbigpOiBQYWdpbmF0aW9uTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9wYWdpbmF0aW9uO1xuICB9XG4gIEBJbnB1dCgpIHNldCBwYWdpbmF0aW9uKHZhbHVlOiBQYWdpbmF0aW9uTW9kZWwpIHtcbiAgICB0aGlzLl9wYWdpbmF0aW9uID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIodmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHZpZXdQYWdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyOiBQYWdpbmF0aW9uQnVpbGRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcihwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoIXBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIucGFnaW5hdGUoXG4gICAgICBwYWdpbmF0aW9uLnRvdGFsUGFnZXMsXG4gICAgICBwYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gaXRlbSBpcyB0aGUgY3VycmVudCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBpc0N1cnJlbnQoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXRlbS50eXBlID09PSBQYWdpbmF0aW9uSXRlbVR5cGUuUEFHRSAmJlxuICAgICAgaXRlbS5udW1iZXIgPT09IHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gaXRlbSBpcyBpbmFjdGl2ZS4gVGhpcyBpcyB1c2VkXG4gICAqIHRvIGRpc2FibGVkIGEgbGluayBvciBzZXQgdGhlIHRhYmluZGV4IHRvIGAtMWAuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIHRydWVcbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gUGFnaW5hdGlvbkl0ZW1cbiAgICogQHJldHVybnMgcmV0dXJucyAtMSBpbiBjYXNlIG9mIGEgZGlzYWJsZWRcbiAgICovXG4gIGlzSW5hY3RpdmUoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWl0ZW0uaGFzT3duUHJvcGVydHkoJ251bWJlcicpIHx8XG4gICAgICBpdGVtLm51bWJlciA9PT0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5UGFyYW1zKGl0ZW06IFBhZ2luYXRpb25JdGVtKTogUGFyYW1zIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMucXVlcnlQYXJhbSAmJlxuICAgICAgaXRlbS5udW1iZXIgPCB0aGlzLnBhZ2luYXRpb24udG90YWxQYWdlcyAmJlxuICAgICAgIXRoaXMuaXNDdXJyZW50KGl0ZW0pXG4gICAgKSB7XG4gICAgICBxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dID0gaXRlbS5udW1iZXI7XG4gICAgfVxuICAgIC8vIG9taXQgdGhlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gY2FzZSBpdCdzIHRoZSBkZWZhdWx0XG4gICAgLy8gdG8gY2xlYW4gdXAgdGhlIGV4cGVyaWVuY2UgYW5kIGF2b2lkIHVubmVjZXNzYXJ5IHBvbGx1dGluZyBvZiB0aGUgVVJMXG4gICAgaWYgKHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV0gPT09IHRoaXMuZGVmYXVsdFBhZ2UpIHtcbiAgICAgIGRlbGV0ZSBxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IFBhZ2luYXRpb25JdGVtKTogdm9pZCB7XG4gICAgdGhpcy52aWV3UGFnZUV2ZW50LmVtaXQocGFnZS5udW1iZXIpO1xuICB9XG59XG4iXX0=
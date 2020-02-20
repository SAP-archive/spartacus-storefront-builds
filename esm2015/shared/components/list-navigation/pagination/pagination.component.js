import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaginationBuilder } from './pagination.builder';
import { PaginationItemType } from './pagination.model';
/**
 * The `PaginationComponent` is a generic component that is used for
 * all lists in Spartacus that require pagination. The component supports
 * all common features, which can be configured or hidden by CSS.
 */
let PaginationComponent = class PaginationComponent {
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
};
PaginationComponent.ctorParameters = () => [
    { type: PaginationBuilder },
    { type: ActivatedRoute }
];
__decorate([
    Input()
], PaginationComponent.prototype, "pageRoute", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "queryParam", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "defaultPage", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "pagination", null);
__decorate([
    Output()
], PaginationComponent.prototype, "viewPageEvent", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'cx-pagination',
        template: "<a\n  *ngFor=\"let item of pages\"\n  [class]=\"item.type\"\n  [class.disabled]=\"isInactive(item)\"\n  [class.current]=\"isCurrent(item)\"\n  [routerLink]=\"pageRoute\"\n  [queryParams]=\"getQueryParams(item)\"\n  [tabIndex]=\"isInactive(item) ? -1 : 0\"\n  (click)=\"pageChange(item)\"\n>\n  {{ item.label }}\n</a>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEU7Ozs7R0FJRztBQU1ILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBMEI5QixZQUNVLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU45QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNFLFVBQUssR0FBcUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFmSixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNRLElBQUksVUFBVSxDQUFDLEtBQXNCO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVdPLE1BQU0sQ0FBQyxVQUEyQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQzFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3JCLFVBQVUsQ0FBQyxXQUFXLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsSUFBb0I7UUFDNUIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsSUFBSTtZQUNyQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsVUFBVSxDQUFDLElBQW9CO1FBQzdCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQW9CO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQy9CLEVBQUUsRUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3pDLENBQUM7UUFDRixJQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNyQjtZQUNBLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELDBFQUEwRTtRQUMxRSx3RUFBd0U7UUFDeEUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFvQjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUE7O1lBL0Q4QixpQkFBaUI7WUFDcEIsY0FBYzs7QUExQi9CO0lBQVIsS0FBSyxFQUFFO3NEQUFtQjtBQUdsQjtJQUFSLEtBQUssRUFBRTt1REFBb0I7QUFNbkI7SUFBUixLQUFLLEVBQUU7d0RBQWE7QUFNWjtJQUFSLEtBQUssRUFBRTtxREFHUDtBQUVTO0lBQVQsTUFBTSxFQUFFOzBEQUFrRTtBQXRCaEUsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDBVQUEwQztRQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csbUJBQW1CLENBMEYvQjtTQTFGWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkJ1aWxkZXIgfSBmcm9tICcuL3BhZ2luYXRpb24uYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbSwgUGFnaW5hdGlvbkl0ZW1UeXBlIH0gZnJvbSAnLi9wYWdpbmF0aW9uLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYFBhZ2luYXRpb25Db21wb25lbnRgIGlzIGEgZ2VuZXJpYyBjb21wb25lbnQgdGhhdCBpcyB1c2VkIGZvclxuICogYWxsIGxpc3RzIGluIFNwYXJ0YWN1cyB0aGF0IHJlcXVpcmUgcGFnaW5hdGlvbi4gVGhlIGNvbXBvbmVudCBzdXBwb3J0c1xuICogYWxsIGNvbW1vbiBmZWF0dXJlcywgd2hpY2ggY2FuIGJlIGNvbmZpZ3VyZWQgb3IgaGlkZGVuIGJ5IENTUy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuICAvKiogVGhlIChvcHRpb25hbCkgcGFnZVJvdXRlIHVzZWQgZm9yIHRoZSBhbmNob3IgbGlua3MgY3JlYXRlZCBpbiB0aGUgcGFnaW5hdGlvbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VSb3V0ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgKG9wdGlvbmFsKSBxdWVyeSBwYXJhbWV0ZXIgd2hpY2ggaXMgYWRkZWQgdG8gdGhlIHBhZ2Ugcm91dGUuICAqL1xuICBASW5wdXQoKSBxdWVyeVBhcmFtOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZW5ldmVyIHRoZXJlJ3MgYSBkZWZhdWx0IHBhZ2Ugc3BlY2lmaWVkLCB0aGUgcm91dGluZyBsb2dpY1xuICAgKiB3aWxsIG9taXQgdGhlIHBhZ2UgbnVtYmVyIGluIHJvdXRlTGluayBvciBwYXJhbWV0ZXJzLlxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdFBhZ2U7XG5cbiAgcHJpdmF0ZSBfcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBnZXQgcGFnaW5hdGlvbigpOiBQYWdpbmF0aW9uTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9wYWdpbmF0aW9uO1xuICB9XG4gIEBJbnB1dCgpIHNldCBwYWdpbmF0aW9uKHZhbHVlOiBQYWdpbmF0aW9uTW9kZWwpIHtcbiAgICB0aGlzLl9wYWdpbmF0aW9uID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIodmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHZpZXdQYWdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyOiBQYWdpbmF0aW9uQnVpbGRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXIocGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsKSB7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIucGFnaW5hdGUoXG4gICAgICBwYWdpbmF0aW9uLnRvdGFsUGFnZXMsXG4gICAgICBwYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmlkaWNhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIGl0ZW0gaXMgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gUGFnaW5hdGlvbkl0ZW1cbiAgICogQHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgaXNDdXJyZW50KGl0ZW06IFBhZ2luYXRpb25JdGVtKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGl0ZW0udHlwZSA9PT0gUGFnaW5hdGlvbkl0ZW1UeXBlLlBBR0UgJiZcbiAgICAgIGl0ZW0ubnVtYmVyID09PSB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwYWdpbmF0aW9uIGl0ZW0gaXMgaW5hY3RpdmUuIFRoaXMgaXMgdXNlZFxuICAgKiB0byBkaXNhYmxlZCBhIGxpbmsgb3Igc2V0IHRoZSB0YWJpbmRleCB0byBgLTFgLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byB0cnVlXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtIFBhZ2luYXRpb25JdGVtXG4gICAqIEByZXR1cm5zIHJldHVybnMgLTEgaW4gY2FzZSBvZiBhIGRpc2FibGVkXG4gICAqL1xuICBpc0luYWN0aXZlKGl0ZW06IFBhZ2luYXRpb25JdGVtKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFpdGVtLmhhc093blByb3BlcnR5KCdudW1iZXInKSB8fFxuICAgICAgaXRlbS5udW1iZXIgPT09IHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZVxuICAgICk7XG4gIH1cblxuICBnZXRRdWVyeVBhcmFtcyhpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IFBhcmFtcyB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnF1ZXJ5UGFyYW0gJiZcbiAgICAgIGl0ZW0ubnVtYmVyIDwgdGhpcy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgJiZcbiAgICAgICF0aGlzLmlzQ3VycmVudChpdGVtKVxuICAgICkge1xuICAgICAgcXVlcnlQYXJhbXNbdGhpcy5xdWVyeVBhcmFtXSA9IGl0ZW0ubnVtYmVyO1xuICAgIH1cbiAgICAvLyBvbWl0IHRoZSBwYWdlIG51bWJlciBmcm9tIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIGluIGNhc2UgaXQncyB0aGUgZGVmYXVsdFxuICAgIC8vIHRvIGNsZWFuIHVwIHRoZSBleHBlcmllbmNlIGFuZCBhdm9pZCB1bm5lY2Vzc2FyeSBwb2xsdXRpbmcgb2YgdGhlIFVSTFxuICAgIGlmIChxdWVyeVBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1dID09PSB0aGlzLmRlZmF1bHRQYWdlKSB7XG4gICAgICBkZWxldGUgcXVlcnlQYXJhbXNbdGhpcy5xdWVyeVBhcmFtXTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBQYWdpbmF0aW9uSXRlbSk6IHZvaWQge1xuICAgIHRoaXMudmlld1BhZ2VFdmVudC5lbWl0KHBhZ2UubnVtYmVyKTtcbiAgfVxufVxuIl19
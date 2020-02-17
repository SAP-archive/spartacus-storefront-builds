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
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(paginationBuilder, activatedRoute) {
        this.paginationBuilder = paginationBuilder;
        this.activatedRoute = activatedRoute;
        this.viewPageEvent = new EventEmitter();
        this.pages = [];
    }
    Object.defineProperty(PaginationComponent.prototype, "pagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pagination = value;
            this.render(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} pagination
     * @return {?}
     */
    PaginationComponent.prototype.render = /**
     * @private
     * @param {?} pagination
     * @return {?}
     */
    function (pagination) {
        this.pages = this.paginationBuilder.paginate(pagination.totalPages, pagination.currentPage);
    };
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param item PaginationItem
     * @returns boolean
     */
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param {?} item PaginationItem
     * @return {?} boolean
     */
    PaginationComponent.prototype.isCurrent = /**
     * Inidicates whether the given item is the current item.
     *
     * @param {?} item PaginationItem
     * @return {?} boolean
     */
    function (item) {
        return (item.type === PaginationItemType.PAGE &&
            item.number === this.pagination.currentPage);
    };
    /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param item PaginationItem
     * @returns returns -1 in case of a disabled
     */
    /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param {?} item PaginationItem
     * @return {?} returns -1 in case of a disabled
     */
    PaginationComponent.prototype.isInactive = /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param {?} item PaginationItem
     * @return {?} returns -1 in case of a disabled
     */
    function (item) {
        return (!item.hasOwnProperty('number') ||
            item.number === this.pagination.currentPage);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PaginationComponent.prototype.getQueryParams = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
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
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.viewPageEvent.emit(page.number);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-pagination',
                    template: "<a\n  *ngFor=\"let item of pages\"\n  [class]=\"item.type\"\n  [class.disabled]=\"isInactive(item)\"\n  [class.current]=\"isCurrent(item)\"\n  [routerLink]=\"pageRoute\"\n  [queryParams]=\"getQueryParams(item)\"\n  [tabIndex]=\"isInactive(item) ? -1 : 0\"\n  (click)=\"pageChange(item)\"\n>\n  {{ item.label }}\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: PaginationBuilder },
        { type: ActivatedRoute }
    ]; };
    PaginationComponent.propDecorators = {
        pageRoute: [{ type: Input }],
        queryParam: [{ type: Input }],
        defaultPage: [{ type: Input }],
        pagination: [{ type: Input }],
        viewPageEvent: [{ type: Output }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBa0Isa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBT3hFO0lBK0JFLDZCQUNVLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU45QixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNFLFVBQUssR0FBcUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7SUFmSixzQkFBSSwyQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBd0IsS0FBc0I7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FKQTs7Ozs7O0lBZU8sb0NBQU07Ozs7O0lBQWQsVUFBZSxVQUEyQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQzFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3JCLFVBQVUsQ0FBQyxXQUFXLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSCx1Q0FBUzs7Ozs7O0lBQVQsVUFBVSxJQUFvQjtRQUM1QixPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxJQUFJO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDSCx3Q0FBVTs7Ozs7Ozs7O0lBQVYsVUFBVyxJQUFvQjtRQUM3QixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM1QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsSUFBb0I7O1lBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMvQixFQUFFLEVBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN6QztRQUNELElBQ0UsSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUN4QyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ3JCO1lBQ0EsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzVDO1FBQ0QsMEVBQTBFO1FBQzFFLHdFQUF3RTtRQUN4RSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFvQjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBOUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMFVBQTBDO29CQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWlEsaUJBQWlCO2dCQUZqQixjQUFjOzs7NEJBaUJwQixLQUFLOzZCQUdMLEtBQUs7OEJBTUwsS0FBSzs2QkFNTCxLQUFLO2dDQUtMLE1BQU07O0lBb0VULDBCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0ExRlksbUJBQW1COzs7Ozs7SUFFOUIsd0NBQTJCOzs7OztJQUczQix5Q0FBNEI7Ozs7OztJQU01QiwwQ0FBcUI7Ozs7O0lBRXJCLDBDQUFxQzs7SUFTckMsNENBQTJFOztJQUUzRSxvQ0FBNkI7Ozs7O0lBRzNCLGdEQUE0Qzs7Ozs7SUFDNUMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25CdWlsZGVyIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW0sIFBhZ2luYXRpb25JdGVtVHlwZSB9IGZyb20gJy4vcGFnaW5hdGlvbi5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBQYWdpbmF0aW9uQ29tcG9uZW50YCBpcyBhIGdlbmVyaWMgY29tcG9uZW50IHRoYXQgaXMgdXNlZCBmb3JcbiAqIGFsbCBsaXN0cyBpbiBTcGFydGFjdXMgdGhhdCByZXF1aXJlIHBhZ2luYXRpb24uIFRoZSBjb21wb25lbnQgc3VwcG9ydHNcbiAqIGFsbCBjb21tb24gZmVhdHVyZXMsIHdoaWNoIGNhbiBiZSBjb25maWd1cmVkIG9yIGhpZGRlbiBieSBDU1MuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgLyoqIFRoZSAob3B0aW9uYWwpIHBhZ2VSb3V0ZSB1c2VkIGZvciB0aGUgYW5jaG9yIGxpbmtzIGNyZWF0ZWQgaW4gdGhlIHBhZ2luYXRpb24gICAqL1xuICBASW5wdXQoKSBwYWdlUm91dGU6IHN0cmluZztcblxuICAvKiogVGhlIChvcHRpb25hbCkgcXVlcnkgcGFyYW1ldGVyIHdoaWNoIGlzIGFkZGVkIHRvIHRoZSBwYWdlIHJvdXRlLiAgKi9cbiAgQElucHV0KCkgcXVlcnlQYXJhbTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGVuZXZlciB0aGVyZSdzIGEgZGVmYXVsdCBwYWdlIHNwZWNpZmllZCwgdGhlIHJvdXRpbmcgbG9naWNcbiAgICogd2lsbCBvbWl0IHRoZSBwYWdlIG51bWJlciBpbiByb3V0ZUxpbmsgb3IgcGFyYW1ldGVycy5cbiAgICovXG4gIEBJbnB1dCgpIGRlZmF1bHRQYWdlO1xuXG4gIHByaXZhdGUgX3BhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcbiAgZ2V0IHBhZ2luYXRpb24oKTogUGFnaW5hdGlvbk1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnaW5hdGlvbjtcbiAgfVxuICBASW5wdXQoKSBzZXQgcGFnaW5hdGlvbih2YWx1ZTogUGFnaW5hdGlvbk1vZGVsKSB7XG4gICAgdGhpcy5fcGFnaW5hdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyKHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSB2aWV3UGFnZUV2ZW50OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdpbmF0aW9uQnVpbGRlcjogUGFnaW5hdGlvbkJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyKHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbCkge1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLnBhZ2luYXRpb25CdWlsZGVyLnBhZ2luYXRlKFxuICAgICAgcGFnaW5hdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgcGFnaW5hdGlvbi5jdXJyZW50UGFnZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5pZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBpdGVtIGlzIHRoZSBjdXJyZW50IGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtIFBhZ2luYXRpb25JdGVtXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGlzQ3VycmVudChpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpdGVtLnR5cGUgPT09IFBhZ2luYXRpb25JdGVtVHlwZS5QQUdFICYmXG4gICAgICBpdGVtLm51bWJlciA9PT0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBpdGVtIGlzIGluYWN0aXZlLiBUaGlzIGlzIHVzZWRcbiAgICogdG8gZGlzYWJsZWQgYSBsaW5rIG9yIHNldCB0aGUgdGFiaW5kZXggdG8gYC0xYC5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgKiBAcmV0dXJucyByZXR1cm5zIC0xIGluIGNhc2Ugb2YgYSBkaXNhYmxlZFxuICAgKi9cbiAgaXNJbmFjdGl2ZShpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhaXRlbS5oYXNPd25Qcm9wZXJ0eSgnbnVtYmVyJykgfHxcbiAgICAgIGl0ZW0ubnVtYmVyID09PSB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnlQYXJhbXMoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBQYXJhbXMge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1xuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5xdWVyeVBhcmFtICYmXG4gICAgICBpdGVtLm51bWJlciA8IHRoaXMucGFnaW5hdGlvbi50b3RhbFBhZ2VzICYmXG4gICAgICAhdGhpcy5pc0N1cnJlbnQoaXRlbSlcbiAgICApIHtcbiAgICAgIHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV0gPSBpdGVtLm51bWJlcjtcbiAgICB9XG4gICAgLy8gb21pdCB0aGUgcGFnZSBudW1iZXIgZnJvbSB0aGUgcXVlcnkgcGFyYW1ldGVycyBpbiBjYXNlIGl0J3MgdGhlIGRlZmF1bHRcbiAgICAvLyB0byBjbGVhbiB1cCB0aGUgZXhwZXJpZW5jZSBhbmQgYXZvaWQgdW5uZWNlc3NhcnkgcG9sbHV0aW5nIG9mIHRoZSBVUkxcbiAgICBpZiAocXVlcnlQYXJhbXNbdGhpcy5xdWVyeVBhcmFtXSA9PT0gdGhpcy5kZWZhdWx0UGFnZSkge1xuICAgICAgZGVsZXRlIHF1ZXJ5UGFyYW1zW3RoaXMucXVlcnlQYXJhbV07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogUGFnaW5hdGlvbkl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdQYWdlRXZlbnQuZW1pdChwYWdlLm51bWJlcik7XG4gIH1cbn1cbiJdfQ==
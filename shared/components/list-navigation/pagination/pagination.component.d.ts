import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaginationModel } from '@spartacus/core';
import { PaginationBuilder } from './pagination.builder';
import { PaginationItem } from './pagination.model';
/**
 * The `PaginationComponent` is a generic component that is used for
 * all lists in Spartacus that require pagination. The component supports
 * all common features, which can be configured or hidden by CSS.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PaginationComponent {
    private paginationBuilder;
    private activatedRoute;
    /** The (optional) pageRoute used for the anchor links created in the pagination   */
    pageRoute: string;
    /** The (optional) query parameter which is added to the page route.  */
    queryParam: string;
    /**
     * Whenever there's a default page specified, the routing logic
     * will omit the page number in routeLink or parameters.
     */
    defaultPage: any;
    private _pagination;
    get pagination(): PaginationModel;
    set pagination(value: PaginationModel);
    viewPageEvent: EventEmitter<number>;
    pages: PaginationItem[];
    constructor(paginationBuilder: PaginationBuilder, activatedRoute: ActivatedRoute);
    private render;
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param item PaginationItem
     * @returns boolean
     */
    isCurrent(item: PaginationItem): boolean;
    /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param item PaginationItem
     * @returns returns -1 in case of a disabled
     */
    isInactive(item: PaginationItem): boolean;
    getQueryParams(item: PaginationItem): Params;
    pageChange(page: PaginationItem): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaginationComponent, "cx-pagination", never, {
    "pagination": "pagination";
    "pageRoute": "pageRoute";
    "queryParam": "queryParam";
    "defaultPage": "defaultPage";
}, {
    "viewPageEvent": "viewPageEvent";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25CdWlsZGVyIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW0gfSBmcm9tICcuL3BhZ2luYXRpb24ubW9kZWwnO1xuLyoqXG4gKiBUaGUgYFBhZ2luYXRpb25Db21wb25lbnRgIGlzIGEgZ2VuZXJpYyBjb21wb25lbnQgdGhhdCBpcyB1c2VkIGZvclxuICogYWxsIGxpc3RzIGluIFNwYXJ0YWN1cyB0aGF0IHJlcXVpcmUgcGFnaW5hdGlvbi4gVGhlIGNvbXBvbmVudCBzdXBwb3J0c1xuICogYWxsIGNvbW1vbiBmZWF0dXJlcywgd2hpY2ggY2FuIGJlIGNvbmZpZ3VyZWQgb3IgaGlkZGVuIGJ5IENTUy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBwYWdpbmF0aW9uQnVpbGRlcjtcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlO1xuICAgIC8qKiBUaGUgKG9wdGlvbmFsKSBwYWdlUm91dGUgdXNlZCBmb3IgdGhlIGFuY2hvciBsaW5rcyBjcmVhdGVkIGluIHRoZSBwYWdpbmF0aW9uICAgKi9cbiAgICBwYWdlUm91dGU6IHN0cmluZztcbiAgICAvKiogVGhlIChvcHRpb25hbCkgcXVlcnkgcGFyYW1ldGVyIHdoaWNoIGlzIGFkZGVkIHRvIHRoZSBwYWdlIHJvdXRlLiAgKi9cbiAgICBxdWVyeVBhcmFtOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2hlbmV2ZXIgdGhlcmUncyBhIGRlZmF1bHQgcGFnZSBzcGVjaWZpZWQsIHRoZSByb3V0aW5nIGxvZ2ljXG4gICAgICogd2lsbCBvbWl0IHRoZSBwYWdlIG51bWJlciBpbiByb3V0ZUxpbmsgb3IgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBkZWZhdWx0UGFnZTogYW55O1xuICAgIHByaXZhdGUgX3BhZ2luYXRpb247XG4gICAgZ2V0IHBhZ2luYXRpb24oKTogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNldCBwYWdpbmF0aW9uKHZhbHVlOiBQYWdpbmF0aW9uTW9kZWwpO1xuICAgIHZpZXdQYWdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIHBhZ2VzOiBQYWdpbmF0aW9uSXRlbVtdO1xuICAgIGNvbnN0cnVjdG9yKHBhZ2luYXRpb25CdWlsZGVyOiBQYWdpbmF0aW9uQnVpbGRlciwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTtcbiAgICBwcml2YXRlIHJlbmRlcjtcbiAgICAvKipcbiAgICAgKiBJbmlkaWNhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIGl0ZW0gaXMgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpdGVtIFBhZ2luYXRpb25JdGVtXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGlzQ3VycmVudChpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gaXRlbSBpcyBpbmFjdGl2ZS4gVGhpcyBpcyB1c2VkXG4gICAgICogdG8gZGlzYWJsZWQgYSBsaW5rIG9yIHNldCB0aGUgdGFiaW5kZXggdG8gYC0xYC5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpdGVtIFBhZ2luYXRpb25JdGVtXG4gICAgICogQHJldHVybnMgcmV0dXJucyAtMSBpbiBjYXNlIG9mIGEgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBpc0luYWN0aXZlKGl0ZW06IFBhZ2luYXRpb25JdGVtKTogYm9vbGVhbjtcbiAgICBnZXRRdWVyeVBhcmFtcyhpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IFBhcmFtcztcbiAgICBwYWdlQ2hhbmdlKHBhZ2U6IFBhZ2luYXRpb25JdGVtKTogdm9pZDtcbn1cbiJdfQ==
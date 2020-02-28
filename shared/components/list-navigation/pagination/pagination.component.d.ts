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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQnVpbGRlciB9IGZyb20gJy4vcGFnaW5hdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtIH0gZnJvbSAnLi9wYWdpbmF0aW9uLm1vZGVsJztcbi8qKlxuICogVGhlIGBQYWdpbmF0aW9uQ29tcG9uZW50YCBpcyBhIGdlbmVyaWMgY29tcG9uZW50IHRoYXQgaXMgdXNlZCBmb3JcbiAqIGFsbCBsaXN0cyBpbiBTcGFydGFjdXMgdGhhdCByZXF1aXJlIHBhZ2luYXRpb24uIFRoZSBjb21wb25lbnQgc3VwcG9ydHNcbiAqIGFsbCBjb21tb24gZmVhdHVyZXMsIHdoaWNoIGNhbiBiZSBjb25maWd1cmVkIG9yIGhpZGRlbiBieSBDU1MuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuICAgIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICAvKiogVGhlIChvcHRpb25hbCkgcGFnZVJvdXRlIHVzZWQgZm9yIHRoZSBhbmNob3IgbGlua3MgY3JlYXRlZCBpbiB0aGUgcGFnaW5hdGlvbiAgICovXG4gICAgcGFnZVJvdXRlOiBzdHJpbmc7XG4gICAgLyoqIFRoZSAob3B0aW9uYWwpIHF1ZXJ5IHBhcmFtZXRlciB3aGljaCBpcyBhZGRlZCB0byB0aGUgcGFnZSByb3V0ZS4gICovXG4gICAgcXVlcnlQYXJhbTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdoZW5ldmVyIHRoZXJlJ3MgYSBkZWZhdWx0IHBhZ2Ugc3BlY2lmaWVkLCB0aGUgcm91dGluZyBsb2dpY1xuICAgICAqIHdpbGwgb21pdCB0aGUgcGFnZSBudW1iZXIgaW4gcm91dGVMaW5rIG9yIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgZGVmYXVsdFBhZ2U6IGFueTtcbiAgICBwcml2YXRlIF9wYWdpbmF0aW9uO1xuICAgIGdldCBwYWdpbmF0aW9uKCk6IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzZXQgcGFnaW5hdGlvbih2YWx1ZTogUGFnaW5hdGlvbk1vZGVsKTtcbiAgICB2aWV3UGFnZUV2ZW50OiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBwYWdlczogUGFnaW5hdGlvbkl0ZW1bXTtcbiAgICBjb25zdHJ1Y3RvcihwYWdpbmF0aW9uQnVpbGRlcjogUGFnaW5hdGlvbkJ1aWxkZXIsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgcHJpdmF0ZSByZW5kZXI7XG4gICAgLyoqXG4gICAgICogSW5pZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBpdGVtIGlzIHRoZSBjdXJyZW50IGl0ZW0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0N1cnJlbnQoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwYWdpbmF0aW9uIGl0ZW0gaXMgaW5hY3RpdmUuIFRoaXMgaXMgdXNlZFxuICAgICAqIHRvIGRpc2FibGVkIGEgbGluayBvciBzZXQgdGhlIHRhYmluZGV4IHRvIGAtMWAuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0cyB0byB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaXRlbSBQYWdpbmF0aW9uSXRlbVxuICAgICAqIEByZXR1cm5zIHJldHVybnMgLTEgaW4gY2FzZSBvZiBhIGRpc2FibGVkXG4gICAgICovXG4gICAgaXNJbmFjdGl2ZShpdGVtOiBQYWdpbmF0aW9uSXRlbSk6IGJvb2xlYW47XG4gICAgZ2V0UXVlcnlQYXJhbXMoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBQYXJhbXM7XG4gICAgcGFnZUNoYW5nZShwYWdlOiBQYWdpbmF0aW9uSXRlbSk6IHZvaWQ7XG59XG4iXX0=
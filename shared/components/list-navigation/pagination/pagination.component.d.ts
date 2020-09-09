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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaginationComponent, "cx-pagination", never, { "pagination": "pagination"; "pageRoute": "pageRoute"; "queryParam": "queryParam"; "defaultPage": "defaultPage"; }, { "viewPageEvent": "viewPageEvent"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkJ1aWxkZXIgfSBmcm9tICcuL3BhZ2luYXRpb24uYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbSB9IGZyb20gJy4vcGFnaW5hdGlvbi5tb2RlbCc7XG4vKipcbiAqIFRoZSBgUGFnaW5hdGlvbkNvbXBvbmVudGAgaXMgYSBnZW5lcmljIGNvbXBvbmVudCB0aGF0IGlzIHVzZWQgZm9yXG4gKiBhbGwgbGlzdHMgaW4gU3BhcnRhY3VzIHRoYXQgcmVxdWlyZSBwYWdpbmF0aW9uLiBUaGUgY29tcG9uZW50IHN1cHBvcnRzXG4gKiBhbGwgY29tbW9uIGZlYXR1cmVzLCB3aGljaCBjYW4gYmUgY29uZmlndXJlZCBvciBoaWRkZW4gYnkgQ1NTLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyO1xuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU7XG4gICAgLyoqIFRoZSAob3B0aW9uYWwpIHBhZ2VSb3V0ZSB1c2VkIGZvciB0aGUgYW5jaG9yIGxpbmtzIGNyZWF0ZWQgaW4gdGhlIHBhZ2luYXRpb24gICAqL1xuICAgIHBhZ2VSb3V0ZTogc3RyaW5nO1xuICAgIC8qKiBUaGUgKG9wdGlvbmFsKSBxdWVyeSBwYXJhbWV0ZXIgd2hpY2ggaXMgYWRkZWQgdG8gdGhlIHBhZ2Ugcm91dGUuICAqL1xuICAgIHF1ZXJ5UGFyYW06IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaGVuZXZlciB0aGVyZSdzIGEgZGVmYXVsdCBwYWdlIHNwZWNpZmllZCwgdGhlIHJvdXRpbmcgbG9naWNcbiAgICAgKiB3aWxsIG9taXQgdGhlIHBhZ2UgbnVtYmVyIGluIHJvdXRlTGluayBvciBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIGRlZmF1bHRQYWdlOiBhbnk7XG4gICAgcHJpdmF0ZSBfcGFnaW5hdGlvbjtcbiAgICBnZXQgcGFnaW5hdGlvbigpOiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgc2V0IHBhZ2luYXRpb24odmFsdWU6IFBhZ2luYXRpb25Nb2RlbCk7XG4gICAgdmlld1BhZ2VFdmVudDogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgcGFnZXM6IFBhZ2luYXRpb25JdGVtW107XG4gICAgY29uc3RydWN0b3IocGFnaW5hdGlvbkJ1aWxkZXI6IFBhZ2luYXRpb25CdWlsZGVyLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpO1xuICAgIHByaXZhdGUgcmVuZGVyO1xuICAgIC8qKlxuICAgICAqIEluaWRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gaXRlbSBpcyB0aGUgY3VycmVudCBpdGVtLlxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZW0gUGFnaW5hdGlvbkl0ZW1cbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNDdXJyZW50KGl0ZW06IFBhZ2luYXRpb25JdGVtKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBpdGVtIGlzIGluYWN0aXZlLiBUaGlzIGlzIHVzZWRcbiAgICAgKiB0byBkaXNhYmxlZCBhIGxpbmsgb3Igc2V0IHRoZSB0YWJpbmRleCB0byBgLTFgLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZW0gUGFnaW5hdGlvbkl0ZW1cbiAgICAgKiBAcmV0dXJucyByZXR1cm5zIC0xIGluIGNhc2Ugb2YgYSBkaXNhYmxlZFxuICAgICAqL1xuICAgIGlzSW5hY3RpdmUoaXRlbTogUGFnaW5hdGlvbkl0ZW0pOiBib29sZWFuO1xuICAgIGdldFF1ZXJ5UGFyYW1zKGl0ZW06IFBhZ2luYXRpb25JdGVtKTogUGFyYW1zO1xuICAgIHBhZ2VDaGFuZ2UocGFnZTogUGFnaW5hdGlvbkl0ZW0pOiB2b2lkO1xufVxuIl19
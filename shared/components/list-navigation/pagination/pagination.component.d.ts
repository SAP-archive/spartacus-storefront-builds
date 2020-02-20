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

//# sourceMappingURL=pagination.component.d.ts.map
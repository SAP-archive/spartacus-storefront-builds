import { HttpUrlEncodingCodec } from '@angular/common/http';
import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facet, ProductSearchPage } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { ProductListComponentService } from '../container/product-list-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductFacetNavigationComponent implements OnInit, OnDestroy {
    private modalService;
    private activatedRoute;
    private productListComponentService;
    private sub;
    iconTypes: typeof ICON_TYPE;
    activeFacetValueCode: string;
    searchResult: ProductSearchPage;
    showAllPerFacetMap: Map<String, boolean>;
    protected queryCodec: HttpUrlEncodingCodec;
    private collapsedFacets;
    searchResult$: Observable<ProductSearchPage>;
    visibleFacets$: Observable<Facet[]>;
    constructor(modalService: ModalService, activatedRoute: ActivatedRoute, productListComponentService: ProductListComponentService);
    ngOnInit(): void;
    openFilterModal(content: any): void;
    toggleValue(query: string): void;
    showLess(facetName: String): void;
    showMore(facetName: String): void;
    private updateShowAllPerFacetMap;
    isFacetCollapsed(facetName: string): boolean;
    toggleFacet(facetName: string): void;
    getVisibleFacetValues(facet: Facet): Facet[];
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductFacetNavigationComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductFacetNavigationComponent, "cx-product-facet-navigation", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGYWNldCwgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9jb250YWluZXIvcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTtcbiAgICBwcml2YXRlIHN1YjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgYWN0aXZlRmFjZXRWYWx1ZUNvZGU6IHN0cmluZztcbiAgICBzZWFyY2hSZXN1bHQ6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICAgIHNob3dBbGxQZXJGYWNldE1hcDogTWFwPFN0cmluZywgYm9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHF1ZXJ5Q29kZWM6IEh0dHBVcmxFbmNvZGluZ0NvZGVjO1xuICAgIHByaXZhdGUgY29sbGFwc2VkRmFjZXRzO1xuICAgIHNlYXJjaFJlc3VsdCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICAgIHZpc2libGVGYWNldHMkOiBPYnNlcnZhYmxlPEZhY2V0W10+O1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9wZW5GaWx0ZXJNb2RhbChjb250ZW50OiBhbnkpOiB2b2lkO1xuICAgIHRvZ2dsZVZhbHVlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkO1xuICAgIHNob3dMZXNzKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZDtcbiAgICBzaG93TW9yZShmYWNldE5hbWU6IFN0cmluZyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSB1cGRhdGVTaG93QWxsUGVyRmFjZXRNYXA7XG4gICAgaXNGYWNldENvbGxhcHNlZChmYWNldE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgdG9nZ2xlRmFjZXQoZmFjZXROYW1lOiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldFZpc2libGVGYWNldFZhbHVlcyhmYWNldDogRmFjZXQpOiBGYWNldFtdO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=
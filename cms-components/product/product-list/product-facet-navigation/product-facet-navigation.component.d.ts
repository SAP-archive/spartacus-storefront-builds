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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductFacetNavigationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductFacetNavigationComponent, "cx-product-facet-navigation", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZhY2V0LCBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL2NvbnRhaW5lci9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTtcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlO1xuICAgIHByaXZhdGUgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3ViO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBhY3RpdmVGYWNldFZhbHVlQ29kZTogc3RyaW5nO1xuICAgIHNlYXJjaFJlc3VsdDogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gICAgc2hvd0FsbFBlckZhY2V0TWFwOiBNYXA8U3RyaW5nLCBib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgcXVlcnlDb2RlYzogSHR0cFVybEVuY29kaW5nQ29kZWM7XG4gICAgcHJpdmF0ZSBjb2xsYXBzZWRGYWNldHM7XG4gICAgc2VhcmNoUmVzdWx0JDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgdmlzaWJsZUZhY2V0cyQ6IE9ic2VydmFibGU8RmFjZXRbXT47XG4gICAgY29uc3RydWN0b3IobW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb3BlbkZpbHRlck1vZGFsKGNvbnRlbnQ6IGFueSk6IHZvaWQ7XG4gICAgdG9nZ2xlVmFsdWUocXVlcnk6IHN0cmluZyk6IHZvaWQ7XG4gICAgc2hvd0xlc3MoZmFjZXROYW1lOiBTdHJpbmcpOiB2b2lkO1xuICAgIHNob3dNb3JlKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIHVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcDtcbiAgICBpc0ZhY2V0Q29sbGFwc2VkKGZhY2V0TmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICB0b2dnbGVGYWNldChmYWNldE5hbWU6IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0VmlzaWJsZUZhY2V0VmFsdWVzKGZhY2V0OiBGYWNldCk6IEZhY2V0W107XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==
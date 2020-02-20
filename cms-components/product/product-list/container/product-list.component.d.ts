import { OnDestroy, OnInit } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewConfig } from '../../../../shared/config/view-config';
import { ViewModes } from '../product-view/product-view.component';
import { ProductListComponentService } from './product-list-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductListComponent implements OnInit, OnDestroy {
    private pageLayoutService;
    private productListComponentService;
    scrollConfig?: ViewConfig;
    private subscription;
    isInfiniteScroll: boolean;
    model$: Observable<ProductSearchPage>;
    viewMode$: BehaviorSubject<ViewModes>;
    ViewModes: typeof ViewModes;
    constructor(pageLayoutService: PageLayoutService, productListComponentService: ProductListComponentService, scrollConfig: ViewConfig);
    /**
     * @deprecated since version 1.x
     *  Use constructor(pageLayoutService: PageLayoutService,
     *  productListComponentService: ProductListComponentService,
     *  ref: ChangeDetectorRef,
     *  scrollConfig: ViewConfig) instead
     */
    constructor(pageLayoutService: PageLayoutService, productListComponentService: ProductListComponentService);
    ngOnInit(): void;
    sortList(sortCode: string): void;
    setViewMode(mode: ViewModes): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductListComponent, "cx-product-list", never, {}, {}, never>;
}

//# sourceMappingURL=product-list.component.d.ts.map
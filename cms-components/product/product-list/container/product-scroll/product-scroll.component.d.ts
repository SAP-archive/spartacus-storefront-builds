import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { ViewModes } from '../../product-view/product-view.component';
import { ProductListComponentService } from '../product-list-component.service';
import { ViewConfig } from '../../../../../shared/config/view-config';
import * as ɵngcc0 from '@angular/core';
export declare class ProductScrollComponent implements OnDestroy {
    private productListComponentService;
    private ref;
    private subscription;
    set setConfig(inputConfig: ViewConfig);
    model: ProductSearchPage;
    set setModel(inputModel: ProductSearchPage);
    inputViewMode: ViewModes;
    set setViewMode(inputViewMode: ViewModes);
    viewMode: ViewModes;
    productLimit: number;
    maxProducts: number;
    ViewModes: typeof ViewModes;
    appendProducts: boolean;
    resetList: boolean;
    isMaxProducts: boolean;
    isLastPage: boolean;
    isEmpty: boolean;
    constructor(productListComponentService: ProductListComponentService, ref: ChangeDetectorRef);
    scrollPage(pageNumber: number): void;
    loadNextPage(pageNumber: number): void;
    scrollToTop(): void;
    private setComponentConfigurations;
    private infiniteScrollOperations;
    private resetListOnViewModeChange;
    private setConditions;
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     */
    private isSamePage;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductScrollComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductScrollComponent, "cx-product-scroll", never, {
    "setConfig": "scrollConfig";
    "setModel": "model";
    "setViewMode": "inputViewMode";
}, {}, never>;
}

//# sourceMappingURL=product-scroll.component.d.ts.map
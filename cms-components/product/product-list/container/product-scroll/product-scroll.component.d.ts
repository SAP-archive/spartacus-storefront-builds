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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgVmlld01vZGVzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RTY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVmO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIHNldCBzZXRDb25maWcoaW5wdXRDb25maWc6IFZpZXdDb25maWcpO1xuICAgIG1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZTtcbiAgICBzZXQgc2V0TW9kZWwoaW5wdXRNb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2UpO1xuICAgIGlucHV0Vmlld01vZGU6IFZpZXdNb2RlcztcbiAgICBzZXQgc2V0Vmlld01vZGUoaW5wdXRWaWV3TW9kZTogVmlld01vZGVzKTtcbiAgICB2aWV3TW9kZTogVmlld01vZGVzO1xuICAgIHByb2R1Y3RMaW1pdDogbnVtYmVyO1xuICAgIG1heFByb2R1Y3RzOiBudW1iZXI7XG4gICAgVmlld01vZGVzOiB0eXBlb2YgVmlld01vZGVzO1xuICAgIGFwcGVuZFByb2R1Y3RzOiBib29sZWFuO1xuICAgIHJlc2V0TGlzdDogYm9vbGVhbjtcbiAgICBpc01heFByb2R1Y3RzOiBib29sZWFuO1xuICAgIGlzTGFzdFBhZ2U6IGJvb2xlYW47XG4gICAgaXNFbXB0eTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgc2Nyb2xsUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIGxvYWROZXh0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIHNjcm9sbFRvVG9wKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZXRDb21wb25lbnRDb25maWd1cmF0aW9ucztcbiAgICBwcml2YXRlIGluZmluaXRlU2Nyb2xsT3BlcmF0aW9ucztcbiAgICBwcml2YXRlIHJlc2V0TGlzdE9uVmlld01vZGVDaGFuZ2U7XG4gICAgcHJpdmF0ZSBzZXRDb25kaXRpb25zO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGF0IHJlbGVhc2UgMi4wLlxuICAgICAqIElmIHRoZSBuZXcgbGlzdCBpcyB0aGUgc2FtZSBhbmQgaXQgaXMgbm90IGludGVuZGVkIHRvIHJlc2V0IHRoZSBsaXN0IHRoZW4gcmV0dXJuIHRydWVcbiAgICAgKiBSZXR1cm4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNTYW1lUGFnZTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0U2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTtcbiAgICBwcml2YXRlIHJlZjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBzZXQgc2V0Q29uZmlnKGlucHV0Q29uZmlnOiBWaWV3Q29uZmlnKTtcbiAgICBtb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gICAgc2V0IHNldE1vZGVsKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKTtcbiAgICBpbnB1dFZpZXdNb2RlOiBWaWV3TW9kZXM7XG4gICAgc2V0IHNldFZpZXdNb2RlKGlucHV0Vmlld01vZGU6IFZpZXdNb2Rlcyk7XG4gICAgdmlld01vZGU6IFZpZXdNb2RlcztcbiAgICBwcm9kdWN0TGltaXQ6IG51bWJlcjtcbiAgICBtYXhQcm9kdWN0czogbnVtYmVyO1xuICAgIFZpZXdNb2RlczogdHlwZW9mIFZpZXdNb2RlcztcbiAgICBhcHBlbmRQcm9kdWN0czogYm9vbGVhbjtcbiAgICByZXNldExpc3Q6IGJvb2xlYW47XG4gICAgaXNNYXhQcm9kdWN0czogYm9vbGVhbjtcbiAgICBpc0xhc3RQYWdlOiBib29sZWFuO1xuICAgIGlzRW1wdHk6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IocHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIHNjcm9sbFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBsb2FkTmV4dFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBzY3JvbGxUb1RvcCgpOiB2b2lkO1xuICAgIHByaXZhdGUgc2V0Q29tcG9uZW50Q29uZmlndXJhdGlvbnM7XG4gICAgcHJpdmF0ZSBpbmZpbml0ZVNjcm9sbE9wZXJhdGlvbnM7XG4gICAgcHJpdmF0ZSByZXNldExpc3RPblZpZXdNb2RlQ2hhbmdlO1xuICAgIHByaXZhdGUgc2V0Q29uZGl0aW9ucztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBhdCByZWxlYXNlIDIuMC5cbiAgICAgKiBJZiB0aGUgbmV3IGxpc3QgaXMgdGhlIHNhbWUgYW5kIGl0IGlzIG5vdCBpbnRlbmRlZCB0byByZXNldCB0aGUgbGlzdCB0aGVuIHJldHVybiB0cnVlXG4gICAgICogUmV0dXJuIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzU2FtZVBhZ2U7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==
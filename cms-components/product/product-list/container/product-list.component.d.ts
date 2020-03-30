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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductListComponent, "cx-product-list", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnJztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U7XG4gICAgc2Nyb2xsQ29uZmlnPzogVmlld0NvbmZpZztcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBpc0luZmluaXRlU2Nyb2xsOiBib29sZWFuO1xuICAgIG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgdmlld01vZGUkOiBCZWhhdmlvclN1YmplY3Q8Vmlld01vZGVzPjtcbiAgICBWaWV3TW9kZXM6IHR5cGVvZiBWaWV3TW9kZXM7XG4gICAgY29uc3RydWN0b3IocGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlLCBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSwgc2Nyb2xsQ29uZmlnOiBWaWV3Q29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEueFxuICAgICAqICBVc2UgY29uc3RydWN0b3IocGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlLFxuICAgICAqICBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSxcbiAgICAgKiAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgKiAgc2Nyb2xsQ29uZmlnOiBWaWV3Q29uZmlnKSBpbnN0ZWFkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlLCBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZDtcbiAgICBzZXRWaWV3TW9kZShtb2RlOiBWaWV3TW9kZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=
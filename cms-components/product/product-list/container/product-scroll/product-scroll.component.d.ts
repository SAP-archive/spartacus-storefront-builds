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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductScrollComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductScrollComponent, "cx-product-scroll", never, { "setConfig": "scrollConfig"; "setModel": "model"; "setViewMode": "inputViewMode"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBWaWV3TW9kZXMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFNjcm9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWY7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgc2V0IHNldENvbmZpZyhpbnB1dENvbmZpZzogVmlld0NvbmZpZyk7XG4gICAgbW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICAgIHNldCBzZXRNb2RlbChpbnB1dE1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZSk7XG4gICAgaW5wdXRWaWV3TW9kZTogVmlld01vZGVzO1xuICAgIHNldCBzZXRWaWV3TW9kZShpbnB1dFZpZXdNb2RlOiBWaWV3TW9kZXMpO1xuICAgIHZpZXdNb2RlOiBWaWV3TW9kZXM7XG4gICAgcHJvZHVjdExpbWl0OiBudW1iZXI7XG4gICAgbWF4UHJvZHVjdHM6IG51bWJlcjtcbiAgICBWaWV3TW9kZXM6IHR5cGVvZiBWaWV3TW9kZXM7XG4gICAgYXBwZW5kUHJvZHVjdHM6IGJvb2xlYW47XG4gICAgcmVzZXRMaXN0OiBib29sZWFuO1xuICAgIGlzTWF4UHJvZHVjdHM6IGJvb2xlYW47XG4gICAgaXNMYXN0UGFnZTogYm9vbGVhbjtcbiAgICBpc0VtcHR5OiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBzY3JvbGxQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgbG9hZE5leHRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgc2Nyb2xsVG9Ub3AoKTogdm9pZDtcbiAgICBwcml2YXRlIHNldENvbXBvbmVudENvbmZpZ3VyYXRpb25zO1xuICAgIHByaXZhdGUgaW5maW5pdGVTY3JvbGxPcGVyYXRpb25zO1xuICAgIHByaXZhdGUgcmVzZXRMaXN0T25WaWV3TW9kZUNoYW5nZTtcbiAgICBwcml2YXRlIHNldENvbmRpdGlvbnM7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgYXQgcmVsZWFzZSAyLjAuXG4gICAgICogSWYgdGhlIG5ldyBsaXN0IGlzIHRoZSBzYW1lIGFuZCBpdCBpcyBub3QgaW50ZW5kZWQgdG8gcmVzZXQgdGhlIGxpc3QgdGhlbiByZXR1cm4gdHJ1ZVxuICAgICAqIFJldHVybiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1NhbWVQYWdlO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=
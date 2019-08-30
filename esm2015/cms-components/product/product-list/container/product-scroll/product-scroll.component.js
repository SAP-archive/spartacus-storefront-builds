/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ViewModes } from '../../product-view/product-view.component';
import { Subscription } from 'rxjs';
import { ProductListComponentService } from '../product-list-component.service';
import { ViewConfig } from '../../../../../shared/config/view-config';
export class ProductScrollComponent {
    /**
     * @param {?} productListComponentService
     * @param {?} ref
     */
    constructor(productListComponentService, ref) {
        this.productListComponentService = productListComponentService;
        this.ref = ref;
        this.subscription = new Subscription();
        this.ViewModes = ViewModes;
        this.appendProducts = false;
        this.resetList = false;
        this.isMaxProducts = false;
        this.isLastPage = false;
        this.isEmpty = false;
    }
    /**
     * @param {?} inputConfig
     * @return {?}
     */
    set setConfig(inputConfig) {
        this.setComponentConfigurations(inputConfig);
    }
    /**
     * @param {?} inputModel
     * @return {?}
     */
    set setModel(inputModel) {
        this.infiniteScrollOperations(inputModel);
    }
    /**
     * @param {?} inputViewMode
     * @return {?}
     */
    set setViewMode(inputViewMode) {
        this.inputViewMode = inputViewMode;
        //If viewMode is already set (meaning it is not the first load)
        //Reset the product list
        if (this.viewMode) {
            this.resetListOnViewModeChange();
        }
        else {
            //If viewMode is not set (meaning it is the first load)
            //Set the viewMode
            this.viewMode = inputViewMode;
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    scrollPage(pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    loadNextPage(pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    }
    /**
     * @return {?}
     */
    scrollToTop() {
        window.scroll(0, 0);
    }
    /**
     * @private
     * @param {?} scrollConfig
     * @return {?}
     */
    setComponentConfigurations(scrollConfig) {
        /** @type {?} */
        const isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        /** @type {?} */
        const configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    }
    /**
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    infiniteScrollOperations(inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = Object.assign({}, inputModel, { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    resetListOnViewModeChange() {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    }
    //Set booleans after model has been retrieved
    /**
     * @private
     * @return {?}
     */
    setConditions() {
        this.isEmpty = !this.model.products || this.model.products.length === 0;
        this.isLastPage =
            this.model.pagination.currentPage ===
                this.model.pagination.totalPages - 1;
        this.isMaxProducts =
            this.productLimit &&
                this.productLimit !== 0 &&
                this.model.products.length >= this.maxProducts;
        //Add the productLimit to the current number of products to determine the next max number of products
        if (this.isMaxProducts) {
            this.maxProducts = this.model.products.length + this.productLimit;
        }
        //Only change viewMode once the new model is set
        //This prevents flickering issues
        if (this.viewMode !== this.inputViewMode) {
            this.viewMode = this.inputViewMode;
        }
        this.resetList = false;
        this.appendProducts = false;
    }
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    isSamePage(inputModel) {
        if (!this.resetList &&
            this.model &&
            this.model.breadcrumbs &&
            inputModel.breadcrumbs &&
            this.model.breadcrumbs.length > 0 &&
            inputModel.breadcrumbs.length > 0) {
            if (this.model.breadcrumbs.length === inputModel.breadcrumbs.length) {
                for (let i = 0; i < this.model.breadcrumbs.length; i++) {
                    if (this.model.breadcrumbs[i].facetCode ===
                        inputModel.breadcrumbs[i].facetCode &&
                        this.model.breadcrumbs[i].facetValueCode ===
                            inputModel.breadcrumbs[i].facetValueCode &&
                        this.model.breadcrumbs[i].removeQuery.query.value ===
                            inputModel.breadcrumbs[i].removeQuery.query.value &&
                        this.model.pagination.currentPage ===
                            inputModel.pagination.currentPage) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ProductScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-scroll',
                template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ProductScrollComponent.ctorParameters = () => [
    { type: ProductListComponentService },
    { type: ChangeDetectorRef }
];
ProductScrollComponent.propDecorators = {
    setConfig: [{ type: Input, args: ['scrollConfig',] }],
    setModel: [{ type: Input, args: ['model',] }],
    setViewMode: [{ type: Input, args: ['inputViewMode',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductScrollComponent.prototype.subscription;
    /** @type {?} */
    ProductScrollComponent.prototype.model;
    /** @type {?} */
    ProductScrollComponent.prototype.inputViewMode;
    /** @type {?} */
    ProductScrollComponent.prototype.viewMode;
    /** @type {?} */
    ProductScrollComponent.prototype.productLimit;
    /** @type {?} */
    ProductScrollComponent.prototype.maxProducts;
    /** @type {?} */
    ProductScrollComponent.prototype.ViewModes;
    /** @type {?} */
    ProductScrollComponent.prototype.appendProducts;
    /** @type {?} */
    ProductScrollComponent.prototype.resetList;
    /** @type {?} */
    ProductScrollComponent.prototype.isMaxProducts;
    /** @type {?} */
    ProductScrollComponent.prototype.isLastPage;
    /** @type {?} */
    ProductScrollComponent.prototype.isEmpty;
    /**
     * @type {?}
     * @private
     */
    ProductScrollComponent.prototype.productListComponentService;
    /**
     * @type {?}
     * @private
     */
    ProductScrollComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXRFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBd0NqQyxZQUNVLDJCQUF3RCxFQUN4RCxHQUFzQjtRQUR0QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekN4QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFnQzFDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLYixDQUFDOzs7OztJQXhDSixJQUNJLFNBQVMsQ0FBQyxXQUF1QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFHRCxJQUNJLFFBQVEsQ0FBQyxVQUE2QjtRQUN4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bmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zY3JvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1zY3JvbGwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQElucHV0KCdzY3JvbGxDb25maWcnKVxuICBzZXQgc2V0Q29uZmlnKGlucHV0Q29uZmlnOiBWaWV3Q29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb21wb25lbnRDb25maWd1cmF0aW9ucyhpbnB1dENvbmZpZyk7XG4gIH1cblxuICBtb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gIEBJbnB1dCgnbW9kZWwnKVxuICBzZXQgc2V0TW9kZWwoaW5wdXRNb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2UpIHtcbiAgICB0aGlzLmluZmluaXRlU2Nyb2xsT3BlcmF0aW9ucyhpbnB1dE1vZGVsKTtcbiAgfVxuXG4gIGlucHV0Vmlld01vZGU6IFZpZXdNb2RlcztcbiAgQElucHV0KCdpbnB1dFZpZXdNb2RlJylcbiAgc2V0IHNldFZpZXdNb2RlKGlucHV0Vmlld01vZGU6IFZpZXdNb2Rlcykge1xuICAgIHRoaXMuaW5wdXRWaWV3TW9kZSA9IGlucHV0Vmlld01vZGU7XG4gICAgLy9JZiB2aWV3TW9kZSBpcyBhbHJlYWR5IHNldCAobWVhbmluZyBpdCBpcyBub3QgdGhlIGZpcnN0IGxvYWQpXG4gICAgLy9SZXNldCB0aGUgcHJvZHVjdCBsaXN0XG4gICAgaWYgKHRoaXMudmlld01vZGUpIHtcbiAgICAgIHRoaXMucmVzZXRMaXN0T25WaWV3TW9kZUNoYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0lmIHZpZXdNb2RlIGlzIG5vdCBzZXQgKG1lYW5pbmcgaXQgaXMgdGhlIGZpcnN0IGxvYWQpXG4gICAgICAvL1NldCB0aGUgdmlld01vZGVcbiAgICAgIHRoaXMudmlld01vZGUgPSBpbnB1dFZpZXdNb2RlO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdNb2RlOiBWaWV3TW9kZXM7XG4gIHByb2R1Y3RMaW1pdDogbnVtYmVyO1xuICBtYXhQcm9kdWN0czogbnVtYmVyO1xuXG4gIFZpZXdNb2RlcyA9IFZpZXdNb2RlcztcbiAgYXBwZW5kUHJvZHVjdHMgPSBmYWxzZTtcbiAgcmVzZXRMaXN0ID0gZmFsc2U7XG4gIGlzTWF4UHJvZHVjdHMgPSBmYWxzZTtcbiAgaXNMYXN0UGFnZSA9IGZhbHNlO1xuICBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHNjcm9sbFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hcHBlbmRQcm9kdWN0cyA9IHRydWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UuZ2V0UGFnZUl0ZW1zKHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgbG9hZE5leHRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNNYXhQcm9kdWN0cyA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsUGFnZShwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbXBvbmVudENvbmZpZ3VyYXRpb25zKHNjcm9sbENvbmZpZzogVmlld0NvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IGlzQnV0dG9uID0gc2Nyb2xsQ29uZmlnLnZpZXcuaW5maW5pdGVTY3JvbGwuc2hvd01vcmVCdXR0b247XG4gICAgY29uc3QgY29uZmlnUHJvZHVjdExpbWl0ID0gc2Nyb2xsQ29uZmlnLnZpZXcuaW5maW5pdGVTY3JvbGwucHJvZHVjdExpbWl0O1xuXG4gICAgLy9EaXNwbGF5IFwic2hvdyBtb3JlXCIgYnV0dG9uIGV2ZXJ5IHRpbWUgd2hlbiBidXR0b24gY29uZmlndXJhdGlvbiBpcyB0cnVlXG4gICAgLy9PdGhlcndpc2UsIG9ubHkgZGlzcGxheSBcInNob3cgbW9yZVwiIHdoZW4gdGhlIGNvbmZpZ3VyYXRpb24gcHJvZHVjdCBsaW1pdCBpcyByZWFjaGVkXG4gICAgdGhpcy5wcm9kdWN0TGltaXQgPSBpc0J1dHRvbiA/IDEgOiBjb25maWdQcm9kdWN0TGltaXQ7XG4gIH1cblxuICBwcml2YXRlIGluZmluaXRlU2Nyb2xsT3BlcmF0aW9ucyhpbnB1dE1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2FtZVBhZ2UoaW5wdXRNb2RlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcHBlbmRQcm9kdWN0cykge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgLi4uaW5wdXRNb2RlbCxcbiAgICAgICAgcHJvZHVjdHM6IHRoaXMubW9kZWwucHJvZHVjdHMuY29uY2F0KGlucHV0TW9kZWwucHJvZHVjdHMpLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IGlucHV0TW9kZWw7XG4gICAgICB0aGlzLm1heFByb2R1Y3RzID0gdGhpcy5wcm9kdWN0TGltaXQ7XG4gICAgfVxuICAgIHRoaXMuc2V0Q29uZGl0aW9ucygpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldExpc3RPblZpZXdNb2RlQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICB0aGlzLnJlc2V0TGlzdCA9IHRydWU7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UuZ2V0UGFnZUl0ZW1zKDApO1xuICB9XG5cbiAgLy9TZXQgYm9vbGVhbnMgYWZ0ZXIgbW9kZWwgaGFzIGJlZW4gcmV0cmlldmVkXG4gIHByaXZhdGUgc2V0Q29uZGl0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLmlzRW1wdHkgPSAhdGhpcy5tb2RlbC5wcm9kdWN0cyB8fCB0aGlzLm1vZGVsLnByb2R1Y3RzLmxlbmd0aCA9PT0gMDtcblxuICAgIHRoaXMuaXNMYXN0UGFnZSA9XG4gICAgICB0aGlzLm1vZGVsLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09XG4gICAgICB0aGlzLm1vZGVsLnBhZ2luYXRpb24udG90YWxQYWdlcyAtIDE7XG5cbiAgICB0aGlzLmlzTWF4UHJvZHVjdHMgPVxuICAgICAgdGhpcy5wcm9kdWN0TGltaXQgJiZcbiAgICAgIHRoaXMucHJvZHVjdExpbWl0ICE9PSAwICYmXG4gICAgICB0aGlzLm1vZGVsLnByb2R1Y3RzLmxlbmd0aCA+PSB0aGlzLm1heFByb2R1Y3RzO1xuXG4gICAgLy9BZGQgdGhlIHByb2R1Y3RMaW1pdCB0byB0aGUgY3VycmVudCBudW1iZXIgb2YgcHJvZHVjdHMgdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IG1heCBudW1iZXIgb2YgcHJvZHVjdHNcbiAgICBpZiAodGhpcy5pc01heFByb2R1Y3RzKSB7XG4gICAgICB0aGlzLm1heFByb2R1Y3RzID0gdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggKyB0aGlzLnByb2R1Y3RMaW1pdDtcbiAgICB9XG5cbiAgICAvL09ubHkgY2hhbmdlIHZpZXdNb2RlIG9uY2UgdGhlIG5ldyBtb2RlbCBpcyBzZXRcbiAgICAvL1RoaXMgcHJldmVudHMgZmxpY2tlcmluZyBpc3N1ZXNcbiAgICBpZiAodGhpcy52aWV3TW9kZSAhPT0gdGhpcy5pbnB1dFZpZXdNb2RlKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlID0gdGhpcy5pbnB1dFZpZXdNb2RlO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRMaXN0ID0gZmFsc2U7XG4gICAgdGhpcy5hcHBlbmRQcm9kdWN0cyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIGF0IHJlbGVhc2UgMi4wLlxuICAgKiBJZiB0aGUgbmV3IGxpc3QgaXMgdGhlIHNhbWUgYW5kIGl0IGlzIG5vdCBpbnRlbmRlZCB0byByZXNldCB0aGUgbGlzdCB0aGVuIHJldHVybiB0cnVlXG4gICAqIFJldHVybiBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBwcml2YXRlIGlzU2FtZVBhZ2UoaW5wdXRNb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2UpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5yZXNldExpc3QgJiZcbiAgICAgIHRoaXMubW9kZWwgJiZcbiAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnMgJiZcbiAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnMgJiZcbiAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCAmJlxuICAgICAgaW5wdXRNb2RlbC5icmVhZGNydW1icy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5tb2RlbC5icmVhZGNydW1icy5sZW5ndGggPT09IGlucHV0TW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlbC5icmVhZGNydW1icy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnNbaV0uZmFjZXRDb2RlID09PVxuICAgICAgICAgICAgICBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzW2ldLmZhY2V0Q29kZSAmJlxuICAgICAgICAgICAgdGhpcy5tb2RlbC5icmVhZGNydW1ic1tpXS5mYWNldFZhbHVlQ29kZSA9PT1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlbC5icmVhZGNydW1ic1tpXS5mYWNldFZhbHVlQ29kZSAmJlxuICAgICAgICAgICAgdGhpcy5tb2RlbC5icmVhZGNydW1ic1tpXS5yZW1vdmVRdWVyeS5xdWVyeS52YWx1ZSA9PT1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlbC5icmVhZGNydW1ic1tpXS5yZW1vdmVRdWVyeS5xdWVyeS52YWx1ZSAmJlxuICAgICAgICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PVxuICAgICAgICAgICAgICBpbnB1dE1vZGVsLnBhZ2luYXRpb24uY3VycmVudFBhZ2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ViewModes } from '../../product-view/product-view.component';
import { Subscription } from 'rxjs';
import { ProductListComponentService } from '../product-list-component.service';
import { ViewConfig } from '../../../../../shared/config/view-config';
var ProductScrollComponent = /** @class */ (function () {
    function ProductScrollComponent(productListComponentService, ref) {
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
    Object.defineProperty(ProductScrollComponent.prototype, "setConfig", {
        set: /**
         * @param {?} inputConfig
         * @return {?}
         */
        function (inputConfig) {
            this.setComponentConfigurations(inputConfig);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setModel", {
        set: /**
         * @param {?} inputModel
         * @return {?}
         */
        function (inputModel) {
            this.infiniteScrollOperations(inputModel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setViewMode", {
        set: /**
         * @param {?} inputViewMode
         * @return {?}
         */
        function (inputViewMode) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductScrollComponent.prototype.scrollPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductScrollComponent.prototype.loadNextPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    };
    /**
     * @return {?}
     */
    ProductScrollComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        window.scroll(0, 0);
    };
    /**
     * @private
     * @param {?} scrollConfig
     * @return {?}
     */
    ProductScrollComponent.prototype.setComponentConfigurations = /**
     * @private
     * @param {?} scrollConfig
     * @return {?}
     */
    function (scrollConfig) {
        /** @type {?} */
        var isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        /** @type {?} */
        var configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    };
    /**
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    ProductScrollComponent.prototype.infiniteScrollOperations = /**
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    function (inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = tslib_1.__assign({}, inputModel, { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    ProductScrollComponent.prototype.resetListOnViewModeChange = /**
     * @private
     * @return {?}
     */
    function () {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    };
    //Set booleans after model has been retrieved
    //Set booleans after model has been retrieved
    /**
     * @private
     * @return {?}
     */
    ProductScrollComponent.prototype.setConditions = 
    //Set booleans after model has been retrieved
    /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     */
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    ProductScrollComponent.prototype.isSamePage = /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    function (inputModel) {
        if (!this.resetList &&
            this.model &&
            this.model.breadcrumbs &&
            inputModel.breadcrumbs &&
            this.model.breadcrumbs.length > 0 &&
            inputModel.breadcrumbs.length > 0) {
            if (this.model.breadcrumbs.length === inputModel.breadcrumbs.length) {
                for (var i = 0; i < this.model.breadcrumbs.length; i++) {
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
    };
    /**
     * @return {?}
     */
    ProductScrollComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    ProductScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-scroll',
                    template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ProductScrollComponent.ctorParameters = function () { return [
        { type: ProductListComponentService },
        { type: ChangeDetectorRef }
    ]; };
    ProductScrollComponent.propDecorators = {
        setConfig: [{ type: Input, args: ['scrollConfig',] }],
        setModel: [{ type: Input, args: ['model',] }],
        setViewMode: [{ type: Input, args: ['inputViewMode',] }]
    };
    return ProductScrollComponent;
}());
export { ProductScrollComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUV0RTtJQTRDRSxnQ0FDVSwyQkFBd0QsRUFDeEQsR0FBc0I7UUFEdEIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXpDeEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZ0MxQyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBS2IsQ0FBQztJQXhDSixzQkFDSSw2Q0FBUzs7Ozs7UUFEYixVQUNjLFdBQXVCO1lBQ25DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUdELHNCQUNJLDRDQUFROzs7OztRQURaLFVBQ2EsVUFBNkI7WUFD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QUNyQiw2Q0FBb0I7O0lBRXBCLDJDQUFzQjs7SUFDdEIsZ0RBQXVCOztJQUN2QiwyQ0FBa0I7O0lBQ2xCLCtDQUFzQjs7SUFDdEIsNENBQW1COztJQUNuQix5Q0FBZ0I7Ozs7O0lBR2QsNkRBQWdFOzs7OztJQUNoRSxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBWaWV3TW9kZXMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3Qtc2Nyb2xsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNjcm9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIEBJbnB1dCgnc2Nyb2xsQ29uZmlnJylcbiAgc2V0IHNldENvbmZpZyhpbnB1dENvbmZpZzogVmlld0NvbmZpZykge1xuICAgIHRoaXMuc2V0Q29tcG9uZW50Q29uZmlndXJhdGlvbnMoaW5wdXRDb25maWcpO1xuICB9XG5cbiAgbW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICBASW5wdXQoJ21vZGVsJylcbiAgc2V0IHNldE1vZGVsKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKSB7XG4gICAgdGhpcy5pbmZpbml0ZVNjcm9sbE9wZXJhdGlvbnMoaW5wdXRNb2RlbCk7XG4gIH1cblxuICBpbnB1dFZpZXdNb2RlOiBWaWV3TW9kZXM7XG4gIEBJbnB1dCgnaW5wdXRWaWV3TW9kZScpXG4gIHNldCBzZXRWaWV3TW9kZShpbnB1dFZpZXdNb2RlOiBWaWV3TW9kZXMpIHtcbiAgICB0aGlzLmlucHV0Vmlld01vZGUgPSBpbnB1dFZpZXdNb2RlO1xuICAgIC8vSWYgdmlld01vZGUgaXMgYWxyZWFkeSBzZXQgKG1lYW5pbmcgaXQgaXMgbm90IHRoZSBmaXJzdCBsb2FkKVxuICAgIC8vUmVzZXQgdGhlIHByb2R1Y3QgbGlzdFxuICAgIGlmICh0aGlzLnZpZXdNb2RlKSB7XG4gICAgICB0aGlzLnJlc2V0TGlzdE9uVmlld01vZGVDaGFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9JZiB2aWV3TW9kZSBpcyBub3Qgc2V0IChtZWFuaW5nIGl0IGlzIHRoZSBmaXJzdCBsb2FkKVxuICAgICAgLy9TZXQgdGhlIHZpZXdNb2RlXG4gICAgICB0aGlzLnZpZXdNb2RlID0gaW5wdXRWaWV3TW9kZTtcbiAgICB9XG4gIH1cblxuICB2aWV3TW9kZTogVmlld01vZGVzO1xuICBwcm9kdWN0TGltaXQ6IG51bWJlcjtcbiAgbWF4UHJvZHVjdHM6IG51bWJlcjtcblxuICBWaWV3TW9kZXMgPSBWaWV3TW9kZXM7XG4gIGFwcGVuZFByb2R1Y3RzID0gZmFsc2U7XG4gIHJlc2V0TGlzdCA9IGZhbHNlO1xuICBpc01heFByb2R1Y3RzID0gZmFsc2U7XG4gIGlzTGFzdFBhZ2UgPSBmYWxzZTtcbiAgaXNFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBzY3JvbGxQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYXBwZW5kUHJvZHVjdHMgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLmdldFBhZ2VJdGVtcyhwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIGxvYWROZXh0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzTWF4UHJvZHVjdHMgPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbFBhZ2UocGFnZU51bWJlcik7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb21wb25lbnRDb25maWd1cmF0aW9ucyhzY3JvbGxDb25maWc6IFZpZXdDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBpc0J1dHRvbiA9IHNjcm9sbENvbmZpZy52aWV3LmluZmluaXRlU2Nyb2xsLnNob3dNb3JlQnV0dG9uO1xuICAgIGNvbnN0IGNvbmZpZ1Byb2R1Y3RMaW1pdCA9IHNjcm9sbENvbmZpZy52aWV3LmluZmluaXRlU2Nyb2xsLnByb2R1Y3RMaW1pdDtcblxuICAgIC8vRGlzcGxheSBcInNob3cgbW9yZVwiIGJ1dHRvbiBldmVyeSB0aW1lIHdoZW4gYnV0dG9uIGNvbmZpZ3VyYXRpb24gaXMgdHJ1ZVxuICAgIC8vT3RoZXJ3aXNlLCBvbmx5IGRpc3BsYXkgXCJzaG93IG1vcmVcIiB3aGVuIHRoZSBjb25maWd1cmF0aW9uIHByb2R1Y3QgbGltaXQgaXMgcmVhY2hlZFxuICAgIHRoaXMucHJvZHVjdExpbWl0ID0gaXNCdXR0b24gPyAxIDogY29uZmlnUHJvZHVjdExpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZpbml0ZVNjcm9sbE9wZXJhdGlvbnMoaW5wdXRNb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NhbWVQYWdlKGlucHV0TW9kZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXBwZW5kUHJvZHVjdHMpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIC4uLmlucHV0TW9kZWwsXG4gICAgICAgIHByb2R1Y3RzOiB0aGlzLm1vZGVsLnByb2R1Y3RzLmNvbmNhdChpbnB1dE1vZGVsLnByb2R1Y3RzKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSBpbnB1dE1vZGVsO1xuICAgICAgdGhpcy5tYXhQcm9kdWN0cyA9IHRoaXMucHJvZHVjdExpbWl0O1xuICAgIH1cbiAgICB0aGlzLnNldENvbmRpdGlvbnMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRMaXN0T25WaWV3TW9kZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5yZXNldExpc3QgPSB0cnVlO1xuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLmdldFBhZ2VJdGVtcygwKTtcbiAgfVxuXG4gIC8vU2V0IGJvb2xlYW5zIGFmdGVyIG1vZGVsIGhhcyBiZWVuIHJldHJpZXZlZFxuICBwcml2YXRlIHNldENvbmRpdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0VtcHR5ID0gIXRoaXMubW9kZWwucHJvZHVjdHMgfHwgdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggPT09IDA7XG5cbiAgICB0aGlzLmlzTGFzdFBhZ2UgPVxuICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PVxuICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgLSAxO1xuXG4gICAgdGhpcy5pc01heFByb2R1Y3RzID1cbiAgICAgIHRoaXMucHJvZHVjdExpbWl0ICYmXG4gICAgICB0aGlzLnByb2R1Y3RMaW1pdCAhPT0gMCAmJlxuICAgICAgdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggPj0gdGhpcy5tYXhQcm9kdWN0cztcblxuICAgIC8vQWRkIHRoZSBwcm9kdWN0TGltaXQgdG8gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIHByb2R1Y3RzIHRvIGRldGVybWluZSB0aGUgbmV4dCBtYXggbnVtYmVyIG9mIHByb2R1Y3RzXG4gICAgaWYgKHRoaXMuaXNNYXhQcm9kdWN0cykge1xuICAgICAgdGhpcy5tYXhQcm9kdWN0cyA9IHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoICsgdGhpcy5wcm9kdWN0TGltaXQ7XG4gICAgfVxuXG4gICAgLy9Pbmx5IGNoYW5nZSB2aWV3TW9kZSBvbmNlIHRoZSBuZXcgbW9kZWwgaXMgc2V0XG4gICAgLy9UaGlzIHByZXZlbnRzIGZsaWNrZXJpbmcgaXNzdWVzXG4gICAgaWYgKHRoaXMudmlld01vZGUgIT09IHRoaXMuaW5wdXRWaWV3TW9kZSkge1xuICAgICAgdGhpcy52aWV3TW9kZSA9IHRoaXMuaW5wdXRWaWV3TW9kZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0TGlzdCA9IGZhbHNlO1xuICAgIHRoaXMuYXBwZW5kUHJvZHVjdHMgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBhdCByZWxlYXNlIDIuMC5cbiAgICogSWYgdGhlIG5ldyBsaXN0IGlzIHRoZSBzYW1lIGFuZCBpdCBpcyBub3QgaW50ZW5kZWQgdG8gcmVzZXQgdGhlIGxpc3QgdGhlbiByZXR1cm4gdHJ1ZVxuICAgKiBSZXR1cm4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHJpdmF0ZSBpc1NhbWVQYWdlKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMucmVzZXRMaXN0ICYmXG4gICAgICB0aGlzLm1vZGVsICYmXG4gICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzICYmXG4gICAgICBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzICYmXG4gICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aCA+IDAgJiZcbiAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgaWYgKHRoaXMubW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoID09PSBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzW2ldLmZhY2V0Q29kZSA9PT1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlbC5icmVhZGNydW1ic1tpXS5mYWNldENvZGUgJiZcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnNbaV0uZmFjZXRWYWx1ZUNvZGUgPT09XG4gICAgICAgICAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnNbaV0uZmFjZXRWYWx1ZUNvZGUgJiZcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnNbaV0ucmVtb3ZlUXVlcnkucXVlcnkudmFsdWUgPT09XG4gICAgICAgICAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnNbaV0ucmVtb3ZlUXVlcnkucXVlcnkudmFsdWUgJiZcbiAgICAgICAgICAgIHRoaXMubW9kZWwucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlbC5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
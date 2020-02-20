import { __assign, __decorate } from "tslib";
import { Component, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ViewModes } from '../../product-view/product-view.component';
import { Subscription } from 'rxjs';
import { ProductListComponentService } from '../product-list-component.service';
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
        set: function (inputConfig) {
            this.setComponentConfigurations(inputConfig);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setModel", {
        set: function (inputModel) {
            this.infiniteScrollOperations(inputModel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setViewMode", {
        set: function (inputViewMode) {
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
    ProductScrollComponent.prototype.scrollPage = function (pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    };
    ProductScrollComponent.prototype.loadNextPage = function (pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    };
    ProductScrollComponent.prototype.scrollToTop = function () {
        window.scroll(0, 0);
    };
    ProductScrollComponent.prototype.setComponentConfigurations = function (scrollConfig) {
        var isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        var configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    };
    ProductScrollComponent.prototype.infiniteScrollOperations = function (inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = __assign(__assign({}, inputModel), { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    };
    ProductScrollComponent.prototype.resetListOnViewModeChange = function () {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    };
    //Set booleans after model has been retrieved
    ProductScrollComponent.prototype.setConditions = function () {
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
    ProductScrollComponent.prototype.isSamePage = function (inputModel) {
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
    ProductScrollComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductScrollComponent.ctorParameters = function () { return [
        { type: ProductListComponentService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input('scrollConfig')
    ], ProductScrollComponent.prototype, "setConfig", null);
    __decorate([
        Input('model')
    ], ProductScrollComponent.prototype, "setModel", null);
    __decorate([
        Input('inputViewMode')
    ], ProductScrollComponent.prototype, "setViewMode", null);
    ProductScrollComponent = __decorate([
        Component({
            selector: 'cx-product-scroll',
            template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], ProductScrollComponent);
    return ProductScrollComponent;
}());
export { ProductScrollComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT2hGO0lBd0NFLGdDQUNVLDJCQUF3RCxFQUN4RCxHQUFzQjtRQUR0QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekN4QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFnQzFDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLYixDQUFDO0lBdkNKLHNCQUFJLDZDQUFTO2FBQWIsVUFBYyxXQUF1QjtZQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSw0Q0FBUTthQUFaLFVBQWEsVUFBNkI7WUFDeEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVD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O3dCQUNqQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7NEJBQ3RDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYzt3QkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLOzRCQUMvQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSzt3QkFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVzs0QkFDL0IsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQ25DO3dCQUNBLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQXBIc0MsMkJBQTJCO2dCQUNuRCxpQkFBaUI7O0lBdENoQztRQURDLEtBQUssQ0FBQyxjQUFjLENBQUM7MkRBR3JCO0lBSUQ7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDOzBEQUdkO0lBSUQ7UUFEQyxLQUFLLENBQUMsZUFBZSxDQUFDOzZEQVl0QjtJQTNCVSxzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QiwrdEZBQThDO1NBQy9DLENBQUM7T0FDVyxzQkFBc0IsQ0E4SmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTlKRCxJQThKQztTQTlKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBWaWV3TW9kZXMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3Qtc2Nyb2xsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNjcm9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIEBJbnB1dCgnc2Nyb2xsQ29uZmlnJylcbiAgc2V0IHNldENvbmZpZyhpbnB1dENvbmZpZzogVmlld0NvbmZpZykge1xuICAgIHRoaXMuc2V0Q29tcG9uZW50Q29uZmlndXJhdGlvbnMoaW5wdXRDb25maWcpO1xuICB9XG5cbiAgbW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICBASW5wdXQoJ21vZGVsJylcbiAgc2V0IHNldE1vZGVsKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKSB7XG4gICAgdGhpcy5pbmZpbml0ZVNjcm9sbE9wZXJhdGlvbnMoaW5wdXRNb2RlbCk7XG4gIH1cblxuICBpbnB1dFZpZXdNb2RlOiBWaWV3TW9kZXM7XG4gIEBJbnB1dCgnaW5wdXRWaWV3TW9kZScpXG4gIHNldCBzZXRWaWV3TW9kZShpbnB1dFZpZXdNb2RlOiBWaWV3TW9kZXMpIHtcbiAgICB0aGlzLmlucHV0Vmlld01vZGUgPSBpbnB1dFZpZXdNb2RlO1xuICAgIC8vSWYgdmlld01vZGUgaXMgYWxyZWFkeSBzZXQgKG1lYW5pbmcgaXQgaXMgbm90IHRoZSBmaXJzdCBsb2FkKVxuICAgIC8vUmVzZXQgdGhlIHByb2R1Y3QgbGlzdFxuICAgIGlmICh0aGlzLnZpZXdNb2RlKSB7XG4gICAgICB0aGlzLnJlc2V0TGlzdE9uVmlld01vZGVDaGFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9JZiB2aWV3TW9kZSBpcyBub3Qgc2V0IChtZWFuaW5nIGl0IGlzIHRoZSBmaXJzdCBsb2FkKVxuICAgICAgLy9TZXQgdGhlIHZpZXdNb2RlXG4gICAgICB0aGlzLnZpZXdNb2RlID0gaW5wdXRWaWV3TW9kZTtcbiAgICB9XG4gIH1cblxuICB2aWV3TW9kZTogVmlld01vZGVzO1xuICBwcm9kdWN0TGltaXQ6IG51bWJlcjtcbiAgbWF4UHJvZHVjdHM6IG51bWJlcjtcblxuICBWaWV3TW9kZXMgPSBWaWV3TW9kZXM7XG4gIGFwcGVuZFByb2R1Y3RzID0gZmFsc2U7XG4gIHJlc2V0TGlzdCA9IGZhbHNlO1xuICBpc01heFByb2R1Y3RzID0gZmFsc2U7XG4gIGlzTGFzdFBhZ2UgPSBmYWxzZTtcbiAgaXNFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBzY3JvbGxQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYXBwZW5kUHJvZHVjdHMgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLmdldFBhZ2VJdGVtcyhwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIGxvYWROZXh0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzTWF4UHJvZHVjdHMgPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbFBhZ2UocGFnZU51bWJlcik7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb21wb25lbnRDb25maWd1cmF0aW9ucyhzY3JvbGxDb25maWc6IFZpZXdDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBpc0J1dHRvbiA9IHNjcm9sbENvbmZpZy52aWV3LmluZmluaXRlU2Nyb2xsLnNob3dNb3JlQnV0dG9uO1xuICAgIGNvbnN0IGNvbmZpZ1Byb2R1Y3RMaW1pdCA9IHNjcm9sbENvbmZpZy52aWV3LmluZmluaXRlU2Nyb2xsLnByb2R1Y3RMaW1pdDtcblxuICAgIC8vRGlzcGxheSBcInNob3cgbW9yZVwiIGJ1dHRvbiBldmVyeSB0aW1lIHdoZW4gYnV0dG9uIGNvbmZpZ3VyYXRpb24gaXMgdHJ1ZVxuICAgIC8vT3RoZXJ3aXNlLCBvbmx5IGRpc3BsYXkgXCJzaG93IG1vcmVcIiB3aGVuIHRoZSBjb25maWd1cmF0aW9uIHByb2R1Y3QgbGltaXQgaXMgcmVhY2hlZFxuICAgIHRoaXMucHJvZHVjdExpbWl0ID0gaXNCdXR0b24gPyAxIDogY29uZmlnUHJvZHVjdExpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZpbml0ZVNjcm9sbE9wZXJhdGlvbnMoaW5wdXRNb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NhbWVQYWdlKGlucHV0TW9kZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXBwZW5kUHJvZHVjdHMpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIC4uLmlucHV0TW9kZWwsXG4gICAgICAgIHByb2R1Y3RzOiB0aGlzLm1vZGVsLnByb2R1Y3RzLmNvbmNhdChpbnB1dE1vZGVsLnByb2R1Y3RzKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSBpbnB1dE1vZGVsO1xuICAgICAgdGhpcy5tYXhQcm9kdWN0cyA9IHRoaXMucHJvZHVjdExpbWl0O1xuICAgIH1cbiAgICB0aGlzLnNldENvbmRpdGlvbnMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRMaXN0T25WaWV3TW9kZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5yZXNldExpc3QgPSB0cnVlO1xuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLmdldFBhZ2VJdGVtcygwKTtcbiAgfVxuXG4gIC8vU2V0IGJvb2xlYW5zIGFmdGVyIG1vZGVsIGhhcyBiZWVuIHJldHJpZXZlZFxuICBwcml2YXRlIHNldENvbmRpdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0VtcHR5ID0gIXRoaXMubW9kZWwucHJvZHVjdHMgfHwgdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggPT09IDA7XG5cbiAgICB0aGlzLmlzTGFzdFBhZ2UgPVxuICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PVxuICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgLSAxO1xuXG4gICAgdGhpcy5pc01heFByb2R1Y3RzID1cbiAgICAgIHRoaXMucHJvZHVjdExpbWl0ICYmXG4gICAgICB0aGlzLnByb2R1Y3RMaW1pdCAhPT0gMCAmJlxuICAgICAgdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggPj0gdGhpcy5tYXhQcm9kdWN0cztcblxuICAgIC8vQWRkIHRoZSBwcm9kdWN0TGltaXQgdG8gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIHByb2R1Y3RzIHRvIGRldGVybWluZSB0aGUgbmV4dCBtYXggbnVtYmVyIG9mIHByb2R1Y3RzXG4gICAgaWYgKHRoaXMuaXNNYXhQcm9kdWN0cykge1xuICAgICAgdGhpcy5tYXhQcm9kdWN0cyA9IHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoICsgdGhpcy5wcm9kdWN0TGltaXQ7XG4gICAgfVxuXG4gICAgLy9Pbmx5IGNoYW5nZSB2aWV3TW9kZSBvbmNlIHRoZSBuZXcgbW9kZWwgaXMgc2V0XG4gICAgLy9UaGlzIHByZXZlbnRzIGZsaWNrZXJpbmcgaXNzdWVzXG4gICAgaWYgKHRoaXMudmlld01vZGUgIT09IHRoaXMuaW5wdXRWaWV3TW9kZSkge1xuICAgICAgdGhpcy52aWV3TW9kZSA9IHRoaXMuaW5wdXRWaWV3TW9kZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0TGlzdCA9IGZhbHNlO1xuICAgIHRoaXMuYXBwZW5kUHJvZHVjdHMgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBhdCByZWxlYXNlIDIuMC5cbiAgICogSWYgdGhlIG5ldyBsaXN0IGlzIHRoZSBzYW1lIGFuZCBpdCBpcyBub3QgaW50ZW5kZWQgdG8gcmVzZXQgdGhlIGxpc3QgdGhlbiByZXR1cm4gdHJ1ZVxuICAgKiBSZXR1cm4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHJpdmF0ZSBpc1NhbWVQYWdlKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMucmVzZXRMaXN0ICYmXG4gICAgICB0aGlzLm1vZGVsICYmXG4gICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzICYmXG4gICAgICBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzICYmXG4gICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aCA+IDAgJiZcbiAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgaWYgKHRoaXMubW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoID09PSBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWwuYnJlYWRjcnVtYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzW2ldLmZhY2V0Q29kZSA9PT1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlbC5icmVhZGNydW1ic1tpXS5mYWNldENvZGUgJiZcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnNbaV0uZmFjZXRWYWx1ZUNvZGUgPT09XG4gICAgICAgICAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnNbaV0uZmFjZXRWYWx1ZUNvZGUgJiZcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYnJlYWRjcnVtYnNbaV0ucmVtb3ZlUXVlcnkucXVlcnkudmFsdWUgPT09XG4gICAgICAgICAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnNbaV0ucmVtb3ZlUXVlcnkucXVlcnkudmFsdWUgJiZcbiAgICAgICAgICAgIHRoaXMubW9kZWwucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlbC5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
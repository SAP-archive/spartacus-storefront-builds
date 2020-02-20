import { __decorate } from "tslib";
import { Component, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ViewModes } from '../../product-view/product-view.component';
import { Subscription } from 'rxjs';
import { ProductListComponentService } from '../product-list-component.service';
let ProductScrollComponent = class ProductScrollComponent {
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
    set setConfig(inputConfig) {
        this.setComponentConfigurations(inputConfig);
    }
    set setModel(inputModel) {
        this.infiniteScrollOperations(inputModel);
    }
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
    scrollPage(pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    }
    loadNextPage(pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    }
    scrollToTop() {
        window.scroll(0, 0);
    }
    setComponentConfigurations(scrollConfig) {
        const isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        const configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    }
    infiniteScrollOperations(inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = Object.assign(Object.assign({}, inputModel), { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    }
    resetListOnViewModeChange() {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    }
    //Set booleans after model has been retrieved
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProductScrollComponent.ctorParameters = () => [
    { type: ProductListComponentService },
    { type: ChangeDetectorRef }
];
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
export { ProductScrollComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT2hGLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBd0NqQyxZQUNVLDJCQUF3RCxFQUN4RCxHQUFzQjtRQUR0QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekN4QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFnQzFDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLYixDQUFDO0lBdkNKLElBQUksU0FBUyxDQUFDLFdBQXVCO1FBQ25DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsSUFBSSxRQUFRLENBQUMsVUFBNkI7UUFDeEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxJQUFJLFdBQVcsQ0FBQyxhQUF3QjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQywrREFBK0Q7UUFDL0Qsd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsdURBQXVEO1lBQ3ZELGtCQUFrQjtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFrQkQsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsWUFBWSxDQUFDLFVBQWtCO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU8sMEJBQTBCLENBQUMsWUFBd0I7UUFDekQsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQ2pFLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBRXpFLHlFQUF5RTtRQUN6RSxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDeEQsQ0FBQztJQUVPLHdCQUF3QixDQUFDLFVBQTZCO1FBQzVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssbUNBQ0wsVUFBVSxLQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUMxRCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyx5QkFBeUI7UUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDZDQUE2QztJQUNyQyxhQUFhO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxVQUFVO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVztnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsYUFBYTtZQUNoQixJQUFJLENBQUMsWUFBWTtnQkFDakIsSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVqRCxxR0FBcUc7UUFDckcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDbkU7UUFFRCxnREFBZ0Q7UUFDaEQsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLFVBQTZCO1FBQzlDLElBQ0UsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNmLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ3RCLFVBQVUsQ0FBQyxXQUFXO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakM7WUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDbkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEQsSUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO3dCQUNqQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7NEJBQ3RDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYzt3QkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLOzRCQUMvQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSzt3QkFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVzs0QkFDL0IsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQ25DO3dCQUNBLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFBOztZQXJId0MsMkJBQTJCO1lBQ25ELGlCQUFpQjs7QUF0Q2hDO0lBREMsS0FBSyxDQUFDLGNBQWMsQ0FBQzt1REFHckI7QUFJRDtJQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7c0RBR2Q7QUFJRDtJQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7eURBWXRCO0FBM0JVLHNCQUFzQjtJQUpsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLCt0RkFBOEM7S0FDL0MsQ0FBQztHQUNXLHNCQUFzQixDQThKbEM7U0E5Slksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgVmlld01vZGVzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXNjcm9sbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBASW5wdXQoJ3Njcm9sbENvbmZpZycpXG4gIHNldCBzZXRDb25maWcoaW5wdXRDb25maWc6IFZpZXdDb25maWcpIHtcbiAgICB0aGlzLnNldENvbXBvbmVudENvbmZpZ3VyYXRpb25zKGlucHV0Q29uZmlnKTtcbiAgfVxuXG4gIG1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZTtcbiAgQElucHV0KCdtb2RlbCcpXG4gIHNldCBzZXRNb2RlbChpbnB1dE1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZSkge1xuICAgIHRoaXMuaW5maW5pdGVTY3JvbGxPcGVyYXRpb25zKGlucHV0TW9kZWwpO1xuICB9XG5cbiAgaW5wdXRWaWV3TW9kZTogVmlld01vZGVzO1xuICBASW5wdXQoJ2lucHV0Vmlld01vZGUnKVxuICBzZXQgc2V0Vmlld01vZGUoaW5wdXRWaWV3TW9kZTogVmlld01vZGVzKSB7XG4gICAgdGhpcy5pbnB1dFZpZXdNb2RlID0gaW5wdXRWaWV3TW9kZTtcbiAgICAvL0lmIHZpZXdNb2RlIGlzIGFscmVhZHkgc2V0IChtZWFuaW5nIGl0IGlzIG5vdCB0aGUgZmlyc3QgbG9hZClcbiAgICAvL1Jlc2V0IHRoZSBwcm9kdWN0IGxpc3RcbiAgICBpZiAodGhpcy52aWV3TW9kZSkge1xuICAgICAgdGhpcy5yZXNldExpc3RPblZpZXdNb2RlQ2hhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vSWYgdmlld01vZGUgaXMgbm90IHNldCAobWVhbmluZyBpdCBpcyB0aGUgZmlyc3QgbG9hZClcbiAgICAgIC8vU2V0IHRoZSB2aWV3TW9kZVxuICAgICAgdGhpcy52aWV3TW9kZSA9IGlucHV0Vmlld01vZGU7XG4gICAgfVxuICB9XG5cbiAgdmlld01vZGU6IFZpZXdNb2RlcztcbiAgcHJvZHVjdExpbWl0OiBudW1iZXI7XG4gIG1heFByb2R1Y3RzOiBudW1iZXI7XG5cbiAgVmlld01vZGVzID0gVmlld01vZGVzO1xuICBhcHBlbmRQcm9kdWN0cyA9IGZhbHNlO1xuICByZXNldExpc3QgPSBmYWxzZTtcbiAgaXNNYXhQcm9kdWN0cyA9IGZhbHNlO1xuICBpc0xhc3RQYWdlID0gZmFsc2U7XG4gIGlzRW1wdHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgc2Nyb2xsUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGVuZFByb2R1Y3RzID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5nZXRQYWdlSXRlbXMocGFnZU51bWJlcik7XG4gIH1cblxuICBsb2FkTmV4dFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc01heFByb2R1Y3RzID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxQYWdlKHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29tcG9uZW50Q29uZmlndXJhdGlvbnMoc2Nyb2xsQ29uZmlnOiBWaWV3Q29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgaXNCdXR0b24gPSBzY3JvbGxDb25maWcudmlldy5pbmZpbml0ZVNjcm9sbC5zaG93TW9yZUJ1dHRvbjtcbiAgICBjb25zdCBjb25maWdQcm9kdWN0TGltaXQgPSBzY3JvbGxDb25maWcudmlldy5pbmZpbml0ZVNjcm9sbC5wcm9kdWN0TGltaXQ7XG5cbiAgICAvL0Rpc3BsYXkgXCJzaG93IG1vcmVcIiBidXR0b24gZXZlcnkgdGltZSB3aGVuIGJ1dHRvbiBjb25maWd1cmF0aW9uIGlzIHRydWVcbiAgICAvL090aGVyd2lzZSwgb25seSBkaXNwbGF5IFwic2hvdyBtb3JlXCIgd2hlbiB0aGUgY29uZmlndXJhdGlvbiBwcm9kdWN0IGxpbWl0IGlzIHJlYWNoZWRcbiAgICB0aGlzLnByb2R1Y3RMaW1pdCA9IGlzQnV0dG9uID8gMSA6IGNvbmZpZ1Byb2R1Y3RMaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgaW5maW5pdGVTY3JvbGxPcGVyYXRpb25zKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTYW1lUGFnZShpbnB1dE1vZGVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFwcGVuZFByb2R1Y3RzKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAuLi5pbnB1dE1vZGVsLFxuICAgICAgICBwcm9kdWN0czogdGhpcy5tb2RlbC5wcm9kdWN0cy5jb25jYXQoaW5wdXRNb2RlbC5wcm9kdWN0cyksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsID0gaW5wdXRNb2RlbDtcbiAgICAgIHRoaXMubWF4UHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RMaW1pdDtcbiAgICB9XG4gICAgdGhpcy5zZXRDb25kaXRpb25zKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0TGlzdE9uVmlld01vZGVDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMucmVzZXRMaXN0ID0gdHJ1ZTtcbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5nZXRQYWdlSXRlbXMoMCk7XG4gIH1cblxuICAvL1NldCBib29sZWFucyBhZnRlciBtb2RlbCBoYXMgYmVlbiByZXRyaWV2ZWRcbiAgcHJpdmF0ZSBzZXRDb25kaXRpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuaXNFbXB0eSA9ICF0aGlzLm1vZGVsLnByb2R1Y3RzIHx8IHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoID09PSAwO1xuXG4gICAgdGhpcy5pc0xhc3RQYWdlID1cbiAgICAgIHRoaXMubW9kZWwucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT1cbiAgICAgIHRoaXMubW9kZWwucGFnaW5hdGlvbi50b3RhbFBhZ2VzIC0gMTtcblxuICAgIHRoaXMuaXNNYXhQcm9kdWN0cyA9XG4gICAgICB0aGlzLnByb2R1Y3RMaW1pdCAmJlxuICAgICAgdGhpcy5wcm9kdWN0TGltaXQgIT09IDAgJiZcbiAgICAgIHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoID49IHRoaXMubWF4UHJvZHVjdHM7XG5cbiAgICAvL0FkZCB0aGUgcHJvZHVjdExpbWl0IHRvIHRoZSBjdXJyZW50IG51bWJlciBvZiBwcm9kdWN0cyB0byBkZXRlcm1pbmUgdGhlIG5leHQgbWF4IG51bWJlciBvZiBwcm9kdWN0c1xuICAgIGlmICh0aGlzLmlzTWF4UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMubWF4UHJvZHVjdHMgPSB0aGlzLm1vZGVsLnByb2R1Y3RzLmxlbmd0aCArIHRoaXMucHJvZHVjdExpbWl0O1xuICAgIH1cblxuICAgIC8vT25seSBjaGFuZ2Ugdmlld01vZGUgb25jZSB0aGUgbmV3IG1vZGVsIGlzIHNldFxuICAgIC8vVGhpcyBwcmV2ZW50cyBmbGlja2VyaW5nIGlzc3Vlc1xuICAgIGlmICh0aGlzLnZpZXdNb2RlICE9PSB0aGlzLmlucHV0Vmlld01vZGUpIHtcbiAgICAgIHRoaXMudmlld01vZGUgPSB0aGlzLmlucHV0Vmlld01vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldExpc3QgPSBmYWxzZTtcbiAgICB0aGlzLmFwcGVuZFByb2R1Y3RzID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgYXQgcmVsZWFzZSAyLjAuXG4gICAqIElmIHRoZSBuZXcgbGlzdCBpcyB0aGUgc2FtZSBhbmQgaXQgaXMgbm90IGludGVuZGVkIHRvIHJlc2V0IHRoZSBsaXN0IHRoZW4gcmV0dXJuIHRydWVcbiAgICogUmV0dXJuIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIHByaXZhdGUgaXNTYW1lUGFnZShpbnB1dE1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnJlc2V0TGlzdCAmJlxuICAgICAgdGhpcy5tb2RlbCAmJlxuICAgICAgdGhpcy5tb2RlbC5icmVhZGNydW1icyAmJlxuICAgICAgaW5wdXRNb2RlbC5icmVhZGNydW1icyAmJlxuICAgICAgdGhpcy5tb2RlbC5icmVhZGNydW1icy5sZW5ndGggPiAwICYmXG4gICAgICBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aCA9PT0gaW5wdXRNb2RlbC5icmVhZGNydW1icy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5tb2RlbC5icmVhZGNydW1ic1tpXS5mYWNldENvZGUgPT09XG4gICAgICAgICAgICAgIGlucHV0TW9kZWwuYnJlYWRjcnVtYnNbaV0uZmFjZXRDb2RlICYmXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzW2ldLmZhY2V0VmFsdWVDb2RlID09PVxuICAgICAgICAgICAgICBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzW2ldLmZhY2V0VmFsdWVDb2RlICYmXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJyZWFkY3J1bWJzW2ldLnJlbW92ZVF1ZXJ5LnF1ZXJ5LnZhbHVlID09PVxuICAgICAgICAgICAgICBpbnB1dE1vZGVsLmJyZWFkY3J1bWJzW2ldLnJlbW92ZVF1ZXJ5LnF1ZXJ5LnZhbHVlICYmXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09XG4gICAgICAgICAgICAgIGlucHV0TW9kZWwucGFnaW5hdGlvbi5jdXJyZW50UGFnZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
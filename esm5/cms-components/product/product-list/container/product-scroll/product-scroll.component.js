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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT2hGO0lBd0NFLGdDQUNVLDJCQUF3RCxFQUN4RCxHQUFzQjtRQUR0QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekN4QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFnQzFDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLYixDQUFDO0lBdkNKLHNCQUFJLDZDQUFTO2FBQWIsVUFBYyxXQUF1QjtZQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSw0Q0FBUTthQUFaLFVBQWEsVUFBNkI7WUFDeEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVD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QVcsQ0FBQztRQUVqRCxxR0FBcUc7UUFDckcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDbkU7UUFFRCxnREFBZ0Q7UUFDaEQsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkE5RXNDLDJCQUEyQjtnQkFDbkQsaUJBQWlCOztJQXRDaEM7UUFEQyxLQUFLLENBQUMsY0FBYyxDQUFDOzJEQUdyQjtJQUlEO1FBREMsS0FBSyxDQUFDLE9BQU8sQ0FBQzswREFHZDtJQUlEO1FBREMsS0FBSyxDQUFDLGVBQWUsQ0FBQzs2REFZdEI7SUEzQlUsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsK3RGQUE4QztTQUMvQyxDQUFDO09BQ1csc0JBQXNCLENBd0hsQztJQUFELDZCQUFDO0NBQUEsQUF4SEQsSUF3SEM7U0F4SFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgVmlld01vZGVzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXNjcm9sbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBASW5wdXQoJ3Njcm9sbENvbmZpZycpXG4gIHNldCBzZXRDb25maWcoaW5wdXRDb25maWc6IFZpZXdDb25maWcpIHtcbiAgICB0aGlzLnNldENvbXBvbmVudENvbmZpZ3VyYXRpb25zKGlucHV0Q29uZmlnKTtcbiAgfVxuXG4gIG1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZTtcbiAgQElucHV0KCdtb2RlbCcpXG4gIHNldCBzZXRNb2RlbChpbnB1dE1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZSkge1xuICAgIHRoaXMuaW5maW5pdGVTY3JvbGxPcGVyYXRpb25zKGlucHV0TW9kZWwpO1xuICB9XG5cbiAgaW5wdXRWaWV3TW9kZTogVmlld01vZGVzO1xuICBASW5wdXQoJ2lucHV0Vmlld01vZGUnKVxuICBzZXQgc2V0Vmlld01vZGUoaW5wdXRWaWV3TW9kZTogVmlld01vZGVzKSB7XG4gICAgdGhpcy5pbnB1dFZpZXdNb2RlID0gaW5wdXRWaWV3TW9kZTtcbiAgICAvL0lmIHZpZXdNb2RlIGlzIGFscmVhZHkgc2V0IChtZWFuaW5nIGl0IGlzIG5vdCB0aGUgZmlyc3QgbG9hZClcbiAgICAvL1Jlc2V0IHRoZSBwcm9kdWN0IGxpc3RcbiAgICBpZiAodGhpcy52aWV3TW9kZSkge1xuICAgICAgdGhpcy5yZXNldExpc3RPblZpZXdNb2RlQ2hhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vSWYgdmlld01vZGUgaXMgbm90IHNldCAobWVhbmluZyBpdCBpcyB0aGUgZmlyc3QgbG9hZClcbiAgICAgIC8vU2V0IHRoZSB2aWV3TW9kZVxuICAgICAgdGhpcy52aWV3TW9kZSA9IGlucHV0Vmlld01vZGU7XG4gICAgfVxuICB9XG5cbiAgdmlld01vZGU6IFZpZXdNb2RlcztcbiAgcHJvZHVjdExpbWl0OiBudW1iZXI7XG4gIG1heFByb2R1Y3RzOiBudW1iZXI7XG5cbiAgVmlld01vZGVzID0gVmlld01vZGVzO1xuICBhcHBlbmRQcm9kdWN0cyA9IGZhbHNlO1xuICByZXNldExpc3QgPSBmYWxzZTtcbiAgaXNNYXhQcm9kdWN0cyA9IGZhbHNlO1xuICBpc0xhc3RQYWdlID0gZmFsc2U7XG4gIGlzRW1wdHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgc2Nyb2xsUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGVuZFByb2R1Y3RzID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5nZXRQYWdlSXRlbXMocGFnZU51bWJlcik7XG4gIH1cblxuICBsb2FkTmV4dFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc01heFByb2R1Y3RzID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxQYWdlKHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29tcG9uZW50Q29uZmlndXJhdGlvbnMoc2Nyb2xsQ29uZmlnOiBWaWV3Q29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgaXNCdXR0b24gPSBzY3JvbGxDb25maWcudmlldy5pbmZpbml0ZVNjcm9sbC5zaG93TW9yZUJ1dHRvbjtcbiAgICBjb25zdCBjb25maWdQcm9kdWN0TGltaXQgPSBzY3JvbGxDb25maWcudmlldy5pbmZpbml0ZVNjcm9sbC5wcm9kdWN0TGltaXQ7XG5cbiAgICAvL0Rpc3BsYXkgXCJzaG93IG1vcmVcIiBidXR0b24gZXZlcnkgdGltZSB3aGVuIGJ1dHRvbiBjb25maWd1cmF0aW9uIGlzIHRydWVcbiAgICAvL090aGVyd2lzZSwgb25seSBkaXNwbGF5IFwic2hvdyBtb3JlXCIgd2hlbiB0aGUgY29uZmlndXJhdGlvbiBwcm9kdWN0IGxpbWl0IGlzIHJlYWNoZWRcbiAgICB0aGlzLnByb2R1Y3RMaW1pdCA9IGlzQnV0dG9uID8gMSA6IGNvbmZpZ1Byb2R1Y3RMaW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgaW5maW5pdGVTY3JvbGxPcGVyYXRpb25zKGlucHV0TW9kZWw6IFByb2R1Y3RTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBwZW5kUHJvZHVjdHMpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIC4uLmlucHV0TW9kZWwsXG4gICAgICAgIHByb2R1Y3RzOiB0aGlzLm1vZGVsLnByb2R1Y3RzLmNvbmNhdChpbnB1dE1vZGVsLnByb2R1Y3RzKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSBpbnB1dE1vZGVsO1xuICAgICAgdGhpcy5tYXhQcm9kdWN0cyA9IHRoaXMucHJvZHVjdExpbWl0O1xuICAgIH1cbiAgICB0aGlzLnNldENvbmRpdGlvbnMoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRMaXN0T25WaWV3TW9kZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5yZXNldExpc3QgPSB0cnVlO1xuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLmdldFBhZ2VJdGVtcygwKTtcbiAgfVxuXG4gIC8vU2V0IGJvb2xlYW5zIGFmdGVyIG1vZGVsIGhhcyBiZWVuIHJldHJpZXZlZFxuICBwcml2YXRlIHNldENvbmRpdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0VtcHR5ID0gIXRoaXMubW9kZWwucHJvZHVjdHMgfHwgdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggPT09IDA7XG5cbiAgICB0aGlzLmlzTGFzdFBhZ2UgPVxuICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PVxuICAgICAgdGhpcy5tb2RlbC5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgLSAxO1xuXG4gICAgdGhpcy5pc01heFByb2R1Y3RzID1cbiAgICAgIHRoaXMucHJvZHVjdExpbWl0ICYmXG4gICAgICB0aGlzLnByb2R1Y3RMaW1pdCAhPT0gMCAmJlxuICAgICAgdGhpcy5tb2RlbC5wcm9kdWN0cy5sZW5ndGggPj0gdGhpcy5tYXhQcm9kdWN0cztcblxuICAgIC8vQWRkIHRoZSBwcm9kdWN0TGltaXQgdG8gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIHByb2R1Y3RzIHRvIGRldGVybWluZSB0aGUgbmV4dCBtYXggbnVtYmVyIG9mIHByb2R1Y3RzXG4gICAgaWYgKHRoaXMuaXNNYXhQcm9kdWN0cykge1xuICAgICAgdGhpcy5tYXhQcm9kdWN0cyA9IHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoICsgdGhpcy5wcm9kdWN0TGltaXQ7XG4gICAgfVxuXG4gICAgLy9Pbmx5IGNoYW5nZSB2aWV3TW9kZSBvbmNlIHRoZSBuZXcgbW9kZWwgaXMgc2V0XG4gICAgLy9UaGlzIHByZXZlbnRzIGZsaWNrZXJpbmcgaXNzdWVzXG4gICAgaWYgKHRoaXMudmlld01vZGUgIT09IHRoaXMuaW5wdXRWaWV3TW9kZSkge1xuICAgICAgdGhpcy52aWV3TW9kZSA9IHRoaXMuaW5wdXRWaWV3TW9kZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0TGlzdCA9IGZhbHNlO1xuICAgIHRoaXMuYXBwZW5kUHJvZHVjdHMgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
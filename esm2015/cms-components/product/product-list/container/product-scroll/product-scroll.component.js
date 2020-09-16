import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ViewModes } from '../../product-view/product-view.component';
import { Subscription } from 'rxjs';
import { ProductListComponentService } from '../product-list-component.service';
export class ProductScrollComponent {
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ProductScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-scroll',
                template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
            },] }
];
ProductScrollComponent.ctorParameters = () => [
    { type: ProductListComponentService },
    { type: ChangeDetectorRef }
];
ProductScrollComponent.propDecorators = {
    setConfig: [{ type: Input, args: ['scrollConfig',] }],
    setModel: [{ type: Input, args: ['model',] }],
    setViewMode: [{ type: Input, args: ['inputViewMode',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU9oRixNQUFNLE9BQU8sc0JBQXNCO0lBd0NqQyxZQUNVLDJCQUF3RCxFQUN4RCxHQUFzQjtRQUR0QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekN4QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFnQzFDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLYixDQUFDO0lBeENKLElBQ0ksU0FBUyxDQUFDLFdBQXVCO1FBQ25DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0QsSUFDSSxRQUFRLENBQUMsVUFBNkI7UUFDeEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxD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SSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNuRTtRQUVELGdEQUFnRDtRQUNoRCxpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQTNIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsK3RGQUE4QzthQUMvQzs7O1lBTlEsMkJBQTJCO1lBSkUsaUJBQWlCOzs7d0JBY3BELEtBQUssU0FBQyxjQUFjO3VCQU1wQixLQUFLLFNBQUMsT0FBTzswQkFNYixLQUFLLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zY3JvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1zY3JvbGwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQElucHV0KCdzY3JvbGxDb25maWcnKVxuICBzZXQgc2V0Q29uZmlnKGlucHV0Q29uZmlnOiBWaWV3Q29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb21wb25lbnRDb25maWd1cmF0aW9ucyhpbnB1dENvbmZpZyk7XG4gIH1cblxuICBtb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gIEBJbnB1dCgnbW9kZWwnKVxuICBzZXQgc2V0TW9kZWwoaW5wdXRNb2RlbDogUHJvZHVjdFNlYXJjaFBhZ2UpIHtcbiAgICB0aGlzLmluZmluaXRlU2Nyb2xsT3BlcmF0aW9ucyhpbnB1dE1vZGVsKTtcbiAgfVxuXG4gIGlucHV0Vmlld01vZGU6IFZpZXdNb2RlcztcbiAgQElucHV0KCdpbnB1dFZpZXdNb2RlJylcbiAgc2V0IHNldFZpZXdNb2RlKGlucHV0Vmlld01vZGU6IFZpZXdNb2Rlcykge1xuICAgIHRoaXMuaW5wdXRWaWV3TW9kZSA9IGlucHV0Vmlld01vZGU7XG4gICAgLy9JZiB2aWV3TW9kZSBpcyBhbHJlYWR5IHNldCAobWVhbmluZyBpdCBpcyBub3QgdGhlIGZpcnN0IGxvYWQpXG4gICAgLy9SZXNldCB0aGUgcHJvZHVjdCBsaXN0XG4gICAgaWYgKHRoaXMudmlld01vZGUpIHtcbiAgICAgIHRoaXMucmVzZXRMaXN0T25WaWV3TW9kZUNoYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0lmIHZpZXdNb2RlIGlzIG5vdCBzZXQgKG1lYW5pbmcgaXQgaXMgdGhlIGZpcnN0IGxvYWQpXG4gICAgICAvL1NldCB0aGUgdmlld01vZGVcbiAgICAgIHRoaXMudmlld01vZGUgPSBpbnB1dFZpZXdNb2RlO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdNb2RlOiBWaWV3TW9kZXM7XG4gIHByb2R1Y3RMaW1pdDogbnVtYmVyO1xuICBtYXhQcm9kdWN0czogbnVtYmVyO1xuXG4gIFZpZXdNb2RlcyA9IFZpZXdNb2RlcztcbiAgYXBwZW5kUHJvZHVjdHMgPSBmYWxzZTtcbiAgcmVzZXRMaXN0ID0gZmFsc2U7XG4gIGlzTWF4UHJvZHVjdHMgPSBmYWxzZTtcbiAgaXNMYXN0UGFnZSA9IGZhbHNlO1xuICBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHNjcm9sbFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hcHBlbmRQcm9kdWN0cyA9IHRydWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UuZ2V0UGFnZUl0ZW1zKHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgbG9hZE5leHRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNNYXhQcm9kdWN0cyA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsUGFnZShwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbXBvbmVudENvbmZpZ3VyYXRpb25zKHNjcm9sbENvbmZpZzogVmlld0NvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IGlzQnV0dG9uID0gc2Nyb2xsQ29uZmlnLnZpZXcuaW5maW5pdGVTY3JvbGwuc2hvd01vcmVCdXR0b247XG4gICAgY29uc3QgY29uZmlnUHJvZHVjdExpbWl0ID0gc2Nyb2xsQ29uZmlnLnZpZXcuaW5maW5pdGVTY3JvbGwucHJvZHVjdExpbWl0O1xuXG4gICAgLy9EaXNwbGF5IFwic2hvdyBtb3JlXCIgYnV0dG9uIGV2ZXJ5IHRpbWUgd2hlbiBidXR0b24gY29uZmlndXJhdGlvbiBpcyB0cnVlXG4gICAgLy9PdGhlcndpc2UsIG9ubHkgZGlzcGxheSBcInNob3cgbW9yZVwiIHdoZW4gdGhlIGNvbmZpZ3VyYXRpb24gcHJvZHVjdCBsaW1pdCBpcyByZWFjaGVkXG4gICAgdGhpcy5wcm9kdWN0TGltaXQgPSBpc0J1dHRvbiA/IDEgOiBjb25maWdQcm9kdWN0TGltaXQ7XG4gIH1cblxuICBwcml2YXRlIGluZmluaXRlU2Nyb2xsT3BlcmF0aW9ucyhpbnB1dE1vZGVsOiBQcm9kdWN0U2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFwcGVuZFByb2R1Y3RzKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAuLi5pbnB1dE1vZGVsLFxuICAgICAgICBwcm9kdWN0czogdGhpcy5tb2RlbC5wcm9kdWN0cy5jb25jYXQoaW5wdXRNb2RlbC5wcm9kdWN0cyksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsID0gaW5wdXRNb2RlbDtcbiAgICAgIHRoaXMubWF4UHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RMaW1pdDtcbiAgICB9XG4gICAgdGhpcy5zZXRDb25kaXRpb25zKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0TGlzdE9uVmlld01vZGVDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMucmVzZXRMaXN0ID0gdHJ1ZTtcbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5nZXRQYWdlSXRlbXMoMCk7XG4gIH1cblxuICAvL1NldCBib29sZWFucyBhZnRlciBtb2RlbCBoYXMgYmVlbiByZXRyaWV2ZWRcbiAgcHJpdmF0ZSBzZXRDb25kaXRpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuaXNFbXB0eSA9ICF0aGlzLm1vZGVsLnByb2R1Y3RzIHx8IHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoID09PSAwO1xuXG4gICAgdGhpcy5pc0xhc3RQYWdlID1cbiAgICAgIHRoaXMubW9kZWwucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT1cbiAgICAgIHRoaXMubW9kZWwucGFnaW5hdGlvbi50b3RhbFBhZ2VzIC0gMTtcblxuICAgIHRoaXMuaXNNYXhQcm9kdWN0cyA9XG4gICAgICB0aGlzLnByb2R1Y3RMaW1pdCAmJlxuICAgICAgdGhpcy5wcm9kdWN0TGltaXQgIT09IDAgJiZcbiAgICAgIHRoaXMubW9kZWwucHJvZHVjdHMubGVuZ3RoID49IHRoaXMubWF4UHJvZHVjdHM7XG5cbiAgICAvL0FkZCB0aGUgcHJvZHVjdExpbWl0IHRvIHRoZSBjdXJyZW50IG51bWJlciBvZiBwcm9kdWN0cyB0byBkZXRlcm1pbmUgdGhlIG5leHQgbWF4IG51bWJlciBvZiBwcm9kdWN0c1xuICAgIGlmICh0aGlzLmlzTWF4UHJvZHVjdHMpIHtcbiAgICAgIHRoaXMubWF4UHJvZHVjdHMgPSB0aGlzLm1vZGVsLnByb2R1Y3RzLmxlbmd0aCArIHRoaXMucHJvZHVjdExpbWl0O1xuICAgIH1cblxuICAgIC8vT25seSBjaGFuZ2Ugdmlld01vZGUgb25jZSB0aGUgbmV3IG1vZGVsIGlzIHNldFxuICAgIC8vVGhpcyBwcmV2ZW50cyBmbGlja2VyaW5nIGlzc3Vlc1xuICAgIGlmICh0aGlzLnZpZXdNb2RlICE9PSB0aGlzLmlucHV0Vmlld01vZGUpIHtcbiAgICAgIHRoaXMudmlld01vZGUgPSB0aGlzLmlucHV0Vmlld01vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldExpc3QgPSBmYWxzZTtcbiAgICB0aGlzLmFwcGVuZFByb2R1Y3RzID0gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
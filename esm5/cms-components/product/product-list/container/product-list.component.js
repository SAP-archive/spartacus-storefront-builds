/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewModes } from '../product-view/product-view.component';
import { ProductListComponentService } from './product-list-component.service';
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(pageLayoutService, productListComponentService) {
        this.pageLayoutService = pageLayoutService;
        this.productListComponentService = productListComponentService;
        this.model$ = this.productListComponentService
            .model$;
        this.viewMode$ = new BehaviorSubject(ViewModes.Grid);
        this.ViewModes = ViewModes;
    }
    /**
     * @return {?}
     */
    ProductListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.productListComponentService.clearSearchResults();
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.viewMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        }));
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductListComponent.prototype.viewPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.productListComponentService.viewPage(pageNumber);
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    ProductListComponent.prototype.sortList = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        this.productListComponentService.sort(sortCode);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ProductListComponent.prototype.setViewMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.viewMode$.next(mode);
    };
    ProductListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-list',
                    template: "<div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"(viewMode$ | async) as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    (viewPageEvent)=\"viewPage($event)\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n              <div class=\"row\">\n                <cx-product-grid-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"col-12 col-sm-6 col-md-4\"\n                ></cx-product-grid-item>\n              </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"viewMode === ViewModes.List\">\n              <cx-product-list-item\n                *ngFor=\"let product of model?.products\"\n                [product]=\"product\"\n                class=\"cx-product-search-list\"\n              ></cx-product-list-item>\n            </ng-container>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div class=\"col-auto\" aria-label=\"product search pagination\">\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    (viewPageEvent)=\"viewPage($event)\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProductListComponent.ctorParameters = function () { return [
        { type: PageLayoutService },
        { type: ProductListComponentService }
    ]; };
    return ProductListComponent;
}());
export { ProductListComponent };
if (false) {
    /** @type {?} */
    ProductListComponent.prototype.model$;
    /** @type {?} */
    ProductListComponent.prototype.viewMode$;
    /** @type {?} */
    ProductListComponent.prototype.ViewModes;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.pageLayoutService;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.productListComponentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRTtJQVVFLDhCQUNVLGlCQUFvQyxFQUNwQywyQkFBd0Q7UUFEeEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBUGxFLFdBQU0sR0FBa0MsSUFBSSxDQUFDLDJCQUEyQjthQUNyRSxNQUFNLENBQUM7UUFDVixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELGNBQVMsR0FBRyxTQUFTLENBQUM7SUFLbkIsQ0FBQzs7OztJQUVKLHVDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsUUFBUTtZQUNuRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsUUFBUSxLQUFLLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN6RSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsdUNBQVE7Ozs7SUFBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksSUFBZTtRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhqSEFBNEM7aUJBQzdDOzs7O2dCQVBRLGlCQUFpQjtnQkFFakIsMkJBQTJCOztJQXNDcEMsMkJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWhDWSxvQkFBb0I7OztJQUMvQixzQ0FDVTs7SUFDVix5Q0FBMkQ7O0lBQzNELHlDQUFzQjs7Ozs7SUFHcEIsaURBQTRDOzs7OztJQUM1QywyREFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgVmlld01vZGVzIH0gZnJvbSAnLi4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+ID0gdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VcbiAgICAubW9kZWwkO1xuICB2aWV3TW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZpZXdNb2Rlcz4oVmlld01vZGVzLkdyaWQpO1xuICBWaWV3TW9kZXMgPSBWaWV3TW9kZXM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UuY2xlYXJTZWFyY2hSZXN1bHRzKCk7XG5cbiAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLnRlbXBsYXRlTmFtZSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodGVtcGxhdGUgPT4ge1xuICAgICAgdGhpcy52aWV3TW9kZSQubmV4dChcbiAgICAgICAgdGVtcGxhdGUgPT09ICdQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZScgPyBWaWV3TW9kZXMuR3JpZCA6IFZpZXdNb2Rlcy5MaXN0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uudmlld1BhZ2UocGFnZU51bWJlcik7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uuc29ydChzb3J0Q29kZSk7XG4gIH1cblxuICBzZXRWaWV3TW9kZShtb2RlOiBWaWV3TW9kZXMpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdNb2RlJC5uZXh0KG1vZGUpO1xuICB9XG59XG4iXX0=
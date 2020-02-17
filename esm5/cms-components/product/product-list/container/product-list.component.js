/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewConfig } from '../../../../shared/config/view-config';
import { ViewModes } from '../product-view/product-view.component';
import { ProductListComponentService } from './product-list-component.service';
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(pageLayoutService, productListComponentService, scrollConfig) {
        this.pageLayoutService = pageLayoutService;
        this.productListComponentService = productListComponentService;
        this.scrollConfig = scrollConfig;
        this.subscription = new Subscription();
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
        this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
        this.productListComponentService.clearSearchResults();
        this.subscription.add(this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.viewMode$.next(template === 'ProductGridPageTemplate'
                ? ViewModes.Grid
                : ViewModes.List);
        })));
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
    /**
     * @return {?}
     */
    ProductListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    ProductListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-list',
                    template: "<div class=\"cx-page\" *ngIf=\"model$ | async as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"viewMode$ | async as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div *ngIf=\"!isInfiniteScroll\" class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <!-- Product list when using pagination -->\n            <ng-container *ngIf=\"!isInfiniteScroll; else infiniteScroll\">\n              <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"viewMode === ViewModes.List\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </ng-container>\n\n            <!-- Product list when using infinite scroll -->\n            <ng-template #infiniteScroll>\n              <cx-product-scroll\n                [scrollConfig]=\"scrollConfig\"\n                [model]=\"model\"\n                [inputViewMode]=\"viewMode\"\n              ></cx-product-scroll>\n            </ng-template>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!isInfiniteScroll\"\n                class=\"col-auto\"\n                aria-label=\"product search pagination\"\n              >\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProductListComponent.ctorParameters = function () { return [
        { type: PageLayoutService },
        { type: ProductListComponentService },
        { type: ViewConfig }
    ]; };
    return ProductListComponent;
}());
export { ProductListComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.subscription;
    /** @type {?} */
    ProductListComponent.prototype.isInfiniteScroll;
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
    /** @type {?} */
    ProductListComponent.prototype.scrollConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRTtJQWlDRSw4QkFDVSxpQkFBb0MsRUFDcEMsMkJBQXdELEVBQ3pELFlBQXlCO1FBRnhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN6RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQS9CMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTFDLFdBQU0sR0FBa0MsSUFBSSxDQUFDLDJCQUEyQjthQUNyRSxNQUFNLENBQUM7UUFFVixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELGNBQVMsR0FBRyxTQUFTLENBQUM7SUF3Qm5CLENBQUM7Ozs7SUFFSix1Q0FBUTs7O0lBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXJFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRXRELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ25FLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixRQUFRLEtBQUsseUJBQXlCO2dCQUNwQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ2hCLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNuQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsdUNBQVE7Ozs7SUFBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksSUFBZTtRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHN3SUFBNEM7aUJBQzdDOzs7O2dCQVJRLGlCQUFpQjtnQkFHakIsMkJBQTJCO2dCQUYzQixVQUFVOztJQXNFbkIsMkJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTlEWSxvQkFBb0I7Ozs7OztJQUMvQiw0Q0FBMEM7O0lBRTFDLGdEQUEwQjs7SUFFMUIsc0NBQ1U7O0lBRVYseUNBQTJEOztJQUMzRCx5Q0FBc0I7Ozs7O0lBcUJwQixpREFBNEM7Ozs7O0lBQzVDLDJEQUFnRTs7SUFDaEUsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBWaWV3TW9kZXMgfSBmcm9tICcuLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgaXNJbmZpbml0ZVNjcm9sbDogYm9vbGVhbjtcblxuICBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+ID0gdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VcbiAgICAubW9kZWwkO1xuXG4gIHZpZXdNb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Vmlld01vZGVzPihWaWV3TW9kZXMuR3JpZCk7XG4gIFZpZXdNb2RlcyA9IFZpZXdNb2RlcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2UsXG4gICAgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBzY3JvbGxDb25maWc6IFZpZXdDb25maWdcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLnhcbiAgICogIFVzZSBjb25zdHJ1Y3RvcihwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2UsXG4gICAqICBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSxcbiAgICogIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAqICBzY3JvbGxDb25maWc6IFZpZXdDb25maWcpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSxcbiAgICBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSxcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLFxuICAgIHB1YmxpYyBzY3JvbGxDb25maWc/OiBWaWV3Q29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5maW5pdGVTY3JvbGwgPSB0aGlzLnNjcm9sbENvbmZpZy52aWV3LmluZmluaXRlU2Nyb2xsLmFjdGl2ZTtcblxuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLmNsZWFyU2VhcmNoUmVzdWx0cygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHtcbiAgICAgICAgdGhpcy52aWV3TW9kZSQubmV4dChcbiAgICAgICAgICB0ZW1wbGF0ZSA9PT0gJ1Byb2R1Y3RHcmlkUGFnZVRlbXBsYXRlJ1xuICAgICAgICAgICAgPyBWaWV3TW9kZXMuR3JpZFxuICAgICAgICAgICAgOiBWaWV3TW9kZXMuTGlzdFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLnNvcnQoc29ydENvZGUpO1xuICB9XG5cbiAgc2V0Vmlld01vZGUobW9kZTogVmlld01vZGVzKTogdm9pZCB7XG4gICAgdGhpcy52aWV3TW9kZSQubmV4dChtb2RlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
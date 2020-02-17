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
export class ProductListComponent {
    /**
     * @param {?} pageLayoutService
     * @param {?} productListComponentService
     * @param {?=} scrollConfig
     */
    constructor(pageLayoutService, productListComponentService, scrollConfig) {
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
    ngOnInit() {
        this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
        this.productListComponentService.clearSearchResults();
        this.subscription.add(this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            this.viewMode$.next(template === 'ProductGridPageTemplate'
                ? ViewModes.Grid
                : ViewModes.List);
        })));
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.productListComponentService.sort(sortCode);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setViewMode(mode) {
        this.viewMode$.next(mode);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ProductListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list',
                template: "<div class=\"cx-page\" *ngIf=\"model$ | async as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"viewMode$ | async as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div *ngIf=\"!isInfiniteScroll\" class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <!-- Product list when using pagination -->\n            <ng-container *ngIf=\"!isInfiniteScroll; else infiniteScroll\">\n              <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"viewMode === ViewModes.List\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </ng-container>\n\n            <!-- Product list when using infinite scroll -->\n            <ng-template #infiniteScroll>\n              <cx-product-scroll\n                [scrollConfig]=\"scrollConfig\"\n                [model]=\"model\"\n                [inputViewMode]=\"viewMode\"\n              ></cx-product-scroll>\n            </ng-template>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!isInfiniteScroll\"\n                class=\"col-auto\"\n                aria-label=\"product search pagination\"\n              >\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
            }] }
];
/** @nocollapse */
ProductListComponent.ctorParameters = () => [
    { type: PageLayoutService },
    { type: ProductListComponentService },
    { type: ViewConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU0vRSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUE2Qi9CLFlBQ1UsaUJBQW9DLEVBQ3BDLDJCQUF3RCxFQUN6RCxZQUF5QjtRQUZ4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDekQsaUJBQVksR0FBWixZQUFZLENBQWE7UUEvQjFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkxQyxXQUFNLEdBQWtDLElBQUksQ0FBQywyQkFBMkI7YUFDckUsTUFBTSxDQUFDO1FBRVYsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFZLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBd0JuQixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXJFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRXRELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLFFBQVEsS0FBSyx5QkFBeUI7Z0JBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSTtnQkFDaEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ25CLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFlO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHN3SUFBNEM7YUFDN0M7Ozs7WUFSUSxpQkFBaUI7WUFHakIsMkJBQTJCO1lBRjNCLFVBQVU7Ozs7Ozs7SUFTakIsNENBQTBDOztJQUUxQyxnREFBMEI7O0lBRTFCLHNDQUNVOztJQUVWLHlDQUEyRDs7SUFDM0QseUNBQXNCOzs7OztJQXFCcEIsaURBQTRDOzs7OztJQUM1QywyREFBZ0U7O0lBQ2hFLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcnO1xuaW1wb3J0IHsgVmlld01vZGVzIH0gZnJvbSAnLi4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGlzSW5maW5pdGVTY3JvbGw6IGJvb2xlYW47XG5cbiAgbW9kZWwkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiA9IHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlXG4gICAgLm1vZGVsJDtcblxuICB2aWV3TW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZpZXdNb2Rlcz4oVmlld01vZGVzLkdyaWQpO1xuICBWaWV3TW9kZXMgPSBWaWV3TW9kZXM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlLFxuICAgIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgc2Nyb2xsQ29uZmlnOiBWaWV3Q29uZmlnXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS54XG4gICAqICBVc2UgY29uc3RydWN0b3IocGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlLFxuICAgKiAgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UsXG4gICAqICByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgKiAgc2Nyb2xsQ29uZmlnOiBWaWV3Q29uZmlnKSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2UsXG4gICAgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2U6IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSxcbiAgICBwdWJsaWMgc2Nyb2xsQ29uZmlnPzogVmlld0NvbmZpZ1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luZmluaXRlU2Nyb2xsID0gdGhpcy5zY3JvbGxDb25maWcudmlldy5pbmZpbml0ZVNjcm9sbC5hY3RpdmU7XG5cbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5jbGVhclNlYXJjaFJlc3VsdHMoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucGFnZUxheW91dFNlcnZpY2UudGVtcGxhdGVOYW1lJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgIHRoaXMudmlld01vZGUkLm5leHQoXG4gICAgICAgICAgdGVtcGxhdGUgPT09ICdQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZSdcbiAgICAgICAgICAgID8gVmlld01vZGVzLkdyaWRcbiAgICAgICAgICAgIDogVmlld01vZGVzLkxpc3RcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNvcnRMaXN0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5zb3J0KHNvcnRDb2RlKTtcbiAgfVxuXG4gIHNldFZpZXdNb2RlKG1vZGU6IFZpZXdNb2Rlcyk6IHZvaWQge1xuICAgIHRoaXMudmlld01vZGUkLm5leHQobW9kZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
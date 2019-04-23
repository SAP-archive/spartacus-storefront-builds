/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { PageLayoutService } from '../../../../cms/page-layout/page-layout.service';
import { ViewModes } from '../product-view/product-view.component';
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productSearchService, activatedRoute, pageLayoutService) {
        this.productSearchService = productSearchService;
        this.activatedRoute = activatedRoute;
        this.pageLayoutService = pageLayoutService;
        this.searchConfig = {};
        this.gridMode$ = new BehaviorSubject(ViewModes.Grid);
    }
    /**
     * @return {?}
     */
    ProductListComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        var queryParams = this.activatedRoute.snapshot.queryParams;
        this.options = this.createOptionsByUrlParams();
        if (this.categoryCode && this.categoryCode !== queryParams.categoryCode) {
            this.query = ':relevance:category:' + this.categoryCode;
        }
        if (this.brandCode && this.brandCode !== queryParams.brandCode) {
            this.query = ':relevance:brand:' + this.brandCode;
        }
        if (!this.query && queryParams.query) {
            this.query = queryParams.query;
        }
        this.search(this.query, this.options);
    };
    /**
     * @return {?}
     */
    ProductListComponent.prototype.createOptionsByUrlParams = /**
     * @return {?}
     */
    function () {
        var queryParams = this.activatedRoute.snapshot.queryParams;
        /** @type {?} */
        var newConfig = tslib_1.__assign({}, queryParams);
        delete newConfig.query;
        /** @type {?} */
        var options = tslib_1.__assign({}, this.searchConfig, newConfig, { pageSize: this.itemPerPage || 10 });
        if (this.categoryCode) {
            options.categoryCode = this.categoryCode;
        }
        if (this.brandCode) {
            options.brandCode = this.brandCode;
        }
        return options;
    };
    /**
     * @return {?}
     */
    ProductListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateParams$ = this.activatedRoute.params.pipe(tap(function (params) {
            _this.categoryCode = params.categoryCode;
            _this.brandCode = params.brandCode;
            _this.query = params.query;
            _this.update();
        }));
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe(function (template) {
            _this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        });
        // clean previous search result
        this.productSearchService.clearSearchResults();
        this.model$ = this.productSearchService.getSearchResults().pipe(tap(function (searchResult) {
            if (Object.keys(searchResult).length === 0) {
                _this.search(_this.query, _this.options);
            }
            else {
                _this.getCategoryTitle(searchResult);
            }
        }), filter(function (searchResult) { return Object.keys(searchResult).length > 0; }));
    };
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    ProductListComponent.prototype.getCategoryTitle = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data.breadcrumbs && data.breadcrumbs.length > 0) {
            this.categoryTitle = data.breadcrumbs[0].facetValueName;
        }
        else if (!this.query.includes(':relevance:')) {
            this.categoryTitle = this.query;
        }
        if (this.categoryTitle) {
            this.categoryTitle =
                data.pagination.totalResults + ' results for ' + this.categoryTitle;
        }
        return this.categoryTitle;
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
        this.search(this.query, { currentPage: pageNumber });
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
        this.search(this.query, { sortCode: sortCode });
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ProductListComponent.prototype.setGridMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.gridMode$.next(mode);
    };
    /**
     * @protected
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    ProductListComponent.prototype.search = /**
     * @protected
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    function (query, options) {
        if (this.query) {
            if (options) {
                // Overide default options
                this.searchConfig = tslib_1.__assign({}, this.searchConfig, options);
            }
            this.productSearchService.search(query, this.searchConfig);
        }
    };
    ProductListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-list',
                    template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page__section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ProductListComponent.ctorParameters = function () { return [
        { type: ProductSearchService },
        { type: ActivatedRoute },
        { type: PageLayoutService }
    ]; };
    return ProductListComponent;
}());
export { ProductListComponent };
if (false) {
    /** @type {?} */
    ProductListComponent.prototype.query;
    /** @type {?} */
    ProductListComponent.prototype.categoryCode;
    /** @type {?} */
    ProductListComponent.prototype.brandCode;
    /** @type {?} */
    ProductListComponent.prototype.itemPerPage;
    /** @type {?} */
    ProductListComponent.prototype.model$;
    /** @type {?} */
    ProductListComponent.prototype.searchConfig;
    /** @type {?} */
    ProductListComponent.prototype.categoryTitle;
    /** @type {?} */
    ProductListComponent.prototype.options;
    /** @type {?} */
    ProductListComponent.prototype.updateParams$;
    /** @type {?} */
    ProductListComponent.prototype.gridMode$;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponent.prototype.productSearchService;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.pageLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUNMLG9CQUFvQixHQUdyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRW5FO0lBaUJFLDhCQUNZLG9CQUEwQyxFQUM1QyxjQUE4QixFQUM5QixpQkFBb0M7UUFGbEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVQ5QyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFJaEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFZLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQU14RCxDQUFDOzs7O0lBRUoscUNBQU07OztJQUFOO1FBQ1UsSUFBQSxzREFBVztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxL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cEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsWUFBWSx3QkFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixPQUFPLENBQ1gsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7Z0JBaklGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix3eUhBQTRDO2lCQUM3Qzs7OztnQkFaQyxvQkFBb0I7Z0JBRmIsY0FBYztnQkFRZCxpQkFBaUI7O0lBcUkxQiwyQkFBQztDQUFBLEFBbElELElBa0lDO1NBOUhZLG9CQUFvQjs7O0lBQy9CLHFDQUFjOztJQUNkLDRDQUFxQjs7SUFDckIseUNBQWtCOztJQUNsQiwyQ0FBb0I7O0lBRXBCLHNDQUF3Qzs7SUFDeEMsNENBQWdDOztJQUNoQyw2Q0FBc0I7O0lBQ3RCLHVDQUFzQjs7SUFDdEIsNkNBQWtDOztJQUNsQyx5Q0FBMkQ7Ozs7O0lBR3pELG9EQUFvRDs7Ozs7SUFDcEQsOENBQXNDOzs7OztJQUN0QyxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxuICBVSVByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld01vZGVzIH0gZnJvbSAnLi4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBxdWVyeTogc3RyaW5nO1xuICBjYXRlZ29yeUNvZGU6IHN0cmluZztcbiAgYnJhbmRDb2RlOiBzdHJpbmc7XG4gIGl0ZW1QZXJQYWdlOiBudW1iZXI7XG5cbiAgbW9kZWwkOiBPYnNlcnZhYmxlPFVJUHJvZHVjdFNlYXJjaFBhZ2U+O1xuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyA9IHt9O1xuICBjYXRlZ29yeVRpdGxlOiBzdHJpbmc7XG4gIG9wdGlvbnM6IFNlYXJjaENvbmZpZztcbiAgdXBkYXRlUGFyYW1zJDogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuICBncmlkTW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZpZXdNb2Rlcz4oVmlld01vZGVzLkdyaWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9uc0J5VXJsUGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5jYXRlZ29yeUNvZGUgJiYgdGhpcy5jYXRlZ29yeUNvZGUgIT09IHF1ZXJ5UGFyYW1zLmNhdGVnb3J5Q29kZSkge1xuICAgICAgdGhpcy5xdWVyeSA9ICc6cmVsZXZhbmNlOmNhdGVnb3J5OicgKyB0aGlzLmNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJhbmRDb2RlICYmIHRoaXMuYnJhbmRDb2RlICE9PSBxdWVyeVBhcmFtcy5icmFuZENvZGUpIHtcbiAgICAgIHRoaXMucXVlcnkgPSAnOnJlbGV2YW5jZTpicmFuZDonICsgdGhpcy5icmFuZENvZGU7XG4gICAgfVxuICAgIGlmICghdGhpcy5xdWVyeSAmJiBxdWVyeVBhcmFtcy5xdWVyeSkge1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5UGFyYW1zLnF1ZXJ5O1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlT3B0aW9uc0J5VXJsUGFyYW1zKCk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICBjb25zdCBuZXdDb25maWcgPSB7XG4gICAgICAuLi5xdWVyeVBhcmFtcyxcbiAgICB9O1xuICAgIGRlbGV0ZSBuZXdDb25maWcucXVlcnk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgLi4ubmV3Q29uZmlnLFxuICAgICAgcGFnZVNpemU6IHRoaXMuaXRlbVBlclBhZ2UgfHwgMTAsXG4gICAgfTtcbiAgICBpZiAodGhpcy5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIG9wdGlvbnMuY2F0ZWdvcnlDb2RlID0gdGhpcy5jYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyYW5kQ29kZSkge1xuICAgICAgb3B0aW9ucy5icmFuZENvZGUgPSB0aGlzLmJyYW5kQ29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGFyYW1zJCA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnBpcGUoXG4gICAgICB0YXAocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUNvZGUgPSBwYXJhbXMuY2F0ZWdvcnlDb2RlO1xuICAgICAgICB0aGlzLmJyYW5kQ29kZSA9IHBhcmFtcy5icmFuZENvZGU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBwYXJhbXMucXVlcnk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLnRlbXBsYXRlTmFtZSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodGVtcGxhdGUgPT4ge1xuICAgICAgdGhpcy5ncmlkTW9kZSQubmV4dChcbiAgICAgICAgdGVtcGxhdGUgPT09ICdQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZScgPyBWaWV3TW9kZXMuR3JpZCA6IFZpZXdNb2Rlcy5MaXN0XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gY2xlYW4gcHJldmlvdXMgc2VhcmNoIHJlc3VsdFxuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuY2xlYXJTZWFyY2hSZXN1bHRzKCk7XG5cbiAgICB0aGlzLm1vZGVsJCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICB0YXAoc2VhcmNoUmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldENhdGVnb3J5VGl0bGUoc2VhcmNoUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoc2VhcmNoUmVzdWx0ID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhdGVnb3J5VGl0bGUoZGF0YTogVUlQcm9kdWN0U2VhcmNoUGFnZSk6IHN0cmluZyB7XG4gICAgaWYgKGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5VGl0bGUgPSBkYXRhLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucXVlcnkuaW5jbHVkZXMoJzpyZWxldmFuY2U6JykpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnlUaXRsZSA9IHRoaXMucXVlcnk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhdGVnb3J5VGl0bGUpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnlUaXRsZSA9XG4gICAgICAgIGRhdGEucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMgKyAnIHJlc3VsdHMgZm9yICcgKyB0aGlzLmNhdGVnb3J5VGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnlUaXRsZTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHsgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIgfSk7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgeyBzb3J0Q29kZTogc29ydENvZGUgfSk7XG4gIH1cblxuICBzZXRHcmlkTW9kZShtb2RlOiBWaWV3TW9kZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRNb2RlJC5uZXh0KG1vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRpb25zPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIC8vIE92ZXJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIHRoaXMuc2VhcmNoQ29uZmlnID0ge1xuICAgICAgICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLnNlYXJjaENvbmZpZyk7XG4gICAgfVxuICB9XG59XG4iXX0=
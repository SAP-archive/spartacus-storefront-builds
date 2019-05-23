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
import { PageLayoutService } from '../../../../cms-structure/page/index';
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
        this.productSearchService.clearResults();
        this.model$ = this.productSearchService.getResults().pipe(tap(function (searchResult) {
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
                    template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLG9CQUFvQixHQUVyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRW5FO0lBaUJFLDhCQUNZLG9CQUEwQyxFQUM1QyxjQUE4QixFQUM5QixpQkFBb0M7UUFGbEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVQ5QyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFJaEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFZLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQU14RCxDQUFDOzs7O0lBRUoscUNBQU07OztJQUFOO1FBQ1UsSUFBQSxzREFBVztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxZQUFZLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELHVEQUF3Qjs7O0lBQXhCO1FBQ1UsSUFBQSxzREFBVzs7WUFDYixTQUFTLHdCQUNWLFdBQVcsQ0FDZjtRQUNELE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQzs7WUFDakIsT0FBTyx3QkFDUixJQUFJLENBQUMsWUFBWSxFQUNqQixTQUFTLElBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxHQUNqQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUM7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQTZCQztRQTVCQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEQsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4QyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNuRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsUUFBUSxLQUFLLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN6RSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDdkQsR0FBRyxDQUFDLFVBQUEsWUFBWTtZQUNkLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsK0NBQWdCOzs7OztJQUExQixVQUEyQixJQUF1QjtRQUNoRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7U0FDekQ7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhO2dCQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RTtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxRQUFnQjtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxJQUFlO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFFUyxxQ0FBTTs7Ozs7O0lBQWhCLFVBQWlCLEtBQWEsRUFBRSxPQUFzQjtRQUNwRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLE9BQU8sRUFBRTtnQkFDWCwwQkFBMEI7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLHdCQUNaLElBQUksQ0FBQyxZQUFZLEVBQ2pCLE9BQU8sQ0FDWCxDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkFqSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHV5SEFBNEM7aUJBQzdDOzs7O2dCQVhDLG9CQUFvQjtnQkFIYixjQUFjO2dCQVFkLGlCQUFpQjs7SUFxSTFCLDJCQUFDO0NBQUEsQUFsSUQsSUFrSUM7U0E5SFksb0JBQW9COzs7SUFDL0IscUNBQWM7O0lBQ2QsNENBQXFCOztJQUNyQix5Q0FBa0I7O0lBQ2xCLDJDQUFvQjs7SUFFcEIsc0NBQXNDOztJQUN0Qyw0Q0FBZ0M7O0lBQ2hDLDZDQUFzQjs7SUFDdEIsdUNBQXNCOztJQUN0Qiw2Q0FBa0M7O0lBQ2xDLHlDQUEyRDs7Ozs7SUFHekQsb0RBQW9EOzs7OztJQUNwRCw4Q0FBc0M7Ozs7O0lBQ3RDLGlEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgY2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG4gIGJyYW5kQ29kZTogc3RyaW5nO1xuICBpdGVtUGVyUGFnZTogbnVtYmVyO1xuXG4gIG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0ge307XG4gIGNhdGVnb3J5VGl0bGU6IHN0cmluZztcbiAgb3B0aW9uczogU2VhcmNoQ29uZmlnO1xuICB1cGRhdGVQYXJhbXMkOiBPYnNlcnZhYmxlPFBhcmFtcz47XG4gIGdyaWRNb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Vmlld01vZGVzPihWaWV3TW9kZXMuR3JpZCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZVxuICApIHt9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMgfSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jcmVhdGVPcHRpb25zQnlVcmxQYXJhbXMoKTtcblxuICAgIGlmICh0aGlzLmNhdGVnb3J5Q29kZSAmJiB0aGlzLmNhdGVnb3J5Q29kZSAhPT0gcXVlcnlQYXJhbXMuY2F0ZWdvcnlDb2RlKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gJzpyZWxldmFuY2U6Y2F0ZWdvcnk6JyArIHRoaXMuY2F0ZWdvcnlDb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmFuZENvZGUgJiYgdGhpcy5icmFuZENvZGUgIT09IHF1ZXJ5UGFyYW1zLmJyYW5kQ29kZSkge1xuICAgICAgdGhpcy5xdWVyeSA9ICc6cmVsZXZhbmNlOmJyYW5kOicgKyB0aGlzLmJyYW5kQ29kZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnF1ZXJ5ICYmIHF1ZXJ5UGFyYW1zLnF1ZXJ5KSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlQYXJhbXMucXVlcnk7XG4gICAgfVxuICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVPcHRpb25zQnlVcmxQYXJhbXMoKTogU2VhcmNoQ29uZmlnIHtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcbiAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgIH07XG4gICAgZGVsZXRlIG5ld0NvbmZpZy5xdWVyeTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgLi4udGhpcy5zZWFyY2hDb25maWcsXG4gICAgICAuLi5uZXdDb25maWcsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5pdGVtUGVyUGFnZSB8fCAxMCxcbiAgICB9O1xuICAgIGlmICh0aGlzLmNhdGVnb3J5Q29kZSkge1xuICAgICAgb3B0aW9ucy5jYXRlZ29yeUNvZGUgPSB0aGlzLmNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJhbmRDb2RlKSB7XG4gICAgICBvcHRpb25zLmJyYW5kQ29kZSA9IHRoaXMuYnJhbmRDb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQYXJhbXMkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMucGlwZShcbiAgICAgIHRhcChwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmNhdGVnb3J5Q29kZSA9IHBhcmFtcy5jYXRlZ29yeUNvZGU7XG4gICAgICAgIHRoaXMuYnJhbmRDb2RlID0gcGFyYW1zLmJyYW5kQ29kZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHBhcmFtcy5xdWVyeTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucGFnZUxheW91dFNlcnZpY2UudGVtcGxhdGVOYW1lJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB7XG4gICAgICB0aGlzLmdyaWRNb2RlJC5uZXh0KFxuICAgICAgICB0ZW1wbGF0ZSA9PT0gJ1Byb2R1Y3RHcmlkUGFnZVRlbXBsYXRlJyA/IFZpZXdNb2Rlcy5HcmlkIDogVmlld01vZGVzLkxpc3RcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBjbGVhbiBwcmV2aW91cyBzZWFyY2ggcmVzdWx0XG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5jbGVhclJlc3VsdHMoKTtcblxuICAgIHRoaXMubW9kZWwkID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgIHRhcChzZWFyY2hSZXN1bHQgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlUaXRsZShzZWFyY2hSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihzZWFyY2hSZXN1bHQgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2F0ZWdvcnlUaXRsZShkYXRhOiBQcm9kdWN0U2VhcmNoUGFnZSk6IHN0cmluZyB7XG4gICAgaWYgKGRhdGEuYnJlYWRjcnVtYnMgJiYgZGF0YS5icmVhZGNydW1icy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5VGl0bGUgPSBkYXRhLmJyZWFkY3J1bWJzWzBdLmZhY2V0VmFsdWVOYW1lO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucXVlcnkuaW5jbHVkZXMoJzpyZWxldmFuY2U6JykpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnlUaXRsZSA9IHRoaXMucXVlcnk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhdGVnb3J5VGl0bGUpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnlUaXRsZSA9XG4gICAgICAgIGRhdGEucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMgKyAnIHJlc3VsdHMgZm9yICcgKyB0aGlzLmNhdGVnb3J5VGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnlUaXRsZTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHsgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIgfSk7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgeyBzb3J0Q29kZTogc29ydENvZGUgfSk7XG4gIH1cblxuICBzZXRHcmlkTW9kZShtb2RlOiBWaWV3TW9kZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRNb2RlJC5uZXh0KG1vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRpb25zPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIC8vIE92ZXJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIHRoaXMuc2VhcmNoQ29uZmlnID0ge1xuICAgICAgICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLnNlYXJjaENvbmZpZyk7XG4gICAgfVxuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.updateParams$ = this.activatedRoute.params.pipe(tap((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.categoryCode = params.categoryCode;
            _this.brandCode = params.brandCode;
            _this.query = params.query;
            _this.update();
        })));
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        }));
        // clean previous search result
        this.productSearchService.clearResults();
        this.model$ = this.productSearchService.getResults().pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) {
            if (Object.keys(searchResult).length === 0) {
                _this.search(_this.query, _this.options);
            }
        })), filter((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) { return Object.keys(searchResult).length > 0; })));
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
        var queryParams = this.activatedRoute.snapshot.queryParams;
        this.search(queryParams.query, { currentPage: pageNumber });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLG9CQUFvQixHQUVyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRW5FO0lBZ0JFLDhCQUNZLG9CQUEwQyxFQUM1QyxjQUE4QixFQUM5QixpQkFBb0M7UUFGbEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVI5QyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFHaEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFZLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQU14RCxDQUFDOzs7O0lBRUoscUNBQU07OztJQUFOO1FBQ1UsSUFBQSxzREFBVztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxL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SUFHekQsb0RBQW9EOzs7OztJQUNwRCw4Q0FBc0M7Ozs7O0lBQ3RDLGlEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgY2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG4gIGJyYW5kQ29kZTogc3RyaW5nO1xuICBpdGVtUGVyUGFnZTogbnVtYmVyO1xuXG4gIG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0ge307XG4gIG9wdGlvbnM6IFNlYXJjaENvbmZpZztcbiAgdXBkYXRlUGFyYW1zJDogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuICBncmlkTW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZpZXdNb2Rlcz4oVmlld01vZGVzLkdyaWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9uc0J5VXJsUGFyYW1zKCk7XG5cbiAgICBpZiAodGhpcy5jYXRlZ29yeUNvZGUgJiYgdGhpcy5jYXRlZ29yeUNvZGUgIT09IHF1ZXJ5UGFyYW1zLmNhdGVnb3J5Q29kZSkge1xuICAgICAgdGhpcy5xdWVyeSA9ICc6cmVsZXZhbmNlOmNhdGVnb3J5OicgKyB0aGlzLmNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJhbmRDb2RlICYmIHRoaXMuYnJhbmRDb2RlICE9PSBxdWVyeVBhcmFtcy5icmFuZENvZGUpIHtcbiAgICAgIHRoaXMucXVlcnkgPSAnOnJlbGV2YW5jZTpicmFuZDonICsgdGhpcy5icmFuZENvZGU7XG4gICAgfVxuICAgIGlmICghdGhpcy5xdWVyeSAmJiBxdWVyeVBhcmFtcy5xdWVyeSkge1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5UGFyYW1zLnF1ZXJ5O1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlT3B0aW9uc0J5VXJsUGFyYW1zKCk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICBjb25zdCBuZXdDb25maWcgPSB7XG4gICAgICAuLi5xdWVyeVBhcmFtcyxcbiAgICB9O1xuICAgIGRlbGV0ZSBuZXdDb25maWcucXVlcnk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgLi4ubmV3Q29uZmlnLFxuICAgICAgcGFnZVNpemU6IHRoaXMuaXRlbVBlclBhZ2UgfHwgMTAsXG4gICAgfTtcbiAgICBpZiAodGhpcy5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIG9wdGlvbnMuY2F0ZWdvcnlDb2RlID0gdGhpcy5jYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyYW5kQ29kZSkge1xuICAgICAgb3B0aW9ucy5icmFuZENvZGUgPSB0aGlzLmJyYW5kQ29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGFyYW1zJCA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnBpcGUoXG4gICAgICB0YXAocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUNvZGUgPSBwYXJhbXMuY2F0ZWdvcnlDb2RlO1xuICAgICAgICB0aGlzLmJyYW5kQ29kZSA9IHBhcmFtcy5icmFuZENvZGU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBwYXJhbXMucXVlcnk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLnRlbXBsYXRlTmFtZSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodGVtcGxhdGUgPT4ge1xuICAgICAgdGhpcy5ncmlkTW9kZSQubmV4dChcbiAgICAgICAgdGVtcGxhdGUgPT09ICdQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZScgPyBWaWV3TW9kZXMuR3JpZCA6IFZpZXdNb2Rlcy5MaXN0XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gY2xlYW4gcHJldmlvdXMgc2VhcmNoIHJlc3VsdFxuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG5cbiAgICB0aGlzLm1vZGVsJCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICB0YXAoc2VhcmNoUmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoc2VhcmNoUmVzdWx0ID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMClcbiAgICApO1xuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICB0aGlzLnNlYXJjaChxdWVyeVBhcmFtcy5xdWVyeSwgeyBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9KTtcbiAgfVxuXG4gIHNvcnRMaXN0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB7IHNvcnRDb2RlOiBzb3J0Q29kZSB9KTtcbiAgfVxuXG4gIHNldEdyaWRNb2RlKG1vZGU6IFZpZXdNb2Rlcyk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZE1vZGUkLm5leHQobW9kZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbnM/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gT3ZlcmlkZSBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5zZWFyY2hDb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5zZWFyY2hDb25maWcsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5zZWFyY2gocXVlcnksIHRoaXMuc2VhcmNoQ29uZmlnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
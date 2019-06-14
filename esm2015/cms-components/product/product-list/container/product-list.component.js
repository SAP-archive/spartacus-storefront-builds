/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { PageLayoutService } from '../../../../cms-structure/page/index';
import { ViewModes } from '../product-view/product-view.component';
export class ProductListComponent {
    /**
     * @param {?} productSearchService
     * @param {?} activatedRoute
     * @param {?} pageLayoutService
     */
    constructor(productSearchService, activatedRoute, pageLayoutService) {
        this.productSearchService = productSearchService;
        this.activatedRoute = activatedRoute;
        this.pageLayoutService = pageLayoutService;
        this.searchConfig = {};
        this.gridMode$ = new BehaviorSubject(ViewModes.Grid);
    }
    /**
     * @return {?}
     */
    update() {
        const { queryParams } = this.activatedRoute.snapshot;
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
    }
    /**
     * @return {?}
     */
    createOptionsByUrlParams() {
        const { queryParams } = this.activatedRoute.snapshot;
        /** @type {?} */
        const newConfig = Object.assign({}, queryParams);
        delete newConfig.query;
        /** @type {?} */
        const options = Object.assign({}, this.searchConfig, newConfig, { pageSize: this.itemPerPage || 10 });
        if (this.categoryCode) {
            options.categoryCode = this.categoryCode;
        }
        if (this.brandCode) {
            options.brandCode = this.brandCode;
        }
        return options;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateParams$ = this.activatedRoute.params.pipe(tap((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.categoryCode = params.categoryCode;
            this.brandCode = params.brandCode;
            this.query = params.query;
            this.update();
        })));
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        }));
        // clean previous search result
        this.productSearchService.clearResults();
        this.model$ = this.productSearchService.getResults().pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => {
            if (Object.keys(searchResult).length === 0) {
                this.search(this.query, this.options);
            }
        })), filter((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => Object.keys(searchResult).length > 0)));
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        const { queryParams } = this.activatedRoute.snapshot;
        this.search(queryParams.query, { currentPage: pageNumber });
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        const { queryParams } = this.activatedRoute.snapshot;
        this.search(queryParams.query, { sortCode: sortCode });
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setGridMode(mode) {
        this.gridMode$.next(mode);
    }
    /**
     * @protected
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    search(query, options) {
        if (this.query) {
            if (options) {
                // Overide default options
                this.searchConfig = Object.assign({}, this.searchConfig, options);
            }
            this.productSearchService.search(query, this.searchConfig);
        }
    }
}
ProductListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list',
                template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ProductListComponent.ctorParameters = () => [
    { type: ProductSearchService },
    { type: ActivatedRoute },
    { type: PageLayoutService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBRUwsb0JBQW9CLEdBRXJCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFNbkUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBWS9CLFlBQ1ksb0JBQTBDLEVBQzVDLGNBQThCLEVBQzlCLGlCQUFvQztRQUZsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUjlDLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUdoQyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBTXhELENBQUM7Ozs7SUFFSixNQUFNO2NBQ0UsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztR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Qyw0Q0FBZ0M7O0lBQ2hDLHVDQUFzQjs7SUFDdEIsNkNBQWtDOztJQUNsQyx5Q0FBMkQ7Ozs7O0lBR3pELG9EQUFvRDs7Ozs7SUFDcEQsOENBQXNDOzs7OztJQUN0QyxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBWaWV3TW9kZXMgfSBmcm9tICcuLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGNhdGVnb3J5Q29kZTogc3RyaW5nO1xuICBicmFuZENvZGU6IHN0cmluZztcbiAgaXRlbVBlclBhZ2U6IG51bWJlcjtcblxuICBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyA9IHt9O1xuICBvcHRpb25zOiBTZWFyY2hDb25maWc7XG4gIHVwZGF0ZVBhcmFtcyQ6IE9ic2VydmFibGU8UGFyYW1zPjtcbiAgZ3JpZE1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWaWV3TW9kZXM+KFZpZXdNb2Rlcy5HcmlkKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNyZWF0ZU9wdGlvbnNCeVVybFBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlDb2RlICYmIHRoaXMuY2F0ZWdvcnlDb2RlICE9PSBxdWVyeVBhcmFtcy5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIHRoaXMucXVlcnkgPSAnOnJlbGV2YW5jZTpjYXRlZ29yeTonICsgdGhpcy5jYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyYW5kQ29kZSAmJiB0aGlzLmJyYW5kQ29kZSAhPT0gcXVlcnlQYXJhbXMuYnJhbmRDb2RlKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gJzpyZWxldmFuY2U6YnJhbmQ6JyArIHRoaXMuYnJhbmRDb2RlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucXVlcnkgJiYgcXVlcnlQYXJhbXMucXVlcnkpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeVBhcmFtcy5xdWVyeTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbnNCeVVybFBhcmFtcygpOiBTZWFyY2hDb25maWcge1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMgfSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG4gICAgY29uc3QgbmV3Q29uZmlnID0ge1xuICAgICAgLi4ucXVlcnlQYXJhbXMsXG4gICAgfTtcbiAgICBkZWxldGUgbmV3Q29uZmlnLnF1ZXJ5O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLnNlYXJjaENvbmZpZyxcbiAgICAgIC4uLm5ld0NvbmZpZyxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLml0ZW1QZXJQYWdlIHx8IDEwLFxuICAgIH07XG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlDb2RlKSB7XG4gICAgICBvcHRpb25zLmNhdGVnb3J5Q29kZSA9IHRoaXMuY2F0ZWdvcnlDb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmFuZENvZGUpIHtcbiAgICAgIG9wdGlvbnMuYnJhbmRDb2RlID0gdGhpcy5icmFuZENvZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVBhcmFtcyQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5waXBlKFxuICAgICAgdGFwKHBhcmFtcyA9PiB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlDb2RlID0gcGFyYW1zLmNhdGVnb3J5Q29kZTtcbiAgICAgICAgdGhpcy5icmFuZENvZGUgPSBwYXJhbXMuYnJhbmRDb2RlO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcGFyYW1zLnF1ZXJ5O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHtcbiAgICAgIHRoaXMuZ3JpZE1vZGUkLm5leHQoXG4gICAgICAgIHRlbXBsYXRlID09PSAnUHJvZHVjdEdyaWRQYWdlVGVtcGxhdGUnID8gVmlld01vZGVzLkdyaWQgOiBWaWV3TW9kZXMuTGlzdFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIGNsZWFuIHByZXZpb3VzIHNlYXJjaCByZXN1bHRcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuXG4gICAgdGhpcy5tb2RlbCQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKS5waXBlKFxuICAgICAgdGFwKHNlYXJjaFJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKHNlYXJjaFJlc3VsdCA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApXG4gICAgKTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMgfSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG4gICAgdGhpcy5zZWFyY2gocXVlcnlQYXJhbXMucXVlcnksIHsgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIgfSk7XG4gIH1cblxuICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICB0aGlzLnNlYXJjaChxdWVyeVBhcmFtcy5xdWVyeSwgeyBzb3J0Q29kZTogc29ydENvZGUgfSk7XG4gIH1cblxuICBzZXRHcmlkTW9kZShtb2RlOiBWaWV3TW9kZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWRNb2RlJC5uZXh0KG1vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRpb25zPzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIC8vIE92ZXJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIHRoaXMuc2VhcmNoQ29uZmlnID0ge1xuICAgICAgICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHF1ZXJ5LCB0aGlzLnNlYXJjaENvbmZpZyk7XG4gICAgfVxuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { PageLayoutService } from '../../../../cms/page-layout/page-layout.service';
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
        this.updateParams$ = this.activatedRoute.params.pipe(tap(params => {
            this.categoryCode = params.categoryCode;
            this.brandCode = params.brandCode;
            this.query = params.query;
            this.update();
        }));
        this.pageLayoutService.templateName$.pipe(take(1)).subscribe(template => {
            this.gridMode$.next(template === 'ProductGridPageTemplate' ? ViewModes.Grid : ViewModes.List);
        });
        // clean previous search result
        this.productSearchService.clearSearchResults();
        this.model$ = this.productSearchService.getSearchResults().pipe(tap(searchResult => {
            if (Object.keys(searchResult).length === 0) {
                this.search(this.query, this.options);
            }
            else {
                this.getCategoryTitle(searchResult);
            }
        }), filter(searchResult => Object.keys(searchResult).length > 0));
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    getCategoryTitle(data) {
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
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.search(this.query, { currentPage: pageNumber });
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.search(this.query, { sortCode: sortCode });
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
                template: "<ng-container *ngIf=\"(updateParams$ | async)\">\n  <div class=\"cx-page\" *ngIf=\"(model$ | async) as model\">\n    <section class=\"cx-page__section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-12\" *ngIf=\"(gridMode$ | async) as gridMode\">\n            <div class=\"cx-sorting top\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\">\n                  <div\n                    class=\"cx-pagination\"\n                    aria-label=\"product search pagination\"\n                  >\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n            <div class=\"cx-product-container\">\n              <ng-container *ngIf=\"gridMode === 'grid'\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"gridMode === 'list'\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </div>\n            <div class=\"cx-sorting bottom\">\n              <div class=\"row\">\n                <div class=\"col-12 col-lg-4 mr-auto\">\n                  <div class=\"form-group cx-sort-dropdown\">\n                    <cx-sorting\n                      [sortOptions]=\"model.sorts\"\n                      (sortListEvent)=\"sortList($event)\"\n                      [selectedOption]=\"model.pagination.sort\"\n                      placeholder=\"{{\n                        'productList.sortByRelevance' | cxTranslate\n                      }}\"\n                    ></cx-sorting>\n                  </div>\n                </div>\n                <div class=\"col-auto\" aria-label=\"product search pagination\">\n                  <div class=\"cx-pagination\">\n                    <cx-pagination\n                      [pagination]=\"model.pagination\"\n                      (viewPageEvent)=\"viewPage($event)\"\n                    ></cx-pagination>\n                  </div>\n                </div>\n                <div class=\"col-auto ml-auto ml-lg-0\">\n                  <cx-product-view\n                    (modeChange)=\"setGridMode($event)\"\n                    [mode]=\"gridMode\"\n                  ></cx-product-view>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsb0JBQW9CLEdBR3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFNbkUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBYS9CLFlBQ1ksb0JBQTBDLEVBQzVDLGNBQThCLEVBQzlCLGlCQUFvQztRQUZsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVDlDLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUloQyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBTXhELENBQUM7Ozs7SUFFSixNQUFNO2NBQ0UsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztR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c0I7UUFDcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsWUFBWSxxQkFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixPQUFPLENBQ1gsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7O1lBaklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3eUhBQTRDO2FBQzdDOzs7O1lBWkMsb0JBQW9CO1lBRmIsY0FBYztZQVFkLGlCQUFpQjs7OztJQVF4QixxQ0FBYzs7SUFDZCw0Q0FBcUI7O0lBQ3JCLHlDQUFrQjs7SUFDbEIsMkNBQW9COztJQUVwQixzQ0FBd0M7O0lBQ3hDLDRDQUFnQzs7SUFDaEMsNkNBQXNCOztJQUN0Qix1Q0FBc0I7O0lBQ3RCLDZDQUFrQzs7SUFDbEMseUNBQTJEOzs7OztJQUd6RCxvREFBb0Q7Ozs7O0lBQ3BELDhDQUFzQzs7Ozs7SUFDdEMsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaENvbmZpZyxcbiAgVUlQcm9kdWN0U2VhcmNoUGFnZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlcyB9IGZyb20gJy4uL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgY2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG4gIGJyYW5kQ29kZTogc3RyaW5nO1xuICBpdGVtUGVyUGFnZTogbnVtYmVyO1xuXG4gIG1vZGVsJDogT2JzZXJ2YWJsZTxVSVByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSB7fTtcbiAgY2F0ZWdvcnlUaXRsZTogc3RyaW5nO1xuICBvcHRpb25zOiBTZWFyY2hDb25maWc7XG4gIHVwZGF0ZVBhcmFtcyQ6IE9ic2VydmFibGU8UGFyYW1zPjtcbiAgZ3JpZE1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWaWV3TW9kZXM+KFZpZXdNb2Rlcy5HcmlkKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNyZWF0ZU9wdGlvbnNCeVVybFBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlDb2RlICYmIHRoaXMuY2F0ZWdvcnlDb2RlICE9PSBxdWVyeVBhcmFtcy5jYXRlZ29yeUNvZGUpIHtcbiAgICAgIHRoaXMucXVlcnkgPSAnOnJlbGV2YW5jZTpjYXRlZ29yeTonICsgdGhpcy5jYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJyYW5kQ29kZSAmJiB0aGlzLmJyYW5kQ29kZSAhPT0gcXVlcnlQYXJhbXMuYnJhbmRDb2RlKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gJzpyZWxldmFuY2U6YnJhbmQ6JyArIHRoaXMuYnJhbmRDb2RlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucXVlcnkgJiYgcXVlcnlQYXJhbXMucXVlcnkpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeVBhcmFtcy5xdWVyeTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbnNCeVVybFBhcmFtcygpOiBTZWFyY2hDb25maWcge1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMgfSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG4gICAgY29uc3QgbmV3Q29uZmlnID0ge1xuICAgICAgLi4ucXVlcnlQYXJhbXMsXG4gICAgfTtcbiAgICBkZWxldGUgbmV3Q29uZmlnLnF1ZXJ5O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLnNlYXJjaENvbmZpZyxcbiAgICAgIC4uLm5ld0NvbmZpZyxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLml0ZW1QZXJQYWdlIHx8IDEwLFxuICAgIH07XG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlDb2RlKSB7XG4gICAgICBvcHRpb25zLmNhdGVnb3J5Q29kZSA9IHRoaXMuY2F0ZWdvcnlDb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5icmFuZENvZGUpIHtcbiAgICAgIG9wdGlvbnMuYnJhbmRDb2RlID0gdGhpcy5icmFuZENvZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVBhcmFtcyQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5waXBlKFxuICAgICAgdGFwKHBhcmFtcyA9PiB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlDb2RlID0gcGFyYW1zLmNhdGVnb3J5Q29kZTtcbiAgICAgICAgdGhpcy5icmFuZENvZGUgPSBwYXJhbXMuYnJhbmRDb2RlO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcGFyYW1zLnF1ZXJ5O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHtcbiAgICAgIHRoaXMuZ3JpZE1vZGUkLm5leHQoXG4gICAgICAgIHRlbXBsYXRlID09PSAnUHJvZHVjdEdyaWRQYWdlVGVtcGxhdGUnID8gVmlld01vZGVzLkdyaWQgOiBWaWV3TW9kZXMuTGlzdFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIGNsZWFuIHByZXZpb3VzIHNlYXJjaCByZXN1bHRcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmNsZWFyU2VhcmNoUmVzdWx0cygpO1xuXG4gICAgdGhpcy5tb2RlbCQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFNlYXJjaFJlc3VsdHMoKS5waXBlKFxuICAgICAgdGFwKHNlYXJjaFJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeVRpdGxlKHNlYXJjaFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKHNlYXJjaFJlc3VsdCA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDYXRlZ29yeVRpdGxlKGRhdGE6IFVJUHJvZHVjdFNlYXJjaFBhZ2UpOiBzdHJpbmcge1xuICAgIGlmIChkYXRhLmJyZWFkY3J1bWJzICYmIGRhdGEuYnJlYWRjcnVtYnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYXRlZ29yeVRpdGxlID0gZGF0YS5icmVhZGNydW1ic1swXS5mYWNldFZhbHVlTmFtZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnF1ZXJ5LmluY2x1ZGVzKCc6cmVsZXZhbmNlOicpKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5VGl0bGUgPSB0aGlzLnF1ZXJ5O1xuICAgIH1cbiAgICBpZiAodGhpcy5jYXRlZ29yeVRpdGxlKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5VGl0bGUgPVxuICAgICAgICBkYXRhLnBhZ2luYXRpb24udG90YWxSZXN1bHRzICsgJyByZXN1bHRzIGZvciAnICsgdGhpcy5jYXRlZ29yeVRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5VGl0bGU7XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5LCB7IGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyIH0pO1xuICB9XG5cbiAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnksIHsgc29ydENvZGU6IHNvcnRDb2RlIH0pO1xuICB9XG5cbiAgc2V0R3JpZE1vZGUobW9kZTogVmlld01vZGVzKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkTW9kZSQubmV4dChtb2RlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0aW9ucz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAvLyBPdmVyaWRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLnNlYXJjaENvbmZpZyxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwgdGhpcy5zZWFyY2hDb25maWcpO1xuICAgIH1cbiAgfVxufVxuIl19
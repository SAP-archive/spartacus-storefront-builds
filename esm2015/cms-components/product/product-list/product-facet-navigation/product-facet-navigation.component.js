/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductSearchService, } from '@spartacus/core';
import { filter, tap } from 'rxjs/operators';
export class ProductFacetNavigationComponent {
    /**
     * @param {?} modalService
     * @param {?} activatedRoute
     * @param {?} productSearchService
     */
    constructor(modalService, activatedRoute, productSearchService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productSearchService = productSearchService;
        this.minPerFacet = 6;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    /**
     * @return {?}
     */
    get visibleFacets() {
        if (!this.searchResult.facets) {
            return [];
        }
        return this.searchResult.facets.filter(facet => facet.visible);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateParams$ = this.activatedRoute.params.pipe(tap(params => {
            this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productSearchService.getSearchResults().pipe(tap(searchResult => {
            this.searchResult = searchResult;
            if (this.searchResult.facets) {
                this.searchResult.facets.forEach(el => {
                    this.showAllPerFacetMap.set(el.name, false);
                });
            }
        }), filter(searchResult => Object.keys(searchResult).length > 0));
    }
    /**
     * @param {?} content
     * @return {?}
     */
    openFilterModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    /**
     * @param {?} query
     * @return {?}
     */
    toggleValue(query) {
        this.productSearchService.search(this.queryCodec.decodeValue(query));
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    showLess(facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    showMore(facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    }
    /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    updateShowAllPerFacetMap(facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    isFacetCollapsed(facetName) {
        return this.collapsedFacets.has(facetName);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    toggleFacet(facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    getVisibleFacetValues(facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : this.minPerFacet);
    }
}
ProductFacetNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-facet-navigation',
                template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-template [ngIf]=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span>{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngFor let-facet [ngForOf]=\"visibleFacets\" let-facetId=\"index\">\n    <div class=\"cx-facet-group\">\n      <span class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n        </a>\n      </span>\n      <div [ngbCollapse]=\"isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <button\n    class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n    (click)=\"openFilterModal(content)\"\n  >\n    {{ 'productList.filterBy.action' | cxTranslate }}\n  </button>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<div *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n    <div class=\"cx-facet-filter-container\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.appliedFilter' | cxTranslate }}\n      </h4>\n      <div\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n      >\n        {{ breadcrumb.facetValueName }}\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: NgbModal },
    { type: ActivatedRoute },
    { type: ProductSearchService }
];
if (false) {
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.activeFacetValueCode;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.searchResult;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.minPerFacet;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.showAllPerFacetMap;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.queryCodec;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.collapsedFacets;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.searchResult$;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.updateParams$;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.productSearchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUVMLG9CQUFvQixHQUVyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsTUFBTSxPQUFPLCtCQUErQjs7Ozs7O0lBaUIxQyxZQUNVLFlBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQWpCcEQsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFHUixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFnQjFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBZEQsSUFBSSxhQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxZ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LENBQUMsTUFBTSxDQUFDLE1BQU07WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQ3JCLENBQUM7SUFDSixDQUFDOzs7WUExRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDArS0FBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBYlEsUUFBUTtZQURSLGNBQWM7WUFJckIsb0JBQW9COzs7O0lBWXBCLCtEQUE2Qjs7SUFDN0IsdURBQWtDOztJQUNsQyxzREFBZ0I7O0lBQ2hCLDZEQUF5Qzs7SUFDekMscURBQWlDOzs7OztJQUNqQywwREFBNEM7O0lBQzVDLHdEQUErQzs7SUFDL0Msd0RBQWtDOzs7OztJQVVoQyx1REFBOEI7Ozs7O0lBQzlCLHlEQUFzQzs7Ozs7SUFDdEMsK0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1xuICBGYWNldCxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFVJUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWN0aXZlRmFjZXRWYWx1ZUNvZGU6IHN0cmluZztcbiAgc2VhcmNoUmVzdWx0OiBVSVByb2R1Y3RTZWFyY2hQYWdlO1xuICBtaW5QZXJGYWNldCA9IDY7XG4gIHNob3dBbGxQZXJGYWNldE1hcDogTWFwPFN0cmluZywgYm9vbGVhbj47XG4gIHF1ZXJ5Q29kZWM6IEh0dHBVcmxFbmNvZGluZ0NvZGVjO1xuICBwcml2YXRlIGNvbGxhcHNlZEZhY2V0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFVJUHJvZHVjdFNlYXJjaFBhZ2U+O1xuICB1cGRhdGVQYXJhbXMkOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cbiAgZ2V0IHZpc2libGVGYWNldHMoKTogRmFjZXRbXSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoUmVzdWx0LmZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQudmlzaWJsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAgPSBuZXcgTWFwPFN0cmluZywgYm9vbGVhbj4oKTtcbiAgICB0aGlzLnF1ZXJ5Q29kZWMgPSBuZXcgSHR0cFVybEVuY29kaW5nQ29kZWMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGFyYW1zJCA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnBpcGUoXG4gICAgICB0YXAocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVGYWNldFZhbHVlQ29kZSA9IHBhcmFtcy5jYXRlZ29yeUNvZGUgfHwgcGFyYW1zLmJyYW5kQ29kZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICB0YXAoc2VhcmNoUmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBzZWFyY2hSZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMpIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dBbGxQZXJGYWNldE1hcC5zZXQoZWwubmFtZSwgZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihzZWFyY2hSZXN1bHQgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKVxuICAgICk7XG4gIH1cblxuICBvcGVuRmlsdGVyTW9kYWwoY29udGVudCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCwgeyBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyB9KTtcbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaCh0aGlzLnF1ZXJ5Q29kZWMuZGVjb2RlVmFsdWUocXVlcnkpKTtcbiAgfVxuXG4gIHNob3dMZXNzKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lLCBmYWxzZSk7XG4gIH1cblxuICBzaG93TW9yZShmYWNldE5hbWU6IFN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZSwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWU6IFN0cmluZywgc2hvd0FsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChmYWNldE5hbWUsIHNob3dBbGwpO1xuICB9XG5cbiAgaXNGYWNldENvbGxhcHNlZChmYWNldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZEZhY2V0cy5oYXMoZmFjZXROYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUZhY2V0KGZhY2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkRmFjZXRzLmhhcyhmYWNldE5hbWUpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5kZWxldGUoZmFjZXROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMuYWRkKGZhY2V0TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmlzaWJsZUZhY2V0VmFsdWVzKGZhY2V0KTogYW55IHtcbiAgICByZXR1cm4gZmFjZXQudmFsdWVzLnNsaWNlKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLmdldChmYWNldC5uYW1lKVxuICAgICAgICA/IGZhY2V0LnZhbHVlcy5sZW5ndGhcbiAgICAgICAgOiB0aGlzLm1pblBlckZhY2V0XG4gICAgKTtcbiAgfVxufVxuIl19
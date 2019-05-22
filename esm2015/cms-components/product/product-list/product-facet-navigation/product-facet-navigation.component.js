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
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
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
        this.iconTypes = ICON_TYPE;
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
                template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span>{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n    <div class=\"cx-facet-group\">\n      <div class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n          <cx-icon\n            [type]=\"\n              isFacetCollapsed(facet.name) ? iconTypes.PLUS : iconTypes.MINUS\n            \"\n          ></cx-icon>\n        </a>\n      </div>\n      <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <button\n    class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n    (click)=\"openFilterModal(content)\"\n  >\n    {{ 'productList.filterBy.action' | cxTranslate }}\n  </button>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<ng-container *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n    <div class=\"cx-facet-filter-container\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.appliedFilter' | cxTranslate }}\n      </h4>\n      <div\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n      >\n        {{ breadcrumb.facetValueName }}\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
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
    ProductFacetNavigationComponent.prototype.iconTypes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUdMLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBT3ZFLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQW1CMUMsWUFDVSxZQUFzQixFQUN0QixjQUE4QixFQUM5QixvQkFBMEM7UUFGMUMsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFyQnBELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFJdEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFHUixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFnQjFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JB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SSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQ3JCLENBQUM7SUFDSixDQUFDOzs7WUE1RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDYxTEFBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZFEsUUFBUTtZQURSLGNBQWM7WUFLckIsb0JBQW9COzs7O0lBWXBCLG9EQUFzQjs7SUFFdEIsK0RBQTZCOztJQUM3Qix1REFBZ0M7O0lBQ2hDLHNEQUFnQjs7SUFDaEIsNkRBQXlDOztJQUN6QyxxREFBaUM7Ozs7O0lBQ2pDLDBEQUE0Qzs7SUFDNUMsd0RBQTZDOztJQUM3Qyx3REFBa0M7Ozs7O0lBVWhDLHVEQUE4Qjs7Ozs7SUFDOUIseURBQXNDOzs7OztJQUN0QywrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7XG4gIEZhY2V0LFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBhY3RpdmVGYWNldFZhbHVlQ29kZTogc3RyaW5nO1xuICBzZWFyY2hSZXN1bHQ6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICBtaW5QZXJGYWNldCA9IDY7XG4gIHNob3dBbGxQZXJGYWNldE1hcDogTWFwPFN0cmluZywgYm9vbGVhbj47XG4gIHF1ZXJ5Q29kZWM6IEh0dHBVcmxFbmNvZGluZ0NvZGVjO1xuICBwcml2YXRlIGNvbGxhcHNlZEZhY2V0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgdXBkYXRlUGFyYW1zJDogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXG4gIGdldCB2aXNpYmxlRmFjZXRzKCk6IEZhY2V0W10ge1xuICAgIGlmICghdGhpcy5zZWFyY2hSZXN1bHQuZmFjZXRzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LnZpc2libGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwID0gbmV3IE1hcDxTdHJpbmcsIGJvb2xlYW4+KCk7XG4gICAgdGhpcy5xdWVyeUNvZGVjID0gbmV3IEh0dHBVcmxFbmNvZGluZ0NvZGVjKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVBhcmFtcyQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5waXBlKFxuICAgICAgdGFwKHBhcmFtcyA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlRmFjZXRWYWx1ZUNvZGUgPSBwYXJhbXMuY2F0ZWdvcnlDb2RlIHx8IHBhcmFtcy5icmFuZENvZGU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFNlYXJjaFJlc3VsdHMoKS5waXBlKFxuICAgICAgdGFwKHNlYXJjaFJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gc2VhcmNoUmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHQuZmFjZXRzKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQuZmFjZXRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAuc2V0KGVsLm5hbWUsIGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoc2VhcmNoUmVzdWx0ID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMClcbiAgICApO1xuICB9XG5cbiAgb3BlbkZpbHRlck1vZGFsKGNvbnRlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIHsgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScgfSk7XG4gIH1cblxuICB0b2dnbGVWYWx1ZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5zZWFyY2godGhpcy5xdWVyeUNvZGVjLmRlY29kZVZhbHVlKHF1ZXJ5KSk7XG4gIH1cblxuICBzaG93TGVzcyhmYWNldE5hbWU6IFN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZSwgZmFsc2UpO1xuICB9XG5cbiAgc2hvd01vcmUoZmFjZXROYW1lOiBTdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lOiBTdHJpbmcsIHNob3dBbGw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBbGxQZXJGYWNldE1hcC5zZXQoZmFjZXROYW1lLCBzaG93QWxsKTtcbiAgfVxuXG4gIGlzRmFjZXRDb2xsYXBzZWQoZmFjZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRGYWNldHMuaGFzKGZhY2V0TmFtZSk7XG4gIH1cblxuICB0b2dnbGVGYWNldChmYWNldE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZEZhY2V0cy5oYXMoZmFjZXROYW1lKSkge1xuICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMuZGVsZXRlKGZhY2V0TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLmFkZChmYWNldE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZpc2libGVGYWNldFZhbHVlcyhmYWNldCk6IGFueSB7XG4gICAgcmV0dXJuIGZhY2V0LnZhbHVlcy5zbGljZShcbiAgICAgIDAsXG4gICAgICB0aGlzLnNob3dBbGxQZXJGYWNldE1hcC5nZXQoZmFjZXQubmFtZSlcbiAgICAgICAgPyBmYWNldC52YWx1ZXMubGVuZ3RoXG4gICAgICAgIDogdGhpcy5taW5QZXJGYWNldFxuICAgICk7XG4gIH1cbn1cbiJdfQ==
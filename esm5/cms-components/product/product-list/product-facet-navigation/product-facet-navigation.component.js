/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService, } from '@spartacus/core';
import { filter, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
var ProductFacetNavigationComponent = /** @class */ (function () {
    function ProductFacetNavigationComponent(modalService, activatedRoute, productSearchService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productSearchService = productSearchService;
        this.iconTypes = ICON_TYPE;
        this.minPerFacet = 6;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    Object.defineProperty(ProductFacetNavigationComponent.prototype, "visibleFacets", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.searchResult.facets) {
                return [];
            }
            return this.searchResult.facets.filter(function (facet) { return facet.visible; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateParams$ = this.activatedRoute.params.pipe(tap(function (params) {
            _this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productSearchService.getResults().pipe(tap(function (searchResult) {
            _this.searchResult = searchResult;
            if (_this.searchResult.facets) {
                _this.searchResult.facets.forEach(function (el) {
                    _this.showAllPerFacetMap.set(el.name, false);
                });
            }
        }), filter(function (searchResult) { return Object.keys(searchResult).length > 0; }));
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.openFilterModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.toggleValue = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.productSearchService.search(this.queryCodec.decodeValue(query));
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.showLess = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.showMore = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    };
    /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.updateShowAllPerFacetMap = /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    function (facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.isFacetCollapsed = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        return this.collapsedFacets.has(facetName);
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.toggleFacet = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.getVisibleFacetValues = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : this.minPerFacet);
    };
    ProductFacetNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-facet-navigation',
                    template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span class=\"cx-facet-pill-value\">{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n    <div class=\"cx-facet-group\">\n      <div class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n          <cx-icon\n            [type]=\"\n              isFacetCollapsed(facet.name) ? iconTypes.PLUS : iconTypes.MINUS\n            \"\n          ></cx-icon>\n        </a>\n      </div>\n      <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <div class=\"container\">\n    <button\n      class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n      (click)=\"openFilterModal(content)\"\n    >\n      {{ 'productList.filterBy.action' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<ng-container *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          {{ breadcrumb.facetValueName }}\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductFacetNavigationComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ActivatedRoute },
        { type: ProductSearchService }
    ]; };
    return ProductFacetNavigationComponent;
}());
export { ProductFacetNavigationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBR0wsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXpFO0lBd0JFLHlDQUNVLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXJCcEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUl0QixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUdSLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQWdCMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQy9DLENB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LENBQUM7Ozs7O0lBRUQsK0RBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQUs7UUFDekIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDdkIsQ0FBQyxFQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNyQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNyQixDQUFDO0lBQ0osQ0FBQzs7Z0JBNUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxxZ01BQXdEO29CQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsWUFBWTtnQkFWWixjQUFjO2dCQUlyQixvQkFBb0I7O0lBcUd0QixzQ0FBQztDQUFBLEFBN0ZELElBNkZDO1NBeEZZLCtCQUErQjs7O0lBQzFDLG9EQUFzQjs7SUFFdEIsK0RBQTZCOztJQUM3Qix1REFBZ0M7O0lBQ2hDLHNEQUFnQjs7SUFDaEIsNkRBQXlDOztJQUN6QyxxREFBaUM7Ozs7O0lBQ2pDLDBEQUE0Qzs7SUFDNUMsd0RBQTZDOztJQUM3Qyx3REFBa0M7Ozs7O0lBVWhDLHVEQUFrQzs7Ozs7SUFDbEMseURBQXNDOzs7OztJQUN0QywrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBGYWNldCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBhY3RpdmVGYWNldFZhbHVlQ29kZTogc3RyaW5nO1xuICBzZWFyY2hSZXN1bHQ6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICBtaW5QZXJGYWNldCA9IDY7XG4gIHNob3dBbGxQZXJGYWNldE1hcDogTWFwPFN0cmluZywgYm9vbGVhbj47XG4gIHF1ZXJ5Q29kZWM6IEh0dHBVcmxFbmNvZGluZ0NvZGVjO1xuICBwcml2YXRlIGNvbGxhcHNlZEZhY2V0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgdXBkYXRlUGFyYW1zJDogT2JzZXJ2YWJsZTxQYXJhbXM+O1xuXG4gIGdldCB2aXNpYmxlRmFjZXRzKCk6IEZhY2V0W10ge1xuICAgIGlmICghdGhpcy5zZWFyY2hSZXN1bHQuZmFjZXRzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LnZpc2libGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZVxuICApIHtcbiAgICB0aGlzLnNob3dBbGxQZXJGYWNldE1hcCA9IG5ldyBNYXA8U3RyaW5nLCBib29sZWFuPigpO1xuICAgIHRoaXMucXVlcnlDb2RlYyA9IG5ldyBIdHRwVXJsRW5jb2RpbmdDb2RlYygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQYXJhbXMkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMucGlwZShcbiAgICAgIHRhcChwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUZhY2V0VmFsdWVDb2RlID0gcGFyYW1zLmNhdGVnb3J5Q29kZSB8fCBwYXJhbXMuYnJhbmRDb2RlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKCkucGlwZShcbiAgICAgIHRhcChzZWFyY2hSZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IHNlYXJjaFJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0LmZhY2V0cykge1xuICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0LmZhY2V0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChlbC5uYW1lLCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKHNlYXJjaFJlc3VsdCA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApXG4gICAgKTtcbiAgfVxuXG4gIG9wZW5GaWx0ZXJNb2RhbChjb250ZW50KTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb250ZW50LCB7IGFyaWFMYWJlbGxlZEJ5OiAnbW9kYWwtYmFzaWMtdGl0bGUnIH0pO1xuICB9XG5cbiAgdG9nZ2xlVmFsdWUocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHRoaXMucXVlcnlDb2RlYy5kZWNvZGVWYWx1ZShxdWVyeSkpO1xuICB9XG5cbiAgc2hvd0xlc3MoZmFjZXROYW1lOiBTdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWUsIGZhbHNlKTtcbiAgfVxuXG4gIHNob3dNb3JlKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZTogU3RyaW5nLCBzaG93QWxsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAuc2V0KGZhY2V0TmFtZSwgc2hvd0FsbCk7XG4gIH1cblxuICBpc0ZhY2V0Q29sbGFwc2VkKGZhY2V0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkRmFjZXRzLmhhcyhmYWNldE5hbWUpO1xuICB9XG5cbiAgdG9nZ2xlRmFjZXQoZmFjZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWRGYWNldHMuaGFzKGZhY2V0TmFtZSkpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLmRlbGV0ZShmYWNldE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5hZGQoZmFjZXROYW1lKTtcbiAgICB9XG4gIH1cblxuICBnZXRWaXNpYmxlRmFjZXRWYWx1ZXMoZmFjZXQpOiBhbnkge1xuICAgIHJldHVybiBmYWNldC52YWx1ZXMuc2xpY2UoXG4gICAgICAwLFxuICAgICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAuZ2V0KGZhY2V0Lm5hbWUpXG4gICAgICAgID8gZmFjZXQudmFsdWVzLmxlbmd0aFxuICAgICAgICA6IHRoaXMubWluUGVyRmFjZXRcbiAgICApO1xuICB9XG59XG4iXX0=
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
        this.searchResult$ = this.productSearchService.getSearchResults().pipe(tap(function (searchResult) {
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
                    template: "<div class=\"cx-search-facet\" *ngIf=\"(searchResult$ | async) as searchResult\">\n  <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n    <h4 class=\"cx-facet-filter-header\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <div class=\"cx-facet-filter-container\">\n      <div\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n      >\n        <span>{{ breadcrumb.facetValueName }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n    <div class=\"cx-facet-group\">\n      <div class=\"cx-facet-header\">\n        <a\n          class=\"cx-facet-header-link\"\n          (click)=\"toggleFacet(facet.name)\"\n          [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n          aria-controls=\"\"\n        >\n          {{ facet.name }}\n          <cx-icon\n            [type]=\"\n              isFacetCollapsed(facet.name) ? iconTypes.PLUS : iconTypes.MINUS\n            \"\n          ></cx-icon>\n        </a>\n      </div>\n      <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n        <ul class=\"cx-facet-list\">\n          <li\n            *ngFor=\"\n              let value of getVisibleFacetValues(facet);\n              index as facetValueId\n            \"\n          >\n            <div class=\"form-check\">\n              <label class=\"form-checkbox cx-facet-label\">\n                <input\n                  class=\"form-check-input cx-facet-checkbox\"\n                  role=\"checkbox\"\n                  type=\"checkbox\"\n                  aria-checked=\"true\"\n                  [checked]=\"value.selected\"\n                  (change)=\"toggleValue(value.query.query.value)\"\n                />\n                <span class=\"cx-facet-text\"\n                  >{{ value.name }} ({{ value.count }})</span\n                >\n              </label>\n            </div>\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showLess(facet.name)\"\n            *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n          >\n            {{ 'productList.showLess' | cxTranslate }}\n          </li>\n          <li\n            class=\"cx-facet-toggle-btn\"\n            (click)=\"showMore(facet.name)\"\n            *ngIf=\"\n              !showAllPerFacetMap.get(facet.name) &&\n              facet.values.length > minPerFacet\n            \"\n          >\n            {{ 'productList.showMore' | cxTranslate }}\n          </li>\n        </ul>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"cx-facet-mobile\">\n  <button\n    class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n    (click)=\"openFilterModal(content)\"\n  >\n    {{ 'productList.filterBy.action' | cxTranslate }}\n  </button>\n</div>\n\n<!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n<ng-container *ngIf=\"(updateParams$ | async) as params\">\n  <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n    <div class=\"cx-facet-filter-container\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.appliedFilter' | cxTranslate }}\n      </h4>\n      <div\n        class=\"cx-facet-filter-pill\"\n        role=\"filter\"\n        *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n      >\n        {{ breadcrumb.facetValueName }}\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n      {{ 'productList.filterBy.label' | cxTranslate }}\n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"d('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <div class=\"modal-body cx-facet-modal-body\">\n    <form>\n      <div\n        class=\"form-group\"\n        *ngFor=\"let facet of searchResult.facets; index as facetId\"\n      >\n        <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">{{ facet.name }}</h4>\n        <div class=\"input-group\">\n          <ul class=\"cx-facet-list\">\n            <li *ngFor=\"let value of facet.values; index as facetValueId\">\n              <div class=\"form-check\">\n                <label class=\"form-checkbox cx-facet-label\">\n                  <input\n                    class=\"form-check-input cx-facet-checkbox\"\n                    role=\"checkbox\"\n                    type=\"checkbox\"\n                    aria-checked=\"true\"\n                    [checked]=\"value.selected\"\n                    (change)=\"toggleValue(value.query.query.value)\"\n                  />\n                  <span class=\"cx-facet-text\"\n                    >{{ value.name }} ({{ value.count }})</span\n                  >\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductFacetNavigationComponent.ctorParameters = function () { return [
        { type: NgbModal },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUdMLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXZFO0lBd0JFLHlDQUNVLFlBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXJCcEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUl0QixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUdSLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQWdCMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQy9DLENB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Q0gsQ0FBQzs7Ozs7SUFFRCwrREFBcUI7Ozs7SUFBckIsVUFBc0IsS0FBSztRQUN6QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUN2QixDQUFDLEVBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQ3JCLENBQUM7SUFDSixDQUFDOztnQkE1RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDYxTEFBd0Q7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFkUSxRQUFRO2dCQURSLGNBQWM7Z0JBS3JCLG9CQUFvQjs7SUFtR3RCLHNDQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0F4RlksK0JBQStCOzs7SUFDMUMsb0RBQXNCOztJQUV0QiwrREFBNkI7O0lBQzdCLHVEQUFnQzs7SUFDaEMsc0RBQWdCOztJQUNoQiw2REFBeUM7O0lBQ3pDLHFEQUFpQzs7Ozs7SUFDakMsMERBQTRDOztJQUM1Qyx3REFBNkM7O0lBQzdDLHdEQUFrQzs7Ozs7SUFVaEMsdURBQThCOzs7OztJQUM5Qix5REFBc0M7Ozs7O0lBQ3RDLCtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtcbiAgRmFjZXQsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGFjdGl2ZUZhY2V0VmFsdWVDb2RlOiBzdHJpbmc7XG4gIHNlYXJjaFJlc3VsdDogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gIG1pblBlckZhY2V0ID0gNjtcbiAgc2hvd0FsbFBlckZhY2V0TWFwOiBNYXA8U3RyaW5nLCBib29sZWFuPjtcbiAgcXVlcnlDb2RlYzogSHR0cFVybEVuY29kaW5nQ29kZWM7XG4gIHByaXZhdGUgY29sbGFwc2VkRmFjZXRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHNlYXJjaFJlc3VsdCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICB1cGRhdGVQYXJhbXMkOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cbiAgZ2V0IHZpc2libGVGYWNldHMoKTogRmFjZXRbXSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoUmVzdWx0LmZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQudmlzaWJsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAgPSBuZXcgTWFwPFN0cmluZywgYm9vbGVhbj4oKTtcbiAgICB0aGlzLnF1ZXJ5Q29kZWMgPSBuZXcgSHR0cFVybEVuY29kaW5nQ29kZWMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGFyYW1zJCA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnBpcGUoXG4gICAgICB0YXAocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVGYWNldFZhbHVlQ29kZSA9IHBhcmFtcy5jYXRlZ29yeUNvZGUgfHwgcGFyYW1zLmJyYW5kQ29kZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICB0YXAoc2VhcmNoUmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBzZWFyY2hSZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMpIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5mYWNldHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dBbGxQZXJGYWNldE1hcC5zZXQoZWwubmFtZSwgZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihzZWFyY2hSZXN1bHQgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKVxuICAgICk7XG4gIH1cblxuICBvcGVuRmlsdGVyTW9kYWwoY29udGVudCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCwgeyBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyB9KTtcbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaCh0aGlzLnF1ZXJ5Q29kZWMuZGVjb2RlVmFsdWUocXVlcnkpKTtcbiAgfVxuXG4gIHNob3dMZXNzKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lLCBmYWxzZSk7XG4gIH1cblxuICBzaG93TW9yZShmYWNldE5hbWU6IFN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZSwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWU6IFN0cmluZywgc2hvd0FsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChmYWNldE5hbWUsIHNob3dBbGwpO1xuICB9XG5cbiAgaXNGYWNldENvbGxhcHNlZChmYWNldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZEZhY2V0cy5oYXMoZmFjZXROYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUZhY2V0KGZhY2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkRmFjZXRzLmhhcyhmYWNldE5hbWUpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5kZWxldGUoZmFjZXROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMuYWRkKGZhY2V0TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmlzaWJsZUZhY2V0VmFsdWVzKGZhY2V0KTogYW55IHtcbiAgICByZXR1cm4gZmFjZXQudmFsdWVzLnNsaWNlKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLmdldChmYWNldC5uYW1lKVxuICAgICAgICA/IGZhY2V0LnZhbHVlcy5sZW5ndGhcbiAgICAgICAgOiB0aGlzLm1pblBlckZhY2V0XG4gICAgKTtcbiAgfVxufVxuIl19
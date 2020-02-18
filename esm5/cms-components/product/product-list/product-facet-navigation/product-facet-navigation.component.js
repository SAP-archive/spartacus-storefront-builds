/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
import { ProductListComponentService } from '../container/product-list-component.service';
var ProductFacetNavigationComponent = /** @class */ (function () {
    function ProductFacetNavigationComponent(modalService, activatedRoute, productListComponentService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productListComponentService = productListComponentService;
        this.iconTypes = ICON_TYPE;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    /**
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productListComponentService.model$.pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) {
            if (searchResult.facets) {
                searchResult.facets.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    _this.showAllPerFacetMap.set(el.name, false);
                }));
            }
        })));
        this.visibleFacets$ = this.searchResult$.pipe(map((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) {
            return searchResult.facets
                ? searchResult.facets.filter((/**
                 * @param {?} facet
                 * @return {?}
                 */
                function (facet) { return facet.visible; }))
                : [];
        })));
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
        this.productListComponentService.setQuery(this.queryCodec.decodeValue(query));
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
            : facet.topValueCount);
    };
    /**
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    ProductFacetNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-facet-navigation',
                    template: "<ng-container *ngIf=\"searchResult$ | async as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"visibleFacets$ | async as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > facet.topValueCount\n                \"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductFacetNavigationComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ActivatedRoute },
        { type: ProductListComponentService }
    ]; };
    return ProductFacetNavigationComponent;
}());
export { ProductFacetNavigationComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.sub;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.iconTypes;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.activeFacetValueCode;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.searchResult;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.showAllPerFacetMap;
    /**
     * @type {?}
     * @protected
     */
    ProductFacetNavigationComponent.prototype.queryCodec;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.collapsedFacets;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.searchResult$;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.visibleFacets$;
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
    ProductFacetNavigationComponent.prototype.productListComponentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTFGO0lBa0JFLHlDQUNVLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLDJCQUF3RDtRQUZ4RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQWJsRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBTWQsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBUzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsa0RBQVE7OztJQUFSO1FBQUEs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LEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNyQixDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDeEIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyxzb05BQXdEO29CQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUFEsWUFBWTtnQkFMWixjQUFjO2dCQU1kLDJCQUEyQjs7SUFxR3BDLHNDQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0E5RlksK0JBQStCOzs7Ozs7SUFDMUMsOENBQTBCOztJQUUxQixvREFBc0I7O0lBRXRCLCtEQUE2Qjs7SUFDN0IsdURBQWdDOztJQUNoQyw2REFBeUM7Ozs7O0lBQ3pDLHFEQUEyQzs7Ozs7SUFDM0MsMERBQTRDOztJQUM1Qyx3REFBNkM7O0lBQzdDLHlEQUFvQzs7Ozs7SUFHbEMsdURBQWtDOzs7OztJQUNsQyx5REFBc0M7Ozs7O0lBQ3RDLHNFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRmFjZXQsIFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgYWN0aXZlRmFjZXRWYWx1ZUNvZGU6IHN0cmluZztcbiAgc2VhcmNoUmVzdWx0OiBQcm9kdWN0U2VhcmNoUGFnZTtcbiAgc2hvd0FsbFBlckZhY2V0TWFwOiBNYXA8U3RyaW5nLCBib29sZWFuPjtcbiAgcHJvdGVjdGVkIHF1ZXJ5Q29kZWM6IEh0dHBVcmxFbmNvZGluZ0NvZGVjO1xuICBwcml2YXRlIGNvbGxhcHNlZEZhY2V0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgdmlzaWJsZUZhY2V0cyQ6IE9ic2VydmFibGU8RmFjZXRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwID0gbmV3IE1hcDxTdHJpbmcsIGJvb2xlYW4+KCk7XG4gICAgdGhpcy5xdWVyeUNvZGVjID0gbmV3IEh0dHBVcmxFbmNvZGluZ0NvZGVjKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVGYWNldFZhbHVlQ29kZSA9IHBhcmFtcy5jYXRlZ29yeUNvZGUgfHwgcGFyYW1zLmJyYW5kQ29kZTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLm1vZGVsJC5waXBlKFxuICAgICAgdGFwKHNlYXJjaFJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHQuZmFjZXRzKSB7XG4gICAgICAgICAgc2VhcmNoUmVzdWx0LmZhY2V0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChlbC5uYW1lLCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMudmlzaWJsZUZhY2V0cyQgPSB0aGlzLnNlYXJjaFJlc3VsdCQucGlwZShcbiAgICAgIG1hcChzZWFyY2hSZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0LmZhY2V0c1xuICAgICAgICAgID8gc2VhcmNoUmVzdWx0LmZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQudmlzaWJsZSlcbiAgICAgICAgICA6IFtdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb3BlbkZpbHRlck1vZGFsKGNvbnRlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIHsgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScgfSk7XG4gIH1cblxuICB0b2dnbGVWYWx1ZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uuc2V0UXVlcnkoXG4gICAgICB0aGlzLnF1ZXJ5Q29kZWMuZGVjb2RlVmFsdWUocXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHNob3dMZXNzKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lLCBmYWxzZSk7XG4gIH1cblxuICBzaG93TW9yZShmYWNldE5hbWU6IFN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZSwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWU6IFN0cmluZywgc2hvd0FsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChmYWNldE5hbWUsIHNob3dBbGwpO1xuICB9XG5cbiAgaXNGYWNldENvbGxhcHNlZChmYWNldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZEZhY2V0cy5oYXMoZmFjZXROYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUZhY2V0KGZhY2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkRmFjZXRzLmhhcyhmYWNldE5hbWUpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5kZWxldGUoZmFjZXROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMuYWRkKGZhY2V0TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmlzaWJsZUZhY2V0VmFsdWVzKGZhY2V0OiBGYWNldCk6IEZhY2V0W10ge1xuICAgIHJldHVybiBmYWNldC52YWx1ZXMuc2xpY2UoXG4gICAgICAwLFxuICAgICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAuZ2V0KGZhY2V0Lm5hbWUpXG4gICAgICAgID8gZmFjZXQudmFsdWVzLmxlbmd0aFxuICAgICAgICA6IGZhY2V0LnRvcFZhbHVlQ291bnRcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
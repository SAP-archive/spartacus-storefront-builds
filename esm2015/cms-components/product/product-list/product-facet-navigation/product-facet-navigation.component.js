/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
import { ProductListComponentService } from '../container/product-list-component.service';
export class ProductFacetNavigationComponent {
    /**
     * @param {?} modalService
     * @param {?} activatedRoute
     * @param {?} productListComponentService
     */
    constructor(modalService, activatedRoute, productListComponentService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productListComponentService = productListComponentService;
        this.iconTypes = ICON_TYPE;
        this.minPerFacet = 6;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productListComponentService.model$.pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => {
            if (searchResult.facets) {
                searchResult.facets.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => {
                    this.showAllPerFacetMap.set(el.name, false);
                }));
            }
        })));
        this.visibleFacets$ = this.searchResult$.pipe(map((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => {
            return searchResult.facets
                ? searchResult.facets.filter((/**
                 * @param {?} facet
                 * @return {?}
                 */
                facet => facet.visible))
                : [];
        })));
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
        this.productListComponentService.setQuery(this.queryCodec.decodeValue(query));
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
ProductFacetNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-facet-navigation',
                template: "<ng-container *ngIf=\"(searchResult$ | async) as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"(visibleFacets$ | async) as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > minPerFacet\n                \"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ActivatedRoute },
    { type: ProductListComponentService }
];
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
    ProductFacetNavigationComponent.prototype.minPerFacet;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBTzFGLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQWMxQyxZQUNVLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLDJCQUF3RDtRQUZ4RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQWRsRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBSXRCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBR1Isb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBUzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMvRCxHQUFHOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUU7WUFDakIsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN2QixZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7Z0JBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUU7WUFDakIsT0FBTyxZQUFZLENBQUMsTUFBTTtnQkFDeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztnQkFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUM7Z0JBQ3BELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDVCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBTztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsQ0FDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQ25DLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxTQUFpQjtRQUN4QixJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQWlCO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7OztJQUVPLHdCQUF3QixDQUFDLFNBQWlCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQWlCO1FBQzNCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFLO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ3ZCLENBQUMsRUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsa29OQUF3RDtnQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxZQUFZO1lBTFosY0FBYztZQU1kLDJCQUEyQjs7Ozs7OztJQVFsQyw4Q0FBMEI7O0lBRTFCLG9EQUFzQjs7SUFFdEIsK0RBQTZCOztJQUM3Qix1REFBZ0M7O0lBQ2hDLHNEQUFnQjs7SUFDaEIsNkRBQXlDOzs7OztJQUN6QyxxREFBMkM7Ozs7O0lBQzNDLDBEQUE0Qzs7SUFDNUMsd0RBQTZDOztJQUM3Qyx5REFBb0M7Ozs7O0lBR2xDLHVEQUFrQzs7Ozs7SUFDbEMseURBQXNDOzs7OztJQUN0QyxzRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZhY2V0LCBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL2NvbnRhaW5lci9wcm9kdWN0LWxpc3QtY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGFjdGl2ZUZhY2V0VmFsdWVDb2RlOiBzdHJpbmc7XG4gIHNlYXJjaFJlc3VsdDogUHJvZHVjdFNlYXJjaFBhZ2U7XG4gIG1pblBlckZhY2V0ID0gNjtcbiAgc2hvd0FsbFBlckZhY2V0TWFwOiBNYXA8U3RyaW5nLCBib29sZWFuPjtcbiAgcHJvdGVjdGVkIHF1ZXJ5Q29kZWM6IEh0dHBVcmxFbmNvZGluZ0NvZGVjO1xuICBwcml2YXRlIGNvbGxhcHNlZEZhY2V0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgdmlzaWJsZUZhY2V0cyQ6IE9ic2VydmFibGU8RmFjZXRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZTogUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwID0gbmV3IE1hcDxTdHJpbmcsIGJvb2xlYW4+KCk7XG4gICAgdGhpcy5xdWVyeUNvZGVjID0gbmV3IEh0dHBVcmxFbmNvZGluZ0NvZGVjKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVGYWNldFZhbHVlQ29kZSA9IHBhcmFtcy5jYXRlZ29yeUNvZGUgfHwgcGFyYW1zLmJyYW5kQ29kZTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMucHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlLm1vZGVsJC5waXBlKFxuICAgICAgdGFwKHNlYXJjaFJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHQuZmFjZXRzKSB7XG4gICAgICAgICAgc2VhcmNoUmVzdWx0LmZhY2V0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChlbC5uYW1lLCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMudmlzaWJsZUZhY2V0cyQgPSB0aGlzLnNlYXJjaFJlc3VsdCQucGlwZShcbiAgICAgIG1hcChzZWFyY2hSZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0LmZhY2V0c1xuICAgICAgICAgID8gc2VhcmNoUmVzdWx0LmZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gZmFjZXQudmlzaWJsZSlcbiAgICAgICAgICA6IFtdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb3BlbkZpbHRlck1vZGFsKGNvbnRlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIHsgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScgfSk7XG4gIH1cblxuICB0b2dnbGVWYWx1ZShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uuc2V0UXVlcnkoXG4gICAgICB0aGlzLnF1ZXJ5Q29kZWMuZGVjb2RlVmFsdWUocXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHNob3dMZXNzKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lLCBmYWxzZSk7XG4gIH1cblxuICBzaG93TW9yZShmYWNldE5hbWU6IFN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZSwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWU6IFN0cmluZywgc2hvd0FsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLnNldChmYWNldE5hbWUsIHNob3dBbGwpO1xuICB9XG5cbiAgaXNGYWNldENvbGxhcHNlZChmYWNldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZEZhY2V0cy5oYXMoZmFjZXROYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUZhY2V0KGZhY2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkRmFjZXRzLmhhcyhmYWNldE5hbWUpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5kZWxldGUoZmFjZXROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMuYWRkKGZhY2V0TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmlzaWJsZUZhY2V0VmFsdWVzKGZhY2V0KTogYW55IHtcbiAgICByZXR1cm4gZmFjZXQudmFsdWVzLnNsaWNlKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2hvd0FsbFBlckZhY2V0TWFwLmdldChmYWNldC5uYW1lKVxuICAgICAgICA/IGZhY2V0LnZhbHVlcy5sZW5ndGhcbiAgICAgICAgOiB0aGlzLm1pblBlckZhY2V0XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
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
            : facet.topValueCount);
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
                template: "<ng-container *ngIf=\"searchResult$ | async as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"visibleFacets$ | async as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > facet.topValueCount\n                \"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBTzFGLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQWExQyxZQUNVLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLDJCQUF3RDtRQUZ4RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQWJsRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBTWQsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBUzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lB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QztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQWxHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsc29OQUF3RDtnQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxZQUFZO1lBTFosY0FBYztZQU1kLDJCQUEyQjs7Ozs7OztJQVFsQyw4Q0FBMEI7O0lBRTFCLG9EQUFzQjs7SUFFdEIsK0RBQTZCOztJQUM3Qix1REFBZ0M7O0lBQ2hDLDZEQUF5Qzs7Ozs7SUFDekMscURBQTJDOzs7OztJQUMzQywwREFBNEM7O0lBQzVDLHdEQUE2Qzs7SUFDN0MseURBQW9DOzs7OztJQUdsQyx1REFBa0M7Ozs7O0lBQ2xDLHlEQUFzQzs7Ozs7SUFDdEMsc0VBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGYWNldCwgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9jb250YWluZXIvcHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBhY3RpdmVGYWNldFZhbHVlQ29kZTogc3RyaW5nO1xuICBzZWFyY2hSZXN1bHQ6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICBzaG93QWxsUGVyRmFjZXRNYXA6IE1hcDxTdHJpbmcsIGJvb2xlYW4+O1xuICBwcm90ZWN0ZWQgcXVlcnlDb2RlYzogSHR0cFVybEVuY29kaW5nQ29kZWM7XG4gIHByaXZhdGUgY29sbGFwc2VkRmFjZXRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHNlYXJjaFJlc3VsdCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICB2aXNpYmxlRmFjZXRzJDogT2JzZXJ2YWJsZTxGYWNldFtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlOiBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAgPSBuZXcgTWFwPFN0cmluZywgYm9vbGVhbj4oKTtcbiAgICB0aGlzLnF1ZXJ5Q29kZWMgPSBuZXcgSHR0cFVybEVuY29kaW5nQ29kZWMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUZhY2V0VmFsdWVDb2RlID0gcGFyYW1zLmNhdGVnb3J5Q29kZSB8fCBwYXJhbXMuYnJhbmRDb2RlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5wcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2UubW9kZWwkLnBpcGUoXG4gICAgICB0YXAoc2VhcmNoUmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdC5mYWNldHMpIHtcbiAgICAgICAgICBzZWFyY2hSZXN1bHQuZmFjZXRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAuc2V0KGVsLm5hbWUsIGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy52aXNpYmxlRmFjZXRzJCA9IHRoaXMuc2VhcmNoUmVzdWx0JC5waXBlKFxuICAgICAgbWFwKHNlYXJjaFJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHQuZmFjZXRzXG4gICAgICAgICAgPyBzZWFyY2hSZXN1bHQuZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC52aXNpYmxlKVxuICAgICAgICAgIDogW107XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvcGVuRmlsdGVyTW9kYWwoY29udGVudCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCwgeyBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyB9KTtcbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZS5zZXRRdWVyeShcbiAgICAgIHRoaXMucXVlcnlDb2RlYy5kZWNvZGVWYWx1ZShxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgc2hvd0xlc3MoZmFjZXROYW1lOiBTdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNob3dBbGxQZXJGYWNldE1hcChmYWNldE5hbWUsIGZhbHNlKTtcbiAgfVxuXG4gIHNob3dNb3JlKGZhY2V0TmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTaG93QWxsUGVyRmFjZXRNYXAoZmFjZXROYW1lLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2hvd0FsbFBlckZhY2V0TWFwKGZhY2V0TmFtZTogU3RyaW5nLCBzaG93QWxsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWxsUGVyRmFjZXRNYXAuc2V0KGZhY2V0TmFtZSwgc2hvd0FsbCk7XG4gIH1cblxuICBpc0ZhY2V0Q29sbGFwc2VkKGZhY2V0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkRmFjZXRzLmhhcyhmYWNldE5hbWUpO1xuICB9XG5cbiAgdG9nZ2xlRmFjZXQoZmFjZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWRGYWNldHMuaGFzKGZhY2V0TmFtZSkpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLmRlbGV0ZShmYWNldE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5hZGQoZmFjZXROYW1lKTtcbiAgICB9XG4gIH1cblxuICBnZXRWaXNpYmxlRmFjZXRWYWx1ZXMoZmFjZXQ6IEZhY2V0KTogRmFjZXRbXSB7XG4gICAgcmV0dXJuIGZhY2V0LnZhbHVlcy5zbGljZShcbiAgICAgIDAsXG4gICAgICB0aGlzLnNob3dBbGxQZXJGYWNldE1hcC5nZXQoZmFjZXQubmFtZSlcbiAgICAgICAgPyBmYWNldC52YWx1ZXMubGVuZ3RoXG4gICAgICAgIDogZmFjZXQudG9wVmFsdWVDb3VudFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
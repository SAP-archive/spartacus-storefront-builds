/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductReferenceService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, distinctUntilChanged, } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
var ProductReferencesComponent = /** @class */ (function () {
    function ProductReferencesComponent(component, current, referenceService) {
        var _this = this;
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.title; })));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.code; })), distinctUntilChanged(), tap((/**
         * @return {?}
         */
        function () { return _this.referenceService.cleanReferences(); })));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), code = _b[0], data = _b[1];
            return _this.getProductReferences(code, data.productReferenceTypes);
        })));
    }
    /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    ProductReferencesComponent.prototype.getProductReferences = /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    function (code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        function (refs) { return refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        function (ref) { return of(ref.target); })); })));
    };
    ProductReferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-references',
                    template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductReferencesComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CurrentProductService },
        { type: ProductReferenceService }
    ]; };
    return ProductReferencesComponent;
}());
export { ProductReferencesComponent };
if (false) {
    /**
     * returns an Obervable string for the title
     * @type {?}
     */
    ProductReferencesComponent.prototype.title$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesComponent.prototype.currentProductCode$;
    /**
     * Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @type {?}
     */
    ProductReferencesComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.current;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.referenceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFJTCx1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsR0FBRyxFQUNILG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFO0lBa0NFLG9DQUNZLFNBQTBELEVBQzFELE9BQThCLEVBQzlCLGdCQUF5QztRQUhyRCxpQkFJSTtRQUhRLGNBQVMsR0FBVCxTQUFTLENBQWlEO1FBQzFELFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7Ozs7UUE1QnJELFdBQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRTlDLHdCQUFtQixHQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFDLENBQVUsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxFQUFDLEVBQzNCLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEVBQXZDLENBQXVDLEVBQUMsQ0FDbkQsQ0FBQzs7Ozs7O1FBT0YsV0FBTSxHQUFzQyxhQUFhLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQjtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FDTCxTQUFTOzs7O1FBQUMsVUFBQyxFQUFZO2dCQUFaLDBCQUFZLEVBQVgsWUFBSSxFQUFFLFlBQUk7WUFDcEIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUEzRCxDQUEyRCxFQUM1RCxDQUNGLENBQUM7SUFNQyxDQUFDOzs7Ozs7O0lBRUkseURBQW9COzs7Ozs7SUFBNUIsVUFDRSxJQUFZLEVBQ1osYUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsVUFBQyxJQUF3QixJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWQsQ0FBYyxFQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsc2hCQUFrRDtvQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQVg1Qix1QkFBdUI7O0lBOER6QixpQ0FBQztDQUFBLEFBakRELElBaURDO1NBNUNZLDBCQUEwQjs7Ozs7O0lBSXJDLDRDQUFzRDs7Ozs7SUFFdEQseURBT0U7Ozs7Ozs7SUFPRiw0Q0FPRTs7Ozs7SUFHQSwrQ0FBb0U7Ozs7O0lBQ3BFLDZDQUF3Qzs7Ozs7SUFDeEMsc0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZWZlcmVuY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZVxuICAgKi9cbiAgdGl0bGUkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShtYXAoZCA9PiBkLnRpdGxlKSk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdENvZGUkOiBPYnNlcnZhYmxlPFxuICAgIHN0cmluZ1xuICA+ID0gdGhpcy5jdXJyZW50LmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBtYXAoKHA6IFByb2R1Y3QpID0+IHAuY29kZSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5yZWZlcmVuY2VTZXJ2aWNlLmNsZWFuUmVmZXJlbmNlcygpKVxuICApO1xuXG4gIC8qKlxuICAgKiBPYmVydmFibGUgd2l0aCBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAqIHRoZSBjb21wb25lbnQgVUkgY291bGQgY29uc2lkZXIgdG8gbGF6eSBsb2FkIHRoZSBVSSBjb21wb25lbnRzIHdoZW4gdGhleSdyZVxuICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgKi9cbiAgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLmN1cnJlbnRQcm9kdWN0Q29kZSQsXG4gICAgdGhpcy5jb21wb25lbnQuZGF0YSQsXG4gIF0pLnBpcGUoXG4gICAgc3dpdGNoTWFwKChbY29kZSwgZGF0YV0pID0+XG4gICAgICB0aGlzLmdldFByb2R1Y3RSZWZlcmVuY2VzKGNvZGUsIGRhdGEucHJvZHVjdFJlZmVyZW5jZVR5cGVzKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY3VycmVudDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZWZlcmVuY2VTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmVmczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PiByZWZzLm1hcChyZWYgPT4gb2YocmVmLnRhcmdldCkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReferenceService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var ProductReferencesService = /** @class */ (function () {
    function ProductReferencesService(component, referenceService, routerService) {
        this.component = component;
        this.referenceService = referenceService;
        this.routerService = routerService;
    }
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        return this.title$;
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.fetchTitle = /**
     * @return {?}
     */
    function () {
        this.title$ = this.component.data$.pipe(map(function (data) {
            return data.title;
        }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.getDisplayProductTitles = /**
     * @return {?}
     */
    function () {
        return this.displayProductTitles$.pipe(map(function (data) { return Boolean(JSON.parse(data.toLowerCase())); }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.fetchDisplayProductTitles = /**
     * @return {?}
     */
    function () {
        this.displayProductTitles$ = this.component.data$.pipe(map(function (data) {
            return data.displayProductTitles;
        }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.getDisplayProductPrices = /**
     * @return {?}
     */
    function () {
        return this.displayProductPrices$.pipe(map(function (data) { return Boolean(JSON.parse(data.toLowerCase())); }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.fetchDisplayProductPrices = /**
     * @return {?}
     */
    function () {
        this.displayProductPrices$ = this.component.data$.pipe(map(function (data) {
            return data.displayProductPrices;
        }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.getReferenceType = /**
     * @return {?}
     */
    function () {
        return this.component.data$.pipe(map(function (data) { return data.productReferenceTypes; }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.getProductCode = /**
     * @return {?}
     */
    function () {
        return this.routerService
            .getRouterState()
            .pipe(map(function (data) { return data.state.params.productCode; }));
    };
    /**
     * @return {?}
     */
    ProductReferencesService.prototype.getReferenceList = /**
     * @return {?}
     */
    function () {
        return this.items$;
    };
    /**
     * @param {?=} pageSize
     * @return {?}
     */
    ProductReferencesService.prototype.setReferenceList = /**
     * @param {?=} pageSize
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        this.items$ = combineLatest(this.getProductCode(), this.getReferenceType()).pipe(map(function (data) { return ({ productCode: data[0], referenceType: data[1] }); }), switchMap(function (data) {
            return _this.referenceService.get(data.productCode, data.referenceType, pageSize);
        }));
    };
    ProductReferencesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReferencesService.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductReferenceService },
        { type: RoutingService }
    ]; };
    return ProductReferencesService;
}());
export { ProductReferencesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.title$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.items$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.displayProductTitles$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.displayProductPrices$;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesService.prototype.component;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.referenceService;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.routerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LXJlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRTNGO0lBT0Usa0NBQ1ksU0FBMEQsRUFDNUQsZ0JBQXlDLEVBQ3pDLGFBQTZCO1FBRjNCLGNBQVMsR0FBVCxTQUFTLENBQWlEO1FBQzVELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBQ3BDLENBQUM7Ozs7SUFFSiwyQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDZDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMERBQXVCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxxQkFB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ZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQsXG4gIFByb2R1Y3RSZWZlcmVuY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcHJpdmF0ZSBpdGVtcyQ6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPjtcbiAgcHJpdmF0ZSBkaXNwbGF5UHJvZHVjdFRpdGxlcyQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcHJpdmF0ZSBkaXNwbGF5UHJvZHVjdFByaWNlcyQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUkO1xuICB9XG5cbiAgZmV0Y2hUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGlzcGxheVByb2R1Y3RUaXRsZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVByb2R1Y3RUaXRsZXMkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiBCb29sZWFuKEpTT04ucGFyc2UoZGF0YS50b0xvd2VyQ2FzZSgpKSkpXG4gICAgKTtcbiAgfVxuXG4gIGZldGNoRGlzcGxheVByb2R1Y3RUaXRsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5UHJvZHVjdFRpdGxlcyQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5kaXNwbGF5UHJvZHVjdFRpdGxlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldERpc3BsYXlQcm9kdWN0UHJpY2VzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlQcm9kdWN0UHJpY2VzJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4gQm9vbGVhbihKU09OLnBhcnNlKGRhdGEudG9Mb3dlckNhc2UoKSkpKVxuICAgICk7XG4gIH1cblxuICBmZXRjaERpc3BsYXlQcm9kdWN0UHJpY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheVByb2R1Y3RQcmljZXMkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGlzcGxheVByb2R1Y3RQcmljZXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VUeXBlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5wcm9kdWN0UmVmZXJlbmNlVHlwZXMpKTtcbiAgfVxuXG4gIGdldFByb2R1Y3RDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKG1hcChkYXRhID0+IGRhdGEuc3RhdGUucGFyYW1zLnByb2R1Y3RDb2RlKSk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VMaXN0KCk6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMkO1xuICB9XG5cbiAgc2V0UmVmZXJlbmNlTGlzdChwYWdlU2l6ZT86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMkID0gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdENvZGUoKSxcbiAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlVHlwZSgpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4gKHsgcHJvZHVjdENvZGU6IGRhdGFbMF0sIHJlZmVyZW5jZVR5cGU6IGRhdGFbMV0gfSkpLFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VTZXJ2aWNlLmdldChcbiAgICAgICAgICBkYXRhLnByb2R1Y3RDb2RlLFxuICAgICAgICAgIGRhdGEucmVmZXJlbmNlVHlwZSxcbiAgICAgICAgICBwYWdlU2l6ZVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
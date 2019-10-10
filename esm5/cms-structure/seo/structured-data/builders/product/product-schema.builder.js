/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { CurrentProductService } from '../../../../../cms-components/product/current-product.service';
import { JSONLD_PRODUCT_BUILDER } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../cms-components/product/current-product.service";
import * as i2 from "../tokens";
/**
 * Adds the minimal structured data for the product, see https://schema.org/product.
 * The actual data collection is delegated to `JsonLdBuilder`s, which can be injected
 * using the `JSONLD_PRODUCT_BUILDER` token.
 */
var ProductSchemaBuilder = /** @class */ (function () {
    function ProductSchemaBuilder(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    /**
     * @return {?}
     */
    ProductSchemaBuilder.prototype.build = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.currentProduct.getProduct().pipe(startWith((/** @type {?} */ (null))), switchMap((/**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            if (product) {
                return combineLatest(_this.collect(product)).pipe(map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return Object.assign.apply(Object, tslib_1.__spread([{}], res)); })));
            }
            return of({});
        })));
    };
    /**
     * @protected
     * @param {?} product
     * @return {?}
     */
    ProductSchemaBuilder.prototype.collect = /**
     * @protected
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (!product || !product.code) {
            return [];
        }
        /** @type {?} */
        var builders = this.builders
            ? this.builders.map((/**
             * @param {?} builder
             * @return {?}
             */
            function (builder) { return builder.build(product); }))
            : [];
        return tslib_1.__spread([
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            })
        ], builders);
    };
    ProductSchemaBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductSchemaBuilder.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
    ]; };
    /** @nocollapse */ ProductSchemaBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(i0.ɵɵinject(i1.CurrentProductService), i0.ɵɵinject(i2.JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
    return ProductSchemaBuilder;
}());
export { ProductSchemaBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductSchemaBuilder.prototype.currentProduct;
    /**
     * @type {?}
     * @protected
     */
    ProductSchemaBuilder.prototype.builders;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFdEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7QUFPbkQ7SUFJRSw4QkFDVSxjQUFxQyxFQUduQyxRQUFrQztRQUhwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFHbkMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFDM0MsQ0FBQzs7OztJQUVKLG9DQUFLOzs7SUFBTDtRQUFBLGlCQVlDO1FBWEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDMUMsU0FBUyxDQUFDLG1CQUFBLElBQUksRUFBVyxDQUFDLEVBQzFCLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQ3pCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUc7Ozs7Z0JBQUMsVUFBQyxHQUFTLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxPQUFiLE1BQU0sb0JBQVEsRUFBRSxHQUFLLEdBQUcsSUFBeEIsQ0FBeUIsRUFBQyxDQUM5QyxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsc0NBQU87Ozs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1lBQ0ssUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLEVBQUM7WUFDdEQsQ0FBQyxDQUFDLEVBQUU7UUFDTjtZQUNFLEVBQUUsQ0FBQztnQkFDRCxVQUFVLEVBQUUsbUJBQW1CO2dCQUMvQixPQUFPLEVBQUUsU0FBUzthQUNuQixDQUFDO1dBQ0MsUUFBUSxFQUNYO0lBQ0osQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFEscUJBQXFCOzRDQWV6QixRQUFRLFlBQ1IsTUFBTSxTQUFDLHNCQUFzQjs7OytCQXBCbEM7Q0FxREMsQUF4Q0QsSUF3Q0M7U0FyQ1ksb0JBQW9COzs7Ozs7SUFFN0IsOENBQTZDOzs7OztJQUM3Qyx3Q0FFNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyLCBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5pbXBvcnQgeyBKU09OTERfUFJPRFVDVF9CVUlMREVSIH0gZnJvbSAnLi4vdG9rZW5zJztcblxuLyoqXG4gKiBBZGRzIHRoZSBtaW5pbWFsIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvcHJvZHVjdC5cbiAqIFRoZSBhY3R1YWwgZGF0YSBjb2xsZWN0aW9uIGlzIGRlbGVnYXRlZCB0byBgSnNvbkxkQnVpbGRlcmBzLCB3aGljaCBjYW4gYmUgaW5qZWN0ZWRcbiAqIHVzaW5nIHRoZSBgSlNPTkxEX1BST0RVQ1RfQlVJTERFUmAgdG9rZW4uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2NoZW1hQnVpbGRlciBpbXBsZW1lbnRzIFNjaGVtYUJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0OiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEpTT05MRF9QUk9EVUNUX0JVSUxERVIpXG4gICAgcHJvdGVjdGVkIGJ1aWxkZXJzOiBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+W11cbiAgKSB7fVxuXG4gIGJ1aWxkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2R1Y3QuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgICBzdGFydFdpdGgobnVsbCBhcyBQcm9kdWN0KSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuY29sbGVjdChwcm9kdWN0KSkucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzOiB7fVtdKSA9PiBPYmplY3QuYXNzaWduKHt9LCAuLi5yZXMpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb2xsZWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXSB7XG4gICAgaWYgKCFwcm9kdWN0IHx8ICFwcm9kdWN0LmNvZGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgYnVpbGRlcnMgPSB0aGlzLmJ1aWxkZXJzXG4gICAgICA/IHRoaXMuYnVpbGRlcnMubWFwKGJ1aWxkZXIgPT4gYnVpbGRlci5idWlsZChwcm9kdWN0KSlcbiAgICAgIDogW107XG4gICAgcmV0dXJuIFtcbiAgICAgIG9mKHtcbiAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcbiAgICAgICAgJ0B0eXBlJzogJ1Byb2R1Y3QnLFxuICAgICAgfSksXG4gICAgICAuLi5idWlsZGVycyxcbiAgICBdO1xuICB9XG59XG4iXX0=
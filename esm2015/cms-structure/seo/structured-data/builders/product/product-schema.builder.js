import { __decorate, __param } from "tslib";
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
let ProductSchemaBuilder = class ProductSchemaBuilder {
    constructor(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    build() {
        return this.currentProduct.getProduct().pipe(startWith(null), switchMap((product) => {
            if (product) {
                return combineLatest(this.collect(product)).pipe(map((res) => Object.assign({}, ...res)));
            }
            return of({});
        }));
    }
    collect(product) {
        if (!product || !product.code) {
            return [];
        }
        const builders = this.builders
            ? this.builders.map(builder => builder.build(product))
            : [];
        return [
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            }),
            ...builders,
        ];
    }
};
ProductSchemaBuilder.ctorParameters = () => [
    { type: CurrentProductService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
];
ProductSchemaBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(i0.ɵɵinject(i1.CurrentProductService), i0.ɵɵinject(i2.JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
ProductSchemaBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional()),
    __param(1, Inject(JSONLD_PRODUCT_BUILDER))
], ProductSchemaBuilder);
export { ProductSchemaBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFbkQ7Ozs7R0FJRztBQUlILElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQ1UsY0FBcUMsRUFHbkMsUUFBa0M7UUFIcEMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBR25DLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQzNDLENBQUM7SUFFSixLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDMUMsU0FBUyxDQUFDLElBQWUsQ0FBQyxFQUMxQixTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQzlDLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRVMsT0FBTyxDQUFDLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxDQUFDO2dCQUNELFVBQVUsRUFBRSxtQkFBbUI7Z0JBQy9CLE9BQU8sRUFBRSxTQUFTO2FBQ25CLENBQUM7WUFDRixHQUFHLFFBQVE7U0FDWixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbkMyQixxQkFBcUI7d0NBQzVDLFFBQVEsWUFDUixNQUFNLFNBQUMsc0JBQXNCOzs7QUFKckIsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFJRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtHQUp0QixvQkFBb0IsQ0FxQ2hDO1NBckNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIsIFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IEpTT05MRF9QUk9EVUNUX0JVSUxERVIgfSBmcm9tICcuLi90b2tlbnMnO1xuXG4vKipcbiAqIEFkZHMgdGhlIG1pbmltYWwgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9wcm9kdWN0LlxuICogVGhlIGFjdHVhbCBkYXRhIGNvbGxlY3Rpb24gaXMgZGVsZWdhdGVkIHRvIGBKc29uTGRCdWlsZGVyYHMsIHdoaWNoIGNhbiBiZSBpbmplY3RlZFxuICogdXNpbmcgdGhlIGBKU09OTERfUFJPRFVDVF9CVUlMREVSYCB0b2tlbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTY2hlbWFCdWlsZGVyIGltcGxlbWVudHMgU2NoZW1hQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3Q6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoSlNPTkxEX1BST0RVQ1RfQlVJTERFUilcbiAgICBwcm90ZWN0ZWQgYnVpbGRlcnM6IEpzb25MZEJ1aWxkZXI8UHJvZHVjdD5bXVxuICApIHt9XG5cbiAgYnVpbGQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvZHVjdC5nZXRQcm9kdWN0KCkucGlwZShcbiAgICAgIHN0YXJ0V2l0aChudWxsIGFzIFByb2R1Y3QpLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QodGhpcy5jb2xsZWN0KHByb2R1Y3QpKS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IHt9W10pID0+IE9iamVjdC5hc3NpZ24oe30sIC4uLnJlcykpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbGxlY3QocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55PltdIHtcbiAgICBpZiAoIXByb2R1Y3QgfHwgIXByb2R1Y3QuY29kZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBidWlsZGVycyA9IHRoaXMuYnVpbGRlcnNcbiAgICAgID8gdGhpcy5idWlsZGVycy5tYXAoYnVpbGRlciA9PiBidWlsZGVyLmJ1aWxkKHByb2R1Y3QpKVxuICAgICAgOiBbXTtcbiAgICByZXR1cm4gW1xuICAgICAgb2Yoe1xuICAgICAgICAnQGNvbnRleHQnOiAnaHR0cDovL3NjaGVtYS5vcmcnLFxuICAgICAgICAnQHR5cGUnOiAnUHJvZHVjdCcsXG4gICAgICB9KSxcbiAgICAgIC4uLmJ1aWxkZXJzLFxuICAgIF07XG4gIH1cbn1cbiJdfQ==
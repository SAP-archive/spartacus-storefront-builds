import { __decorate, __param, __read, __spread } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
    ProductSchemaBuilder.prototype.build = function () {
        var _this = this;
        return this.currentProduct.getProduct().pipe(switchMap(function (product) {
            if (product) {
                return combineLatest(_this.collect(product)).pipe(map(function (res) { return Object.assign.apply(Object, __spread([{}], res)); }));
            }
            return of({});
        }));
    };
    ProductSchemaBuilder.prototype.collect = function (product) {
        if (!product || !product.code) {
            return [];
        }
        var builders = this.builders
            ? this.builders.map(function (builder) { return builder.build(product); })
            : [];
        return __spread([
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            })
        ], builders);
    };
    ProductSchemaBuilder.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
    ]; };
    ProductSchemaBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(i0.ɵɵinject(i1.CurrentProductService), i0.ɵɵinject(i2.JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
    ProductSchemaBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Optional()),
        __param(1, Inject(JSONLD_PRODUCT_BUILDER))
    ], ProductSchemaBuilder);
    return ProductSchemaBuilder;
}());
export { ProductSchemaBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUVuRDs7OztHQUlHO0FBSUg7SUFDRSw4QkFDVSxjQUFxQyxFQUduQyxRQUFrQztRQUhwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFHbkMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFDM0MsQ0FBQztJQUVKLG9DQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQzFDLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO1lBQ3pCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFDLEdBQVMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLE9BQWIsTUFBTSxZQUFRLEVBQUUsR0FBSyxHQUFHLElBQXhCLENBQXlCLENBQUMsQ0FDOUMsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxzQ0FBTyxHQUFqQixVQUFrQixPQUFnQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQztZQUN0RCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1A7WUFDRSxFQUFFLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLG1CQUFtQjtnQkFDL0IsT0FBTyxFQUFFLFNBQVM7YUFDbkIsQ0FBQztXQUNDLFFBQVEsRUFDWDtJQUNKLENBQUM7O2dCQWpDeUIscUJBQXFCOzRDQUM1QyxRQUFRLFlBQ1IsTUFBTSxTQUFDLHNCQUFzQjs7O0lBSnJCLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBSUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUE7T0FKdEIsb0JBQW9CLENBb0NoQzsrQkFwREQ7Q0FvREMsQUFwQ0QsSUFvQ0M7U0FwQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIsIFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IEpTT05MRF9QUk9EVUNUX0JVSUxERVIgfSBmcm9tICcuLi90b2tlbnMnO1xuXG4vKipcbiAqIEFkZHMgdGhlIG1pbmltYWwgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9wcm9kdWN0LlxuICogVGhlIGFjdHVhbCBkYXRhIGNvbGxlY3Rpb24gaXMgZGVsZWdhdGVkIHRvIGBKc29uTGRCdWlsZGVyYHMsIHdoaWNoIGNhbiBiZSBpbmplY3RlZFxuICogdXNpbmcgdGhlIGBKU09OTERfUFJPRFVDVF9CVUlMREVSYCB0b2tlbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTY2hlbWFCdWlsZGVyIGltcGxlbWVudHMgU2NoZW1hQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3Q6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoSlNPTkxEX1BST0RVQ1RfQlVJTERFUilcbiAgICBwcm90ZWN0ZWQgYnVpbGRlcnM6IEpzb25MZEJ1aWxkZXI8UHJvZHVjdD5bXVxuICApIHt9XG5cbiAgYnVpbGQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvZHVjdC5nZXRQcm9kdWN0KCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuY29sbGVjdChwcm9kdWN0KSkucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzOiB7fVtdKSA9PiBPYmplY3QuYXNzaWduKHt9LCAuLi5yZXMpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb2xsZWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXSB7XG4gICAgaWYgKCFwcm9kdWN0IHx8ICFwcm9kdWN0LmNvZGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgYnVpbGRlcnMgPSB0aGlzLmJ1aWxkZXJzXG4gICAgICA/IHRoaXMuYnVpbGRlcnMubWFwKGJ1aWxkZXIgPT4gYnVpbGRlci5idWlsZChwcm9kdWN0KSlcbiAgICAgIDogW107XG4gICAgcmV0dXJuIFtcbiAgICAgIG9mKHtcbiAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcbiAgICAgICAgJ0B0eXBlJzogJ1Byb2R1Y3QnLFxuICAgICAgfSksXG4gICAgICAuLi5idWlsZGVycyxcbiAgICBdO1xuICB9XG59XG4iXX0=
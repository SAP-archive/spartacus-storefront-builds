import { __decorate, __param } from "tslib";
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
let ProductSchemaBuilder = class ProductSchemaBuilder {
    constructor(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    build() {
        return this.currentProduct.getProduct().pipe(switchMap((product) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUVuRDs7OztHQUlHO0FBSUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFDVSxjQUFxQyxFQUduQyxRQUFrQztRQUhwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFHbkMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFDM0MsQ0FBQztJQUVKLEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxQyxTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQzlDLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRVMsT0FBTyxDQUFDLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxDQUFDO2dCQUNELFVBQVUsRUFBRSxtQkFBbUI7Z0JBQy9CLE9BQU8sRUFBRSxTQUFTO2FBQ25CLENBQUM7WUFDRixHQUFHLFFBQVE7U0FDWixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbEMyQixxQkFBcUI7d0NBQzVDLFFBQVEsWUFDUixNQUFNLFNBQUMsc0JBQXNCOzs7QUFKckIsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFJRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtHQUp0QixvQkFBb0IsQ0FvQ2hDO1NBcENZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyLCBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5pbXBvcnQgeyBKU09OTERfUFJPRFVDVF9CVUlMREVSIH0gZnJvbSAnLi4vdG9rZW5zJztcblxuLyoqXG4gKiBBZGRzIHRoZSBtaW5pbWFsIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvcHJvZHVjdC5cbiAqIFRoZSBhY3R1YWwgZGF0YSBjb2xsZWN0aW9uIGlzIGRlbGVnYXRlZCB0byBgSnNvbkxkQnVpbGRlcmBzLCB3aGljaCBjYW4gYmUgaW5qZWN0ZWRcbiAqIHVzaW5nIHRoZSBgSlNPTkxEX1BST0RVQ1RfQlVJTERFUmAgdG9rZW4uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2NoZW1hQnVpbGRlciBpbXBsZW1lbnRzIFNjaGVtYUJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0OiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEpTT05MRF9QUk9EVUNUX0JVSUxERVIpXG4gICAgcHJvdGVjdGVkIGJ1aWxkZXJzOiBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+W11cbiAgKSB7fVxuXG4gIGJ1aWxkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2R1Y3QuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLmNvbGxlY3QocHJvZHVjdCkpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczoge31bXSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgLi4ucmVzKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29sbGVjdChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5jb2RlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGJ1aWxkZXJzID0gdGhpcy5idWlsZGVyc1xuICAgICAgPyB0aGlzLmJ1aWxkZXJzLm1hcChidWlsZGVyID0+IGJ1aWxkZXIuYnVpbGQocHJvZHVjdCkpXG4gICAgICA6IFtdO1xuICAgIHJldHVybiBbXG4gICAgICBvZih7XG4gICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAgICdAdHlwZSc6ICdQcm9kdWN0JyxcbiAgICAgIH0pLFxuICAgICAgLi4uYnVpbGRlcnMsXG4gICAgXTtcbiAgfVxufVxuIl19
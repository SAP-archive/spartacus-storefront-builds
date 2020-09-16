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
export class ProductSchemaBuilder {
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
            ? this.builders.map((builder) => builder.build(product))
            : [];
        return [
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            }),
            ...builders,
        ];
    }
}
ProductSchemaBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(i0.ɵɵinject(i1.CurrentProductService), i0.ɵɵinject(i2.JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
ProductSchemaBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductSchemaBuilder.ctorParameters = () => [
    { type: CurrentProductService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFdEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBRW5EOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQ1UsY0FBcUMsRUFHbkMsUUFBa0M7UUFIcEMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBR25DLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQzNDLENBQUM7SUFFSixLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDMUMsU0FBUyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQzdCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxDQUFDLEdBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUM5QyxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVTLE9BQU8sQ0FBQyxPQUFnQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxDQUFDO2dCQUNELFVBQVUsRUFBRSxtQkFBbUI7Z0JBQy9CLE9BQU8sRUFBRSxTQUFTO2FBQ25CLENBQUM7WUFDRixHQUFHLFFBQVE7U0FDWixDQUFDO0lBQ0osQ0FBQzs7OztZQXRDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVhRLHFCQUFxQjt3Q0FlekIsUUFBUSxZQUNSLE1BQU0sU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciwgU2NoZW1hQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSlNPTkxEX1BST0RVQ1RfQlVJTERFUiB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbi8qKlxuICogQWRkcyB0aGUgbWluaW1hbCBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGUgYWN0dWFsIGRhdGEgY29sbGVjdGlvbiBpcyBkZWxlZ2F0ZWQgdG8gYEpzb25MZEJ1aWxkZXJgcywgd2hpY2ggY2FuIGJlIGluamVjdGVkXG4gKiB1c2luZyB0aGUgYEpTT05MRF9QUk9EVUNUX0JVSUxERVJgIHRva2VuLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNjaGVtYUJ1aWxkZXIgaW1wbGVtZW50cyBTY2hlbWFCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChKU09OTERfUFJPRFVDVF9CVUlMREVSKVxuICAgIHByb3RlY3RlZCBidWlsZGVyczogSnNvbkxkQnVpbGRlcjxQcm9kdWN0PltdXG4gICkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9kdWN0LmdldFByb2R1Y3QoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QodGhpcy5jb2xsZWN0KHByb2R1Y3QpKS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IHt9W10pID0+IE9iamVjdC5hc3NpZ24oe30sIC4uLnJlcykpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbGxlY3QocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55PltdIHtcbiAgICBpZiAoIXByb2R1Y3QgfHwgIXByb2R1Y3QuY29kZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBidWlsZGVycyA9IHRoaXMuYnVpbGRlcnNcbiAgICAgID8gdGhpcy5idWlsZGVycy5tYXAoKGJ1aWxkZXIpID0+IGJ1aWxkZXIuYnVpbGQocHJvZHVjdCkpXG4gICAgICA6IFtdO1xuICAgIHJldHVybiBbXG4gICAgICBvZih7XG4gICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAgICdAdHlwZSc6ICdQcm9kdWN0JyxcbiAgICAgIH0pLFxuICAgICAgLi4uYnVpbGRlcnMsXG4gICAgXTtcbiAgfVxufVxuIl19
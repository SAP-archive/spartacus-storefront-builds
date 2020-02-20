import { __decorate, __param, __read, __spread } from "tslib";
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
    ProductSchemaBuilder.prototype.build = function () {
        var _this = this;
        return this.currentProduct.getProduct().pipe(startWith(null), switchMap(function (product) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFbkQ7Ozs7R0FJRztBQUlIO0lBQ0UsOEJBQ1UsY0FBcUMsRUFHbkMsUUFBa0M7UUFIcEMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBR25DLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQzNDLENBQUM7SUFFSixvQ0FBSyxHQUFMO1FBQUEsaUJBWUM7UUFYQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxQyxTQUFTLENBQUMsSUFBZSxDQUFDLEVBQzFCLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO1lBQ3pCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sYUFBYSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFDLEdBQVMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLE9BQWIsTUFBTSxZQUFRLEVBQUUsR0FBSyxHQUFHLElBQXhCLENBQXlCLENBQUMsQ0FDOUMsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxzQ0FBTyxHQUFqQixVQUFrQixPQUFnQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQztZQUN0RCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1A7WUFDRSxFQUFFLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLG1CQUFtQjtnQkFDL0IsT0FBTyxFQUFFLFNBQVM7YUFDbkIsQ0FBQztXQUNDLFFBQVEsRUFDWDtJQUNKLENBQUM7O2dCQWxDeUIscUJBQXFCOzRDQUM1QyxRQUFRLFlBQ1IsTUFBTSxTQUFDLHNCQUFzQjs7O0lBSnJCLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBSUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUE7T0FKdEIsb0JBQW9CLENBcUNoQzsrQkFyREQ7Q0FxREMsQUFyQ0QsSUFxQ0M7U0FyQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciwgU2NoZW1hQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSlNPTkxEX1BST0RVQ1RfQlVJTERFUiB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbi8qKlxuICogQWRkcyB0aGUgbWluaW1hbCBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGUgYWN0dWFsIGRhdGEgY29sbGVjdGlvbiBpcyBkZWxlZ2F0ZWQgdG8gYEpzb25MZEJ1aWxkZXJgcywgd2hpY2ggY2FuIGJlIGluamVjdGVkXG4gKiB1c2luZyB0aGUgYEpTT05MRF9QUk9EVUNUX0JVSUxERVJgIHRva2VuLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNjaGVtYUJ1aWxkZXIgaW1wbGVtZW50cyBTY2hlbWFCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChKU09OTERfUFJPRFVDVF9CVUlMREVSKVxuICAgIHByb3RlY3RlZCBidWlsZGVyczogSnNvbkxkQnVpbGRlcjxQcm9kdWN0PltdXG4gICkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9kdWN0LmdldFByb2R1Y3QoKS5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwgYXMgUHJvZHVjdCksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLmNvbGxlY3QocHJvZHVjdCkpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczoge31bXSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgLi4ucmVzKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29sbGVjdChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5jb2RlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGJ1aWxkZXJzID0gdGhpcy5idWlsZGVyc1xuICAgICAgPyB0aGlzLmJ1aWxkZXJzLm1hcChidWlsZGVyID0+IGJ1aWxkZXIuYnVpbGQocHJvZHVjdCkpXG4gICAgICA6IFtdO1xuICAgIHJldHVybiBbXG4gICAgICBvZih7XG4gICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAgICdAdHlwZSc6ICdQcm9kdWN0JyxcbiAgICAgIH0pLFxuICAgICAgLi4uYnVpbGRlcnMsXG4gICAgXTtcbiAgfVxufVxuIl19
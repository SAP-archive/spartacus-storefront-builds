/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ProductSchemaBuilder {
    /**
     * @param {?} currentProduct
     * @param {?} builders
     */
    constructor(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    /**
     * @return {?}
     */
    build() {
        return this.currentProduct.getProduct().pipe(startWith((/** @type {?} */ (null))), switchMap((/**
         * @param {?} product
         * @return {?}
         */
        (product) => {
            if (product) {
                return combineLatest(this.collect(product)).pipe(map((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => Object.assign({}, ...res))));
            }
            return of({});
        })));
    }
    /**
     * @protected
     * @param {?} product
     * @return {?}
     */
    collect(product) {
        if (!product || !product.code) {
            return [];
        }
        /** @type {?} */
        const builders = this.builders
            ? this.builders.map((/**
             * @param {?} builder
             * @return {?}
             */
            builder => builder.build(product)))
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
ProductSchemaBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductSchemaBuilder.ctorParameters = () => [
    { type: CurrentProductService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
];
/** @nocollapse */ ProductSchemaBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(i0.ɵɵinject(i1.CurrentProductService), i0.ɵɵinject(i2.JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L3Byb2R1Y3Qtc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7OztBQVVuRCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUNVLGNBQXFDLEVBR25DLFFBQWtDO1FBSHBDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUduQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUMzQyxDQUFDOzs7O0lBRUosS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQzFDLFNBQVMsQ0FBQyxtQkFBQSxJQUFJLEVBQVcsQ0FBQyxFQUMxQixTQUFTOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRzs7OztnQkFBQyxDQUFDLEdBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBQyxDQUM5QyxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsT0FBTyxDQUFDLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUM7WUFDdEQsQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPO1lBQ0wsRUFBRSxDQUFDO2dCQUNELFVBQVUsRUFBRSxtQkFBbUI7Z0JBQy9CLE9BQU8sRUFBRSxTQUFTO2FBQ25CLENBQUM7WUFDRixHQUFHLFFBQVE7U0FDWixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhRLHFCQUFxQjt3Q0FlekIsUUFBUSxZQUNSLE1BQU0sU0FBQyxzQkFBc0I7Ozs7Ozs7O0lBRjlCLDhDQUE2Qzs7Ozs7SUFDN0Msd0NBRTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciwgU2NoZW1hQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSlNPTkxEX1BST0RVQ1RfQlVJTERFUiB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbi8qKlxuICogQWRkcyB0aGUgbWluaW1hbCBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGUgYWN0dWFsIGRhdGEgY29sbGVjdGlvbiBpcyBkZWxlZ2F0ZWQgdG8gYEpzb25MZEJ1aWxkZXJgcywgd2hpY2ggY2FuIGJlIGluamVjdGVkXG4gKiB1c2luZyB0aGUgYEpTT05MRF9QUk9EVUNUX0JVSUxERVJgIHRva2VuLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNjaGVtYUJ1aWxkZXIgaW1wbGVtZW50cyBTY2hlbWFCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChKU09OTERfUFJPRFVDVF9CVUlMREVSKVxuICAgIHByb3RlY3RlZCBidWlsZGVyczogSnNvbkxkQnVpbGRlcjxQcm9kdWN0PltdXG4gICkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9kdWN0LmdldFByb2R1Y3QoKS5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwgYXMgUHJvZHVjdCksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLmNvbGxlY3QocHJvZHVjdCkpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczoge31bXSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgLi4ucmVzKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29sbGVjdChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5jb2RlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGJ1aWxkZXJzID0gdGhpcy5idWlsZGVyc1xuICAgICAgPyB0aGlzLmJ1aWxkZXJzLm1hcChidWlsZGVyID0+IGJ1aWxkZXIuYnVpbGQocHJvZHVjdCkpXG4gICAgICA6IFtdO1xuICAgIHJldHVybiBbXG4gICAgICBvZih7XG4gICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAgICdAdHlwZSc6ICdQcm9kdWN0JyxcbiAgICAgIH0pLFxuICAgICAgLi4uYnVpbGRlcnMsXG4gICAgXTtcbiAgfVxufVxuIl19
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
let JsonLdProductOfferBuilder = class JsonLdProductOfferBuilder {
    build(product) {
        const schema = { '@type': 'Offer' };
        if (product.price) {
            if (product.price.value) {
                schema.price = product.price.value;
            }
            if (product.price.currencyIso) {
                schema.priceCurrency = product.price.currencyIso;
            }
        }
        if (product.stock && product.stock.stockLevelStatus) {
            schema.availability =
                product.stock.stockLevelStatus === 'inStock' ? 'InStock' : 'OutOfStock';
        }
        return of({
            offers: schema,
        });
    }
};
JsonLdProductOfferBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });
JsonLdProductOfferBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JsonLdProductOfferBuilder);
export { JsonLdProductOfferBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3Qtb2ZmZXIuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L2pzb25sZC1wcm9kdWN0LW9mZmVyLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdEM7OztHQUdHO0FBSUgsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFDcEMsS0FBSyxDQUFDLE9BQWdCO1FBQ3BCLE1BQU0sTUFBTSxHQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUN2QixNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUNsRDtTQUNGO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDbkQsTUFBTSxDQUFDLFlBQVk7Z0JBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUMzRTtRQUVELE9BQU8sRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7QUFyQlkseUJBQXlCO0lBSHJDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx5QkFBeUIsQ0FxQnJDO1NBckJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCdWlsZHMgdGhlIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3Qgb2ZmZXIsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvb2ZmZXJzLlxuICogVGhlIGRhdGEgaW5jbHVkZXMgdGhlIHByaWNlLCBjdXJyZW5jeSBhbmQgYXZhaWxhYmlsaXR5IGxldmVsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkUHJvZHVjdE9mZmVyQnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzY2hlbWE6IGFueSA9IHsgJ0B0eXBlJzogJ09mZmVyJyB9O1xuICAgIGlmIChwcm9kdWN0LnByaWNlKSB7XG4gICAgICBpZiAocHJvZHVjdC5wcmljZS52YWx1ZSkge1xuICAgICAgICBzY2hlbWEucHJpY2UgPSBwcm9kdWN0LnByaWNlLnZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHByb2R1Y3QucHJpY2UuY3VycmVuY3lJc28pIHtcbiAgICAgICAgc2NoZW1hLnByaWNlQ3VycmVuY3kgPSBwcm9kdWN0LnByaWNlLmN1cnJlbmN5SXNvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cykge1xuICAgICAgc2NoZW1hLmF2YWlsYWJpbGl0eSA9XG4gICAgICAgIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ2luU3RvY2snID8gJ0luU3RvY2snIDogJ091dE9mU3RvY2snO1xuICAgIH1cblxuICAgIHJldHVybiBvZih7XG4gICAgICBvZmZlcnM6IHNjaGVtYSxcbiAgICB9KTtcbiAgfVxufVxuIl19
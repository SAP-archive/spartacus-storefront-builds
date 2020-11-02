import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
export class JsonLdProductOfferBuilder {
    build(product) {
        var _a;
        const schema = { '@type': 'Offer' };
        if ((_a = product.price) === null || _a === void 0 ? void 0 : _a.value) {
            schema.price = product.price.value;
            if (product.price.currencyIso) {
                schema.priceCurrency = product.price.currencyIso;
            }
        }
        if (product.stock && product.stock.stockLevelStatus) {
            schema.availability =
                product.stock.stockLevelStatus === 'inStock' ? 'InStock' : 'OutOfStock';
        }
        return of({ offers: schema });
    }
}
JsonLdProductOfferBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });
JsonLdProductOfferBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3Qtb2ZmZXIuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L2pzb25sZC1wcm9kdWN0LW9mZmVyLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd0Qzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLEtBQUssQ0FBQyxPQUFnQjs7UUFDcEIsTUFBTSxNQUFNLEdBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFFekMsVUFBSSxPQUFPLENBQUMsS0FBSywwQ0FBRSxLQUFLLEVBQUU7WUFDeEIsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNuQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUM3QixNQUFNLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xEO1NBQ0Y7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxNQUFNLENBQUMsWUFBWTtnQkFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzNFO1FBRUQsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCdWlsZHMgdGhlIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3Qgb2ZmZXIsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvb2ZmZXJzLlxuICogVGhlIGRhdGEgaW5jbHVkZXMgdGhlIHByaWNlLCBjdXJyZW5jeSBhbmQgYXZhaWxhYmlsaXR5IGxldmVsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkUHJvZHVjdE9mZmVyQnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzY2hlbWE6IGFueSA9IHsgJ0B0eXBlJzogJ09mZmVyJyB9O1xuXG4gICAgaWYgKHByb2R1Y3QucHJpY2U/LnZhbHVlKSB7XG4gICAgICBzY2hlbWEucHJpY2UgPSBwcm9kdWN0LnByaWNlLnZhbHVlO1xuICAgICAgaWYgKHByb2R1Y3QucHJpY2UuY3VycmVuY3lJc28pIHtcbiAgICAgICAgc2NoZW1hLnByaWNlQ3VycmVuY3kgPSBwcm9kdWN0LnByaWNlLmN1cnJlbmN5SXNvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cykge1xuICAgICAgc2NoZW1hLmF2YWlsYWJpbGl0eSA9XG4gICAgICAgIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ2luU3RvY2snID8gJ0luU3RvY2snIDogJ091dE9mU3RvY2snO1xuICAgIH1cblxuICAgIHJldHVybiBvZih7IG9mZmVyczogc2NoZW1hIH0pO1xuICB9XG59XG4iXX0=
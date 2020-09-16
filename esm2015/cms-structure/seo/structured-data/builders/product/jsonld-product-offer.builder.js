import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
export class JsonLdProductOfferBuilder {
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
}
JsonLdProductOfferBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });
JsonLdProductOfferBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3Qtb2ZmZXIuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L2pzb25sZC1wcm9kdWN0LW9mZmVyLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd0Qzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLEtBQUssQ0FBQyxPQUFnQjtRQUNwQixNQUFNLE1BQU0sR0FBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNwQztZQUNELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDbEQ7U0FDRjtRQUVELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBQ25ELE1BQU0sQ0FBQyxZQUFZO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDM0U7UUFFRCxPQUFPLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5cbi8qKlxuICogQnVpbGRzIHRoZSBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0IG9mZmVyLCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL29mZmVycy5cbiAqIFRoZSBkYXRhIGluY2x1ZGVzIHRoZSBwcmljZSwgY3VycmVuY3kgYW5kIGF2YWlsYWJpbGl0eSBsZXZlbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZFByb2R1Y3RPZmZlckJ1aWxkZXIgaW1wbGVtZW50cyBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+IHtcbiAgYnVpbGQocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc2NoZW1hOiBhbnkgPSB7ICdAdHlwZSc6ICdPZmZlcicgfTtcbiAgICBpZiAocHJvZHVjdC5wcmljZSkge1xuICAgICAgaWYgKHByb2R1Y3QucHJpY2UudmFsdWUpIHtcbiAgICAgICAgc2NoZW1hLnByaWNlID0gcHJvZHVjdC5wcmljZS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9kdWN0LnByaWNlLmN1cnJlbmN5SXNvKSB7XG4gICAgICAgIHNjaGVtYS5wcmljZUN1cnJlbmN5ID0gcHJvZHVjdC5wcmljZS5jdXJyZW5jeUlzbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMpIHtcbiAgICAgIHNjaGVtYS5hdmFpbGFiaWxpdHkgPVxuICAgICAgICBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgPT09ICdpblN0b2NrJyA/ICdJblN0b2NrJyA6ICdPdXRPZlN0b2NrJztcbiAgICB9XG5cbiAgICByZXR1cm4gb2Yoe1xuICAgICAgb2ZmZXJzOiBzY2hlbWEsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
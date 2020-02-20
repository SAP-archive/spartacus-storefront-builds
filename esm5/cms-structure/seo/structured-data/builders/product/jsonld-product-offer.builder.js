import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
var JsonLdProductOfferBuilder = /** @class */ (function () {
    function JsonLdProductOfferBuilder() {
    }
    JsonLdProductOfferBuilder.prototype.build = function (product) {
        var schema = { '@type': 'Offer' };
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
    };
    JsonLdProductOfferBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });
    JsonLdProductOfferBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JsonLdProductOfferBuilder);
    return JsonLdProductOfferBuilder;
}());
export { JsonLdProductOfferBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3Qtb2ZmZXIuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9wcm9kdWN0L2pzb25sZC1wcm9kdWN0LW9mZmVyLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdEM7OztHQUdHO0FBSUg7SUFBQTtLQXFCQztJQXBCQyx5Q0FBSyxHQUFMLFVBQU0sT0FBZ0I7UUFDcEIsSUFBTSxNQUFNLEdBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDcEM7WUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUM3QixNQUFNLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xEO1NBQ0Y7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxNQUFNLENBQUMsWUFBWTtnQkFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzNFO1FBRUQsT0FBTyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBcEJVLHlCQUF5QjtRQUhyQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cseUJBQXlCLENBcUJyQztvQ0FqQ0Q7Q0FpQ0MsQUFyQkQsSUFxQkM7U0FyQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJ1aWxkcyB0aGUgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCBvZmZlciwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9vZmZlcnMuXG4gKiBUaGUgZGF0YSBpbmNsdWRlcyB0aGUgcHJpY2UsIGN1cnJlbmN5IGFuZCBhdmFpbGFiaWxpdHkgbGV2ZWwuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGRQcm9kdWN0T2ZmZXJCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gIGJ1aWxkKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHNjaGVtYTogYW55ID0geyAnQHR5cGUnOiAnT2ZmZXInIH07XG4gICAgaWYgKHByb2R1Y3QucHJpY2UpIHtcbiAgICAgIGlmIChwcm9kdWN0LnByaWNlLnZhbHVlKSB7XG4gICAgICAgIHNjaGVtYS5wcmljZSA9IHByb2R1Y3QucHJpY2UudmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAocHJvZHVjdC5wcmljZS5jdXJyZW5jeUlzbykge1xuICAgICAgICBzY2hlbWEucHJpY2VDdXJyZW5jeSA9IHByb2R1Y3QucHJpY2UuY3VycmVuY3lJc287XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzKSB7XG4gICAgICBzY2hlbWEuYXZhaWxhYmlsaXR5ID1cbiAgICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnaW5TdG9jaycgPyAnSW5TdG9jaycgOiAnT3V0T2ZTdG9jayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKHtcbiAgICAgIG9mZmVyczogc2NoZW1hLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
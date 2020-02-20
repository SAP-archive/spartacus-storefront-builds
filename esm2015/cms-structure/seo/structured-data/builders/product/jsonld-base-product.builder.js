import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
let JsonLdBaseProductBuilder = class JsonLdBaseProductBuilder {
    build(product) {
        return of(Object.assign(Object.assign(Object.assign({}, this.getProductBase(product)), this.getProductBrand(product)), this.getProductImage(product)));
    }
    getProductBase(product) {
        const result = { sku: product.code };
        if (product.name) {
            result.name = product.name;
        }
        if (product.summary) {
            result.description = product.summary;
        }
        return result;
    }
    getProductImage(product) {
        return product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY['zoom'] &&
            product.images.PRIMARY['zoom'].url
            ? {
                image: product.images.PRIMARY['zoom'].url,
            }
            : {};
    }
    getProductBrand(product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    }
};
JsonLdBaseProductBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
JsonLdBaseProductBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JsonLdBaseProductBuilder);
export { JsonLdBaseProductBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vc3RydWN0dXJlZC1kYXRhL2J1aWxkZXJzL3Byb2R1Y3QvanNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3RDOzs7R0FHRztBQUlILElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBQ25DLEtBQUssQ0FBQyxPQUFnQjtRQUNwQixPQUFPLEVBQUUsK0NBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFTyxjQUFjLENBQUMsT0FBZ0I7UUFDckMsTUFBTSxNQUFNLEdBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFnQjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxNQUFNO1lBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRztZQUNsQyxDQUFDLENBQUM7Z0JBQ0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7YUFDMUM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFnQjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2dCQUNFLEtBQUssRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO2FBQy9CO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Q0FDRixDQUFBOztBQXRDWSx3QkFBd0I7SUFIcEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHdCQUF3QixDQXNDcEM7U0F0Q1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJ1aWxkcyB0aGUgYmFzaWMgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9wcm9kdWN0LlxuICogVGhpcyBidWlsZGVyIGluY2x1ZGVzIGRhdGEgZm9yIHNrdSBudW1iZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCBicmFuZCBhbmQgbWFpbiBpbWFnZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0QmFzZShwcm9kdWN0KSxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdEJyYW5kKHByb2R1Y3QpLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0SW1hZ2UocHJvZHVjdCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RCYXNlKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICBjb25zdCByZXN1bHQ6IGFueSA9IHsgc2t1OiBwcm9kdWN0LmNvZGUgfTtcbiAgICBpZiAocHJvZHVjdC5uYW1lKSB7XG4gICAgICByZXN1bHQubmFtZSA9IHByb2R1Y3QubmFtZTtcbiAgICB9XG4gICAgaWYgKHByb2R1Y3Quc3VtbWFyeSkge1xuICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0gcHJvZHVjdC5zdW1tYXJ5O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0SW1hZ2UocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIHJldHVybiBwcm9kdWN0LmltYWdlcyAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWVsnem9vbSddICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZWyd6b29tJ10udXJsXG4gICAgICA/IHtcbiAgICAgICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZXMuUFJJTUFSWVsnem9vbSddLnVybCxcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEJyYW5kKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICByZXR1cm4gcHJvZHVjdFsnbWFudWZhY3R1cmVyJ11cbiAgICAgID8ge1xuICAgICAgICAgIGJyYW5kOiBwcm9kdWN0WydtYW51ZmFjdHVyZXInXSxcbiAgICAgICAgfVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=
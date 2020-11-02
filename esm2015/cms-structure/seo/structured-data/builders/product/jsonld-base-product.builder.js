import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
export class JsonLdBaseProductBuilder {
    build(product) {
        return of(Object.assign(Object.assign(Object.assign({}, this.getProductBase(product)), this.getProductBrand(product)), this.getProductImage(product)));
    }
    /**
     * Returns the product sku, name and description.
     */
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
    /**
     * Returns the image object with the main product image url.
     *
     * If the image is not available, an empty object is returned.
     */
    getProductImage(product) {
        var _a, _b, _c;
        const image = (_c = (_b = (_a = product.images) === null || _a === void 0 ? void 0 : _a.PRIMARY) === null || _b === void 0 ? void 0 : _b['zoom']) === null || _c === void 0 ? void 0 : _c.url;
        return image ? { image } : {};
    }
    /**
     * Returns the brand object with the product manufacturer.
     *
     * If the brand is not available, an empty object is returned.
     */
    getProductBrand(product) {
        const brand = product.manufacturer;
        return brand ? { brand } : {};
    }
}
JsonLdBaseProductBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
JsonLdBaseProductBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9zZW8vc3RydWN0dXJlZC1kYXRhL2J1aWxkZXJzL3Byb2R1Y3QvanNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdEM7OztHQUdHO0FBSUgsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxLQUFLLENBQUMsT0FBZ0I7UUFDcEIsT0FBTyxFQUFFLCtDQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQ2hDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxjQUFjLENBQUMsT0FBZ0I7UUFDckMsTUFBTSxNQUFNLEdBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxlQUFlLENBQUMsT0FBZ0I7O1FBQ3hDLE1BQU0sS0FBSyxxQkFBRyxPQUFPLENBQUMsTUFBTSwwQ0FBRSxPQUFPLDBDQUFHLE1BQU0sMkNBQUcsR0FBRyxDQUFDO1FBQ3JELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxlQUFlLENBQUMsT0FBZ0I7UUFDeEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7WUE1Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJ1aWxkcyB0aGUgYmFzaWMgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9wcm9kdWN0LlxuICogVGhpcyBidWlsZGVyIGluY2x1ZGVzIGRhdGEgZm9yIHNrdSBudW1iZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCBicmFuZCBhbmQgbWFpbiBpbWFnZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0QmFzZShwcm9kdWN0KSxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdEJyYW5kKHByb2R1Y3QpLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0SW1hZ2UocHJvZHVjdCksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvZHVjdCBza3UsIG5hbWUgYW5kIGRlc2NyaXB0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0QmFzZShwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7IHNrdTogcHJvZHVjdC5jb2RlIH07XG4gICAgaWYgKHByb2R1Y3QubmFtZSkge1xuICAgICAgcmVzdWx0Lm5hbWUgPSBwcm9kdWN0Lm5hbWU7XG4gICAgfVxuICAgIGlmIChwcm9kdWN0LnN1bW1hcnkpIHtcbiAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IHByb2R1Y3Quc3VtbWFyeTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbWFnZSBvYmplY3Qgd2l0aCB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIHVybC5cbiAgICpcbiAgICogSWYgdGhlIGltYWdlIGlzIG5vdCBhdmFpbGFibGUsIGFuIGVtcHR5IG9iamVjdCBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0SW1hZ2UocHJvZHVjdDogUHJvZHVjdCk6IHsgaW1hZ2U/OiBzdHJpbmcgfSB7XG4gICAgY29uc3QgaW1hZ2UgPSBwcm9kdWN0LmltYWdlcz8uUFJJTUFSWT8uWyd6b29tJ10/LnVybDtcbiAgICByZXR1cm4gaW1hZ2UgPyB7IGltYWdlIH0gOiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBicmFuZCBvYmplY3Qgd2l0aCB0aGUgcHJvZHVjdCBtYW51ZmFjdHVyZXIuXG4gICAqXG4gICAqIElmIHRoZSBicmFuZCBpcyBub3QgYXZhaWxhYmxlLCBhbiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEJyYW5kKHByb2R1Y3Q6IFByb2R1Y3QpOiB7IGJyYW5kPzogc3RyaW5nIH0ge1xuICAgIGNvbnN0IGJyYW5kID0gcHJvZHVjdC5tYW51ZmFjdHVyZXI7XG4gICAgcmV0dXJuIGJyYW5kID8geyBicmFuZCB9IDoge307XG4gIH1cbn1cbiJdfQ==
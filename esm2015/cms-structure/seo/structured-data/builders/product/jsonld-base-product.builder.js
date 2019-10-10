/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
export class JsonLdBaseProductBuilder {
    /**
     * @param {?} product
     * @return {?}
     */
    build(product) {
        return of(Object.assign({}, this.getProductBase(product), this.getProductBrand(product), this.getProductImage(product)));
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    getProductBase(product) {
        /** @type {?} */
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
     * @private
     * @param {?} product
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    getProductBrand(product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    }
}
JsonLdBaseProductBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ JsonLdBaseProductBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vc3RydWN0dXJlZC1kYXRhL2J1aWxkZXJzL3Byb2R1Y3QvanNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztBQVV0QyxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUNuQyxLQUFLLENBQUMsT0FBZ0I7UUFDcEIsT0FBTyxFQUFFLG1CQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQ2hDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBZ0I7O2NBQy9CLE1BQU0sR0FBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3pDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLE9BQWdCO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLE1BQU07WUFDbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHO1lBQ2xDLENBQUMsQ0FBQztnQkFDRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzthQUMxQztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsT0FBZ0I7UUFDdEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQzVCLENBQUMsQ0FBQztnQkFDRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUMvQjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7WUF4Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJ1aWxkcyB0aGUgYmFzaWMgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCwgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9wcm9kdWN0LlxuICogVGhpcyBidWlsZGVyIGluY2x1ZGVzIGRhdGEgZm9yIHNrdSBudW1iZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCBicmFuZCBhbmQgbWFpbiBpbWFnZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0QmFzZShwcm9kdWN0KSxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdEJyYW5kKHByb2R1Y3QpLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0SW1hZ2UocHJvZHVjdCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RCYXNlKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICBjb25zdCByZXN1bHQ6IGFueSA9IHsgc2t1OiBwcm9kdWN0LmNvZGUgfTtcbiAgICBpZiAocHJvZHVjdC5uYW1lKSB7XG4gICAgICByZXN1bHQubmFtZSA9IHByb2R1Y3QubmFtZTtcbiAgICB9XG4gICAgaWYgKHByb2R1Y3Quc3VtbWFyeSkge1xuICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0gcHJvZHVjdC5zdW1tYXJ5O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0SW1hZ2UocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIHJldHVybiBwcm9kdWN0LmltYWdlcyAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWVsnem9vbSddICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZWyd6b29tJ10udXJsXG4gICAgICA/IHtcbiAgICAgICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZXMuUFJJTUFSWVsnem9vbSddLnVybCxcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEJyYW5kKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICByZXR1cm4gcHJvZHVjdFsnbWFudWZhY3R1cmVyJ11cbiAgICAgID8ge1xuICAgICAgICAgIGJyYW5kOiBwcm9kdWN0WydtYW51ZmFjdHVyZXInXSxcbiAgICAgICAgfVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=
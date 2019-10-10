/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
var JsonLdBaseProductBuilder = /** @class */ (function () {
    function JsonLdBaseProductBuilder() {
    }
    /**
     * @param {?} product
     * @return {?}
     */
    JsonLdBaseProductBuilder.prototype.build = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return of(tslib_1.__assign({}, this.getProductBase(product), this.getProductBrand(product), this.getProductImage(product)));
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    JsonLdBaseProductBuilder.prototype.getProductBase = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var result = { sku: product.code };
        if (product.name) {
            result.name = product.name;
        }
        if (product.summary) {
            result.description = product.summary;
        }
        return result;
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    JsonLdBaseProductBuilder.prototype.getProductImage = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY['zoom'] &&
            product.images.PRIMARY['zoom'].url
            ? {
                image: product.images.PRIMARY['zoom'].url,
            }
            : {};
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    JsonLdBaseProductBuilder.prototype.getProductBrand = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    };
    JsonLdBaseProductBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ JsonLdBaseProductBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
    return JsonLdBaseProductBuilder;
}());
export { JsonLdBaseProductBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vc3RydWN0dXJlZC1kYXRhL2J1aWxkZXJzL3Byb2R1Y3QvanNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFPdEM7SUFBQTtLQXlDQzs7Ozs7SUFyQ0Msd0NBQUs7Ozs7SUFBTCxVQUFNLE9BQWdCO1FBQ3BCLE9BQU8sRUFBRSxzQkFDSixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUNoQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8saURBQWM7Ozs7O0lBQXRCLFVBQXVCLE9BQWdCOztZQUMvQixNQUFNLEdBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtRQUN6QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUN0QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLGtEQUFlOzs7OztJQUF2QixVQUF3QixPQUFnQjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxNQUFNO1lBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRztZQUNsQyxDQUFDLENBQUM7Z0JBQ0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7YUFDMUM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRU8sa0RBQWU7Ozs7O0lBQXZCLFVBQXdCLE9BQWdCO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUM1QixDQUFDLENBQUM7Z0JBQ0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7YUFDL0I7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBeENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzttQ0FYRDtDQWtEQyxBQXpDRCxJQXlDQztTQXRDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5cbi8qKlxuICogQnVpbGRzIHRoZSBiYXNpYyBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGlzIGJ1aWxkZXIgaW5jbHVkZXMgZGF0YSBmb3Igc2t1IG51bWJlciwgbmFtZSwgZGVzY3JpcHRpb24sIGJyYW5kIGFuZCBtYWluIGltYWdlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkQmFzZVByb2R1Y3RCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gIGJ1aWxkKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvZih7XG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RCYXNlKHByb2R1Y3QpLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0QnJhbmQocHJvZHVjdCksXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RJbWFnZShwcm9kdWN0KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEJhc2UocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIGNvbnN0IHJlc3VsdDogYW55ID0geyBza3U6IHByb2R1Y3QuY29kZSB9O1xuICAgIGlmIChwcm9kdWN0Lm5hbWUpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcHJvZHVjdC5uYW1lO1xuICAgIH1cbiAgICBpZiAocHJvZHVjdC5zdW1tYXJ5KSB7XG4gICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBwcm9kdWN0LnN1bW1hcnk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RJbWFnZShwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgcmV0dXJuIHByb2R1Y3QuaW1hZ2VzICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZWyd6b29tJ10gJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUllbJ3pvb20nXS51cmxcbiAgICAgID8ge1xuICAgICAgICAgIGltYWdlOiBwcm9kdWN0LmltYWdlcy5QUklNQVJZWyd6b29tJ10udXJsLFxuICAgICAgICB9XG4gICAgICA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0QnJhbmQocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIHJldHVybiBwcm9kdWN0WydtYW51ZmFjdHVyZXInXVxuICAgICAgPyB7XG4gICAgICAgICAgYnJhbmQ6IHByb2R1Y3RbJ21hbnVmYWN0dXJlciddLFxuICAgICAgICB9XG4gICAgICA6IG51bGw7XG4gIH1cbn1cbiJdfQ==
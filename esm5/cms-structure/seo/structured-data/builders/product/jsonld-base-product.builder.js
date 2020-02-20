import { __assign, __decorate } from "tslib";
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
    JsonLdBaseProductBuilder.prototype.build = function (product) {
        return of(__assign(__assign(__assign({}, this.getProductBase(product)), this.getProductBrand(product)), this.getProductImage(product)));
    };
    JsonLdBaseProductBuilder.prototype.getProductBase = function (product) {
        var result = { sku: product.code };
        if (product.name) {
            result.name = product.name;
        }
        if (product.summary) {
            result.description = product.summary;
        }
        return result;
    };
    JsonLdBaseProductBuilder.prototype.getProductImage = function (product) {
        return product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY['zoom'] &&
            product.images.PRIMARY['zoom'].url
            ? {
                image: product.images.PRIMARY['zoom'].url,
            }
            : {};
    };
    JsonLdBaseProductBuilder.prototype.getProductBrand = function (product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    };
    JsonLdBaseProductBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
    JsonLdBaseProductBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JsonLdBaseProductBuilder);
    return JsonLdBaseProductBuilder;
}());
export { JsonLdBaseProductBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZW8vc3RydWN0dXJlZC1kYXRhL2J1aWxkZXJzL3Byb2R1Y3QvanNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3RDOzs7R0FHRztBQUlIO0lBQUE7S0FzQ0M7SUFyQ0Msd0NBQUssR0FBTCxVQUFNLE9BQWdCO1FBQ3BCLE9BQU8sRUFBRSxnQ0FDSixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlEQUFjLEdBQXRCLFVBQXVCLE9BQWdCO1FBQ3JDLElBQU0sTUFBTSxHQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUN0QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxrREFBZSxHQUF2QixVQUF3QixPQUFnQjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxNQUFNO1lBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRztZQUNsQyxDQUFDLENBQUM7Z0JBQ0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7YUFDMUM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVPLGtEQUFlLEdBQXZCLFVBQXdCLE9BQWdCO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUM1QixDQUFDLENBQUM7Z0JBQ0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7YUFDL0I7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7SUFyQ1Usd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0FzQ3BDO21DQWxERDtDQWtEQyxBQXRDRCxJQXNDQztTQXRDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5cbi8qKlxuICogQnVpbGRzIHRoZSBiYXNpYyBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0LCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL3Byb2R1Y3QuXG4gKiBUaGlzIGJ1aWxkZXIgaW5jbHVkZXMgZGF0YSBmb3Igc2t1IG51bWJlciwgbmFtZSwgZGVzY3JpcHRpb24sIGJyYW5kIGFuZCBtYWluIGltYWdlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkQmFzZVByb2R1Y3RCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gIGJ1aWxkKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvZih7XG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RCYXNlKHByb2R1Y3QpLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0QnJhbmQocHJvZHVjdCksXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RJbWFnZShwcm9kdWN0KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEJhc2UocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIGNvbnN0IHJlc3VsdDogYW55ID0geyBza3U6IHByb2R1Y3QuY29kZSB9O1xuICAgIGlmIChwcm9kdWN0Lm5hbWUpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcHJvZHVjdC5uYW1lO1xuICAgIH1cbiAgICBpZiAocHJvZHVjdC5zdW1tYXJ5KSB7XG4gICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBwcm9kdWN0LnN1bW1hcnk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RJbWFnZShwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgcmV0dXJuIHByb2R1Y3QuaW1hZ2VzICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZICYmXG4gICAgICBwcm9kdWN0LmltYWdlcy5QUklNQVJZWyd6b29tJ10gJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUllbJ3pvb20nXS51cmxcbiAgICAgID8ge1xuICAgICAgICAgIGltYWdlOiBwcm9kdWN0LmltYWdlcy5QUklNQVJZWyd6b29tJ10udXJsLFxuICAgICAgICB9XG4gICAgICA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0QnJhbmQocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIHJldHVybiBwcm9kdWN0WydtYW51ZmFjdHVyZXInXVxuICAgICAgPyB7XG4gICAgICAgICAgYnJhbmQ6IHByb2R1Y3RbJ21hbnVmYWN0dXJlciddLFxuICAgICAgICB9XG4gICAgICA6IG51bGw7XG4gIH1cbn1cbiJdfQ==
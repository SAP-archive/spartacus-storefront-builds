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
}
JsonLdBaseProductBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
JsonLdBaseProductBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9zZW8vc3RydWN0dXJlZC1kYXRhL2J1aWxkZXJzL3Byb2R1Y3QvanNvbmxkLWJhc2UtcHJvZHVjdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdEM7OztHQUdHO0FBSUgsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxLQUFLLENBQUMsT0FBZ0I7UUFDcEIsT0FBTyxFQUFFLCtDQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQ2hDLENBQUM7SUFDTCxDQUFDO0lBRU8sY0FBYyxDQUFDLE9BQWdCO1FBQ3JDLE1BQU0sTUFBTSxHQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUN0QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxlQUFlLENBQUMsT0FBZ0I7UUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTTtZQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7WUFDbEMsQ0FBQyxDQUFDO2dCQUNFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHO2FBQzFDO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFTyxlQUFlLENBQUMsT0FBZ0I7UUFDdEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQzVCLENBQUMsQ0FBQztnQkFDRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUMvQjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7O1lBeENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCdWlsZHMgdGhlIGJhc2ljIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvcHJvZHVjdC5cbiAqIFRoaXMgYnVpbGRlciBpbmNsdWRlcyBkYXRhIGZvciBza3UgbnVtYmVyLCBuYW1lLCBkZXNjcmlwdGlvbiwgYnJhbmQgYW5kIG1haW4gaW1hZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGRCYXNlUHJvZHVjdEJ1aWxkZXIgaW1wbGVtZW50cyBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+IHtcbiAgYnVpbGQocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG9mKHtcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdEJhc2UocHJvZHVjdCksXG4gICAgICAuLi50aGlzLmdldFByb2R1Y3RCcmFuZChwcm9kdWN0KSxcbiAgICAgIC4uLnRoaXMuZ2V0UHJvZHVjdEltYWdlKHByb2R1Y3QpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0QmFzZShwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7IHNrdTogcHJvZHVjdC5jb2RlIH07XG4gICAgaWYgKHByb2R1Y3QubmFtZSkge1xuICAgICAgcmVzdWx0Lm5hbWUgPSBwcm9kdWN0Lm5hbWU7XG4gICAgfVxuICAgIGlmIChwcm9kdWN0LnN1bW1hcnkpIHtcbiAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IHByb2R1Y3Quc3VtbWFyeTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEltYWdlKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICByZXR1cm4gcHJvZHVjdC5pbWFnZXMgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLlBSSU1BUllbJ3pvb20nXSAmJlxuICAgICAgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWVsnem9vbSddLnVybFxuICAgICAgPyB7XG4gICAgICAgICAgaW1hZ2U6IHByb2R1Y3QuaW1hZ2VzLlBSSU1BUllbJ3pvb20nXS51cmwsXG4gICAgICAgIH1cbiAgICAgIDoge307XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RCcmFuZChwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgcmV0dXJuIHByb2R1Y3RbJ21hbnVmYWN0dXJlciddXG4gICAgICA/IHtcbiAgICAgICAgICBicmFuZDogcHJvZHVjdFsnbWFudWZhY3R1cmVyJ10sXG4gICAgICAgIH1cbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19
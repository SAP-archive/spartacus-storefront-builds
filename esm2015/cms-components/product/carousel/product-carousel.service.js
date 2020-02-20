import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Product, ProductReference, ProductReferenceService, ProductService, SemanticPathService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let ProductCarouselService = class ProductCarouselService {
    constructor(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    loadProduct(code) {
        return this.productService.get(code).pipe(filter(Boolean), map(product => this.convertProduct(product)));
    }
    getProductReferences(code, referenceType, displayTitle, displayProductPrices) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map(ref => this.convertProduct(ref.target, displayTitle, displayProductPrices))));
    }
    /**
     * Converts the product to a generic CarouselItem
     */
    convertProduct(source, displayTitle = true, displayProductPrices = true) {
        const item = {};
        if (displayTitle) {
            item.title = source.name;
        }
        if (displayProductPrices && source.price && source.price.formattedValue) {
            item.price = source.price.formattedValue;
        }
        if (source.images && source.images.PRIMARY) {
            item.media = {
                container: source.images.PRIMARY,
                format: 'product',
            };
        }
        item.route = this.semanticPathService.transform({
            cxRoute: 'product',
            params: source,
        });
        return item;
    }
};
ProductCarouselService.ctorParameters = () => [
    { type: ProductService },
    { type: ProductReferenceService },
    { type: SemanticPathService }
];
ProductCarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.ProductReferenceService), i0.ɵɵinject(i1.SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
ProductCarouselService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductCarouselService);
export { ProductCarouselService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNN0MsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFDWSxjQUE4QixFQUM5QixnQkFBeUMsRUFDekMsbUJBQXdDO1FBRnhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzdDLENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQW9CLENBQ2xCLElBQVksRUFDWixhQUFxQixFQUNyQixZQUFxQixFQUNyQixvQkFBNkI7UUFFN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxJQUF3QixFQUFFLEVBQUUsQ0FDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FDcEUsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxjQUFjLENBQ3BCLE1BQWUsRUFDZixZQUFZLEdBQUcsSUFBSSxFQUNuQixvQkFBb0IsR0FBRyxJQUFJO1FBRTNCLE1BQU0sSUFBSSxHQUF3QixFQUFFLENBQUM7UUFDckMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxvQkFBb0IsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDMUM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUNoQyxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7WUFDOUMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBOztZQTFENkIsY0FBYztZQUNaLHVCQUF1QjtZQUNwQixtQkFBbUI7OztBQUp6QyxzQkFBc0I7SUFIbEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHNCQUFzQixDQTREbEM7U0E1RFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxJdGVtIH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZWZlcmVuY2VTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBwcm9kdWN0IGRhdGEgYW5kIGNvbnZlcnRzIGl0IGBDYXJvdXNlbEl0ZW1gLlxuICAgKi9cbiAgbG9hZFByb2R1Y3QoY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0Q2Fyb3VzZWxJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNvbnZlcnRQcm9kdWN0KHByb2R1Y3QpKVxuICAgICk7XG4gIH1cblxuICBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZTogc3RyaW5nLFxuICAgIGRpc3BsYXlUaXRsZTogYm9vbGVhbixcbiAgICBkaXNwbGF5UHJvZHVjdFByaWNlczogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RDYXJvdXNlbEl0ZW1bXT4ge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuZ2V0KGNvZGUsIHJlZmVyZW5jZVR5cGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHJlZnM6IFByb2R1Y3RSZWZlcmVuY2VbXSkgPT5cbiAgICAgICAgcmVmcy5tYXAocmVmID0+XG4gICAgICAgICAgdGhpcy5jb252ZXJ0UHJvZHVjdChyZWYudGFyZ2V0LCBkaXNwbGF5VGl0bGUsIGRpc3BsYXlQcm9kdWN0UHJpY2VzKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgcHJvZHVjdCB0byBhIGdlbmVyaWMgQ2Fyb3VzZWxJdGVtXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRQcm9kdWN0KFxuICAgIHNvdXJjZTogUHJvZHVjdCxcbiAgICBkaXNwbGF5VGl0bGUgPSB0cnVlLFxuICAgIGRpc3BsYXlQcm9kdWN0UHJpY2VzID0gdHJ1ZVxuICApOiBQcm9kdWN0Q2Fyb3VzZWxJdGVtIHtcbiAgICBjb25zdCBpdGVtOiBQcm9kdWN0Q2Fyb3VzZWxJdGVtID0ge307XG4gICAgaWYgKGRpc3BsYXlUaXRsZSkge1xuICAgICAgaXRlbS50aXRsZSA9IHNvdXJjZS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGlzcGxheVByb2R1Y3RQcmljZXMgJiYgc291cmNlLnByaWNlICYmIHNvdXJjZS5wcmljZS5mb3JtYXR0ZWRWYWx1ZSkge1xuICAgICAgaXRlbS5wcmljZSA9IHNvdXJjZS5wcmljZS5mb3JtYXR0ZWRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5pbWFnZXMgJiYgc291cmNlLmltYWdlcy5QUklNQVJZKSB7XG4gICAgICBpdGVtLm1lZGlhID0ge1xuICAgICAgICBjb250YWluZXI6IHNvdXJjZS5pbWFnZXMuUFJJTUFSWSxcbiAgICAgICAgZm9ybWF0OiAncHJvZHVjdCcsXG4gICAgICB9O1xuICAgIH1cbiAgICBpdGVtLnJvdXRlID0gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICBwYXJhbXM6IHNvdXJjZSxcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxufVxuIl19
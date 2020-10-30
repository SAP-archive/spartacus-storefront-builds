import { Injectable } from '@angular/core';
import { ProductService, SemanticPathService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class ProductCarouselService {
    constructor(productService, semanticPathService) {
        this.productService = productService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    loadProduct(code) {
        return this.productService.get(code).pipe(filter(Boolean), map((product) => this.convertProduct(product)));
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
}
ProductCarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
ProductCarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductCarouselService.ctorParameters = () => [
    { type: ProductService },
    { type: SemanticPathService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTdDLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFDWSxjQUE4QixFQUM5QixtQkFBd0M7UUFEeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLGNBQWMsQ0FDcEIsTUFBZSxFQUNmLFlBQVksR0FBRyxJQUFJLEVBQ25CLG9CQUFvQixHQUFHLElBQUk7UUFFM0IsTUFBTSxJQUFJLEdBQXdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ2hDLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztZQTdDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVBpQixjQUFjO1lBQUUsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFNlcnZpY2UsIFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxJdGVtIH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHByb2R1Y3QgZGF0YSBhbmQgY29udmVydHMgaXQgYENhcm91c2VsSXRlbWAuXG4gICAqL1xuICBsb2FkUHJvZHVjdChjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3RDYXJvdXNlbEl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocHJvZHVjdCkgPT4gdGhpcy5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBwcm9kdWN0IHRvIGEgZ2VuZXJpYyBDYXJvdXNlbEl0ZW1cbiAgICovXG4gIHByaXZhdGUgY29udmVydFByb2R1Y3QoXG4gICAgc291cmNlOiBQcm9kdWN0LFxuICAgIGRpc3BsYXlUaXRsZSA9IHRydWUsXG4gICAgZGlzcGxheVByb2R1Y3RQcmljZXMgPSB0cnVlXG4gICk6IFByb2R1Y3RDYXJvdXNlbEl0ZW0ge1xuICAgIGNvbnN0IGl0ZW06IFByb2R1Y3RDYXJvdXNlbEl0ZW0gPSB7fTtcbiAgICBpZiAoZGlzcGxheVRpdGxlKSB7XG4gICAgICBpdGVtLnRpdGxlID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIGlmIChkaXNwbGF5UHJvZHVjdFByaWNlcyAmJiBzb3VyY2UucHJpY2UgJiYgc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICBpdGVtLnByaWNlID0gc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcyAmJiBzb3VyY2UuaW1hZ2VzLlBSSU1BUlkpIHtcbiAgICAgIGl0ZW0ubWVkaWEgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogc291cmNlLmltYWdlcy5QUklNQVJZLFxuICAgICAgICBmb3JtYXQ6ICdwcm9kdWN0JyxcbiAgICAgIH07XG4gICAgfVxuICAgIGl0ZW0ucm91dGUgPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgIHBhcmFtczogc291cmNlLFxuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iXX0=
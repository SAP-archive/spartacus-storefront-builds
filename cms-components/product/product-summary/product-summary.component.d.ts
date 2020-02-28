import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { ProductDetailOutlets } from '../product-outlets.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductSummaryComponent {
    protected currentProductService: CurrentProductService;
    outlets: typeof ProductDetailOutlets;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSummaryComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductSummaryComponent, "cx-product-summary", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2U7XG4gICAgb3V0bGV0czogdHlwZW9mIFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuICAgIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKTtcbn1cbiJdfQ==
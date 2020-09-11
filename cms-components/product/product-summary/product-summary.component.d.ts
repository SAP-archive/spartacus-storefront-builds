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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductSummaryComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductSummaryComponent, "cx-product-summary", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbE91dGxldHMgfSBmcm9tICcuLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZTtcbiAgICBvdXRsZXRzOiB0eXBlb2YgUHJvZHVjdERldGFpbE91dGxldHM7XG4gICAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgY29uc3RydWN0b3IoY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpO1xufVxuIl19
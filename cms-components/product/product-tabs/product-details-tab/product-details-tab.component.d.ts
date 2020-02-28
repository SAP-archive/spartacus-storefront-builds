import { OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductDetailsTabComponent implements OnInit {
    protected currentProductService: CurrentProductService;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductDetailsTabComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductDetailsTabComponent, "cx-product-details-tab", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWxzLXRhYi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7OztBQUtBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19
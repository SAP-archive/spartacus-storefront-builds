import { OnInit } from '@angular/core';
import { Product, BaseOption, VariantType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductVariantsComponent implements OnInit {
    private currentProductService;
    constructor(currentProductService: CurrentProductService);
    variants: BaseOption[];
    variantType: typeof VariantType;
    product$: Observable<Product>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductVariantsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductVariantsComponent, "cx-product-variants", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBCYXNlT3B0aW9uLCBWYXJpYW50VHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0VmFyaWFudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgY3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKTtcbiAgICB2YXJpYW50czogQmFzZU9wdGlvbltdO1xuICAgIHZhcmlhbnRUeXBlOiB0eXBlb2YgVmFyaWFudFR5cGU7XG4gICAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==
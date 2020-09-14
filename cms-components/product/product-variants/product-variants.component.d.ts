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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductVariantsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductVariantsComponent, "cx-product-variants", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QsIEJhc2VPcHRpb24sIFZhcmlhbnRUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RWYXJpYW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpO1xuICAgIHZhcmlhbnRzOiBCYXNlT3B0aW9uW107XG4gICAgdmFyaWFudFR5cGU6IHR5cGVvZiBWYXJpYW50VHlwZTtcbiAgICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19
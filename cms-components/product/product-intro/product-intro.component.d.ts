import { AfterContentChecked } from '@angular/core';
import { Product, TranslationService, WindowRef } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductIntroComponent implements AfterContentChecked {
    protected currentProductService: CurrentProductService;
    private translationService;
    protected winRef: WindowRef;
    reviewsTabAvailable: BehaviorSubject<boolean>;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService, translationService: TranslationService, winRef: WindowRef);
    ngAfterContentChecked(): void;
    showReviews(): void;
    private getReviewsComponent;
    private getTabsComponent;
    private clickTabIfInactive;
    private getTabByLabel;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductIntroComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductIntroComponent, "cx-product-intro", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1pbnRyby5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBUcmFuc2xhdGlvblNlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RJbnRyb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcmV2aWV3c1RhYkF2YWlsYWJsZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuICAgIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xuICAgIHNob3dSZXZpZXdzKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRSZXZpZXdzQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ2V0VGFic0NvbXBvbmVudDtcbiAgICBwcml2YXRlIGNsaWNrVGFiSWZJbmFjdGl2ZTtcbiAgICBwcml2YXRlIGdldFRhYkJ5TGFiZWw7XG59XG4iXX0=
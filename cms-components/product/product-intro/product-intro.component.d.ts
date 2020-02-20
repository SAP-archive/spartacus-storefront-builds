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

//# sourceMappingURL=product-intro.component.d.ts.map
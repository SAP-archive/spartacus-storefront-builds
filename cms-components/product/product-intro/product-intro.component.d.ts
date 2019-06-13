import { AfterContentChecked } from '@angular/core';
import { Product, TranslationService, WindowRef } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
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
}

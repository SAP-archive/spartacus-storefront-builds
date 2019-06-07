import { AfterContentChecked } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationService } from '@spartacus/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
export declare class ProductSummaryComponent implements AfterContentChecked {
    private translationService;
    static outlets: typeof ProductDetailOutlets;
    itemCount: number;
    reviewsTabAvailable: BehaviorSubject<boolean>;
    product: any;
    readonly outlets: typeof ProductDetailOutlets;
    updateCount(value: any): void;
    private getReviewsComponent;
    private getTabsComponent;
    getTabByLabel(label: string, tabsComponent: Element): HTMLElement;
    clickTabIfInactive(tab: HTMLElement): void;
    showReviews(): void;
    constructor(translationService: TranslationService);
    ngAfterContentChecked(): void;
}

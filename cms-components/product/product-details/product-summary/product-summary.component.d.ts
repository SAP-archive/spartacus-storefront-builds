import { OnInit } from '@angular/core';
import { TranslatePipe, TranslationService } from '@spartacus/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
export declare class ProductSummaryComponent implements OnInit {
    protected translatePipe: TranslatePipe;
    private translationService;
    static outlets: typeof ProductDetailOutlets;
    itemCount: number;
    reviewsTabAvailable: boolean;
    product: any;
    readonly outlets: typeof ProductDetailOutlets;
    updateCount(value: any): void;
    readonly hasStock: boolean;
    private getReviewsComponent;
    private getTabsComponent;
    getTabByLabel(label: string, tabsComponent: Element): HTMLElement;
    clickTabIfInactive(tab: HTMLElement): void;
    showReviews(): void;
    constructor(translatePipe: TranslatePipe, translationService: TranslationService);
    ngOnInit(): void;
}

import { OnInit } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
import { TranslatePipe } from '@spartacus/core';
export declare class ProductSummaryComponent implements OnInit {
    protected translatePipe: TranslatePipe;
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
    constructor(translatePipe: TranslatePipe);
    ngOnInit(): void;
}

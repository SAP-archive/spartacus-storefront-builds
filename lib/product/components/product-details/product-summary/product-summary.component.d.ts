import { EventEmitter } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
export declare class ProductSummaryComponent {
    static outlets: typeof ProductDetailOutlets;
    itemCount: number;
    product: any;
    openReview: EventEmitter<{}>;
    readonly outlets: typeof ProductDetailOutlets;
    updateCount(value: any): void;
    readonly stockInfo: string;
    private hasStock;
    launchReview(): void;
}

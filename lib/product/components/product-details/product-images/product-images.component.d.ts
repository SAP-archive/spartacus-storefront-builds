import { OnChanges } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
export declare class ProductImagesComponent implements OnChanges {
    outlets: typeof ProductDetailOutlets;
    product: any;
    mainImageContainer: any;
    waiting: HTMLElement;
    ngOnChanges(): void;
    showImage(event: MouseEvent, imageContainer: any): void;
    isMainImageContainer(imageContainer: any): boolean;
    loadHandler(): void;
    private startWaiting;
    private clearWaitList;
}

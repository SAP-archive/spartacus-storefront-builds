import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export declare class ProductImagesComponent {
    private currentProductService;
    waiting: HTMLElement;
    product$: Observable<Product>;
    private _imageContainer$;
    imageContainer$: Observable<any>;
    constructor(currentProductService: CurrentProductService);
    showImage(event: MouseEvent, imageContainer: any): void;
    isMainImageContainer(currentContainer: any): Observable<boolean>;
    loadHandler(): void;
    private startWaiting;
    private clearWaitList;
}

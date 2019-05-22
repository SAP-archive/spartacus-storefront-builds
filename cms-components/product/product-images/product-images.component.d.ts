import { OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export declare class ProductImagesComponent implements OnInit {
    private currentProductService;
    imageContainer$: BehaviorSubject<any>;
    waiting: HTMLElement;
    product$: Observable<Product>;
    constructor(currentProductService: CurrentProductService);
    ngOnInit(): void;
    showImage(event: MouseEvent, imageContainer: any): void;
    isMainImageContainer(currentContainer: any): Observable<boolean>;
    loadHandler(): void;
    private startWaiting;
    private clearWaitList;
}

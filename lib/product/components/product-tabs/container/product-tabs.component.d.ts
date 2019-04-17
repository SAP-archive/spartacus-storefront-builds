import { ElementRef, OnInit } from '@angular/core';
import { Product, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductTabsOutlets } from '../../../product-outlets.model';
export declare class ProductTabsComponent implements OnInit {
    protected winRef: WindowRef;
    protected currentPageService: CurrentProductService;
    static outlets: typeof ProductTabsOutlets;
    product$: Observable<Product>;
    isWritingReview: boolean;
    activatedElements: HTMLElement[];
    initial: ElementRef;
    reviewHeader: ElementRef;
    readonly outlets: typeof ProductTabsOutlets;
    constructor(winRef: WindowRef, currentPageService: CurrentProductService);
    ngOnInit(): void;
    select(event: MouseEvent, tab: HTMLElement): void;
    openReview(): void;
    private isElementOutViewport;
}

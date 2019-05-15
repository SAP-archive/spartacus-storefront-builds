import { ElementRef, OnInit } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { SharedCarouselService } from '../shared-carousel.service';
import { ProductCarouselService } from './product-carousel.component.service';
export declare class ProductCarouselComponent implements OnInit {
    private el;
    productCarouselService: ProductCarouselService;
    sharedCarouselService: SharedCarouselService;
    private window;
    constructor(winRef: WindowRef, el: ElementRef, productCarouselService: ProductCarouselService, sharedCarouselService: SharedCarouselService);
    ngOnInit(): void;
}

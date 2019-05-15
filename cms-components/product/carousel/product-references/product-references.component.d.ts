import { ElementRef, OnInit } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { SharedCarouselService } from '../shared-carousel.service';
import { ProductReferencesService } from './product-references.component.service';
export declare class ProductReferencesComponent implements OnInit {
    private el;
    productReferencesService: ProductReferencesService;
    sharedCarouselService: SharedCarouselService;
    private window;
    constructor(winRef: WindowRef, el: ElementRef, productReferencesService: ProductReferencesService, sharedCarouselService: SharedCarouselService);
    ngOnInit(): void;
}

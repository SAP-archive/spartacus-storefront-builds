import { OnInit, ElementRef } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { ProductCarouselService } from './product-carousel.component.service';
export declare class ProductCarouselComponent implements OnInit {
    private el;
    service: ProductCarouselService;
    private window;
    constructor(winRef: WindowRef, el: ElementRef, service: ProductCarouselService);
    ngOnInit(): void;
}

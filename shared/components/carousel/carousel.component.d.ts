import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CarouselItem } from './carousel.model';
import { CarouselService } from './carousel.service';
export declare class CarouselComponent implements OnInit {
    protected el: ElementRef;
    protected service: CarouselService;
    title: string;
    private _items;
    items: CarouselItem[];
    /** Indicates the current active item in carousel (if any)  */
    activeItem: number;
    /**
     * Specifies the min pixel used per product. This value is used
     * to calculate the amount of items we can fit into the available with
     * of the host element. The number of items is not related the breakpoints,
     * which means that a carousel can be placed in different layouts,
     * regardless of the overall size.
     */
    minItemPixelSize: number;
    hideIndicators: boolean;
    indicatorIcon: ICON_TYPE;
    previousIcon: ICON_TYPE;
    nextIcon: ICON_TYPE;
    open: EventEmitter<CarouselItem>;
    /**
     * The group with items which is currently active.
     */
    activeSlide: number;
    /**
     * The number of items that should be rendered in the carousel.
     */
    size$: Observable<number>;
    constructor(el: ElementRef, service: CarouselService);
    ngOnInit(): void;
    select(slide?: number): void;
    onOpen(groupIndex: number, itemIndex: number): void;
}

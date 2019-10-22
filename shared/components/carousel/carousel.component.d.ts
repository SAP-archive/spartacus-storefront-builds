import { ElementRef, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CarouselService } from './carousel.service';
/**
 * Generic carousel component that can be used to render any carousel items,
 * such as products, images, banners, or any component. Carousel items are
 * rendered in so-called carousel slides, and the previous/next buttons as well as
 * the indicator-buttons can used to navigate the slides.
 *
 * The component uses an array of Observables (`items$`) as an input, to allow
 * for lazy loading of items.
 *
 * The number of items per slide is calculated with the `itemWidth`, which can given
 * in pixels or percentage.
 *
 * To allow for flexible rendering of items, the rendering is delegated to the
 * given `template`. This allows for maximum flexibility.
 */
export declare class CarouselComponent implements OnInit {
    protected el: ElementRef;
    protected service: CarouselService;
    /**
     * The title is rendered as the carousel heading.
     */
    title: string;
    /**
     * The items$ represent the carousel items. The items$ are
     * observables so that the items can be loaded on demand.
     */
    items: Observable<any>[];
    setItems: Observable<any>[];
    /**
     * The template is rendered for each item, so that the actual
     * view can be given by the compoent that uses the `CarouselComponent`.
     */
    template: TemplateRef<any>;
    /**
     * Specifies the minimum size of the carousel item, either in px or %.
     * This value is used for the calculation of numbers per carousel, so that
     * the number of carousel items is dynamic. The calculation uses the `itemWidth`
     * and the host element `clientWidth`, so that the carousel is reusable in
     * different layouts (for example in a 50% grid).
     */
    itemWidth: string;
    /**
     * Indicates whether the visual indicators are used.
     */
    hideIndicators: boolean;
    indicatorIcon: ICON_TYPE;
    previousIcon: ICON_TYPE;
    nextIcon: ICON_TYPE;
    activeSlide: number;
    size$: Observable<number>;
    constructor(el: ElementRef, service: CarouselService);
    ngOnInit(): void;
}

import { ElementRef, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
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
import * as ɵngcc0 from '@angular/core';
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
    set setItems(inputItems: Observable<any>[]);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CarouselComponent, "cx-carousel", never, {
    "itemWidth": "itemWidth";
    "hideIndicators": "hideIndicators";
    "indicatorIcon": "indicatorIcon";
    "previousIcon": "previousIcon";
    "nextIcon": "nextIcon";
    "setItems": "items";
    "title": "title";
    "template": "template";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG4vKipcbiAqIEdlbmVyaWMgY2Fyb3VzZWwgY29tcG9uZW50IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVuZGVyIGFueSBjYXJvdXNlbCBpdGVtcyxcbiAqIHN1Y2ggYXMgcHJvZHVjdHMsIGltYWdlcywgYmFubmVycywgb3IgYW55IGNvbXBvbmVudC4gQ2Fyb3VzZWwgaXRlbXMgYXJlXG4gKiByZW5kZXJlZCBpbiBzby1jYWxsZWQgY2Fyb3VzZWwgc2xpZGVzLCBhbmQgdGhlIHByZXZpb3VzL25leHQgYnV0dG9ucyBhcyB3ZWxsIGFzXG4gKiB0aGUgaW5kaWNhdG9yLWJ1dHRvbnMgY2FuIHVzZWQgdG8gbmF2aWdhdGUgdGhlIHNsaWRlcy5cbiAqXG4gKiBUaGUgY29tcG9uZW50IHVzZXMgYW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXMgKGBpdGVtcyRgKSBhcyBhbiBpbnB1dCwgdG8gYWxsb3dcbiAqIGZvciBsYXp5IGxvYWRpbmcgb2YgaXRlbXMuXG4gKlxuICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgc2xpZGUgaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSBgaXRlbVdpZHRoYCwgd2hpY2ggY2FuIGdpdmVuXG4gKiBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZS5cbiAqXG4gKiBUbyBhbGxvdyBmb3IgZmxleGlibGUgcmVuZGVyaW5nIG9mIGl0ZW1zLCB0aGUgcmVuZGVyaW5nIGlzIGRlbGVnYXRlZCB0byB0aGVcbiAqIGdpdmVuIGB0ZW1wbGF0ZWAuIFRoaXMgYWxsb3dzIGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIGlzIHJlbmRlcmVkIGFzIHRoZSBjYXJvdXNlbCBoZWFkaW5nLlxuICAgICAqL1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGl0ZW1zJCByZXByZXNlbnQgdGhlIGNhcm91c2VsIGl0ZW1zLiBUaGUgaXRlbXMkIGFyZVxuICAgICAqIG9ic2VydmFibGVzIHNvIHRoYXQgdGhlIGl0ZW1zIGNhbiBiZSBsb2FkZWQgb24gZGVtYW5kLlxuICAgICAqL1xuICAgIGl0ZW1zOiBPYnNlcnZhYmxlPGFueT5bXTtcbiAgICBzZXQgc2V0SXRlbXMoaW5wdXRJdGVtczogT2JzZXJ2YWJsZTxhbnk+W10pO1xuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBmb3IgZWFjaCBpdGVtLCBzbyB0aGF0IHRoZSBhY3R1YWxcbiAgICAgKiB2aWV3IGNhbiBiZSBnaXZlbiBieSB0aGUgY29tcG9lbnQgdGhhdCB1c2VzIHRoZSBgQ2Fyb3VzZWxDb21wb25lbnRgLlxuICAgICAqL1xuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSBzaXplIG9mIHRoZSBjYXJvdXNlbCBpdGVtLCBlaXRoZXIgaW4gcHggb3IgJS5cbiAgICAgKiBUaGlzIHZhbHVlIGlzIHVzZWQgZm9yIHRoZSBjYWxjdWxhdGlvbiBvZiBudW1iZXJzIHBlciBjYXJvdXNlbCwgc28gdGhhdFxuICAgICAqIHRoZSBudW1iZXIgb2YgY2Fyb3VzZWwgaXRlbXMgaXMgZHluYW1pYy4gVGhlIGNhbGN1bGF0aW9uIHVzZXMgdGhlIGBpdGVtV2lkdGhgXG4gICAgICogYW5kIHRoZSBob3N0IGVsZW1lbnQgYGNsaWVudFdpZHRoYCwgc28gdGhhdCB0aGUgY2Fyb3VzZWwgaXMgcmV1c2FibGUgaW5cbiAgICAgKiBkaWZmZXJlbnQgbGF5b3V0cyAoZm9yIGV4YW1wbGUgaW4gYSA1MCUgZ3JpZCkuXG4gICAgICovXG4gICAgaXRlbVdpZHRoOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpc3VhbCBpbmRpY2F0b3JzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGhpZGVJbmRpY2F0b3JzOiBib29sZWFuO1xuICAgIGluZGljYXRvckljb246IElDT05fVFlQRTtcbiAgICBwcmV2aW91c0ljb246IElDT05fVFlQRTtcbiAgICBuZXh0SWNvbjogSUNPTl9UWVBFO1xuICAgIGFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gICAgc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgc2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbi8qKlxuICogR2VuZXJpYyBjYXJvdXNlbCBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byByZW5kZXIgYW55IGNhcm91c2VsIGl0ZW1zLFxuICogc3VjaCBhcyBwcm9kdWN0cywgaW1hZ2VzLCBiYW5uZXJzLCBvciBhbnkgY29tcG9uZW50LiBDYXJvdXNlbCBpdGVtcyBhcmVcbiAqIHJlbmRlcmVkIGluIHNvLWNhbGxlZCBjYXJvdXNlbCBzbGlkZXMsIGFuZCB0aGUgcHJldmlvdXMvbmV4dCBidXR0b25zIGFzIHdlbGwgYXNcbiAqIHRoZSBpbmRpY2F0b3ItYnV0dG9ucyBjYW4gdXNlZCB0byBuYXZpZ2F0ZSB0aGUgc2xpZGVzLlxuICpcbiAqIFRoZSBjb21wb25lbnQgdXNlcyBhbiBhcnJheSBvZiBPYnNlcnZhYmxlcyAoYGl0ZW1zJGApIGFzIGFuIGlucHV0LCB0byBhbGxvd1xuICogZm9yIGxhenkgbG9hZGluZyBvZiBpdGVtcy5cbiAqXG4gKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBzbGlkZSBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGBpdGVtV2lkdGhgLCB3aGljaCBjYW4gZ2l2ZW5cbiAqIGluIHBpeGVscyBvciBwZXJjZW50YWdlLlxuICpcbiAqIFRvIGFsbG93IGZvciBmbGV4aWJsZSByZW5kZXJpbmcgb2YgaXRlbXMsIHRoZSByZW5kZXJpbmcgaXMgZGVsZWdhdGVkIHRvIHRoZVxuICogZ2l2ZW4gYHRlbXBsYXRlYC4gVGhpcyBhbGxvd3MgZm9yIG1heGltdW0gZmxleGliaWxpdHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IENhcm91c2VsU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgaXMgcmVuZGVyZWQgYXMgdGhlIGNhcm91c2VsIGhlYWRpbmcuXG4gICAgICovXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgaXRlbXMkIHJlcHJlc2VudCB0aGUgY2Fyb3VzZWwgaXRlbXMuIFRoZSBpdGVtcyQgYXJlXG4gICAgICogb2JzZXJ2YWJsZXMgc28gdGhhdCB0aGUgaXRlbXMgY2FuIGJlIGxvYWRlZCBvbiBkZW1hbmQuXG4gICAgICovXG4gICAgaXRlbXM6IE9ic2VydmFibGU8YW55PltdO1xuICAgIHNldCBzZXRJdGVtcyhpbnB1dEl0ZW1zOiBPYnNlcnZhYmxlPGFueT5bXSk7XG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkIGZvciBlYWNoIGl0ZW0sIHNvIHRoYXQgdGhlIGFjdHVhbFxuICAgICAqIHZpZXcgY2FuIGJlIGdpdmVuIGJ5IHRoZSBjb21wb2VudCB0aGF0IHVzZXMgdGhlIGBDYXJvdXNlbENvbXBvbmVudGAuXG4gICAgICovXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHNpemUgb2YgdGhlIGNhcm91c2VsIGl0ZW0sIGVpdGhlciBpbiBweCBvciAlLlxuICAgICAqIFRoaXMgdmFsdWUgaXMgdXNlZCBmb3IgdGhlIGNhbGN1bGF0aW9uIG9mIG51bWJlcnMgcGVyIGNhcm91c2VsLCBzbyB0aGF0XG4gICAgICogdGhlIG51bWJlciBvZiBjYXJvdXNlbCBpdGVtcyBpcyBkeW5hbWljLiBUaGUgY2FsY3VsYXRpb24gdXNlcyB0aGUgYGl0ZW1XaWR0aGBcbiAgICAgKiBhbmQgdGhlIGhvc3QgZWxlbWVudCBgY2xpZW50V2lkdGhgLCBzbyB0aGF0IHRoZSBjYXJvdXNlbCBpcyByZXVzYWJsZSBpblxuICAgICAqIGRpZmZlcmVudCBsYXlvdXRzIChmb3IgZXhhbXBsZSBpbiBhIDUwJSBncmlkKS5cbiAgICAgKi9cbiAgICBpdGVtV2lkdGg6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlzdWFsIGluZGljYXRvcnMgYXJlIHVzZWQuXG4gICAgICovXG4gICAgaGlkZUluZGljYXRvcnM6IGJvb2xlYW47XG4gICAgaW5kaWNhdG9ySWNvbjogSUNPTl9UWVBFO1xuICAgIHByZXZpb3VzSWNvbjogSUNPTl9UWVBFO1xuICAgIG5leHRJY29uOiBJQ09OX1RZUEU7XG4gICAgYWN0aXZlU2xpZGU6IG51bWJlcjtcbiAgICBzaXplJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=
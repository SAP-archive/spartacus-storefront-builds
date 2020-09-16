import { ChangeDetectionStrategy, Component, ElementRef, Input, isDevMode, } from '@angular/core';
import { tap } from 'rxjs/operators';
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
export class CarouselComponent {
    constructor(el, service) {
        this.el = el;
        this.service = service;
        /**
         * Specifies the minimum size of the carousel item, either in px or %.
         * This value is used for the calculation of numbers per carousel, so that
         * the number of carousel items is dynamic. The calculation uses the `itemWidth`
         * and the host element `clientWidth`, so that the carousel is reusable in
         * different layouts (for example in a 50% grid).
         */
        this.itemWidth = '300px';
        /**
         * Indicates whether the visual indicators are used.
         */
        this.hideIndicators = false;
        this.indicatorIcon = ICON_TYPE.CIRCLE;
        this.previousIcon = ICON_TYPE.CARET_LEFT;
        this.nextIcon = ICON_TYPE.CARET_RIGHT;
    }
    set setItems(inputItems) {
        this.items = inputItems;
        //Reset slider when changing products
        this.activeSlide = 0;
    }
    ngOnInit() {
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap(() => (this.activeSlide = 0)));
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-carousel',
                template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div\n          class=\"slide\"\n          *ngIf=\"i % size === 0\"\n          [class.active]=\"i === activeSlide\"\n        >\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"-1\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"-1\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CarouselService }
];
CarouselComponent.propDecorators = {
    title: [{ type: Input }],
    setItems: [{ type: Input, args: ['items',] }],
    template: [{ type: Input }],
    itemWidth: [{ type: Input }],
    hideIndicators: [{ type: Input }],
    indicatorIcon: [{ type: Input }],
    previousIcon: [{ type: Input }],
    nextIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBTUgsTUFBTSxPQUFPLGlCQUFpQjtJQTZDNUIsWUFBc0IsRUFBYyxFQUFZLE9BQXdCO1FBQWxELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXJCeEU7Ozs7OztXQU1HO1FBQ00sY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUU3Qjs7V0FFRztRQUNNLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGtCQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDcEMsYUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFLaUMsQ0FBQztJQWxDNUUsSUFDSSxRQUFRLENBQUMsVUFBNkI7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDeEIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUErQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQ1gsbUZBQW1GLENBQ3BGLENBQUM7WUFDRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ3RCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHExREFBd0M7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUE5QkMsVUFBVTtZQVNILGVBQWU7OztvQkEwQnJCLEtBQUs7dUJBT0wsS0FBSyxTQUFDLE9BQU87dUJBV2IsS0FBSzt3QkFTTCxLQUFLOzZCQUtMLEtBQUs7NEJBRUwsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG5cbi8qKlxuICogR2VuZXJpYyBjYXJvdXNlbCBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byByZW5kZXIgYW55IGNhcm91c2VsIGl0ZW1zLFxuICogc3VjaCBhcyBwcm9kdWN0cywgaW1hZ2VzLCBiYW5uZXJzLCBvciBhbnkgY29tcG9uZW50LiBDYXJvdXNlbCBpdGVtcyBhcmVcbiAqIHJlbmRlcmVkIGluIHNvLWNhbGxlZCBjYXJvdXNlbCBzbGlkZXMsIGFuZCB0aGUgcHJldmlvdXMvbmV4dCBidXR0b25zIGFzIHdlbGwgYXNcbiAqIHRoZSBpbmRpY2F0b3ItYnV0dG9ucyBjYW4gdXNlZCB0byBuYXZpZ2F0ZSB0aGUgc2xpZGVzLlxuICpcbiAqIFRoZSBjb21wb25lbnQgdXNlcyBhbiBhcnJheSBvZiBPYnNlcnZhYmxlcyAoYGl0ZW1zJGApIGFzIGFuIGlucHV0LCB0byBhbGxvd1xuICogZm9yIGxhenkgbG9hZGluZyBvZiBpdGVtcy5cbiAqXG4gKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBzbGlkZSBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGBpdGVtV2lkdGhgLCB3aGljaCBjYW4gZ2l2ZW5cbiAqIGluIHBpeGVscyBvciBwZXJjZW50YWdlLlxuICpcbiAqIFRvIGFsbG93IGZvciBmbGV4aWJsZSByZW5kZXJpbmcgb2YgaXRlbXMsIHRoZSByZW5kZXJpbmcgaXMgZGVsZWdhdGVkIHRvIHRoZVxuICogZ2l2ZW4gYHRlbXBsYXRlYC4gVGhpcyBhbGxvd3MgZm9yIG1heGltdW0gZmxleGliaWxpdHkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBpcyByZW5kZXJlZCBhcyB0aGUgY2Fyb3VzZWwgaGVhZGluZy5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtcyQgcmVwcmVzZW50IHRoZSBjYXJvdXNlbCBpdGVtcy4gVGhlIGl0ZW1zJCBhcmVcbiAgICogb2JzZXJ2YWJsZXMgc28gdGhhdCB0aGUgaXRlbXMgY2FuIGJlIGxvYWRlZCBvbiBkZW1hbmQuXG4gICAqL1xuICBpdGVtczogT2JzZXJ2YWJsZTxhbnk+W107XG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgc2V0SXRlbXMoaW5wdXRJdGVtczogT2JzZXJ2YWJsZTxhbnk+W10pIHtcbiAgICB0aGlzLml0ZW1zID0gaW5wdXRJdGVtcztcbiAgICAvL1Jlc2V0IHNsaWRlciB3aGVuIGNoYW5naW5nIHByb2R1Y3RzXG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkIGZvciBlYWNoIGl0ZW0sIHNvIHRoYXQgdGhlIGFjdHVhbFxuICAgKiB2aWV3IGNhbiBiZSBnaXZlbiBieSB0aGUgY29tcG9lbnQgdGhhdCB1c2VzIHRoZSBgQ2Fyb3VzZWxDb21wb25lbnRgLlxuICAgKi9cbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSBzaXplIG9mIHRoZSBjYXJvdXNlbCBpdGVtLCBlaXRoZXIgaW4gcHggb3IgJS5cbiAgICogVGhpcyB2YWx1ZSBpcyB1c2VkIGZvciB0aGUgY2FsY3VsYXRpb24gb2YgbnVtYmVycyBwZXIgY2Fyb3VzZWwsIHNvIHRoYXRcbiAgICogdGhlIG51bWJlciBvZiBjYXJvdXNlbCBpdGVtcyBpcyBkeW5hbWljLiBUaGUgY2FsY3VsYXRpb24gdXNlcyB0aGUgYGl0ZW1XaWR0aGBcbiAgICogYW5kIHRoZSBob3N0IGVsZW1lbnQgYGNsaWVudFdpZHRoYCwgc28gdGhhdCB0aGUgY2Fyb3VzZWwgaXMgcmV1c2FibGUgaW5cbiAgICogZGlmZmVyZW50IGxheW91dHMgKGZvciBleGFtcGxlIGluIGEgNTAlIGdyaWQpLlxuICAgKi9cbiAgQElucHV0KCkgaXRlbVdpZHRoID0gJzMwMHB4JztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpc3VhbCBpbmRpY2F0b3JzIGFyZSB1c2VkLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUluZGljYXRvcnMgPSBmYWxzZTtcblxuICBASW5wdXQoKSBpbmRpY2F0b3JJY29uID0gSUNPTl9UWVBFLkNJUkNMRTtcbiAgQElucHV0KCkgcHJldmlvdXNJY29uID0gSUNPTl9UWVBFLkNBUkVUX0xFRlQ7XG4gIEBJbnB1dCgpIG5leHRJY29uID0gSUNPTl9UWVBFLkNBUkVUX1JJR0hUO1xuXG4gIGFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gIHNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgc2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50ZW1wbGF0ZSAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ05vIHRlbXBsYXRlIHJlZmVyZW5jZSBwcm92aWRlZCB0byByZW5kZXIgdGhlIGNhcm91c2VsIGl0ZW1zIGZvciB0aGUgYGN4LWNhcm91c2VsYCdcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2l6ZSQgPSB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRJdGVtc1BlclNsaWRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pdGVtV2lkdGgpXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMuYWN0aXZlU2xpZGUgPSAwKSkpO1xuICB9XG59XG4iXX0=
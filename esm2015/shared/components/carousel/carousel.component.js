/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, isDevMode, TemplateRef, } from '@angular/core';
import { tap } from 'rxjs/operators';
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
export class CarouselComponent {
    /**
     * @param {?} el
     * @param {?} service
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap((/**
         * @return {?}
         */
        () => (this.activeSlide = 0))));
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-carousel',
                template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of (items | slice: i:i + size); let j = index\"\n          >\n            <div\n              *ngIf=\"(item | async) as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"0\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"0\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CarouselService }
];
CarouselComponent.propDecorators = {
    title: [{ type: Input }],
    items: [{ type: Input }],
    template: [{ type: Input }],
    itemWidth: [{ type: Input }],
    hideIndicators: [{ type: Input }],
    indicatorIcon: [{ type: Input }],
    previousIcon: [{ type: Input }],
    nextIcon: [{ type: Input }]
};
if (false) {
    /**
     * The title is rendered as the carousel heading.
     * @type {?}
     */
    CarouselComponent.prototype.title;
    /**
     * The items$ represent the carousel items. The items$ are
     * observables so that the itesm can be loaded on demand.
     * @type {?}
     */
    CarouselComponent.prototype.items;
    /**
     * The template is rendered for each item, so that the actual
     * view can be given by the compoent that uses the `CarouselComponent`.
     * @type {?}
     */
    CarouselComponent.prototype.template;
    /**
     * Specifies the minimum size of the carousel item, either in px or %.
     * This value is used for the calculation of numbers per carousel, so that
     * the number of carousel items is dynamic. The calculation uses the `itemWidth`
     * and the host element `clientWidth`, so that the carousel is reusable in
     * different layouts (for example in a 50% grid).
     * @type {?}
     */
    CarouselComponent.prototype.itemWidth;
    /**
     * Indicates whether the visual indicators are used.
     * @type {?}
     */
    CarouselComponent.prototype.hideIndicators;
    /** @type {?} */
    CarouselComponent.prototype.indicatorIcon;
    /** @type {?} */
    CarouselComponent.prototype.previousIcon;
    /** @type {?} */
    CarouselComponent.prototype.nextIcon;
    /** @type {?} */
    CarouselComponent.prototype.activeSlide;
    /** @type {?} */
    CarouselComponent.prototype.size$;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFFVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQnJELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBdUM1QixZQUFzQixFQUFjLEVBQVksT0FBd0I7UUFBbEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQWlCOzs7Ozs7OztRQWQvRCxjQUFTLEdBQUcsT0FBTyxDQUFDOzs7O1FBS3BCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGtCQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDcEMsYUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFLaUMsQ0FBQzs7OztJQUU1RSxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDakMsT0FBTyxDQUFDLEtBQUssQ0FDWCxtRkFBbUYsQ0FDcEYsQ0FBQztZQUNGLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDdEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2RCxJQUFJLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix1d0RBQXdDO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQTlCQyxVQUFVO1lBU0gsZUFBZTs7O29CQTBCckIsS0FBSztvQkFNTCxLQUFLO3VCQU1MLEtBQUs7d0JBU0wsS0FBSzs2QkFLTCxLQUFLOzRCQUVMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7Ozs7O0lBOUJOLGtDQUF1Qjs7Ozs7O0lBTXZCLGtDQUFrQzs7Ozs7O0lBTWxDLHFDQUFvQzs7Ozs7Ozs7O0lBU3BDLHNDQUE2Qjs7Ozs7SUFLN0IsMkNBQWdDOztJQUVoQywwQ0FBMEM7O0lBQzFDLHlDQUE2Qzs7SUFDN0MscUNBQTBDOztJQUUxQyx3Q0FBb0I7O0lBQ3BCLGtDQUEwQjs7Ozs7SUFFZCwrQkFBd0I7Ozs7O0lBQUUsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIGlzRGV2TW9kZSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcblxuLyoqXG4gKiBHZW5lcmljIGNhcm91c2VsIGNvbXBvbmVudCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlbmRlciBhbnkgY2Fyb3VzZWwgaXRlbXMsXG4gKiBzdWNoIGFzIHByb2R1Y3RzLCBpbWFnZXMsIGJhbm5lcnMsIG9yIGFueSBjb21wb25lbnQuIENhcm91c2VsIGl0ZW1zIGFyZVxuICogcmVuZGVyZWQgaW4gc28tY2FsbGVkIGNhcm91c2VsIHNsaWRlcywgYW5kIHRoZSBwcmV2aW91cy9uZXh0IGJ1dHRvbnMgYXMgd2VsbCBhc1xuICogdGhlIGluZGljYXRvci1idXR0b25zIGNhbiB1c2VkIHRvIG5hdmlnYXRlIHRoZSBzbGlkZXMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIGFuIGFycmF5IG9mIE9ic2VydmFibGVzIChgaXRlbXMkYCkgYXMgYW4gaW5wdXQsIHRvIGFsbG93XG4gKiBmb3IgbGF6eSBsb2FkaW5nIG9mIGl0ZW1zLlxuICpcbiAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHNsaWRlIGlzIGNhbGN1bGF0ZWQgd2l0aCB0aGUgYGl0ZW1XaWR0aGAsIHdoaWNoIGNhbiBnaXZlblxuICogaW4gcGl4ZWxzIG9yIHBlcmNlbnRhZ2UuXG4gKlxuICogVG8gYWxsb3cgZm9yIGZsZXhpYmxlIHJlbmRlcmluZyBvZiBpdGVtcywgdGhlIHJlbmRlcmluZyBpcyBkZWxlZ2F0ZWQgdG8gdGhlXG4gKiBnaXZlbiBgdGVtcGxhdGVgLiBUaGlzIGFsbG93cyBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHRpdGxlIGlzIHJlbmRlcmVkIGFzIHRoZSBjYXJvdXNlbCBoZWFkaW5nLlxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGl0ZW1zJCByZXByZXNlbnQgdGhlIGNhcm91c2VsIGl0ZW1zLiBUaGUgaXRlbXMkIGFyZVxuICAgKiBvYnNlcnZhYmxlcyBzbyB0aGF0IHRoZSBpdGVzbSBjYW4gYmUgbG9hZGVkIG9uIGRlbWFuZC5cbiAgICovXG4gIEBJbnB1dCgpIGl0ZW1zOiBPYnNlcnZhYmxlPGFueT5bXTtcblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkIGZvciBlYWNoIGl0ZW0sIHNvIHRoYXQgdGhlIGFjdHVhbFxuICAgKiB2aWV3IGNhbiBiZSBnaXZlbiBieSB0aGUgY29tcG9lbnQgdGhhdCB1c2VzIHRoZSBgQ2Fyb3VzZWxDb21wb25lbnRgLlxuICAgKi9cbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSBzaXplIG9mIHRoZSBjYXJvdXNlbCBpdGVtLCBlaXRoZXIgaW4gcHggb3IgJS5cbiAgICogVGhpcyB2YWx1ZSBpcyB1c2VkIGZvciB0aGUgY2FsY3VsYXRpb24gb2YgbnVtYmVycyBwZXIgY2Fyb3VzZWwsIHNvIHRoYXRcbiAgICogdGhlIG51bWJlciBvZiBjYXJvdXNlbCBpdGVtcyBpcyBkeW5hbWljLiBUaGUgY2FsY3VsYXRpb24gdXNlcyB0aGUgYGl0ZW1XaWR0aGBcbiAgICogYW5kIHRoZSBob3N0IGVsZW1lbnQgYGNsaWVudFdpZHRoYCwgc28gdGhhdCB0aGUgY2Fyb3VzZWwgaXMgcmV1c2FibGUgaW5cbiAgICogZGlmZmVyZW50IGxheW91dHMgKGZvciBleGFtcGxlIGluIGEgNTAlIGdyaWQpLlxuICAgKi9cbiAgQElucHV0KCkgaXRlbVdpZHRoID0gJzMwMHB4JztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpc3VhbCBpbmRpY2F0b3JzIGFyZSB1c2VkLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUluZGljYXRvcnMgPSBmYWxzZTtcblxuICBASW5wdXQoKSBpbmRpY2F0b3JJY29uID0gSUNPTl9UWVBFLkNJUkNMRTtcbiAgQElucHV0KCkgcHJldmlvdXNJY29uID0gSUNPTl9UWVBFLkNBUkVUX0xFRlQ7XG4gIEBJbnB1dCgpIG5leHRJY29uID0gSUNPTl9UWVBFLkNBUkVUX1JJR0hUO1xuXG4gIGFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gIHNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgc2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50ZW1wbGF0ZSAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ05vIHRlbXBsYXRlIHJlZmVyZW5jZSBwcm92aWRlZCB0byByZW5kZXIgdGhlIGNhcm91c2VsIGl0ZW1zIGZvciB0aGUgYGN4LWNhcm91c2VsYCdcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2l6ZSQgPSB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRJdGVtc1BlclNsaWRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pdGVtV2lkdGgpXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMuYWN0aXZlU2xpZGUgPSAwKSkpO1xuICB9XG59XG4iXX0=
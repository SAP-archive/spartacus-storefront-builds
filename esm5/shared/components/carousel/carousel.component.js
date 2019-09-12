/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el, service) {
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
    Object.defineProperty(CarouselComponent.prototype, "setItems", {
        set: /**
         * @param {?} inputItems
         * @return {?}
         */
        function (inputItems) {
            this.items = inputItems;
            //Reset slider when changing products
            this.activeSlide = 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap((/**
         * @return {?}
         */
        function () { return (_this.activeSlide = 0); })));
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-carousel',
                    template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"0\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"0\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CarouselService }
    ]; };
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
    return CarouselComponent;
}());
export { CarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFFVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJEO0lBa0RFLDJCQUFzQixFQUFjLEVBQVksT0FBd0I7UUFBbEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQWlCOzs7Ozs7OztRQWQvRCxjQUFTLEdBQUcsT0FBTyxDQUFDOzs7O1FBS3BCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGtCQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDcEMsYUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFLaUMsQ0FBQztJQWxDNUUsc0JBQ0ksdUNBQVE7Ozs7O1FBRFosVUFDYSxVQUE2QjtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUN4QixxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7SUErQkQsb0NBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsS0FBSyxDQUNYLG1GQUFtRixDQUNwRixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTzthQUN0QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZELElBQUksQ0FBQyxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qixtd0RBQXdDO29CQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBOUJDLFVBQVU7Z0JBU0gsZUFBZTs7O3dCQTBCckIsS0FBSzsyQkFPTCxLQUFLLFNBQUMsT0FBTzsyQkFXYixLQUFLOzRCQVNMLEtBQUs7aUNBS0wsS0FBSztnQ0FFTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFrQlIsd0JBQUM7Q0FBQSxBQS9ERCxJQStEQztTQTFEWSxpQkFBaUI7Ozs7OztJQUk1QixrQ0FBdUI7Ozs7OztJQU12QixrQ0FBeUI7Ozs7OztJQVl6QixxQ0FBb0M7Ozs7Ozs7OztJQVNwQyxzQ0FBNkI7Ozs7O0lBSzdCLDJDQUFnQzs7SUFFaEMsMENBQTBDOztJQUMxQyx5Q0FBNkM7O0lBQzdDLHFDQUEwQzs7SUFFMUMsd0NBQW9COztJQUNwQixrQ0FBMEI7Ozs7O0lBRWQsK0JBQXdCOzs7OztJQUFFLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG5cbi8qKlxuICogR2VuZXJpYyBjYXJvdXNlbCBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byByZW5kZXIgYW55IGNhcm91c2VsIGl0ZW1zLFxuICogc3VjaCBhcyBwcm9kdWN0cywgaW1hZ2VzLCBiYW5uZXJzLCBvciBhbnkgY29tcG9uZW50LiBDYXJvdXNlbCBpdGVtcyBhcmVcbiAqIHJlbmRlcmVkIGluIHNvLWNhbGxlZCBjYXJvdXNlbCBzbGlkZXMsIGFuZCB0aGUgcHJldmlvdXMvbmV4dCBidXR0b25zIGFzIHdlbGwgYXNcbiAqIHRoZSBpbmRpY2F0b3ItYnV0dG9ucyBjYW4gdXNlZCB0byBuYXZpZ2F0ZSB0aGUgc2xpZGVzLlxuICpcbiAqIFRoZSBjb21wb25lbnQgdXNlcyBhbiBhcnJheSBvZiBPYnNlcnZhYmxlcyAoYGl0ZW1zJGApIGFzIGFuIGlucHV0LCB0byBhbGxvd1xuICogZm9yIGxhenkgbG9hZGluZyBvZiBpdGVtcy5cbiAqXG4gKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBzbGlkZSBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGBpdGVtV2lkdGhgLCB3aGljaCBjYW4gZ2l2ZW5cbiAqIGluIHBpeGVscyBvciBwZXJjZW50YWdlLlxuICpcbiAqIFRvIGFsbG93IGZvciBmbGV4aWJsZSByZW5kZXJpbmcgb2YgaXRlbXMsIHRoZSByZW5kZXJpbmcgaXMgZGVsZWdhdGVkIHRvIHRoZVxuICogZ2l2ZW4gYHRlbXBsYXRlYC4gVGhpcyBhbGxvd3MgZm9yIG1heGltdW0gZmxleGliaWxpdHkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBpcyByZW5kZXJlZCBhcyB0aGUgY2Fyb3VzZWwgaGVhZGluZy5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtcyQgcmVwcmVzZW50IHRoZSBjYXJvdXNlbCBpdGVtcy4gVGhlIGl0ZW1zJCBhcmVcbiAgICogb2JzZXJ2YWJsZXMgc28gdGhhdCB0aGUgaXRlc20gY2FuIGJlIGxvYWRlZCBvbiBkZW1hbmQuXG4gICAqL1xuICBpdGVtczogT2JzZXJ2YWJsZTxhbnk+W107XG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgc2V0SXRlbXMoaW5wdXRJdGVtczogT2JzZXJ2YWJsZTxhbnk+W10pIHtcbiAgICB0aGlzLml0ZW1zID0gaW5wdXRJdGVtcztcbiAgICAvL1Jlc2V0IHNsaWRlciB3aGVuIGNoYW5naW5nIHByb2R1Y3RzXG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkIGZvciBlYWNoIGl0ZW0sIHNvIHRoYXQgdGhlIGFjdHVhbFxuICAgKiB2aWV3IGNhbiBiZSBnaXZlbiBieSB0aGUgY29tcG9lbnQgdGhhdCB1c2VzIHRoZSBgQ2Fyb3VzZWxDb21wb25lbnRgLlxuICAgKi9cbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSBzaXplIG9mIHRoZSBjYXJvdXNlbCBpdGVtLCBlaXRoZXIgaW4gcHggb3IgJS5cbiAgICogVGhpcyB2YWx1ZSBpcyB1c2VkIGZvciB0aGUgY2FsY3VsYXRpb24gb2YgbnVtYmVycyBwZXIgY2Fyb3VzZWwsIHNvIHRoYXRcbiAgICogdGhlIG51bWJlciBvZiBjYXJvdXNlbCBpdGVtcyBpcyBkeW5hbWljLiBUaGUgY2FsY3VsYXRpb24gdXNlcyB0aGUgYGl0ZW1XaWR0aGBcbiAgICogYW5kIHRoZSBob3N0IGVsZW1lbnQgYGNsaWVudFdpZHRoYCwgc28gdGhhdCB0aGUgY2Fyb3VzZWwgaXMgcmV1c2FibGUgaW5cbiAgICogZGlmZmVyZW50IGxheW91dHMgKGZvciBleGFtcGxlIGluIGEgNTAlIGdyaWQpLlxuICAgKi9cbiAgQElucHV0KCkgaXRlbVdpZHRoID0gJzMwMHB4JztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpc3VhbCBpbmRpY2F0b3JzIGFyZSB1c2VkLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUluZGljYXRvcnMgPSBmYWxzZTtcblxuICBASW5wdXQoKSBpbmRpY2F0b3JJY29uID0gSUNPTl9UWVBFLkNJUkNMRTtcbiAgQElucHV0KCkgcHJldmlvdXNJY29uID0gSUNPTl9UWVBFLkNBUkVUX0xFRlQ7XG4gIEBJbnB1dCgpIG5leHRJY29uID0gSUNPTl9UWVBFLkNBUkVUX1JJR0hUO1xuXG4gIGFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gIHNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgc2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50ZW1wbGF0ZSAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ05vIHRlbXBsYXRlIHJlZmVyZW5jZSBwcm92aWRlZCB0byByZW5kZXIgdGhlIGNhcm91c2VsIGl0ZW1zIGZvciB0aGUgYGN4LWNhcm91c2VsYCdcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2l6ZSQgPSB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRJdGVtc1BlclNsaWRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pdGVtV2lkdGgpXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMuYWN0aXZlU2xpZGUgPSAwKSkpO1xuICB9XG59XG4iXX0=
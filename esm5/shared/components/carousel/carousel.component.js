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
                    template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of (items | slice: i:i + size); let j = index\"\n          >\n            <div\n              *ngIf=\"(item | async) as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"0\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"0\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
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
        items: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFFVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJEO0lBNENFLDJCQUFzQixFQUFjLEVBQVksT0FBd0I7UUFBbEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQWlCOzs7Ozs7OztRQWQvRCxjQUFTLEdBQUcsT0FBTyxDQUFDOzs7O1FBS3BCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGtCQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDcEMsYUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFLaUMsQ0FBQzs7OztJQUU1RSxvQ0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQ1gsbUZBQW1GLENBQ3BGLENBQUM7WUFDRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ3RCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkQsSUFBSSxDQUFDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHV3REFBd0M7b0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkE5QkMsVUFBVTtnQkFTSCxlQUFlOzs7d0JBMEJyQixLQUFLO3dCQU1MLEtBQUs7MkJBTUwsS0FBSzs0QkFTTCxLQUFLO2lDQUtMLEtBQUs7Z0NBRUwsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBa0JSLHdCQUFDO0NBQUEsQUF6REQsSUF5REM7U0FwRFksaUJBQWlCOzs7Ozs7SUFJNUIsa0NBQXVCOzs7Ozs7SUFNdkIsa0NBQWtDOzs7Ozs7SUFNbEMscUNBQW9DOzs7Ozs7Ozs7SUFTcEMsc0NBQTZCOzs7OztJQUs3QiwyQ0FBZ0M7O0lBRWhDLDBDQUEwQzs7SUFDMUMseUNBQTZDOztJQUM3QyxxQ0FBMEM7O0lBRTFDLHdDQUFvQjs7SUFDcEIsa0NBQTBCOzs7OztJQUVkLCtCQUF3Qjs7Ozs7SUFBRSxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuXG4vKipcbiAqIEdlbmVyaWMgY2Fyb3VzZWwgY29tcG9uZW50IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVuZGVyIGFueSBjYXJvdXNlbCBpdGVtcyxcbiAqIHN1Y2ggYXMgcHJvZHVjdHMsIGltYWdlcywgYmFubmVycywgb3IgYW55IGNvbXBvbmVudC4gQ2Fyb3VzZWwgaXRlbXMgYXJlXG4gKiByZW5kZXJlZCBpbiBzby1jYWxsZWQgY2Fyb3VzZWwgc2xpZGVzLCBhbmQgdGhlIHByZXZpb3VzL25leHQgYnV0dG9ucyBhcyB3ZWxsIGFzXG4gKiB0aGUgaW5kaWNhdG9yLWJ1dHRvbnMgY2FuIHVzZWQgdG8gbmF2aWdhdGUgdGhlIHNsaWRlcy5cbiAqXG4gKiBUaGUgY29tcG9uZW50IHVzZXMgYW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXMgKGBpdGVtcyRgKSBhcyBhbiBpbnB1dCwgdG8gYWxsb3dcbiAqIGZvciBsYXp5IGxvYWRpbmcgb2YgaXRlbXMuXG4gKlxuICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgc2xpZGUgaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSBgaXRlbVdpZHRoYCwgd2hpY2ggY2FuIGdpdmVuXG4gKiBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZS5cbiAqXG4gKiBUbyBhbGxvdyBmb3IgZmxleGlibGUgcmVuZGVyaW5nIG9mIGl0ZW1zLCB0aGUgcmVuZGVyaW5nIGlzIGRlbGVnYXRlZCB0byB0aGVcbiAqIGdpdmVuIGB0ZW1wbGF0ZWAuIFRoaXMgYWxsb3dzIGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgaXMgcmVuZGVyZWQgYXMgdGhlIGNhcm91c2VsIGhlYWRpbmcuXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaXRlbXMkIHJlcHJlc2VudCB0aGUgY2Fyb3VzZWwgaXRlbXMuIFRoZSBpdGVtcyQgYXJlXG4gICAqIG9ic2VydmFibGVzIHNvIHRoYXQgdGhlIGl0ZXNtIGNhbiBiZSBsb2FkZWQgb24gZGVtYW5kLlxuICAgKi9cbiAgQElucHV0KCkgaXRlbXM6IE9ic2VydmFibGU8YW55PltdO1xuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgZm9yIGVhY2ggaXRlbSwgc28gdGhhdCB0aGUgYWN0dWFsXG4gICAqIHZpZXcgY2FuIGJlIGdpdmVuIGJ5IHRoZSBjb21wb2VudCB0aGF0IHVzZXMgdGhlIGBDYXJvdXNlbENvbXBvbmVudGAuXG4gICAqL1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHNpemUgb2YgdGhlIGNhcm91c2VsIGl0ZW0sIGVpdGhlciBpbiBweCBvciAlLlxuICAgKiBUaGlzIHZhbHVlIGlzIHVzZWQgZm9yIHRoZSBjYWxjdWxhdGlvbiBvZiBudW1iZXJzIHBlciBjYXJvdXNlbCwgc28gdGhhdFxuICAgKiB0aGUgbnVtYmVyIG9mIGNhcm91c2VsIGl0ZW1zIGlzIGR5bmFtaWMuIFRoZSBjYWxjdWxhdGlvbiB1c2VzIHRoZSBgaXRlbVdpZHRoYFxuICAgKiBhbmQgdGhlIGhvc3QgZWxlbWVudCBgY2xpZW50V2lkdGhgLCBzbyB0aGF0IHRoZSBjYXJvdXNlbCBpcyByZXVzYWJsZSBpblxuICAgKiBkaWZmZXJlbnQgbGF5b3V0cyAoZm9yIGV4YW1wbGUgaW4gYSA1MCUgZ3JpZCkuXG4gICAqL1xuICBASW5wdXQoKSBpdGVtV2lkdGggPSAnMzAwcHgnO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlzdWFsIGluZGljYXRvcnMgYXJlIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlSW5kaWNhdG9ycyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGluZGljYXRvckljb24gPSBJQ09OX1RZUEUuQ0lSQ0xFO1xuICBASW5wdXQoKSBwcmV2aW91c0ljb24gPSBJQ09OX1RZUEUuQ0FSRVRfTEVGVDtcbiAgQElucHV0KCkgbmV4dEljb24gPSBJQ09OX1RZUEUuQ0FSRVRfUklHSFQ7XG5cbiAgYWN0aXZlU2xpZGU6IG51bWJlcjtcbiAgc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTm8gdGVtcGxhdGUgcmVmZXJlbmNlIHByb3ZpZGVkIHRvIHJlbmRlciB0aGUgY2Fyb3VzZWwgaXRlbXMgZm9yIHRoZSBgY3gtY2Fyb3VzZWxgJ1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaXplJCA9IHRoaXMuc2VydmljZVxuICAgICAgLmdldEl0ZW1zUGVyU2xpZGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLml0ZW1XaWR0aClcbiAgICAgIC5waXBlKHRhcCgoKSA9PiAodGhpcy5hY3RpdmVTbGlkZSA9IDApKSk7XG4gIH1cbn1cbiJdfQ==
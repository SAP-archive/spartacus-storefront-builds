import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, isDevMode, OnInit, TemplateRef, } from '@angular/core';
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
let CarouselComponent = class CarouselComponent {
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
};
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CarouselService }
];
__decorate([
    Input()
], CarouselComponent.prototype, "title", void 0);
__decorate([
    Input('items')
], CarouselComponent.prototype, "setItems", null);
__decorate([
    Input()
], CarouselComponent.prototype, "template", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "itemWidth", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "hideIndicators", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "indicatorIcon", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "previousIcon", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "nextIcon", void 0);
CarouselComponent = __decorate([
    Component({
        selector: 'cx-carousel',
        template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"-1\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"-1\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBTUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUE2QzVCLFlBQXNCLEVBQWMsRUFBWSxPQUF3QjtRQUFsRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVksWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFyQnhFOzs7Ozs7V0FNRztRQUNNLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFFN0I7O1dBRUc7UUFDTSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixrQkFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakMsaUJBQVksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBS2lDLENBQUM7SUFqQzVFLElBQUksUUFBUSxDQUFDLFVBQTZCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBK0JELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsS0FBSyxDQUNYLG1GQUFtRixDQUNwRixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTzthQUN0QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0YsQ0FBQTs7WUFiMkIsVUFBVTtZQUFxQixlQUFlOztBQXpDL0Q7SUFBUixLQUFLLEVBQUU7Z0RBQWU7QUFRdkI7SUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lEQUtkO0FBTVE7SUFBUixLQUFLLEVBQUU7bURBQTRCO0FBUzNCO0lBQVIsS0FBSyxFQUFFO29EQUFxQjtBQUtwQjtJQUFSLEtBQUssRUFBRTt5REFBd0I7QUFFdkI7SUFBUixLQUFLLEVBQUU7d0RBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFO3VEQUFxQztBQUNwQztJQUFSLEtBQUssRUFBRTttREFBa0M7QUF4Qy9CLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2Qixxd0RBQXdDO1FBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxpQkFBaUIsQ0EwRDdCO1NBMURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcblxuLyoqXG4gKiBHZW5lcmljIGNhcm91c2VsIGNvbXBvbmVudCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlbmRlciBhbnkgY2Fyb3VzZWwgaXRlbXMsXG4gKiBzdWNoIGFzIHByb2R1Y3RzLCBpbWFnZXMsIGJhbm5lcnMsIG9yIGFueSBjb21wb25lbnQuIENhcm91c2VsIGl0ZW1zIGFyZVxuICogcmVuZGVyZWQgaW4gc28tY2FsbGVkIGNhcm91c2VsIHNsaWRlcywgYW5kIHRoZSBwcmV2aW91cy9uZXh0IGJ1dHRvbnMgYXMgd2VsbCBhc1xuICogdGhlIGluZGljYXRvci1idXR0b25zIGNhbiB1c2VkIHRvIG5hdmlnYXRlIHRoZSBzbGlkZXMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIGFuIGFycmF5IG9mIE9ic2VydmFibGVzIChgaXRlbXMkYCkgYXMgYW4gaW5wdXQsIHRvIGFsbG93XG4gKiBmb3IgbGF6eSBsb2FkaW5nIG9mIGl0ZW1zLlxuICpcbiAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHNsaWRlIGlzIGNhbGN1bGF0ZWQgd2l0aCB0aGUgYGl0ZW1XaWR0aGAsIHdoaWNoIGNhbiBnaXZlblxuICogaW4gcGl4ZWxzIG9yIHBlcmNlbnRhZ2UuXG4gKlxuICogVG8gYWxsb3cgZm9yIGZsZXhpYmxlIHJlbmRlcmluZyBvZiBpdGVtcywgdGhlIHJlbmRlcmluZyBpcyBkZWxlZ2F0ZWQgdG8gdGhlXG4gKiBnaXZlbiBgdGVtcGxhdGVgLiBUaGlzIGFsbG93cyBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHRpdGxlIGlzIHJlbmRlcmVkIGFzIHRoZSBjYXJvdXNlbCBoZWFkaW5nLlxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGl0ZW1zJCByZXByZXNlbnQgdGhlIGNhcm91c2VsIGl0ZW1zLiBUaGUgaXRlbXMkIGFyZVxuICAgKiBvYnNlcnZhYmxlcyBzbyB0aGF0IHRoZSBpdGVtcyBjYW4gYmUgbG9hZGVkIG9uIGRlbWFuZC5cbiAgICovXG4gIGl0ZW1zOiBPYnNlcnZhYmxlPGFueT5bXTtcbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBzZXRJdGVtcyhpbnB1dEl0ZW1zOiBPYnNlcnZhYmxlPGFueT5bXSkge1xuICAgIHRoaXMuaXRlbXMgPSBpbnB1dEl0ZW1zO1xuICAgIC8vUmVzZXQgc2xpZGVyIHdoZW4gY2hhbmdpbmcgcHJvZHVjdHNcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgZm9yIGVhY2ggaXRlbSwgc28gdGhhdCB0aGUgYWN0dWFsXG4gICAqIHZpZXcgY2FuIGJlIGdpdmVuIGJ5IHRoZSBjb21wb2VudCB0aGF0IHVzZXMgdGhlIGBDYXJvdXNlbENvbXBvbmVudGAuXG4gICAqL1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHNpemUgb2YgdGhlIGNhcm91c2VsIGl0ZW0sIGVpdGhlciBpbiBweCBvciAlLlxuICAgKiBUaGlzIHZhbHVlIGlzIHVzZWQgZm9yIHRoZSBjYWxjdWxhdGlvbiBvZiBudW1iZXJzIHBlciBjYXJvdXNlbCwgc28gdGhhdFxuICAgKiB0aGUgbnVtYmVyIG9mIGNhcm91c2VsIGl0ZW1zIGlzIGR5bmFtaWMuIFRoZSBjYWxjdWxhdGlvbiB1c2VzIHRoZSBgaXRlbVdpZHRoYFxuICAgKiBhbmQgdGhlIGhvc3QgZWxlbWVudCBgY2xpZW50V2lkdGhgLCBzbyB0aGF0IHRoZSBjYXJvdXNlbCBpcyByZXVzYWJsZSBpblxuICAgKiBkaWZmZXJlbnQgbGF5b3V0cyAoZm9yIGV4YW1wbGUgaW4gYSA1MCUgZ3JpZCkuXG4gICAqL1xuICBASW5wdXQoKSBpdGVtV2lkdGggPSAnMzAwcHgnO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlzdWFsIGluZGljYXRvcnMgYXJlIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlSW5kaWNhdG9ycyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGluZGljYXRvckljb24gPSBJQ09OX1RZUEUuQ0lSQ0xFO1xuICBASW5wdXQoKSBwcmV2aW91c0ljb24gPSBJQ09OX1RZUEUuQ0FSRVRfTEVGVDtcbiAgQElucHV0KCkgbmV4dEljb24gPSBJQ09OX1RZUEUuQ0FSRVRfUklHSFQ7XG5cbiAgYWN0aXZlU2xpZGU6IG51bWJlcjtcbiAgc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTm8gdGVtcGxhdGUgcmVmZXJlbmNlIHByb3ZpZGVkIHRvIHJlbmRlciB0aGUgY2Fyb3VzZWwgaXRlbXMgZm9yIHRoZSBgY3gtY2Fyb3VzZWxgJ1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaXplJCA9IHRoaXMuc2VydmljZVxuICAgICAgLmdldEl0ZW1zUGVyU2xpZGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLml0ZW1XaWR0aClcbiAgICAgIC5waXBlKHRhcCgoKSA9PiAodGhpcy5hY3RpdmVTbGlkZSA9IDApKSk7XG4gIH1cbn1cbiJdfQ==
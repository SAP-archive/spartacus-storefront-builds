/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { ProductCarouselService } from './product-carousel.component.service';
export class ProductCarouselComponent {
    /**
     * @param {?} winRef
     * @param {?} el
     * @param {?} service
     */
    constructor(winRef, el, service) {
        this.el = el;
        this.service = service;
        this.window = winRef.nativeWindow;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service.setTitle();
        this.service.setItemSize(this.window, this.el.nativeElement);
        this.service.setItems();
        this.service.setItemAsActive(0);
    }
}
ProductCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-carousel',
                template: "<h3 *ngIf=\"(service.getTitle() | async) as title\">{{ title }}</h3>\n\n<ng-container\n  *ngIf=\"{\n    maxItemSize: service.getItemSize() | async,\n    products: service.getItems() | async,\n    activeItem: service.getActiveItemWithDelay() | async,\n    active: service.getActiveItem() | async\n  } as carousel\"\n>\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n    <button\n      class=\"previous\"\n      (click)=\"service.setPreviousItemAsActive()\"\n      [disabled]=\"carousel.activeItem === 0\"\n    ></button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n        <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n          <ng-container\n            *ngFor=\"\n              let product$ of (carousel.products\n                | slice: i:i + carousel.maxItemSize)\n            \"\n          >\n            <a\n              *ngIf=\"(product$ | async) as product\"\n              class=\"product\"\n              [class.active]=\"i === carousel.activeItem\"\n              [routerLink]=\"\n                { route: 'product', params: product } | cxTranslateUrl\n              \"\n            >\n              <cx-media [container]=\"product.images?.PRIMARY\" format=\"product\">\n              </cx-media>\n\n              <h4>{{ product.name }}</h4>\n              <div class=\"price\">{{ product.price?.formattedValue }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      class=\"next\"\n      (click)=\"service.setNextItemAsActive()\"\n      [disabled]=\"\n        carousel.activeItem > carousel.products.length - carousel.maxItemSize\n      \"\n    ></button>\n  </div>\n\n  <div class=\"indicators\">\n    <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n      <button\n        *ngIf=\"i % carousel.maxItemSize === 0\"\n        (click)=\"service.setItemAsActive(i)\"\n        [disabled]=\"i === carousel.activeItem\"\n      ></button>\n    </ng-container></div\n></ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductCarouselComponent.ctorParameters = () => [
    { type: WindowRef },
    { type: ElementRef },
    { type: ProductCarouselService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductCarouselComponent.prototype.window;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselComponent.prototype.el;
    /** @type {?} */
    ProductCarouselComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9wcm9kdWN0LWNhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTzlFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUduQyxZQUNFLE1BQWlCLEVBQ1QsRUFBYyxFQUNmLE9BQStCO1FBRDlCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsaWtFQUFnRDtnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxTQUFTO1lBSGhCLFVBQVU7WUFJSCxzQkFBc0I7Ozs7Ozs7SUFRN0IsMENBQXVCOzs7OztJQUlyQixzQ0FBc0I7O0lBQ3RCLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHdpbmRvdzogV2luZG93O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHNlcnZpY2U6IFByb2R1Y3RDYXJvdXNlbFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldFRpdGxlKCk7XG4gICAgdGhpcy5zZXJ2aWNlLnNldEl0ZW1TaXplKHRoaXMud2luZG93LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc2VydmljZS5zZXRJdGVtcygpO1xuICAgIHRoaXMuc2VydmljZS5zZXRJdGVtQXNBY3RpdmUoMCk7XG4gIH1cbn1cbiJdfQ==
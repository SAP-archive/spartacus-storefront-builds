/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { ProductCarouselService } from './product-carousel.component.service';
var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(winRef, el, service) {
        this.el = el;
        this.service = service;
        this.window = winRef.nativeWindow;
    }
    /**
     * @return {?}
     */
    ProductCarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.setTitle();
        this.service.setItemSize(this.window, this.el.nativeElement);
        this.service.setItems();
        this.service.setItemAsActive(0);
    };
    ProductCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-carousel',
                    template: "<h3 *ngIf=\"(service.getTitle() | async) as title\">{{ title }}</h3>\n\n<ng-container\n  *ngIf=\"{\n    maxItemSize: service.getItemSize() | async,\n    products: service.getItems() | async,\n    activeItem: service.getActiveItemWithDelay() | async,\n    active: service.getActiveItem() | async\n  } as carousel\"\n>\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n    <button\n      class=\"previous\"\n      (click)=\"service.setPreviousItemAsActive()\"\n      [disabled]=\"carousel.activeItem === 0\"\n    ></button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n        <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n          <ng-container\n            *ngFor=\"\n              let product$ of (carousel.products\n                | slice: i:i + carousel.maxItemSize)\n            \"\n          >\n            <a\n              *ngIf=\"(product$ | async) as product\"\n              class=\"product\"\n              [class.active]=\"i === carousel.activeItem\"\n              [routerLink]=\"\n                { route: 'product', params: product } | cxTranslateUrl\n              \"\n            >\n              <cx-media [container]=\"product.images?.PRIMARY\" format=\"product\">\n              </cx-media>\n\n              <h4>{{ product.name }}</h4>\n              <div class=\"price\">{{ product.price?.formattedValue }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      class=\"next\"\n      (click)=\"service.setNextItemAsActive()\"\n      [disabled]=\"\n        carousel.activeItem > carousel.products.length - carousel.maxItemSize\n      \"\n    ></button>\n  </div>\n\n  <div class=\"indicators\">\n    <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n      <button\n        *ngIf=\"i % carousel.maxItemSize === 0\"\n        (click)=\"service.setItemAsActive(i)\"\n        [disabled]=\"i === carousel.activeItem\"\n      ></button>\n    </ng-container></div\n></ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductCarouselComponent.ctorParameters = function () { return [
        { type: WindowRef },
        { type: ElementRef },
        { type: ProductCarouselService }
    ]; };
    return ProductCarouselComponent;
}());
export { ProductCarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUU7SUFRRSxrQ0FDRSxNQUFpQixFQUNULEVBQWMsRUFDZixPQUErQjtRQUQ5QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsaWtFQUFnRDtvQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLFNBQVM7Z0JBSGhCLFVBQVU7Z0JBSUgsc0JBQXNCOztJQXdCL0IsK0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSx3QkFBd0I7Ozs7OztJQUNuQywwQ0FBdUI7Ozs7O0lBSXJCLHNDQUFzQjs7SUFDdEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgd2luZG93OiBXaW5kb3c7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgc2VydmljZTogUHJvZHVjdENhcm91c2VsU2VydmljZVxuICApIHtcbiAgICB0aGlzLndpbmRvdyA9IHdpblJlZi5uYXRpdmVXaW5kb3c7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0VGl0bGUoKTtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0SXRlbVNpemUodGhpcy53aW5kb3csIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zZXJ2aWNlLnNldEl0ZW1zKCk7XG4gICAgdGhpcy5zZXJ2aWNlLnNldEl0ZW1Bc0FjdGl2ZSgwKTtcbiAgfVxufVxuIl19
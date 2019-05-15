/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { SharedCarouselService } from '../shared-carousel.service';
import { ProductCarouselService } from './product-carousel.component.service';
export class ProductCarouselComponent {
    /**
     * @param {?} winRef
     * @param {?} el
     * @param {?} productCarouselService
     * @param {?} sharedCarouselService
     */
    constructor(winRef, el, productCarouselService, sharedCarouselService) {
        this.el = el;
        this.productCarouselService = productCarouselService;
        this.sharedCarouselService = sharedCarouselService;
        this.window = winRef.nativeWindow;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.productCarouselService.fetchTitle();
        this.sharedCarouselService.setItemSize(this.window, this.el.nativeElement);
        this.productCarouselService.fetchItems();
        this.sharedCarouselService.setItemAsActive(0);
    }
}
ProductCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-carousel',
                template: "<h3 *ngIf=\"(productCarouselService.getTitle() | async) as title\">\n  {{ title }}\n</h3>\n\n<ng-container\n  *ngIf=\"{\n    maxItemSize: sharedCarouselService.getItemSize() | async,\n    products: productCarouselService.getItems() | async,\n    activeItem: sharedCarouselService.getActiveItemWithDelay() | async,\n    active: sharedCarouselService.getActiveItem() | async\n  } as carousel\"\n>\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n    <button\n      class=\"previous\"\n      (click)=\"sharedCarouselService.setPreviousItemAsActive()\"\n      [disabled]=\"carousel.activeItem === 0\"\n    ></button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n        <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n          <ng-container\n            *ngFor=\"\n              let product$ of (carousel.products\n                | slice: i:i + carousel.maxItemSize)\n            \"\n          >\n            <a\n              *ngIf=\"(product$ | async) as product\"\n              class=\"product\"\n              [class.active]=\"i === carousel.activeItem\"\n              [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n            >\n              <cx-media [container]=\"product.images?.PRIMARY\" format=\"product\">\n              </cx-media>\n\n              <h4>{{ product.name }}</h4>\n              <div class=\"price\">{{ product.price?.formattedValue }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      class=\"next\"\n      (click)=\"sharedCarouselService.setNextItemAsActive()\"\n      [disabled]=\"\n        carousel.activeItem > carousel.products.length - carousel.maxItemSize\n      \"\n    ></button>\n  </div>\n\n  <div class=\"indicators\">\n    <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n      <button\n        *ngIf=\"i % carousel.maxItemSize === 0\"\n        (click)=\"sharedCarouselService.setItemAsActive(i)\"\n        [disabled]=\"i === carousel.activeItem\"\n      ></button>\n    </ng-container></div\n></ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductCarouselComponent.ctorParameters = () => [
    { type: WindowRef },
    { type: ElementRef },
    { type: ProductCarouselService },
    { type: SharedCarouselService }
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
    ProductCarouselComponent.prototype.productCarouselService;
    /** @type {?} */
    ProductCarouselComponent.prototype.sharedCarouselService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPOUUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQUduQyxZQUNFLE1BQWlCLEVBQ1QsRUFBYyxFQUNmLHNCQUE4QyxFQUM5QyxxQkFBNEM7UUFGM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNmLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUVuRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixncEVBQWdEO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVJRLFNBQVM7WUFIaEIsVUFBVTtZQUtILHNCQUFzQjtZQUR0QixxQkFBcUI7Ozs7Ozs7SUFTNUIsMENBQXVCOzs7OztJQUlyQixzQ0FBc0I7O0lBQ3RCLDBEQUFxRDs7SUFDckQseURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQtY2Fyb3VzZWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgd2luZG93OiBXaW5kb3c7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcHJvZHVjdENhcm91c2VsU2VydmljZTogUHJvZHVjdENhcm91c2VsU2VydmljZSxcbiAgICBwdWJsaWMgc2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlOiBTaGFyZWRDYXJvdXNlbFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlLmZldGNoVGl0bGUoKTtcbiAgICB0aGlzLnNoYXJlZENhcm91c2VsU2VydmljZS5zZXRJdGVtU2l6ZSh0aGlzLndpbmRvdywgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnByb2R1Y3RDYXJvdXNlbFNlcnZpY2UuZmV0Y2hJdGVtcygpO1xuICAgIHRoaXMuc2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlLnNldEl0ZW1Bc0FjdGl2ZSgwKTtcbiAgfVxufVxuIl19
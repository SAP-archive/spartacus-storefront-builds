/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { SharedCarouselService } from '../shared-carousel.service';
import { ProductReferencesService } from './product-references.component.service';
export class ProductReferencesComponent {
    /**
     * @param {?} winRef
     * @param {?} el
     * @param {?} productReferencesService
     * @param {?} sharedCarouselService
     */
    constructor(winRef, el, productReferencesService, sharedCarouselService) {
        this.el = el;
        this.productReferencesService = productReferencesService;
        this.sharedCarouselService = sharedCarouselService;
        this.window = winRef.nativeWindow;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.productReferencesService.fetchTitle();
        this.productReferencesService.fetchDisplayProductTitles();
        this.productReferencesService.fetchDisplayProductPrices();
        this.sharedCarouselService.setItemSize(this.window, this.el.nativeElement);
        this.productReferencesService.setReferenceList();
        this.sharedCarouselService.setItemAsActive(0);
    }
}
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "<ng-container\n  *ngIf=\"(productReferencesService.getReferenceList() | async) as productList\"\n>\n  <ng-container *ngIf=\"productList.length !== 0\">\n    <h3\n      *ngIf=\"\n        (productReferencesService.getDisplayProductTitles() | async) &&\n        (productReferencesService.getTitle() | async) as title\n      \"\n    >\n      {{ title }}\n    </h3>\n\n    <ng-container\n      *ngIf=\"{\n        maxItemSize: sharedCarouselService.getItemSize() | async,\n        products: productList,\n        activeItem: sharedCarouselService.getActiveItemWithDelay() | async,\n        active: sharedCarouselService.getActiveItem() | async\n      } as carousel\"\n    >\n      <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n        <button\n          class=\"previous\"\n          (click)=\"sharedCarouselService.setPreviousItemAsActive()\"\n          [disabled]=\"carousel.activeItem === 0\"\n        ></button>\n\n        <div class=\"groups\">\n          <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n            <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n              <ng-container\n                *ngFor=\"\n                  let products of (carousel.products\n                    | slice: i:i + carousel.maxItemSize)\n                \"\n              >\n                <a\n                  *ngIf=\"products.target as product\"\n                  class=\"product\"\n                  [class.active]=\"i === carousel.activeItem\"\n                  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n                >\n                  <cx-media\n                    [container]=\"product.images?.PRIMARY\"\n                    format=\"product\"\n                  >\n                  </cx-media>\n\n                  <h4>{{ product.name }}</h4>\n                  <div\n                    *ngIf=\"\n                      (productReferencesService.getDisplayProductPrices()\n                        | async)\n                    \"\n                    class=\"price\"\n                  >\n                    {{ product.price?.formattedValue }}\n                  </div>\n                </a>\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n        <button\n          class=\"next\"\n          (click)=\"sharedCarouselService.setNextItemAsActive()\"\n          [disabled]=\"\n            carousel.activeItem >\n            carousel.products.length - carousel.maxItemSize\n          \"\n        ></button>\n      </div>\n      <div class=\"indicators\">\n        <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n          <button\n            *ngIf=\"i % carousel.maxItemSize === 0\"\n            (click)=\"sharedCarouselService.setItemAsActive(i)\"\n            [disabled]=\"i === carousel.activeItem\"\n          ></button>\n        </ng-container>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReferencesComponent.ctorParameters = () => [
    { type: WindowRef },
    { type: ElementRef },
    { type: ProductReferencesService },
    { type: SharedCarouselService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductReferencesComponent.prototype.window;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesComponent.prototype.el;
    /** @type {?} */
    ProductReferencesComponent.prototype.productReferencesService;
    /** @type {?} */
    ProductReferencesComponent.prototype.sharedCarouselService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsR0FFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFPbEYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7OztJQUdyQyxZQUNFLE1BQWlCLEVBQ1QsRUFBYyxFQUNmLHdCQUFrRCxFQUNsRCxxQkFBNEM7UUFGM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNmLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUVuRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG04RkFBa0Q7Z0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUlEsU0FBUztZQUhoQixVQUFVO1lBS0gsd0JBQXdCO1lBRHhCLHFCQUFxQjs7Ozs7OztJQVM1Qiw0Q0FBdUI7Ozs7O0lBSXJCLHdDQUFzQjs7SUFDdEIsOERBQXlEOztJQUN6RCwyREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNoYXJlZENhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC1jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZWZlcmVuY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgd2luZG93OiBXaW5kb3c7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcHJvZHVjdFJlZmVyZW5jZXNTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlc1NlcnZpY2UsXG4gICAgcHVibGljIHNoYXJlZENhcm91c2VsU2VydmljZTogU2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMud2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZHVjdFJlZmVyZW5jZXNTZXJ2aWNlLmZldGNoVGl0bGUoKTtcbiAgICB0aGlzLnByb2R1Y3RSZWZlcmVuY2VzU2VydmljZS5mZXRjaERpc3BsYXlQcm9kdWN0VGl0bGVzKCk7XG4gICAgdGhpcy5wcm9kdWN0UmVmZXJlbmNlc1NlcnZpY2UuZmV0Y2hEaXNwbGF5UHJvZHVjdFByaWNlcygpO1xuICAgIHRoaXMuc2hhcmVkQ2Fyb3VzZWxTZXJ2aWNlLnNldEl0ZW1TaXplKHRoaXMud2luZG93LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucHJvZHVjdFJlZmVyZW5jZXNTZXJ2aWNlLnNldFJlZmVyZW5jZUxpc3QoKTtcbiAgICB0aGlzLnNoYXJlZENhcm91c2VsU2VydmljZS5zZXRJdGVtQXNBY3RpdmUoMCk7XG4gIH1cbn1cbiJdfQ==
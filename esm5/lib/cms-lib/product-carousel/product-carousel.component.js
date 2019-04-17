/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ElementRef, } from '@angular/core';
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
                    template: "<h3 *ngIf=\"(service.getTitle() | async) as title\">{{ title }}</h3>\n\n<ng-container\n  *ngIf=\"{\n    maxItemSize: service.getItemSize() | async,\n    products: service.getItems() | async,\n    activeItem: service.getActiveItemWithDelay() | async,\n    active: service.getActiveItem() | async\n  } as carousel\"\n>\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + carousel.maxItemSize\">\n    <button\n      class=\"previous\"\n      (click)=\"service.setPreviousItemAsActive()\"\n      [disabled]=\"carousel.activeItem === 0\"\n    ></button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n        <div class=\"group\" *ngIf=\"i % carousel.maxItemSize === 0\">\n          <ng-container\n            *ngFor=\"\n              let product$ of (carousel.products\n                | slice: i:i + carousel.maxItemSize)\n            \"\n          >\n            <a\n              *ngIf=\"(product$ | async) as product\"\n              class=\"product\"\n              [class.active]=\"i === carousel.activeItem\"\n              [routerLink]=\"\n                { route: [{ name: 'product', params: product }] }\n                  | cxTranslateUrl\n              \"\n            >\n              <cx-picture\n                [imageContainer]=\"product.images?.PRIMARY\"\n                imageFormat=\"product\"\n              >\n              </cx-picture>\n\n              <h4>{{ product.name }}</h4>\n              <div class=\"price\">{{ product.price?.formattedValue }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      class=\"next\"\n      (click)=\"service.setNextItemAsActive()\"\n      [disabled]=\"\n        carousel.activeItem > carousel.products.length - carousel.maxItemSize\n      \"\n    ></button>\n  </div>\n\n  <div class=\"indicators\">\n    <ng-container *ngFor=\"let unused of carousel.products; let i = index\">\n      <button\n        *ngIf=\"i % carousel.maxItemSize === 0\"\n        (click)=\"service.setItemAsActive(i)\"\n        [disabled]=\"i === carousel.activeItem\"\n      ></button>\n    </ng-container></div\n></ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{flex:100%;--cx-speed:0.5;display:flex;flex-direction:column}@media (max-width:991.98px){:host{padding:1rem}}:host>h3{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);font-weight:700;text-align:center;margin-top:2rem;margin-bottom:1rem}@media (min-width:1200px){:host>h3{margin-bottom:3rem}}.cx-carousel{display:flex;justify-content:space-between}.cx-carousel.size-1 .product{flex:0 0 100%}.cx-carousel.size-2 .product{flex:0 0 50%}.cx-carousel.size-4 .product{flex:0 0 25%}.cx-carousel .groups{flex:auto;position:relative}.cx-carousel .groups .group{transition:var(--cx-transition-duration,.6s) all;width:100%;display:flex;flex-wrap:nowrap;justify-content:flex-start}.cx-carousel .groups .group:not(:last-child){position:absolute}.cx-carousel .groups .group .product{display:flex;flex-direction:column;text-align:center;justify-content:space-between;padding-bottom:10px;color:var(--cx-color,var(--cx-g-color-text));opacity:0;z-index:-1;transition:var(--cx-transition-duration,.6s) all}.cx-carousel .groups .group .product cx-picture{height:var(--cx-height,20vmin)}.cx-carousel .groups .group .product.active{opacity:1;z-index:1}.cx-carousel .groups .group .product:nth-child(1){transition-delay:calc(var(--cx-speed,1) * .25s)}.cx-carousel .groups .group .product:nth-child(2){transition-delay:calc(var(--cx-speed,1) * .5s)}.cx-carousel .groups .group .product:nth-child(3){transition-delay:calc(var(--cx-speed,1) * .75s)}.cx-carousel .groups .group .product:nth-child(4){transition-delay:calc(var(--cx-speed,1) * 1s)}.cx-carousel .groups .group .product h4{font-size:.9rem;height:30px;font-weight:700;margin-top:5px}.cx-carousel .groups .group .product:hover{text-decoration:none}.cx-carousel .groups .group .product:hover h4{color:var(--cx-color,var(--cx-g-color-primary))}button{color:var(--cx-g-color-light)}button:focus{outline:0}button:not(:disabled){cursor:pointer}.indicators{display:flex;justify-content:center}.indicators button{border-radius:15px;width:15px;height:15px;border:none;padding:0;margin:10px;background-color:currentColor;transition:var(--cx-transition-duration,.6s) all}.indicators button[disabled]{color:var(--cx-background-color,var(--cx-g-color-primary))}.indicators button:not(:disabled):hover{color:var(--cx-g-color-secondary)}@media (max-width:575.98px){.indicators{display:none}}.next,.previous{background-color:transparent;border:none}.next:disabled,.previous:disabled{opacity:.5}.next:not(:disabled):hover,.previous:not(:disabled):hover{color:var(--cx-color,var(--cx-g-color-primary))}.next:after,.previous:after{content:'';border-style:solid;border-color:currentColor;border-width:var(--cx-border-width,4px);width:15px;height:15px;display:block;border-top:0}.previous:after{border-right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.next:after{border-left:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9wcm9kdWN0LWNhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUV2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlFO0lBU0Usa0NBQ0UsTUFBaUIsRUFDVCxFQUFjLEVBQ2YsT0FBK0I7UUFEOUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGdxRUFBZ0Q7b0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUlEsU0FBUztnQkFIaEIsVUFBVTtnQkFJSCxzQkFBc0I7O0lBeUIvQiwrQkFBQztDQUFBLEFBdkJELElBdUJDO1NBakJZLHdCQUF3Qjs7Ozs7O0lBQ25DLDBDQUF1Qjs7Ozs7SUFJckIsc0NBQXNCOztJQUN0QiwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgd2luZG93OiBXaW5kb3c7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgc2VydmljZTogUHJvZHVjdENhcm91c2VsU2VydmljZVxuICApIHtcbiAgICB0aGlzLndpbmRvdyA9IHdpblJlZi5uYXRpdmVXaW5kb3c7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0VGl0bGUoKTtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0SXRlbVNpemUodGhpcy53aW5kb3csIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5zZXJ2aWNlLnNldEl0ZW1zKCk7XG4gICAgdGhpcy5zZXJ2aWNlLnNldEl0ZW1Bc0FjdGl2ZSgwKTtcbiAgfVxufVxuIl19
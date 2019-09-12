/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { ModalService } from '../../../shared/components/modal/index';
import { CurrentProductService } from '../../product/current-product.service';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
    }
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.hasStock = true;
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe((/**
             * @param {?} product
             * @return {?}
             */
            function (product) {
                _this.productCode = product.code;
                _this.quantity = 1;
                if (product.stock &&
                    product.stock.stockLevelStatus !== 'outOfStock' &&
                    product.stock.stockLevel > 0) {
                    _this.maxQuantity = product.stock.stockLevel;
                    _this.hasStock = true;
                }
                else {
                    _this.hasStock = false;
                }
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddToCartComponent.prototype.updateCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.quantity = value;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.addToCart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.cartService
            .getEntry(this.productCode)
            .subscribe((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            if (entry) {
                _this.increment = true;
            }
            _this.openModal();
            _this.cartService.addEntry(_this.productCode, _this.quantity);
            _this.increment = false;
        }))
            .unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    AddToCartComponent.prototype.openModal = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.entry$ = this.cartEntry$;
        modalInstance.cart$ = this.cartService.getActive();
        modalInstance.loaded$ = this.cartService.getLoaded();
        modalInstance.quantity = this.quantity;
        modalInstance.increment = this.increment;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AddToCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-cart',
                    template: "<div class=\"quantity\" *ngIf=\"productCode && showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    [value]=\"quantity\"\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: ModalService },
        { type: CurrentProductService },
        { type: ChangeDetectorRef }
    ]; };
    AddToCartComponent.propDecorators = {
        productCode: [{ type: Input }],
        showQuantity: [{ type: Input }]
    };
    return AddToCartComponent;
}());
export { AddToCartComponent };
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.showQuantity;
    /** @type {?} */
    AddToCartComponent.prototype.maxQuantity;
    /** @type {?} */
    AddToCartComponent.prototype.modalRef;
    /** @type {?} */
    AddToCartComponent.prototype.hasStock;
    /** @type {?} */
    AddToCartComponent.prototype.quantity;
    /** @type {?} */
    AddToCartComponent.prototype.increment;
    /** @type {?} */
    AddToCartComponent.prototype.cartEntry$;
    /** @type {?} */
    AddToCartComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    AddToCartComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRW5HO0lBb0JFLDRCQUNZLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM5QyxFQUFxQjtRQUhuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBakJ0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUs3QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBV2YsQ0FBQzs7OztJQUVKLHFDQUFROzs7SUFBUjtRQUFBLGlCQTRCQztRQTNCQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQjtpQkFDM0MsVUFBVSxFQUFFO2lCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3JCLFNBQVM7Ozs7WUFBQyxVQUFDLE9BQWdCO2dCQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQixJQUNFLE9BQU8sQ0FBQyxLQUFLO29CQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssWUFBWTtvQkFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUM1QjtvQkFDQSxLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO2dCQUVELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUU5RCxLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDM0MsT0FBTztTQUNSO1FBQ0QsNENBQTRDO1FBQzVDLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsV0FBVzthQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFCLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDZCxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUN2QjtZQUNELEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQUM7YUFDRCxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLHNDQUFTOzs7O0lBQWpCOztZQUNNLGFBQWtCO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDakUsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztRQUVILGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hELGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2QyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkQsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JELGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBbkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwwdEJBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWFEsV0FBVztnQkFHRCxZQUFZO2dCQUN0QixxQkFBcUI7Z0JBVjVCLGlCQUFpQjs7OzhCQW1CaEIsS0FBSzsrQkFDTCxLQUFLOztJQTZGUix5QkFBQztDQUFBLEFBcEdELElBb0dDO1NBL0ZZLGtCQUFrQjs7O0lBQzdCLHlDQUE2Qjs7SUFDN0IsMENBQTZCOztJQUU3Qix5Q0FBb0I7O0lBQ3BCLHNDQUFtQjs7SUFFbkIsc0NBQWlCOztJQUNqQixzQ0FBYTs7SUFDYix1Q0FBa0I7O0lBRWxCLHdDQUFtQzs7SUFFbkMsMENBQTJCOzs7OztJQUd6Qix5Q0FBa0M7Ozs7O0lBQ2xDLDBDQUFvQzs7Ozs7SUFDcEMsbURBQXNEOzs7OztJQUN0RCxnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBPcmRlckVudHJ5LCBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWxSZWYsIE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by1jYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1jYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1F1YW50aXR5ID0gdHJ1ZTtcblxuICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgcXVhbnRpdHkgPSAxO1xuICBpbmNyZW1lbnQgPSBmYWxzZTtcblxuICBjYXJ0RW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdENvZGUpIHtcbiAgICAgIHRoaXMuY2FydEVudHJ5JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSk7XG4gICAgICB0aGlzLmhhc1N0b2NrID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZVxuICAgICAgICAuZ2V0UHJvZHVjdCgpXG4gICAgICAgIC5waXBlKGZpbHRlcihCb29sZWFuKSlcbiAgICAgICAgLnN1YnNjcmliZSgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdENvZGUgPSBwcm9kdWN0LmNvZGU7XG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDE7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9kdWN0LnN0b2NrICYmXG4gICAgICAgICAgICBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJyAmJlxuICAgICAgICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsID4gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5tYXhRdWFudGl0eSA9IHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbDtcbiAgICAgICAgICAgIHRoaXMuaGFzU3RvY2sgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc1N0b2NrID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcblxuICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvdW50KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF1YW50aXR5ID0gdmFsdWU7XG4gIH1cblxuICBhZGRUb0NhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RDb2RlIHx8IHRoaXMucXVhbnRpdHkgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjaGVjayBpdGVtIGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgY2FydFxuICAgIC8vIHNvIG1vZGFsIHdpbGwgaGF2ZSBwcm9wZXIgaGVhZGVyIHRleHQgZGlzcGxheWVkXG4gICAgdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpXG4gICAgICAuc3Vic2NyaWJlKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuYWRkRW50cnkodGhpcy5wcm9kdWN0Q29kZSwgdGhpcy5xdWFudGl0eSk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5Nb2RhbCgpIHtcbiAgICBsZXQgbW9kYWxJbnN0YW5jZTogYW55O1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBtb2RhbEluc3RhbmNlLmVudHJ5JCA9IHRoaXMuY2FydEVudHJ5JDtcbiAgICBtb2RhbEluc3RhbmNlLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICBtb2RhbEluc3RhbmNlLmxvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgIG1vZGFsSW5zdGFuY2UucXVhbnRpdHkgPSB0aGlzLnF1YW50aXR5O1xuICAgIG1vZGFsSW5zdGFuY2UuaW5jcmVtZW50ID0gdGhpcy5pbmNyZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
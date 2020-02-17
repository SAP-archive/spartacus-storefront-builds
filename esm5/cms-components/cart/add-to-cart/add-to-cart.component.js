/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
        this.addToCartForm = new FormGroup({
            quantity: new FormControl(1),
        });
    }
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.product) {
            this.productCode = this.product.code;
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
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
                _this.setStockInfo(product);
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    AddToCartComponent.prototype.setStockInfo = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
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
        /** @type {?} */
        var quantity = this.addToCartForm.get('quantity').value;
        if (!this.productCode || quantity <= 0) {
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
            _this.cartService.addEntry(_this.productCode, quantity);
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
                    template: "<form *ngIf=\"productCode\" [formGroup]=\"addToCartForm\" (submit)=\"addToCart()\">\n  <div class=\"quantity\" *ngIf=\"showQuantity\">\n    <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      *ngIf=\"hasStock\"\n      [max]=\"maxQuantity\"\n      [control]=\"addToCartForm.get('quantity')\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('addToCart.inStock' | cxTranslate)\n        : ('addToCart.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n\n  <button\n    *ngIf=\"hasStock\"\n    class=\"btn btn-primary btn-block\"\n    type=\"submit\"\n    [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  >\n    {{ 'addToCart.addToCart' | cxTranslate }}\n  </button>\n</form>\n",
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
        showQuantity: [{ type: Input }],
        product: [{ type: Input }]
    };
    return AddToCartComponent;
}());
export { AddToCartComponent };
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.showQuantity;
    /**
     * As long as we do not support #5026, we require product input, as we need
     *  a reference to the product model to fetch the stock data.
     * @type {?}
     */
    AddToCartComponent.prototype.product;
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
    /** @type {?} */
    AddToCartComponent.prototype.addToCartForm;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUF1QixNQUFNLGlCQUFpQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQVksWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFbkc7SUFvQ0UsNEJBQ1ksV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIscUJBQTRDLEVBQzlDLEVBQXFCO1FBSG5CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDOUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFqQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBVzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFLbEIsa0JBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUM1QixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzdCLENBQUMs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LHFDQUEwQjs7SUFFMUIseUNBQW9COztJQUNwQixzQ0FBbUI7O0lBRW5CLHNDQUFpQjs7SUFDakIsc0NBQWE7O0lBQ2IsdUNBQWtCOztJQUNsQix3Q0FBbUM7O0lBRW5DLDBDQUEyQjs7SUFFM0IsMkNBRUc7Ozs7O0lBVUQseUNBQWtDOzs7OztJQUNsQywwQ0FBb0M7Ozs7O0lBQ3BDLG1EQUFzRDs7Ozs7SUFDdEQsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIE9yZGVyRW50cnksIFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cvYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93UXVhbnRpdHkgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBcyBsb25nIGFzIHdlIGRvIG5vdCBzdXBwb3J0ICM1MDI2LCB3ZSByZXF1aXJlIHByb2R1Y3QgaW5wdXQsIGFzIHdlIG5lZWRcbiAgICogIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9kdWN0IG1vZGVsIHRvIGZldGNoIHRoZSBzdG9jayBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcblxuICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgcXVhbnRpdHkgPSAxO1xuICBpbmNyZW1lbnQgPSBmYWxzZTtcbiAgY2FydEVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBhZGRUb0NhcnRGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbCgxKSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdCkge1xuICAgICAgdGhpcy5wcm9kdWN0Q29kZSA9IHRoaXMucHJvZHVjdC5jb2RlO1xuICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcbiAgICAgIHRoaXMuc2V0U3RvY2tJbmZvKHRoaXMucHJvZHVjdCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9kdWN0Q29kZSkge1xuICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcbiAgICAgIC8vIGZvcmNlIGhhc1N0b2NrIGFuZCBxdWFudGl0eSBmb3IgdGhlIHRpbWUgYmVpbmcsIGFzIHdlIGRvIG5vdCBoYXZlIG1vcmUgaW5mbzpcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAxO1xuICAgICAgdGhpcy5oYXNTdG9jayA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICAgICAgIC5nZXRQcm9kdWN0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgICAuc3Vic2NyaWJlKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0Q29kZSA9IHByb2R1Y3QuY29kZTtcbiAgICAgICAgICB0aGlzLnNldFN0b2NrSW5mbyhwcm9kdWN0KTtcbiAgICAgICAgICB0aGlzLmNhcnRFbnRyeSQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpO1xuICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RvY2tJbmZvKHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICB0aGlzLnF1YW50aXR5ID0gMTtcbiAgICB0aGlzLmhhc1N0b2NrID1cbiAgICAgIHByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzICE9PSAnb3V0T2ZTdG9jayc7XG4gICAgaWYgKHRoaXMuaGFzU3RvY2sgJiYgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsKSB7XG4gICAgICB0aGlzLm1heFF1YW50aXR5ID0gcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvdW50KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF1YW50aXR5ID0gdmFsdWU7XG4gIH1cblxuICBhZGRUb0NhcnQoKSB7XG4gICAgY29uc3QgcXVhbnRpdHkgPSB0aGlzLmFkZFRvQ2FydEZvcm0uZ2V0KCdxdWFudGl0eScpLnZhbHVlO1xuICAgIGlmICghdGhpcy5wcm9kdWN0Q29kZSB8fCBxdWFudGl0eSA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNoZWNrIGl0ZW0gaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBjYXJ0XG4gICAgLy8gc28gbW9kYWwgd2lsbCBoYXZlIHByb3BlciBoZWFkZXIgdGV4dCBkaXNwbGF5ZWRcbiAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSlcbiAgICAgIC5zdWJzY3JpYmUoZW50cnkgPT4ge1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB0aGlzLmluY3JlbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5hZGRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlLCBxdWFudGl0eSk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5Nb2RhbCgpIHtcbiAgICBsZXQgbW9kYWxJbnN0YW5jZTogYW55O1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBtb2RhbEluc3RhbmNlLmVudHJ5JCA9IHRoaXMuY2FydEVudHJ5JDtcbiAgICBtb2RhbEluc3RhbmNlLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICBtb2RhbEluc3RhbmNlLmxvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgIG1vZGFsSW5zdGFuY2UucXVhbnRpdHkgPSB0aGlzLnF1YW50aXR5O1xuICAgIG1vZGFsSW5zdGFuY2UuaW5jcmVtZW50ID0gdGhpcy5pbmNyZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
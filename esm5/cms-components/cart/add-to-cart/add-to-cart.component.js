/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        this.openModal();
        this.cartService.addEntry(this.productCode, this.quantity);
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
                    template: "<div class=\"quantity\" *ngIf=\"showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQVksWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFbkc7SUFtQkUsNEJBQ1ksV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIscUJBQTRDLEVBQzlDLEVBQXFCO1FBSG5CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDOUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFoQnRCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQVdWLENBQUM7Ozs7SUFFSixxQ0FBUTs7O0lBQVI7UUFBQSxpQkEyQkM7UUExQkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlELElB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Qzs7SUFFbkMsMENBQTJCOzs7OztJQUd6Qix5Q0FBa0M7Ozs7O0lBQ2xDLDBDQUFvQzs7Ozs7SUFDcEMsbURBQXNEOzs7OztJQUN0RCxnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWxSZWYsIE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by1jYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1jYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1F1YW50aXR5ID0gdHJ1ZTtcblxuICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgcXVhbnRpdHkgPSAxO1xuXG4gIGNhcnRFbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0Q29kZSkge1xuICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcbiAgICAgIHRoaXMuaGFzU3RvY2sgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICAgICAgIC5nZXRQcm9kdWN0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgICAuc3Vic2NyaWJlKHByb2R1Y3QgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdENvZGUgPSBwcm9kdWN0LmNvZGU7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9kdWN0LnN0b2NrICYmXG4gICAgICAgICAgICBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJyAmJlxuICAgICAgICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsID4gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5tYXhRdWFudGl0eSA9IHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbDtcbiAgICAgICAgICAgIHRoaXMuaGFzU3RvY2sgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc1N0b2NrID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcblxuICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvdW50KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF1YW50aXR5ID0gdmFsdWU7XG4gIH1cblxuICBhZGRUb0NhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RDb2RlIHx8IHRoaXMucXVhbnRpdHkgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIHRoaXMuY2FydFNlcnZpY2UuYWRkRW50cnkodGhpcy5wcm9kdWN0Q29kZSwgdGhpcy5xdWFudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5Nb2RhbCgpIHtcbiAgICBsZXQgbW9kYWxJbnN0YW5jZTogYW55O1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBtb2RhbEluc3RhbmNlLmVudHJ5JCA9IHRoaXMuY2FydEVudHJ5JDtcbiAgICBtb2RhbEluc3RhbmNlLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICBtb2RhbEluc3RhbmNlLmxvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgIG1vZGFsSW5zdGFuY2UucXVhbnRpdHkgPSB0aGlzLnF1YW50aXR5O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
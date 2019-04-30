/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { CartService } from '@spartacus/core';
var AddedToCartDialogComponent = /** @class */ (function () {
    function AddedToCartDialogComponent(activeModal, cartService, fb) {
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.fb = fb;
        this.quantity = 0;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loaded$ = this.loaded$.pipe(tap(function (res) {
            if (_this.previousLoaded !== res) {
                _this.finishedLoading = _this.previousLoaded === false;
                _this.previousLoaded = res;
            }
        }));
        this.entry$ = this.entry$.pipe(tap(function (entry) {
            if (entry) {
                var code = entry.product.code;
                if (!_this.form.controls[code]) {
                    _this.form.setControl(code, _this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                _this.form.markAsPristine();
            }
        }));
    };
    /**
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.finishedLoading) {
            this.finishedLoading = false;
            /** @type {?} */
            var elementToFocus = (/** @type {?} */ (this.dialog.nativeElement.querySelector("[ngbAutofocus]")));
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.activeModal.dismiss('Removed');
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.updateEntry = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var item = _a.item, updatedQuantity = _a.updatedQuantity;
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    };
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.createEntryFormGroup = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    };
    AddedToCartDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-added-to-cart-dialog',
                    template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.itemsAddedToYourCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: 'cart' } | cxTranslateUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: 'checkout' } | cxTranslateUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddedToCartDialogComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: CartService },
        { type: FormBuilder }
    ]; };
    AddedToCartDialogComponent.propDecorators = {
        dialog: [{ type: ViewChild, args: ['dialog', { read: ElementRef },] }]
    };
    return AddedToCartDialogComponent;
}());
export { AddedToCartDialogComponent };
if (false) {
    /** @type {?} */
    AddedToCartDialogComponent.prototype.entry$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.cart$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.loaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.cartLoaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.quantity;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.previousLoaded;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.finishedLoading;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.dialog;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.form;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.activeModal;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBRWhFO0lBbUJFLG9DQUNTLFdBQTJCLEVBQ3hCLFdBQXdCLEVBQ3hCLEVBQWU7UUFGbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFaM0IsYUFBUSxHQUFHLENBQUMsQ0FBQztRQU9iLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQU1qQyxDQUFDOzs7O0lBRUosNkNBQVE7OztJQUFSO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLEtBQUksQ0FBQyxjQUFjLEtBQUssR0FBRyxFQUFFO2dCQUMvQixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUM1QixHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxLQUFLLEVBQUU7Z0JBQ0QsSUFBQSx5QkFBSTtnQkFDWixJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzdCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7cUJBQU07O3dCQUNDLFNBQVMsR0FBRyxtQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBYTtvQkFDdkQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEQ7Z0JBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7O2dCQUN2QixjQUFjLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUM1RCxnQkFBZ0IsQ0FDakIsRUFBZTtZQUNoQixJQUFJLGNBQWMsRUFBRTtnQkFDbEIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxJQUFJO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLEVBQXlCO1lBQXZCLGNBQUksRUFBRSxvQ0FBZTtRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVPLHlEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsS0FBSztRQUNoQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQywwcUdBQW9EO2lCQUNyRDs7OztnQkFSUSxjQUFjO2dCQUdkLFdBQVc7Z0JBSlgsV0FBVzs7O3lCQW9CakIsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0lBaUUzQyxpQ0FBQztDQUFBLEFBL0VELElBK0VDO1NBM0VZLDBCQUEwQjs7O0lBQ3JDLDRDQUErQjs7SUFDL0IsMkNBQXdCOztJQUN4Qiw2Q0FBNkI7O0lBQzdCLGlEQUFpQzs7SUFFakMsOENBQWE7O0lBQ2Isb0RBQXdCOztJQUN4QixxREFBeUI7O0lBRXpCLDRDQUNtQjs7SUFFbkIsMENBQW9DOztJQUdsQyxpREFBa0M7Ozs7O0lBQ2xDLGlEQUFrQzs7Ozs7SUFDbEMsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZGVkLXRvLWNhcnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBlbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBxdWFudGl0eSA9IDA7XG4gIHByZXZpb3VzTG9hZGVkOiBib29sZWFuO1xuICBmaW5pc2hlZExvYWRpbmc6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGRpYWxvZzogRWxlbWVudFJlZjtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZWQkID0gdGhpcy5sb2FkZWQkLnBpcGUoXG4gICAgICB0YXAocmVzID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNMb2FkZWQgIT09IHJlcykge1xuICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gdGhpcy5wcmV2aW91c0xvYWRlZCA9PT0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c0xvYWRlZCA9IHJlcztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5lbnRyeSQgPSB0aGlzLmVudHJ5JC5waXBlKFxuICAgICAgdGFwKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBlbnRyeS5wcm9kdWN0O1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc2V0Q29udHJvbChjb2RlLCB0aGlzLmNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Rm9ybSA9IHRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSBhcyBGb3JtR3JvdXA7XG4gICAgICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoZW50cnkucXVhbnRpdHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmZpbmlzaGVkTG9hZGluZykge1xuICAgICAgdGhpcy5maW5pc2hlZExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb0ZvY3VzID0gdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW25nYkF1dG9mb2N1c11gXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnRUb0ZvY3VzKSB7XG4gICAgICAgIGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdSZW1vdmVkJyk7XG4gIH1cblxuICB1cGRhdGVFbnRyeSh7IGl0ZW0sIHVwZGF0ZWRRdWFudGl0eSB9KTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVFbnRyeShpdGVtLmVudHJ5TnVtYmVyLCB1cGRhdGVkUXVhbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW50cnlOdW1iZXI6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pO1xuICB9XG59XG4iXX0=
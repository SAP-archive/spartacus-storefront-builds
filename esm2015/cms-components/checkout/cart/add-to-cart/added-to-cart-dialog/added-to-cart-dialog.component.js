/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { CartService } from '@spartacus/core';
export class AddedToCartDialogComponent {
    /**
     * @param {?} activeModal
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(activeModal, cartService, fb) {
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.fb = fb;
        this.quantity = 0;
        this.headerLabel = `addToCart.itemsAddedToYourCart`;
        this.firstUpdate = true;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loaded$ = this.loaded$.pipe(tap(res => {
            if (this.previousLoaded !== res) {
                this.finishedLoading = this.previousLoaded === false;
                this.previousLoaded = res;
            }
        }));
        this.entry$ = this.entry$.pipe(tap(entry => {
            if (entry) {
                const { code } = entry.product;
                if (!this.form.controls[code]) {
                    this.form.setControl(code, this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    const entryForm = (/** @type {?} */ (this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                this.form.markAsPristine();
                // Announce in header if Add To Cart button has incremented product
                if (this.firstUpdate && entry.quantity > 1) {
                    this.headerLabel = `addToCart.itemsIncrementedInYourCart`;
                }
                else {
                    this.headerLabel = `addToCart.itemsAddedToYourCart`;
                }
                // Any updates after the first will be flagged as false
                this.firstUpdate = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.finishedLoading) {
            this.finishedLoading = false;
            /** @type {?} */
            const elementToFocus = (/** @type {?} */ (this.dialog.nativeElement.querySelector(`[ngbAutofocus]`)));
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.activeModal.dismiss('Removed');
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
}
AddedToCartDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-added-to-cart-dialog',
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ headerLabel | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: 'cart' } | cxTranslateUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: 'checkout' } | cxTranslateUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
AddedToCartDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: CartService },
    { type: FormBuilder }
];
AddedToCartDialogComponent.propDecorators = {
    dialog: [{ type: ViewChild, args: ['dialog', { read: ElementRef },] }]
};
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
    AddedToCartDialogComponent.prototype.headerLabel;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.previousLoaded;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.finishedLoading;
    /**
     * @type {?}
     * @private
     */
    AddedToCartDialogComponent.prototype.firstUpdate;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBTWhFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWlCckMsWUFDUyxXQUEyQixFQUN4QixXQUF3QixFQUN4QixFQUFlO1FBRmxCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBZDNCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixnQkFBVyxHQUFHLGdDQUFnQyxDQUFDO1FBR3ZDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSzNCLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQU1qQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxHQUFH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Qjs7SUFDeEIsNkNBQTZCOztJQUM3QixpREFBaUM7O0lBRWpDLDhDQUFhOztJQUNiLGlEQUErQzs7SUFDL0Msb0RBQXdCOztJQUN4QixxREFBeUI7Ozs7O0lBQ3pCLGlEQUEyQjs7SUFFM0IsNENBQ21COztJQUVuQiwwQ0FBb0M7O0lBR2xDLGlEQUFrQzs7Ozs7SUFDbEMsaURBQWtDOzs7OztJQUNsQyx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkZWQtdG8tY2FydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIGVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGxvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHF1YW50aXR5ID0gMDtcbiAgaGVhZGVyTGFiZWwgPSBgYWRkVG9DYXJ0Lml0ZW1zQWRkZWRUb1lvdXJDYXJ0YDtcbiAgcHJldmlvdXNMb2FkZWQ6IGJvb2xlYW47XG4gIGZpbmlzaGVkTG9hZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBmaXJzdFVwZGF0ZSA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGRpYWxvZzogRWxlbWVudFJlZjtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZWQkID0gdGhpcy5sb2FkZWQkLnBpcGUoXG4gICAgICB0YXAocmVzID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNMb2FkZWQgIT09IHJlcykge1xuICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gdGhpcy5wcmV2aW91c0xvYWRlZCA9PT0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c0xvYWRlZCA9IHJlcztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5lbnRyeSQgPSB0aGlzLmVudHJ5JC5waXBlKFxuICAgICAgdGFwKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBlbnRyeS5wcm9kdWN0O1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc2V0Q29udHJvbChjb2RlLCB0aGlzLmNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Rm9ybSA9IHRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSBhcyBGb3JtR3JvdXA7XG4gICAgICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoZW50cnkucXVhbnRpdHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcblxuICAgICAgICAgIC8vIEFubm91bmNlIGluIGhlYWRlciBpZiBBZGQgVG8gQ2FydCBidXR0b24gaGFzIGluY3JlbWVudGVkIHByb2R1Y3RcbiAgICAgICAgICBpZiAodGhpcy5maXJzdFVwZGF0ZSAmJiBlbnRyeS5xdWFudGl0eSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyTGFiZWwgPSBgYWRkVG9DYXJ0Lml0ZW1zSW5jcmVtZW50ZWRJbllvdXJDYXJ0YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJMYWJlbCA9IGBhZGRUb0NhcnQuaXRlbXNBZGRlZFRvWW91ckNhcnRgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFueSB1cGRhdGVzIGFmdGVyIHRoZSBmaXJzdCB3aWxsIGJlIGZsYWdnZWQgYXMgZmFsc2VcbiAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5maW5pc2hlZExvYWRpbmcpIHtcbiAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBlbGVtZW50VG9Gb2N1cyA9IHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtuZ2JBdXRvZm9jdXNdYFxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50VG9Gb2N1cykge1xuICAgICAgICBlbGVtZW50VG9Gb2N1cy5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnUmVtb3ZlZCcpO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoeyBpdGVtLCB1cGRhdGVkUXVhbnRpdHkgfSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoaXRlbS5lbnRyeU51bWJlciwgdXBkYXRlZFF1YW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KTtcbiAgfVxufVxuIl19
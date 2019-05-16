/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
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
        this.iconTypes = ICON_TYPE;
        this.quantity = 0;
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
                this.showItemIncrLabel = this.firstUpdate && entry.quantity > 1;
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
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (showItemIncrLabel\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n            (view)=\"activeModal.dismiss('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
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
    AddedToCartDialogComponent.prototype.iconTypes;
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
    AddedToCartDialogComponent.prototype.firstUpdate;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.showItemIncrLabel;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBUSxXQUFXLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBTTFFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQW1CckMsWUFDUyxXQUEyQixFQUN4QixXQUF3QixFQUN4QixFQUFlO1FBRmxCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBckIzQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBT3RCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFHYixnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1uQixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFNakMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsR0FBRyxDQUFD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REFBaUM7O0lBRWpDLDhDQUFhOztJQUNiLG9EQUF3Qjs7SUFDeEIscURBQXlCOztJQUN6QixpREFBbUI7O0lBQ25CLHVEQUEyQjs7SUFFM0IsNENBQ21COztJQUVuQiwwQ0FBb0M7O0lBR2xDLGlEQUFrQzs7Ozs7SUFDbEMsaURBQWtDOzs7OztJQUNsQyx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENhcnQsIENhcnRTZXJ2aWNlLCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZGVkLXRvLWNhcnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgZW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgbG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcXVhbnRpdHkgPSAwO1xuICBwcmV2aW91c0xvYWRlZDogYm9vbGVhbjtcbiAgZmluaXNoZWRMb2FkaW5nOiBib29sZWFuO1xuICBmaXJzdFVwZGF0ZSA9IHRydWU7XG4gIHNob3dJdGVtSW5jckxhYmVsOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBkaWFsb2c6IEVsZW1lbnRSZWY7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVkJCA9IHRoaXMubG9hZGVkJC5waXBlKFxuICAgICAgdGFwKHJlcyA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzTG9hZGVkICE9PSByZXMpIHtcbiAgICAgICAgICB0aGlzLmZpbmlzaGVkTG9hZGluZyA9IHRoaXMucHJldmlvdXNMb2FkZWQgPT09IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJldmlvdXNMb2FkZWQgPSByZXM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZW50cnkkID0gdGhpcy5lbnRyeSQucGlwZShcbiAgICAgIHRhcChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gZW50cnkucHJvZHVjdDtcbiAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnNldENvbnRyb2woY29kZSwgdGhpcy5jcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUZvcm0gPSB0aGlzLmZvcm0uY29udHJvbHNbY29kZV0gYXMgRm9ybUdyb3VwO1xuICAgICAgICAgICAgZW50cnlGb3JtLmNvbnRyb2xzLnF1YW50aXR5LnNldFZhbHVlKGVudHJ5LnF1YW50aXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XG5cbiAgICAgICAgICAvLyBBbm5vdW5jZSBpbiBoZWFkZXIgaWYgQWRkIFRvIENhcnQgYnV0dG9uIGhhcyBpbmNyZW1lbnRlZCBwcm9kdWN0XG4gICAgICAgICAgdGhpcy5zaG93SXRlbUluY3JMYWJlbCA9IHRoaXMuZmlyc3RVcGRhdGUgJiYgZW50cnkucXVhbnRpdHkgPiAxO1xuICAgICAgICAgIC8vIEFueSB1cGRhdGVzIGFmdGVyIHRoZSBmaXJzdCB3aWxsIGJlIGZsYWdnZWQgYXMgZmFsc2VcbiAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5maW5pc2hlZExvYWRpbmcpIHtcbiAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBlbGVtZW50VG9Gb2N1cyA9IHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtuZ2JBdXRvZm9jdXNdYFxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50VG9Gb2N1cykge1xuICAgICAgICBlbGVtZW50VG9Gb2N1cy5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnUmVtb3ZlZCcpO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoeyBpdGVtLCB1cGRhdGVkUXVhbnRpdHkgfSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoaXRlbS5lbnRyeU51bWJlciwgdXBkYXRlZFF1YW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KTtcbiAgfVxufVxuIl19
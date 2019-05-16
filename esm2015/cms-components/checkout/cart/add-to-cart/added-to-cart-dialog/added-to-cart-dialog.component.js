/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { CartService } from '@spartacus/core';
import { ICON_TYPES } from '../../../../../cms-components/misc/icon/index';
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
        this.iconTypes = ICON_TYPES;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQU0zRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFtQnJDLFlBQ1MsV0FBMkIsRUFDeEIsV0FBd0IsRUFDeEIsRUFBZTtRQUZsQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQXJCM0IsY0FBUyxHQUFHLFVBQVUsQ0FBQztRQU92QixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2IsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFNbkIsU0FBSSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBTWpDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLEdBQUcsQ0FB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REFBaUM7O0lBRWpDLDhDQUFhOztJQUNiLG9EQUF3Qjs7SUFDeEIscURBQXlCOztJQUN6QixpREFBbUI7O0lBQ25CLHVEQUEyQjs7SUFFM0IsNENBQ21COztJQUVuQiwwQ0FBb0M7O0lBR2xDLGlEQUFrQzs7Ozs7SUFDbEMsaURBQWtDOzs7OztJQUNsQyx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRlZC10by1jYXJ0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFUztcblxuICBlbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBxdWFudGl0eSA9IDA7XG4gIHByZXZpb3VzTG9hZGVkOiBib29sZWFuO1xuICBmaW5pc2hlZExvYWRpbmc6IGJvb2xlYW47XG4gIGZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgc2hvd0l0ZW1JbmNyTGFiZWw6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGRpYWxvZzogRWxlbWVudFJlZjtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZWQkID0gdGhpcy5sb2FkZWQkLnBpcGUoXG4gICAgICB0YXAocmVzID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNMb2FkZWQgIT09IHJlcykge1xuICAgICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gdGhpcy5wcmV2aW91c0xvYWRlZCA9PT0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c0xvYWRlZCA9IHJlcztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5lbnRyeSQgPSB0aGlzLmVudHJ5JC5waXBlKFxuICAgICAgdGFwKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBlbnRyeS5wcm9kdWN0O1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc2V0Q29udHJvbChjb2RlLCB0aGlzLmNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Rm9ybSA9IHRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSBhcyBGb3JtR3JvdXA7XG4gICAgICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoZW50cnkucXVhbnRpdHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcblxuICAgICAgICAgIC8vIEFubm91bmNlIGluIGhlYWRlciBpZiBBZGQgVG8gQ2FydCBidXR0b24gaGFzIGluY3JlbWVudGVkIHByb2R1Y3RcbiAgICAgICAgICB0aGlzLnNob3dJdGVtSW5jckxhYmVsID0gdGhpcy5maXJzdFVwZGF0ZSAmJiBlbnRyeS5xdWFudGl0eSA+IDE7XG4gICAgICAgICAgLy8gQW55IHVwZGF0ZXMgYWZ0ZXIgdGhlIGZpcnN0IHdpbGwgYmUgZmxhZ2dlZCBhcyBmYWxzZVxuICAgICAgICAgIHRoaXMuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmZpbmlzaGVkTG9hZGluZykge1xuICAgICAgdGhpcy5maW5pc2hlZExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb0ZvY3VzID0gdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW25nYkF1dG9mb2N1c11gXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnRUb0ZvY3VzKSB7XG4gICAgICAgIGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdSZW1vdmVkJyk7XG4gIH1cblxuICB1cGRhdGVFbnRyeSh7IGl0ZW0sIHVwZGF0ZWRRdWFudGl0eSB9KTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVFbnRyeShpdGVtLmVudHJ5TnVtYmVyLCB1cGRhdGVkUXVhbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW50cnlOdW1iZXI6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pO1xuICB9XG59XG4iXX0=
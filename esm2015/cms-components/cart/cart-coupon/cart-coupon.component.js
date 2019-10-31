/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService, CartVoucherService, AuthService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, startWith, tap } from 'rxjs/operators';
export class CartCouponComponent {
    /**
     * @param {?} cartService
     * @param {?} authService
     * @param {?} cartVoucherService
     * @param {?} formBuilder
     */
    constructor(cartService, authService, cartVoucherService, formBuilder) {
        this.cartService = cartService;
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = combineLatest([
            this.cartService.getActive(),
            this.authService.getOccUserId(),
        ]).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart, userId]) => (this.cartId =
            userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => cart)));
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map((/**
         * @param {?} loaded
         * @return {?}
         */
        loaded => !loaded)));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map((/**
             * @return {?}
             */
            () => this.form.valid))),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cartIsLoading, btnEnabled, addVoucherIsLoading]) => cartIsLoading || !btnEnabled || addVoucherIsLoading)));
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            this.onSuccess(success);
        })));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    /**
     * @return {?}
     */
    applyVoucher() {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    }
}
CartCouponComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-coupon',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <input\n            type=\"text\"\n            class=\"form-control input-coupon-code\"\n            id=\"applyVoucher\"\n            formControlName=\"couponCode\"\n            placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n          />\n        </div>\n        <div class=\"col-md-4\">\n          <button\n            class=\"btn btn-block btn-action apply-coupon-button\"\n            type=\"submit\"\n            [disabled]=\"submitDisabled$ | async\"\n            [class.disabled]=\"submitDisabled$ | async\"\n          >\n            {{ 'voucher.apply' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
CartCouponComponent.ctorParameters = () => [
    { type: CartService },
    { type: AuthService },
    { type: CartVoucherService },
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    CartCouponComponent.prototype.form;
    /** @type {?} */
    CartCouponComponent.prototype.cartIsLoading$;
    /** @type {?} */
    CartCouponComponent.prototype.submitDisabled$;
    /** @type {?} */
    CartCouponComponent.prototype.cart$;
    /** @type {?} */
    CartCouponComponent.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.cartVoucherService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUVMLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJELE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFTOUIsWUFDVSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsV0FBd0I7UUFIeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU4xQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFPdkMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtTQUNoQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdB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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtY291cG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtY291cG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBjYXJ0SXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc3VibWl0RGlzYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcChcbiAgICAgICAgKFtjYXJ0LCB1c2VySWRdOiBbQ2FydCwgc3RyaW5nXSkgPT5cbiAgICAgICAgICAodGhpcy5jYXJ0SWQgPVxuICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGUpXG4gICAgICApLFxuICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmddKSA9PiBjYXJ0KVxuICAgICk7XG5cbiAgICB0aGlzLmNhcnRJc0xvYWRpbmckID0gdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldExvYWRlZCgpXG4gICAgICAucGlwZShtYXAobG9hZGVkID0+ICFsb2FkZWQpKTtcblxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBjb3Vwb25Db2RlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnN1Ym1pdERpc2FibGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jYXJ0SXNMb2FkaW5nJCxcbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5mb3JtLnZhbGlkKVxuICAgICAgKSxcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmdldEFkZFZvdWNoZXJSZXN1bHRMb2FkaW5nKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtjYXJ0SXNMb2FkaW5nLCBidG5FbmFibGVkLCBhZGRWb3VjaGVySXNMb2FkaW5nXSkgPT5cbiAgICAgICAgICBjYXJ0SXNMb2FkaW5nIHx8ICFidG5FbmFibGVkIHx8IGFkZFZvdWNoZXJJc0xvYWRpbmdcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2VcbiAgICAgICAgLmdldEFkZFZvdWNoZXJSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseVZvdWNoZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcih0aGlzLmZvcm0udmFsdWUuY291cG9uQ29kZSwgdGhpcy5jYXJ0SWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgfVxufVxuIl19
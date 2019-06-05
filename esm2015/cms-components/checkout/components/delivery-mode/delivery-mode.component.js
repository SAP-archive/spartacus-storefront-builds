/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CheckoutDeliveryService, RoutingService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout-config.service';
export class DeliveryModeComponent {
    /**
     * @param {?} fb
     * @param {?} checkoutDeliveryService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     */
    constructor(fb, checkoutDeliveryService, routingService, checkoutConfigService, activatedRoute) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.changedOption = false;
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        this.selectedDeliveryMode$ = this.checkoutDeliveryService.getSelectedDeliveryMode();
        this.checkoutDeliveryService.loadSupportedDeliveryModes();
        this.selectedDeliveryMode$
            .pipe(map((/**
         * @param {?} deliveryMode
         * @return {?}
         */
        (deliveryMode) => deliveryMode && deliveryMode.code ? deliveryMode.code : null)))
            .subscribe((/**
         * @param {?} code
         * @return {?}
         */
        code => {
            if (code) {
                this.mode.controls['deliveryModeId'].setValue(code);
                this.currentDeliveryModeId = code;
            }
        }));
    }
    /**
     * @param {?} code
     * @return {?}
     */
    changeMode(code) {
        if (code !== this.currentDeliveryModeId) {
            this.changedOption = true;
            this.currentDeliveryModeId = code;
        }
    }
    /**
     * @return {?}
     */
    next() {
        if (this.changedOption) {
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
        this.deliveryModeSub = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data && data.code === this.currentDeliveryModeId) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
        }));
    }
    /**
     * @return {?}
     */
    back() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @return {?}
     */
    get deliveryModeInvalid() {
        return this.mode.controls['deliveryModeId'].invalid;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    }
}
DeliveryModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-delivery-mode',
                template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of (supportedDeliveryModes$ | async)\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DeliveryModeComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    DeliveryModeComponent.prototype.supportedDeliveryModes$;
    /** @type {?} */
    DeliveryModeComponent.prototype.selectedDeliveryMode$;
    /** @type {?} */
    DeliveryModeComponent.prototype.currentDeliveryModeId;
    /** @type {?} */
    DeliveryModeComponent.prototype.checkoutStepUrlNext;
    /** @type {?} */
    DeliveryModeComponent.prototype.checkoutStepUrlPrevious;
    /** @type {?} */
    DeliveryModeComponent.prototype.changedOption;
    /** @type {?} */
    DeliveryModeComponent.prototype.deliveryModeSub;
    /** @type {?} */
    DeliveryModeComponent.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBT3RFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBY2hDLFlBQ1UsRUFBZSxFQUNmLHVCQUFnRCxFQUNoRCxjQUE4QixFQUM5QixxQkFBNEMsRUFDNUMsY0FBOEI7UUFKOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVHhDLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMxQyxDQUFDLENBQUM7SUFRQSxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIs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Q3ZCLGdEQUE4Qjs7SUFFOUIscUNBRUc7Ozs7O0lBR0QsbUNBQXVCOzs7OztJQUN2Qix3REFBd0Q7Ozs7O0lBQ3hELCtDQUFzQzs7Ozs7SUFDdEMsc0RBQW9EOzs7OztJQUNwRCwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICBEZWxpdmVyeU1vZGUsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWRlbGl2ZXJ5LW1vZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVsaXZlcnktbW9kZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeU1vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPjtcbiAgc2VsZWN0ZWREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gIGN1cnJlbnREZWxpdmVyeU1vZGVJZDogc3RyaW5nO1xuICBjaGVja291dFN0ZXBVcmxOZXh0OiBzdHJpbmc7XG4gIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY2hhbmdlZE9wdGlvbjogYm9vbGVhbjtcbiAgZGVsaXZlcnlNb2RlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbW9kZTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZGVsaXZlcnlNb2RlSWQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoYW5nZWRPcHRpb24gPSBmYWxzZTtcblxuICAgIHRoaXMuc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICB0aGlzLnNlbGVjdGVkRGVsaXZlcnlNb2RlJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKTtcblxuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWREZWxpdmVyeU1vZGUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSkgPT5cbiAgICAgICAgICBkZWxpdmVyeU1vZGUgJiYgZGVsaXZlcnlNb2RlLmNvZGUgPyBkZWxpdmVyeU1vZGUuY29kZSA6IG51bGxcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShjb2RlID0+IHtcbiAgICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgICB0aGlzLm1vZGUuY29udHJvbHNbJ2RlbGl2ZXJ5TW9kZUlkJ10uc2V0VmFsdWUoY29kZSk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU1vZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRPcHRpb24gPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZE9wdGlvbikge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeU1vZGUodGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpO1xuICAgIH1cblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlU3ViID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuY29kZSA9PT0gdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMpO1xuICB9XG5cbiAgZ2V0IGRlbGl2ZXJ5TW9kZUludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZS5jb250cm9sc1snZGVsaXZlcnlNb2RlSWQnXS5pbnZhbGlkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsaXZlcnlNb2RlU3ViKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, RoutingService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
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
        this.allowRedirect = false;
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
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        this.deliveryModeSub = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
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
            if (this.allowRedirect &&
                !!code &&
                code === this.currentDeliveryModeId) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
            this.currentDeliveryModeId = code;
            if (code) {
                this.mode.controls['deliveryModeId'].setValue(code);
            }
        }));
    }
    /**
     * @param {?} code
     * @return {?}
     */
    changeMode(code) {
        if (code !== this.currentDeliveryModeId) {
            this.currentDeliveryModeId = code;
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.allowRedirect = true;
        if (this.mode.valid && this.mode.value) {
            if (!this.currentDeliveryModeId) {
                this.currentDeliveryModeId = this.mode.value.deliveryModeId;
            }
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
        this.routingService.go(this.checkoutStepUrlNext);
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
                template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
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
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.allowRedirect;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBTy9FLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBY2hDLFlBQ1UsRUFBZSxFQUNmLHVCQUFnRCxFQUNoRCxjQUE4QixFQUM5QixxQkFBNEMsRUFDNUMsY0FBOEI7UUFKOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYmhDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSTlCLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMxQyxDQUFDLENBQUM7SUFRQSxDQUFDOzs7O0lBRUos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b0RBQTRCOztJQUM1Qix3REFBZ0M7Ozs7O0lBQ2hDLDhDQUE4Qjs7SUFFOUIsZ0RBQThCOztJQUU5QixxQ0FFRzs7Ozs7SUFHRCxtQ0FBdUI7Ozs7O0lBQ3ZCLHdEQUF3RDs7Ozs7SUFDeEQsK0NBQXNDOzs7OztJQUN0QyxzREFBb0Q7Ozs7O0lBQ3BELCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgRGVsaXZlcnlNb2RlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kZWxpdmVyeS1tb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGl2ZXJ5LW1vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG4gIHNlbGVjdGVkRGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjdXJyZW50RGVsaXZlcnlNb2RlSWQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuICBwcml2YXRlIGFsbG93UmVkaXJlY3QgPSBmYWxzZTtcblxuICBkZWxpdmVyeU1vZGVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBtb2RlOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWxpdmVyeU1vZGVJZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgdGhpcy5zdXBwb3J0ZWREZWxpdmVyeU1vZGVzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuXG4gICAgdGhpcy5kZWxpdmVyeU1vZGVTdWIgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpID0+XG4gICAgICAgICAgZGVsaXZlcnlNb2RlICYmIGRlbGl2ZXJ5TW9kZS5jb2RlID8gZGVsaXZlcnlNb2RlLmNvZGUgOiBudWxsXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoY29kZSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmFsbG93UmVkaXJlY3QgJiZcbiAgICAgICAgICAhIWNvZGUgJiZcbiAgICAgICAgICBjb2RlID09PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgIHRoaXMubW9kZS5jb250cm9sc1snZGVsaXZlcnlNb2RlSWQnXS5zZXRWYWx1ZShjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjaGFuZ2VNb2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjb2RlICE9PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hbGxvd1JlZGlyZWN0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5tb2RlLnZhbGlkICYmIHRoaXMubW9kZS52YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCA9IHRoaXMubW9kZS52YWx1ZS5kZWxpdmVyeU1vZGVJZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlNb2RlKHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKTtcbiAgICB9XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMpO1xuICB9XG5cbiAgZ2V0IGRlbGl2ZXJ5TW9kZUludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZS5jb250cm9sc1snZGVsaXZlcnlNb2RlSWQnXS5pbnZhbGlkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsaXZlcnlNb2RlU3ViKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
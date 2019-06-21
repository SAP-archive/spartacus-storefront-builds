/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, RoutingService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
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
            if (!!code && code === this.currentDeliveryModeId) {
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
        else {
            this.routingService.go(this.checkoutStepUrlNext);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBT3RFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBY2hDLFlBQ1UsRUFBZSxFQUNmLHVCQUFnRCxFQUNoRCxjQUE4QixFQUM5QixxQkFBNEMsRUFDNUMsY0FBOEI7UUFKOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVHhDLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMxQyxDQUFDLENBQUM7SUFRQSxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIs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b250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgRGVsaXZlcnlNb2RlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kZWxpdmVyeS1tb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGl2ZXJ5LW1vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG4gIHNlbGVjdGVkRGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjdXJyZW50RGVsaXZlcnlNb2RlSWQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuXG4gIGNoYW5nZWRPcHRpb246IGJvb2xlYW47XG4gIGRlbGl2ZXJ5TW9kZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG1vZGU6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlbGl2ZXJ5TW9kZUlkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGFuZ2VkT3B0aW9uID0gZmFsc2U7XG5cbiAgICB0aGlzLnN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG5cbiAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1YiA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSkgPT5cbiAgICAgICAgICBkZWxpdmVyeU1vZGUgJiYgZGVsaXZlcnlNb2RlLmNvZGUgPyBkZWxpdmVyeU1vZGUuY29kZSA6IG51bGxcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShjb2RlID0+IHtcbiAgICAgICAgaWYgKCEhY29kZSAmJiBjb2RlID09PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCA9IGNvZGU7XG4gICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgdGhpcy5tb2RlLmNvbnRyb2xzWydkZWxpdmVyeU1vZGVJZCddLnNldFZhbHVlKGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU1vZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRPcHRpb24gPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZE9wdGlvbikge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeU1vZGUodGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCk7XG4gICAgfVxuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMpO1xuICB9XG5cbiAgZ2V0IGRlbGl2ZXJ5TW9kZUludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZS5jb250cm9sc1snZGVsaXZlcnlNb2RlSWQnXS5pbnZhbGlkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsaXZlcnlNb2RlU3ViKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
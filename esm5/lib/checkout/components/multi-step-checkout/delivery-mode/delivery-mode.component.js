/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CheckoutService } from '@spartacus/core';
import { tap, takeWhile } from 'rxjs/operators';
var DeliveryModeComponent = /** @class */ (function () {
    function DeliveryModeComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.selectMode = new EventEmitter();
        this.backStep = new EventEmitter();
        this.leave = false;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.supportedDeliveryModes$ = this.service
            .getSupportedDeliveryModes()
            .pipe(takeWhile(function () { return !_this.leave; }), tap(function (supportedModes) {
            if (Object.keys(supportedModes).length === 0) {
                _this.service.loadSupportedDeliveryModes();
            }
            else {
                if (_this.selectedShippingMethod) {
                    _this.mode.controls['deliveryModeId'].setValue(_this.selectedShippingMethod);
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.selectMode.emit(this.mode.value);
    };
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.leave = true;
        this.backStep.emit();
    };
    Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode.controls['deliveryModeId'].invalid;
        },
        enumerable: true,
        configurable: true
    });
    DeliveryModeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-delivery-mode',
                    template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.label.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <div\n        class=\"form-check\"\n        *ngFor=\"let mode of (supportedDeliveryModes$ | async)\"\n      >\n        <input\n          class=\"form-check-input\"\n          role=\"radio\"\n          type=\"radio\"\n          tabindex=\"0\"\n          id=\"deliveryMode-{{ mode.code }}\"\n          aria-checked=\"true\"\n          [value]=\"mode.code\"\n          formControlName=\"deliveryModeId\"\n        />\n        <label\n          class=\"cx-delivery-label form-check-label\n            form-radio-label\"\n          for=\"deliveryMode-{{ mode.code }}\"\n        >\n          <div class=\"cx-delivery-shipping\">{{ mode.name }}</div>\n          <div class=\"cx-delivery-price\">\n            {{ mode.deliveryCost.formattedValue }}\n          </div>\n          <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.action.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.action.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-delivery-label{padding:var(--cx-padding,0);margin:var(--cx-margin,0 auto 0 .75rem);width:var(--cx-width,100%);display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);justify-content:var(--cx-space-justify-content,space-between);flex-wrap:var(--cx-flex-wrap,wrap)}.cx-delivery-label .cx-delivery-shipping{flex:var(--cx-flex,50%)}.cx-delivery-label .cx-delivery-price{flex:var(--cx-flex,50%);text-align:var(--cx-text-align,right)}.cx-delivery-label .cx-delivery-details{flex:var(--cx-flex,100%);color:var(--cx-color,var(--cx-g-color-success))}.form-check{display:var(--cx-display,flex)}"]
                }] }
    ];
    /** @nocollapse */
    DeliveryModeComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutService }
    ]; };
    DeliveryModeComponent.propDecorators = {
        selectedShippingMethod: [{ type: Input }],
        selectMode: [{ type: Output }],
        backStep: [{ type: Output }]
    };
    return DeliveryModeComponent;
}());
export { DeliveryModeComponent };
if (false) {
    /** @type {?} */
    DeliveryModeComponent.prototype.selectedShippingMethod;
    /** @type {?} */
    DeliveryModeComponent.prototype.selectMode;
    /** @type {?} */
    DeliveryModeComponent.prototype.backStep;
    /** @type {?} */
    DeliveryModeComponent.prototype.supportedDeliveryModes$;
    /** @type {?} */
    DeliveryModeComponent.prototype.leave;
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
    DeliveryModeComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhEO0lBc0JFLCtCQUFvQixFQUFlLEVBQVUsT0FBd0I7UUFBakQsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBWHJFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR25DLFVBQUssR0FBRyxLQUFLLENBQUM7UUFFZCxTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDOUIsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDMUMsQ0FBQyxDQUFDO0lBRXFFLENBQUM7Ozs7SUFFekUsd0NBQVE7OztJQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsT0FBTzthQUN4Qyx5QkFBeUIsRUFBRTthQUMzQixJQUFJLENBQ0gsU0FBUyxDQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLEVBQzVCLEdBQUcsQ0FBQyxVQUFBLGNBQWM7WUFDaEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLEtBQUksQ0FBQyxzQkFBc0IsRUFBRTtvQkFDL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQzNDLEtBQUksQ0FBQyxzQkFBc0IsQ0FDNUIsQ0FBQztpQkFDSDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSxzREFBbUI7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3RELENBQUM7OztPQUFBOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLCtuREFBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBWitCLFdBQVc7Z0JBRXBCLGVBQWU7Ozt5Q0FZbkMsS0FBSzs2QkFHTCxNQUFNOzJCQUVOLE1BQU07O0lBMkNULDRCQUFDO0NBQUEsQUF2REQsSUF1REM7U0FqRFkscUJBQXFCOzs7SUFDaEMsdURBQytCOztJQUUvQiwyQ0FDcUM7O0lBQ3JDLHlDQUNtQzs7SUFFbkMsd0RBQW9EOztJQUNwRCxzQ0FBYzs7SUFFZCxxQ0FFRzs7Ozs7SUFFUyxtQ0FBdUI7Ozs7O0lBQUUsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBDaGVja291dFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZGVsaXZlcnktbW9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxpdmVyeS1tb2RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVsaXZlcnktbW9kZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRTaGlwcGluZ01ldGhvZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3RNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBiYWNrU3RlcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPjtcbiAgbGVhdmUgPSBmYWxzZTtcblxuICBtb2RlOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWxpdmVyeU1vZGVJZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQgPSB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKCkgPT4gIXRoaXMubGVhdmUpLFxuICAgICAgICB0YXAoc3VwcG9ydGVkTW9kZXMgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzdXBwb3J0ZWRNb2RlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTaGlwcGluZ01ldGhvZCkge1xuICAgICAgICAgICAgICB0aGlzLm1vZGUuY29udHJvbHNbJ2RlbGl2ZXJ5TW9kZUlkJ10uc2V0VmFsdWUoXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNoaXBwaW5nTWV0aG9kXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RNb2RlLmVtaXQodGhpcy5tb2RlLnZhbHVlKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZSA9IHRydWU7XG4gICAgdGhpcy5iYWNrU3RlcC5lbWl0KCk7XG4gIH1cblxuICBnZXQgZGVsaXZlcnlNb2RlSW52YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlLmNvbnRyb2xzWydkZWxpdmVyeU1vZGVJZCddLmludmFsaWQ7XG4gIH1cbn1cbiJdfQ==
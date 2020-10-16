import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService } from '@spartacus/core';
import { map, takeWhile, withLatestFrom } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import { CheckoutStepService } from '../../services/checkout-step.service';
export class DeliveryModeComponent {
    constructor(fb, checkoutDeliveryService, checkoutConfigService, checkoutStepService, activatedRoute) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.checkoutStepService = checkoutStepService;
        this.activatedRoute = activatedRoute;
        this.continueButtonPressed = false;
        this.allowRedirect = false;
        this.backBtnText = this.checkoutStepService.getBackBntText(this.activatedRoute);
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    ngOnInit() {
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        // Reload delivery modes on error
        this.checkoutDeliveryService
            .getLoadSupportedDeliveryModeProcess()
            .pipe(takeWhile((state) => (state === null || state === void 0 ? void 0 : state.success) === false))
            .subscribe((state) => {
            if (state.error && !state.loading) {
                this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        });
        this.deliveryModeSub = this.supportedDeliveryModes$
            .pipe(withLatestFrom(this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(map((deliveryMode) => deliveryMode && deliveryMode.code ? deliveryMode.code : null))))
            .subscribe(([deliveryModes, code]) => {
            if (!code && deliveryModes && deliveryModes.length) {
                code = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
            }
            if (this.allowRedirect &&
                !!code &&
                code === this.currentDeliveryModeId) {
                this.checkoutStepService.next(this.activatedRoute);
            }
            if (code) {
                this.mode.controls['deliveryModeId'].setValue(code);
                if (code !== this.currentDeliveryModeId) {
                    this.checkoutDeliveryService.setDeliveryMode(code);
                }
            }
            this.currentDeliveryModeId = code;
        });
    }
    changeMode(code) {
        if (code !== this.currentDeliveryModeId) {
            this.checkoutDeliveryService.setDeliveryMode(code);
            this.currentDeliveryModeId = code;
        }
    }
    next() {
        this.allowRedirect = true;
        this.continueButtonPressed = true;
        if (this.mode.valid && this.mode.value) {
            if (!this.currentDeliveryModeId) {
                this.currentDeliveryModeId = this.mode.value.deliveryModeId;
            }
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
    }
    back() {
        this.checkoutStepService.back(this.activatedRoute);
    }
    get deliveryModeInvalid() {
        return this.mode.controls['deliveryModeId'].invalid;
    }
    ngOnDestroy() {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    }
}
DeliveryModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-delivery-mode',
                template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <ng-container *ngIf=\"!continueButtonPressed; else loading\">\n    <div class=\"row cx-checkout-btns\">\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n          {{ backBtnText | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-12 col-lg-6\">\n        <button\n          class=\"btn btn-block btn-primary\"\n          [disabled]=\"deliveryModeInvalid\"\n          (click)=\"next()\"\n        >\n          {{ 'common.continue' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DeliveryModeComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: CheckoutConfigService },
    { type: CheckoutStepService },
    { type: ActivatedRoute }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFnQixNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTzNFLE1BQU0sT0FBTyxxQkFBcUI7SUFlaEMsWUFDVSxFQUFlLEVBQ2YsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUMxQyxtQkFBd0MsRUFDMUMsY0FBOEI7UUFKOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMxQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWhCeEMsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTlCLGdCQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFJM0UsU0FBSSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzFDLENBQUMsQ0FBQztJQVFBLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRXhGLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsdUJBQXVCO2FBQ3pCLG1DQUFtQyxFQUFFO2FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sTUFBSyxLQUFLLENBQUMsQ0FBQzthQUNwRCxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsMEJBQTBCLEVBQUUsQ0FBQzthQUMzRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQXVCO2FBQ2hELElBQUksQ0FDSCxjQUFjLENBQ1osSUFBSSxDQUFDLHVCQUF1QjthQUN6Qix1QkFBdUIsRUFBRTthQUN6QixJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsWUFBMEIsRUFBRSxFQUFFLENBQ2pDLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzdELENBQ0YsQ0FDSixDQUNGO2FBQ0EsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUEyQixFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDbEQsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FDeEQsYUFBYSxDQUNkLENBQUM7YUFDSDtZQUNELElBQ0UsSUFBSSxDQUFDLGFBQWE7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLElBQUksS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQ25DO2dCQUNBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEQ7YUFDRjtZQUNELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3ZDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDN0Q7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN0RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBM0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixpZ0VBQTZDO2dCQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWlEsV0FBVztZQUVYLHVCQUF1QjtZQUd2QixxQkFBcUI7WUFDckIsbUJBQW1CO1lBTG5CLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIERlbGl2ZXJ5TW9kZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVdoaWxlLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1kZWxpdmVyeS1tb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGl2ZXJ5LW1vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG4gIHNlbGVjdGVkRGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjdXJyZW50RGVsaXZlcnlNb2RlSWQ6IHN0cmluZztcbiAgY29udGludWVCdXR0b25QcmVzc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgYWxsb3dSZWRpcmVjdCA9IGZhbHNlO1xuXG4gIGJhY2tCdG5UZXh0ID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmdldEJhY2tCbnRUZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuXG4gIGRlbGl2ZXJ5TW9kZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG1vZGU6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlbGl2ZXJ5TW9kZUlkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG5cbiAgICAvLyBSZWxvYWQgZGVsaXZlcnkgbW9kZXMgb24gZXJyb3JcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVByb2Nlc3MoKVxuICAgICAgLnBpcGUodGFrZVdoaWxlKChzdGF0ZSkgPT4gc3RhdGU/LnN1Y2Nlc3MgPT09IGZhbHNlKSlcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5lcnJvciAmJiAhc3RhdGUubG9hZGluZykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1YiA9IHRoaXMuc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpID0+XG4gICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlICYmIGRlbGl2ZXJ5TW9kZS5jb2RlID8gZGVsaXZlcnlNb2RlLmNvZGUgOiBudWxsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW2RlbGl2ZXJ5TW9kZXMsIGNvZGVdOiBbRGVsaXZlcnlNb2RlW10sIHN0cmluZ10pID0+IHtcbiAgICAgICAgaWYgKCFjb2RlICYmIGRlbGl2ZXJ5TW9kZXMgJiYgZGVsaXZlcnlNb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb2RlID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJlZmVycmVkRGVsaXZlcnlNb2RlKFxuICAgICAgICAgICAgZGVsaXZlcnlNb2Rlc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuYWxsb3dSZWRpcmVjdCAmJlxuICAgICAgICAgICEhY29kZSAmJlxuICAgICAgICAgIGNvZGUgPT09IHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5uZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgdGhpcy5tb2RlLmNvbnRyb2xzWydkZWxpdmVyeU1vZGVJZCddLnNldFZhbHVlKGNvZGUpO1xuICAgICAgICAgIGlmIChjb2RlICE9PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeU1vZGUoY29kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkID0gY29kZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlTW9kZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSAhPT0gdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlNb2RlKGNvZGUpO1xuICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hbGxvd1JlZGlyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRpbnVlQnV0dG9uUHJlc3NlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5tb2RlLnZhbGlkICYmIHRoaXMubW9kZS52YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCA9IHRoaXMubW9kZS52YWx1ZS5kZWxpdmVyeU1vZGVJZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlNb2RlKHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKTtcbiAgICB9XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5iYWNrKHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG5cbiAgZ2V0IGRlbGl2ZXJ5TW9kZUludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZS5jb250cm9sc1snZGVsaXZlcnlNb2RlSWQnXS5pbnZhbGlkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsaXZlcnlNb2RlU3ViKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJ5TW9kZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
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
                template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ backBtnText | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFnQixNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTzNFLE1BQU0sT0FBTyxxQkFBcUI7SUFjaEMsWUFDVSxFQUFlLEVBQ2YsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUMxQyxtQkFBd0MsRUFDMUMsY0FBOEI7UUFKOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMxQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWZoQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUU5QixnQkFBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNB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QzthQUM3RDtZQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUF4R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDY0REFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFaUSxXQUFXO1lBRVgsdUJBQXVCO1lBR3ZCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFMbkIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgRGVsaXZlcnlNb2RlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWRlbGl2ZXJ5LW1vZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVsaXZlcnktbW9kZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeU1vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPjtcbiAgc2VsZWN0ZWREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gIGN1cnJlbnREZWxpdmVyeU1vZGVJZDogc3RyaW5nO1xuICBwcml2YXRlIGFsbG93UmVkaXJlY3QgPSBmYWxzZTtcblxuICBiYWNrQnRuVGV4dCA9IHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5nZXRCYWNrQm50VGV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcblxuICBkZWxpdmVyeU1vZGVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBtb2RlOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWxpdmVyeU1vZGVJZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdXBwb3J0ZWREZWxpdmVyeU1vZGVzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuXG4gICAgLy8gUmVsb2FkIGRlbGl2ZXJ5IG1vZGVzIG9uIGVycm9yXG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgLmdldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVQcm9jZXNzKClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoc3RhdGUpID0+IHN0YXRlPy5zdWNjZXNzID09PSBmYWxzZSkpXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUuZXJyb3IgJiYgIXN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kZWxpdmVyeU1vZGVTdWIgPSB0aGlzLnN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkXG4gICAgICAucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKSA9PlxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZSAmJiBkZWxpdmVyeU1vZGUuY29kZSA/IGRlbGl2ZXJ5TW9kZS5jb2RlIDogbnVsbFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKFtkZWxpdmVyeU1vZGVzLCBjb2RlXTogW0RlbGl2ZXJ5TW9kZVtdLCBzdHJpbmddKSA9PiB7XG4gICAgICAgIGlmICghY29kZSAmJiBkZWxpdmVyeU1vZGVzICYmIGRlbGl2ZXJ5TW9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29kZSA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZWZlcnJlZERlbGl2ZXJ5TW9kZShcbiAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmFsbG93UmVkaXJlY3QgJiZcbiAgICAgICAgICAhIWNvZGUgJiZcbiAgICAgICAgICBjb2RlID09PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UubmV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgIHRoaXMubW9kZS5jb250cm9sc1snZGVsaXZlcnlNb2RlSWQnXS5zZXRWYWx1ZShjb2RlKTtcbiAgICAgICAgICBpZiAoY29kZSAhPT0gdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlNb2RlKGNvZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCA9IGNvZGU7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU1vZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShjb2RlKTtcbiAgICAgIHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkID0gY29kZTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWxsb3dSZWRpcmVjdCA9IHRydWU7XG4gICAgaWYgKHRoaXMubW9kZS52YWxpZCAmJiB0aGlzLm1vZGUudmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSB0aGlzLm1vZGUudmFsdWUuZGVsaXZlcnlNb2RlSWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZSh0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCk7XG4gICAgfVxuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuYmFjayh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxuXG4gIGdldCBkZWxpdmVyeU1vZGVJbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUuY29udHJvbHNbJ2RlbGl2ZXJ5TW9kZUlkJ10uaW52YWxpZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGl2ZXJ5TW9kZVN1Yikge1xuICAgICAgdGhpcy5kZWxpdmVyeU1vZGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
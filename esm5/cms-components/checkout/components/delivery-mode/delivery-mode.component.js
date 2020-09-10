import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, DeliveryMode } from '@spartacus/core';
import { map, withLatestFrom, takeWhile } from 'rxjs/operators';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import { CheckoutStepService } from '../../services/checkout-step.service';
var DeliveryModeComponent = /** @class */ (function () {
    function DeliveryModeComponent(fb, checkoutDeliveryService, checkoutConfigService, checkoutStepService, activatedRoute) {
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
    DeliveryModeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        // Reload delivery modes on error
        this.checkoutDeliveryService
            .getLoadSupportedDeliveryModeProcess()
            .pipe(takeWhile(function (state) { return (state === null || state === void 0 ? void 0 : state.success) === false; }))
            .subscribe(function (state) {
            if (state.error && !state.loading) {
                _this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        });
        this.deliveryModeSub = this.supportedDeliveryModes$
            .pipe(withLatestFrom(this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(map(function (deliveryMode) {
            return deliveryMode && deliveryMode.code ? deliveryMode.code : null;
        }))))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), deliveryModes = _b[0], code = _b[1];
            if (!code && deliveryModes && deliveryModes.length) {
                code = _this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
            }
            if (_this.allowRedirect &&
                !!code &&
                code === _this.currentDeliveryModeId) {
                _this.checkoutStepService.next(_this.activatedRoute);
            }
            if (code) {
                _this.mode.controls['deliveryModeId'].setValue(code);
                if (code !== _this.currentDeliveryModeId) {
                    _this.checkoutDeliveryService.setDeliveryMode(code);
                }
            }
            _this.currentDeliveryModeId = code;
        });
    };
    DeliveryModeComponent.prototype.changeMode = function (code) {
        if (code !== this.currentDeliveryModeId) {
            this.checkoutDeliveryService.setDeliveryMode(code);
            this.currentDeliveryModeId = code;
        }
    };
    DeliveryModeComponent.prototype.next = function () {
        this.allowRedirect = true;
        if (this.mode.valid && this.mode.value) {
            if (!this.currentDeliveryModeId) {
                this.currentDeliveryModeId = this.mode.value.deliveryModeId;
            }
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
    };
    DeliveryModeComponent.prototype.back = function () {
        this.checkoutStepService.back(this.activatedRoute);
    };
    Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
        get: function () {
            return this.mode.controls['deliveryModeId'].invalid;
        },
        enumerable: true,
        configurable: true
    });
    DeliveryModeComponent.prototype.ngOnDestroy = function () {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    };
    DeliveryModeComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: CheckoutStepService },
        { type: ActivatedRoute }
    ]; };
    DeliveryModeComponent = __decorate([
        Component({
            selector: 'cx-delivery-mode',
            template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ backBtnText | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], DeliveryModeComponent);
    return DeliveryModeComponent;
}());
export { DeliveryModeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPM0U7SUFnQkUsK0JBQ1UsRUFBZSxFQUNmLHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDMUMsbUJBQXdDLEVBQzFDLGNBQThCO1FBSjlCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmaEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFOUIsZ0JBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUkz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Q0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQzdEO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHNCQUFJLHNEQUFtQjthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOztnQkFwRmEsV0FBVztnQkFDVSx1QkFBdUI7Z0JBQ3pCLHFCQUFxQjtnQkFDckIsbUJBQW1CO2dCQUMxQixjQUFjOztJQXJCN0IscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsNjREQUE2QztZQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1cscUJBQXFCLENBc0dqQztJQUFELDRCQUFDO0NBQUEsQUF0R0QsSUFzR0M7U0F0R1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBEZWxpdmVyeU1vZGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHdpdGhMYXRlc3RGcm9tLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZGVsaXZlcnktbW9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxpdmVyeS1tb2RlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5TW9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+O1xuICBzZWxlY3RlZERlbGl2ZXJ5TW9kZSQ6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcbiAgY3VycmVudERlbGl2ZXJ5TW9kZUlkOiBzdHJpbmc7XG4gIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXM6IHN0cmluZztcbiAgcHJpdmF0ZSBhbGxvd1JlZGlyZWN0ID0gZmFsc2U7XG5cbiAgYmFja0J0blRleHQgPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0QmFja0JudFRleHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgZGVsaXZlcnlNb2RlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbW9kZTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZGVsaXZlcnlNb2RlSWQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcblxuICAgIC8vIFJlbG9hZCBkZWxpdmVyeSBtb2RlcyBvbiBlcnJvclxuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKHN0YXRlKSA9PiBzdGF0ZT8uc3VjY2VzcyA9PT0gZmFsc2UpKVxuICAgICAgLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmVycm9yICYmICFzdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlU3ViID0gdGhpcy5zdXBwb3J0ZWREZWxpdmVyeU1vZGVzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgICAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSkgPT5cbiAgICAgICAgICAgICAgICBkZWxpdmVyeU1vZGUgJiYgZGVsaXZlcnlNb2RlLmNvZGUgPyBkZWxpdmVyeU1vZGUuY29kZSA6IG51bGxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbZGVsaXZlcnlNb2RlcywgY29kZV06IFtEZWxpdmVyeU1vZGVbXSwgc3RyaW5nXSkgPT4ge1xuICAgICAgICBpZiAoIWNvZGUgJiYgZGVsaXZlcnlNb2RlcyAmJiBkZWxpdmVyeU1vZGVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvZGUgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmVmZXJyZWREZWxpdmVyeU1vZGUoXG4gICAgICAgICAgICBkZWxpdmVyeU1vZGVzXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5hbGxvd1JlZGlyZWN0ICYmXG4gICAgICAgICAgISFjb2RlICYmXG4gICAgICAgICAgY29kZSA9PT0gdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLm5leHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgICB0aGlzLm1vZGUuY29udHJvbHNbJ2RlbGl2ZXJ5TW9kZUlkJ10uc2V0VmFsdWUoY29kZSk7XG4gICAgICAgICAgaWYgKGNvZGUgIT09IHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShjb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQgPSBjb2RlO1xuICAgICAgfSk7XG4gIH1cblxuICBjaGFuZ2VNb2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjb2RlICE9PSB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCkge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeU1vZGUoY29kZSk7XG4gICAgICB0aGlzLmN1cnJlbnREZWxpdmVyeU1vZGVJZCA9IGNvZGU7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmFsbG93UmVkaXJlY3QgPSB0cnVlO1xuICAgIGlmICh0aGlzLm1vZGUudmFsaWQgJiYgdGhpcy5tb2RlLnZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERlbGl2ZXJ5TW9kZUlkID0gdGhpcy5tb2RlLnZhbHVlLmRlbGl2ZXJ5TW9kZUlkO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeU1vZGUodGhpcy5jdXJyZW50RGVsaXZlcnlNb2RlSWQpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmJhY2sodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cblxuICBnZXQgZGVsaXZlcnlNb2RlSW52YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlLmNvbnRyb2xzWydkZWxpdmVyeU1vZGVJZCddLmludmFsaWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxpdmVyeU1vZGVTdWIpIHtcbiAgICAgIHRoaXMuZGVsaXZlcnlNb2RlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout/services/index';
var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(checkoutConfigService, activatedRoute) {
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.loginAsGuest = false;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
        var _a, _b, _c;
        if (this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = (_c = (_b = (_a = this.activatedRoute) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.queryParams) === null || _c === void 0 ? void 0 : _c['forced'];
        }
    };
    LoginRegisterComponent.ctorParameters = function () { return [
        { type: CheckoutConfigService },
        { type: ActivatedRoute }
    ]; };
    LoginRegisterComponent = __decorate([
        Component({
            selector: 'cx-login-register',
            template: "<div class=\"register\">\n  <p class=\"cx-section-title\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </p>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
        })
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());
export { LoginRegisterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTXRFO0lBR0UsZ0NBQ1kscUJBQTRDLEVBQzVDLGNBQThCO1FBRDlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjFDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBS2xCLENBQUM7SUFFSix5Q0FBUSxHQUFSOztRQUNFLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxZQUFZLHFCQUFHLElBQUksQ0FBQyxjQUFjLDBDQUFFLFFBQVEsMENBQUUsV0FBVywwQ0FDNUQsUUFBUSxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7O2dCQVZrQyxxQkFBcUI7Z0JBQzVCLGNBQWM7O0lBTC9CLHNCQUFzQjtRQUpsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDJuQkFBOEM7U0FDL0MsQ0FBQztPQUNXLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4tcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9naW5Bc0d1ZXN0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0d1ZXN0Q2hlY2tvdXQoKSkge1xuICAgICAgdGhpcy5sb2dpbkFzR3Vlc3QgPSB0aGlzLmFjdGl2YXRlZFJvdXRlPy5zbmFwc2hvdD8ucXVlcnlQYXJhbXM/LltcbiAgICAgICAgJ2ZvcmNlZCdcbiAgICAgIF07XG4gICAgfVxuICB9XG59XG4iXX0=
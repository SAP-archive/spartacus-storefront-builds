import { __decorate } from "tslib";
import { Component, HostBinding, ViewEncapsulation, } from '@angular/core';
import { AsmAuthService, AsmService, AuthService, GlobalMessageService, GlobalMessageType, RoutingService, User, UserService, UserToken, } from '@spartacus/core';
import { of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AsmComponentService } from '../services/asm-component.service';
var AsmMainUiComponent = /** @class */ (function () {
    function AsmMainUiComponent(authService, asmAuthService, userService, asmComponentService, globalMessageService, routingService, asmService) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.userService = userService;
        this.asmComponentService = asmComponentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.asmService = asmService;
        this.disabled = false;
        this.startingCustomerSession = false;
    }
    AsmMainUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.csAgentToken$ = this.asmAuthService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.asmAuthService.getCustomerSupportAgentTokenLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap(function (token) {
            if (token && !!token.access_token) {
                _this.handleCustomerSessionStartRedirection(token);
                return _this.userService.get();
            }
            else {
                return of(undefined);
            }
        }));
        this.isCollapsed$ = this.asmService
            .getAsmUiState()
            .pipe(map(function (uiState) { return uiState.collapsed; }));
    };
    AsmMainUiComponent.prototype.handleCustomerSessionStartRedirection = function (token) {
        if (this.startingCustomerSession &&
            this.asmAuthService.isCustomerEmulationToken(token)) {
            this.startingCustomerSession = false;
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this.routingService.go('/');
        }
    };
    AsmMainUiComponent.prototype.loginCustomerSupportAgent = function (_a) {
        var userId = _a.userId, password = _a.password;
        this.asmAuthService.authorizeCustomerSupportAgent(userId, password);
    };
    AsmMainUiComponent.prototype.logout = function () {
        this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
    };
    AsmMainUiComponent.prototype.startCustomerEmulationSession = function (_a) {
        var _this = this;
        var customerId = _a.customerId;
        this.asmAuthService
            .getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe(function (customerSupportAgentToken) {
            return _this.asmAuthService.startCustomerEmulationSession(customerSupportAgentToken, customerId);
        })
            .unsubscribe();
        this.startingCustomerSession = true;
    };
    AsmMainUiComponent.prototype.hideUi = function () {
        this.disabled = true;
        this.asmComponentService.unload();
    };
    AsmMainUiComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: AsmAuthService },
        { type: UserService },
        { type: AsmComponentService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: AsmService }
    ]; };
    __decorate([
        HostBinding('class.hidden')
    ], AsmMainUiComponent.prototype, "disabled", void 0);
    AsmMainUiComponent = __decorate([
        Component({
            selector: 'cx-asm-main-ui',
            template: "<div class=\"asm-bar\">\n  <div class=\"asm-bar-branding\">\n    <img\n      class=\"logo\"\n      src=\"data:image/png;base64,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\"\n      width=\"48\"\n      height=\"24\"\n      alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    />\n\n    <div class=\"asm-title\">\n      {{ 'asm.mainTitle' | cxTranslate }}\n    </div>\n  </div>\n  <div class=\"asm-bar-actions\">\n    <cx-asm-toggle-ui></cx-asm-toggle-ui>\n\n    <cx-asm-session-timer\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n    ></cx-asm-session-timer>\n\n    <button\n      class=\"close\"\n      title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n      *ngIf=\"\n        !(csAgentToken$ | async)?.access_token &&\n        !(csAgentTokenLoading$ | async)\n      \"\n      (click)=\"hideUi()\"\n    ></button>\n\n    <button\n      class=\"logout\"\n      title=\"{{ 'asm.logout' | cxTranslate }}\"\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n      (click)=\"logout()\"\n    ></button>\n  </div>\n</div>\n\n<ng-container *ngIf=\"!(isCollapsed$ | async) as notCollapsed\">\n  <ng-container\n    *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\"\n  >\n    <ng-container *ngIf=\"customer$ | async; else showCustomerSelection\">\n      <cx-customer-emulation *ngIf=\"notCollapsed\"></cx-customer-emulation>\n    </ng-container>\n    <ng-template #showCustomerSelection>\n      <cx-customer-selection\n        *ngIf=\"notCollapsed\"\n        (submitEvent)=\"startCustomerEmulationSession($event)\"\n      ></cx-customer-selection>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #showLoginForm>\n    <cx-csagent-login-form\n      *ngIf=\"notCollapsed\"\n      (submitEvent)=\"loginCustomerSupportAgent($event)\"\n      [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n    ></cx-csagent-login-form>\n  </ng-template>\n</ng-container>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-asm-main-ui{font-family:Arial,sans-serif;font-size:14px;width:100%;display:flex;flex-direction:column}cx-asm-main-ui .close,cx-asm-main-ui .logout{cursor:pointer;width:16px;height:16px;border:transparent;background-color:transparent}cx-asm-main-ui .close{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'/%3E%3C/svg%3E\")}cx-asm-main-ui .logout{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M11,2.7c1.2,0.6,2.2,1.5,2.9,2.6c1.3,1.9,1.5,4.4,0.6,6.5c-0.3,0.8-0.8,1.6-1.5,2.2c-0.6,0.6-1.4,1.1-2.2,1.5 C9.9,15.8,9,16,8,16c-0.9,0-1.9-0.2-2.7-0.5c-0.8-0.4-1.6-0.9-2.2-1.5c-0.6-0.6-1.1-1.4-1.5-2.2C0.7,9.6,0.9,7.2,2.1,5.3 c0.7-1.1,1.7-2,2.9-2.6v1.1C4.1,4.3,3.3,5.1,2.8,6C2.3,6.9,2,7.9,2,9c0,1.6,0.6,3.2,1.8,4.3c0.5,0.5,1.2,1,1.9,1.3 c1.5,0.6,3.2,0.6,4.7,0c0.7-0.3,1.4-0.7,1.9-1.3C13.4,12.1,14,10.6,14,9c0-1.1-0.3-2.1-0.8-3c-0.5-0.9-1.3-1.7-2.2-2.2 C11,3.8,11,2.7,11,2.7z M8,9C7.7,9,7.5,8.9,7.3,8.7C7.1,8.5,7,8.3,7,8V1c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0 C8.9,0.5,9,0.7,9,1v7c0,0.3-0.1,0.5-0.3,0.7C8.5,8.9,8.2,9,8,9z'/%3E%3C/svg%3E%0A\")}cx-asm-main-ui button[type=submit]{padding:0 12px;white-space:nowrap;border-radius:4px;height:36px;font-weight:400;border-style:solid;border-width:1px}cx-asm-main-ui button[type=submit]:disabled{opacity:.4;cursor:not-allowed}cx-asm-main-ui .spinner{display:flex;justify-content:center;width:100%;color:#0a6ed1}cx-asm-main-ui .spinner>div{width:8px;height:8px;margin:6px;border-radius:100%;background-color:currentColor;-webkit-animation:1s infinite spinner-dots-pulse;animation:1s infinite spinner-dots-pulse}cx-asm-main-ui .spinner>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}@keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}cx-asm-main-ui.hidden{display:none}cx-asm-main-ui .asm-bar{color:#fff;background-color:#354a5f;height:48px;display:flex;padding:0 2rem;justify-content:space-between;z-index:1}cx-asm-main-ui .asm-bar-branding{display:flex;align-items:center}cx-asm-main-ui .asm-bar-branding .logo{-webkit-margin-end:8px;margin-inline-end:8px}cx-asm-main-ui .asm-bar-branding .asm-title{font-size:16px;font-weight:700}cx-asm-main-ui .asm-bar-actions{display:flex;justify-content:flex-end;align-items:center}cx-asm-main-ui>:nth-child(2){padding:1rem 2rem;display:flex;width:100%}cx-asm-main-ui input{outline:0;border:1px solid #89919a;color:#32363a;background-color:#fff;border-radius:4px;padding:0 12px;height:36px}cx-asm-main-ui input:focus{box-shadow:0 0 0 1px #fafafa}cx-asm-main-ui input:hover{border-color:#085caf}cx-asm-main-ui input::-moz-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input:-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::placeholder{color:#74777a;font-style:italic}@media (max-width:575px){cx-asm-main-ui .asm-bar-branding .asm-title{display:none}cx-asm-main-ui .asm-alert{margin-top:30px}}"]
        })
    ], AsmMainUiComponent);
    return AsmMainUiComponent;
}());
export { AsmMainUiComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW1haW4tdWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1tYWluLXVpL2FzbS1tYWluLXVpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVgsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxjQUFjLEVBQ2QsVUFBVSxFQUNWLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxJQUFJLEVBQ0osV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFReEU7SUFVRSw0QkFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsb0JBQTBDLEVBQzFDLGNBQThCLEVBQzlCLFVBQXNCO1FBTnRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFYTCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRDLDRCQUF1QixHQUFHLEtBQUssQ0FBQztJQVVyQyxDQUFDO0lBRUoscUNBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1DQUFtQyxFQUFFLENBQUM7UUFDdEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDbkQsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNkLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUNqQyxLQUFJLENBQUMscUNBQXFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVO2FBQ2hDLGFBQWEsRUFBRTthQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxFQUFqQixDQUFpQixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sa0VBQXFDLEdBQTdDLFVBQThDLEtBQWdCO1FBQzVELElBQ0UsSUFBSSxDQUFDLHVCQUF1QjtZQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUNuRDtZQUNBLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxzREFBeUIsR0FBekIsVUFBMEIsRUFNekI7WUFMQyxrQkFBTSxFQUNOLHNCQUFRO1FBS1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMscUNBQXFDLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsMERBQTZCLEdBQTdCLFVBQThCLEVBQXNDO1FBQXBFLGlCQVlDO1lBWitCLDBCQUFVO1FBQ3hDLElBQUksQ0FBQyxjQUFjO2FBQ2hCLDRCQUE0QixFQUFFO2FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsVUFBQyx5QkFBeUI7WUFDbkMsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLDZCQUE2QixDQUMvQyx5QkFBeUIsRUFDekIsVUFBVSxDQUNYO1FBSEQsQ0FHQyxDQUNGO2FBQ0EsV0FBVyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkFyRXdCLFdBQVc7Z0JBQ1IsY0FBYztnQkFDakIsV0FBVztnQkFDSCxtQkFBbUI7Z0JBQ2xCLG9CQUFvQjtnQkFDMUIsY0FBYztnQkFDbEIsVUFBVTs7SUFYTDtRQUE1QixXQUFXLENBQUMsY0FBYyxDQUFDO3dEQUFrQjtJQU5uQyxrQkFBa0I7UUFOOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQiwyb09BQTJDO1lBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csa0JBQWtCLENBaUY5QjtJQUFELHlCQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0FqRlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBc21BdXRoU2VydmljZSxcbiAgQXNtU2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXIsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyVG9rZW4sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBc21Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXNtLWNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYXNtLW1haW4tdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vYXNtLW1haW4tdWkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hc20tbWFpbi11aS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBc21NYWluVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjc0FnZW50VG9rZW4kOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj47XG4gIGNzQWdlbnRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjdXN0b21lciQ6IE9ic2VydmFibGU8VXNlcj47XG4gIGlzQ29sbGFwc2VkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGRlbicpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdGFydGluZ0N1c3RvbWVyU2Vzc2lvbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXNtU2VydmljZTogQXNtU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jc0FnZW50VG9rZW4kID0gdGhpcy5hc21BdXRoU2VydmljZS5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk7XG4gICAgdGhpcy5jc0FnZW50VG9rZW5Mb2FkaW5nJCA9IHRoaXMuYXNtQXV0aFNlcnZpY2UuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkxvYWRpbmcoKTtcbiAgICB0aGlzLmN1c3RvbWVyJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgaWYgKHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDdXN0b21lclNlc3Npb25TdGFydFJlZGlyZWN0aW9uKHRva2VuKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQkID0gdGhpcy5hc21TZXJ2aWNlXG4gICAgICAuZ2V0QXNtVWlTdGF0ZSgpXG4gICAgICAucGlwZShtYXAoKHVpU3RhdGUpID0+IHVpU3RhdGUuY29sbGFwc2VkKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUN1c3RvbWVyU2Vzc2lvblN0YXJ0UmVkaXJlY3Rpb24odG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhcnRpbmdDdXN0b21lclNlc3Npb24gJiZcbiAgICAgIHRoaXMuYXNtQXV0aFNlcnZpY2UuaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHRva2VuKVxuICAgICkge1xuICAgICAgdGhpcy5zdGFydGluZ0N1c3RvbWVyU2Vzc2lvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbygnLycpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luQ3VzdG9tZXJTdXBwb3J0QWdlbnQoe1xuICAgIHVzZXJJZCxcbiAgICBwYXNzd29yZCxcbiAgfToge1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmFzbUF1dGhTZXJ2aWNlLmF1dGhvcml6ZUN1c3RvbWVyU3VwcG9ydEFnZW50KHVzZXJJZCwgcGFzc3dvcmQpO1xuICB9XG5cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXNtQ29tcG9uZW50U2VydmljZS5sb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk7XG4gIH1cblxuICBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbih7IGN1c3RvbWVySWQgfTogeyBjdXN0b21lcklkOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMuYXNtQXV0aFNlcnZpY2VcbiAgICAgIC5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChjdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKSA9PlxuICAgICAgICB0aGlzLmFzbUF1dGhTZXJ2aWNlLnN0YXJ0Q3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uKFxuICAgICAgICAgIGN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4sXG4gICAgICAgICAgY3VzdG9tZXJJZFxuICAgICAgICApXG4gICAgICApXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN0YXJ0aW5nQ3VzdG9tZXJTZXNzaW9uID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmFzbUNvbXBvbmVudFNlcnZpY2UudW5sb2FkKCk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
var CustomerEmulationComponent = /** @class */ (function () {
    function CustomerEmulationComponent(authService, userService, routingService) {
        this.authService = authService;
        this.userService = userService;
        this.routingService = routingService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    CustomerEmulationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.userService.get().subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return (_this.customer = user); })));
    };
    /**
     * @return {?}
     */
    CustomerEmulationComponent.prototype.endSession = /**
     * @return {?}
     */
    function () {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @return {?}
     */
    CustomerEmulationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    CustomerEmulationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-customer-emulation',
                    template: "<div class=\"fd-container\">\n  <div class=\"fd-col--6\">\n    <label>\n      <input\n        class=\"form-control ng-untouched ng-pristine ng-invalid\"\n        formcontrolname=\"customer\"\n        type=\"text\"\n        disabled=\"true\"\n        placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n      />\n    </label>\n  </div>\n\n  <div class=\"fd-col--3\">\n    <button class=\"fd-button--negative\" (click)=\"endSession()\">\n      <svg\n        height=\"14\"\n        width=\"14\"\n        aria-hidden=\"true\"\n        data-icon=\"stop-circle\"\n        data-prefix=\"far\"\n        focusable=\"false\"\n        role=\"img\"\n        viewBox=\"0 0 512 512\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z\"\n        />\n      </svg>\n      <span>\n        {{ 'asm.endSession' | cxTranslate }}\n      </span>\n    </button>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CustomerEmulationComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService },
        { type: RoutingService }
    ]; };
    return CustomerEmulationComponent;
}());
export { CustomerEmulationComponent };
if (false) {
    /** @type {?} */
    CustomerEmulationComponent.prototype.customer;
    /**
     * @type {?}
     * @private
     */
    CustomerEmulationComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxjQUFjLEVBRWQsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQztJQVFFLG9DQUNZLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGNBQThCO1FBRjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxsQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNdkMsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsaXBDQUFrRDtpQkFDbkQ7Ozs7Z0JBVkMsV0FBVztnQkFHWCxXQUFXO2dCQUZYLGNBQWM7O0lBa0NoQixpQ0FBQztDQUFBLEFBNUJELElBNEJDO1NBeEJZLDBCQUEwQjs7O0lBQ3JDLDhDQUFlOzs7OztJQUNmLGtEQUEwQzs7Ozs7SUFHeEMsaURBQWtDOzs7OztJQUNsQyxpREFBa0M7Ozs7O0lBQ2xDLG9EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlcixcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3VzdG9tZXItZW11bGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWVtdWxhdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjdXN0b21lcjogVXNlcjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCkuc3Vic2NyaWJlKHVzZXIgPT4gKHRoaXMuY3VzdG9tZXIgPSB1c2VyKSlcbiAgICApO1xuICB9XG5cbiAgZW5kU2Vzc2lvbigpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
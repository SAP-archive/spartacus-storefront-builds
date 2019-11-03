/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, RoutingService, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
export class CustomerEmulationComponent {
    /**
     * @param {?} authService
     * @param {?} userService
     * @param {?} routingService
     */
    constructor(authService, userService, routingService) {
        this.authService = authService;
        this.userService = userService;
        this.routingService = routingService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.userService.get().subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => (this.customer = user))));
    }
    /**
     * @return {?}
     */
    endSession() {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CustomerEmulationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-customer-emulation',
                template: "<div class=\"fd-container\">\n  <div class=\"fd-col--6\">\n    <label>\n      <input\n        class=\"form-control ng-untouched ng-pristine ng-invalid\"\n        formcontrolname=\"customer\"\n        type=\"text\"\n        disabled=\"true\"\n        placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n      />\n    </label>\n  </div>\n\n  <div class=\"fd-col--3\">\n    <button class=\"fd-button--negative\" (click)=\"endSession()\">\n      <svg\n        height=\"14\"\n        width=\"14\"\n        aria-hidden=\"true\"\n        data-icon=\"stop-circle\"\n        data-prefix=\"far\"\n        focusable=\"false\"\n        role=\"img\"\n        viewBox=\"0 0 512 512\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z\"\n        />\n      </svg>\n      <span>\n        {{ 'asm.endSession' | cxTranslate }}\n      </span>\n    </button>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CustomerEmulationComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxjQUFjLEVBRWQsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1wQyxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFJckMsWUFDWSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixjQUE4QjtRQUY5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXZDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxpcENBQWtEO2FBQ25EOzs7O1lBVkMsV0FBVztZQUdYLFdBQVc7WUFGWCxjQUFjOzs7O0lBV2QsOENBQWU7Ozs7O0lBQ2Ysa0RBQTBDOzs7OztJQUd4QyxpREFBa0M7Ozs7O0lBQ2xDLGlEQUFrQzs7Ozs7SUFDbEMsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jdXN0b21lci1lbXVsYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGN1c3RvbWVyOiBVc2VyO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXQoKS5zdWJzY3JpYmUodXNlciA9PiAodGhpcy5jdXN0b21lciA9IHVzZXIpKVxuICAgICk7XG4gIH1cblxuICBlbmRTZXNzaW9uKCkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
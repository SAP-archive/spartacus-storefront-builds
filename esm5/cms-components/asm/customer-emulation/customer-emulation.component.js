/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
var CustomerEmulationComponent = /** @class */ (function () {
    function CustomerEmulationComponent(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
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
        this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
    };
    /**
     * @return {?}
     */
    CustomerEmulationComponent.prototype.logoutCustomer = /**
     * @return {?}
     */
    function () {
        this.asmComponentService.logoutCustomer();
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
                    template: "<ng-container\n  *ngIf=\"\n    isCustomerEmulationSessionInProgress$ | async;\n    else realCustomerSession\n  \"\n>\n  <input\n    formcontrolname=\"customer\"\n    type=\"text\"\n    disabled=\"true\"\n    placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n  />\n  <button (click)=\"logoutCustomer()\">\n    {{ 'asm.endSession' | cxTranslate }}\n  </button>\n</ng-container>\n\n<ng-template #realCustomerSession>\n  <div class=\"asm-alert\" role=\"alert\">\n    {{ 'asm.standardSessionInProgress' | cxTranslate }}\n  </div>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["cx-customer-emulation{display:flex}@media (max-width:575px){cx-customer-emulation{flex-direction:column}cx-customer-emulation>*{margin-bottom:12px}}cx-customer-emulation button{padding-left:35px;color:#b00;border-color:#b00;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23bb0000' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat}@media (min-width:575px){cx-customer-emulation input{flex:1}cx-customer-emulation button{-webkit-margin-start:8px;margin-inline-start:8px}}cx-customer-emulation button:hover{background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat #b00;color:#fff;fill:#fff}.asm-alert{padding:9px 12px;border-radius:4px;border:1px solid #89919a;background-color:#f4f4f4;color:#32363a;text-align:center;flex:1}"]
                }] }
    ];
    /** @nocollapse */
    CustomerEmulationComponent.ctorParameters = function () { return [
        { type: AsmComponentService },
        { type: UserService }
    ]; };
    return CustomerEmulationComponent;
}());
export { CustomerEmulationComponent };
if (false) {
    /** @type {?} */
    CustomerEmulationComponent.prototype.customer;
    /** @type {?} */
    CustomerEmulationComponent.prototype.isCustomerEmulationSessionInProgress$;
    /**
     * @type {?}
     * @private
     */
    CustomerEmulationComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.asmComponentService;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFRLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEU7SUFXRSxvQ0FDWSxtQkFBd0MsRUFDeEMsV0FBd0I7UUFEeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLdkMsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQ2pFLENBQUM7UUFDRixJQUFJLENBQUMscUNBQXFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9DQUFvQyxFQUFFLENBQUM7SUFDL0csQ0FBQzs7OztJQUVELG1EQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1qQkFBa0Q7b0JBRWxELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBUFEsbUJBQW1CO2dCQUZiLFdBQVc7O0lBa0MxQixpQ0FBQztDQUFBLEFBOUJELElBOEJDO1NBeEJZLDBCQUEwQjs7O0lBQ3JDLDhDQUFlOztJQUNmLDJFQUEyRDs7Ozs7SUFDM0Qsa0RBQTBDOzs7OztJQUd4Qyx5REFBa0Q7Ozs7O0lBQ2xELGlEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jdXN0b21lci1lbXVsYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjdXN0b21lcjogVXNlcjtcbiAgaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXQoKS5zdWJzY3JpYmUodXNlciA9PiAodGhpcy5jdXN0b21lciA9IHVzZXIpKVxuICAgICk7XG4gICAgdGhpcy5pc0N1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbkluUHJvZ3Jlc3MkID0gdGhpcy5hc21Db21wb25lbnRTZXJ2aWNlLmlzQ3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uSW5Qcm9ncmVzcygpO1xuICB9XG5cbiAgbG9nb3V0Q3VzdG9tZXIoKSB7XG4gICAgdGhpcy5hc21Db21wb25lbnRTZXJ2aWNlLmxvZ291dEN1c3RvbWVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
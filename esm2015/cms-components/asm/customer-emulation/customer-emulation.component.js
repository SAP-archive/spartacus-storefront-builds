/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
export class CustomerEmulationComponent {
    /**
     * @param {?} asmComponentService
     * @param {?} userService
     */
    constructor(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
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
        this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
    }
    /**
     * @return {?}
     */
    logoutCustomer() {
        this.asmComponentService.logoutCustomer();
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
                template: "<ng-container\n  *ngIf=\"\n    isCustomerEmulationSessionInProgress$ | async;\n    else realCustomerSession\n  \"\n>\n  <div class=\"fd-container\">\n    <div class=\"fd-col--6\">\n      <label>\n        <input\n          class=\"form-control ng-untouched ng-pristine ng-invalid\"\n          formcontrolname=\"customer\"\n          type=\"text\"\n          disabled=\"true\"\n          placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n        />\n      </label>\n    </div>\n\n    <div class=\"fd-col--3\">\n      <button class=\"fd-button--negative\" (click)=\"logoutCustomer()\">\n        <svg\n          height=\"14\"\n          width=\"14\"\n          aria-hidden=\"true\"\n          data-icon=\"stop-circle\"\n          data-prefix=\"far\"\n          focusable=\"false\"\n          role=\"img\"\n          viewBox=\"0 0 512 512\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z\"\n          />\n        </svg>\n        <span>\n          {{ 'asm.endSession' | cxTranslate }}\n        </span>\n      </button>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #realCustomerSession>\n  <div class=\"fd-alert\" role=\"alert\">\n    {{ 'asm.standardSessionInProgress' | cxTranslate }}\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
CustomerEmulationComponent.ctorParameters = () => [
    { type: AsmComponentService },
    { type: UserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFRLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFNeEUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFLckMsWUFDWSxtQkFBd0MsRUFDeEMsV0FBd0I7UUFEeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLdkMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FDakUsQ0FBQztRQUNGLElBQUksQ0FBQyxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0NBQW9DLEVBQUUsQ0FBQztJQUMvRyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxzZ0RBQWtEO2FBQ25EOzs7O1lBTFEsbUJBQW1CO1lBRmIsV0FBVzs7OztJQVN4Qiw4Q0FBZTs7SUFDZiwyRUFBMkQ7Ozs7O0lBQzNELGtEQUEwQzs7Ozs7SUFHeEMseURBQWtEOzs7OztJQUNsRCxpREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jdXN0b21lci1lbXVsYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGN1c3RvbWVyOiBVc2VyO1xuICBpc0N1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbkluUHJvZ3Jlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZSh1c2VyID0+ICh0aGlzLmN1c3RvbWVyID0gdXNlcikpXG4gICAgKTtcbiAgICB0aGlzLmlzQ3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uSW5Qcm9ncmVzcyQgPSB0aGlzLmFzbUNvbXBvbmVudFNlcnZpY2UuaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzKCk7XG4gIH1cblxuICBsb2dvdXRDdXN0b21lcigpIHtcbiAgICB0aGlzLmFzbUNvbXBvbmVudFNlcnZpY2UubG9nb3V0Q3VzdG9tZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { User, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
let CustomerEmulationComponent = class CustomerEmulationComponent {
    constructor(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.userService.get().subscribe((user) => (this.customer = user)));
        this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
    }
    logoutCustomer() {
        this.asmComponentService.logoutCustomer();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
CustomerEmulationComponent.ctorParameters = () => [
    { type: AsmComponentService },
    { type: UserService }
];
CustomerEmulationComponent = __decorate([
    Component({
        selector: 'cx-customer-emulation',
        template: "<ng-container\n  *ngIf=\"\n    isCustomerEmulationSessionInProgress$ | async;\n    else realCustomerSession\n  \"\n>\n  <input\n    formcontrolname=\"customer\"\n    type=\"text\"\n    disabled=\"true\"\n    placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n  />\n  <button (click)=\"logoutCustomer()\">\n    {{ 'asm.endSession' | cxTranslate }}\n  </button>\n</ng-container>\n\n<ng-template #realCustomerSession>\n  <div class=\"asm-alert\" role=\"alert\">\n    {{ 'asm.standardSessionInProgress' | cxTranslate }}\n  </div>\n</ng-template>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-customer-emulation{display:flex}@media (max-width:575px){cx-customer-emulation{flex-direction:column}cx-customer-emulation>*{margin-bottom:12px}}cx-customer-emulation button{-webkit-padding-start:35px;padding-inline-start:35px;color:#b00;border-color:#b00;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23bb0000' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat}@media (min-width:575px){cx-customer-emulation input{flex:1}cx-customer-emulation button{-webkit-margin-start:8px;margin-inline-start:8px}}cx-customer-emulation button:hover{background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat #b00;color:#fff;fill:#fff}.asm-alert{padding:9px 12px;border-radius:4px;border:1px solid #89919a;background-color:#f4f4f4;color:#32363a;text-align:center;flex:1}"]
    })
], CustomerEmulationComponent);
export { CustomerEmulationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1lbXVsYXRpb24vY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBUXhFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBS3JDLFlBQ1ksbUJBQXdDLEVBQ3hDLFdBQXdCO1FBRHhCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS3ZDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FDbkUsQ0FBQztRQUNGLElBQUksQ0FBQyxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0NBQW9DLEVBQUUsQ0FBQztJQUMvRyxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7O1lBbEJrQyxtQkFBbUI7WUFDM0IsV0FBVzs7QUFQekIsMEJBQTBCO0lBTnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsbWpCQUFrRDtRQUVsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLDBCQUEwQixDQXdCdEM7U0F4QlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWN1c3RvbWVyLWVtdWxhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGN1c3RvbWVyOiBVc2VyO1xuICBpc0N1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbkluUHJvZ3Jlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZSgodXNlcikgPT4gKHRoaXMuY3VzdG9tZXIgPSB1c2VyKSlcbiAgICApO1xuICAgIHRoaXMuaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzJCA9IHRoaXMuYXNtQ29tcG9uZW50U2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbkluUHJvZ3Jlc3MoKTtcbiAgfVxuXG4gIGxvZ291dEN1c3RvbWVyKCkge1xuICAgIHRoaXMuYXNtQ29tcG9uZW50U2VydmljZS5sb2dvdXRDdXN0b21lcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { BillingAddressFormComponent } from './billing-address-form.component';
var BillingAddressFormModule = /** @class */ (function () {
    function BillingAddressFormModule() {
    }
    BillingAddressFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                NgSelectModule,
                I18nModule,
            ],
            declarations: [BillingAddressFormComponent],
            exports: [BillingAddressFormComponent],
        })
    ], BillingAddressFormModule);
    return BillingAddressFormModule;
}());
export { BillingAddressFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9iaWxsaW5nLWFkZHJlc3MtZm9ybS9iaWxsaW5nLWFkZHJlc3MtZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQWMvRTtJQUFBO0lBQXVDLENBQUM7SUFBM0Isd0JBQXdCO1FBWnBDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsVUFBVTthQUNYO1lBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDdkMsQ0FBQztPQUNXLHdCQUF3QixDQUFHO0lBQUQsK0JBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuXG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJpbGxpbmdBZGRyZXNzRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYmlsbGluZy1hZGRyZXNzLWZvcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCaWxsaW5nQWRkcmVzc0Zvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQmlsbGluZ0FkZHJlc3NGb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmlsbGluZ0FkZHJlc3NGb3JtTW9kdWxlIHt9XG4iXX0=
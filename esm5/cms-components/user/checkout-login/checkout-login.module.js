import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { CheckoutLoginComponent } from './checkout-login.component';
import { NotCheckoutAuthGuard } from '../../checkout/guards/not-checkout-auth.guard';
import { FormErrorsModule } from '../../../shared/index';
var CheckoutLoginModule = /** @class */ (function () {
    function CheckoutLoginModule() {
    }
    CheckoutLoginModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                FormsModule,
                ReactiveFormsModule,
                FormsModule,
                ReactiveFormsModule,
                FormErrorsModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        GuestCheckoutLoginComponent: {
                            component: CheckoutLoginComponent,
                            guards: [NotCheckoutAuthGuard],
                        },
                    },
                }),
            ],
            declarations: [CheckoutLoginComponent],
            exports: [CheckoutLoginComponent],
            entryComponents: [CheckoutLoginComponent],
        })
    ], CheckoutLoginModule);
    return CheckoutLoginModule;
}());
export { CheckoutLoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUEwQnpEO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixtQkFBbUI7UUF4Qi9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixnQkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYiwyQkFBMkIsRUFBRTs0QkFDM0IsU0FBUyxFQUFFLHNCQUFzQjs0QkFDakMsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUM7eUJBQy9CO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQzFDLENBQUM7T0FDVyxtQkFBbUIsQ0FBRztJQUFELDBCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENtc0NvbmZpZywgSTE4bk1vZHVsZSwgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tvdXQtbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IE5vdENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvZ3VhcmRzL25vdC1jaGVja291dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBHdWVzdENoZWNrb3V0TG9naW5Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENoZWNrb3V0TG9naW5Db21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbTm90Q2hlY2tvdXRBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRMb2dpbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja291dExvZ2luQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2hlY2tvdXRMb2dpbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TG9naW5Nb2R1bGUge31cbiJdfQ==
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { CheckoutLoginComponent } from './checkout-login.component';
import { NotCheckoutAuthGuard } from '../../checkout/guards/not-checkout-auth.guard';
let CheckoutLoginModule = class CheckoutLoginModule {
};
CheckoutLoginModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            FormsModule,
            ReactiveFormsModule,
            FormsModule,
            ReactiveFormsModule,
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
export { CheckoutLoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUF5QnJGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBQUcsQ0FBQTtBQUF0QixtQkFBbUI7SUF2Qi9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixVQUFVO1lBQ1YsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsbUJBQW1CO1NBQ3BCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYiwyQkFBMkIsRUFBRTt3QkFDM0IsU0FBUyxFQUFFLHNCQUFzQjt3QkFDakMsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQy9CO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDakMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDMUMsQ0FBQztHQUNXLG1CQUFtQixDQUFHO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDbXNDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0TG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LWxvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2d1YXJkcy9ub3QtY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBHdWVzdENoZWNrb3V0TG9naW5Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENoZWNrb3V0TG9naW5Db21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbTm90Q2hlY2tvdXRBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRMb2dpbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja291dExvZ2luQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2hlY2tvdXRMb2dpbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TG9naW5Nb2R1bGUge31cbiJdfQ==
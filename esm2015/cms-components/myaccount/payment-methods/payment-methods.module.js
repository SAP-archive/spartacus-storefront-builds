import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { PaymentMethodsComponent } from './payment-methods.component';
let PaymentMethodsModule = class PaymentMethodsModule {
};
PaymentMethodsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CardModule,
            SpinnerModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    AccountPaymentDetailsComponent: {
                        component: PaymentMethodsComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            I18nModule,
        ],
        providers: [UserService],
        declarations: [PaymentMethodsComponent],
        exports: [PaymentMethodsComponent],
        entryComponents: [PaymentMethodsComponent],
    })
], PaymentMethodsModule);
export { PaymentMethodsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFzQnRFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFwQmhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixVQUFVO1lBQ1YsYUFBYTtZQUNiLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYiw4QkFBOEIsRUFBRTt3QkFDOUIsU0FBUyxFQUFFLHVCQUF1Qjt3QkFDbEMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNwQjtpQkFDRjthQUNGLENBQUM7WUFDRixVQUFVO1NBQ1g7UUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDeEIsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDbEMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDM0MsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBY2NvdW50UGF5bWVudERldGFpbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFBheW1lbnRNZXRob2RzQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGF5bWVudE1ldGhvZHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGF5bWVudE1ldGhvZHNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQYXltZW50TWV0aG9kc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RzTW9kdWxlIHt9XG4iXX0=
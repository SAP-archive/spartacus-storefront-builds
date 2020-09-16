import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CheckoutGuard } from '../../guards/checkout.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutOrchestratorComponent } from './checkout-orchestrator.component';
export class CheckoutOrchestratorModule {
}
CheckoutOrchestratorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [
                    provideDefaultConfig(defaultCheckoutConfig),
                    provideDefaultConfig({
                        cmsComponents: {
                            CheckoutOrchestrator: {
                                component: CheckoutOrchestratorComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
                            },
                        },
                    }),
                ],
                declarations: [CheckoutOrchestratorComponent],
                entryComponents: [CheckoutOrchestratorComponent],
                exports: [CheckoutOrchestratorComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBbUJsRixNQUFNLE9BQU8sMEJBQTBCOzs7WUFqQnRDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDM0Msb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixvQkFBb0IsRUFBRTtnQ0FDcEIsU0FBUyxFQUFFLDZCQUE2QjtnQ0FDeEMsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDOzZCQUM5RDt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUM3QyxlQUFlLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2RlZmF1bHQtY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tvdXQtb3JjaGVzdHJhdG9yLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0Q2hlY2tvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dE9yY2hlc3RyYXRvcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQ2hlY2tvdXRBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkLCBDaGVja291dEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0T3JjaGVzdHJhdG9yQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSB7fVxuIl19
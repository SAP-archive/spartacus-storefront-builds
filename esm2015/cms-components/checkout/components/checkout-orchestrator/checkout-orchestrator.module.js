import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { CheckoutConfig } from '../../config/checkout-config';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CheckoutGuard } from '../../guards/checkout.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutOrchestratorComponent } from './checkout-orchestrator.component';
let CheckoutOrchestratorModule = class CheckoutOrchestratorModule {
};
CheckoutOrchestratorModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig(defaultCheckoutConfig),
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutOrchestrator: {
                        component: CheckoutOrchestratorComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
                    },
                },
            }),
        ],
        providers: [{ provide: CheckoutConfig, useExisting: Config }],
        declarations: [CheckoutOrchestratorComponent],
        entryComponents: [CheckoutOrchestratorComponent],
        exports: [CheckoutOrchestratorComponent],
    })
], CheckoutOrchestratorModule);
export { CheckoutOrchestratorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQW9CbEYsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7Q0FBRyxDQUFBO0FBQTdCLDBCQUEwQjtJQWxCdEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7WUFDOUMsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUsNkJBQTZCO3dCQUN4QyxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7cUJBQzlEO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUM3RCxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztRQUM3QyxlQUFlLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztRQUNoRCxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUN6QyxDQUFDO0dBQ1csMEJBQTBCLENBQUc7U0FBN0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0Q2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBDaGVja291dEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0Lmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0T3JjaGVzdHJhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1vcmNoZXN0cmF0b3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q2hlY2tvdXRDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dE9yY2hlc3RyYXRvcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQ2hlY2tvdXRBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkLCBDaGVja291dEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2hlY2tvdXRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0T3JjaGVzdHJhdG9yQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSB7fVxuIl19
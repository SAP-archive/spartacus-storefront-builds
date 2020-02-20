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
var CheckoutOrchestratorModule = /** @class */ (function () {
    function CheckoutOrchestratorModule() {
    }
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
    return CheckoutOrchestratorModule;
}());
export { CheckoutOrchestratorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQW9CbEY7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLDBCQUEwQjtRQWxCdEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDOUMsWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLG9CQUFvQixFQUFFOzRCQUNwQixTQUFTLEVBQUUsNkJBQTZCOzRCQUN4QyxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7eUJBQzlEO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDN0QsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDN0MsZUFBZSxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDaEQsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDekMsQ0FBQztPQUNXLDBCQUEwQixDQUFHO0lBQUQsaUNBQUM7Q0FBQSxBQUExQyxJQUEwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9kZWZhdWx0LWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDaGVja291dENvbmZpZyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0T3JjaGVzdHJhdG9yOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtDaGVja291dEF1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmQsIENoZWNrb3V0R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDaGVja291dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0T3JjaGVzdHJhdG9yTW9kdWxlIHt9XG4iXX0=
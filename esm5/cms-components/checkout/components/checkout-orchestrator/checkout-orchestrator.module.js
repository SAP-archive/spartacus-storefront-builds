/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, Config, ConfigModule } from '@spartacus/core';
import { CheckoutConfig } from '../../config/checkout-config';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CheckoutGuard } from '../../guards/checkout.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutOrchestratorComponent } from './checkout-orchestrator.component';
var CheckoutOrchestratorModule = /** @class */ (function () {
    function CheckoutOrchestratorModule() {
    }
    CheckoutOrchestratorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig(defaultCheckoutConfig),
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutOrchestrator: {
                                    component: CheckoutOrchestratorComponent,
                                    guards: [AuthGuard, CartNotEmptyGuard, CheckoutGuard],
                                },
                            },
                        }))),
                    ],
                    providers: [{ provide: CheckoutConfig, useExisting: Config }],
                    declarations: [CheckoutOrchestratorComponent],
                    entryComponents: [CheckoutOrchestratorComponent],
                    exports: [CheckoutOrchestratorComponent],
                },] }
    ];
    return CheckoutOrchestratorModule;
}());
export { CheckoutOrchestratorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEY7SUFBQTtJQWtCeUMsQ0FBQzs7Z0JBbEJ6QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDOUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG9CQUFvQixFQUFFO29DQUNwQixTQUFTLEVBQUUsNkJBQTZCO29DQUN4QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO2lDQUN0RDs2QkFDRjt5QkFDRixFQUFBLENBQUM7cUJBQ0g7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDN0QsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7b0JBQzdDLGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUNoRCxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDekM7O0lBQ3dDLGlDQUFDO0NBQUEsQUFsQjFDLElBa0IwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgQ21zQ29uZmlnLCBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2RlZmF1bHQtY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDaGVja291dENvbmZpZyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0T3JjaGVzdHJhdG9yOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkLCBDaGVja291dEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2hlY2tvdXRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0T3JjaGVzdHJhdG9yQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSB7fVxuIl19
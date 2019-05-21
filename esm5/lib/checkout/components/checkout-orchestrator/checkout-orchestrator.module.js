/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutOrchestratorComponent } from './checkout-orchestrator.component';
import { ConfigModule, Config, AuthGuard } from '@spartacus/core';
import { CheckoutGuard } from '../../guards/checkout.guard';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CheckoutConfig } from '../../config/checkout-config';
import { CartNotEmptyGuard } from './../../../../cms-components/checkout/cart/cart-not-empty.guard';
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
                                    selector: 'cx-checkout-orchestrator',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LW9yY2hlc3RyYXRvci9jaGVja291dC1vcmNoZXN0cmF0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXBHO0lBQUE7SUFrQnlDLENBQUM7O2dCQWxCekMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7d0JBQzlDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixvQkFBb0IsRUFBRTtvQ0FDcEIsUUFBUSxFQUFFLDBCQUEwQjtvQ0FDcEMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztpQ0FDdEQ7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQzdELFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUM3QyxlQUFlLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDaEQsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQ3pDOztJQUN3QyxpQ0FBQztDQUFBLEFBbEIxQyxJQWtCMEM7U0FBN0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENoZWNrb3V0T3JjaGVzdHJhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1vcmNoZXN0cmF0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnLCBDb25maWcsIEF1dGhHdWFyZCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0Lmd1YXJkJztcbmltcG9ydCB7IGRlZmF1bHRDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9kZWZhdWx0LWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDaGVja291dENvbmZpZyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0T3JjaGVzdHJhdG9yOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1vcmNoZXN0cmF0b3InLFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmQsIENoZWNrb3V0R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDaGVja291dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRPcmNoZXN0cmF0b3JDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja291dE9yY2hlc3RyYXRvckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0T3JjaGVzdHJhdG9yTW9kdWxlIHt9XG4iXX0=
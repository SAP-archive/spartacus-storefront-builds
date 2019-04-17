/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, UserService, I18nModule, } from '@spartacus/core';
import { PaymentMethodsComponent } from './components/payment-methods.component';
import { CardModule } from '../../ui/components/card/card.module';
import { SpinnerModule } from '../../ui/components/spinner/spinner.module';
var PaymentMethodsModule = /** @class */ (function () {
    function PaymentMethodsModule() {
    }
    PaymentMethodsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CardModule,
                        SpinnerModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                AccountPaymentDetailsComponent: { selector: 'cx-payment-methods' },
                            },
                        }))),
                        I18nModule,
                    ],
                    providers: [UserService],
                    declarations: [PaymentMethodsComponent],
                    exports: [PaymentMethodsComponent],
                    entryComponents: [PaymentMethodsComponent],
                },] }
    ];
    return PaymentMethodsModule;
}());
export { PaymentMethodsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFO0lBQUE7SUFpQm1DLENBQUM7O2dCQWpCbkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsOEJBQThCLEVBQUUsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7NkJBQ25FO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixVQUFVO3FCQUNYO29CQUNELFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDeEIsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNsQyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDM0M7O0lBQ2tDLDJCQUFDO0NBQUEsQUFqQnBDLElBaUJvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIFVzZXJTZXJ2aWNlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudFBheW1lbnREZXRhaWxzQ29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2RzJyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW1BheW1lbnRNZXRob2RzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BheW1lbnRNZXRob2RzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudE1ldGhvZHNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kc01vZHVsZSB7fVxuIl19
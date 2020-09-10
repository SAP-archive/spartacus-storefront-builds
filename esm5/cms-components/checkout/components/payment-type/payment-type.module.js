import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { PaymentTypeComponent } from './payment-type.component';
var PaymentTypeModule = /** @class */ (function () {
    function PaymentTypeModule() {
    }
    PaymentTypeModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                SpinnerModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutPaymentType: {
                            component: PaymentTypeComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                        },
                    },
                }),
            ],
            declarations: [PaymentTypeComponent],
            entryComponents: [PaymentTypeComponent],
            exports: [PaymentTypeComponent],
        })
    ], PaymentTypeModule);
    return PaymentTypeModule;
}());
export { PaymentTypeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBb0JoRTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBbEI3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLG1CQUFtQixFQUFFOzRCQUNuQixTQUFTLEVBQUUsb0JBQW9COzRCQUMvQixNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQzt5QkFDL0M7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDaEMsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgUGF5bWVudFR5cGVDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtdHlwZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRQYXltZW50VHlwZToge1xuICAgICAgICAgIGNvbXBvbmVudDogUGF5bWVudFR5cGVDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQ2hlY2tvdXRBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BheW1lbnRUeXBlQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudFR5cGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGF5bWVudFR5cGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50VHlwZU1vZHVsZSB7fVxuIl19
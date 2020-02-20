import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { PaymentMethodsComponent } from './payment-methods.component';
var PaymentMethodsModule = /** @class */ (function () {
    function PaymentMethodsModule() {
    }
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
    return PaymentMethodsModule;
}());
export { PaymentMethodsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFzQnRFO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixvQkFBb0I7UUFwQmhDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2IsOEJBQThCLEVBQUU7NEJBQzlCLFNBQVMsRUFBRSx1QkFBdUI7NEJBQ2xDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzt5QkFDcEI7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixVQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDeEIsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDbEMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDM0MsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudFBheW1lbnREZXRhaWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQYXltZW50TWV0aG9kc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW1BheW1lbnRNZXRob2RzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BheW1lbnRNZXRob2RzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudE1ldGhvZHNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kc01vZHVsZSB7fVxuIl19
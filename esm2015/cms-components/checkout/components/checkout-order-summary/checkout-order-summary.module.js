import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
let CheckoutOrderSummaryModule = class CheckoutOrderSummaryModule {
};
CheckoutOrderSummaryModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CartSharedModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutOrderSummary: {
                        component: CheckoutOrderSummaryComponent,
                    },
                },
            }),
        ],
        declarations: [CheckoutOrderSummaryComponent],
        entryComponents: [CheckoutOrderSummaryComponent],
        exports: [CheckoutOrderSummaryComponent],
    })
], CheckoutOrderSummaryModule);
export { CheckoutOrderSummaryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWtCbkYsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7Q0FBRyxDQUFBO0FBQTdCLDBCQUEwQjtJQWhCdEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2Isb0JBQW9CLEVBQUU7d0JBQ3BCLFNBQVMsRUFBRSw2QkFBNkI7cUJBQ3pDO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDN0MsZUFBZSxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDaEQsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDekMsQ0FBQztHQUNXLDBCQUEwQixDQUFHO1NBQTdCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1vcmRlci1zdW1tYXJ5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRPcmRlclN1bW1hcnk6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRPcmRlclN1bW1hcnlDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dE9yZGVyU3VtbWFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja291dE9yZGVyU3VtbWFyeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0T3JkZXJTdW1tYXJ5TW9kdWxlIHt9XG4iXX0=
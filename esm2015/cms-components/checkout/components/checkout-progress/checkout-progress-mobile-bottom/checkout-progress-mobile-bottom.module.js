import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { defaultCheckoutConfig } from '../../../config/default-checkout-config';
import { CheckoutAuthGuard } from '../../../guards/checkout-auth.guard';
import { CartNotEmptyGuard } from './../../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutProgressMobileBottomComponent } from './checkout-progress-mobile-bottom.component';
import { CheckoutStepsSetGuard } from '../../../guards/checkout-steps-set.guard';
let CheckoutProgressMobileBottomModule = class CheckoutProgressMobileBottomModule {
};
CheckoutProgressMobileBottomModule = __decorate([
    NgModule({
        imports: [CommonModule, UrlModule, I18nModule, RouterModule],
        providers: [
            provideDefaultConfig(defaultCheckoutConfig),
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutProgressMobileBottom: {
                        component: CheckoutProgressMobileBottomComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutProgressMobileBottomComponent],
        entryComponents: [CheckoutProgressMobileBottomComponent],
        exports: [CheckoutProgressMobileBottomComponent],
    })
], CheckoutProgressMobileBottomModule);
export { CheckoutProgressMobileBottomModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM5RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQW1CakYsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7Q0FBRyxDQUFBO0FBQXJDLGtDQUFrQztJQWpCOUMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO1FBQzVELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO1lBQzNDLG9CQUFvQixDQUFZO2dCQUM5QixhQUFhLEVBQUU7b0JBQ2IsNEJBQTRCLEVBQUU7d0JBQzVCLFNBQVMsRUFBRSxxQ0FBcUM7d0JBQ2hELE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO3FCQUN0RTtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1FBQ3JELGVBQWUsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1FBQ3hELE9BQU8sRUFBRSxDQUFDLHFDQUFxQyxDQUFDO0tBQ2pELENBQUM7R0FDVyxrQ0FBa0MsQ0FBRztTQUFyQyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0Q2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBzU2V0R3VhcmQgfSBmcm9tICcuLi8uLi8uLi9ndWFyZHMvY2hlY2tvdXQtc3RlcHMtc2V0Lmd1YXJkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVXJsTW9kdWxlLCBJMThuTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0Q2hlY2tvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0NoZWNrb3V0QXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZCwgQ2hlY2tvdXRTdGVwc1NldEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlIHt9XG4iXX0=
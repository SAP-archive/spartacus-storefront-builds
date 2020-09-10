import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CheckoutStepsSetGuard } from '../../guards/checkout-steps-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutProgressComponent } from './checkout-progress.component';
import { MultiLinePipe } from './multiline-titles.pipe';
var CheckoutProgressModule = /** @class */ (function () {
    function CheckoutProgressModule() {
    }
    CheckoutProgressModule = __decorate([
        NgModule({
            imports: [CommonModule, UrlModule, I18nModule, RouterModule],
            declarations: [CheckoutProgressComponent, MultiLinePipe],
            entryComponents: [CheckoutProgressComponent],
            exports: [CheckoutProgressComponent],
            providers: [
                provideDefaultConfig(defaultCheckoutConfig),
                provideDefaultConfig({
                    cmsComponents: {
                        CheckoutProgress: {
                            component: CheckoutProgressComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard],
                        },
                    },
                }),
            ],
        })
    ], CheckoutProgressModule);
    return CheckoutProgressModule;
}());
export { CheckoutProgressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFtQnhEO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixzQkFBc0I7UUFqQmxDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUM1RCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxhQUFhLENBQUM7WUFDeEQsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDNUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDcEMsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO2dCQUMzQyxvQkFBb0IsQ0FBWTtvQkFDOUIsYUFBYSxFQUFFO3dCQUNiLGdCQUFnQixFQUFFOzRCQUNoQixTQUFTLEVBQUUseUJBQXlCOzRCQUNwQyxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQzt5QkFDdEU7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQUFHO0lBQUQsNkJBQUM7Q0FBQSxBQUF0QyxJQUFzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0Q2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBzU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtc3RlcHMtc2V0Lmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LXByb2dyZXNzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aUxpbmVQaXBlIH0gZnJvbSAnLi9tdWx0aWxpbmUtdGl0bGVzLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBVcmxNb2R1bGUsIEkxOG5Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnQsIE11bHRpTGluZVBpcGVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dFByb2dyZXNzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0Q2hlY2tvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFByb2dyZXNzOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDaGVja291dFByb2dyZXNzQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0NoZWNrb3V0QXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZCwgQ2hlY2tvdXRTdGVwc1NldEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NNb2R1bGUge31cbiJdfQ==
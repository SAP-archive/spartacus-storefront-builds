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
let CheckoutProgressModule = class CheckoutProgressModule {
};
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
export { CheckoutProgressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFtQnhELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBQUcsQ0FBQTtBQUF6QixzQkFBc0I7SUFqQmxDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztRQUM1RCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxhQUFhLENBQUM7UUFDeEQsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDNUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDcEMsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUMscUJBQXFCLENBQUM7WUFDM0Msb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYixnQkFBZ0IsRUFBRTt3QkFDaEIsU0FBUyxFQUFFLHlCQUF5Qjt3QkFDcEMsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7cUJBQ3RFO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQUFHO1NBQXpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9kZWZhdWx0LWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcHNTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC1zdGVwcy1zZXQuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpTGluZVBpcGUgfSBmcm9tICcuL211bHRpbGluZS10aXRsZXMucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFVybE1vZHVsZSwgSTE4bk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudCwgTXVsdGlMaW5lUGlwZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRDaGVja291dENvbmZpZyksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UHJvZ3Jlc3M6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQ2hlY2tvdXRBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkLCBDaGVja291dFN0ZXBzU2V0R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc01vZHVsZSB7fVxuIl19
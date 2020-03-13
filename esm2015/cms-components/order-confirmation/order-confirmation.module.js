import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { CardModule } from '../../shared/components/card/card.module';
import { CartSharedModule } from '../cart/cart-shared/cart-shared.module';
import { PwaModule } from './../../cms-structure/pwa/pwa.module';
import { OrderConfirmationItemsComponent } from './components/order-confirmation-items/order-confirmation-items.component';
import { OrderConfirmationOverviewComponent } from './components/order-confirmation-overview/order-confirmation-overview.component';
// tslint:disable-next-line
import { OrderConfirmationThankYouMessageComponent } from './components/order-confirmation-thank-you-message/order-confirmation-thank-you-message.component';
import { OrderConfirmationTotalsComponent } from './components/order-confirmation-totals/order-confirmation-totals.component';
import { GuestRegisterFormComponent } from './components/guest-register-form/guest-register-form.component';
import { OrderConfirmationGuard } from './guards/order-confirmation.guard';
import { PromotionsModule } from '../checkout/components/promotions/promotions.module';
const orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
let OrderConfirmationModule = class OrderConfirmationModule {
};
OrderConfirmationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CartSharedModule,
            CardModule,
            PwaModule,
            PromotionsModule,
            I18nModule,
            ReactiveFormsModule,
            FeaturesConfigModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    OrderConfirmationThankMessageComponent: {
                        component: OrderConfirmationThankYouMessageComponent,
                        guards: [OrderConfirmationGuard],
                    },
                    OrderConfirmationItemsComponent: {
                        component: OrderConfirmationItemsComponent,
                        guards: [OrderConfirmationGuard],
                    },
                    OrderConfirmationTotalsComponent: {
                        component: OrderConfirmationTotalsComponent,
                        guards: [OrderConfirmationGuard],
                    },
                    OrderConfirmationOverviewComponent: {
                        component: OrderConfirmationOverviewComponent,
                        guards: [OrderConfirmationGuard],
                    },
                },
            }),
        ],
        declarations: [...orderConfirmationComponents],
        exports: [...orderConfirmationComponents],
        entryComponents: [...orderConfirmationComponents],
    })
], OrderConfirmationModule);
export { OrderConfirmationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3BJLDJCQUEyQjtBQUMzQixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUM3SixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUV2RixNQUFNLDJCQUEyQixHQUFHO0lBQ2xDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLGdDQUFnQztJQUNoQywwQkFBMEI7Q0FDM0IsQ0FBQztBQXVDRixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtDQUFHLENBQUE7QUFBMUIsdUJBQXVCO0lBckNuQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsb0JBQW9CO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYixzQ0FBc0MsRUFBRTt3QkFDdEMsU0FBUyxFQUFFLHlDQUF5Qzt3QkFDcEQsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ2pDO29CQUNELCtCQUErQixFQUFFO3dCQUMvQixTQUFTLEVBQUUsK0JBQStCO3dCQUMxQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDakM7b0JBQ0QsZ0NBQWdDLEVBQUU7d0JBQ2hDLFNBQVMsRUFBRSxnQ0FBZ0M7d0JBQzNDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNqQztvQkFDRCxrQ0FBa0MsRUFBRTt3QkFDbEMsU0FBUyxFQUFFLGtDQUFrQzt3QkFDN0MsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ2pDO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztRQUM5QyxPQUFPLEVBQUUsQ0FBQyxHQUFHLDJCQUEyQixDQUFDO1FBQ3pDLGVBQWUsRUFBRSxDQUFDLEdBQUcsMkJBQTJCLENBQUM7S0FDbEQsQ0FBQztHQUNXLHVCQUF1QixDQUFHO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vY21zLXN0cnVjdHVyZS9wd2EvcHdhLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1pdGVtcy9vcmRlci1jb25maXJtYXRpb24taXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3L29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy5jb21wb25lbnQnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2Uvb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzL29yZGVyLWNvbmZpcm1hdGlvbi10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IEd1ZXN0UmVnaXN0ZXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2d1ZXN0LXJlZ2lzdGVyLWZvcm0vZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25HdWFyZCB9IGZyb20gJy4vZ3VhcmRzL29yZGVyLWNvbmZpcm1hdGlvbi5ndWFyZCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcblxuY29uc3Qgb3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzID0gW1xuICBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCxcbiAgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQsXG4gIEd1ZXN0UmVnaXN0ZXJGb3JtQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgUHdhTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25UaGFua01lc3NhZ2VDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW09yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgICBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW09yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgICBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4ub3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4ub3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUge31cbiJdfQ==
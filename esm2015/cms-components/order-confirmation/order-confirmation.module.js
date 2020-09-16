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
import { FormErrorsModule } from '../../shared/index';
const orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
export class OrderConfirmationModule {
}
OrderConfirmationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartSharedModule,
                    CardModule,
                    PwaModule,
                    PromotionsModule,
                    I18nModule,
                    ReactiveFormsModule,
                    FeaturesConfigModule,
                    FormErrorsModule,
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDcEksMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBQzdKLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE1BQU0sMkJBQTJCLEdBQUc7SUFDbEMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtDQUMzQixDQUFDO0FBd0NGLE1BQU0sT0FBTyx1QkFBdUI7OztZQXRDbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsVUFBVTtvQkFDVixTQUFTO29CQUNULGdCQUFnQjtvQkFDaEIsVUFBVTtvQkFDVixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixzQ0FBc0MsRUFBRTtnQ0FDdEMsU0FBUyxFQUFFLHlDQUF5QztnQ0FDcEQsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7NkJBQ2pDOzRCQUNELCtCQUErQixFQUFFO2dDQUMvQixTQUFTLEVBQUUsK0JBQStCO2dDQUMxQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzs2QkFDakM7NEJBQ0QsZ0NBQWdDLEVBQUU7Z0NBQ2hDLFNBQVMsRUFBRSxnQ0FBZ0M7Z0NBQzNDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDOzZCQUNqQzs0QkFDRCxrQ0FBa0MsRUFBRTtnQ0FDbEMsU0FBUyxFQUFFLGtDQUFrQztnQ0FDN0MsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7NkJBQ2pDO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztnQkFDekMsZUFBZSxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vY21zLXN0cnVjdHVyZS9wd2EvcHdhLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1pdGVtcy9vcmRlci1jb25maXJtYXRpb24taXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3L29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy5jb21wb25lbnQnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2Uvb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzL29yZGVyLWNvbmZpcm1hdGlvbi10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IEd1ZXN0UmVnaXN0ZXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2d1ZXN0LXJlZ2lzdGVyLWZvcm0vZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25HdWFyZCB9IGZyb20gJy4vZ3VhcmRzL29yZGVyLWNvbmZpcm1hdGlvbi5ndWFyZCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5jb25zdCBvcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHMgPSBbXG4gIE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCxcbiAgR3Vlc3RSZWdpc3RlckZvcm1Db21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBQd2FNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uVGhhbmtNZXNzYWdlQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW09yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgICBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW09yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4ub3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIHt9XG4iXX0=
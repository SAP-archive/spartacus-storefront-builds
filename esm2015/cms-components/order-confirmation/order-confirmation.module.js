/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule, I18nModule, ConfigModule, AuthGuard, } from '@spartacus/core';
import { PwaModule } from './../../cms-structure/pwa/pwa.module';
import { CardModule } from '../../shared/components/card/card.module';
import { CartSharedModule } from '../cart/cart-shared/cart-shared.module';
import { OrderConfirmationItemsComponent } from './components/order-confirmation-items/order-confirmation-items.component';
// tslint:disable-next-line
import { OrderConfirmationThankYouMessageComponent } from './components/order-confirmation-thank-you-message/order-confirmation-thank-you-message.component';
import { OrderConfirmationOverviewComponent } from './components/order-confirmation-overview/order-confirmation-overview.component';
import { OrderConfirmationTotalsComponent } from './components/order-confirmation-totals/order-confirmation-totals.component';
import { OrderConfirmationGuard } from './guards/index';
/** @type {?} */
const orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
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
                    CheckoutModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            OrderConfirmationThankMessageComponent: {
                                component: OrderConfirmationThankYouMessageComponent,
                                guards: [AuthGuard, OrderConfirmationGuard],
                            },
                            OrderConfirmationItemsComponent: {
                                component: OrderConfirmationItemsComponent,
                                guards: [AuthGuard, OrderConfirmationGuard],
                            },
                            OrderConfirmationTotalsComponent: {
                                component: OrderConfirmationTotalsComponent,
                                guards: [AuthGuard, OrderConfirmationGuard],
                            },
                            OrderConfirmationOverviewComponent: {
                                component: OrderConfirmationOverviewComponent,
                                guards: [AuthGuard, OrderConfirmationGuard],
                            },
                        },
                    }))),
                ],
                declarations: [...orderConfirmationComponents],
                exports: [...orderConfirmationComponents],
                entryComponents: [...orderConfirmationComponents],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFVBQVUsRUFDVixZQUFZLEVBRVosU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQzs7QUFFM0gsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sa0dBQWtHLENBQUM7QUFDN0osT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDcEksT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRWxELDJCQUEyQixHQUFHO0lBQ2xDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLGdDQUFnQztDQUNqQztBQW1DRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFqQ25DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxjQUFjO29CQUNkLFVBQVU7b0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHNDQUFzQyxFQUFFO2dDQUN0QyxTQUFTLEVBQUUseUNBQXlDO2dDQUNwRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7NkJBQzVDOzRCQUNELCtCQUErQixFQUFFO2dDQUMvQixTQUFTLEVBQUUsK0JBQStCO2dDQUMxQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7NkJBQzVDOzRCQUNELGdDQUFnQyxFQUFFO2dDQUNoQyxTQUFTLEVBQUUsZ0NBQWdDO2dDQUMzQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7NkJBQzVDOzRCQUNELGtDQUFrQyxFQUFFO2dDQUNsQyxTQUFTLEVBQUUsa0NBQWtDO2dDQUM3QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7NkJBQzVDO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLDJCQUEyQixDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQyxHQUFHLDJCQUEyQixDQUFDO2dCQUN6QyxlQUFlLEVBQUUsQ0FBQyxHQUFHLDJCQUEyQixDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDaGVja291dE1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEF1dGhHdWFyZCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vY21zLXN0cnVjdHVyZS9wd2EvcHdhLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24taXRlbXMvb3JkZXItY29uZmlybWF0aW9uLWl0ZW1zLmNvbXBvbmVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3L29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRvdGFscy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbkd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvaW5kZXgnO1xuXG5jb25zdCBvcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHMgPSBbXG4gIE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFB3YU1vZHVsZSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBPcmRlckNvbmZpcm1hdGlvblRoYW5rTWVzc2FnZUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIE9yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgICBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIE9yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4ub3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIHt9XG4iXX0=
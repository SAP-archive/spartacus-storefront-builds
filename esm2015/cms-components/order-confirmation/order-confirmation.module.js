/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
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
/** @type {?} */
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
                    I18nModule,
                    ReactiveFormsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                declarations: [...orderConfirmationComponents],
                exports: [...orderConfirmationComponents],
                entryComponents: [...orderConfirmationComponents],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7O0FBRXBJLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBQzdKLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztNQUVyRSwyQkFBMkIsR0FBRztJQUNsQywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QyxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0NBQzNCO0FBbUNELE1BQU0sT0FBTyx1QkFBdUI7OztZQWpDbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsVUFBVTtvQkFDVixTQUFTO29CQUNULFVBQVU7b0JBQ1YsbUJBQW1CO29CQUNuQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2Isc0NBQXNDLEVBQUU7Z0NBQ3RDLFNBQVMsRUFBRSx5Q0FBeUM7Z0NBQ3BELE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDOzZCQUNqQzs0QkFDRCwrQkFBK0IsRUFBRTtnQ0FDL0IsU0FBUyxFQUFFLCtCQUErQjtnQ0FDMUMsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7NkJBQ2pDOzRCQUNELGdDQUFnQyxFQUFFO2dDQUNoQyxTQUFTLEVBQUUsZ0NBQWdDO2dDQUMzQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzs2QkFDakM7NEJBQ0Qsa0NBQWtDLEVBQUU7Z0NBQ2xDLFNBQVMsRUFBRSxrQ0FBa0M7Z0NBQzdDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDOzZCQUNqQzt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztnQkFDekMsZUFBZSxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24taXRlbXMvb3JkZXItY29uZmlybWF0aW9uLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRvdGFscy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWVzdC1yZWdpc3Rlci1mb3JtL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24uZ3VhcmQnO1xuXG5jb25zdCBvcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHMgPSBbXG4gIE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCxcbiAgR3Vlc3RSZWdpc3RlckZvcm1Db21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBQd2FNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBPcmRlckNvbmZpcm1hdGlvblRoYW5rTWVzc2FnZUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB7fVxuIl19
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
import { FormErrorsModule } from '../../shared/index';
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
    })
], OrderConfirmationModule);
export { OrderConfirmationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3BJLDJCQUEyQjtBQUMzQixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUM3SixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxNQUFNLDJCQUEyQixHQUFHO0lBQ2xDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLGdDQUFnQztJQUNoQywwQkFBMEI7Q0FDM0IsQ0FBQztBQXdDRixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtDQUFHLENBQUE7QUFBMUIsdUJBQXVCO0lBdENuQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFZO2dCQUM5QixhQUFhLEVBQUU7b0JBQ2Isc0NBQXNDLEVBQUU7d0JBQ3RDLFNBQVMsRUFBRSx5Q0FBeUM7d0JBQ3BELE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNqQztvQkFDRCwrQkFBK0IsRUFBRTt3QkFDL0IsU0FBUyxFQUFFLCtCQUErQjt3QkFDMUMsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ2pDO29CQUNELGdDQUFnQyxFQUFFO3dCQUNoQyxTQUFTLEVBQUUsZ0NBQWdDO3dCQUMzQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDakM7b0JBQ0Qsa0NBQWtDLEVBQUU7d0JBQ2xDLFNBQVMsRUFBRSxrQ0FBa0M7d0JBQzdDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNqQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsMkJBQTJCLENBQUM7UUFDOUMsT0FBTyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQztRQUN6QyxlQUFlLEVBQUUsQ0FBQyxHQUFHLDJCQUEyQixDQUFDO0tBQ2xELENBQUM7R0FDVyx1QkFBdUIsQ0FBRztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24taXRlbXMvb3JkZXItY29uZmlybWF0aW9uLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRvdGFscy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWVzdC1yZWdpc3Rlci1mb3JtL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24uZ3VhcmQnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcblxuY29uc3Qgb3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzID0gW1xuICBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCxcbiAgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQsXG4gIEd1ZXN0UmVnaXN0ZXJGb3JtQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgUHdhTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBPcmRlckNvbmZpcm1hdGlvblRoYW5rTWVzc2FnZUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB7fVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule, FeaturesConfigModule, } from '@spartacus/core';
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
/** @type {?} */
var orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
var OrderConfirmationModule = /** @class */ (function () {
    function OrderConfirmationModule() {
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
                    declarations: tslib_1.__spread(orderConfirmationComponents),
                    exports: tslib_1.__spread(orderConfirmationComponents),
                    entryComponents: tslib_1.__spread(orderConfirmationComponents),
                },] }
    ];
    return OrderConfirmationModule;
}());
export { OrderConfirmationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQzs7QUFFcEksT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sa0dBQWtHLENBQUM7QUFDN0osT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7O0lBRWpGLDJCQUEyQixHQUFHO0lBQ2xDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLGdDQUFnQztJQUNoQywwQkFBMEI7Q0FDM0I7QUFFRDtJQUFBO0lBbUNzQyxDQUFDOztnQkFuQ3RDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1YsU0FBUzt3QkFDVCxnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1YsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixzQ0FBc0MsRUFBRTtvQ0FDdEMsU0FBUyxFQUFFLHlDQUF5QztvQ0FDcEQsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUNBQ2pDO2dDQUNELCtCQUErQixFQUFFO29DQUMvQixTQUFTLEVBQUUsK0JBQStCO29DQUMxQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQ0FDakM7Z0NBQ0QsZ0NBQWdDLEVBQUU7b0NBQ2hDLFNBQVMsRUFBRSxnQ0FBZ0M7b0NBQzNDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lDQUNqQztnQ0FDRCxrQ0FBa0MsRUFBRTtvQ0FDbEMsU0FBUyxFQUFFLGtDQUFrQztvQ0FDN0MsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUNBQ2pDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLG1CQUFNLDJCQUEyQixDQUFDO29CQUM5QyxPQUFPLG1CQUFNLDJCQUEyQixDQUFDO29CQUN6QyxlQUFlLG1CQUFNLDJCQUEyQixDQUFDO2lCQUNsRDs7SUFDcUMsOEJBQUM7Q0FBQSxBQW5DdkMsSUFtQ3VDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24taXRlbXMvb3JkZXItY29uZmlybWF0aW9uLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLXRvdGFscy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ndWVzdC1yZWdpc3Rlci1mb3JtL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24uZ3VhcmQnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5cbmNvbnN0IG9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50cyA9IFtcbiAgT3JkZXJDb25maXJtYXRpb25JdGVtc0NvbXBvbmVudCxcbiAgT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudCxcbiAgT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnQsXG4gIE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50LFxuICBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFB3YU1vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25UaGFua01lc3NhZ2VDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW09yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgICBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW09yZGVyQ29uZmlybWF0aW9uR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgICBPcmRlckNvbmZpcm1hdGlvblRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4ub3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4ub3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUge31cbiJdfQ==
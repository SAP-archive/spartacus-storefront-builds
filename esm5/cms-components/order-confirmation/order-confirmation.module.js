/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
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
                    declarations: tslib_1.__spread(orderConfirmationComponents),
                    exports: tslib_1.__spread(orderConfirmationComponents),
                    entryComponents: tslib_1.__spread(orderConfirmationComponents),
                },] }
    ];
    return OrderConfirmationModule;
}());
export { OrderConfirmationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLGNBQWMsRUFDZCxVQUFVLEVBQ1YsWUFBWSxFQUVaLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7O0FBRTNILE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBQzdKLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVsRCwyQkFBMkIsR0FBRztJQUNsQywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QyxnQ0FBZ0M7Q0FDakM7QUFFRDtJQUFBO0lBaUNzQyxDQUFDOztnQkFqQ3RDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1YsU0FBUzt3QkFDVCxjQUFjO3dCQUNkLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHNDQUFzQyxFQUFFO29DQUN0QyxTQUFTLEVBQUUseUNBQXlDO29DQUNwRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7aUNBQzVDO2dDQUNELCtCQUErQixFQUFFO29DQUMvQixTQUFTLEVBQUUsK0JBQStCO29DQUMxQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7aUNBQzVDO2dDQUNELGdDQUFnQyxFQUFFO29DQUNoQyxTQUFTLEVBQUUsZ0NBQWdDO29DQUMzQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7aUNBQzVDO2dDQUNELGtDQUFrQyxFQUFFO29DQUNsQyxTQUFTLEVBQUUsa0NBQWtDO29DQUM3QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7aUNBQzVDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLG1CQUFNLDJCQUEyQixDQUFDO29CQUM5QyxPQUFPLG1CQUFNLDJCQUEyQixDQUFDO29CQUN6QyxlQUFlLG1CQUFNLDJCQUEyQixDQUFDO2lCQUNsRDs7SUFDcUMsOEJBQUM7Q0FBQSxBQWpDdkMsSUFpQ3VDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBBdXRoR3VhcmQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uLWl0ZW1zL29yZGVyLWNvbmZpcm1hdGlvbi1pdGVtcy5jb21wb25lbnQnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2Uvb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi10b3RhbHMvb3JkZXItY29uZmlybWF0aW9uLXRvdGFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25HdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2luZGV4JztcblxuY29uc3Qgb3JkZXJDb25maXJtYXRpb25Db21wb25lbnRzID0gW1xuICBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvbk92ZXJ2aWV3Q29tcG9uZW50LFxuICBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudCxcbiAgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBQd2FNb2R1bGUsXG4gICAgQ2hlY2tvdXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25UaGFua01lc3NhZ2VDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uSXRlbXNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgT3JkZXJDb25maXJtYXRpb25HdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBPcmRlckNvbmZpcm1hdGlvbkd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5vcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB7fVxuIl19
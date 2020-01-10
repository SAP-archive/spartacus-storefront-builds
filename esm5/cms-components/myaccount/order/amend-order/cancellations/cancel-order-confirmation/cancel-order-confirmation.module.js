/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CmsPageGuard } from '../../../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../../../cms-structure/page/page-layout/page-layout.component';
import { AmendOrderActionsModule } from '../../amend-order-actions/amend-order-actions.module';
import { AmendOrderItemsModule } from '../../amend-order-items/amend-order-items.module';
import { OrderAmendService } from '../../amend-order.service';
import { OrderCancellationGuard } from '../order-cancellation.guard';
import { OrderCancellationService } from '../order-cancellation.service';
import { CancelOrderConfirmationComponent } from './cancel-order-confirmation.component';
var ɵ0 = {
    cxRoute: 'orderCancelConfirmation',
};
var CancelOrderConfirmationModule = /** @class */ (function () {
    function CancelOrderConfirmationModule() {
    }
    CancelOrderConfirmationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild([
                            {
                                path: null,
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ0,
                            },
                        ]),
                        ReactiveFormsModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CancelOrderConfirmationComponent: {
                                    component: CancelOrderConfirmationComponent,
                                    guards: [AuthGuard, OrderCancellationGuard],
                                    providers: [
                                        {
                                            provide: OrderAmendService,
                                            useExisting: OrderCancellationService,
                                        },
                                    ],
                                },
                            },
                        }))),
                        AmendOrderItemsModule,
                        AmendOrderActionsModule,
                    ],
                    declarations: [CancelOrderConfirmationComponent],
                    exports: [CancelOrderConfirmationComponent],
                    entryComponents: [CancelOrderConfirmationComponent],
                },] }
    ];
    return CancelOrderConfirmationModule;
}());
export { CancelOrderConfirmationModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7U0FTM0U7SUFDSixPQUFPLEVBQUUseUJBQXlCO0NBQ25DO0FBVlQ7SUFBQTtJQW1DNEMsQ0FBQzs7Z0JBbkM1QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEI7Z0NBQ0UsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUMzQixTQUFTLEVBQUUsbUJBQW1CO2dDQUM5QixJQUFJLElBRUg7NkJBQ0Y7eUJBQ0YsQ0FBQzt3QkFDRixtQkFBbUI7d0JBQ25CLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixnQ0FBZ0MsRUFBRTtvQ0FDaEMsU0FBUyxFQUFFLGdDQUFnQztvQ0FDM0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDO29DQUMzQyxTQUFTLEVBQUU7d0NBQ1Q7NENBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0Q0FDMUIsV0FBVyxFQUFFLHdCQUF3Qjt5Q0FDdEM7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLHFCQUFxQjt3QkFDckIsdUJBQXVCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDaEQsT0FBTyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzNDLGVBQWUsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUNwRDs7SUFDMkMsb0NBQUM7Q0FBQSxBQW5DN0MsSUFtQzZDO1NBQWhDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQsIENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVySXRlbXNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1pdGVtcy9hbWVuZC1vcmRlci1pdGVtcy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsbGF0aW9uR3VhcmQgfSBmcm9tICcuLi9vcmRlci1jYW5jZWxsYXRpb24uZ3VhcmQnO1xuaW1wb3J0IHsgT3JkZXJDYW5jZWxsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJDYW5jZWxDb25maXJtYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBPcmRlckNhbmNlbGxhdGlvbkd1YXJkXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogT3JkZXJBbWVuZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEFtZW5kT3JkZXJJdGVtc01vZHVsZSxcbiAgICBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYW5jZWxPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIHt9XG4iXX0=
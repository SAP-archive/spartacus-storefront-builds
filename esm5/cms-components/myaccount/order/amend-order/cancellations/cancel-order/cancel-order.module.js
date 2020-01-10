/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CmsPageGuard, PageLayoutComponent, } from '../../../../../../cms-structure/index';
import { AmendOrderActionsModule } from '../../amend-order-actions/amend-order-actions.module';
import { AmendOrderItemsModule } from '../../amend-order-items/amend-order-items.module';
import { OrderAmendService } from '../../amend-order.service';
import { OrderCancellationService } from '../order-cancellation.service';
import { CancelOrderComponent } from './cancel-order.component';
var ɵ0 = {
    cxRoute: 'orderCancel',
};
var CancelOrderModule = /** @class */ (function () {
    function CancelOrderModule() {
    }
    CancelOrderModule.decorators = [
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
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CancelOrderComponent: {
                                    component: CancelOrderComponent,
                                    guards: [AuthGuard],
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
                    declarations: [CancelOrderComponent],
                    exports: [CancelOrderComponent],
                    entryComponents: [CancelOrderComponent],
                },] }
    ];
    return CancelOrderModule;
}());
export { CancelOrderModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLG1CQUFtQixHQUNwQixNQUFNLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO1NBU2xEO0lBQ0osT0FBTyxFQUFFLGFBQWE7Q0FDdkI7QUFWVDtJQUFBO0lBa0NnQyxDQUFDOztnQkFsQ2hDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQjtnQ0FDRSxJQUFJLEVBQUUsSUFBSTtnQ0FDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0NBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFFSDs2QkFDRjt5QkFDRixDQUFDO3dCQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixvQkFBb0IsRUFBRTtvQ0FDcEIsU0FBUyxFQUFFLG9CQUFvQjtvQ0FDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNuQixTQUFTLEVBQUU7d0NBQ1Q7NENBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0Q0FDMUIsV0FBVyxFQUFFLHdCQUF3Qjt5Q0FDdEM7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLHFCQUFxQjt3QkFDckIsdUJBQXVCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUN4Qzs7SUFDK0Isd0JBQUM7Q0FBQSxBQWxDakMsSUFrQ2lDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUGFnZUd1YXJkLFxuICBQYWdlTGF5b3V0Q29tcG9uZW50LFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVySXRlbXNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1pdGVtcy9hbWVuZC1vcmRlci1pdGVtcy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWNhbmNlbGxhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmNlbE9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYW5jZWwtb3JkZXIuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJDYW5jZWwnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2FuY2VsT3JkZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENhbmNlbE9yZGVyQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE9yZGVyQW1lbmRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VFeGlzdGluZzogT3JkZXJDYW5jZWxsYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBBbWVuZE9yZGVySXRlbXNNb2R1bGUsXG4gICAgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbmNlbE9yZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbmNlbE9yZGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FuY2VsT3JkZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlck1vZHVsZSB7fVxuIl19
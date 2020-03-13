import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard, provideDefaultConfig } from '@spartacus/core';
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
    CancelOrderConfirmationModule = __decorate([
        NgModule({
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
                AmendOrderItemsModule,
                AmendOrderActionsModule,
            ],
            providers: [
                provideDefaultConfig({
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
                }),
            ],
            declarations: [CancelOrderConfirmationComponent],
            exports: [CancelOrderConfirmationComponent],
            entryComponents: [CancelOrderConfirmationComponent],
        })
    ], CancelOrderConfirmationModule);
    return CancelOrderConfirmationModule;
}());
export { CancelOrderConfirmationModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztTQVUzRTtJQUNKLE9BQU8sRUFBRSx5QkFBeUI7Q0FDbkM7QUEyQlQ7SUFBQTtJQUE0QyxDQUFDO0lBQWhDLDZCQUE2QjtRQXJDekMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUMzQixTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixJQUFJLElBRUg7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixtQkFBbUI7Z0JBQ25CLHFCQUFxQjtnQkFDckIsdUJBQXVCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2IsZ0NBQWdDLEVBQUU7NEJBQ2hDLFNBQVMsRUFBRSxnQ0FBZ0M7NEJBQzNDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQzs0QkFDM0MsU0FBUyxFQUFFO2dDQUNUO29DQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0NBQzFCLFdBQVcsRUFBRSx3QkFBd0I7aUNBQ3RDOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQ2hELE9BQU8sRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzNDLGVBQWUsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQ3BELENBQUM7T0FDVyw2QkFBNkIsQ0FBRztJQUFELG9DQUFDO0NBQUEsQUFBN0MsSUFBNkM7U0FBaEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgQ21zQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWFjdGlvbnMvYW1lbmQtb3JkZXItYWN0aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItaXRlbXMvYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckNhbmNlbGxhdGlvbkd1YXJkIH0gZnJvbSAnLi4vb3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWNhbmNlbGxhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJDYW5jZWxDb25maXJtYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEFtZW5kT3JkZXJJdGVtc01vZHVsZSxcbiAgICBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIE9yZGVyQ2FuY2VsbGF0aW9uR3VhcmRdLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBPcmRlckFtZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB7fVxuIl19
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, provideDefaultConfig } from '@spartacus/core';
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
    CancelOrderModule = __decorate([
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
                AmendOrderItemsModule,
                AmendOrderActionsModule,
            ],
            providers: [
                provideDefaultConfig({
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
                }),
            ],
            declarations: [CancelOrderComponent],
            exports: [CancelOrderComponent],
            entryComponents: [CancelOrderComponent],
        })
    ], CancelOrderModule);
    return CancelOrderModule;
}());
export { CancelOrderModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdFLE9BQU8sRUFDTCxZQUFZLEVBQ1osbUJBQW1CLEdBQ3BCLE1BQU0sdUNBQXVDLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7U0FVbEQ7SUFDSixPQUFPLEVBQUUsYUFBYTtDQUN2QjtBQTBCVDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBcEM3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFFSDtxQkFDRjtpQkFDRixDQUFDO2dCQUNGLHFCQUFxQjtnQkFDckIsdUJBQXVCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2Isb0JBQW9CLEVBQUU7NEJBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7NEJBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDbkIsU0FBUyxFQUFFO2dDQUNUO29DQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0NBQzFCLFdBQVcsRUFBRSx3QkFBd0I7aUNBQ3RDOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3hDLENBQUM7T0FDVyxpQkFBaUIsQ0FBRztJQUFELHdCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBDbXNDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENtc1BhZ2VHdWFyZCxcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWFjdGlvbnMvYW1lbmQtb3JkZXItYWN0aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItaXRlbXMvYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDYW5jZWxPcmRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FuY2VsLW9yZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJDYW5jZWwnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBBbWVuZE9yZGVySXRlbXNNb2R1bGUsXG4gICAgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYW5jZWxPcmRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2FuY2VsT3JkZXJDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogT3JkZXJBbWVuZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYW5jZWxPcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYW5jZWxPcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbmNlbE9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJNb2R1bGUge31cbiJdfQ==
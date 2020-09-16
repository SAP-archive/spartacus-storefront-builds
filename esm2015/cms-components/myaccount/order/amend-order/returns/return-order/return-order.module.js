import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, provideDefaultConfig } from '@spartacus/core';
import { CmsPageGuard } from '../../../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../../../cms-structure/page/page-layout/page-layout.component';
import { AmendOrderActionsModule } from '../../amend-order-actions/amend-order-actions.module';
import { AmendOrderItemsModule } from '../../amend-order-items/amend-order-items.module';
import { OrderAmendService } from '../../amend-order.service';
import { OrderReturnService } from '../order-return.service';
import { ReturnOrderComponent } from './return-order.component';
const ɵ0 = {
    cxRoute: 'orderReturn',
};
export class ReturnOrderModule {
}
ReturnOrderModule.decorators = [
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
                    AmendOrderItemsModule,
                    AmendOrderActionsModule,
                ],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            ReturnOrderComponent: {
                                component: ReturnOrderComponent,
                                guards: [AuthGuard],
                                providers: [
                                    {
                                        provide: OrderAmendService,
                                        useExisting: OrderReturnService,
                                    },
                                ],
                            },
                        },
                    }),
                ],
                declarations: [ReturnOrderComponent],
                exports: [ReturnOrderComponent],
                entryComponents: [ReturnOrderComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9yZXR1cm5zL3JldHVybi1vcmRlci9yZXR1cm4tb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO1dBVWxEO0lBQ0osT0FBTyxFQUFFLGFBQWE7Q0FDdkI7QUEwQlQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBcEM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEI7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBRUg7eUJBQ0Y7cUJBQ0YsQ0FBQztvQkFDRixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2Isb0JBQW9CLEVBQUU7Z0NBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7Z0NBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDbkIsU0FBUyxFQUFFO29DQUNUO3dDQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0NBQzFCLFdBQVcsRUFBRSxrQkFBa0I7cUNBQ2hDO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgQ21zQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWFjdGlvbnMvYW1lbmQtb3JkZXItYWN0aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItaXRlbXMvYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1yZXR1cm4uc2VydmljZSc7XG5pbXBvcnQgeyBSZXR1cm5PcmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLW9yZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJSZXR1cm4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBBbWVuZE9yZGVySXRlbXNNb2R1bGUsXG4gICAgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXR1cm5PcmRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuT3JkZXJDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogT3JkZXJBbWVuZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBPcmRlclJldHVyblNlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXR1cm5PcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXR1cm5PcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldHVybk9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJNb2R1bGUge31cbiJdfQ==
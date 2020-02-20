import { __decorate } from "tslib";
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
const ɵ0 = {
    cxRoute: 'orderCancel',
};
let CancelOrderModule = class CancelOrderModule {
};
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
            ConfigModule.withConfig({
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
            AmendOrderItemsModule,
            AmendOrderActionsModule,
        ],
        declarations: [CancelOrderComponent],
        exports: [CancelOrderComponent],
        entryComponents: [CancelOrderComponent],
    })
], CancelOrderModule);
export { CancelOrderModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLG1CQUFtQixHQUNwQixNQUFNLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO1dBU2xEO0lBQ0osT0FBTyxFQUFFLGFBQWE7Q0FDdkI7QUF3QlQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBRyxDQUFBO0FBQXBCLGlCQUFpQjtJQWxDN0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUVIO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYixvQkFBb0IsRUFBRTt3QkFDcEIsU0FBUyxFQUFFLG9CQUFvQjt3QkFDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNuQixTQUFTLEVBQUU7NEJBQ1Q7Z0NBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQ0FDMUIsV0FBVyxFQUFFLHdCQUF3Qjs2QkFDdEM7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YscUJBQXFCO1lBQ3JCLHVCQUF1QjtTQUN4QjtRQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ3hDLENBQUM7R0FDVyxpQkFBaUIsQ0FBRztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQsIENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENtc1BhZ2VHdWFyZCxcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWFjdGlvbnMvYW1lbmQtb3JkZXItYWN0aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItaXRlbXMvYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDYW5jZWxPcmRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FuY2VsLW9yZGVyLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hSb3V0ZTogJ29yZGVyQ2FuY2VsJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhbmNlbE9yZGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDYW5jZWxPcmRlckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBPcmRlckFtZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQW1lbmRPcmRlckl0ZW1zTW9kdWxlLFxuICAgIEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYW5jZWxPcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYW5jZWxPcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbmNlbE9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJNb2R1bGUge31cbiJdfQ==
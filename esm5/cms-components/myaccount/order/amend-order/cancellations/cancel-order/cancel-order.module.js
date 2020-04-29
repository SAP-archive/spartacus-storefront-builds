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
import { FormErrorsModule } from '../../../../../../shared/index';
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
                FormErrorsModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdFLE9BQU8sRUFDTCxZQUFZLEVBQ1osbUJBQW1CLEdBQ3BCLE1BQU0sdUNBQXVDLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7U0FVcEQ7SUFDSixPQUFPLEVBQUUsYUFBYTtDQUN2QjtBQTJCVDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBckM3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFFSDtxQkFDRjtpQkFDRixDQUFDO2dCQUNGLHFCQUFxQjtnQkFDckIsdUJBQXVCO2dCQUN2QixnQkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYixvQkFBb0IsRUFBRTs0QkFDcEIsU0FBUyxFQUFFLG9CQUFvQjs0QkFDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNuQixTQUFTLEVBQUU7Z0NBQ1Q7b0NBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQ0FDMUIsV0FBVyxFQUFFLHdCQUF3QjtpQ0FDdEM7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDL0IsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDeEMsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQsIENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUGFnZUd1YXJkLFxuICBQYWdlTGF5b3V0Q29tcG9uZW50LFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVySXRlbXNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1pdGVtcy9hbWVuZC1vcmRlci1pdGVtcy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWNhbmNlbGxhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmNlbE9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYW5jZWwtb3JkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hSb3V0ZTogJ29yZGVyQ2FuY2VsJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQW1lbmRPcmRlckl0ZW1zTW9kdWxlLFxuICAgIEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYW5jZWxPcmRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2FuY2VsT3JkZXJDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogT3JkZXJBbWVuZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYW5jZWxPcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYW5jZWxPcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbmNlbE9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJNb2R1bGUge31cbiJdfQ==
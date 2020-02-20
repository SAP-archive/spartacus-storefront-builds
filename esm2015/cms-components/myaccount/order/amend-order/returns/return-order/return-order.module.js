import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule } from '@spartacus/core';
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
let ReturnOrderModule = class ReturnOrderModule {
};
ReturnOrderModule = __decorate([
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
            AmendOrderItemsModule,
            AmendOrderActionsModule,
        ],
        declarations: [ReturnOrderComponent],
        exports: [ReturnOrderComponent],
        entryComponents: [ReturnOrderComponent],
    })
], ReturnOrderModule);
export { ReturnOrderModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9yZXR1cm5zL3JldHVybi1vcmRlci9yZXR1cm4tb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7V0FVbEQ7SUFDSixPQUFPLEVBQUUsYUFBYTtDQUN2QjtBQXdCVCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBbEM3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEI7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUMzQixTQUFTLEVBQUUsbUJBQW1CO29CQUM5QixJQUFJLElBRUg7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3dCQUMvQixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ25CLFNBQVMsRUFBRTs0QkFDVDtnQ0FDRSxPQUFPLEVBQUUsaUJBQWlCO2dDQUMxQixXQUFXLEVBQUUsa0JBQWtCOzZCQUNoQzt5QkFDRjtxQkFDRjtpQkFDRjthQUNGLENBQUM7WUFDRixxQkFBcUI7WUFDckIsdUJBQXVCO1NBQ3hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDL0IsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDeEMsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1hY3Rpb25zL2FtZW5kLW9yZGVyLWFjdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJJdGVtc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItcmV0dXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV0dXJuT3JkZXJDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1vcmRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hSb3V0ZTogJ29yZGVyUmV0dXJuJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVybk9yZGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXR1cm5PcmRlckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBPcmRlckFtZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE9yZGVyUmV0dXJuU2VydmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQW1lbmRPcmRlckl0ZW1zTW9kdWxlLFxuICAgIEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXR1cm5PcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXR1cm5PcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldHVybk9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJNb2R1bGUge31cbiJdfQ==
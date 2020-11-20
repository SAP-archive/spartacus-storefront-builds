import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, provideDefaultConfig } from '@spartacus/core';
import { CmsPageGuard } from '../../../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../../../cms-structure/page/page-layout/page-layout.component';
import { FormErrorsModule } from '../../../../../../shared/index';
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
                    FormErrorsModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9yZXR1cm5zL3JldHVybi1vcmRlci9yZXR1cm4tb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO1dBVWxEO0lBQ0osT0FBTyxFQUFFLGFBQWE7Q0FDdkI7QUEyQlQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBckM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEI7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBRUg7eUJBQ0Y7cUJBQ0YsQ0FBQztvQkFDRixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixvQkFBb0IsRUFBRTtnQ0FDcEIsU0FBUyxFQUFFLG9CQUFvQjtnQ0FDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNuQixTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3Q0FDMUIsV0FBVyxFQUFFLGtCQUFrQjtxQ0FDaEM7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBDbXNDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1hY3Rpb25zL2FtZW5kLW9yZGVyLWFjdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJJdGVtc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItcmV0dXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV0dXJuT3JkZXJDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1vcmRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hSb3V0ZTogJ29yZGVyUmV0dXJuJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQW1lbmRPcmRlckl0ZW1zTW9kdWxlLFxuICAgIEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXR1cm5PcmRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuT3JkZXJDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogT3JkZXJBbWVuZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBPcmRlclJldHVyblNlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXR1cm5PcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXR1cm5PcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldHVybk9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJNb2R1bGUge31cbiJdfQ==
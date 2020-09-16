import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { CmsPageGuard } from '../../../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../../../cms-structure/page/page-layout/page-layout.component';
import { AmendOrderActionsModule } from '../../amend-order-actions/amend-order-actions.module';
import { AmendOrderItemsModule } from '../../amend-order-items/amend-order-items.module';
import { OrderAmendService } from '../../amend-order.service';
import { OrderReturnGuard } from '../order-return.guard';
import { OrderReturnService } from '../order-return.service';
import { ReturnOrderConfirmationComponent } from './return-order-confirmation.component';
const ɵ0 = {
    cxRoute: 'orderReturnConfirmation',
};
export class ReturnOrderConfirmationModule {
}
ReturnOrderConfirmationModule.decorators = [
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
                    I18nModule,
                    ReactiveFormsModule,
                    AmendOrderActionsModule,
                ],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            ReturnOrderConfirmationComponent: {
                                component: ReturnOrderConfirmationComponent,
                                guards: [AuthGuard, OrderReturnGuard],
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
                declarations: [ReturnOrderConfirmationComponent],
                exports: [ReturnOrderConfirmationComponent],
                entryComponents: [ReturnOrderConfirmationComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uL3JldHVybi1vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7V0FVM0U7SUFDSixPQUFPLEVBQUUseUJBQXlCO0NBQ25DO0FBNEJULE1BQU0sT0FBTyw2QkFBNkI7OztZQXRDekMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7d0JBQ3BCOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQzs0QkFDM0IsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUVIO3lCQUNGO3FCQUNGLENBQUM7b0JBQ0YscUJBQXFCO29CQUNyQixVQUFVO29CQUNWLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixnQ0FBZ0MsRUFBRTtnQ0FDaEMsU0FBUyxFQUFFLGdDQUFnQztnQ0FDM0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDO2dDQUNyQyxTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3Q0FDMUIsV0FBVyxFQUFFLGtCQUFrQjtxQ0FDaEM7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzNDLGVBQWUsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItYWN0aW9ucy9hbWVuZC1vcmRlci1hY3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVySXRlbXNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1pdGVtcy9hbWVuZC1vcmRlci1pdGVtcy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyUmV0dXJuR3VhcmQgfSBmcm9tICcuLi9vcmRlci1yZXR1cm4uZ3VhcmQnO1xuaW1wb3J0IHsgT3JkZXJSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItcmV0dXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3JldHVybi1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4Um91dGU6ICdvcmRlclJldHVybkNvbmZpcm1hdGlvbicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIEFtZW5kT3JkZXJJdGVtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBPcmRlclJldHVybkd1YXJkXSxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogT3JkZXJBbWVuZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBPcmRlclJldHVyblNlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldHVybk9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Nb2R1bGUge31cbiJdfQ==
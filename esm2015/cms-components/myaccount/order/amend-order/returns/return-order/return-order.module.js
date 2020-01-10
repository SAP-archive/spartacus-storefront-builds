/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                    AmendOrderItemsModule,
                    AmendOrderActionsModule,
                ],
                declarations: [ReturnOrderComponent],
                exports: [ReturnOrderComponent],
                entryComponents: [ReturnOrderComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9yZXR1cm5zL3JldHVybi1vcmRlci9yZXR1cm4tb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7V0FVbEQ7SUFDSixPQUFPLEVBQUUsYUFBYTtDQUN2QjtBQXdCVCxNQUFNLE9BQU8saUJBQWlCOzs7WUFsQzdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFFSDt5QkFDRjtxQkFDRixDQUFDO29CQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixvQkFBb0IsRUFBRTtnQ0FDcEIsU0FBUyxFQUFFLG9CQUFvQjtnQ0FDL0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNuQixTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3Q0FDMUIsV0FBVyxFQUFFLGtCQUFrQjtxQ0FDaEM7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLHFCQUFxQjtvQkFDckIsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWFjdGlvbnMvYW1lbmQtb3JkZXItYWN0aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItaXRlbXMvYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1yZXR1cm4uc2VydmljZSc7XG5pbXBvcnQgeyBSZXR1cm5PcmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLW9yZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJSZXR1cm4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmV0dXJuT3JkZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVybk9yZGVyQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE9yZGVyQW1lbmRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VFeGlzdGluZzogT3JkZXJSZXR1cm5TZXJ2aWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBBbWVuZE9yZGVySXRlbXNNb2R1bGUsXG4gICAgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1JldHVybk9yZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1JldHVybk9yZGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmV0dXJuT3JkZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5PcmRlck1vZHVsZSB7fVxuIl19
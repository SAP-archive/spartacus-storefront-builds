import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
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
let ReturnOrderConfirmationModule = class ReturnOrderConfirmationModule {
};
ReturnOrderConfirmationModule = __decorate([
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
            AmendOrderItemsModule,
            I18nModule,
            ReactiveFormsModule,
            AmendOrderActionsModule,
        ],
        declarations: [ReturnOrderConfirmationComponent],
        exports: [ReturnOrderConfirmationComponent],
        entryComponents: [ReturnOrderConfirmationComponent],
    })
], ReturnOrderConfirmationModule);
export { ReturnOrderConfirmationModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uL3JldHVybi1vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO1dBVTNFO0lBQ0osT0FBTyxFQUFFLHlCQUF5QjtDQUNuQztBQTBCVCxJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtDQUFHLENBQUE7QUFBaEMsNkJBQTZCO0lBcEN6QyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEI7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUMzQixTQUFTLEVBQUUsbUJBQW1CO29CQUM5QixJQUFJLElBRUg7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLGdDQUFnQyxFQUFFO3dCQUNoQyxTQUFTLEVBQUUsZ0NBQWdDO3dCQUMzQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7d0JBQ3JDLFNBQVMsRUFBRTs0QkFDVDtnQ0FDRSxPQUFPLEVBQUUsaUJBQWlCO2dDQUMxQixXQUFXLEVBQUUsa0JBQWtCOzZCQUNoQzt5QkFDRjtxQkFDRjtpQkFDRjthQUNGLENBQUM7WUFDRixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQix1QkFBdUI7U0FDeEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNoRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztRQUMzQyxlQUFlLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztLQUNwRCxDQUFDO0dBQ1csNkJBQTZCLENBQUc7U0FBaEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWFjdGlvbnMvYW1lbmQtb3JkZXItYWN0aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXItaXRlbXMvYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclJldHVybkd1YXJkIH0gZnJvbSAnLi4vb3JkZXItcmV0dXJuLmd1YXJkJztcbmltcG9ydCB7IE9yZGVyUmV0dXJuU2VydmljZSB9IGZyb20gJy4uL29yZGVyLXJldHVybi5zZXJ2aWNlJztcbmltcG9ydCB7IFJldHVybk9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJSZXR1cm5Db25maXJtYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVybk9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgT3JkZXJSZXR1cm5HdWFyZF0sXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE9yZGVyQW1lbmRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VFeGlzdGluZzogT3JkZXJSZXR1cm5TZXJ2aWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBBbWVuZE9yZGVySXRlbXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEFtZW5kT3JkZXJBY3Rpb25zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldHVybk9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Nb2R1bGUge31cbiJdfQ==
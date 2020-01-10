/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                    AmendOrderItemsModule,
                    I18nModule,
                    ReactiveFormsModule,
                    AmendOrderActionsModule,
                ],
                declarations: [ReturnOrderConfirmationComponent],
                exports: [ReturnOrderConfirmationComponent],
                entryComponents: [ReturnOrderConfirmationComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uL3JldHVybi1vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO1dBVTNFO0lBQ0osT0FBTyxFQUFFLHlCQUF5QjtDQUNuQztBQTBCVCxNQUFNLE9BQU8sNkJBQTZCOzs7WUFwQ3pDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFFSDt5QkFDRjtxQkFDRixDQUFDO29CQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixnQ0FBZ0MsRUFBRTtnQ0FDaEMsU0FBUyxFQUFFLGdDQUFnQztnQ0FDM0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDO2dDQUNyQyxTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3Q0FDMUIsV0FBVyxFQUFFLGtCQUFrQjtxQ0FDaEM7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLHFCQUFxQjtvQkFDckIsVUFBVTtvQkFDVixtQkFBbUI7b0JBQ25CLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUMzQyxlQUFlLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW1lbmRPcmRlckFjdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci1hY3Rpb25zL2FtZW5kLW9yZGVyLWFjdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJJdGVtc01vZHVsZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJSZXR1cm5HdWFyZCB9IGZyb20gJy4uL29yZGVyLXJldHVybi5ndWFyZCc7XG5pbXBvcnQgeyBPcmRlclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1yZXR1cm4uc2VydmljZSc7XG5pbXBvcnQgeyBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hSb3V0ZTogJ29yZGVyUmV0dXJuQ29uZmlybWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVybk9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIE9yZGVyUmV0dXJuR3VhcmRdLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBPcmRlckFtZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE9yZGVyUmV0dXJuU2VydmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQW1lbmRPcmRlckl0ZW1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBBbWVuZE9yZGVyQWN0aW9uc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJldHVybk9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIHt9XG4iXX0=
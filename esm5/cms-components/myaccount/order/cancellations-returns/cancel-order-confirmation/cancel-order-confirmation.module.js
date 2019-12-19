/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { PageLayoutComponent } from '../../../../../cms-structure/page/page-layout/page-layout.component';
import { CmsPageGuard } from '../../../../../cms-structure/guards/cms-page.guard';
import { CancelOrReturnItemsModule } from '../cancel-or-return-items/cancel-or-return-items.module';
import { CancelOrderConfirmationComponent } from './cancel-order-confirmation.component';
import { CancelOrReturnRequestInputGuard } from '../guards/cancel-or-return-request-input.guard';
var ɵ0 = {
    pageLabel: '/my-account/order/cancel/confirmation',
    cxRoute: 'orderCancelConfirmation',
};
var CancelOrderConfirmationModule = /** @class */ (function () {
    function CancelOrderConfirmationModule() {
    }
    CancelOrderConfirmationModule.decorators = [
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
                                CancelOrderConfirmationComponent: {
                                    component: CancelOrderConfirmationComponent,
                                    guards: [AuthGuard, CancelOrReturnRequestInputGuard],
                                },
                            },
                        }))),
                        CancelOrReturnItemsModule,
                        I18nModule,
                    ],
                    declarations: [CancelOrderConfirmationComponent],
                    exports: [CancelOrderConfirmationComponent],
                    entryComponents: [CancelOrderConfirmationComponent],
                },] }
    ];
    return CancelOrderConfirmationModule;
}());
export { CancelOrderConfirmationModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7U0FVbkY7SUFDSixTQUFTLEVBQUUsdUNBQXVDO0lBQ2xELE9BQU8sRUFBRSx5QkFBeUI7Q0FDbkM7QUFYVDtJQUFBO0lBNkI0QyxDQUFDOztnQkE3QjVDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQjtnQ0FDRSxJQUFJLEVBQUUsSUFBSTtnQ0FDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0NBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFHSDs2QkFDRjt5QkFDRixDQUFDO3dCQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixnQ0FBZ0MsRUFBRTtvQ0FDaEMsU0FBUyxFQUFFLGdDQUFnQztvQ0FDM0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLCtCQUErQixDQUFDO2lDQUNyRDs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YseUJBQXlCO3dCQUN6QixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUNoRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDM0MsZUFBZSxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQ3BEOztJQUMyQyxvQ0FBQztDQUFBLEFBN0I3QyxJQTZCNkM7U0FBaEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IENhbmNlbE9yUmV0dXJuSXRlbXNNb2R1bGUgfSBmcm9tICcuLi9jYW5jZWwtb3ItcmV0dXJuLWl0ZW1zL2NhbmNlbC1vci1yZXR1cm4taXRlbXMubW9kdWxlJztcbmltcG9ydCB7IENhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dEd1YXJkIH0gZnJvbSAnLi4vZ3VhcmRzL2NhbmNlbC1vci1yZXR1cm4tcmVxdWVzdC1pbnB1dC5ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlTGFiZWw6ICcvbXktYWNjb3VudC9vcmRlci9jYW5jZWwvY29uZmlybWF0aW9uJyxcbiAgICAgICAgICBjeFJvdXRlOiAnb3JkZXJDYW5jZWxDb25maXJtYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENhbmNlbE9yUmV0dXJuSXRlbXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYW5jZWxPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIHt9XG4iXX0=
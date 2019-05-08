/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@spartacus/core';
import { OutletRefModule } from '../../../../cms-structure/outlet/index';
import { PageLayoutModule } from '../../../../cms-structure/page/page-layout/page-layout.module';
import { OrderConfirmationPageGuard } from '../../../checkout/guards/order-confirmation-page.guard';
import { OrderConfirmationModule } from '../../../checkout/index';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { OrderConfirmationPageComponent } from './order-confirmation-page.component';
var ɵ0 = { pageLabel: 'orderConfirmationPage', cxRoute: 'orderConfirmation' };
/** @type {?} */
var routes = [
    // TODO: as soon as the components are moved to CMS driven components we can drop this specific OrderConfirmationPageComponent
    {
        path: null,
        canActivate: [AuthGuard, CmsPageGuard, OrderConfirmationPageGuard],
        component: OrderConfirmationPageComponent,
        data: ɵ0,
    },
];
var OrderConfirmationPageModule = /** @class */ (function () {
    function OrderConfirmationPageModule() {
    }
    OrderConfirmationPageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OrderConfirmationModule,
                        PageLayoutModule,
                        OutletRefModule,
                        RouterModule.forChild(routes),
                    ],
                    providers: [OrderConfirmationPageGuard],
                    declarations: [OrderConfirmationPageComponent],
                    exports: [OrderConfirmationPageComponent],
                },] }
    ];
    return OrderConfirmationPageModule;
}());
export { OrderConfirmationPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1NBUTNFLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTs7SUFOeEUsTUFBTSxHQUFXO0lBQ3JCLDhIQUE4SDtJQUM5SDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUNsRSxTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksSUFBc0U7S0FDM0U7Q0FDRjtBQUVEO0lBQUE7SUFZMEMsQ0FBQzs7Z0JBWjFDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDOUI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUM5QyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDMUM7O0lBQ3lDLGtDQUFDO0NBQUEsQUFaM0MsSUFZMkM7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9ndWFyZHMvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jbXMvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIC8vIFRPRE86IGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudHMgYXJlIG1vdmVkIHRvIENNUyBkcml2ZW4gY29tcG9uZW50cyB3ZSBjYW4gZHJvcCB0aGlzIHNwZWNpZmljIE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudFxuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkLCBPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlckNvbmZpcm1hdGlvblBhZ2UnLCBjeFJvdXRlOiAnb3JkZXJDb25maXJtYXRpb24nIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICBdLFxuICBwcm92aWRlcnM6IFtPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUge31cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@spartacus/core';
import { OrderConfirmationModule } from '../../../checkout/index';
import { PageLayoutModule } from '../../../cms/index';
import { OutletRefModule } from '../../../outlet/index';
import { OrderConfirmationPageGuard } from '../../../checkout/guards/order-confirmation-page.guard';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { OrderConfirmationPageComponent } from './order-confirmation-page.component';
var ɵ0 = { pageLabel: 'orderConfirmationPage', cxPath: 'orderConfirmation' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1NBUTNFLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRTs7SUFOdkUsTUFBTSxHQUFXO0lBQ3JCLDhIQUE4SDtJQUM5SDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUNsRSxTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksSUFBcUU7S0FDMUU7Q0FDRjtBQUVEO0lBQUE7SUFZMEMsQ0FBQzs7Z0JBWjFDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDOUI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUM5QyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDMUM7O0lBQ3lDLGtDQUFDO0NBQUEsQUFaM0MsSUFZMkM7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy9pbmRleCc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9ndWFyZHMvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5cbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIC8vIFRPRE86IGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudHMgYXJlIG1vdmVkIHRvIENNUyBkcml2ZW4gY29tcG9uZW50cyB3ZSBjYW4gZHJvcCB0aGlzIHNwZWNpZmljIE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudFxuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkLCBPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlckNvbmZpcm1hdGlvblBhZ2UnLCBjeFBhdGg6ICdvcmRlckNvbmZpcm1hdGlvbicgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIHByb3ZpZGVyczogW09yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSB7fVxuIl19
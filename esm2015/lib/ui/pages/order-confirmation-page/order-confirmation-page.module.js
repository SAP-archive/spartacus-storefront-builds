/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@spartacus/core';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { OutletRefModule } from '../../../../cms-structure/outlet/index';
import { PageLayoutModule } from '../../../../cms-structure/page/page-layout/page-layout.module';
import { OrderConfirmationPageGuard } from '../../../checkout/guards/order-confirmation-page.guard';
import { OrderConfirmationModule } from '../../../checkout/index';
import { OrderConfirmationPageComponent } from './order-confirmation-page.component';
const ɵ0 = { pageLabel: 'orderConfirmationPage', cxRoute: 'orderConfirmation' };
/** @type {?} */
const routes = [
    // TODO: as soon as the components are moved to CMS driven components we can drop this specific OrderConfirmationPageComponent
    {
        path: null,
        canActivate: [AuthGuard, CmsPageGuard, OrderConfirmationPageGuard],
        component: OrderConfirmationPageComponent,
        data: ɵ0,
    },
];
export class OrderConfirmationPageModule {
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
                declarations: [OrderConfirmationPageComponent],
                exports: [OrderConfirmationPageComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1dBUTNFLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTs7TUFOeEUsTUFBTSxHQUFXO0lBQ3JCLDhIQUE4SDtJQUM5SDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUNsRSxTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksSUFBc0U7S0FDM0U7Q0FDRjtBQWFELE1BQU0sT0FBTywyQkFBMkI7OztZQVh2QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osdUJBQXVCO29CQUN2QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzlCO2dCQUNELFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvZ3VhcmRzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLmd1YXJkJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvaW5kZXgnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24tcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgLy8gVE9ETzogYXMgc29vbiBhcyB0aGUgY29tcG9uZW50cyBhcmUgbW92ZWQgdG8gQ01TIGRyaXZlbiBjb21wb25lbnRzIHdlIGNhbiBkcm9wIHRoaXMgc3BlY2lmaWMgT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmQsIE9yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVyQ29uZmlybWF0aW9uUGFnZScsIGN4Um91dGU6ICdvcmRlckNvbmZpcm1hdGlvbicgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUge31cbiJdfQ==
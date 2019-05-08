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
                providers: [OrderConfirmationPageGuard],
                declarations: [OrderConfirmationPageComponent],
                exports: [OrderConfirmationPageComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1dBUTNFLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTs7TUFOeEUsTUFBTSxHQUFXO0lBQ3JCLDhIQUE4SDtJQUM5SDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUNsRSxTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksSUFBc0U7S0FDM0U7Q0FDRjtBQWNELE1BQU0sT0FBTywyQkFBMkI7OztZQVp2QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osdUJBQXVCO29CQUN2QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzlCO2dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24tcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24tcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgLy8gVE9ETzogYXMgc29vbiBhcyB0aGUgY29tcG9uZW50cyBhcmUgbW92ZWQgdG8gQ01TIGRyaXZlbiBjb21wb25lbnRzIHdlIGNhbiBkcm9wIHRoaXMgc3BlY2lmaWMgT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmQsIE9yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVyQ29uZmlybWF0aW9uUGFnZScsIGN4Um91dGU6ICdvcmRlckNvbmZpcm1hdGlvbicgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIHByb3ZpZGVyczogW09yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSB7fVxuIl19
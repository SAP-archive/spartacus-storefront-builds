/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@spartacus/core';
import { OrderConfirmationPageGuard } from '../../cms-components/checkout/guards/order-confirmation-page.guard';
import { OrderConfirmationModule } from '../../cms-components/checkout/index';
import { CmsPageGuard } from '../../cms-structure/guards/cms-page.guard';
import { OutletRefModule } from '../../cms-structure/outlet/index';
import { PageLayoutModule } from '../../cms-structure/page/page-layout/page-layout.module';
import { OrderConfirmationPageComponent } from './order-confirmation-page.component';
const ɵ0 = { cxRoute: 'orderConfirmation' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1dBUTNFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFOztNQU5wQyxNQUFNLEdBQVc7SUFDckIsOEhBQThIO0lBQzlIO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQ2xFLFNBQVMsRUFBRSw4QkFBOEI7UUFDekMsSUFBSSxJQUFrQztLQUN2QztDQUNGO0FBYUQsTUFBTSxPQUFPLDJCQUEyQjs7O1lBWHZDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzlDLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmQgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyBUT0RPOiBhcyBzb29uIGFzIHRoZSBjb21wb25lbnRzIGFyZSBtb3ZlZCB0byBDTVMgZHJpdmVuIGNvbXBvbmVudHMgd2UgY2FuIGRyb3AgdGhpcyBzcGVjaWZpYyBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRcbiAge1xuICAgIHBhdGg6IG51bGwsXG4gICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50LFxuICAgIGRhdGE6IHsgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIE91dGxldFJlZk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSB7fVxuIl19
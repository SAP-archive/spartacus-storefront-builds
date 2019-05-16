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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1NBUTNFLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTs7SUFOeEUsTUFBTSxHQUFXO0lBQ3JCLDhIQUE4SDtJQUM5SDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUNsRSxTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksSUFBc0U7S0FDM0U7Q0FDRjtBQUVEO0lBQUE7SUFZMEMsQ0FBQzs7Z0JBWjFDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDOUI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUM5QyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDMUM7O0lBQ3lDLGtDQUFDO0NBQUEsQUFaM0MsSUFZMkM7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9ndWFyZHMvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyBUT0RPOiBhcyBzb29uIGFzIHRoZSBjb21wb25lbnRzIGFyZSBtb3ZlZCB0byBDTVMgZHJpdmVuIGNvbXBvbmVudHMgd2UgY2FuIGRyb3AgdGhpcyBzcGVjaWZpYyBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRcbiAge1xuICAgIHBhdGg6IG51bGwsXG4gICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50LFxuICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXJDb25maXJtYXRpb25QYWdlJywgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIE91dGxldFJlZk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmRdLFxuICBkZWNsYXJhdGlvbnM6IFtPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlIHt9XG4iXX0=
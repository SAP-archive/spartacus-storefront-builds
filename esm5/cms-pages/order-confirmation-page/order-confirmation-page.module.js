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
var ɵ0 = { cxRoute: 'orderConfirmation' };
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
                    declarations: [OrderConfirmationPageComponent],
                    exports: [OrderConfirmationPageComponent],
                },] }
    ];
    return OrderConfirmationPageModule;
}());
export { OrderConfirmationPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1NBUTNFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFOztJQU5wQyxNQUFNLEdBQVc7SUFDckIsOEhBQThIO0lBQzlIO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLDBCQUEwQixDQUFDO1FBQ2xFLFNBQVMsRUFBRSw4QkFBOEI7UUFDekMsSUFBSSxJQUFrQztLQUN2QztDQUNGO0FBRUQ7SUFBQTtJQVcwQyxDQUFDOztnQkFYMUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3FCQUM5QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztvQkFDOUMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzFDOztJQUN5QyxrQ0FBQztDQUFBLEFBWDNDLElBVzJDO1NBQTlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvZ3VhcmRzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLmd1YXJkJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24tcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgLy8gVE9ETzogYXMgc29vbiBhcyB0aGUgY29tcG9uZW50cyBhcmUgbW92ZWQgdG8gQ01TIGRyaXZlbiBjb21wb25lbnRzIHdlIGNhbiBkcm9wIHRoaXMgc3BlY2lmaWMgT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmQsIE9yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IGN4Um91dGU6ICdvcmRlckNvbmZpcm1hdGlvbicgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUge31cbiJdfQ==
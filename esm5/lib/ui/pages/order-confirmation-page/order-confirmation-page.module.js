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
                    declarations: [OrderConfirmationPageComponent],
                    exports: [OrderConfirmationPageComponent],
                },] }
    ];
    return OrderConfirmationPageModule;
}());
export { OrderConfirmationPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO1NBUTNFLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTs7SUFOeEUsTUFBTSxHQUFXO0lBQ3JCLDhIQUE4SDtJQUM5SDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSwwQkFBMEIsQ0FBQztRQUNsRSxTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLElBQUksSUFBc0U7S0FDM0U7Q0FDRjtBQUVEO0lBQUE7SUFXMEMsQ0FBQzs7Z0JBWDFDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDOUI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzlDLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUMxQzs7SUFDeUMsa0NBQUM7Q0FBQSxBQVgzQyxJQVcyQztTQUE5QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24tcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2luZGV4JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIC8vIFRPRE86IGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudHMgYXJlIG1vdmVkIHRvIENNUyBkcml2ZW4gY29tcG9uZW50cyB3ZSBjYW4gZHJvcCB0aGlzIHNwZWNpZmljIE9yZGVyQ29uZmlybWF0aW9uUGFnZUNvbXBvbmVudFxuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkLCBPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlckNvbmZpcm1hdGlvblBhZ2UnLCBjeFJvdXRlOiAnb3JkZXJDb25maXJtYXRpb24nIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPcmRlckNvbmZpcm1hdGlvblBhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT3JkZXJDb25maXJtYXRpb25QYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlIHt9XG4iXX0=
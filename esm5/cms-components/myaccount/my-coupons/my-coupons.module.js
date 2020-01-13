/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nModule, ConfigModule, AuthGuard, UrlModule, } from '@spartacus/core';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { MyCouponsComponent } from './my-coupons.component';
import { CouponCardComponent } from './coupon-card/coupon-card.component';
import { ListNavigationModule } from '../../../shared/components/list-navigation/list-navigation.module';
import { CouponDialogComponent } from './coupon-card/coupon-dialog/coupon-dialog.component';
import { CouponClaimComponent } from './coupon-claim/coupon-claim.component';
import { CmsPageGuard } from '../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../cms-structure/page/page-layout/page-layout.component';
import { IconModule } from '../../misc/icon/icon.module';
var ɵ0 = { cxRoute: 'couponClaim' };
var MyCouponsModule = /** @class */ (function () {
    function MyCouponsModule() {
    }
    MyCouponsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CardModule,
                        SpinnerModule,
                        I18nModule,
                        RouterModule,
                        UrlModule,
                        IconModule,
                        ListNavigationModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                MyCouponsComponent: {
                                    component: MyCouponsComponent,
                                    guards: [AuthGuard],
                                },
                                CouponClaimComponent: {
                                    component: CouponClaimComponent,
                                    guards: [AuthGuard],
                                },
                            },
                        }))),
                        RouterModule.forChild([
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ0,
                            },
                        ]),
                    ],
                    declarations: [
                        MyCouponsComponent,
                        CouponCardComponent,
                        CouponDialogComponent,
                        CouponClaimComponent,
                    ],
                    exports: [MyCouponsComponent, CouponClaimComponent],
                    entryComponents: [
                        MyCouponsComponent,
                        CouponDialogComponent,
                        CouponClaimComponent,
                    ],
                },] }
    ];
    return MyCouponsModule;
}());
export { MyCouponsModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUVaLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7U0E2QjNDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRTtBQTNCeEM7SUFBQTtJQTRDOEIsQ0FBQzs7Z0JBNUM5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixhQUFhO3dCQUNiLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixTQUFTO3dCQUNULFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2Isa0JBQWtCLEVBQUU7b0NBQ2xCLFNBQVMsRUFBRSxrQkFBa0I7b0NBQzdCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQ0FDcEI7Z0NBQ0Qsb0JBQW9CLEVBQUU7b0NBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7b0NBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQ0FDcEI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCO2dDQUNFLElBQUksRUFBRSxJQUFJO2dDQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7Z0NBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFBNEI7NkJBQ2pDO3lCQUNGLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7b0JBQ25ELGVBQWUsRUFBRTt3QkFDZixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNyQjtpQkFDRjs7SUFDNkIsc0JBQUM7Q0FBQSxBQTVDL0IsSUE0QytCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBJMThuTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQXV0aEd1YXJkLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBNeUNvdXBvbnNDb21wb25lbnQgfSBmcm9tICcuL215LWNvdXBvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXBvbkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvdXBvbi1jYXJkL2NvdXBvbi1jYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IExpc3ROYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL2xpc3QtbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ291cG9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vwb24tY2FyZC9jb3Vwb24tZGlhbG9nL2NvdXBvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXBvbkNsYWltQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vwb24tY2xhaW0vY291cG9uLWNsYWltLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE15Q291cG9uc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTXlDb3Vwb25zQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICAgIENvdXBvbkNsYWltQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDb3Vwb25DbGFpbUNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdjb3Vwb25DbGFpbScgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE15Q291cG9uc0NvbXBvbmVudCxcbiAgICBDb3Vwb25DYXJkQ29tcG9uZW50LFxuICAgIENvdXBvbkRpYWxvZ0NvbXBvbmVudCxcbiAgICBDb3Vwb25DbGFpbUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW015Q291cG9uc0NvbXBvbmVudCwgQ291cG9uQ2xhaW1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBNeUNvdXBvbnNDb21wb25lbnQsXG4gICAgQ291cG9uRGlhbG9nQ29tcG9uZW50LFxuICAgIENvdXBvbkNsYWltQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUNvdXBvbnNNb2R1bGUge31cbiJdfQ==
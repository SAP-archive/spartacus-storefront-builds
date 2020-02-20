import { __decorate } from "tslib";
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
const ɵ0 = { cxRoute: 'couponClaim' };
let MyCouponsModule = class MyCouponsModule {
};
MyCouponsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CardModule,
            SpinnerModule,
            I18nModule,
            RouterModule,
            UrlModule,
            IconModule,
            ListNavigationModule,
            ConfigModule.withConfig({
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
            }),
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
    })
], MyCouponsModule);
export { MyCouponsModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUVaLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7V0E2QjNDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRTtBQWlCeEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQTVDM0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFVBQVU7WUFDVixhQUFhO1lBQ2IsVUFBVTtZQUNWLFlBQVk7WUFDWixTQUFTO1lBQ1QsVUFBVTtZQUNWLG9CQUFvQjtZQUNwQixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2Isa0JBQWtCLEVBQUU7d0JBQ2xCLFNBQVMsRUFBRSxrQkFBa0I7d0JBQzdCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDcEI7b0JBQ0Qsb0JBQW9CLEVBQUU7d0JBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7d0JBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDcEI7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEI7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztvQkFDdEMsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUE0QjtpQkFDakM7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixvQkFBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQztRQUNuRCxlQUFlLEVBQUU7WUFDZixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLG9CQUFvQjtTQUNyQjtLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEkxOG5Nb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBBdXRoR3VhcmQsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IE15Q291cG9uc0NvbXBvbmVudCB9IGZyb20gJy4vbXktY291cG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cG9uQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY291cG9uLWNhcmQvY291cG9uLWNhcmQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGlzdE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vbGlzdC1uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDb3Vwb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvdXBvbi1jYXJkL2NvdXBvbi1kaWFsb2cvY291cG9uLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cG9uQ2xhaW1Db21wb25lbnQgfSBmcm9tICcuL2NvdXBvbi1jbGFpbS9jb3Vwb24tY2xhaW0uY29tcG9uZW50JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTXlDb3Vwb25zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBNeUNvdXBvbnNDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgICAgQ291cG9uQ2xhaW1Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENvdXBvbkNsYWltQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NvdXBvbkNsYWltJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXlDb3Vwb25zQ29tcG9uZW50LFxuICAgIENvdXBvbkNhcmRDb21wb25lbnQsXG4gICAgQ291cG9uRGlhbG9nQ29tcG9uZW50LFxuICAgIENvdXBvbkNsYWltQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbTXlDb3Vwb25zQ29tcG9uZW50LCBDb3Vwb25DbGFpbUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE15Q291cG9uc0NvbXBvbmVudCxcbiAgICBDb3Vwb25EaWFsb2dDb21wb25lbnQsXG4gICAgQ291cG9uQ2xhaW1Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE15Q291cG9uc01vZHVsZSB7fVxuIl19
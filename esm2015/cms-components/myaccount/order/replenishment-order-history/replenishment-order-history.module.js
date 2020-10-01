import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, I18nModule, provideConfig, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { ListNavigationModule } from '../../../../shared/components/list-navigation/list-navigation.module';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { ReplenishmentOrderHistoryComponent } from './replenishment-order-history.component';
import { defaultReplenishmentOrderCancellationLayoutConfig } from '../replenishment-order-details/default-replenishment-order-cancellation-layout.config';
const ɵ0 = { cxRoute: 'replenishmentOrders' };
export class ReplenishmentOrderHistoryModule {
}
ReplenishmentOrderHistoryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0,
                        },
                    ]),
                    RouterModule,
                    ListNavigationModule,
                    UrlModule,
                    I18nModule,
                ],
                providers: [
                    provideConfig(defaultReplenishmentOrderCancellationLayoutConfig),
                    provideDefaultConfig({
                        cmsComponents: {
                            AccountReplenishmentHistoryComponent: {
                                component: ReplenishmentOrderHistoryComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }),
                ],
                declarations: [ReplenishmentOrderHistoryComponent],
                exports: [ReplenishmentOrderHistoryComponent],
                entryComponents: [ReplenishmentOrderHistoryComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1oaXN0b3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXBsZW5pc2htZW50LW9yZGVyLWhpc3RvcnkvcmVwbGVuaXNobWVudC1vcmRlci1oaXN0b3J5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLE1BQU0sdUZBQXVGLENBQUM7V0FVNUksRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUU7QUF1QmhELE1BQU0sT0FBTywrQkFBK0I7OztZQS9CM0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7d0JBQ3BCOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7NEJBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBb0M7eUJBQ3pDO3FCQUNGLENBQUM7b0JBQ0YsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLFNBQVM7b0JBQ1QsVUFBVTtpQkFDWDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsYUFBYSxDQUFDLGlEQUFpRCxDQUFDO29CQUNoRSxvQkFBb0IsQ0FBWTt3QkFDOUIsYUFBYSxFQUFFOzRCQUNiLG9DQUFvQyxFQUFFO2dDQUNwQyxTQUFTLEVBQUUsa0NBQWtDO2dDQUM3QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkJBQ3BCO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUM3QyxlQUFlLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0TmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xpc3QtbmF2aWdhdGlvbi9saXN0LW5hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItaGlzdG9yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFJlcGxlbmlzaG1lbnRPcmRlckNhbmNlbGxhdGlvbkxheW91dENvbmZpZyB9IGZyb20gJy4uL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy9kZWZhdWx0LXJlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLWxheW91dC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ3JlcGxlbmlzaG1lbnRPcmRlcnMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0UmVwbGVuaXNobWVudE9yZGVyQ2FuY2VsbGF0aW9uTGF5b3V0Q29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudFJlcGxlbmlzaG1lbnRIaXN0b3J5Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5Q29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1JlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmVwbGVuaXNobWVudE9yZGVySGlzdG9yeU1vZHVsZSB7fVxuIl19
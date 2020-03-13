import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { MediaModule } from '../../../../shared/index';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { ReturnRequestOverviewComponent } from './return-request-overview/return-request-overview.component';
import { ReturnRequestItemsComponent } from './return-request-items/return-request-items.component';
import { ReturnRequestTotalsComponent } from './return-request-totals/return-request-totals.component';
var components = [
    ReturnRequestOverviewComponent,
    ReturnRequestItemsComponent,
    ReturnRequestTotalsComponent,
];
var ɵ0 = { cxRoute: 'returnRequestDetails' };
var ReturnRequestDetailModule = /** @class */ (function () {
    function ReturnRequestDetailModule() {
    }
    ReturnRequestDetailModule = __decorate([
        NgModule({
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
                UrlModule,
                I18nModule,
                MediaModule,
                FeaturesConfigModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        ReturnRequestOverviewComponent: {
                            component: ReturnRequestOverviewComponent,
                        },
                        ReturnRequestItemsComponent: {
                            component: ReturnRequestItemsComponent,
                        },
                        ReturnRequestTotalsComponent: {
                            component: ReturnRequestTotalsComponent,
                        },
                    },
                }),
            ],
            declarations: __spread(components),
            exports: __spread(components),
            entryComponents: __spread(components),
        })
    ], ReturnRequestDetailModule);
    return ReturnRequestDetailModule;
}());
export { ReturnRequestDetailModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV2RyxJQUFNLFVBQVUsR0FBRztJQUNqQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtDQUM3QixDQUFDO1NBVVksRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUU7QUE0QmpEO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix5QkFBeUI7UUFwQ3JDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCO3dCQUNFLElBQUksRUFBRSxJQUFJO3dCQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7d0JBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFBcUM7cUJBQzFDO2lCQUNGLENBQUM7Z0JBQ0YsWUFBWTtnQkFDWixTQUFTO2dCQUNULFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxvQkFBb0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYiw4QkFBOEIsRUFBRTs0QkFDOUIsU0FBUyxFQUFFLDhCQUE4Qjt5QkFDMUM7d0JBQ0QsMkJBQTJCLEVBQUU7NEJBQzNCLFNBQVMsRUFBRSwyQkFBMkI7eUJBQ3ZDO3dCQUNELDRCQUE0QixFQUFFOzRCQUM1QixTQUFTLEVBQUUsNEJBQTRCO3lCQUN4QztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLFdBQU0sVUFBVSxDQUFDO1lBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7WUFDeEIsZUFBZSxXQUFNLFVBQVUsQ0FBQztTQUNqQyxDQUFDO09BQ1cseUJBQXlCLENBQUc7SUFBRCxnQ0FBQztDQUFBLEFBQXpDLElBQXlDO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcvcmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLXJlcXVlc3QtaXRlbXMvcmV0dXJuLXJlcXVlc3QtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LXRvdGFscy9yZXR1cm4tcmVxdWVzdC10b3RhbHMuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50LFxuICBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQsXG4gIFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ3JldHVyblJlcXVlc3REZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5jb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLmNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5jb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuUmVxdWVzdERldGFpbE1vZHVsZSB7fVxuIl19
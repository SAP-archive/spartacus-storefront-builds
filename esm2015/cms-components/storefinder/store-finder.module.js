import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule, provideDefaultConfig, StoreFinderCoreModule, UrlModule, } from '@spartacus/core';
import { ListNavigationModule } from '../../shared/components/list-navigation/list-navigation.module';
import { SpinnerModule } from '../../shared/components/spinner/spinner.module';
import { IconModule } from './../misc/icon/icon.module';
import { ScheduleComponent } from './components/schedule-component/schedule.component';
import { StoreFinderGridComponent } from './components/store-finder-grid/store-finder-grid.component';
import { StoreFinderHeaderComponent } from './components/store-finder-header/store-finder-header.component';
import { StoreFinderListItemComponent } from './components/store-finder-list-item/store-finder-list-item.component';
import { StoreFinderMapComponent } from './components/store-finder-map/store-finder-map.component';
import { StoreFinderPaginationDetailsComponent } from './components/store-finder-pagination-details/store-finder-pagination-details.component';
import { StoreFinderListComponent } from './components/store-finder-search-result/store-finder-list/store-finder-list.component';
import { StoreFinderSearchResultComponent } from './components/store-finder-search-result/store-finder-search-result.component';
import { StoreFinderSearchComponent } from './components/store-finder-search/store-finder-search.component';
import { StoreFinderStoreDescriptionComponent } from './components/store-finder-store-description/store-finder-store-description.component';
import { StoreFinderStoresCountComponent } from './components/store-finder-stores-count/store-finder-stores-count.component';
import { StoreFinderComponent } from './components/store-finder/store-finder.component';
import { StoreFinderStoreComponent } from './components/store-finder-store/store-finder-store.component';
let StoreFinderModule = class StoreFinderModule {
};
StoreFinderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RouterModule,
            ListNavigationModule,
            NgbTabsetModule,
            SpinnerModule,
            UrlModule,
            StoreFinderCoreModule,
            I18nModule,
            IconModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    StoreFinderComponent: {
                        component: StoreFinderComponent,
                        childRoutes: [
                            {
                                path: 'find',
                                component: StoreFinderSearchResultComponent,
                            },
                            {
                                path: 'view-all',
                                component: StoreFinderStoresCountComponent,
                            },
                            {
                                path: 'country/:country',
                                component: StoreFinderGridComponent,
                            },
                            {
                                path: 'country/:country/region/:region',
                                component: StoreFinderGridComponent,
                            },
                            {
                                path: 'country/:country/region/:region/:store',
                                component: StoreFinderStoreComponent,
                            },
                            {
                                path: 'country/:country/:store',
                                component: StoreFinderStoreComponent,
                            },
                        ],
                    },
                },
                layoutSlots: {
                    StoreFinderPageTemplate: {
                        slots: ['MiddleContent', 'SideContent'],
                    },
                },
            }),
        ],
        declarations: [
            StoreFinderSearchComponent,
            StoreFinderListComponent,
            StoreFinderMapComponent,
            StoreFinderListItemComponent,
            StoreFinderStoresCountComponent,
            StoreFinderGridComponent,
            StoreFinderStoreDescriptionComponent,
            ScheduleComponent,
            StoreFinderHeaderComponent,
            StoreFinderSearchResultComponent,
            StoreFinderComponent,
            StoreFinderPaginationDetailsComponent,
            StoreFinderStoreComponent,
        ],
        exports: [
            ScheduleComponent,
            StoreFinderComponent,
            StoreFinderGridComponent,
            StoreFinderHeaderComponent,
            StoreFinderListItemComponent,
            StoreFinderMapComponent,
            StoreFinderPaginationDetailsComponent,
            StoreFinderSearchComponent,
            StoreFinderSearchResultComponent,
            StoreFinderListComponent,
            StoreFinderStoreDescriptionComponent,
            StoreFinderStoresCountComponent,
            StoreFinderStoreComponent,
        ],
        entryComponents: [
            StoreFinderComponent,
            StoreFinderSearchResultComponent,
            StoreFinderStoresCountComponent,
            StoreFinderGridComponent,
            StoreFinderStoreComponent,
        ],
    })
], StoreFinderModule);
export { StoreFinderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUVMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDcEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDL0ksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDakksT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUE2RnpHLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUEzRjdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsYUFBYTtZQUNiLFNBQVM7WUFDVCxxQkFBcUI7WUFDckIsVUFBVTtZQUNWLFVBQVU7U0FDWDtRQUNELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUEyQjtnQkFDN0MsYUFBYSxFQUFFO29CQUNiLG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3dCQUMvQixXQUFXLEVBQUU7NEJBQ1g7Z0NBQ0UsSUFBSSxFQUFFLE1BQU07Z0NBQ1osU0FBUyxFQUFFLGdDQUFnQzs2QkFDNUM7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLFVBQVU7Z0NBQ2hCLFNBQVMsRUFBRSwrQkFBK0I7NkJBQzNDOzRCQUNEO2dDQUNFLElBQUksRUFBRSxrQkFBa0I7Z0NBQ3hCLFNBQVMsRUFBRSx3QkFBd0I7NkJBQ3BDOzRCQUNEO2dDQUNFLElBQUksRUFBRSxpQ0FBaUM7Z0NBQ3ZDLFNBQVMsRUFBRSx3QkFBd0I7NkJBQ3BDOzRCQUNEO2dDQUNFLElBQUksRUFBRSx3Q0FBd0M7Z0NBQzlDLFNBQVMsRUFBRSx5QkFBeUI7NkJBQ3JDOzRCQUNEO2dDQUNFLElBQUksRUFBRSx5QkFBeUI7Z0NBQy9CLFNBQVMsRUFBRSx5QkFBeUI7NkJBQ3JDO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELFdBQVcsRUFBRTtvQkFDWCx1QkFBdUIsRUFBRTt3QkFDdkIsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztxQkFDeEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qiw0QkFBNEI7WUFDNUIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4QixvQ0FBb0M7WUFDcEMsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixnQ0FBZ0M7WUFDaEMsb0JBQW9CO1lBQ3BCLHFDQUFxQztZQUNyQyx5QkFBeUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2QixxQ0FBcUM7WUFDckMsMEJBQTBCO1lBQzFCLGdDQUFnQztZQUNoQyx3QkFBd0I7WUFDeEIsb0NBQW9DO1lBQ3BDLCtCQUErQjtZQUMvQix5QkFBeUI7U0FDMUI7UUFDRCxlQUFlLEVBQUU7WUFDZixvQkFBb0I7WUFDcEIsZ0NBQWdDO1lBQ2hDLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JUYWJzZXRNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBTdG9yZUZpbmRlckNvcmVNb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBMaXN0TmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xpc3QtbmF2aWdhdGlvbi9saXN0LW5hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zY2hlZHVsZS1jb21wb25lbnQvc2NoZWR1bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItZ3JpZC9zdG9yZS1maW5kZXItZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLWhlYWRlci9zdG9yZS1maW5kZXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0vc3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0L3N0b3JlLWZpbmRlci1saXN0L3N0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50L3N0b3JlLWZpbmRlci1zdG9yZXMtY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlL3N0b3JlLWZpbmRlci1zdG9yZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIE5nYlRhYnNldE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBTdG9yZUZpbmRlckNvcmVNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnIHwgTGF5b3V0Q29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU3RvcmVGaW5kZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgICAgICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdmaW5kJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICd2aWV3LWFsbCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5JyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvcmVnaW9uLzpyZWdpb24vOnN0b3JlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvOnN0b3JlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxheW91dFNsb3RzOiB7XG4gICAgICAgIFN0b3JlRmluZGVyUGFnZVRlbXBsYXRlOiB7XG4gICAgICAgICAgc2xvdHM6IFsnTWlkZGxlQ29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTW9kdWxlIHt9XG4iXX0=
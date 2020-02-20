import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigModule, I18nModule, StoreFinderCoreModule, UrlModule, } from '@spartacus/core';
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
            ConfigModule.withConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDcEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDL0ksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDakksT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUEyRnpHLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUF6RjdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsYUFBYTtZQUNiLFNBQVM7WUFDVCxxQkFBcUI7WUFDckIsVUFBVTtZQUNWLFVBQVU7WUFDVixZQUFZLENBQUMsVUFBVSxDQUEyQjtnQkFDaEQsYUFBYSxFQUFFO29CQUNiLG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3dCQUMvQixXQUFXLEVBQUU7NEJBQ1g7Z0NBQ0UsSUFBSSxFQUFFLE1BQU07Z0NBQ1osU0FBUyxFQUFFLGdDQUFnQzs2QkFDNUM7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLFVBQVU7Z0NBQ2hCLFNBQVMsRUFBRSwrQkFBK0I7NkJBQzNDOzRCQUNEO2dDQUNFLElBQUksRUFBRSxrQkFBa0I7Z0NBQ3hCLFNBQVMsRUFBRSx3QkFBd0I7NkJBQ3BDOzRCQUNEO2dDQUNFLElBQUksRUFBRSxpQ0FBaUM7Z0NBQ3ZDLFNBQVMsRUFBRSx3QkFBd0I7NkJBQ3BDOzRCQUNEO2dDQUNFLElBQUksRUFBRSx3Q0FBd0M7Z0NBQzlDLFNBQVMsRUFBRSx5QkFBeUI7NkJBQ3JDOzRCQUNEO2dDQUNFLElBQUksRUFBRSx5QkFBeUI7Z0NBQy9CLFNBQVMsRUFBRSx5QkFBeUI7NkJBQ3JDO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELFdBQVcsRUFBRTtvQkFDWCx1QkFBdUIsRUFBRTt3QkFDdkIsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztxQkFDeEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qiw0QkFBNEI7WUFDNUIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4QixvQ0FBb0M7WUFDcEMsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixnQ0FBZ0M7WUFDaEMsb0JBQW9CO1lBQ3BCLHFDQUFxQztZQUNyQyx5QkFBeUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2QixxQ0FBcUM7WUFDckMsMEJBQTBCO1lBQzFCLGdDQUFnQztZQUNoQyx3QkFBd0I7WUFDeEIsb0NBQW9DO1lBQ3BDLCtCQUErQjtZQUMvQix5QkFBeUI7U0FDMUI7UUFDRCxlQUFlLEVBQUU7WUFDZixvQkFBb0I7WUFDcEIsZ0NBQWdDO1lBQ2hDLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JUYWJzZXRNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgTGlzdE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vbGlzdC1uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NoZWR1bGUtY29tcG9uZW50L3NjaGVkdWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLWdyaWQvc3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1oZWFkZXIvc3RvcmUtZmluZGVyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItbGlzdC1pdGVtL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC9zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZS9zdG9yZS1maW5kZXItc3RvcmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOZ2JUYWJzZXRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnIHwgTGF5b3V0Q29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU3RvcmVGaW5kZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgICAgICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdmaW5kJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICd2aWV3LWFsbCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5JyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvcmVnaW9uLzpyZWdpb24vOnN0b3JlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvOnN0b3JlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxheW91dFNsb3RzOiB7XG4gICAgICAgIFN0b3JlRmluZGVyUGFnZVRlbXBsYXRlOiB7XG4gICAgICAgICAgc2xvdHM6IFsnTWlkZGxlQ29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTW9kdWxlIHt9XG4iXX0=
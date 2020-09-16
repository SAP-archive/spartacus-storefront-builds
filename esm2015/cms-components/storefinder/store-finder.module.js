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
export class StoreFinderModule {
}
StoreFinderModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBRUwsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUMvSSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUNqSSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUM1SSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQTZGekcsTUFBTSxPQUFPLGlCQUFpQjs7O1lBM0Y3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixhQUFhO29CQUNiLFNBQVM7b0JBQ1QscUJBQXFCO29CQUNyQixVQUFVO29CQUNWLFVBQVU7aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUEyQjt3QkFDN0MsYUFBYSxFQUFFOzRCQUNiLG9CQUFvQixFQUFFO2dDQUNwQixTQUFTLEVBQUUsb0JBQW9CO2dDQUMvQixXQUFXLEVBQUU7b0NBQ1g7d0NBQ0UsSUFBSSxFQUFFLE1BQU07d0NBQ1osU0FBUyxFQUFFLGdDQUFnQztxQ0FDNUM7b0NBQ0Q7d0NBQ0UsSUFBSSxFQUFFLFVBQVU7d0NBQ2hCLFNBQVMsRUFBRSwrQkFBK0I7cUNBQzNDO29DQUNEO3dDQUNFLElBQUksRUFBRSxrQkFBa0I7d0NBQ3hCLFNBQVMsRUFBRSx3QkFBd0I7cUNBQ3BDO29DQUNEO3dDQUNFLElBQUksRUFBRSxpQ0FBaUM7d0NBQ3ZDLFNBQVMsRUFBRSx3QkFBd0I7cUNBQ3BDO29DQUNEO3dDQUNFLElBQUksRUFBRSx3Q0FBd0M7d0NBQzlDLFNBQVMsRUFBRSx5QkFBeUI7cUNBQ3JDO29DQUNEO3dDQUNFLElBQUksRUFBRSx5QkFBeUI7d0NBQy9CLFNBQVMsRUFBRSx5QkFBeUI7cUNBQ3JDO2lDQUNGOzZCQUNGO3lCQUNGO3dCQUNELFdBQVcsRUFBRTs0QkFDWCx1QkFBdUIsRUFBRTtnQ0FDdkIsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQzs2QkFDeEM7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIsNEJBQTRCO29CQUM1QiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsb0NBQW9DO29CQUNwQyxpQkFBaUI7b0JBQ2pCLDBCQUEwQjtvQkFDMUIsZ0NBQWdDO29CQUNoQyxvQkFBb0I7b0JBQ3BCLHFDQUFxQztvQkFDckMseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLHVCQUF1QjtvQkFDdkIscUNBQXFDO29CQUNyQywwQkFBMEI7b0JBQzFCLGdDQUFnQztvQkFDaEMsd0JBQXdCO29CQUN4QixvQ0FBb0M7b0JBQ3BDLCtCQUErQjtvQkFDL0IseUJBQXlCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2Ysb0JBQW9CO29CQUNwQixnQ0FBZ0M7b0JBQ2hDLCtCQUErQjtvQkFDL0Isd0JBQXdCO29CQUN4Qix5QkFBeUI7aUJBQzFCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiVGFic2V0TW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgTGlzdE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vbGlzdC1uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NoZWR1bGUtY29tcG9uZW50L3NjaGVkdWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLWdyaWQvc3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1oZWFkZXIvc3RvcmUtZmluZGVyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItbGlzdC1pdGVtL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoLXJlc3VsdC9zdG9yZS1maW5kZXItbGlzdC9zdG9yZS1maW5kZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gvc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC9zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZS9zdG9yZS1maW5kZXItc3RvcmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOZ2JUYWJzZXRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZyB8IExheW91dENvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFN0b3JlRmluZGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICAgICAgICBjaGlsZFJvdXRlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnZmluZCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAndmlldy1hbGwnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeScsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvcmVnaW9uLzpyZWdpb24nLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5L3JlZ2lvbi86cmVnaW9uLzpzdG9yZScsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5LzpzdG9yZScsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYXlvdXRTbG90czoge1xuICAgICAgICBTdG9yZUZpbmRlclBhZ2VUZW1wbGF0ZToge1xuICAgICAgICAgIHNsb3RzOiBbJ01pZGRsZUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlck1hcENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJIZWFkZXJDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlck1hcENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlck1vZHVsZSB7fVxuIl19
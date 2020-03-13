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
var StoreFinderModule = /** @class */ (function () {
    function StoreFinderModule() {
    }
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
    return StoreFinderModule;
}());
export { StoreFinderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUVMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDcEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDL0ksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDakksT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUE2RnpHO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixpQkFBaUI7UUEzRjdCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixTQUFTO2dCQUNULHFCQUFxQjtnQkFDckIsVUFBVTtnQkFDVixVQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQTJCO29CQUM3QyxhQUFhLEVBQUU7d0JBQ2Isb0JBQW9CLEVBQUU7NEJBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7NEJBQy9CLFdBQVcsRUFBRTtnQ0FDWDtvQ0FDRSxJQUFJLEVBQUUsTUFBTTtvQ0FDWixTQUFTLEVBQUUsZ0NBQWdDO2lDQUM1QztnQ0FDRDtvQ0FDRSxJQUFJLEVBQUUsVUFBVTtvQ0FDaEIsU0FBUyxFQUFFLCtCQUErQjtpQ0FDM0M7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLGtCQUFrQjtvQ0FDeEIsU0FBUyxFQUFFLHdCQUF3QjtpQ0FDcEM7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLGlDQUFpQztvQ0FDdkMsU0FBUyxFQUFFLHdCQUF3QjtpQ0FDcEM7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLHdDQUF3QztvQ0FDOUMsU0FBUyxFQUFFLHlCQUF5QjtpQ0FDckM7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLHlCQUF5QjtvQ0FDL0IsU0FBUyxFQUFFLHlCQUF5QjtpQ0FDckM7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QsV0FBVyxFQUFFO3dCQUNYLHVCQUF1QixFQUFFOzRCQUN2QixLQUFLLEVBQUUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDO3lCQUN4QztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsNEJBQTRCO2dCQUM1QiwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsb0NBQW9DO2dCQUNwQyxpQkFBaUI7Z0JBQ2pCLDBCQUEwQjtnQkFDMUIsZ0NBQWdDO2dCQUNoQyxvQkFBb0I7Z0JBQ3BCLHFDQUFxQztnQkFDckMseUJBQXlCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQix3QkFBd0I7Z0JBQ3hCLDBCQUEwQjtnQkFDMUIsNEJBQTRCO2dCQUM1Qix1QkFBdUI7Z0JBQ3ZCLHFDQUFxQztnQkFDckMsMEJBQTBCO2dCQUMxQixnQ0FBZ0M7Z0JBQ2hDLHdCQUF3QjtnQkFDeEIsb0NBQW9DO2dCQUNwQywrQkFBK0I7Z0JBQy9CLHlCQUF5QjthQUMxQjtZQUNELGVBQWUsRUFBRTtnQkFDZixvQkFBb0I7Z0JBQ3BCLGdDQUFnQztnQkFDaEMsK0JBQStCO2dCQUMvQix3QkFBd0I7Z0JBQ3hCLHlCQUF5QjthQUMxQjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FBRztJQUFELHdCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYlRhYnNldE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFN0b3JlRmluZGVyQ29yZU1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IExpc3ROYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL2xpc3QtbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFNjaGVkdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NjaGVkdWxlLWNvbXBvbmVudC9zY2hlZHVsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1ncmlkL3N0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItaGVhZGVyL3N0b3JlLWZpbmRlci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLWxpc3QtaXRlbS9zdG9yZS1maW5kZXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItbWFwL3N0b3JlLWZpbmRlci1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQvc3RvcmUtZmluZGVyLWxpc3Qvc3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0L3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoL3N0b3JlLWZpbmRlci1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24vc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zdG9yZXMtY291bnQvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc3RvcmUvc3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmdiVGFic2V0TW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyQ29yZU1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWcgfCBMYXlvdXRDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTdG9yZUZpbmRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgY2hpbGRSb3V0ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2ZpbmQnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ3ZpZXctYWxsJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnknLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5L3JlZ2lvbi86cmVnaW9uJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbi86c3RvcmUnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS86c3RvcmUnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGF5b3V0U2xvdHM6IHtcbiAgICAgICAgU3RvcmVGaW5kZXJQYWdlVGVtcGxhdGU6IHtcbiAgICAgICAgICBzbG90czogWydNaWRkbGVDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdG9yZUZpbmRlclNlYXJjaENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gICAgU2NoZWR1bGVDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJIZWFkZXJDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2NoZWR1bGVDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RvcmVGaW5kZXJDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJNb2R1bGUge31cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, StoreFinderCoreModule, UrlTranslationModule, I18nModule, } from '@spartacus/core';
import { CmsModule } from '../cms/cms.module';
import { StoreFinderSearchComponent } from './components/store-finder-search/store-finder-search.component';
import { StoreFinderListComponent } from './components/store-finder-search-result/store-finder-list/store-finder-list.component';
import { StoreFinderMapComponent } from './components/store-finder-map/store-finder-map.component';
import { StoreFinderListItemComponent } from './components/store-finder-list-item/store-finder-list-item.component';
import { StoreFinderStoreDescriptionComponent } from './components/store-finder-store-description/store-finder-store-description.component';
import { ScheduleComponent } from './components/schedule-component/schedule.component';
import { StoreFinderStoresCountComponent } from './components/store-finder-stores-count/store-finder-stores-count.component';
import { StoreFinderGridComponent } from './components/store-finder-grid/store-finder-grid.component';
import { StoreFinderHeaderComponent } from './components/store-finder-header/store-finder-header.component';
import { StoreFinderSearchResultComponent } from './components/store-finder-search-result/store-finder-search-result.component';
// tslint:disable-next-line:max-line-length
import { StoreFinderPaginationDetailsComponent } from './components/store-finder-pagination-details/store-finder-pagination-details.component';
import { PaginationAndSortingModule } from '../ui/components/pagination-and-sorting/pagination-and-sorting.module';
import { BootstrapModule } from '../bootstrap.module';
import { SpinnerModule } from '../ui/components/spinner/spinner.module';
import { StoreFinderComponent } from './components/store-finder/store-finder.component';
var StoreFinderModule = /** @class */ (function () {
    function StoreFinderModule() {
    }
    StoreFinderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CmsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        PaginationAndSortingModule,
                        BootstrapModule,
                        SpinnerModule,
                        UrlTranslationModule,
                        StoreFinderCoreModule,
                        I18nModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                StoreFinderComponent: {
                                    selector: 'cx-store-finder',
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
                                            component: StoreFinderStoreDescriptionComponent,
                                        },
                                        {
                                            path: 'country/:country/:store',
                                            component: StoreFinderStoreDescriptionComponent,
                                        },
                                    ],
                                },
                            },
                            layoutSlots: {
                                StoreFinderPageTemplate: {
                                    slots: ['MiddleContent', 'SideContent'],
                                },
                            },
                        }))),
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
                    ],
                    exports: [
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
                    ],
                    entryComponents: [
                        StoreFinderComponent,
                        StoreFinderSearchResultComponent,
                        StoreFinderStoresCountComponent,
                        StoreFinderGridComponent,
                        StoreFinderStoreDescriptionComponent,
                        StoreFinderStoreDescriptionComponent,
                    ],
                },] }
    ];
    return StoreFinderModule;
}());
export { StoreFinderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFFTCxZQUFZLEVBQ1oscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDakksT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7O0FBRWhJLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQy9JLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHeEY7SUFBQTtJQXdGZ0MsQ0FBQzs7Z0JBeEZoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osMEJBQTBCO3dCQUMxQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBMEI7NEJBQ2hELGFBQWEsRUFBRTtnQ0FDYixvQkFBb0IsRUFBRTtvQ0FDcEIsUUFBUSxFQUFFLGlCQUFpQjtvQ0FDM0IsV0FBVyxFQUFFO3dDQUNYOzRDQUNFLElBQUksRUFBRSxNQUFNOzRDQUNaLFNBQVMsRUFBRSxnQ0FBZ0M7eUNBQzVDO3dDQUNEOzRDQUNFLElBQUksRUFBRSxVQUFVOzRDQUNoQixTQUFTLEVBQUUsK0JBQStCO3lDQUMzQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsa0JBQWtCOzRDQUN4QixTQUFTLEVBQUUsd0JBQXdCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsaUNBQWlDOzRDQUN2QyxTQUFTLEVBQUUsd0JBQXdCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsd0NBQXdDOzRDQUM5QyxTQUFTLEVBQUUsb0NBQW9DO3lDQUNoRDt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUseUJBQXlCOzRDQUMvQixTQUFTLEVBQUUsb0NBQW9DO3lDQUNoRDtxQ0FDRjtpQ0FDRjs2QkFDRjs0QkFDRCxXQUFXLEVBQUU7Z0NBQ1gsdUJBQXVCLEVBQUU7b0NBQ3ZCLEtBQUssRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7aUNBQ3hDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsNEJBQTRCO3dCQUM1QiwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsb0NBQW9DO3dCQUNwQyxpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsZ0NBQWdDO3dCQUNoQyxvQkFBb0I7d0JBQ3BCLHFDQUFxQztxQkFDdEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLDRCQUE0Qjt3QkFDNUIsK0JBQStCO3dCQUMvQix3QkFBd0I7d0JBQ3hCLG9DQUFvQzt3QkFDcEMsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLGdDQUFnQzt3QkFDaEMsb0JBQW9CO3dCQUNwQixxQ0FBcUM7cUJBQ3RDO29CQUNELGVBQWUsRUFBRTt3QkFDZixvQkFBb0I7d0JBQ3BCLGdDQUFnQzt3QkFDaEMsK0JBQStCO3dCQUMvQix3QkFBd0I7d0JBQ3hCLG9DQUFvQzt3QkFDcEMsb0NBQW9DO3FCQUNyQztpQkFDRjs7SUFDK0Isd0JBQUM7Q0FBQSxBQXhGakMsSUF3RmlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBTdG9yZUZpbmRlckNvcmVNb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi4vY21zL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQvc3RvcmUtZmluZGVyLWxpc3Qvc3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItbGlzdC1pdGVtL3N0b3JlLWZpbmRlci1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24vc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zY2hlZHVsZS1jb21wb25lbnQvc2NoZWR1bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3Jlcy1jb3VudC9zdG9yZS1maW5kZXItc3RvcmVzLWNvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLWdyaWQvc3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1oZWFkZXIvc3RvcmUtZmluZGVyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQvc3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQW5kU29ydGluZ01vZHVsZSB9IGZyb20gJy4uL3VpL2NvbXBvbmVudHMvcGFnaW5hdGlvbi1hbmQtc29ydGluZy9wYWdpbmF0aW9uLWFuZC1zb3J0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBCb290c3RyYXBNb2R1bGUgfSBmcm9tICcuLi9ib290c3RyYXAubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi91aS9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vdWkvbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUGFnaW5hdGlvbkFuZFNvcnRpbmdNb2R1bGUsXG4gICAgQm9vdHN0cmFwTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZyB8IExheW91dENvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFN0b3JlRmluZGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXInLFxuICAgICAgICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdmaW5kJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICd2aWV3LWFsbCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5JyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvcmVnaW9uLzpyZWdpb24vOnN0b3JlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS86c3RvcmUnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYXlvdXRTbG90czoge1xuICAgICAgICBTdG9yZUZpbmRlclBhZ2VUZW1wbGF0ZToge1xuICAgICAgICAgIHNsb3RzOiBbJ01pZGRsZUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlck1hcENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTW9kdWxlIHt9XG4iXX0=
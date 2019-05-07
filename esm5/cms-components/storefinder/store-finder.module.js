/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, StoreFinderCoreModule, UrlModule, } from '@spartacus/core';
import { BootstrapModule } from '../../lib/bootstrap.module';
import { CmsModule } from '../../lib/cms/index';
import { ListNavigationModule, SpinnerModule } from '../../shared/index';
import { ScheduleComponent, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, } from './components/index';
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
                        ListNavigationModule,
                        BootstrapModule,
                        SpinnerModule,
                        UrlModule,
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
                    entryComponents: [
                        StoreFinderComponent,
                        StoreFinderSearchResultComponent,
                        StoreFinderStoresCountComponent,
                        StoreFinderGridComponent,
                        StoreFinderStoreDescriptionComponent,
                    ],
                },] }
    ];
    return StoreFinderModule;
}());
export { StoreFinderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixxQ0FBcUMsRUFDckMsMEJBQTBCLEVBQzFCLGdDQUFnQyxFQUNoQyxvQ0FBb0MsRUFDcEMsK0JBQStCLEdBQ2hDLE1BQU0sb0JBQW9CLENBQUM7QUFFNUI7SUFBQTtJQXlFZ0MsQ0FBQzs7Z0JBekVoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxxQkFBcUI7d0JBQ3JCLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBMEI7NEJBQ2hELGFBQWEsRUFBRTtnQ0FDYixvQkFBb0IsRUFBRTtvQ0FDcEIsUUFBUSxFQUFFLGlCQUFpQjtvQ0FDM0IsV0FBVyxFQUFFO3dDQUNYOzRDQUNFLElBQUksRUFBRSxNQUFNOzRDQUNaLFNBQVMsRUFBRSxnQ0FBZ0M7eUNBQzVDO3dDQUNEOzRDQUNFLElBQUksRUFBRSxVQUFVOzRDQUNoQixTQUFTLEVBQUUsK0JBQStCO3lDQUMzQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsa0JBQWtCOzRDQUN4QixTQUFTLEVBQUUsd0JBQXdCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsaUNBQWlDOzRDQUN2QyxTQUFTLEVBQUUsd0JBQXdCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsd0NBQXdDOzRDQUM5QyxTQUFTLEVBQUUsb0NBQW9DO3lDQUNoRDt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUseUJBQXlCOzRDQUMvQixTQUFTLEVBQUUsb0NBQW9DO3lDQUNoRDtxQ0FDRjtpQ0FDRjs2QkFDRjs0QkFDRCxXQUFXLEVBQUU7Z0NBQ1gsdUJBQXVCLEVBQUU7b0NBQ3ZCLEtBQUssRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7aUNBQ3hDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsNEJBQTRCO3dCQUM1QiwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsb0NBQW9DO3dCQUNwQyxpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsZ0NBQWdDO3dCQUNoQyxvQkFBb0I7d0JBQ3BCLHFDQUFxQztxQkFDdEM7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLG9CQUFvQjt3QkFDcEIsZ0NBQWdDO3dCQUNoQywrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsb0NBQW9DO3FCQUNyQztpQkFDRjs7SUFDK0Isd0JBQUM7Q0FBQSxBQXpFakMsSUF5RWlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGliL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGliL2Ntcy9pbmRleCc7XG5pbXBvcnQgeyBMaXN0TmF2aWdhdGlvbk1vZHVsZSwgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge1xuICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJDb21wb25lbnQsXG4gIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJIZWFkZXJDb21wb25lbnQsXG4gIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJNYXBDb21wb25lbnQsXG4gIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50LFxuICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxufSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCb290c3RyYXBNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZyB8IExheW91dENvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFN0b3JlRmluZGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXInLFxuICAgICAgICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdmaW5kJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICd2aWV3LWFsbCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5JyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnkvcmVnaW9uLzpyZWdpb24vOnN0b3JlJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS86c3RvcmUnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYXlvdXRTbG90czoge1xuICAgICAgICBTdG9yZUZpbmRlclBhZ2VUZW1wbGF0ZToge1xuICAgICAgICAgIHNsb3RzOiBbJ01pZGRsZUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlck1hcENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyTW9kdWxlIHt9XG4iXX0=
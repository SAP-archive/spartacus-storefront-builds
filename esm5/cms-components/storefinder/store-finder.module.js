/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, StoreFinderCoreModule, UrlModule, } from '@spartacus/core';
import { CmsModule } from '../../cms-structure/cms.module';
import { BootstrapModule } from '../../lib/bootstrap.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixxQ0FBcUMsRUFDckMsMEJBQTBCLEVBQzFCLGdDQUFnQyxFQUNoQyxvQ0FBb0MsRUFDcEMsK0JBQStCLEdBQ2hDLE1BQU0sb0JBQW9CLENBQUM7QUFFNUI7SUFBQTtJQXlFZ0MsQ0FBQzs7Z0JBekVoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxxQkFBcUI7d0JBQ3JCLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBMEI7NEJBQ2hELGFBQWEsRUFBRTtnQ0FDYixvQkFBb0IsRUFBRTtvQ0FDcEIsUUFBUSxFQUFFLGlCQUFpQjtvQ0FDM0IsV0FBVyxFQUFFO3dDQUNYOzRDQUNFLElBQUksRUFBRSxNQUFNOzRDQUNaLFNBQVMsRUFBRSxnQ0FBZ0M7eUNBQzVDO3dDQUNEOzRDQUNFLElBQUksRUFBRSxVQUFVOzRDQUNoQixTQUFTLEVBQUUsK0JBQStCO3lDQUMzQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsa0JBQWtCOzRDQUN4QixTQUFTLEVBQUUsd0JBQXdCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsaUNBQWlDOzRDQUN2QyxTQUFTLEVBQUUsd0JBQXdCO3lDQUNwQzt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUsd0NBQXdDOzRDQUM5QyxTQUFTLEVBQUUsb0NBQW9DO3lDQUNoRDt3Q0FDRDs0Q0FDRSxJQUFJLEVBQUUseUJBQXlCOzRDQUMvQixTQUFTLEVBQUUsb0NBQW9DO3lDQUNoRDtxQ0FDRjtpQ0FDRjs2QkFDRjs0QkFDRCxXQUFXLEVBQUU7Z0NBQ1gsdUJBQXVCLEVBQUU7b0NBQ3ZCLEtBQUssRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7aUNBQ3hDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsNEJBQTRCO3dCQUM1QiwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsb0NBQW9DO3dCQUNwQyxpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsZ0NBQWdDO3dCQUNoQyxvQkFBb0I7d0JBQ3BCLHFDQUFxQztxQkFDdEM7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLG9CQUFvQjt3QkFDcEIsZ0NBQWdDO3dCQUNoQywrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsb0NBQW9DO3FCQUNyQztpQkFDRjs7SUFDK0Isd0JBQUM7Q0FBQSxBQXpFakMsSUF5RWlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgU3RvcmVGaW5kZXJDb3JlTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uL2xpYi9ib290c3RyYXAubW9kdWxlJztcbmltcG9ydCB7IExpc3ROYXZpZ2F0aW9uTW9kdWxlLCBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7XG4gIFNjaGVkdWxlQ29tcG9uZW50LFxuICBTdG9yZUZpbmRlckNvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICBTdG9yZUZpbmRlckhlYWRlckNvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50LFxuICBTdG9yZUZpbmRlck1hcENvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCxcbiAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICBTdG9yZUZpbmRlclN0b3JlRGVzY3JpcHRpb25Db21wb25lbnQsXG4gIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG59IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJvb3RzdHJhcE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBTdG9yZUZpbmRlckNvcmVNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnIHwgTGF5b3V0Q29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU3RvcmVGaW5kZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlcicsXG4gICAgICAgICAgY2hpbGRSb3V0ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2ZpbmQnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ3ZpZXctYWxsJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlclN0b3Jlc0NvdW50Q29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2NvdW50cnkvOmNvdW50cnknLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyR3JpZENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5L3JlZ2lvbi86cmVnaW9uJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiAnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbi86c3RvcmUnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdjb3VudHJ5Lzpjb3VudHJ5LzpzdG9yZScsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxheW91dFNsb3RzOiB7XG4gICAgICAgIFN0b3JlRmluZGVyUGFnZVRlbXBsYXRlOiB7XG4gICAgICAgICAgc2xvdHM6IFsnTWlkZGxlQ29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTWFwQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZXNDb3VudENvbXBvbmVudCxcbiAgICBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVySGVhZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0b3JlRmluZGVyQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVzQ291bnRDb21wb25lbnQsXG4gICAgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50LFxuICAgIFN0b3JlRmluZGVyU3RvcmVEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJNb2R1bGUge31cbiJdfQ==
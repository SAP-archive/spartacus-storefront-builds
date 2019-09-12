/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, ContextServiceMap, SiteContextModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { IconModule } from '../icon/index';
import { LanguageCurrencyComponent } from './language-currency.component';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextSelectorComponent } from './site-context-selector.component';
export class SiteContextSelectorModule {
}
SiteContextSelectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSSiteContextComponent: {
                                component: SiteContextSelectorComponent,
                                providers: [
                                    {
                                        provide: SiteContextComponentService,
                                        useClass: SiteContextComponentService,
                                        deps: [CmsComponentData, ContextServiceMap, Injector],
                                    },
                                ],
                            },
                            LanguageCurrencyComponent: {
                                component: LanguageCurrencyComponent,
                            },
                        },
                    }))),
                    SiteContextModule,
                    IconModule,
                ],
                providers: [SiteContextComponentService],
                declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                exports: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQStCakYsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBN0JyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsdUJBQXVCLEVBQUU7Z0NBQ3ZCLFNBQVMsRUFBRSw0QkFBNEI7Z0NBQ3ZDLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsMkJBQTJCO3dDQUNwQyxRQUFRLEVBQUUsMkJBQTJCO3dDQUNyQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7cUNBQ3REO2lDQUNGOzZCQUNGOzRCQUNELHlCQUF5QixFQUFFO2dDQUN6QixTQUFTLEVBQUUseUJBQXlCOzZCQUNyQzt5QkFDRjtxQkFDRixFQUFBLENBQUM7b0JBQ0YsaUJBQWlCO29CQUNqQixVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSx5QkFBeUIsQ0FBQztnQkFDdkUsZUFBZSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7Z0JBQzFFLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO2FBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBDb250ZXh0U2VydmljZU1hcCxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9sYW5ndWFnZS1jdXJyZW5jeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNTaXRlQ29udGV4dENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zQ29tcG9uZW50RGF0YSwgQ29udGV4dFNlcnZpY2VNYXAsIEluamVjdG9yXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUge31cbiJdfQ==
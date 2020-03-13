import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContextServiceMap, provideDefaultConfig, SiteContextModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { IconModule } from '../icon/index';
import { LanguageCurrencyComponent } from './language-currency.component';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextSelectorComponent } from './site-context-selector.component';
var SiteContextSelectorModule = /** @class */ (function () {
    function SiteContextSelectorModule() {
    }
    SiteContextSelectorModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, SiteContextModule, IconModule],
            providers: [
                provideDefaultConfig({
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
                }),
                SiteContextComponentService,
            ],
            declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            exports: [SiteContextSelectorComponent, LanguageCurrencyComponent],
        })
    ], SiteContextSelectorModule);
    return SiteContextSelectorModule;
}());
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQTRCakY7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHlCQUF5QjtRQTFCckMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUM7WUFDcEUsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2IsdUJBQXVCLEVBQUU7NEJBQ3ZCLFNBQVMsRUFBRSw0QkFBNEI7NEJBQ3ZDLFNBQVMsRUFBRTtnQ0FDVDtvQ0FDRSxPQUFPLEVBQUUsMkJBQTJCO29DQUNwQyxRQUFRLEVBQUUsMkJBQTJCO29DQUNyQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7aUNBQ3REOzZCQUNGO3lCQUNGO3dCQUNELHlCQUF5QixFQUFFOzRCQUN6QixTQUFTLEVBQUUseUJBQXlCO3lCQUNyQztxQkFDRjtpQkFDRixDQUFDO2dCQUNGLDJCQUEyQjthQUM1QjtZQUNELFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO1lBQ3ZFLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO1lBQzFFLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO1NBQ25FLENBQUM7T0FDVyx5QkFBeUIsQ0FBRztJQUFELGdDQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQgfSBmcm9tICcuL2xhbmd1YWdlLWN1cnJlbmN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBTaXRlQ29udGV4dE1vZHVsZSwgSWNvbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNTaXRlQ29udGV4dENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zQ29tcG9uZW50RGF0YSwgQ29udGV4dFNlcnZpY2VNYXAsIEluamVjdG9yXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB7fVxuIl19
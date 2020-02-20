import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, ContextServiceMap, SiteContextModule, } from '@spartacus/core';
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
            imports: [
                CommonModule,
                RouterModule,
                ConfigModule.withConfig({
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
                SiteContextModule,
                IconModule,
            ],
            providers: [SiteContextComponentService],
            declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            exports: [SiteContextSelectorComponent, LanguageCurrencyComponent],
        })
    ], SiteContextSelectorModule);
    return SiteContextSelectorModule;
}());
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQStCakY7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHlCQUF5QjtRQTdCckMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2IsdUJBQXVCLEVBQUU7NEJBQ3ZCLFNBQVMsRUFBRSw0QkFBNEI7NEJBQ3ZDLFNBQVMsRUFBRTtnQ0FDVDtvQ0FDRSxPQUFPLEVBQUUsMkJBQTJCO29DQUNwQyxRQUFRLEVBQUUsMkJBQTJCO29DQUNyQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7aUNBQ3REOzZCQUNGO3lCQUNGO3dCQUNELHlCQUF5QixFQUFFOzRCQUN6QixTQUFTLEVBQUUseUJBQXlCO3lCQUNyQztxQkFDRjtpQkFDRixDQUFDO2dCQUNGLGlCQUFpQjtnQkFDakIsVUFBVTthQUNYO1lBQ0QsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7WUFDdkUsZUFBZSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7WUFDMUUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7U0FDbkUsQ0FBQztPQUNXLHlCQUF5QixDQUFHO0lBQUQsZ0NBQUM7Q0FBQSxBQUF6QyxJQUF5QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQgfSBmcm9tICcuL2xhbmd1YWdlLWN1cnJlbmN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1NpdGVDb250ZXh0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBDb250ZXh0U2VydmljZU1hcCwgSW5qZWN0b3JdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB7fVxuIl19
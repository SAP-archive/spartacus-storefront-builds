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
let SiteContextSelectorModule = class SiteContextSelectorModule {
};
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
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQTRCakYsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7Q0FBRyxDQUFBO0FBQTVCLHlCQUF5QjtJQTFCckMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDcEUsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYix1QkFBdUIsRUFBRTt3QkFDdkIsU0FBUyxFQUFFLDRCQUE0Qjt3QkFDdkMsU0FBUyxFQUFFOzRCQUNUO2dDQUNFLE9BQU8sRUFBRSwyQkFBMkI7Z0NBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7Z0NBQ3JDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQzs2QkFDdEQ7eUJBQ0Y7cUJBQ0Y7b0JBQ0QseUJBQXlCLEVBQUU7d0JBQ3pCLFNBQVMsRUFBRSx5QkFBeUI7cUJBQ3JDO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLDJCQUEyQjtTQUM1QjtRQUNELFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO1FBQ3ZFLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO1FBQzFFLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO0tBQ25FLENBQUM7R0FDVyx5QkFBeUIsQ0FBRztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb250ZXh0U2VydmljZU1hcCxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFNpdGVDb250ZXh0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCB9IGZyb20gJy4vbGFuZ3VhZ2UtY3VycmVuY3kuY29tcG9uZW50JztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFNpdGVDb250ZXh0TW9kdWxlLCBJY29uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1NpdGVDb250ZXh0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBDb250ZXh0U2VydmljZU1hcCwgSW5qZWN0b3JdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIHt9XG4iXX0=
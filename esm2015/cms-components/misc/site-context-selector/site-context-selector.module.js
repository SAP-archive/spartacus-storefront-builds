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
let SiteContextSelectorModule = class SiteContextSelectorModule {
};
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
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQStCakYsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7Q0FBRyxDQUFBO0FBQTVCLHlCQUF5QjtJQTdCckMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsdUJBQXVCLEVBQUU7d0JBQ3ZCLFNBQVMsRUFBRSw0QkFBNEI7d0JBQ3ZDLFNBQVMsRUFBRTs0QkFDVDtnQ0FDRSxPQUFPLEVBQUUsMkJBQTJCO2dDQUNwQyxRQUFRLEVBQUUsMkJBQTJCO2dDQUNyQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7NkJBQ3REO3lCQUNGO3FCQUNGO29CQUNELHlCQUF5QixFQUFFO3dCQUN6QixTQUFTLEVBQUUseUJBQXlCO3FCQUNyQztpQkFDRjthQUNGLENBQUM7WUFDRixpQkFBaUI7WUFDakIsVUFBVTtTQUNYO1FBQ0QsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDeEMsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7UUFDdkUsZUFBZSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7UUFDMUUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7S0FDbkUsQ0FBQztHQUNXLHlCQUF5QixDQUFHO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIFNpdGVDb250ZXh0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCB9IGZyb20gJy4vbGFuZ3VhZ2UtY3VycmVuY3kuY29tcG9uZW50JztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIENvbnRleHRTZXJ2aWNlTWFwLCBJbmplY3Rvcl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNpdGVDb250ZXh0TW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1NpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIHt9XG4iXX0=
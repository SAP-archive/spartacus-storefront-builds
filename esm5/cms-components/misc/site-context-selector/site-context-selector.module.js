/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, ContextServiceMap, SiteContextModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { LanguageCurrencyComponent } from './language-currency.component';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextSelectorComponent } from './site-context-selector.component';
var SiteContextSelectorModule = /** @class */ (function () {
    function SiteContextSelectorModule() {
    }
    SiteContextSelectorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CMSSiteContextComponent: {
                                    selector: 'cx-site-context-selector',
                                    providers: [
                                        {
                                            provide: SiteContextComponentService,
                                            useClass: SiteContextComponentService,
                                            deps: [CmsComponentData, ContextServiceMap, Injector],
                                        },
                                    ],
                                },
                                LanguageCurrencyComponent: {
                                    selector: 'cx-language-currency-selector',
                                },
                            },
                        }))),
                        SiteContextModule.forRoot(),
                    ],
                    providers: [SiteContextComponentService],
                    declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                    entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                },] }
    ];
    return SiteContextSelectorModule;
}());
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakY7SUFBQTtJQTJCd0MsQ0FBQzs7Z0JBM0J4QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsdUJBQXVCLEVBQUU7b0NBQ3ZCLFFBQVEsRUFBRSwwQkFBMEI7b0NBQ3BDLFNBQVMsRUFBRTt3Q0FDVDs0Q0FDRSxPQUFPLEVBQUUsMkJBQTJCOzRDQUNwQyxRQUFRLEVBQUUsMkJBQTJCOzRDQUNyQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7eUNBQ3REO3FDQUNGO2lDQUNGO2dDQUNELHlCQUF5QixFQUFFO29DQUN6QixRQUFRLEVBQUUsK0JBQStCO2lDQUMxQzs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsaUJBQWlCLENBQUMsT0FBTyxFQUFFO3FCQUM1QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDeEMsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7b0JBQ3ZFLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO2lCQUMzRTs7SUFDdUMsZ0NBQUM7Q0FBQSxBQTNCekMsSUEyQnlDO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIFNpdGVDb250ZXh0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCB9IGZyb20gJy4vbGFuZ3VhZ2UtY3VycmVuY3kuY29tcG9uZW50JztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3NpdGUtY29udGV4dC1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXNpdGUtY29udGV4dC1zZWxlY3RvcicsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIENvbnRleHRTZXJ2aWNlTWFwLCBJbmplY3Rvcl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWxhbmd1YWdlLWN1cnJlbmN5LXNlbGVjdG9yJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgU2l0ZUNvbnRleHRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBwcm92aWRlcnM6IFtTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUge31cbiJdfQ==
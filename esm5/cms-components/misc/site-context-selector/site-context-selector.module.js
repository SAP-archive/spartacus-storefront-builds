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
    return SiteContextSelectorModule;
}());
export { SiteContextSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRjtJQUFBO0lBNkJ3QyxDQUFDOztnQkE3QnhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix1QkFBdUIsRUFBRTtvQ0FDdkIsU0FBUyxFQUFFLDRCQUE0QjtvQ0FDdkMsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSwyQkFBMkI7NENBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7NENBQ3JDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQzt5Q0FDdEQ7cUNBQ0Y7aUNBQ0Y7Z0NBQ0QseUJBQXlCLEVBQUU7b0NBQ3pCLFNBQVMsRUFBRSx5QkFBeUI7aUNBQ3JDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixpQkFBaUI7d0JBQ2pCLFVBQVU7cUJBQ1g7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3hDLFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLHlCQUF5QixDQUFDO29CQUN2RSxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSx5QkFBeUIsQ0FBQztvQkFDMUUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7aUJBQ25FOztJQUN1QyxnQ0FBQztDQUFBLEFBN0J6QyxJQTZCeUM7U0FBNUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBDb250ZXh0U2VydmljZU1hcCxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9sYW5ndWFnZS1jdXJyZW5jeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXNlbGVjdG9yLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNTaXRlQ29udGV4dENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zQ29tcG9uZW50RGF0YSwgQ29udGV4dFNlcnZpY2VNYXAsIEluamVjdG9yXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCwgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUge31cbiJdfQ==
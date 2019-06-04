/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    SiteContextModule,
                    IconModule,
                ],
                providers: [SiteContextComponentService],
                declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2Mvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQThCakYsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBNUJyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsdUJBQXVCLEVBQUU7Z0NBQ3ZCLFFBQVEsRUFBRSwwQkFBMEI7Z0NBQ3BDLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsMkJBQTJCO3dDQUNwQyxRQUFRLEVBQUUsMkJBQTJCO3dDQUNyQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7cUNBQ3REO2lDQUNGOzZCQUNGOzRCQUNELHlCQUF5QixFQUFFO2dDQUN6QixRQUFRLEVBQUUsK0JBQStCOzZCQUMxQzt5QkFDRjtxQkFDRixFQUFBLENBQUM7b0JBQ0YsaUJBQWlCO29CQUNqQixVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSx5QkFBeUIsQ0FBQztnQkFDdkUsZUFBZSxFQUFFLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLENBQUM7YUFDM0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQgfSBmcm9tICcuL2xhbmd1YWdlLWN1cnJlbmN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtc2VsZWN0b3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1NpdGVDb250ZXh0Q29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1zaXRlLWNvbnRleHQtc2VsZWN0b3InLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBDb250ZXh0U2VydmljZU1hcCwgSW5qZWN0b3JdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1sYW5ndWFnZS1jdXJyZW5jeS1zZWxlY3RvcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNpdGVDb250ZXh0TW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1NpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LCBMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB7fVxuIl19
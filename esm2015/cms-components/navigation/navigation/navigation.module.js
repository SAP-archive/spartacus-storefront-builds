/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsService, ConfigModule, I18nModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { BootstrapModule } from '../../../lib/bootstrap.module';
import { NavigationUIComponent } from './navigation-ui.component';
import { NavigationComponent } from './navigation.component';
import { NavigationComponentService } from './navigation.component.service';
export class NavigationModule {
}
NavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    BootstrapModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            NavigationComponent: {
                                selector: 'cx-navigation',
                                providers: [
                                    {
                                        provide: NavigationComponentService,
                                        useClass: NavigationComponentService,
                                        deps: [CmsService, CmsComponentData],
                                    },
                                ],
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [NavigationComponent, NavigationUIComponent],
                entryComponents: [NavigationComponent],
                exports: [NavigationComponent, NavigationUIComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUEyQjVFLE1BQU0sT0FBTyxnQkFBZ0I7OztZQXpCNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsbUJBQW1CLEVBQUU7Z0NBQ25CLFFBQVEsRUFBRSxlQUFlO2dDQUN6QixTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLDBCQUEwQjt3Q0FDbkMsUUFBUSxFQUFFLDBCQUEwQjt3Q0FDcEMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO3FDQUNyQztpQ0FDRjs2QkFDRjt5QkFDRjtxQkFDRixFQUFBLENBQUM7b0JBQ0YsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDMUQsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDbXNTZXJ2aWNlLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBCb290c3RyYXBNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvYm9vdHN0cmFwLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQm9vdHN0cmFwTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1uYXZpZ2F0aW9uJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc1NlcnZpY2UsIENtc0NvbXBvbmVudERhdGFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZpZ2F0aW9uVUlDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmlnYXRpb25Db21wb25lbnQsIE5hdmlnYXRpb25VSUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==
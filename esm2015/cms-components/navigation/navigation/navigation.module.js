/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsService, ConfigModule, I18nModule, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { IconModule } from '../../misc/icon/icon.module';
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
                    IconModule,
                    GenericLinkModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUE0QjVFLE1BQU0sT0FBTyxnQkFBZ0I7OztZQTFCNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixtQkFBbUIsRUFBRTtnQ0FDbkIsUUFBUSxFQUFFLGVBQWU7Z0NBQ3pCLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsMEJBQTBCO3dDQUNuQyxRQUFRLEVBQUUsMEJBQTBCO3dDQUNwQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7cUNBQ3JDO2lDQUNGOzZCQUNGO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2dCQUMxRCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7YUFDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvZ2VuZXJpYy1saW5rL2dlbmVyaWMtbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBHZW5lcmljTGlua01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTmF2aWdhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbicsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNTZXJ2aWNlLCBDbXNDb21wb25lbnREYXRhXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmF2aWdhdGlvbkNvbXBvbmVudCwgTmF2aWdhdGlvblVJQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZpZ2F0aW9uVUlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=
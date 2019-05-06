/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsService, ConfigModule } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { BootstrapModule } from '../../../lib/bootstrap.module';
import { NavigationComponentService } from '../navigation/navigation.component.service';
import { NavigationModule } from '../navigation/navigation.module';
import { CategoryNavigationComponent } from './category-navigation.component';
var CategoryNavigationModule = /** @class */ (function () {
    function CategoryNavigationModule() {
    }
    CategoryNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NavigationModule,
                        BootstrapModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CategoryNavigationComponent: {
                                    selector: 'cx-category-navigation',
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
                    ],
                    declarations: [CategoryNavigationComponent],
                    entryComponents: [CategoryNavigationComponent],
                    exports: [CategoryNavigationComponent],
                },] }
    ];
    return CategoryNavigationModule;
}());
export { CategoryNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlFO0lBQUE7SUF3QnVDLENBQUM7O2dCQXhCdkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsMkJBQTJCLEVBQUU7b0NBQzNCLFFBQVEsRUFBRSx3QkFBd0I7b0NBQ2xDLFNBQVMsRUFBRTt3Q0FDVDs0Q0FDRSxPQUFPLEVBQUUsMEJBQTBCOzRDQUNuQyxRQUFRLEVBQUUsMEJBQTBCOzRDQUNwQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7eUNBQ3JDO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0MsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzlDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN2Qzs7SUFDc0MsK0JBQUM7Q0FBQSxBQXhCeEMsSUF3QndDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDbXNTZXJ2aWNlLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCb290c3RyYXBNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtY2F0ZWdvcnktbmF2aWdhdGlvbicsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNTZXJ2aWNlLCBDbXNDb21wb25lbnREYXRhXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==
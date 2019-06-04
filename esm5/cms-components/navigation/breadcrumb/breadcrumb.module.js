/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, CmsPageTitleModule } from '@spartacus/core';
import { BreadcrumbComponent } from './breadcrumb.component';
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                BreadcrumbComponent: { selector: 'cx-breadcrumb' },
                            },
                        }))),
                        CmsPageTitleModule,
                    ],
                    declarations: [BreadcrumbComponent],
                    entryComponents: [BreadcrumbComponent],
                },] }
    ];
    return BreadcrumbModule;
}());
export { BreadcrumbModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0Q7SUFBQTtJQWMrQixDQUFDOztnQkFkL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG1CQUFtQixFQUFFLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs2QkFDbkQ7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLGtCQUFrQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUN2Qzs7SUFDOEIsdUJBQUM7Q0FBQSxBQWRoQyxJQWNnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENtc0NvbmZpZywgQ21zUGFnZVRpdGxlTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1icmVhZGNydW1iJyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDbXNQYWdlVGl0bGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0JyZWFkY3J1bWJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCcmVhZGNydW1iQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYk1vZHVsZSB7fVxuIl19
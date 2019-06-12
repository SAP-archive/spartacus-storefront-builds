/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FooterNavigationComponent } from './footer-navigation.component';
var FooterNavigationModule = /** @class */ (function () {
    function FooterNavigationModule() {
    }
    FooterNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        NavigationModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                FooterNavigationComponent: {
                                    component: FooterNavigationComponent,
                                },
                            },
                        }))),
                        GenericLinkModule,
                    ],
                    declarations: [FooterNavigationComponent],
                    entryComponents: [FooterNavigationComponent],
                    exports: [FooterNavigationComponent],
                },] }
    ];
    return FooterNavigationModule;
}());
export { FooterNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUU7SUFBQTtJQWtCcUMsQ0FBQzs7Z0JBbEJyQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix5QkFBeUIsRUFBRTtvQ0FDekIsU0FBUyxFQUFFLHlCQUF5QjtpQ0FDckM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUM1QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckM7O0lBQ29DLDZCQUFDO0NBQUEsQUFsQnRDLElBa0JzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsubW9kdWxlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEdlbmVyaWNMaW5rTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19
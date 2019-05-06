/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsService, ConfigModule } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { NavigationComponentService } from '../navigation/navigation.component.service';
import { FooterNavigationComponent } from './footer-navigation.component';
export class FooterNavigationModule {
}
FooterNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            FooterNavigationComponent: {
                                selector: 'cx-footer-navigation',
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
                    GenericLinkModule,
                ],
                declarations: [FooterNavigationComponent],
                entryComponents: [FooterNavigationComponent],
                exports: [FooterNavigationComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBMEIxRSxNQUFNLE9BQU8sc0JBQXNCOzs7WUF4QmxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix5QkFBeUIsRUFBRTtnQ0FDekIsUUFBUSxFQUFFLHNCQUFzQjtnQ0FDaEMsU0FBUyxFQUFFO29DQUNUO3dDQUNFLE9BQU8sRUFBRSwwQkFBMEI7d0NBQ25DLFFBQVEsRUFBRSwwQkFBMEI7d0NBQ3BDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztxQ0FDckM7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ21zU2VydmljZSwgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvZ2VuZXJpYy1saW5rL2dlbmVyaWMtbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWZvb3Rlci1uYXZpZ2F0aW9uJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc1NlcnZpY2UsIENtc0NvbXBvbmVudERhdGFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBHZW5lcmljTGlua01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Zvb3Rlck5hdmlnYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==
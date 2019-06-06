/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsService, ConfigModule } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { NavigationComponentService } from '../navigation/navigation.component.service';
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
    return FooterNavigationModule;
}());
export { FooterNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFO0lBQUE7SUF5QnFDLENBQUM7O2dCQXpCckMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IseUJBQXlCLEVBQUU7b0NBQ3pCLFNBQVMsRUFBRSx5QkFBeUI7b0NBQ3BDLFNBQVMsRUFBRTt3Q0FDVDs0Q0FDRSxPQUFPLEVBQUUsMEJBQTBCOzRDQUNuQyxRQUFRLEVBQUUsMEJBQTBCOzRDQUNwQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7eUNBQ3JDO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxlQUFlLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDNUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7aUJBQ3JDOztJQUNvQyw2QkFBQztDQUFBLEFBekJ0QyxJQXlCc0M7U0FBekIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDbXNTZXJ2aWNlLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgR2VuZXJpY0xpbmtNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9nZW5lcmljLWxpbmsvZ2VuZXJpYy1saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zU2VydmljZSwgQ21zQ29tcG9uZW50RGF0YV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEdlbmVyaWNMaW5rTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19
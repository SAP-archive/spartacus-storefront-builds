/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { BannerComponent } from './banner.component';
export class BannerModule {
}
BannerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GenericLinkModule,
                    MediaModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            SimpleResponsiveBannerComponent: {
                                component: BannerComponent,
                            },
                            BannerComponent: {
                                component: BannerComponent,
                            },
                            SimpleBannerComponent: {
                                component: BannerComponent,
                            },
                        },
                    }))),
                ],
                declarations: [BannerComponent],
                entryComponents: [BannerComponent],
                exports: [BannerComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQTBCckQsTUFBTSxPQUFPLFlBQVk7OztZQXhCeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYiwrQkFBK0IsRUFBRTtnQ0FDL0IsU0FBUyxFQUFFLGVBQWU7NkJBQzNCOzRCQUNELGVBQWUsRUFBRTtnQ0FDZixTQUFTLEVBQUUsZUFBZTs2QkFDM0I7NEJBQ0QscUJBQXFCLEVBQUU7Z0NBQ3JCLFNBQVMsRUFBRSxlQUFlOzZCQUMzQjt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvZ2VuZXJpYy1saW5rL2dlbmVyaWMtbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2VuZXJpY0xpbmtNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEJhbm5lckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBCYW5uZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFNpbXBsZUJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQmFubmVyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQmFubmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Jhbm5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lck1vZHVsZSB7fVxuIl19
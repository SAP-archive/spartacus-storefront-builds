/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../lib/ui/components/generic-link/generic-link.module';
import { MediaModule } from '../../../lib/ui/components/media/media.module';
import { BannerComponent } from './banner.component';
var BannerModule = /** @class */ (function () {
    function BannerModule() {
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
                                    selector: 'cx-banner',
                                },
                                BannerComponent: {
                                    selector: 'cx-banner',
                                },
                                SimpleBannerComponent: {
                                    selector: 'cx-banner',
                                },
                            },
                        }))),
                    ],
                    declarations: [BannerComponent],
                    entryComponents: [BannerComponent],
                },] }
    ];
    return BannerModule;
}());
export { BannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQUFBO0lBdUIyQixDQUFDOztnQkF2QjNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsK0JBQStCLEVBQUU7b0NBQy9CLFFBQVEsRUFBRSxXQUFXO2lDQUN0QjtnQ0FDRCxlQUFlLEVBQUU7b0NBQ2YsUUFBUSxFQUFFLFdBQVc7aUNBQ3RCO2dDQUNELHFCQUFxQixFQUFFO29DQUNyQixRQUFRLEVBQUUsV0FBVztpQ0FDdEI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUNuQzs7SUFDMEIsbUJBQUM7Q0FBQSxBQXZCNUIsSUF1QjRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3VpL2NvbXBvbmVudHMvZ2VuZXJpYy1saW5rL2dlbmVyaWMtbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvdWkvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2VuZXJpY0xpbmtNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWJhbm5lcicsXG4gICAgICAgIH0sXG4gICAgICAgIEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtYmFubmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgU2ltcGxlQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1iYW5uZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyTW9kdWxlIHt9XG4iXX0=
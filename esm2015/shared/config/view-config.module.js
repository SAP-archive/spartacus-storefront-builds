/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ViewConfig } from './view-config';
import { Config, provideConfig } from '@spartacus/core';
export class ViewConfigModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ViewConfigModule,
            providers: [
                provideConfig({
                    view: {},
                }),
                {
                    provide: ViewConfig,
                    useExisting: Config,
                },
            ],
        };
    }
}
ViewConfigModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQztvQkFDWixJQUFJLEVBQUUsRUFBRTtpQkFDVCxDQUFDO2dCQUNGO29CQUNFLE9BQU8sRUFBRSxVQUFVO29CQUNuQixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFmRixRQUFRLFNBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi92aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgVmlld0NvbmZpZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Vmlld0NvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVmlld0NvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlQ29uZmlnKHtcbiAgICAgICAgICB2aWV3OiB7fSxcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBWaWV3Q29uZmlnLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDb25maWcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
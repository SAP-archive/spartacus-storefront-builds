/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ConfigModule, provideConfig } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { LayoutModule } from '../layout/layout.module';
import { b2cLayoutConfig } from './config/b2c-layout-config';
import { defaultCmsContentConfig } from './config/static-cms-structure/default-cms-content.config';
import { StorefrontModule } from './storefront.module';
var B2cStorefrontModule = /** @class */ (function () {
    function B2cStorefrontModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    B2cStorefrontModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: B2cStorefrontModule,
            providers: [provideConfig(config)],
        };
    };
    B2cStorefrontModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StorefrontModule.withConfig((/** @type {?} */ ({
                            pwa: {
                                enabled: true,
                                addToHomeScreen: true,
                            },
                        }))),
                        ConfigModule.withConfig(b2cLayoutConfig),
                        ConfigModule.withConfigFactory(defaultCmsContentConfig),
                        // the cms lib module contains all components that added in the bundle
                        CmsLibModule,
                    ],
                    exports: [LayoutModule],
                },] }
    ];
    return B2cStorefrontModule;
}());
export { B2cStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFBQTtJQXdCQSxDQUFDOzs7OztJQU5RLDhCQUFVOzs7O0lBQWpCLFVBQWtCLE1BQXlCO1FBQ3pDLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLG1CQUFrQjs0QkFDNUMsR0FBRyxFQUFFO2dDQUNILE9BQU8sRUFBRSxJQUFJO2dDQUNiLGVBQWUsRUFBRSxJQUFJOzZCQUN0Qjt5QkFDRixFQUFBLENBQUM7d0JBRUYsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7d0JBQ3hDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFFdkQsc0VBQXNFO3dCQUN0RSxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBUUQsMEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQVBZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvY21zLWxpYi5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IGIyY0xheW91dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2IyYy1sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDbXNDb250ZW50Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RhdGljLWNtcy1zdHJ1Y3R1cmUvZGVmYXVsdC1jbXMtY29udGVudC5jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZSB9IGZyb20gJy4vc3RvcmVmcm9udC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVmcm9udE1vZHVsZS53aXRoQ29uZmlnKDxTdG9yZWZyb250Q29uZmlnPntcbiAgICAgIHB3YToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhZGRUb0hvbWVTY3JlZW46IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoYjJjTGF5b3V0Q29uZmlnKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoZGVmYXVsdENtc0NvbnRlbnRDb25maWcpLFxuXG4gICAgLy8gdGhlIGNtcyBsaWIgbW9kdWxlIGNvbnRhaW5zIGFsbCBjb21wb25lbnRzIHRoYXQgYWRkZWQgaW4gdGhlIGJ1bmRsZVxuICAgIENtc0xpYk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEIyY1N0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTdG9yZWZyb250Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCMmNTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
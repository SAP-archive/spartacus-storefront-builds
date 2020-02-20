import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ConfigModule, provideConfig } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2cLayoutConfig } from './config/b2c-layout-config';
import { defaultCmsContentConfig } from './config/static-cms-structure/default-cms-content.config';
import { StorefrontModule } from './storefront.module';
var B2cStorefrontModule = /** @class */ (function () {
    function B2cStorefrontModule() {
    }
    B2cStorefrontModule_1 = B2cStorefrontModule;
    B2cStorefrontModule.withConfig = function (config) {
        return {
            ngModule: B2cStorefrontModule_1,
            providers: [provideConfig(config)],
        };
    };
    var B2cStorefrontModule_1;
    B2cStorefrontModule = B2cStorefrontModule_1 = __decorate([
        NgModule({
            imports: [
                StorefrontModule.withConfig({
                    pwa: {
                        enabled: true,
                        addToHomeScreen: true,
                    },
                }),
                ConfigModule.withConfig(b2cLayoutConfig),
                ConfigModule.withConfigFactory(defaultCmsContentConfig),
                // the cms lib module contains all components that added in the bundle
                CmsLibModule,
            ],
            exports: [StorefrontModule],
        })
    ], B2cStorefrontModule);
    return B2cStorefrontModule;
}());
export { B2cStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQW1CdkQ7SUFBQTtJQVNBLENBQUM7NEJBVFksbUJBQW1CO0lBQ3ZCLDhCQUFVLEdBQWpCLFVBQ0UsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOztJQVJVLG1CQUFtQjtRQWpCL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQixDQUFDLFVBQVUsQ0FBbUI7b0JBQzVDLEdBQUcsRUFBRTt3QkFDSCxPQUFPLEVBQUUsSUFBSTt3QkFDYixlQUFlLEVBQUUsSUFBSTtxQkFDdEI7aUJBQ0YsQ0FBQztnQkFFRixZQUFZLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDeEMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDO2dCQUV2RCxzRUFBc0U7Z0JBQ3RFLFlBQVk7YUFDYjtZQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxtQkFBbUIsQ0FTL0I7SUFBRCwwQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvY21zLWxpYi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IGIyY0xheW91dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2IyYy1sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDbXNDb250ZW50Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RhdGljLWNtcy1zdHJ1Y3R1cmUvZGVmYXVsdC1jbXMtY29udGVudC5jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZSB9IGZyb20gJy4vc3RvcmVmcm9udC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVmcm9udE1vZHVsZS53aXRoQ29uZmlnKDxTdG9yZWZyb250Q29uZmlnPntcbiAgICAgIHB3YToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhZGRUb0hvbWVTY3JlZW46IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoYjJjTGF5b3V0Q29uZmlnKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoZGVmYXVsdENtc0NvbnRlbnRDb25maWcpLFxuXG4gICAgLy8gdGhlIGNtcyBsaWIgbW9kdWxlIGNvbnRhaW5zIGFsbCBjb21wb25lbnRzIHRoYXQgYWRkZWQgaW4gdGhlIGJ1bmRsZVxuICAgIENtc0xpYk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCMmNTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEIyY1N0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEIyY1N0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
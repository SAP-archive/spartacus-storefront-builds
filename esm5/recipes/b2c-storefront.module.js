import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig, provideDefaultConfig, provideDefaultConfigFactory, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2cLayoutConfig, mediaConfig } from './config/index';
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
                StorefrontModule,
                // the cms lib module contains all components that added in the bundle
                CmsLibModule,
            ],
            providers: [
                provideDefaultConfig({
                    pwa: {
                        enabled: true,
                        addToHomeScreen: true,
                    },
                }),
                provideDefaultConfig(b2cLayoutConfig),
                provideDefaultConfig(mediaConfig),
                provideDefaultConfigFactory(defaultCmsContentConfig),
            ],
            exports: [StorefrontModule],
        })
    ], B2cStorefrontModule);
    return B2cStorefrontModule;
}());
export { B2cStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBc0J2RDtJQUFBO0lBU0EsQ0FBQzs0QkFUWSxtQkFBbUI7SUFDdkIsOEJBQVUsR0FBakIsVUFDRSxNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7O0lBUlUsbUJBQW1CO1FBcEIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUVoQixzRUFBc0U7Z0JBQ3RFLFlBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQztvQkFDbkIsR0FBRyxFQUFFO3dCQUNILE9BQU8sRUFBRSxJQUFJO3dCQUNiLGVBQWUsRUFBRSxJQUFJO3FCQUN0QjtpQkFDRixDQUFDO2dCQUNGLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztnQkFDckMsb0JBQW9CLENBQUMsV0FBVyxDQUFDO2dCQUNqQywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyRDtZQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxtQkFBbUIsQ0FTL0I7SUFBRCwwQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBwcm92aWRlQ29uZmlnLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvY21zLWxpYi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IGIyY0xheW91dENvbmZpZywgbWVkaWFDb25maWcgfSBmcm9tICcuL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0Q21zQ29udGVudENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0YXRpYy1jbXMtc3RydWN0dXJlL2RlZmF1bHQtY21zLWNvbnRlbnQuY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRNb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlZnJvbnRNb2R1bGUsXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBwd2E6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkVG9Ib21lU2NyZWVuOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhiMmNMYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKG1lZGlhQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkoZGVmYXVsdENtc0NvbnRlbnRDb25maWcpLFxuICBdLFxuICBleHBvcnRzOiBbU3RvcmVmcm9udE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEIyY1N0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QjJjU3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQjJjU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19
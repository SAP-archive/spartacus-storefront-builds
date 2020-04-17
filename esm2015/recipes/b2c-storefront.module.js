var B2cStorefrontModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig, provideDefaultConfig, provideDefaultConfigFactory, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2cLayoutConfig, mediaConfig } from './config/index';
import { defaultCmsContentConfig } from './config/static-cms-structure/default-cms-content.config';
import { StorefrontModule } from './storefront.module';
let B2cStorefrontModule = B2cStorefrontModule_1 = class B2cStorefrontModule {
    static withConfig(config) {
        return {
            ngModule: B2cStorefrontModule_1,
            providers: [provideConfig(config)],
        };
    }
};
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
export { B2cStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLG9CQUFvQixFQUNwQiwyQkFBMkIsR0FDNUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXNCdkQsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLG1CQUFtQjtJQXBCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1lBRWhCLHNFQUFzRTtZQUN0RSxZQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBQztnQkFDbkIsR0FBRyxFQUFFO29CQUNILE9BQU8sRUFBRSxJQUFJO29CQUNiLGVBQWUsRUFBRSxJQUFJO2lCQUN0QjthQUNGLENBQUM7WUFDRixvQkFBb0IsQ0FBQyxlQUFlLENBQUM7WUFDckMsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1lBQ2pDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLG1CQUFtQixDQVMvQjtTQVRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBwcm92aWRlQ29uZmlnLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvY21zLWxpYi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IGIyY0xheW91dENvbmZpZywgbWVkaWFDb25maWcgfSBmcm9tICcuL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0Q21zQ29udGVudENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0YXRpYy1jbXMtc3RydWN0dXJlL2RlZmF1bHQtY21zLWNvbnRlbnQuY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRNb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlZnJvbnRNb2R1bGUsXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBwd2E6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkVG9Ib21lU2NyZWVuOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhiMmNMYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKG1lZGlhQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkoZGVmYXVsdENtc0NvbnRlbnRDb25maWcpLFxuICBdLFxuICBleHBvcnRzOiBbU3RvcmVmcm9udE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEIyY1N0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QjJjU3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQjJjU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19
var B2bStorefrontModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CostCenterModule, provideConfig, provideDefaultConfig, provideDefaultConfigFactory, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2bLayoutConfig, defaultB2bCheckoutConfig, defaultB2bOccConfig, mediaConfig, } from './config/index';
import { defaultCmsContentConfig } from './config/static-cms-structure/default-cms-content.config';
import { StorefrontModule } from './storefront.module';
let B2bStorefrontModule = B2bStorefrontModule_1 = class B2bStorefrontModule {
    static withConfig(config) {
        return {
            ngModule: B2bStorefrontModule_1,
            providers: [provideConfig(config)],
        };
    }
};
B2bStorefrontModule = B2bStorefrontModule_1 = __decorate([
    NgModule({
        imports: [
            CostCenterModule.forRoot(),
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
            provideDefaultConfig(b2bLayoutConfig),
            provideDefaultConfig(mediaConfig),
            provideDefaultConfig(defaultB2bOccConfig),
            provideDefaultConfig(defaultB2bCheckoutConfig),
            provideDefaultConfigFactory(defaultCmsContentConfig),
        ],
        exports: [StorefrontModule],
    })
], B2bStorefrontModule);
export { B2bStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmItc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhFLE9BQU8sRUFDTCxlQUFlLEVBQ2Ysd0JBQXdCLEVBQ3hCLG1CQUFtQixFQUNuQixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXlCdkQsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLG1CQUFtQjtJQXZCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLGdCQUFnQjtZQUVoQixzRUFBc0U7WUFDdEUsWUFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUM7Z0JBQ25CLEdBQUcsRUFBRTtvQkFDSCxPQUFPLEVBQUUsSUFBSTtvQkFDYixlQUFlLEVBQUUsSUFBSTtpQkFDdEI7YUFDRixDQUFDO1lBQ0Ysb0JBQW9CLENBQUMsZUFBZSxDQUFDO1lBQ3JDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztZQUNqQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztZQUM5QywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyRDtRQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxtQkFBbUIsQ0FTL0I7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29zdENlbnRlck1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2Ntcy1saWIubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQge1xuICBiMmJMYXlvdXRDb25maWcsXG4gIGRlZmF1bHRCMmJDaGVja291dENvbmZpZyxcbiAgZGVmYXVsdEIyYk9jY0NvbmZpZyxcbiAgbWVkaWFDb25maWcsXG59IGZyb20gJy4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRDbXNDb250ZW50Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RhdGljLWNtcy1zdHJ1Y3R1cmUvZGVmYXVsdC1jbXMtY29udGVudC5jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZSB9IGZyb20gJy4vc3RvcmVmcm9udC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29zdENlbnRlck1vZHVsZS5mb3JSb290KCksXG4gICAgU3RvcmVmcm9udE1vZHVsZSxcblxuICAgIC8vIHRoZSBjbXMgbGliIG1vZHVsZSBjb250YWlucyBhbGwgY29tcG9uZW50cyB0aGF0IGFkZGVkIGluIHRoZSBidW5kbGVcbiAgICBDbXNMaWJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKHtcbiAgICAgIHB3YToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhZGRUb0hvbWVTY3JlZW46IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGIyYkxheW91dENvbmZpZyksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcobWVkaWFDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRCMmJPY2NDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRCMmJDaGVja291dENvbmZpZyksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGRlZmF1bHRDbXNDb250ZW50Q29uZmlnKSxcbiAgXSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCMmJTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEIyYlN0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEIyYlN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
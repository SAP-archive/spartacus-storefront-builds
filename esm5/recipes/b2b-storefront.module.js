import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CostCenterModule, provideConfig, provideDefaultConfig, provideDefaultConfigFactory, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2bLayoutConfig, defaultB2bCheckoutConfig, defaultB2bOccConfig, mediaConfig, } from './config/index';
import { defaultCmsContentConfig } from './config/static-cms-structure/default-cms-content.config';
import { StorefrontModule } from './storefront.module';
var B2bStorefrontModule = /** @class */ (function () {
    function B2bStorefrontModule() {
    }
    B2bStorefrontModule_1 = B2bStorefrontModule;
    B2bStorefrontModule.withConfig = function (config) {
        return {
            ngModule: B2bStorefrontModule_1,
            providers: [provideConfig(config)],
        };
    };
    var B2bStorefrontModule_1;
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
    return B2bStorefrontModule;
}());
export { B2bStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmItc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLG9CQUFvQixFQUNwQiwyQkFBMkIsR0FDNUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFaEUsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsbUJBQW1CLEVBQ25CLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBeUJ2RDtJQUFBO0lBU0EsQ0FBQzs0QkFUWSxtQkFBbUI7SUFDdkIsOEJBQVUsR0FBakIsVUFDRSxNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7O0lBUlUsbUJBQW1CO1FBdkIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUMxQixnQkFBZ0I7Z0JBRWhCLHNFQUFzRTtnQkFDdEUsWUFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDO29CQUNuQixHQUFHLEVBQUU7d0JBQ0gsT0FBTyxFQUFFLElBQUk7d0JBQ2IsZUFBZSxFQUFFLElBQUk7cUJBQ3RCO2lCQUNGLENBQUM7Z0JBQ0Ysb0JBQW9CLENBQUMsZUFBZSxDQUFDO2dCQUNyQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7Z0JBQ2pDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDO2dCQUN6QyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDOUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUM7YUFDckQ7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csbUJBQW1CLENBUy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29zdENlbnRlck1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2Ntcy1saWIubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQge1xuICBiMmJMYXlvdXRDb25maWcsXG4gIGRlZmF1bHRCMmJDaGVja291dENvbmZpZyxcbiAgZGVmYXVsdEIyYk9jY0NvbmZpZyxcbiAgbWVkaWFDb25maWcsXG59IGZyb20gJy4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRDbXNDb250ZW50Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RhdGljLWNtcy1zdHJ1Y3R1cmUvZGVmYXVsdC1jbXMtY29udGVudC5jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZSB9IGZyb20gJy4vc3RvcmVmcm9udC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29zdENlbnRlck1vZHVsZS5mb3JSb290KCksXG4gICAgU3RvcmVmcm9udE1vZHVsZSxcblxuICAgIC8vIHRoZSBjbXMgbGliIG1vZHVsZSBjb250YWlucyBhbGwgY29tcG9uZW50cyB0aGF0IGFkZGVkIGluIHRoZSBidW5kbGVcbiAgICBDbXNMaWJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKHtcbiAgICAgIHB3YToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBhZGRUb0hvbWVTY3JlZW46IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGIyYkxheW91dENvbmZpZyksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcobWVkaWFDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRCMmJPY2NDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRCMmJDaGVja291dENvbmZpZyksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGRlZmF1bHRDbXNDb250ZW50Q29uZmlnKSxcbiAgXSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCMmJTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEIyYlN0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEIyYlN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
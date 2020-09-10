import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig, provideDefaultConfig, provideDefaultConfigFactory, OrganizationModule, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2bLayoutConfig, defaultB2bOccConfig, defaultB2bCheckoutConfig, mediaConfig, } from './config/index';
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
                OrganizationModule.forRoot(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmItc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFaEUsT0FBTyxFQUNMLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3hCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBeUJ2RDtJQUFBO0lBU0EsQ0FBQzs0QkFUWSxtQkFBbUI7SUFDdkIsOEJBQVUsR0FBakIsVUFDRSxNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7O0lBUlUsbUJBQW1CO1FBdkIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUM1QixnQkFBZ0I7Z0JBRWhCLHNFQUFzRTtnQkFDdEUsWUFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDO29CQUNuQixHQUFHLEVBQUU7d0JBQ0gsT0FBTyxFQUFFLElBQUk7d0JBQ2IsZUFBZSxFQUFFLElBQUk7cUJBQ3RCO2lCQUNGLENBQUM7Z0JBQ0Ysb0JBQW9CLENBQUMsZUFBZSxDQUFDO2dCQUNyQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7Z0JBQ2pDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDO2dCQUN6QyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDOUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUM7YUFDckQ7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csbUJBQW1CLENBUy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgcHJvdmlkZUNvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSxcbiAgT3JnYW5pemF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvY21zLWxpYi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7XG4gIGIyYkxheW91dENvbmZpZyxcbiAgZGVmYXVsdEIyYk9jY0NvbmZpZyxcbiAgZGVmYXVsdEIyYkNoZWNrb3V0Q29uZmlnLFxuICBtZWRpYUNvbmZpZyxcbn0gZnJvbSAnLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdENtc0NvbnRlbnRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdGF0aWMtY21zLXN0cnVjdHVyZS9kZWZhdWx0LWNtcy1jb250ZW50LmNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBPcmdhbml6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFN0b3JlZnJvbnRNb2R1bGUsXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBwd2E6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkVG9Ib21lU2NyZWVuOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhiMmJMYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKG1lZGlhQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QjJiT2NjQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QjJiQ2hlY2tvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShkZWZhdWx0Q21zQ29udGVudENvbmZpZyksXG4gIF0sXG4gIGV4cG9ydHM6IFtTdG9yZWZyb250TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQjJiU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgIGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCMmJTdG9yZWZyb250TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCMmJTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
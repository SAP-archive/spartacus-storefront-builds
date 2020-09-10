var B2bStorefrontModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig, provideDefaultConfig, provideDefaultConfigFactory, OrganizationModule, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2bLayoutConfig, defaultB2bOccConfig, defaultB2bCheckoutConfig, mediaConfig, } from './config/index';
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
export { B2bStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmItc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsYUFBYSxFQUNiLG9CQUFvQixFQUNwQiwyQkFBMkIsRUFDM0Isa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLHdCQUF3QixFQUN4QixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXlCdkQsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLG1CQUFtQjtJQXZCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCLENBQUMsT0FBTyxFQUFFO1lBQzVCLGdCQUFnQjtZQUVoQixzRUFBc0U7WUFDdEUsWUFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUM7Z0JBQ25CLEdBQUcsRUFBRTtvQkFDSCxPQUFPLEVBQUUsSUFBSTtvQkFDYixlQUFlLEVBQUUsSUFBSTtpQkFDdEI7YUFDRixDQUFDO1lBQ0Ysb0JBQW9CLENBQUMsZUFBZSxDQUFDO1lBQ3JDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztZQUNqQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztZQUM5QywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyRDtRQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxtQkFBbUIsQ0FTL0I7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgcHJvdmlkZUNvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSxcbiAgT3JnYW5pemF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvY21zLWxpYi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7XG4gIGIyYkxheW91dENvbmZpZyxcbiAgZGVmYXVsdEIyYk9jY0NvbmZpZyxcbiAgZGVmYXVsdEIyYkNoZWNrb3V0Q29uZmlnLFxuICBtZWRpYUNvbmZpZyxcbn0gZnJvbSAnLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdENtc0NvbnRlbnRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdGF0aWMtY21zLXN0cnVjdHVyZS9kZWZhdWx0LWNtcy1jb250ZW50LmNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBPcmdhbml6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFN0b3JlZnJvbnRNb2R1bGUsXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBwd2E6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkVG9Ib21lU2NyZWVuOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhiMmJMYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKG1lZGlhQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QjJiT2NjQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QjJiQ2hlY2tvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShkZWZhdWx0Q21zQ29udGVudENvbmZpZyksXG4gIF0sXG4gIGV4cG9ydHM6IFtTdG9yZWZyb250TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQjJiU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgIGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCMmJTdG9yZWZyb250TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCMmJTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
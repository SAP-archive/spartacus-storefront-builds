var B2cStorefrontModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ConfigModule, provideConfig } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { b2cLayoutConfig } from './config/b2c-layout-config';
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
export { B2cStorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQnZELElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFtQjtJQUM5QixNQUFNLENBQUMsVUFBVSxDQUNmLE1BQXlCO1FBRXpCLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFUWSxtQkFBbUI7SUFqQi9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdCQUFnQixDQUFDLFVBQVUsQ0FBbUI7Z0JBQzVDLEdBQUcsRUFBRTtvQkFDSCxPQUFPLEVBQUUsSUFBSTtvQkFDYixlQUFlLEVBQUUsSUFBSTtpQkFDdEI7YUFDRixDQUFDO1lBRUYsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDeEMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDO1lBRXZELHNFQUFzRTtZQUN0RSxZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csbUJBQW1CLENBUy9CO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgcHJvdmlkZUNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgYjJjTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvYjJjLWxheW91dC1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdENtc0NvbnRlbnRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdGF0aWMtY21zLXN0cnVjdHVyZS9kZWZhdWx0LWNtcy1jb250ZW50LmNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZWZyb250TW9kdWxlLndpdGhDb25maWcoPFN0b3JlZnJvbnRDb25maWc+e1xuICAgICAgcHdhOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFkZFRvSG9tZVNjcmVlbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhiMmNMYXlvdXRDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0Q21zQ29udGVudENvbmZpZyksXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbU3RvcmVmcm9udE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEIyY1N0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QjJjU3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQjJjU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19
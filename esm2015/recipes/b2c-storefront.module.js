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
export class B2cStorefrontModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: B2cStorefrontModule,
            providers: [provideConfig(config)],
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsicmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQnZELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBeUI7UUFDekMsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7WUF2QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsbUJBQWtCO3dCQUM1QyxHQUFHLEVBQUU7NEJBQ0gsT0FBTyxFQUFFLElBQUk7NEJBQ2IsZUFBZSxFQUFFLElBQUk7eUJBQ3RCO3FCQUNGLEVBQUEsQ0FBQztvQkFFRixZQUFZLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztvQkFDeEMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDO29CQUV2RCxzRUFBc0U7b0JBQ3RFLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgcHJvdmlkZUNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgYjJjTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvYjJjLWxheW91dC1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdENtc0NvbnRlbnRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdGF0aWMtY21zLXN0cnVjdHVyZS9kZWZhdWx0LWNtcy1jb250ZW50LmNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZWZyb250TW9kdWxlLndpdGhDb25maWcoPFN0b3JlZnJvbnRDb25maWc+e1xuICAgICAgcHdhOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFkZFRvSG9tZVNjcmVlbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhiMmNMYXlvdXRDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0Q21zQ29udGVudENvbmZpZyksXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTGF5b3V0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQjJjU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEIyY1N0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
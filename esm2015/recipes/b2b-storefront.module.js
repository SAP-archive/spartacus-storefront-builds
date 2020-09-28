import { NgModule } from '@angular/core';
import { CostCenterModule, provideConfig, provideDefaultConfig, provideDefaultConfigFactory, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { defaultB2bCheckoutConfig, defaultB2bOccConfig, layoutConfig, mediaConfig, } from './config/index';
import { defaultCmsContentConfig } from './config/static-cms-structure/default-cms-content.config';
import { StorefrontModule } from './storefront.module';
export class B2bStorefrontModule {
    static withConfig(config) {
        return {
            ngModule: B2bStorefrontModule,
            providers: [provideConfig(config)],
        };
    }
}
B2bStorefrontModule.decorators = [
    { type: NgModule, args: [{
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
                    provideDefaultConfig(layoutConfig),
                    provideDefaultConfig(mediaConfig),
                    provideDefaultConfig(defaultB2bOccConfig),
                    provideDefaultConfig(defaultB2bCheckoutConfig),
                    provideDefaultConfigFactory(defaultCmsContentConfig),
                ],
                exports: [StorefrontModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvcmVjaXBlcy9iMmItc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVoRSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLG1CQUFtQixFQUNuQixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUF5QnZELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FDZixNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7OztZQS9CRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsZ0JBQWdCO29CQUVoQixzRUFBc0U7b0JBQ3RFLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFDO3dCQUNuQixHQUFHLEVBQUU7NEJBQ0gsT0FBTyxFQUFFLElBQUk7NEJBQ2IsZUFBZSxFQUFFLElBQUk7eUJBQ3RCO3FCQUNGLENBQUM7b0JBQ0Ysb0JBQW9CLENBQUMsWUFBWSxDQUFDO29CQUNsQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7b0JBQ2pDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDO29CQUN6QyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDOUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JEO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvc3RDZW50ZXJNb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHtcbiAgZGVmYXVsdEIyYkNoZWNrb3V0Q29uZmlnLFxuICBkZWZhdWx0QjJiT2NjQ29uZmlnLFxuICBsYXlvdXRDb25maWcsXG4gIG1lZGlhQ29uZmlnLFxufSBmcm9tICcuL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0Q21zQ29udGVudENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0YXRpYy1jbXMtc3RydWN0dXJlL2RlZmF1bHQtY21zLWNvbnRlbnQuY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRNb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvc3RDZW50ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFN0b3JlZnJvbnRNb2R1bGUsXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBwd2E6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkVG9Ib21lU2NyZWVuOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhsYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKG1lZGlhQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QjJiT2NjQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QjJiQ2hlY2tvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShkZWZhdWx0Q21zQ29udGVudENvbmZpZyksXG4gIF0sXG4gIGV4cG9ydHM6IFtTdG9yZWZyb250TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQjJiU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgIGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCMmJTdG9yZWZyb250TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCMmJTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideConfig, provideDefaultConfig } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/cms-lib.module';
import { layoutConfig, mediaConfig } from './config/index';
import { defaultCmsContentProviders } from './config/static-cms-structure';
import { StorefrontModule } from './storefront.module';
export class B2cStorefrontModule {
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
                    HttpClientModule,
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
                    ...defaultCmsContentProviders,
                ],
                exports: [StorefrontModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLXN0b3JlZnJvbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvcmVjaXBlcy9iMmMtc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBdUJ2RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7WUE3QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFFaEIsc0VBQXNFO29CQUN0RSxZQUFZO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBQzt3QkFDbkIsR0FBRyxFQUFFOzRCQUNILE9BQU8sRUFBRSxJQUFJOzRCQUNiLGVBQWUsRUFBRSxJQUFJO3lCQUN0QjtxQkFDRixDQUFDO29CQUNGLG9CQUFvQixDQUFDLFlBQVksQ0FBQztvQkFDbEMsb0JBQW9CLENBQUMsV0FBVyxDQUFDO29CQUNqQyxHQUFHLDBCQUEwQjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2Ntcy1saWIubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBsYXlvdXRDb25maWcsIG1lZGlhQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdENtc0NvbnRlbnRQcm92aWRlcnMgfSBmcm9tICcuL2NvbmZpZy9zdGF0aWMtY21zLXN0cnVjdHVyZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFN0b3JlZnJvbnRNb2R1bGUsXG5cbiAgICAvLyB0aGUgY21zIGxpYiBtb2R1bGUgY29udGFpbnMgYWxsIGNvbXBvbmVudHMgdGhhdCBhZGRlZCBpbiB0aGUgYnVuZGxlXG4gICAgQ21zTGliTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyh7XG4gICAgICBwd2E6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkVG9Ib21lU2NyZWVuOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhsYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKG1lZGlhQ29uZmlnKSxcbiAgICAuLi5kZWZhdWx0Q21zQ29udGVudFByb3ZpZGVycyxcbiAgXSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCMmNTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEIyY1N0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEIyY1N0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
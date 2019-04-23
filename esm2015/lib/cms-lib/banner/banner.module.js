/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { ResponsiveBannerComponent } from './responsive-banner.component';
import { GenericLinkModule } from '../../ui/components/generic-link/generic-link.module';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { BannerComponent } from './banner.component';
import { BannerComponentService } from './banner.component.service';
export class BannerModule {
}
BannerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GenericLinkModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            SimpleResponsiveBannerComponent: {
                                selector: 'cx-responsive-banner',
                                providers: [
                                    {
                                        provide: BannerComponentService,
                                        useClass: BannerComponentService,
                                        deps: [CmsComponentData, CmsConfig],
                                    },
                                ],
                            },
                            BannerComponent: {
                                selector: 'cx-banner',
                                providers: [
                                    {
                                        provide: BannerComponentService,
                                        useClass: BannerComponentService,
                                        deps: [CmsComponentData, CmsConfig],
                                    },
                                ],
                            },
                            SimpleBannerComponent: {
                                selector: 'cx-banner',
                                providers: [
                                    {
                                        provide: BannerComponentService,
                                        useClass: BannerComponentService,
                                        deps: [CmsComponentData, CmsConfig],
                                    },
                                ],
                            },
                        },
                    }))),
                ],
                declarations: [BannerComponent, ResponsiveBannerComponent],
                exports: [BannerComponent, ResponsiveBannerComponent],
                entryComponents: [BannerComponent, ResponsiveBannerComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2Jhbm5lci9iYW5uZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE4Q3BFLE1BQU0sT0FBTyxZQUFZOzs7WUE1Q3hCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLCtCQUErQixFQUFFO2dDQUMvQixRQUFRLEVBQUUsc0JBQXNCO2dDQUNoQyxTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLHNCQUFzQjt3Q0FDL0IsUUFBUSxFQUFFLHNCQUFzQjt3Q0FDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO3FDQUNwQztpQ0FDRjs2QkFDRjs0QkFDRCxlQUFlLEVBQUU7Z0NBQ2YsUUFBUSxFQUFFLFdBQVc7Z0NBQ3JCLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsc0JBQXNCO3dDQUMvQixRQUFRLEVBQUUsc0JBQXNCO3dDQUNoQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7cUNBQ3BDO2lDQUNGOzZCQUNGOzRCQUNELHFCQUFxQixFQUFFO2dDQUNyQixRQUFRLEVBQUUsV0FBVztnQ0FDckIsU0FBUyxFQUFFO29DQUNUO3dDQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0NBQy9CLFFBQVEsRUFBRSxzQkFBc0I7d0NBQ2hDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztxQ0FDcEM7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSx5QkFBeUIsQ0FBQztnQkFDMUQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHlCQUF5QixDQUFDO2dCQUNyRCxlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUseUJBQXlCLENBQUM7YUFDOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3Jlc3BvbnNpdmUtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uL3VpL2NvbXBvbmVudHMvZ2VuZXJpYy1saW5rL2dlbmVyaWMtbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJhbm5lckNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2Jhbm5lci5jb21wb25lbnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEdlbmVyaWNMaW5rTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTaW1wbGVSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1yZXNwb25zaXZlLWJhbm5lcicsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IEJhbm5lckNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zQ29tcG9uZW50RGF0YSwgQ21zQ29uZmlnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1iYW5uZXInLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogQmFubmVyQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIENtc0NvbmZpZ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFNpbXBsZUJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtYmFubmVyJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogQmFubmVyQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IEJhbm5lckNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBDbXNDb25maWddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQmFubmVyQ29tcG9uZW50LCBSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Jhbm5lckNvbXBvbmVudCwgUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Jhbm5lckNvbXBvbmVudCwgUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lck1vZHVsZSB7fVxuIl19
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
var BannerModule = /** @class */ (function () {
    function BannerModule() {
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
    return BannerModule;
}());
export { BannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2Jhbm5lci9iYW5uZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFBQTtJQTRDMkIsQ0FBQzs7Z0JBNUMzQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiwrQkFBK0IsRUFBRTtvQ0FDL0IsUUFBUSxFQUFFLHNCQUFzQjtvQ0FDaEMsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSxzQkFBc0I7NENBQy9CLFFBQVEsRUFBRSxzQkFBc0I7NENBQ2hDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQzt5Q0FDcEM7cUNBQ0Y7aUNBQ0Y7Z0NBQ0QsZUFBZSxFQUFFO29DQUNmLFFBQVEsRUFBRSxXQUFXO29DQUNyQixTQUFTLEVBQUU7d0NBQ1Q7NENBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0Q0FDL0IsUUFBUSxFQUFFLHNCQUFzQjs0Q0FDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO3lDQUNwQztxQ0FDRjtpQ0FDRjtnQ0FDRCxxQkFBcUIsRUFBRTtvQ0FDckIsUUFBUSxFQUFFLFdBQVc7b0NBQ3JCLFNBQVMsRUFBRTt3Q0FDVDs0Q0FDRSxPQUFPLEVBQUUsc0JBQXNCOzRDQUMvQixRQUFRLEVBQUUsc0JBQXNCOzRDQUNoQyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7eUNBQ3BDO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUseUJBQXlCLENBQUM7b0JBQzFELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSx5QkFBeUIsQ0FBQztvQkFDckQsZUFBZSxFQUFFLENBQUMsZUFBZSxFQUFFLHlCQUF5QixDQUFDO2lCQUM5RDs7SUFDMEIsbUJBQUM7Q0FBQSxBQTVDNUIsSUE0QzRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vcmVzcG9uc2l2ZS1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vdWkvY29tcG9uZW50cy9nZW5lcmljLWxpbmsvZ2VuZXJpYy1saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2VuZXJpY0xpbmtNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LXJlc3BvbnNpdmUtYmFubmVyJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogQmFubmVyQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IEJhbm5lckNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIGRlcHM6IFtDbXNDb21wb25lbnREYXRhLCBDbXNDb25maWddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWJhbm5lcicsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IEJhbm5lckNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBkZXBzOiBbQ21zQ29tcG9uZW50RGF0YSwgQ21zQ29uZmlnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgU2ltcGxlQmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1iYW5uZXInLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VDbGFzczogQmFubmVyQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc0NvbXBvbmVudERhdGEsIENtc0NvbmZpZ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCYW5uZXJDb21wb25lbnQsIFJlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQmFubmVyQ29tcG9uZW50LCBSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQmFubmVyQ29tcG9uZW50LCBSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyTW9kdWxlIHt9XG4iXX0=
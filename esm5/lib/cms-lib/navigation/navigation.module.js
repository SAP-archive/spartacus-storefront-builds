/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BootstrapModule } from '../../bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsService, ConfigModule, UrlTranslationModule, I18nModule, } from '@spartacus/core';
import { NavigationComponent } from './navigation.component';
import { NavigationUIComponent } from './navigation-ui.component';
import { NavigationComponentService } from './navigation.component.service';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        BootstrapModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                NavigationComponent: {
                                    selector: 'cx-navigation',
                                    providers: [
                                        {
                                            provide: NavigationComponentService,
                                            useClass: NavigationComponentService,
                                            deps: [CmsService, CmsComponentData],
                                        },
                                    ],
                                },
                            },
                        }))),
                        UrlTranslationModule,
                        I18nModule,
                    ],
                    declarations: [NavigationComponent, NavigationUIComponent],
                    entryComponents: [NavigationComponent],
                    exports: [NavigationComponent, NavigationUIComponent],
                },] }
    ];
    return NavigationModule;
}());
export { NavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFFTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV4RjtJQUFBO0lBMEIrQixDQUFDOztnQkExQi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG1CQUFtQixFQUFFO29DQUNuQixRQUFRLEVBQUUsZUFBZTtvQ0FDekIsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSwwQkFBMEI7NENBQ25DLFFBQVEsRUFBRSwwQkFBMEI7NENBQ3BDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQzt5Q0FDckM7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLG9CQUFvQjt3QkFDcEIsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDMUQsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2lCQUN0RDs7SUFDOEIsdUJBQUM7Q0FBQSxBQTFCaEMsSUEwQmdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbmZpZ01vZHVsZSxcbiAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQm9vdHN0cmFwTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1uYXZpZ2F0aW9uJyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvdmlkZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUNsYXNzOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW0Ntc1NlcnZpY2UsIENtc0NvbXBvbmVudERhdGFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZpZ2F0aW9uVUlDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmlnYXRpb25Db21wb25lbnQsIE5hdmlnYXRpb25VSUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==
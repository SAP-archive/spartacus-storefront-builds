/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule, ɵangular_packages_service_worker_service_worker_b as RegistrationOptions, } from '@angular/service-worker';
import { Config, ConfigModule, I18nModule } from '@spartacus/core';
import { defaultPWAModuleConfig, PWAModuleConfig } from './pwa.module-config';
import { AddToHomeScreenBtnComponent } from './components/add-to-home-screen-btn/add-to-home-screen-btn.component';
import { AddToHomeScreenBannerComponent } from './components/add-to-home-screen-banner/add-to-home-screen-banner.component';
import { AddToHomeScreenService } from './services/add-to-home-screen.service';
/**
 * @param {?} pwaConfig
 * @return {?}
 */
export function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (pwaConfig.production && pwaConfig.pwa.enabled) || false };
}
/**
 * @param {?} addToHomeScreenService
 * @return {?}
 */
export function pwaFactory(addToHomeScreenService) {
    /** @type {?} */
    const result = () => addToHomeScreenService;
    return result;
}
export class PwaModule {
}
PwaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig(defaultPWAModuleConfig),
                    ServiceWorkerModule.register('/ngsw-worker.js'),
                    I18nModule,
                ],
                providers: [
                    { provide: PWAModuleConfig, useExisting: Config },
                    {
                        provide: RegistrationOptions,
                        useFactory: pwaConfigurationFactory,
                        deps: [Config],
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: pwaFactory,
                        deps: [AddToHomeScreenService],
                        multi: true,
                    },
                    AddToHomeScreenService,
                ],
                declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
                exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wd2EvcHdhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsaURBQWlELElBQUksbUJBQW1CLEdBQ3pFLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzVILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7OztBQUUvRSxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFNBQTBCO0lBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7QUFDL0UsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLHNCQUFzQjs7VUFDekMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLHNCQUFzQjtJQUMzQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBMkJELE1BQU0sT0FBTyxTQUFTOzs7WUF6QnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO29CQUMvQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7b0JBQy9DLFVBQVU7aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO29CQUNqRDt3QkFDRSxPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ2Y7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDOUIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Qsc0JBQXNCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSw4QkFBOEIsQ0FBQztnQkFDM0UsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7YUFDdkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgU2VydmljZVdvcmtlck1vZHVsZSxcbiAgybVhbmd1bGFyX3BhY2thZ2VzX3NlcnZpY2Vfd29ya2VyX3NlcnZpY2Vfd29ya2VyX2IgYXMgUmVnaXN0cmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuXG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IGRlZmF1bHRQV0FNb2R1bGVDb25maWcsIFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vcHdhLm1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1idG4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHdhQ29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIHB3YUNvbmZpZzogUFdBTW9kdWxlQ29uZmlnXG4pOiBSZWdpc3RyYXRpb25PcHRpb25zIHtcbiAgcmV0dXJuIHsgZW5hYmxlZDogKHB3YUNvbmZpZy5wcm9kdWN0aW9uICYmIHB3YUNvbmZpZy5wd2EuZW5hYmxlZCkgfHwgZmFsc2UgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUZhY3RvcnkoYWRkVG9Ib21lU2NyZWVuU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRQV0FNb2R1bGVDb25maWcpLFxuICAgIFNlcnZpY2VXb3JrZXJNb2R1bGUucmVnaXN0ZXIoJy9uZ3N3LXdvcmtlci5qcycpLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogUFdBTW9kdWxlQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUmVnaXN0cmF0aW9uT3B0aW9ucyxcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgZGVwczogW0NvbmZpZ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBwd2FGYWN0b3J5LFxuICAgICAgZGVwczogW0FkZFRvSG9tZVNjcmVlblNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7fVxuIl19
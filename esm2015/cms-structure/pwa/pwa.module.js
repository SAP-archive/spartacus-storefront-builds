/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServiceWorkerModule, ɵangular_packages_service_worker_service_worker_b as RegistrationOptions, } from '@angular/service-worker';
import { Config, ConfigModule, I18nModule } from '@spartacus/core';
import { AddToHomeScreenBannerComponent } from './components/add-to-home-screen-banner/add-to-home-screen-banner.component';
import { AddToHomeScreenBtnComponent } from './components/add-to-home-screen-btn/add-to-home-screen-btn.component';
import { defaultPWAModuleConfig, PWAModuleConfig } from './pwa.module-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGlEQUFpRCxJQUFJLG1CQUFtQixHQUN6RSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFFL0UsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxTQUEwQjtJQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQy9FLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxzQkFBc0I7O1VBQ3pDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0I7SUFDM0MsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQTJCRCxNQUFNLE9BQU8sU0FBUzs7O1lBekJyQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDL0MsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO29CQUMvQyxVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtvQkFDakQ7d0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjt3QkFDNUIsVUFBVSxFQUFFLHVCQUF1Qjt3QkFDbkMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUNmO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsVUFBVTt3QkFDdEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQzlCLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELHNCQUFzQjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7Z0JBQzNFLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO2FBQ3ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNlcnZpY2VXb3JrZXJNb2R1bGUsXG4gIMm1YW5ndWxhcl9wYWNrYWdlc19zZXJ2aWNlX3dvcmtlcl9zZXJ2aWNlX3dvcmtlcl9iIGFzIFJlZ2lzdHJhdGlvbk9wdGlvbnMsXG59IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYnRuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRQV0FNb2R1bGVDb25maWcsIFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vcHdhLm1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHdhQ29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIHB3YUNvbmZpZzogUFdBTW9kdWxlQ29uZmlnXG4pOiBSZWdpc3RyYXRpb25PcHRpb25zIHtcbiAgcmV0dXJuIHsgZW5hYmxlZDogKHB3YUNvbmZpZy5wcm9kdWN0aW9uICYmIHB3YUNvbmZpZy5wd2EuZW5hYmxlZCkgfHwgZmFsc2UgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUZhY3RvcnkoYWRkVG9Ib21lU2NyZWVuU2VydmljZSk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGFkZFRvSG9tZVNjcmVlblNlcnZpY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFBXQU1vZHVsZUNvbmZpZyksXG4gICAgU2VydmljZVdvcmtlck1vZHVsZS5yZWdpc3RlcignL25nc3ctd29ya2VyLmpzJyksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBQV0FNb2R1bGVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBSZWdpc3RyYXRpb25PcHRpb25zLFxuICAgICAgdXNlRmFjdG9yeTogcHdhQ29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29uZmlnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUZhY3RvcnksXG4gICAgICBkZXBzOiBbQWRkVG9Ib21lU2NyZWVuU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIEFkZFRvSG9tZVNjcmVlblNlcnZpY2UsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHdhTW9kdWxlIHt9XG4iXX0=
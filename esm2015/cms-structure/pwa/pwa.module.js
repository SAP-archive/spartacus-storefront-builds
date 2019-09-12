/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { ServiceWorkerModule, SwRegistrationOptions, } from '@angular/service-worker';
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
    return { enabled: (!isDevMode() && pwaConfig.pwa.enabled) || false };
}
/**
 * @param {?} addToHomeScreenService
 * @return {?}
 */
export function pwaFactory(addToHomeScreenService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => addToHomeScreenService);
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
                        provide: SwRegistrationOptions,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBRS9FLE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsU0FBMEI7SUFFMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN2RSxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsc0JBQXNCOztVQUN6QyxNQUFNOzs7SUFBRyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQTtJQUMzQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBMkJELE1BQU0sT0FBTyxTQUFTOzs7WUF6QnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO29CQUMvQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7b0JBQy9DLFVBQVU7aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO29CQUNqRDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ2Y7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDOUIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Qsc0JBQXNCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSw4QkFBOEIsQ0FBQztnQkFDM0UsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7YUFDdkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBpc0Rldk1vZGUsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTZXJ2aWNlV29ya2VyTW9kdWxlLFxuICBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMsXG59IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYnRuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRQV0FNb2R1bGVDb25maWcsIFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vcHdhLm1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHdhQ29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIHB3YUNvbmZpZzogUFdBTW9kdWxlQ29uZmlnXG4pOiBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMge1xuICByZXR1cm4geyBlbmFibGVkOiAoIWlzRGV2TW9kZSgpICYmIHB3YUNvbmZpZy5wd2EuZW5hYmxlZCkgfHwgZmFsc2UgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUZhY3RvcnkoYWRkVG9Ib21lU2NyZWVuU2VydmljZSk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGFkZFRvSG9tZVNjcmVlblNlcnZpY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFBXQU1vZHVsZUNvbmZpZyksXG4gICAgU2VydmljZVdvcmtlck1vZHVsZS5yZWdpc3RlcignL25nc3ctd29ya2VyLmpzJyksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBQV0FNb2R1bGVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMsXG4gICAgICB1c2VGYWN0b3J5OiBwd2FDb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtDb25maWddLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogcHdhRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgQWRkVG9Ib21lU2NyZWVuU2VydmljZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50LCBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50LCBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQd2FNb2R1bGUge31cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
    return { enabled: (pwaConfig.production && pwaConfig.pwa.enabled) || false };
}
/**
 * @param {?} addToHomeScreenService
 * @return {?}
 */
export function pwaFactory(addToHomeScreenService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return addToHomeScreenService; });
    return result;
}
var PwaModule = /** @class */ (function () {
    function PwaModule() {
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
    return PwaModule;
}());
export { PwaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixHQUN0QixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFFL0UsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxTQUEwQjtJQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQy9FLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxzQkFBc0I7O1FBQ3pDLE1BQU07OztJQUFHLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQTtJQUMzQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQXlCd0IsQ0FBQzs7Z0JBekJ4QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDL0MsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO3dCQUMvQyxVQUFVO3FCQUNYO29CQUNELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTt3QkFDakQ7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsVUFBVSxFQUFFLHVCQUF1Qjs0QkFDbkMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO3lCQUNmO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsVUFBVTs0QkFDdEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUM7NEJBQzlCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNELHNCQUFzQjtxQkFDdkI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7b0JBQzNFLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO2lCQUN2RTs7SUFDdUIsZ0JBQUM7Q0FBQSxBQXpCekIsSUF5QnlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTZXJ2aWNlV29ya2VyTW9kdWxlLFxuICBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMsXG59IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYnRuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRQV0FNb2R1bGVDb25maWcsIFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vcHdhLm1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHdhQ29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIHB3YUNvbmZpZzogUFdBTW9kdWxlQ29uZmlnXG4pOiBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMge1xuICByZXR1cm4geyBlbmFibGVkOiAocHdhQ29uZmlnLnByb2R1Y3Rpb24gJiYgcHdhQ29uZmlnLnB3YS5lbmFibGVkKSB8fCBmYWxzZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHdhRmFjdG9yeShhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTogYW55IHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYWRkVG9Ib21lU2NyZWVuU2VydmljZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0UFdBTW9kdWxlQ29uZmlnKSxcbiAgICBTZXJ2aWNlV29ya2VyTW9kdWxlLnJlZ2lzdGVyKCcvbmdzdy13b3JrZXIuanMnKSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFBXQU1vZHVsZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFN3UmVnaXN0cmF0aW9uT3B0aW9ucyxcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgZGVwczogW0NvbmZpZ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBwd2FGYWN0b3J5LFxuICAgICAgZGVwczogW0FkZFRvSG9tZVNjcmVlblNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7fVxuIl19
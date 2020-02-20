import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { ServiceWorkerModule, SwRegistrationOptions, } from '@angular/service-worker';
import { Config, ConfigModule, I18nModule } from '@spartacus/core';
import { AddToHomeScreenBannerComponent } from './components/add-to-home-screen-banner/add-to-home-screen-banner.component';
import { AddToHomeScreenBtnComponent } from './components/add-to-home-screen-btn/add-to-home-screen-btn.component';
import { defaultPWAModuleConfig, PWAModuleConfig } from './pwa.module-config';
import { AddToHomeScreenService } from './services/add-to-home-screen.service';
export function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (!isDevMode() && pwaConfig.pwa.enabled) || false };
}
export function pwaFactory(addToHomeScreenService) {
    var result = function () { return addToHomeScreenService; };
    return result;
}
var PwaModule = /** @class */ (function () {
    function PwaModule() {
    }
    PwaModule = __decorate([
        NgModule({
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
        })
    ], PwaModule);
    return PwaModule;
}());
export { PwaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFL0UsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxTQUEwQjtJQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3ZFLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLHNCQUFzQjtJQUMvQyxJQUFNLE1BQU0sR0FBRyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLENBQUM7SUFDNUMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQTJCRDtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBekJyQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2dCQUMvQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7Z0JBQy9DLFVBQVU7YUFDWDtZQUNELFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDakQ7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsVUFBVSxFQUFFLHVCQUF1QjtvQkFDbkMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNmO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsVUFBVTtvQkFDdEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQzlCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELHNCQUFzQjthQUN2QjtZQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO1lBQzNFLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO1NBQ3ZFLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIGlzRGV2TW9kZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNlcnZpY2VXb3JrZXJNb2R1bGUsXG4gIFN3UmVnaXN0cmF0aW9uT3B0aW9ucyxcbn0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC10by1ob21lLXNjcmVlbi1idG4vYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFBXQU1vZHVsZUNvbmZpZywgUFdBTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9wd2EubW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwd2FDb25maWd1cmF0aW9uRmFjdG9yeShcbiAgcHdhQ29uZmlnOiBQV0FNb2R1bGVDb25maWdcbik6IFN3UmVnaXN0cmF0aW9uT3B0aW9ucyB7XG4gIHJldHVybiB7IGVuYWJsZWQ6ICghaXNEZXZNb2RlKCkgJiYgcHdhQ29uZmlnLnB3YS5lbmFibGVkKSB8fCBmYWxzZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHdhRmFjdG9yeShhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTogYW55IHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYWRkVG9Ib21lU2NyZWVuU2VydmljZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0UFdBTW9kdWxlQ29uZmlnKSxcbiAgICBTZXJ2aWNlV29ya2VyTW9kdWxlLnJlZ2lzdGVyKCcvbmdzdy13b3JrZXIuanMnKSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFBXQU1vZHVsZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFN3UmVnaXN0cmF0aW9uT3B0aW9ucyxcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgZGVwczogW0NvbmZpZ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBwd2FGYWN0b3J5LFxuICAgICAgZGVwczogW0FkZFRvSG9tZVNjcmVlblNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQsIEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFB3YU1vZHVsZSB7fVxuIl19
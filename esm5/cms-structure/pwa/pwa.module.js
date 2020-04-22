import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { ServiceWorkerModule, SwRegistrationOptions, } from '@angular/service-worker';
import { Config, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { AddToHomeScreenBannerComponent } from './components/add-to-home-screen-banner/add-to-home-screen-banner.component';
import { AddToHomeScreenBtnComponent } from './components/add-to-home-screen-btn/add-to-home-screen-btn.component';
import { defaultPWAModuleConfig } from './pwa.module-config';
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
                ServiceWorkerModule.register('/ngsw-worker.js'),
                I18nModule,
            ],
            providers: [
                provideDefaultConfig(defaultPWAModuleConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQkFBc0IsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUvRSxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFNBQTBCO0lBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7QUFDdkUsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsc0JBQXNCO0lBQy9DLElBQU0sTUFBTSxHQUFHLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQztJQUM1QyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBMEJEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF4QnJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0MsVUFBVTthQUNYO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO2dCQUM1QztvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixVQUFVLEVBQUUsdUJBQXVCO29CQUNuQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDOUIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Qsc0JBQXNCO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7WUFDM0UsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7U0FDdkUsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgaXNEZXZNb2RlLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VydmljZVdvcmtlck1vZHVsZSxcbiAgU3dSZWdpc3RyYXRpb25PcHRpb25zLFxufSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQgeyBDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyL2FkZC10by1ob21lLXNjcmVlbi1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtdG8taG9tZS1zY3JlZW4tYnRuL2FkZC10by1ob21lLXNjcmVlbi1idG4uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRQV0FNb2R1bGVDb25maWcsIFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4vcHdhLm1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHdhQ29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIHB3YUNvbmZpZzogUFdBTW9kdWxlQ29uZmlnXG4pOiBTd1JlZ2lzdHJhdGlvbk9wdGlvbnMge1xuICByZXR1cm4geyBlbmFibGVkOiAoIWlzRGV2TW9kZSgpICYmIHB3YUNvbmZpZy5wd2EuZW5hYmxlZCkgfHwgZmFsc2UgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUZhY3RvcnkoYWRkVG9Ib21lU2NyZWVuU2VydmljZSk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGFkZFRvSG9tZVNjcmVlblNlcnZpY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2VydmljZVdvcmtlck1vZHVsZS5yZWdpc3RlcignL25nc3ctd29ya2VyLmpzJyksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFBXQU1vZHVsZUNvbmZpZyksXG4gICAge1xuICAgICAgcHJvdmlkZTogU3dSZWdpc3RyYXRpb25PcHRpb25zLFxuICAgICAgdXNlRmFjdG9yeTogcHdhQ29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29uZmlnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUZhY3RvcnksXG4gICAgICBkZXBzOiBbQWRkVG9Ib21lU2NyZWVuU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIEFkZFRvSG9tZVNjcmVlblNlcnZpY2UsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHdhTW9kdWxlIHt9XG4iXX0=
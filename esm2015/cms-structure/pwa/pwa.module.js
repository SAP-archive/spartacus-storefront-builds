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
    const result = () => addToHomeScreenService;
    return result;
}
let PwaModule = class PwaModule {
};
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
export { PwaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsR0FDdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFL0UsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxTQUEwQjtJQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3ZFLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLHNCQUFzQjtJQUMvQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUM1QyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBMkJELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBRyxDQUFBO0FBQVosU0FBUztJQXpCckIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7WUFDL0MsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQy9DLFVBQVU7U0FDWDtRQUNELFNBQVMsRUFBRTtZQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO1lBQ2pEO2dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFVBQVUsRUFBRSx1QkFBdUI7Z0JBQ25DLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNmO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDOUIsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNELHNCQUFzQjtTQUN2QjtRQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO1FBQzNFLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO0tBQ3ZFLENBQUM7R0FDVyxTQUFTLENBQUc7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgaXNEZXZNb2RlLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VydmljZVdvcmtlck1vZHVsZSxcbiAgU3dSZWdpc3RyYXRpb25PcHRpb25zLFxufSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJhbm5lci9hZGQtdG8taG9tZS1zY3JlZW4tYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRUb0hvbWVTY3JlZW5CdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLXRvLWhvbWUtc2NyZWVuLWJ0bi9hZGQtdG8taG9tZS1zY3JlZW4tYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0UFdBTW9kdWxlQ29uZmlnLCBQV0FNb2R1bGVDb25maWcgfSBmcm9tICcuL3B3YS5tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHB3YUNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBwd2FDb25maWc6IFBXQU1vZHVsZUNvbmZpZ1xuKTogU3dSZWdpc3RyYXRpb25PcHRpb25zIHtcbiAgcmV0dXJuIHsgZW5hYmxlZDogKCFpc0Rldk1vZGUoKSAmJiBwd2FDb25maWcucHdhLmVuYWJsZWQpIHx8IGZhbHNlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwd2FGYWN0b3J5KGFkZFRvSG9tZVNjcmVlblNlcnZpY2UpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRQV0FNb2R1bGVDb25maWcpLFxuICAgIFNlcnZpY2VXb3JrZXJNb2R1bGUucmVnaXN0ZXIoJy9uZ3N3LXdvcmtlci5qcycpLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogUFdBTW9kdWxlQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU3dSZWdpc3RyYXRpb25PcHRpb25zLFxuICAgICAgdXNlRmFjdG9yeTogcHdhQ29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29uZmlnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHB3YUZhY3RvcnksXG4gICAgICBkZXBzOiBbQWRkVG9Ib21lU2NyZWVuU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIEFkZFRvSG9tZVNjcmVlblNlcnZpY2UsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZFRvSG9tZVNjcmVlbkJ0bkNvbXBvbmVudCwgQWRkVG9Ib21lU2NyZWVuQmFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHdhTW9kdWxlIHt9XG4iXX0=